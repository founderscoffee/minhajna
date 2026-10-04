// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// Made-up data only (PRD §5.12). The calendar, the plans, the schools and
// the pupils are all invented. The country profile is modelled on Algeria's
// levels and session types; the real one lives in the data repository.

import {
  MemoryStore,
  RecordBook,
  makeContext,
  packKey,
  parseDay,
  parsePlanPack,
  type CalendarEntry,
  type Context,
  type CountryProfile,
  type Day,
  type PlanPack,
  type Pupil,
  type RecordEvent,
  type Reference,
  type SchoolYear,
  type TimetableEntry,
} from '../src/index.ts';
import { deps } from './support.ts';

export const d = parseDay;

export const country: CountryProfile = {
  code: 'dz',
  weekStartsOn: 0,
  workingDays: [0, 1, 2, 3, 4],
  levels: [
    { code: 'primary', rollCallUnit: 'half-day', sessionMinutes: 45, name: { en: 'Primary' } },
    { code: 'cem', rollCallUnit: 'session', sessionMinutes: 60, name: { en: 'Middle school' } },
    { code: 'lycee', rollCallUnit: 'session', sessionMinutes: 60, name: { en: 'Secondary school' } },
  ],
  sessionTypes: [
    { code: 'lesson', queue: 'main', name: { en: 'Lesson' } },
    { code: 'integration', queue: 'main', name: { en: 'Integration' } },
    { code: 'td', queue: 'td', name: { en: 'Guided work' } },
    { code: 'remediation', queue: 'none', name: { en: 'Remediation' } },
    { code: 'reception', queue: 'none', name: { en: 'Reception' } },
    { code: 'free', queue: 'none', name: { en: 'Free slot' } },
    { code: 'test', queue: 'none', name: { en: 'Test' } },
    { code: 'exam', queue: 'none', name: { en: 'Exam' } },
  ],
};

export const year: SchoolYear = {
  id: '2026-2027',
  from: d('2026-09-20'),
  to: d('2027-06-10'),
  terms: [
    { number: 1, from: d('2026-09-20'), to: d('2026-12-17') },
    { number: 2, from: d('2027-01-03'), to: d('2027-03-18') },
    { number: 3, from: d('2027-04-04'), to: d('2027-06-10') },
  ],
};

function entry(fields: Omit<CalendarEntry, 'source' | 'confidence'>): CalendarEntry {
  return { source: 'made up for tests', confidence: 'announced', ...fields };
}

export const calendar: readonly CalendarEntry[] = [
  entry({ id: 'autumn', layer: 'national', from: d('2026-10-29'), to: d('2026-11-07'), effect: 'no-school', name: { en: 'Autumn holidays' } }),
  entry({ id: 'storm', layer: 'zone', zone: '16', from: d('2026-11-18'), to: d('2026-11-18'), effect: 'closure', name: { en: 'Weather closure' } }),
  entry({ id: 'storm-elsewhere', layer: 'zone', zone: '31', from: d('2026-11-22'), to: d('2026-11-22'), effect: 'closure', name: { en: 'Weather closure' } }),
  entry({ id: 'exams-1', layer: 'national', from: d('2026-12-06'), to: d('2026-12-10'), effect: 'exam', levels: ['cem'], term: 1, name: { en: 'Term 1 exams' } }),
  entry({ id: 'winter', layer: 'national', from: d('2026-12-18'), to: d('2027-01-02'), effect: 'no-school', name: { en: 'Winter holidays' } }),
  entry({ id: 'term-2-weeks', layer: 'national', from: d('2027-01-03'), to: d('2027-01-03'), effect: 'week-a', name: { en: 'Term 2 starts on an A week' } }),
  entry({ id: 'spring', layer: 'national', from: d('2027-03-19'), to: d('2027-04-03'), effect: 'no-school', name: { en: 'Spring holidays' } }),
];

/** A made-up budget pack, shaped like a CEM maths plan. */
export const mathPackSource = {
  format: 1,
  id: 'dz.cem.1am.math.example',
  release: '2026.1',
  status: 'example',
  licence: 'full-text',
  language: 'en',
  anchor: { kind: 'budgets', unit: 'hours' },
  provenance: { issuer: 'Made up for tests', edition: 'example' },
  stageTemplates: [{ id: 'std', stages: ['Warm-up', 'Construction', 'Practice', 'Assessment'] }],
  items: [
    { id: 'd1', kind: 'diagnostic', title: 'Diagnostic assessment', budget: 1, buffer: true, term: 1 },
    { id: 'u1', kind: 'unit', title: 'Whole numbers' },
    { id: 'l1', kind: 'lesson', title: 'Reading and writing whole numbers', unit: 'u1', budget: 2, stages: 'std', term: 1 },
    { id: 'l2', kind: 'lesson', title: 'Comparing and ordering', unit: 'u1', budget: 1, stages: 'std', term: 1 },
    { id: 'l3', kind: 'lesson', title: 'Adding whole numbers', unit: 'u1', budget: 1, term: 1 },
    { id: 'l4', kind: 'lesson', title: 'Subtracting whole numbers', unit: 'u1', budget: 2, term: 1 },
    { id: 't1', kind: 'td', title: 'Number line practice', unit: 'u1', budget: 1 },
    { id: 't2', kind: 'td', title: 'Mental arithmetic', unit: 'u1', budget: 1 },
    { id: 'i1', kind: 'integration', title: 'Planning a class trip', unit: 'u1', budget: 1, term: 1 },
    { id: 'r1', kind: 'assessment-remediation', title: 'Assessment and remediation', unit: 'u1', budget: 2, buffer: true, term: 1 },
    { id: 'u2', kind: 'unit', title: 'Fractions' },
    { id: 'l5', kind: 'lesson', title: 'Fractions as parts of a whole', unit: 'u2', budget: 2, stages: 'std', term: 1 },
    { id: 'l6', kind: 'lesson', title: 'Equivalent fractions', unit: 'u2', budget: 2, optional: true, term: 2 },
    { id: 'l7', kind: 'lesson', title: 'Comparing fractions', unit: 'u2', budget: 1, term: 2 },
  ],
  merges: [['l2', 'l3']],
};

/** A made-up week pack, shaped like a primary language plan with activity slots. */
export const languagePackSource = {
  format: 1,
  id: 'dz.primary.5ap.language.example',
  release: '2026.1',
  status: 'example',
  licence: 'full-text',
  language: 'en',
  anchor: { kind: 'weeks' },
  provenance: { issuer: 'Made up for tests', edition: 'example' },
  items: [
    { id: 'r1', kind: 'lesson', title: 'Reading 1', week: 1, activity: 'reading', term: 1 },
    { id: 'w1', kind: 'lesson', title: 'Writing 1', week: 1, activity: 'writing', term: 1 },
    { id: 's1', kind: 'lesson', title: 'Speaking 1', week: 1, term: 1 },
    { id: 'r2', kind: 'lesson', title: 'Reading 2', week: 1, activity: 'reading', term: 1 },
    { id: 'w2', kind: 'lesson', title: 'Writing 2', week: 1, activity: 'writing', term: 1 },
    { id: 'r3', kind: 'lesson', title: 'Reading 3', week: 2, activity: 'reading', term: 1 },
    { id: 'w3', kind: 'lesson', title: 'Writing 3', week: 2, activity: 'writing', term: 1 },
    { id: 's2', kind: 'lesson', title: 'Speaking 2', week: 2, term: 1 },
    { id: 'r4', kind: 'lesson', title: 'Reading 4', week: 2, activity: 'reading', term: 1 },
    { id: 'w4', kind: 'lesson', title: 'Writing 4', week: 2, activity: 'writing', term: 1 },
    { id: 'b1', kind: 'assessment-remediation', title: 'Integration and remediation', week: 3, buffer: true, term: 1 },
  ],
};

function readPack(source: unknown): PlanPack {
  const result = parsePlanPack(source);
  if (!result.ok) throw new Error(`Fixture pack is invalid: ${JSON.stringify(result.problems)}`);
  return result.value;
}

export const mathPack = readPack(mathPackSource);
export const languagePack = readPack(languagePackSource);

export const reference: Reference = {
  country,
  year,
  calendar,
  packs: new Map([
    [packKey(mathPack.id, mathPack.release), mathPack],
    [packKey(languagePack.id, languagePack.release), languagePack],
  ]),
};

const SETUP_DAY = d('2026-09-13');

function pupil(
  id: string,
  classId: string,
  name: string,
  latinName: string,
  sex: 'f' | 'm',
  groups: string[] = [],
): Pupil {
  return { id, classId, registration: `00000000${id.slice(1)}`, name, latinName, sex, groups, movements: [] };
}

/** A CEM teacher with one class split into two half-groups for TD. */
export function cemEvents(): RecordEvent[] {
  const lesson = (id: string, weekday: TimetableEntry['weekday'], half: 'morning' | 'afternoon', index: number): TimetableEntry => ({
    id,
    weekday,
    slot: { half, index },
    courseId: 'c-math',
    groupId: 'g-all',
    weeks: 'every',
    sessionType: 'lesson',
  });
  return [
    { kind: 'teacher.set', card: { name: 'Example Teacher', subjects: ['math'] } },
    { kind: 'school.set', school: { id: 's-cem', name: 'Example middle school', level: 'cem', zone: '16' } },
    {
      kind: 'class.set',
      schoolClass: {
        id: 'k-1am2',
        schoolId: 's-cem',
        level: 'cem',
        grade: '1am',
        name: '1AM2',
        groups: [
          { id: 'g-all', kind: 'whole', name: '1AM2' },
          { id: 'g-1', kind: 'half', name: 'Group 1' },
          { id: 'g-2', kind: 'half', name: 'Group 2' },
        ],
      },
    },
    ...[
      pupil('p01', 'k-1am2', 'أمينة بن علي', 'Amina Benali', 'f', ['g-1']),
      pupil('p02', 'k-1am2', 'محمد الأمين بن علي', 'Mohamed El Amine Benali', 'm', ['g-1']),
      pupil('p03', 'k-1am2', 'إسراء بوزيد', 'Israa Bouzid', 'f', ['g-1']),
      pupil('p04', 'k-1am2', 'عبد الرحمن بن عبد الله آيت مسعود', 'Abderrahmane Ben Abdellah Ait Messaoud', 'm', ['g-1']),
      pupil('p05', 'k-1am2', 'رؤى قاسمي', 'Rouaa Kacimi', 'f', ['g-1']),
      pupil('p06', 'k-1am2', 'يوسف شعبان', 'Youcef Chaabane', 'm', ['g-2']),
      pupil('p07', 'k-1am2', 'هبة الله مرابط', 'Hibat Allah Merabet', 'f', ['g-2']),
      pupil('p08', 'k-1am2', 'مؤمن بلقاسم', 'Moumen Belkacem', 'm', ['g-2']),
      pupil('p09', 'k-1am2', 'آية زروقي', 'Aya Zerrouki', 'f', ['g-2']),
      pupil('p10', 'k-1am2', 'لؤي بن علي', 'Louai Benali', 'm', ['g-2']),
    ].map((p): RecordEvent => ({ kind: 'pupil.set', pupil: p })),
    {
      kind: 'course.set',
      course: {
        id: 'c-math',
        classId: 'k-1am2',
        subject: 'math',
        year: '2026-2027',
        pack: { id: mathPack.id, release: mathPack.release },
      },
    },
    {
      kind: 'timetable.set',
      version: {
        id: 'v1',
        from: d('2026-09-20'),
        source: 'hand',
        blocks: [],
        entries: [
          lesson('e-sun', 0, 'morning', 1),
          lesson('e-mon', 1, 'morning', 2),
          { id: 'e-tue-1', weekday: 2, slot: { half: 'afternoon', index: 1 }, courseId: 'c-math', groupId: 'g-1', weeks: 'A', sessionType: 'td' },
          { id: 'e-tue-2', weekday: 2, slot: { half: 'afternoon', index: 1 }, courseId: 'c-math', groupId: 'g-2', weeks: 'B', sessionType: 'td' },
          lesson('e-wed', 3, 'morning', 3),
          lesson('e-thu', 4, 'morning', 1),
        ],
      },
    },
  ];
}

/** A primary teacher with one class: activity slots and half-day roll call. */
export function primaryEvents(): RecordEvent[] {
  const slot = (
    id: string,
    weekday: TimetableEntry['weekday'],
    half: 'morning' | 'afternoon',
    index: number,
    activity?: string,
  ): TimetableEntry => ({
    id,
    weekday,
    slot: { half, index },
    courseId: 'c-lang',
    groupId: 'h-all',
    weeks: 'every',
    sessionType: 'lesson',
    ...(activity !== undefined && { activity }),
  });
  const movingIn: Pupil = {
    ...pupil('q05', 'k-5apb', 'رحمة لونيس', 'Rahma Lounis', 'f'),
    movements: [{ day: d('2026-10-11'), kind: 'in', reason: 'Transfer' }],
  };
  const movingOut: Pupil = {
    ...pupil('q06', 'k-5apb', 'ضياء الدين سعيداني', 'Dhiaa Eddine Saidani', 'm'),
    movements: [{ day: d('2026-10-14'), kind: 'out', reason: 'Transfer' }],
  };
  return [
    { kind: 'school.set', school: { id: 's-pri', name: 'Example primary school', level: 'primary', zone: '16' } },
    {
      kind: 'class.set',
      schoolClass: {
        id: 'k-5apb',
        schoolId: 's-pri',
        level: 'primary',
        grade: '5ap',
        name: '5AP B',
        groups: [{ id: 'h-all', kind: 'whole', name: '5AP B' }],
      },
    },
    ...[
      pupil('q01', 'k-5apb', 'سلمى حداد', 'Salma Haddad', 'f'),
      pupil('q02', 'k-5apb', 'أنس مزيان', 'Anas Meziane', 'm'),
      pupil('q03', 'k-5apb', 'نور الهدى بوعلام', 'Nour El Houda Boualem', 'f'),
      pupil('q04', 'k-5apb', 'إلياس حداد', 'Ilyes Haddad', 'm'),
      movingIn,
      movingOut,
    ].map((p): RecordEvent => ({ kind: 'pupil.set', pupil: p })),
    {
      kind: 'course.set',
      course: {
        id: 'c-lang',
        classId: 'k-5apb',
        subject: 'language',
        year: '2026-2027',
        pack: { id: languagePack.id, release: languagePack.release },
      },
    },
    {
      kind: 'timetable.set',
      version: {
        id: 'v1',
        from: d('2026-09-20'),
        source: 'hand',
        blocks: [{ weekday: 2, half: 'afternoon', label: 'Teacher time' }],
        entries: [
          slot('f-sun-1', 0, 'morning', 1, 'reading'),
          slot('f-sun-2', 0, 'morning', 2, 'writing'),
          slot('f-sun-3', 0, 'afternoon', 1),
          slot('f-mon-1', 1, 'morning', 1, 'reading'),
          slot('f-mon-2', 1, 'afternoon', 1, 'writing'),
          slot('f-tue-1', 2, 'morning', 1),
          slot('f-wed-1', 3, 'morning', 1, 'reading'),
          slot('f-thu-1', 4, 'morning', 1, 'writing'),
        ],
      },
    },
  ];
}

export async function openBook(events: readonly RecordEvent[], day: Day = SETUP_DAY): Promise<RecordBook> {
  const book = await RecordBook.open(new MemoryStore(), deps);
  await book.recordAll(day, events);
  return book;
}

export function contextOf(book: RecordBook): Context {
  return makeContext(reference, book.state);
}
