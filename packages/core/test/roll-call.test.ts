// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  DEFAULT_COUNTING,
  awaitingBetween,
  confirmSessions,
  countMonth,
  countRollCalls,
  isEnrolled,
  pupilsFor,
  rollCallUnits,
  takeRollCall,
  type Marks,
  type RecordBook,
  type RecordEvent,
} from '../src/index.ts';
import { cemEvents, contextOf, d, openBook, primaryEvents } from './fixtures.ts';

/** The director's confirmation that q06 left on 14 October, as the teacher records it. */
const Q06_LEFT: RecordEvent = {
  kind: 'pupil.moved',
  pupilId: 'q06',
  movement: { day: d('2026-10-14'), kind: 'out', reason: 'Transfer', confirmed: true },
};

async function takeAll(book: RecordBook, from: string, to: string, marks: Record<string, Marks> = {}): Promise<void> {
  const context = contextOf(book);
  for (const unit of rollCallUnits(context, 'k-5apb', d(from), d(to))) {
    const key = `${unit.day} ${unit.half}`;
    await book.record(unit.day, takeRollCall(contextOf(book), unit, marks[key] ?? { absent: [], late: [] }));
  }
}

describe('roll call', () => {
  it('takes CEM roll call per session, and a TD session covers only its half-group', async () => {
    const context = contextOf(await openBook(cemEvents()));
    const units = rollCallUnits(context, 'k-1am2', d('2026-09-20'), d('2026-09-24'));
    assert.equal(units.length, 5);
    const td = units.find((unit) => unit.day === '2026-09-22');
    assert.ok(td);
    assert.equal(td.groupId, 'g-1');
    assert.deepEqual(
      pupilsFor(context, td).map((pupil) => pupil.id),
      ['p01', 'p02', 'p03', 'p04', 'p05'],
    );
  });

  it('takes primary roll call per half-day', async () => {
    const context = contextOf(await openBook(primaryEvents()));
    const units = rollCallUnits(context, 'k-5apb', d('2026-09-20'), d('2026-09-20'));
    assert.deepEqual(
      units.map((unit) => `${unit.half} ${unit.sessions.length}`),
      ['morning 2', 'afternoon 1'],
    );
  });

  it('needs a reason to correct a roll call, and keeps every version', async () => {
    const book = await openBook(cemEvents());
    const [unit] = rollCallUnits(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-20'));
    assert.ok(unit);
    await book.record(
      d('2026-09-20'),
      takeRollCall(contextOf(book), unit, { absent: [{ pupilId: 'p01', justified: false }], late: ['p02'] }),
    );
    const correction = { absent: [{ pupilId: 'p01', justified: true }], late: ['p02'] };
    assert.throws(() => takeRollCall(contextOf(book), unit, correction), /needs a reason/);
    await book.record(d('2026-09-23'), takeRollCall(contextOf(book), unit, correction, 'Justification brought in'));
    const versions = book.state.rollCalls.get(unit.key);
    assert.equal(versions?.length, 2);
    assert.equal(versions?.[1]?.reason, 'Justification brought in');
    assert.equal(versions?.[1]?.value.absent[0]?.justified, true);
  });

  it('refuses marks for pupils outside the roll call, or marked twice', async () => {
    const context = contextOf(await openBook(cemEvents()));
    const td = rollCallUnits(context, 'k-1am2', d('2026-09-22'), d('2026-09-22'))[0];
    assert.ok(td);
    assert.throws(
      () => takeRollCall(context, td, { absent: [{ pupilId: 'p06', justified: false }], late: [] }),
      /not on this roll call/,
    );
    assert.throws(
      () => takeRollCall(context, td, { absent: [{ pupilId: 'p01', justified: false }], late: ['p01'] }),
      /twice/,
    );
  });

  it('counts half-days: a whole day absent counts 2, and lateness is never an absence', async () => {
    const book = await openBook(primaryEvents());
    await takeAll(book, '2026-09-20', '2026-09-24', {
      '2026-09-20 morning': { absent: [{ pupilId: 'q01', justified: false }], late: [] },
      '2026-09-20 afternoon': { absent: [{ pupilId: 'q01', justified: false }], late: [] },
      '2026-09-21 morning': { absent: [], late: ['q02'] },
      '2026-09-23 morning': { absent: [{ pupilId: 'q03', justified: true }], late: [] },
    });
    const counts = countRollCalls(contextOf(book), 'k-5apb', d('2026-09-20'), d('2026-09-24'));
    assert.equal(counts.units, 7);
    assert.equal(counts.untaken, 0);
    const byPupil = new Map(counts.pupils.map((count) => [count.pupilId, count]));
    assert.deepEqual(
      [...byPupil.keys()],
      ['q01', 'q02', 'q03', 'q04', 'q06'],
      'q05 arrives later, and q06 leaves later',
    );
    const q01 = byPupil.get('q01');
    assert.equal(q01?.possible, 7);
    assert.equal(q01?.absent, 2);
    assert.equal(q01?.unjustified, 2);
    assert.equal(q01?.present, 5);
    assert.equal(q01?.rate, 5 / 7);
    assert.deepEqual(byPupil.get('q02')?.late, ['2026-09-21']);
    assert.equal(byPupil.get('q02')?.absent, 0);
    assert.equal(byPupil.get('q03')?.justified, 1);
  });

  it('leaves out roll calls not taken, unless the rules say otherwise', async () => {
    const book = await openBook(primaryEvents());
    await takeAll(book, '2026-09-20', '2026-09-23');
    const context = contextOf(book);
    const strict = countRollCalls(context, 'k-5apb', d('2026-09-20'), d('2026-09-24'));
    assert.equal(strict.units, 6);
    assert.equal(strict.untaken, 1);
    assert.equal(strict.pupils[0]?.possible, 6);
    const lenient = countRollCalls(context, 'k-5apb', d('2026-09-20'), d('2026-09-24'), {
      ...DEFAULT_COUNTING,
      untaken: 'present',
    });
    assert.equal(lenient.units, 7);
    assert.equal(lenient.pupils[0]?.possible, 7);
  });

  it('leaves out half-days whose sessions were not held', async () => {
    const book = await openBook(primaryEvents());
    await takeAll(book, '2026-09-20', '2026-09-21');
    await takeAll(book, '2026-09-23', '2026-09-24');
    const context = contextOf(book);
    const [tuesday] = awaitingBetween(context, d('2026-09-22'), d('2026-09-22'));
    assert.ok(tuesday);
    await book.recordAll(
      d('2026-09-22'),
      confirmSessions(context, [{ session: tuesday, choice: { outcome: 'not-held' } }]),
    );
    const counts = countRollCalls(contextOf(book), 'k-5apb', d('2026-09-20'), d('2026-09-24'));
    assert.equal(counts.units, 6);
    assert.equal(counts.untaken, 0);
    const counted = countRollCalls(contextOf(book), 'k-5apb', d('2026-09-20'), d('2026-09-24'), {
      ...DEFAULT_COUNTING,
      notHeld: 'counted',
    });
    assert.equal(counted.untaken, 1);
  });

  it('counts every roll call taken, and lists those the rest of the record leaves out', async () => {
    const book = await openBook(cemEvents());
    const count = (): ReturnType<typeof countRollCalls> =>
      countRollCalls(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-24'));
    const [sunday, monday] = rollCallUnits(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-21'));
    assert.ok(sunday && monday);

    // Late news: a closure is added for a day whose roll call was taken.
    await book.record(
      d('2026-09-21'),
      takeRollCall(contextOf(book), monday, { absent: [{ pupilId: 'p01', justified: false }], late: [] }),
    );
    await book.record(d('2026-09-23'), {
      kind: 'calendar.set',
      entry: {
        id: 'late-closure',
        layer: 'school',
        schoolId: 's-cem',
        from: d('2026-09-21'),
        to: d('2026-09-21'),
        effect: 'closure',
        name: { en: 'Made-up closure' },
        source: 'school',
        confidence: 'announced',
      },
    });
    const closed = count();
    assert.deepEqual(closed.conflicts, [monday.key]);
    assert.equal(closed.untaken, 4);
    assert.deepEqual(closed.pupils.find((pupil) => pupil.pupilId === 'p01')?.absences, [
      { day: '2026-09-21', half: 'morning', justified: false },
    ]);

    // A session recorded as not held after its roll call was taken.
    const absent = ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08'].map((pupilId) => ({
      pupilId,
      justified: false,
    }));
    await book.record(d('2026-09-20'), takeRollCall(contextOf(book), sunday, { absent, late: [] }));
    const [session] = awaitingBetween(contextOf(book), d('2026-09-20'), d('2026-09-20'));
    assert.ok(session);
    await book.recordAll(
      d('2026-09-20'),
      confirmSessions(contextOf(book), [{ session, choice: { outcome: 'not-held' }, privateReason: 'few-pupils' }]),
    );
    const notHeld = count();
    assert.deepEqual(notHeld.conflicts, [sunday.key, monday.key]);
    assert.equal(notHeld.units, 2);
    assert.equal(notHeld.pupils.find((pupil) => pupil.pupilId === 'p08')?.absent, 1);
  });

  it('counts the roll calls taken before a change of roll-call unit', async () => {
    const book = await openBook(cemEvents());
    for (const unit of rollCallUnits(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-24'))) {
      await book.record(
        unit.day,
        takeRollCall(contextOf(book), unit, { absent: [{ pupilId: 'p01', justified: false }], late: [] }),
      );
    }
    const schoolClass = book.state.classes.get('k-1am2');
    assert.ok(schoolClass);
    await book.record(d('2026-09-27'), {
      kind: 'class.set',
      schoolClass: { ...schoolClass, rollCallUnit: 'half-day' },
    });
    const counts = countRollCalls(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-24'));
    assert.equal(counts.pupils.find((pupil) => pupil.pupilId === 'p01')?.absent, 5);
    assert.equal(counts.conflicts.length, 5);
    assert.equal(counts.untaken, 5);
  });

  it("leaves out units on the teacher's own calendar days, unless the rules count them", async () => {
    const book = await openBook(cemEvents());
    await book.record(d('2026-09-13'), {
      kind: 'calendar.set',
      entry: {
        id: 'training',
        layer: 'teacher',
        from: d('2026-09-21'),
        to: d('2026-09-21'),
        effect: 'no-school',
        name: { en: 'Made-up training day' },
        source: 'teacher',
        confidence: 'announced',
      },
    });
    const units = rollCallUnits(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-24'));
    assert.equal(units.length, 5);
    const monday = units.find((unit) => unit.day === '2026-09-21');
    assert.ok(monday);
    for (const unit of units) {
      if (unit !== monday) await book.record(unit.day, takeRollCall(contextOf(book), unit, { absent: [], late: [] }));
    }
    const count = (rules = DEFAULT_COUNTING): ReturnType<typeof countRollCalls> =>
      countRollCalls(contextOf(book), 'k-1am2', d('2026-09-20'), d('2026-09-24'), rules);
    assert.equal(count().units, 4);
    assert.equal(count().untaken, 0);
    assert.equal(count({ ...DEFAULT_COUNTING, seminars: 'counted' }).untaken, 1);
    assert.equal(count({ ...DEFAULT_COUNTING, seminars: 'counted', untaken: 'present' }).units, 5);

    // A roll call taken that day counts whatever the rules say, and is listed for the teacher to check.
    await book.record(d('2026-09-21'), takeRollCall(contextOf(book), monday, { absent: [], late: ['p03'] }));
    assert.equal(count().units, 5);
    assert.deepEqual(count().conflicts, [monday.key]);
    assert.deepEqual(count().pupils.find((pupil) => pupil.pupilId === 'p03')?.late, ['2026-09-21']);
  });

  it("keeps a pupil who left on the list until the director's confirmation is recorded", async () => {
    const book = await openBook(primaryEvents());
    const [unit] = rollCallUnits(contextOf(book), 'k-5apb', d('2026-10-15'), d('2026-10-15'));
    assert.ok(unit);
    assert.equal(
      pupilsFor(contextOf(book), unit).some((pupil) => pupil.id === 'q06'),
      true,
    );
    const marked = takeRollCall(contextOf(book), unit, { absent: [{ pupilId: 'q06', justified: false }], late: [] });
    assert.equal(marked.kind, 'roll-call.taken');

    await book.record(d('2026-10-20'), Q06_LEFT);
    const left = book.state.pupils.get('q06');
    assert.ok(left);
    assert.equal(left.movements.length, 1, 'the confirmation replaces the movement it confirms');
    assert.equal(isEnrolled(left, d('2026-10-13')), true);
    assert.equal(isEnrolled(left, d('2026-10-14')), false);
    assert.equal(
      pupilsFor(contextOf(book), unit).some((pupil) => pupil.id === 'q06'),
      false,
    );
  });

  it('keeps movements recorded on their own when the pupil is set again', async () => {
    const book = await openBook(primaryEvents());
    const out = { day: d('2026-10-20'), kind: 'out', reason: 'Transfer', confirmed: true } as const;
    await book.record(d('2026-10-20'), { kind: 'pupil.moved', pupilId: 'q01', movement: out });
    await book.record(d('2026-10-21'), { kind: 'pupil.moved', pupilId: 'q01', movement: out });
    const q01 = book.state.pupils.get('q01');
    assert.ok(q01);
    // The name is fixed later, by a pupil record that holds only a later return.
    const back = { day: d('2026-10-27'), kind: 'in', reason: 'Back' } as const;
    await book.record(d('2026-10-22'), {
      kind: 'pupil.set',
      pupil: { ...q01, latinName: 'Selma Haddad', movements: [back] },
    });
    const fixed = book.state.pupils.get('q01');
    assert.ok(fixed);
    assert.equal(fixed.latinName, 'Selma Haddad');
    assert.deepEqual(fixed.movements, [out, back]);
    assert.equal(isEnrolled(fixed, d('2026-10-25')), false);
    assert.equal(isEnrolled(fixed, d('2026-10-27')), true);
  });

  it('follows pupils who arrive or leave during the month', async () => {
    const book = await openBook(primaryEvents());
    await book.record(d('2026-10-20'), Q06_LEFT);
    const context = contextOf(book);
    const arriving = book.state.pupils.get('q05');
    const leaving = book.state.pupils.get('q06');
    assert.ok(arriving && leaving);
    assert.equal(isEnrolled(arriving, d('2026-10-10')), false);
    assert.equal(isEnrolled(arriving, d('2026-10-11')), true);
    assert.equal(isEnrolled(leaving, d('2026-10-13')), true);
    assert.equal(isEnrolled(leaving, d('2026-10-14')), false);

    const october = countMonth(context, 'k-5apb', '2026-10', { ...DEFAULT_COUNTING, untaken: 'present' });
    assert.equal(october.units, 28);
    const possible = new Map(october.pupils.map((count) => [count.pupilId, count.possible]));
    assert.equal(possible.get('q01'), 28);
    assert.equal(possible.get('q05'), 20);
    assert.equal(possible.get('q06'), 13);
  });
});
