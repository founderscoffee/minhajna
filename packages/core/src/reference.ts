// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// Reference data is public and versioned, and comes from the data repository
// (PRD §4.10, §5.3). Country specifics live here as data, never as code
// (PRD §1.14): the core knows no Algerian rule.

import { compareDays, type Day, type Weekday } from './day.ts';
import type { PlanPack } from './pack.ts';
import { at, isFields, LANGUAGE, Reader, RELEASE, type Fields, type ParseResult } from './read.ts';

/** A text in several languages, keyed by language code, such as `ar`, `fr` or `en`. */
export type LocalizedText = Readonly<Record<string, string>>;

/** How a session type moves the plan (PRD §4.7). */
export const QUEUES = [
  /** The main plan. */
  'main',
  /** TD sessions have their own queue, which never advances the main plan. */
  'td',
  /** No plan item is proposed: the teacher records what was done. */
  'none',
] as const;

export type Queue = (typeof QUEUES)[number];

export interface SessionType {
  readonly code: string;
  readonly queue: Queue;
  readonly name: LocalizedText;
}

/** Whether roll call is taken per half-day or per session (PRD §3.4). */
export const ROLL_CALL_UNITS = ['half-day', 'session'] as const;

export type RollCallUnitKind = (typeof ROLL_CALL_UNITS)[number];

/** A year of a level, such as the first year of middle school. Its code is unique in the profile. */
export interface Grade {
  readonly code: string;
  readonly name: LocalizedText;
}

export interface Level {
  readonly code: string;
  readonly rollCallUnit: RollCallUnitKind;
  /** The usual session length, used to turn hour budgets into sessions (PRD §4.7). */
  readonly sessionMinutes: number;
  readonly name: LocalizedText;
  /** In order, from the first year to the last. */
  readonly grades: readonly Grade[];
}

export interface Subject {
  readonly code: string;
  readonly name: LocalizedText;
  /** The levels that teach it. */
  readonly levels: readonly string[];
}

export interface CountryProfile {
  /** The country code, such as `dz`. */
  readonly code: string;
  /** The profile's release, such as `2026.1`. */
  readonly release: string;
  /** The first day of the school week. The working week is a setting, not an assumption (PRD §1.14). */
  readonly weekStartsOn: Weekday;
  readonly workingDays: readonly Weekday[];
  readonly levels: readonly Level[];
  readonly subjects: readonly Subject[];
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
  /** The texts or notices the dates come from. */
  readonly source: string;
}

/** The four calendar layers, from broadest to narrowest (PRD §4.5). */
export const CALENDAR_LAYERS = ['national', 'zone', 'school', 'teacher'] as const;

export type CalendarLayer = (typeof CALENDAR_LAYERS)[number];

export const CALENDAR_EFFECTS = [
  /** Holidays: no sessions. */
  'no-school',
  /** Closures and suspensions: the sessions are lost, and counted apart. */
  'closure',
  /** Exam windows: the exam replaces the sessions. */
  'exam',
  /** Seminars, councils and other events: marked on Today, sessions unchanged. */
  'marker',
  /** The teaching week that holds the entry's first day is an A week, or a B week. */
  'week-a',
  'week-b',
] as const;

export type CalendarEffect = (typeof CALENDAR_EFFECTS)[number];

/** Announced, expected (such as lunar dates, give or take a day) or projected (PRD §4.5). */
export const CONFIDENCES = ['announced', 'expected', 'projected'] as const;

export type Confidence = (typeof CONFIDENCES)[number];

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

/** A school year and its calendar entries, as one release of reference data (PRD §4.5, §4.8). */
export interface SchoolCalendar {
  readonly country: string;
  readonly release: string;
  readonly year: SchoolYear;
  readonly entries: readonly CalendarEntry[];
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

const COUNTRY = /^[a-z]{2}$/;
/** The code of a level, grade, subject or session type, such as `cem`, `1am` or `math`. */
const CODE = /^[a-z0-9][a-z0-9-]{0,31}$/;
const YEAR_ID = /^(\d{4})-(\d{4})$/;
const ENTRY_ID = /^[A-Za-z0-9._-]{1,64}$/;
/** A zone or a school, as the layers name them. */
const PLACE = /^[A-Za-z0-9._-]{1,64}$/;
/** The teacher's own layer never comes in a file: it stays on the teacher's devices (PRD §4.5). */
const FILE_LAYERS = ['national', 'zone', 'school'] as const;

function readName(reader: Reader, fields: Fields, path: string): LocalizedText | undefined {
  const value = fields['name'];
  const texts = isFields(value) ? Object.entries(value) : [];
  const valid = texts.every(
    ([language, text]) => LANGUAGE.test(language) && typeof text === 'string' && text.trim() !== '',
  );
  if (texts.length === 0 || !valid) {
    reader.fail(at(path, 'name'), value === undefined ? 'required' : 'invalid');
    return undefined;
  }
  return Object.fromEntries(texts) as LocalizedText;
}

function readWeekday(reader: Reader, value: unknown, path: string): Weekday | undefined {
  if (typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 6) return value as Weekday;
  reader.fail(path, value === undefined ? 'required' : 'invalid');
  return undefined;
}

/** The codes read so far, so that a code is used only once and references can be checked. */
interface KnownCodes {
  readonly levels: Set<string>;
  /** Unique across the profile, since entries and classes name a grade without its level. */
  readonly grades: Set<string>;
}

/** Reports a code already used in the same list. */
function distinct(reader: Reader, seen: Set<string>, code: string, path: string): void {
  if (code === '') return;
  if (seen.has(code)) reader.fail(at(path, 'code'), 'duplicate');
  seen.add(code);
}

function levelCodes(profile: Pick<CountryProfile, 'levels'>): string[] {
  return profile.levels.map((level) => level.code);
}

function gradeCodes(profile: Pick<CountryProfile, 'levels'>): string[] {
  return profile.levels.flatMap((level) => level.grades.map((grade) => grade.code));
}

/** A zone entry names its zone and a school entry its school. No other entry names either. */
function placeFits(reader: Reader, raw: Fields, key: 'zone' | 'schoolId', needed: boolean, path: string): void {
  if (needed && raw[key] === undefined) reader.fail(at(path, key), 'required');
  if (!needed && raw[key] !== undefined) reader.fail(at(path, key), 'invalid');
}

/** The level's code counts as known even when another field is wrong, so the problem is reported once. */
function readLevel(reader: Reader, raw: unknown, path: string, known: KnownCodes): Level | undefined {
  if (!isFields(raw)) {
    reader.fail(path, 'invalid');
    return undefined;
  }
  const code = reader.requiredText(raw, 'code', path, CODE);
  distinct(reader, known.levels, code, path);
  const rollCallUnit = reader.oneOf(raw, 'rollCallUnit', path, ROLL_CALL_UNITS);
  const sessionMinutes = reader.requiredNumber(raw, 'sessionMinutes', path, true);
  const name = readName(reader, raw, path);
  const levelGrades = reader.list(
    raw,
    'grades',
    path,
    (rawGrade, gradePath) => {
      if (!isFields(rawGrade)) {
        reader.fail(gradePath, 'invalid');
        return undefined;
      }
      const gradeCode = reader.requiredText(rawGrade, 'code', gradePath, CODE);
      distinct(reader, known.grades, gradeCode, gradePath);
      const gradeName = readName(reader, rawGrade, gradePath);
      return gradeName === undefined ? undefined : { code: gradeCode, name: gradeName };
    },
    { nonEmpty: true },
  );
  if (rollCallUnit === undefined || sessionMinutes === undefined || name === undefined) return undefined;
  return { code, rollCallUnit, sessionMinutes, name, grades: levelGrades };
}

/** Reads a country profile from parsed JSON, keeping only the format's fields. */
export function parseCountryProfile(input: unknown): ParseResult<CountryProfile> {
  const reader = new Reader();
  if (!isFields(input)) return { ok: false, problems: [{ path: '', problem: 'invalid' }] };
  if (input['format'] !== 1) reader.fail('format', input['format'] === undefined ? 'required' : 'invalid');

  const code = reader.requiredText(input, 'code', '', COUNTRY);
  const release = reader.requiredText(input, 'release', '', RELEASE);
  const weekStartsOn = readWeekday(reader, input['weekStartsOn'], 'weekStartsOn');

  const rawDays = input['workingDays'];
  const workingDays: Weekday[] = [];
  if (Array.isArray(rawDays) && rawDays.length > 0 && new Set(rawDays).size === rawDays.length) {
    rawDays.forEach((raw: unknown, index) => {
      const day = readWeekday(reader, raw, `workingDays[${index}]`);
      if (day !== undefined) workingDays.push(day);
    });
  } else {
    reader.fail('workingDays', rawDays === undefined ? 'required' : 'invalid');
  }

  const known: KnownCodes = { levels: new Set(), grades: new Set() };
  const levels = reader.list(input, 'levels', '', (raw, path) => readLevel(reader, raw, path, known), {
    nonEmpty: true,
  });

  const subjectCodes = new Set<string>();
  const subjects = reader.list(
    input,
    'subjects',
    '',
    (raw, path) => {
      if (!isFields(raw)) {
        reader.fail(path, 'invalid');
        return undefined;
      }
      const subjectCode = reader.requiredText(raw, 'code', path, CODE);
      distinct(reader, subjectCodes, subjectCode, path);
      const name = readName(reader, raw, path);
      const subjectLevels = reader.codes(raw, 'levels', path, [...known.levels], true);
      return name === undefined || subjectLevels === undefined
        ? undefined
        : { code: subjectCode, name, levels: subjectLevels };
    },
    { nonEmpty: true },
  );

  const typeCodes = new Set<string>();
  const sessionTypes = reader.list(
    input,
    'sessionTypes',
    '',
    (raw, path) => {
      if (!isFields(raw)) {
        reader.fail(path, 'invalid');
        return undefined;
      }
      const typeCode = reader.requiredText(raw, 'code', path, CODE);
      distinct(reader, typeCodes, typeCode, path);
      const queue = reader.oneOf(raw, 'queue', path, QUEUES);
      const name = readName(reader, raw, path);
      return queue === undefined || name === undefined ? undefined : { code: typeCode, queue, name };
    },
    { nonEmpty: true },
  );

  if (reader.problems.length > 0 || weekStartsOn === undefined) return { ok: false, problems: reader.problems };
  return { ok: true, value: { code, release, weekStartsOn, workingDays, levels, subjects, sessionTypes } };
}

function readYear(reader: Reader, value: unknown): SchoolYear | undefined {
  const path = 'year';
  if (!isFields(value)) {
    reader.fail(path, value === undefined ? 'required' : 'invalid');
    return undefined;
  }
  const id = reader.requiredText(value, 'id', path, YEAR_ID);
  const match = YEAR_ID.exec(id);
  if (match !== null && Number(match[2]) !== Number(match[1]) + 1) reader.fail(at(path, 'id'), 'invalid');
  const span = reader.span(value, path);
  const source = reader.requiredText(value, 'source', path);

  const before = reader.problems.length;
  const terms = reader.list(
    value,
    'terms',
    path,
    (raw, termPath) => {
      if (!isFields(raw)) {
        reader.fail(termPath, 'invalid');
        return undefined;
      }
      const number = reader.requiredNumber(raw, 'number', termPath, true);
      const termSpan = reader.span(raw, termPath);
      return number === undefined || termSpan === undefined ? undefined : { number, ...termSpan };
    },
    { nonEmpty: true },
  );
  // Terms are numbered from 1, lie within the year, and each starts after the one before it ends.
  if (span !== undefined && reader.problems.length === before) {
    terms.forEach((term, index) => {
      const termPath = `${path}.terms[${index}]`;
      const previous = terms[index - 1];
      const startsInTime =
        previous === undefined ? compareDays(term.from, span.from) >= 0 : compareDays(term.from, previous.to) > 0;
      if (term.number !== index + 1) reader.fail(at(termPath, 'number'), 'invalid');
      if (!startsInTime) reader.fail(at(termPath, 'from'), 'invalid');
      if (compareDays(term.to, span.to) > 0) reader.fail(at(termPath, 'to'), 'invalid');
    });
  }
  return span === undefined ? undefined : { id, from: span.from, to: span.to, terms, source };
}

function readEntry(
  reader: Reader,
  raw: unknown,
  path: string,
  profile: CountryProfile,
  year: SchoolYear | undefined,
): CalendarEntry | undefined {
  if (!isFields(raw)) {
    reader.fail(path, 'invalid');
    return undefined;
  }
  const id = reader.requiredText(raw, 'id', path, ENTRY_ID);
  const layer = reader.oneOf(raw, 'layer', path, FILE_LAYERS);
  const zone = reader.text(raw, 'zone', path, PLACE);
  const schoolId = reader.text(raw, 'schoolId', path, PLACE);
  if (layer !== undefined) {
    placeFits(reader, raw, 'zone', layer === 'zone', path);
    placeFits(reader, raw, 'schoolId', layer === 'school', path);
  }
  const span = reader.span(raw, path);
  const effect = reader.oneOf(raw, 'effect', path, CALENDAR_EFFECTS);
  const levels = reader.codes(raw, 'levels', path, levelCodes(profile), false);
  // With levels as well, every grade belongs to one of them.
  const grades = reader.codes(raw, 'grades', path, gradeCodes(profile), false);
  if (grades !== undefined && levels !== undefined) {
    const allowed = gradeCodes({ levels: profile.levels.filter((level) => levels.includes(level.code)) });
    if (!grades.every((code) => allowed.includes(code))) reader.fail(at(path, 'grades'), 'invalid');
  }
  const term = reader.number(raw, 'term', path, true);
  if (term !== undefined && year !== undefined && !year.terms.some((candidate) => candidate.number === term)) {
    reader.fail(at(path, 'term'), 'unknown-reference');
  }
  const name = readName(reader, raw, path);
  const source = reader.requiredText(raw, 'source', path);
  const confidence = reader.oneOf(raw, 'confidence', path, CONFIDENCES);
  const complete = layer !== undefined && span !== undefined && effect !== undefined && name !== undefined;
  if (!complete || confidence === undefined) return undefined;
  return {
    id,
    layer,
    ...(zone !== undefined && { zone }),
    ...(schoolId !== undefined && { schoolId }),
    from: span.from,
    to: span.to,
    effect,
    ...(levels !== undefined && { levels }),
    ...(grades !== undefined && { grades }),
    ...(term !== undefined && { term }),
    name,
    source,
    confidence,
  };
}

/**
 * Reads a school calendar from parsed JSON, keeping only the format's fields.
 * Its levels and grades must be the profile's.
 */
export function parseSchoolCalendar(input: unknown, profile: CountryProfile): ParseResult<SchoolCalendar> {
  const reader = new Reader();
  if (!isFields(input)) return { ok: false, problems: [{ path: '', problem: 'invalid' }] };
  if (input['format'] !== 1) reader.fail('format', input['format'] === undefined ? 'required' : 'invalid');

  const country = reader.requiredText(input, 'country', '', COUNTRY);
  if (country !== '' && country !== profile.code) reader.fail('country', 'unknown-reference');
  const release = reader.requiredText(input, 'release', '', RELEASE);
  const year = readYear(reader, input['year']);

  const ids = new Set<string>();
  const entries = reader.list(
    input,
    'entries',
    '',
    (raw, path) => {
      const entry = readEntry(reader, raw, path, profile, year);
      if (entry !== undefined) {
        if (ids.has(entry.id)) reader.fail(at(path, 'id'), 'duplicate');
        ids.add(entry.id);
      }
      return entry;
    },
    { nonEmpty: false },
  );

  if (reader.problems.length > 0 || year === undefined) return { ok: false, problems: reader.problems };
  return { ok: true, value: { country, release, year, entries } };
}
