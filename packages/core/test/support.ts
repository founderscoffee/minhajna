// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// What a platform gives the core, here from Node's Web Crypto. The apps pass
// in their own platform's implementations.

import { toHex, type HistoryDeps } from '../src/index.ts';

const encoder = new TextEncoder();

export const deps: HistoryDeps = {
  digest: async (text) => toHex(new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(text)))),
  random: (length) => crypto.getRandomValues(new Uint8Array(length)),
};
