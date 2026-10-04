// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// Reference data is public and versioned, and comes from the data repository
// (PRD §4.10, §5.3). Country specifics live here as data, never as code
// (PRD §1.14): the core knows no Algerian rule.

import type { Day, Weekday } from './day.ts';
import type { PlanPack } from './pack.ts';

/** A text in several languages, keyed by language code, such as `ar`, `fr` or `en`. */
export type LocalizedText = Readonly<Record<string, string>>;

/** How a session type moves the plan (PRD §4.7). */
export type Queue =
  /** The main plan. */
  | 'main'
  /** TD sessions have their own queue, which never advances the main plan. */
  | 'td'
  /** No plan item is proposed: the teacher records what was done. */
  | 'none';

export interface SessionType {
  readonly code: string;
  readonly queue: Queue;
  readonly name: LocalizedText;
}

/** Whether roll call is taken per half-day or per session (PRD §3.4). */
export type RollCallUnitKind = 'half-day' | 'session';

export interface Level {
  readonly code: string;
  readonly rollCallUnit: RollCallUnitKind;
  /** The usual session length, used to turn hour budgets into sessions (PRD §4.7). */
  readonly sessionMinutes: number;
  readonly name: LocalizedText;
}

export interface CountryProfile {
  /** The country code, such as `dz`. */
  readonly code: string;
  /** The first day of the school week. The working week is a setting, not an assumption (PRD §1.14). */
  readonly weekStartsOn: Weekday;
  readonly workingDays: readonly Weekday[];
  readonly levels: readonly Level[];
  readonly sessionTypes: readonly SessionType[];
}

export interface Term {
  readonly number: number;
  readonly from: Day;
  readonly to: Day;
}

export interface SchoolYear {
  /** Written as the documents print it, such as `2026-2027`. */
  readonly id: string;
  readonly from: Day;
  readonly to: Day;
  readonly terms: readonly Term[];
}

/** The four calendar layers, from broadest to narrowest (PRD §4.5). */
export type CalendarLayer = 'national' | 'zone' | 'school' | 'teacher';

export type CalendarEffect =
  /** Holidays: no sessions. */
  | 'no-school'
  /** Closures and suspensions: the sessions are lost, and counted apart. */
  | 'closure'
  /** Exam windows: the exam replaces the sessions. */
  | 'exam'
  /** Seminars, councils and other events: marked on Today, sessions unchanged. */
  | 'marker'
  /** The teaching week that holds the entry's first day is an A week, or a B week. */
  | 'week-a'
  | 'week-b';

/** Announced, expected (such as lunar dates, give or take a day) or projected (PRD §4.5). */
export type Confidence = 'announced' | 'expected' | 'projected';

export interface CalendarEntry {
  readonly id: string;
  readonly layer: CalendarLayer;
  /** For the zone layer: the zone or wilaya it covers. */
  readonly zone?: string;
  /** For the school layer: the school it covers. */
  readonly schoolId?: string;
  readonly from: Day;
  /** The last day, included. */
  readonly to: Day;
  readonly effect: CalendarEffect;
  /** Only these levels, if set. */
  readonly levels?: readonly string[];
  /** Only these grades, if set. */
  readonly grades?: readonly string[];
  /** For an exam window: the term it closes. */
  readonly term?: number;
  readonly name: LocalizedText;
  /** The text or notice it comes from. */
  readonly source: string;
  readonly confidence: Confidence;
}

/** Everything the app receives as reference data, rather than records the teacher keeps. */
export interface Reference {
  readonly country: CountryProfile;
  readonly year: SchoolYear;
  /** The national, zone and school layers, as received. */
  readonly calendar: readonly CalendarEntry[];
  /** Keyed by `packKey(id, release)`. */
  readonly packs: ReadonlyMap<string, PlanPack>;
}

export function packKey(id: string, release: string): string {
  return `${id}@${release}`;
}

export function findLevel(country: CountryProfile, code: string): Level {
  const level = country.levels.find((candidate) => candidate.code === code);
  if (level === undefined) throw new Error(`Unknown level: ${code}`);
  return level;
}

export function findSessionType(country: CountryProfile, code: string): SessionType {
  const type = country.sessionTypes.find((candidate) => candidate.code === code);
  if (type === undefined) throw new Error(`Unknown session type: ${code}`);
  return type;
}
