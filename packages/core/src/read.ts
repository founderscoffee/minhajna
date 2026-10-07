// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// Plan packs and reference data travel as files, from the data repository
// or from a colleague's phone, so every one is read as untrusted (PRD §5.9).
// A reader checks each field against the format, reports every problem
// rather than the first, and keeps only the format's fields.

export type ParseProblemKind = 'required' | 'invalid' | 'duplicate' | 'unknown-reference';

export interface ParseProblem {
  readonly path: string;
  readonly problem: ParseProblemKind;
}

export type ParseResult<T> =
  | { readonly ok: true; readonly value: T }
  | { readonly ok: false; readonly problems: readonly ParseProblem[] };

/** A release of a pack or of reference data, such as `2026.1`. */
export const RELEASE = /^\d{4}\.\d+$/;
/** A language code, such as `ar` or `fr`. */
export const LANGUAGE = /^[a-z]{2,3}$/;

export type Fields = Readonly<Record<string, unknown>>;

export function isFields(value: unknown): value is Fields {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isOneOf<T extends string>(list: readonly T[], value: unknown): value is T {
  return typeof value === 'string' && (list as readonly string[]).includes(value);
}

export function at(path: string, key: string): string {
  return path === '' ? key : `${path}.${key}`;
}

export class Reader {
  readonly problems: ParseProblem[] = [];

  fail(path: string, problem: ParseProblemKind): void {
    this.problems.push({ path, problem });
  }

  text(fields: Fields, key: string, path: string, pattern?: RegExp): string | undefined {
    const value = fields[key];
    if (value === undefined) return undefined;
    if (typeof value !== 'string' || value.trim() === '' || (pattern !== undefined && !pattern.test(value))) {
      this.fail(at(path, key), 'invalid');
      return undefined;
    }
    return value;
  }

  requiredText(fields: Fields, key: string, path: string, pattern?: RegExp): string {
    if (fields[key] === undefined) this.fail(at(path, key), 'required');
    return this.text(fields, key, path, pattern) ?? '';
  }

  number(fields: Fields, key: string, path: string, integer: boolean): number | undefined {
    const value = fields[key];
    if (value === undefined) return undefined;
    if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0 || (integer && !Number.isInteger(value))) {
      this.fail(at(path, key), 'invalid');
      return undefined;
    }
    return value;
  }

  flag(fields: Fields, key: string, path: string): boolean | undefined {
    const value = fields[key];
    if (value === undefined) return undefined;
    if (typeof value !== 'boolean') {
      this.fail(at(path, key), 'invalid');
      return undefined;
    }
    return value;
  }

  oneOf<T extends string>(fields: Fields, key: string, path: string, list: readonly T[]): T | undefined {
    const value = fields[key];
    if (value === undefined) {
      this.fail(at(path, key), 'required');
      return undefined;
    }
    if (!isOneOf(list, value)) {
      this.fail(at(path, key), 'invalid');
      return undefined;
    }
    return value;
  }
}
