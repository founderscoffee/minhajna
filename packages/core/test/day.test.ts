// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  addDays,
  dayNumber,
  daysBetween,
  eachDay,
  fromDayNumber,
  isDay,
  monthOf,
  monthRange,
  parseDay,
  startOfWeek,
  weekday,
} from '../src/index.ts';
import { d } from './fixtures.ts';

describe('days', () => {
  it('accepts only real days written YYYY-MM-DD', () => {
    assert.equal(isDay('2026-09-20'), true);
    assert.equal(isDay('2028-02-29'), true);
    for (const text of ['2026-02-29', '2026-13-01', '2026-04-31', '2026-9-20', '20-09-2026', '2026-09-20T08:00', '']) {
      assert.equal(isDay(text), false, text);
    }
    assert.throws(() => parseDay('2027-02-29'), RangeError);
  });

  it('knows the weekday without a time zone', () => {
    assert.equal(weekday(d('1970-01-01')), 4);
    assert.equal(weekday(d('2026-09-20')), 0);
    assert.equal(weekday(d('2026-10-29')), 4);
    assert.equal(weekday(d('2000-02-29')), 2);
  });

  it('counts days across months, years and leap days', () => {
    assert.equal(addDays(d('2026-12-31'), 1), '2027-01-01');
    assert.equal(addDays(d('2028-02-28'), 1), '2028-02-29');
    assert.equal(addDays(d('2026-03-01'), -1), '2026-02-28');
    assert.equal(daysBetween(d('2026-09-20'), d('2027-06-10')), 263);
  });

  it('turns day numbers back into the same days', () => {
    for (let n = dayNumber(d('1899-12-25')); n <= dayNumber(d('2100-01-05')); n += 37) {
      assert.equal(dayNumber(fromDayNumber(n)), n);
    }
  });

  it('finds weeks and months', () => {
    assert.equal(startOfWeek(d('2026-10-29'), 0), '2026-10-25');
    assert.equal(startOfWeek(d('2026-10-25'), 0), '2026-10-25');
    assert.equal(startOfWeek(d('2026-10-25'), 6), '2026-10-24');
    assert.equal(monthOf(d('2026-10-29')), '2026-10');
    assert.deepEqual(monthRange('2027-02'), { from: '2027-02-01', to: '2027-02-28' });
    assert.deepEqual(monthRange('2028-02'), { from: '2028-02-01', to: '2028-02-29' });
    assert.equal(eachDay(d('2026-09-29'), d('2026-10-02')).length, 4);
  });
});
