// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Fills a buffer with random bytes from a cryptographically secure source.
 * Each app passes in its platform's own source, so the core holds no
 * platform code.
 */
export type RandomBytes = (length: number) => Uint8Array;

export function toHex(bytes: Uint8Array): string {
  let text = '';
  for (const byte of bytes) text += byte.toString(16).padStart(2, '0');
  return text;
}

/**
 * A random 128-bit ID. IDs are made on the device, so records made on
 * different devices never clash and can be merged (PRD §5.3).
 */
export function newId(random: RandomBytes): string {
  return toHex(random(16));
}
