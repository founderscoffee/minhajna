// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// What the screens show is worked out from the history (PRD §5.5). Each
// event belongs to exactly one layer, so a session's private note is its own
// event, apart from the session record.

import { compareDays, maxDay, type Day } from './day.ts';
import { ERASURE, HistoryLog, type Entry, type HistoryDeps, type HistoryStore } from './history.ts';
import { mayTravelAs, type Layer, type OutboundRoute } from './layers.ts';
import type { CalendarEntry } from './reference.ts';
import {
  compareHalves,
  compareSlots,
  type Course,
  type PrivateNote,
  type Pupil,
  type PupilMovement,
  type RollCall,
  type School,
  type SchoolClass,
  type SeatingPlan,
  type SessionRecord,
  type TeacherCard,
  type TimetableVersion,
} from './records.ts';

export type RecordEvent =
  | { readonly kind: 'teacher.set'; readonly card: TeacherCard }
  | { readonly kind: 'school.set'; readonly school: School }
  | { readonly kind: 'class.set'; readonly schoolClass: SchoolClass }
  | { readonly kind: 'pupil.set'; readonly pupil: Pupil }
  | { readonly kind: 'pupil.moved'; readonly pupilId: string; readonly movement: PupilMovement }
  | { readonly kind: 'course.set'; readonly course: Course }
  | { readonly kind: 'timetable.set'; readonly version: TimetableVersion }
  | { readonly kind: 'calendar.set'; readonly entry: CalendarEntry }
  // A session record never carries free text about why it changed: that is
  // private, and goes into the session's note (PRD §5.4).
  | { readonly kind: 'session.recorded'; readonly record: SessionRecord }
  | { readonly kind: 'session.noted'; readonly note: PrivateNote }
  // A roll call's correction carries its short reason, which is part of the
  // roll-call record (PRD §3.4, §5.5).
  | { readonly kind: 'roll-call.taken'; readonly rollCall: RollCall; readonly reason?: string }
  | { readonly kind: 'seating.set'; readonly plan: SeatingPlan };

export type RecordKind = RecordEvent['kind'];

// Every kind must be listed, or its events would be dropped when the state is
// built. The compiler checks that none is missing.
const KINDS: Readonly<Record<RecordKind, true>> = {
  'teacher.set': true,
  'school.set': true,
  'class.set': true,
  'pupil.set': true,
  'pupil.moved': true,
  'course.set': true,
  'timetable.set': true,
  'calendar.set': true,
  'session.recorded': true,
  'session.noted': true,
  'roll-call.taken': true,
  'seating.set': true,
};

/** The layer of every event. Sync, exports and shares check it (PRD §5.4). */
export function layerOf(event: RecordEvent): Layer {
  switch (event.kind) {
    case 'pupil.set':
    case 'pupil.moved':
    case 'roll-call.taken':
      return 'pupil-records';
    case 'session.noted':
    case 'seating.set':
      return 'private';
    case 'calendar.set':
      // The teacher's own layer holds training days, seminars and duties,
      // which stay private (PRD §4.5).
      return event.entry.layer === 'teacher' ? 'private' : 'lesson-record';
    case 'teacher.set':
    case 'school.set':
    case 'class.set':
    case 'course.set':
    case 'timetable.set':
    case 'session.recorded':
      return 'lesson-record';
  }
}

/** Which record an event sets. Events with the same key are versions of one record. */
function recordKey(event: RecordEvent): string {
  switch (event.kind) {
    case 'teacher.set':
      return 'teacher';
    case 'school.set':
      return `school:${event.school.id}`;
    case 'class.set':
      return `class:${event.schoolClass.id}`;
    case 'pupil.set':
      return `pupil:${event.pupil.id}`;
    case 'pupil.moved':
      // A pupil's movements are part of the pupil's record.
      return `pupil:${event.pupilId}`;
    case 'course.set':
      return `course:${event.course.id}`;
    case 'timetable.set':
      return `timetable:${event.version.id}`;
    case 'calendar.set':
      return `calendar:${event.entry.id}`;
    case 'session.recorded':
      return `session:${event.record.session.key}`;
    case 'session.noted':
      return `note:${event.note.sessionKey}`;
    case 'roll-call.taken':
      return `roll-call:${event.rollCall.unit}`;
    case 'seating.set':
      return `seating:${event.plan.classId}/${event.plan.groupId}`;
  }
}

/** One version of a record. Corrections add versions, and every version stays (PRD §3.1, rule 4). */
export interface Version<T> {
  readonly entry: string;
  readonly day: Day;
  readonly value: T;
  readonly reason?: string;
}

/** A timetable version, the day it was recorded, and the first day it applies (PRD §4.6). */
export interface RecordedTimetable {
  readonly version: TimetableVersion;
  /** The day of its history entry. */
  readonly recorded: Day;
  /** Its own `from` for the first version, and never earlier than `recorded` for a later one. */
  readonly from: Day;
}

export interface State {
  readonly teacher: TeacherCard | null;
  readonly schools: ReadonlyMap<string, School>;
  readonly classes: ReadonlyMap<string, SchoolClass>;
  readonly pupils: ReadonlyMap<string, Pupil>;
  readonly courses: ReadonlyMap<string, Course>;
  /** Every timetable version recorded, in the order they apply. */
  readonly timetables: readonly RecordedTimetable[];
  /** The entries the teacher added to the calendar. */
  readonly calendar: readonly CalendarEntry[];
  /** Every version of each session's record, by session key. The last is the current one. */
  readonly sessions: ReadonlyMap<string, readonly Version<SessionRecord>[]>;
  readonly notes: ReadonlyMap<string, PrivateNote>;
  /** Every version of each roll call, by unit key. The last is the current one. */
  readonly rollCalls: ReadonlyMap<string, readonly Version<RollCall>[]>;
  readonly seating: ReadonlyMap<string, SeatingPlan>;
}

/** The event an entry holds, or null once erased. */
export function eventOf(entry: Entry): RecordEvent | null {
  if (entry.kind === ERASURE || entry.content === null || !Object.hasOwn(KINDS, entry.kind)) return null;
  const body = entry.content.body;
  if (typeof body !== 'object' || body === null || !('kind' in body) || body.kind !== entry.kind) return null;
  // RecordBook opens a history only once it verifies, and only RecordBook
  // writes events into one. `buildState` trusts the entries it is given.
  return body as RecordEvent;
}

function versionOf<T>(entry: Entry, value: T, reason?: string): Version<T> {
  return { entry: entry.id, day: entry.day, value, ...(reason !== undefined && { reason }) };
}

interface Movement {
  readonly movement: PupilMovement;
  /** The place of the event that recorded it, in the history. */
  readonly order: number;
}

/**
 * A pupil's movements are those of their latest record plus every movement
 * recorded on its own, so setting the pupil again, to fix a name for
 * example, never loses one. The same movement recorded again on the same
 * day, such as a departure once the director confirms it, replaces the
 * earlier one.
 */
function withMovements(pupil: Pupil, order: number, moved: readonly Movement[]): Pupil {
  const latest = new Map<string, Movement>();
  const all = [...pupil.movements.map((movement) => ({ movement, order })), ...moved].sort((a, b) => a.order - b.order);
  for (const candidate of all) latest.set(`${candidate.movement.day}/${candidate.movement.kind}`, candidate);
  const movements = [...latest.values()]
    .sort((a, b) => compareDays(a.movement.day, b.movement.day) || a.order - b.order)
    .map((candidate) => candidate.movement);
  return { ...pupil, movements };
}

export function buildState(entries: readonly Entry[]): State {
  let teacher: TeacherCard | null = null;
  const schools = new Map<string, School>();
  const classes = new Map<string, SchoolClass>();
  const pupilSets = new Map<string, { readonly pupil: Pupil; readonly order: number }>();
  const moved = new Map<string, Movement[]>();
  const courses = new Map<string, Course>();
  const timetables: RecordedTimetable[] = [];
  const calendar = new Map<string, CalendarEntry>();
  const sessions = new Map<string, Version<SessionRecord>[]>();
  const notes = new Map<string, PrivateNote>();
  const rollCalls = new Map<string, Version<RollCall>[]>();
  const seating = new Map<string, SeatingPlan>();

  for (const [order, entry] of entries.entries()) {
    const event = eventOf(entry);
    if (event === null) continue;
    switch (event.kind) {
      case 'teacher.set':
        teacher = event.card;
        break;
      case 'school.set':
        schools.set(event.school.id, event.school);
        break;
      case 'class.set':
        classes.set(event.schoolClass.id, event.schoolClass);
        break;
      case 'pupil.set':
        pupilSets.set(event.pupil.id, { pupil: event.pupil, order });
        break;
      case 'pupil.moved':
        moved.set(event.pupilId, [...(moved.get(event.pupilId) ?? []), { movement: event.movement, order }]);
        break;
      case 'course.set':
        courses.set(event.course.id, event.course);
        break;
      case 'timetable.set':
        // The first version applies from its own day, so setup can fill in
        // the weeks already gone. A later one never reaches back before the
        // day it was recorded: the past never moves (PRD §4.6).
        timetables.push({
          version: event.version,
          recorded: entry.day,
          from: timetables.length === 0 ? event.version.from : maxDay(event.version.from, entry.day),
        });
        break;
      case 'calendar.set':
        calendar.set(event.entry.id, event.entry);
        break;
      case 'session.recorded': {
        const key = event.record.session.key;
        sessions.set(key, [...(sessions.get(key) ?? []), versionOf(entry, event.record)]);
        break;
      }
      case 'session.noted':
        notes.set(event.note.sessionKey, event.note);
        break;
      case 'roll-call.taken': {
        const key = event.rollCall.unit;
        rollCalls.set(key, [...(rollCalls.get(key) ?? []), versionOf(entry, event.rollCall, event.reason)]);
        break;
      }
      case 'seating.set':
        seating.set(`${event.plan.classId}/${event.plan.groupId}`, event.plan);
        break;
    }
  }

  const pupils = new Map<string, Pupil>();
  for (const [id, { pupil, order }] of pupilSets) pupils.set(id, withMovements(pupil, order, moved.get(id) ?? []));

  return {
    teacher,
    schools,
    classes,
    pupils,
    courses,
    // Sorting is stable, so of two versions from the same day the one recorded later applies.
    timetables: timetables.sort((a, b) => compareDays(a.from, b.from)),
    calendar: [...calendar.values()],
    sessions,
    notes,
    rollCalls,
    seating,
  };
}

/** The current version of a record, or null. */
export function current<T>(versions: readonly Version<T>[] | undefined): T | null {
  return versions?.at(-1)?.value ?? null;
}

function compareText(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

/**
 * The current version of each record, as the event that sets it, with
 * nothing from its history entry: no ID, place in the history, day or hash.
 * Sessions and roll calls come in the order of their own days, so not even
 * the order shows when they were recorded (PRD §7.6).
 */
function currentRecords(state: State): RecordEvent[] {
  const records: RecordEvent[] = [];
  if (state.teacher !== null) records.push({ kind: 'teacher.set', card: state.teacher });
  for (const school of state.schools.values()) records.push({ kind: 'school.set', school });
  for (const schoolClass of state.classes.values()) records.push({ kind: 'class.set', schoolClass });
  for (const pupil of state.pupils.values()) records.push({ kind: 'pupil.set', pupil });
  for (const course of state.courses.values()) records.push({ kind: 'course.set', course });
  // A version names the first day it applies, which can be later than the day the teacher gave it.
  for (const { version, from } of state.timetables) records.push({ kind: 'timetable.set', version: { ...version, from } });
  for (const entry of state.calendar) records.push({ kind: 'calendar.set', entry });
  const sessions = [...state.sessions.values()]
    .flatMap((versions) => versions.slice(-1))
    .map(({ value }) => value)
    .sort(
      (a, b) =>
        compareDays(a.session.day, b.session.day) ||
        compareSlots(a.session.slot, b.session.slot) ||
        compareText(a.session.key, b.session.key),
    );
  for (const record of sessions) records.push({ kind: 'session.recorded', record });
  for (const note of state.notes.values()) records.push({ kind: 'session.noted', note });
  const rollCalls = [...state.rollCalls.values()]
    .flatMap((versions) => versions.slice(-1))
    .sort(
      (a, b) =>
        compareDays(a.value.day, b.value.day) ||
        compareHalves(a.value.half, b.value.half) ||
        compareText(a.value.unit, b.value.unit),
    );
  for (const { value, reason } of rollCalls) {
    records.push({ kind: 'roll-call.taken', rollCall: value, ...(reason !== undefined && { reason }) });
  }
  for (const plan of state.seating.values()) records.push({ kind: 'seating.set', plan });
  return records;
}

/**
 * What may leave the teacher on `route`: the current version of each record
 * whose layer the route takes. History entries stay with the teacher, so no
 * entry's day or place in the history travels, and nobody can work out when
 * a record was made, such as the day a session was confirmed (PRD §5.4,
 * §7.6).
 */
export function recordsForRoute(state: State, route: OutboundRoute): RecordEvent[] {
  return currentRecords(state).filter((record) => mayTravelAs(layerOf(record), record.kind, route));
}

/**
 * The teacher's records and their history. Every change is stored before
 * the promise resolves, so nothing is lost (PRD §6.8).
 */
export class RecordBook {
  readonly #log: HistoryLog;
  #state: State;

  private constructor(log: HistoryLog) {
    this.#log = log;
    this.#state = buildState(log.entries);
  }

  /** Opens a stored history, but only one that verifies (`HistoryLog.open`). */
  static async open(store: HistoryStore, deps: HistoryDeps): Promise<RecordBook> {
    return new RecordBook(await HistoryLog.open(store, deps));
  }

  get state(): State {
    return this.#state;
  }

  get entries(): readonly Entry[] {
    return this.#log.entries;
  }

  async record(day: Day, event: RecordEvent): Promise<Entry> {
    const entry = await this.#log.append(day, layerOf(event), event.kind, event);
    // Rebuilding from the whole history keeps one path from history to
    // screen. A year's history is a few thousand entries, which rebuild in
    // milliseconds.
    this.#state = buildState(this.#log.entries);
    return entry;
  }

  async recordAll(day: Day, events: readonly RecordEvent[]): Promise<Entry[]> {
    const entries: Entry[] = [];
    for (const event of events) entries.push(await this.record(day, event));
    return entries;
  }

  /**
   * Erases whole records: the entries must hold every version of each record
   * they touch, such as a session's record and its corrections, a roll call
   * and its corrections, or a pupil and their movements. Erasing one version
   * alone would bring the one before it back (PRD §5.5).
   */
  async erase(day: Day, ids: readonly string[]): Promise<Entry> {
    const named = new Set(ids);
    const touched = new Set<string>();
    for (const id of named) {
      const entry = this.#log.entries.find((candidate) => candidate.id === id);
      const event = entry === undefined ? null : eventOf(entry);
      if (event === null) throw new RangeError('An erasure names an entry that holds no record');
      touched.add(recordKey(event));
    }
    for (const entry of this.#log.entries) {
      const event = eventOf(entry);
      if (event !== null && !named.has(entry.id) && touched.has(recordKey(event))) {
        throw new RangeError('An erasure must cover every version of each record it touches');
      }
    }
    const erasure = await this.#log.erase(day, [...named]);
    this.#state = buildState(this.#log.entries);
    return erasure;
  }
}
