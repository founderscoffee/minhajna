// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// The engine proposes each session's lesson: the class's next unfinished
// item, from the first stage not yet covered (PRD §4.7). Only the teacher's
// confirmation records it (PRD §2.3, rule 1), and changing the proposal costs
// no more than confirming it (rule 2).
//
// Progress is counted in stages, not percentages. "Last stage reached" keeps
// an item at the head of the queue, and its remaining stages move to the next
// ordinary session of the same class and subject. Each stage covered is kept
// on its own, so a stage never counts as covered because a later one was.

import type { Context } from './context.ts';
import type { Day } from './day.ts';
import { budgetInSessions, queueItems, stageCount, stageNames, type PackItem, type PlanPack } from './pack.ts';
import { findLevel, findSessionType, packKey, type Queue } from './reference.ts';
import {
  wholeGroup,
  type Course,
  type Coverage,
  type Homework,
  type SchoolClass,
  type SessionRecord,
  type SessionRef,
} from './records.ts';
import { sessionsBetween, type Session } from './sessions.ts';
import { current } from './state.ts';

interface GroupProgress {
  /** The stages covered, numbered from 0. */
  readonly stages: Set<number>;
  spent: number;
}

interface ItemState {
  skipped: boolean;
  retaught: number;
  readonly groups: Map<string, GroupProgress>;
}

/**
 * How far a course has got in its plan. Coverage is kept per group, because
 * an item taught in half-groups is done for the class only when every
 * half-group has had it (PRD §4.7).
 */
export class Progress {
  readonly #whole: string;
  readonly #halves: readonly string[];
  readonly #items = new Map<string, ItemState>();

  constructor(whole: string, halves: readonly string[]) {
    this.#whole = whole;
    this.#halves = halves;
  }

  static of(schoolClass: SchoolClass): Progress {
    return new Progress(
      wholeGroup(schoolClass).id,
      schoolClass.groups.filter((group) => group.kind === 'half').map((group) => group.id),
    );
  }

  clone(): Progress {
    const copy = new Progress(this.#whole, this.#halves);
    for (const [id, state] of this.#items) {
      copy.#items.set(id, {
        skipped: state.skipped,
        retaught: state.retaught,
        groups: new Map(
          [...state.groups].map(([group, progress]) => [
            group,
            { stages: new Set(progress.stages), spent: progress.spent },
          ]),
        ),
      });
    }
    return copy;
  }

  apply(record: SessionRecord): void {
    const groupId = record.session.groupId;
    const sharing = record.coverage.filter((coverage) => coverage.op !== 'skipped').length;
    // A session spent on two merged items counts half a session for each.
    const share = sharing > 0 ? 1 / sharing : 0;
    for (const coverage of record.coverage) {
      const item = this.#item(coverage.item);
      switch (coverage.op) {
        case 'taught': {
          const group = this.#group(item, groupId);
          for (let stage = coverage.from; stage < coverage.to; stage += 1) group.stages.add(stage);
          group.spent += share;
          break;
        }
        case 'skipped':
          item.skipped = true;
          break;
        case 'retaught':
          // Teaching an item again never moves it through the plan, so it is
          // counted on its own, for plan feedback (PRD §4.9).
          item.retaught += 1;
          break;
      }
    }
  }

  /**
   * The stages a group has covered, in order: its own and the whole
   * class's, or, for the class, those that every half-group has had.
   */
  coveredStages(itemId: string, groupId: string): number[] {
    const item = this.#items.get(itemId);
    if (item === undefined) return [];
    const stages = new Set(item.groups.get(this.#whole)?.stages);
    if (groupId !== this.#whole) {
      for (const stage of item.groups.get(groupId)?.stages ?? []) stages.add(stage);
    } else if (this.#halves.length > 0) {
      const halves = this.#halves.map((id) => item.groups.get(id)?.stages ?? new Set<number>());
      for (const stage of halves[0] ?? []) if (halves.every((half) => half.has(stage))) stages.add(stage);
    }
    return [...stages].sort((a, b) => a - b);
  }

  /** How many stages a group has covered. */
  covered(itemId: string, groupId: string): number {
    return this.coveredStages(itemId, groupId).length;
  }

  /** The first stage a group has not covered, where its next session starts. */
  firstOpen(itemId: string, groupId: string): number {
    const stages = new Set(this.coveredStages(itemId, groupId));
    let stage = 0;
    while (stages.has(stage)) stage += 1;
    return stage;
  }

  /** Sessions spent teaching an item by a group, counting the whole class's sessions. */
  spent(itemId: string, groupId: string): number {
    const item = this.#items.get(itemId);
    if (item === undefined) return 0;
    const whole = item.groups.get(this.#whole)?.spent ?? 0;
    return groupId === this.#whole ? whole : whole + (item.groups.get(groupId)?.spent ?? 0);
  }

  skipped(itemId: string): boolean {
    return this.#items.get(itemId)?.skipped ?? false;
  }

  retaught(itemId: string): number {
    return this.#items.get(itemId)?.retaught ?? 0;
  }

  /** Skipped, or with every stage covered. */
  isFinished(pack: PlanPack, item: PackItem, groupId: string): boolean {
    return this.skipped(item.id) || this.firstOpen(item.id, groupId) >= stageCount(pack, item);
  }

  #item(id: string): ItemState {
    let item = this.#items.get(id);
    if (item === undefined) {
      item = { skipped: false, retaught: 0, groups: new Map() };
      this.#items.set(id, item);
    }
    return item;
  }

  #group(item: ItemState, groupId: string): GroupProgress {
    let group = item.groups.get(groupId);
    if (group === undefined) {
      group = { stages: new Set(), spent: 0 };
      item.groups.set(groupId, group);
    }
    return group;
  }
}

export interface Proposal {
  readonly queue: Exclude<Queue, 'none'>;
  readonly item: PackItem;
  /** The first stage not yet covered. The session starts at this stage. */
  readonly from: number;
  /**
   * Done as planned, the session covers stages `from` to `to`, not
   * included. Equal to `from` when the item goes on.
   */
  readonly to: number;
  readonly stages: number;
  readonly stageNames: readonly string[];
  /** Which of the item's budgeted sessions this one is, from 1. */
  readonly session: number;
  readonly budget: number;
  /** Carried over from an earlier session: the texts book reads "continued" (PRD §4.7). */
  readonly continued: boolean;
}

export interface ProposalInput {
  readonly queue: Queue;
  readonly groupId: string;
  readonly activity?: string;
  readonly sessionMinutes: number;
}

/**
 * The next unfinished item and its stages. When a slot names an activity,
 * as primary activity slots do, it takes the next item of that activity, and
 * a slot without one takes the next item that has none (PRD §4.7).
 */
export function propose(pack: PlanPack, progress: Progress, input: ProposalInput): Proposal | null {
  if (input.queue === 'none') return null;
  const items = queueItems(pack, input.queue);
  const open = items.filter((item) => !progress.isFinished(pack, item, input.groupId));
  const usesActivity = input.activity !== undefined && items.some((item) => item.activity === input.activity);
  const item = usesActivity
    ? open.find((candidate) => candidate.activity === input.activity)
    : (open.find((candidate) => candidate.activity === undefined) ?? open[0]);
  if (item === undefined) return null;

  const stages = stageCount(pack, item);
  const budget = budgetInSessions(pack, item, input.sessionMinutes);
  const from = progress.firstOpen(item.id, input.groupId);
  const spent = Math.floor(progress.spent(item.id, input.groupId));
  const session = spent + 1;
  // The stages are spread evenly over the item's budget. Once the budget is
  // used up, the proposal is to finish the item.
  const to = session >= budget ? stages : Math.max(from, Math.min(stages, Math.floor((session * stages) / budget)));
  return {
    queue: input.queue,
    item,
    from,
    to,
    stages,
    stageNames: stageNames(pack, item),
    session,
    budget,
    continued: progress.covered(item.id, input.groupId) > 0 || spent > 0,
  };
}

/** What the teacher chose for a session (PRD §3.3). */
export type Choice =
  /** Done as planned: one tap. */
  | { readonly outcome: 'done' }
  /** Last stage reached: the stage count covered once the session ended. */
  | { readonly outcome: 'partial'; readonly reached: number }
  /** Two items taught together: the proposed one and this one. */
  | { readonly outcome: 'merged'; readonly with: string }
  /** The proposed item left out. With `instead`, the next item was taught in its place. */
  | { readonly outcome: 'skipped'; readonly instead: boolean }
  /** An item taught again. */
  | { readonly outcome: 'retaught'; readonly item: string }
  | { readonly outcome: 'not-held' };

/** What else a session can record (PRD §3.3). */
export interface Details {
  readonly sessionType?: string;
  readonly homework?: Homework;
  readonly test?: string;
  readonly unplanned?: string;
  readonly factual?: string;
}

function findItem(pack: PlanPack | null, id: string): PackItem {
  const item = pack?.items.find((candidate) => candidate.id === id && candidate.kind !== 'unit');
  if (item === undefined) throw new RangeError(`Unknown plan item: ${id}`);
  return item;
}

function needProposal(proposal: Proposal | null): Proposal {
  if (proposal === null) throw new RangeError('This outcome needs a proposed item');
  return proposal;
}

/** The pack, progress and settings one course needs. */
export interface CourseSetup {
  readonly course: Course;
  readonly schoolClass: SchoolClass;
  readonly pack: PlanPack | null;
  /** True when the course pins a pack release that is not installed. */
  readonly packMissing: boolean;
  readonly sessionMinutes: number;
}

export function courseSetup(context: Context, courseId: string): CourseSetup {
  const { ref, state } = context;
  const course = state.courses.get(courseId);
  const schoolClass = course && state.classes.get(course.classId);
  if (course === undefined || schoolClass === undefined) throw new RangeError(`Unknown course: ${courseId}`);
  const pack = course.pack === null ? null : (ref.packs.get(packKey(course.pack.id, course.pack.release)) ?? null);
  return {
    course,
    schoolClass,
    pack,
    packMissing: course.pack !== null && pack === null,
    sessionMinutes: course.sessionMinutes ?? findLevel(ref.country, schoolClass.level).sessionMinutes,
  };
}

function proposalFor(
  context: Context,
  setup: CourseSetup,
  progress: Progress,
  session: Session,
  sessionType: string,
): Proposal | null {
  if (setup.pack === null) return null;
  return propose(setup.pack, progress, {
    queue: findSessionType(context.ref.country, sessionType).queue,
    groupId: session.groupId,
    ...(session.activity !== undefined && { activity: session.activity }),
    sessionMinutes: setup.sessionMinutes,
  });
}

function coverageFor(
  context: Context,
  setup: CourseSetup,
  progress: Progress,
  session: Session,
  proposal: Proposal | null,
  choice: Choice,
  sessionType: string,
): Coverage[] {
  switch (choice.outcome) {
    case 'done':
      return proposal === null ? [] : [{ op: 'taught', item: proposal.item.id, from: proposal.from, to: proposal.to }];
    case 'partial': {
      const p = needProposal(proposal);
      if (!Number.isInteger(choice.reached) || choice.reached < p.from || choice.reached > p.stages) {
        throw new RangeError('The stage reached is outside the proposed item');
      }
      return [{ op: 'taught', item: p.item.id, from: p.from, to: choice.reached }];
    }
    case 'merged': {
      const p = needProposal(proposal);
      const other = findItem(setup.pack, choice.with);
      if (other.id === p.item.id) throw new RangeError('An item cannot be merged with itself');
      const pack = setup.pack as PlanPack;
      return [
        { op: 'taught', item: p.item.id, from: p.from, to: p.stages },
        {
          op: 'taught',
          item: other.id,
          from: progress.firstOpen(other.id, session.groupId),
          to: stageCount(pack, other),
        },
      ];
    }
    case 'skipped': {
      const p = needProposal(proposal);
      const skipped: Coverage = { op: 'skipped', item: p.item.id };
      if (!choice.instead) return [skipped];
      const after = progress.clone();
      after.apply({
        session: refOf(session),
        outcome: 'skipped',
        sessionType,
        coverage: [skipped],
      });
      const next = proposalFor(context, setup, after, session, sessionType);
      return next === null ? [skipped] : [skipped, { op: 'taught', item: next.item.id, from: next.from, to: next.to }];
    }
    case 'retaught':
      return [{ op: 'retaught', item: findItem(setup.pack, choice.item).id }];
    case 'not-held':
      return [];
  }
}

export function refOf(session: Session): SessionRef {
  return {
    key: session.key,
    courseId: session.courseId,
    groupId: session.groupId,
    day: session.day,
    slot: session.slot,
  };
}

function recordOf(
  session: Session,
  choice: Choice,
  coverage: Coverage[],
  details: Details,
  sessionType: string,
): SessionRecord {
  return {
    session: refOf(session),
    outcome: choice.outcome,
    sessionType,
    coverage,
    ...(details.homework !== undefined && { homework: details.homework }),
    ...(details.test !== undefined && { test: details.test }),
    ...(details.unplanned !== undefined && { unplanned: details.unplanned }),
    ...(details.factual !== undefined && { factual: details.factual }),
  };
}

/** Called for each session of a course in order. Returns the record to count, if any. */
type Visitor = (session: Session, proposal: () => Proposal | null, progress: Progress) => SessionRecord | null;

/**
 * Goes through a course's sessions from the start of the year to `upTo`, in
 * order. Recorded sessions move the progress. For the others, `visit`
 * decides what to count: a proposal shown as if done, or a new record.
 * Returns the progress of the recorded sessions alone.
 */
function walk(context: Context, setup: CourseSetup, upTo: Day, ignore: ReadonlySet<string>, visit: Visitor): Progress {
  const { ref, state } = context;
  const recorded = Progress.of(setup.schoolClass);
  const chain = Progress.of(setup.schoolClass);
  for (const session of sessionsBetween(context, ref.year.from, upTo, new Set([setup.course.id]))) {
    const record = ignore.has(session.key) ? null : current(state.sessions.get(session.key));
    if (record !== null) {
      recorded.apply(record);
      chain.apply(record);
      continue;
    }
    const counted = visit(session, () => proposalFor(context, setup, chain, session, session.sessionType), chain);
    if (counted !== null) chain.apply(counted);
  }
  return recorded;
}

export interface CourseWalk {
  readonly setup: CourseSetup;
  /** For every ordinary session awaiting confirmation. */
  readonly proposals: ReadonlyMap<string, Proposal | null>;
  /** The progress of the recorded sessions alone. */
  readonly progress: Progress;
}

/**
 * The proposals for a course's sessions awaiting confirmation, up to
 * `upTo`. Each proposal follows the one before it, as if the earlier
 * sessions went as planned, so confirming a whole week gives exactly what
 * the screens showed.
 */
export function walkCourse(context: Context, courseId: string, upTo: Day): CourseWalk {
  const setup = courseSetup(context, courseId);
  const proposals = new Map<string, Proposal | null>();
  const progress = walk(context, setup, upTo, new Set(), (session, proposal) => {
    if (session.calendar !== null) return null;
    const p = proposal();
    proposals.set(session.key, p);
    return p === null
      ? null
      : recordOf(
          session,
          { outcome: 'done' },
          [{ op: 'taught', item: p.item.id, from: p.from, to: p.to }],
          {},
          session.sessionType,
        );
  });
  return { setup, proposals, progress };
}

export interface Confirmation {
  readonly sessionKey: string;
  /**
   * Done as planned when not set. For a correction, leaving it out keeps the
   * outcome and the stages already recorded.
   */
  readonly choice?: Choice;
  readonly details?: Details;
}

/** The details given, over a record's own. */
function withDetails(record: SessionRecord, details: Details): SessionRecord {
  return {
    ...record,
    ...(details.sessionType !== undefined && { sessionType: details.sessionType }),
    ...(details.homework !== undefined && { homework: details.homework }),
    ...(details.test !== undefined && { test: details.test }),
    ...(details.unplanned !== undefined && { unplanned: details.unplanned }),
    ...(details.factual !== undefined && { factual: details.factual }),
  };
}

/**
 * Records sessions of one course in order. A session that already has a
 * record gets a corrected version, and both versions stay. A correction
 * without a choice changes only the details it gives: it never records a
 * stage the teacher did not confirm (PRD §2.3, rule 1).
 */
export function confirmCourse(
  context: Context,
  courseId: string,
  confirmations: readonly Confirmation[],
  upTo: Day,
): SessionRecord[] {
  const setup = courseSetup(context, courseId);
  const wanted = new Map(confirmations.map((confirmation) => [confirmation.sessionKey, confirmation]));
  const records: SessionRecord[] = [];
  walk(context, setup, upTo, new Set(wanted.keys()), (session, proposal, progress) => {
    const confirmation = wanted.get(session.key);
    if (confirmation === undefined) {
      if (session.calendar !== null) return null;
      const p = proposal();
      return p === null
        ? null
        : recordOf(
            session,
            { outcome: 'done' },
            [{ op: 'taught', item: p.item.id, from: p.from, to: p.to }],
            {},
            session.sessionType,
          );
    }
    const details = confirmation.details ?? {};
    const recorded = current(context.state.sessions.get(session.key));
    let record: SessionRecord;
    if (confirmation.choice === undefined && recorded !== null) {
      record = withDetails(recorded, details);
    } else {
      const choice = confirmation.choice ?? { outcome: 'done' };
      const sessionType = details.sessionType ?? session.sessionType;
      const p = proposalFor(context, setup, progress, session, sessionType);
      record = recordOf(
        session,
        choice,
        coverageFor(context, setup, progress, session, p, choice, sessionType),
        details,
        sessionType,
      );
    }
    records.push(record);
    wanted.delete(session.key);
    return record;
  });
  if (wanted.size > 0) throw new RangeError(`Unknown session: ${[...wanted.keys()].join(', ')}`);
  return records;
}
