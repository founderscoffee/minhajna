// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CalendarView } from './calendar.ts';
import type { Reference } from './reference.ts';
import type { State } from './state.ts';

/** The reference data and the teacher's records, as one screen sees them. */
export interface Context {
  readonly ref: Reference;
  readonly state: State;
  readonly calendar: CalendarView;
}

export function makeContext(ref: Reference, state: State): Context {
  return { ref, state, calendar: new CalendarView(ref, state.calendar) };
}
