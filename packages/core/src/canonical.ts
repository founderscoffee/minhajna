// SPDX-FileCopyrightText: 2026 The Minhajna contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

// The history is chained by hashes, so the same record must always give the
// same text, whatever order its fields were written in.

/** JSON with object keys sorted. Refuses values that JSON cannot carry exactly. */
export function canonicalJson(value: unknown): string {
  if (value === null) return 'null';
  switch (typeof value) {
    case 'boolean':
      return value ? 'true' : 'false';
    case 'string':
      return JSON.stringify(value);
    case 'number':
      if (!Number.isFinite(value)) throw new TypeError('Numbers must be finite');
      return JSON.stringify(value);
    case 'object': {
      if (Array.isArray(value)) {
        return `[${value
          .map((item: unknown) => {
            if (item === undefined) throw new TypeError('Arrays cannot hold undefined');
            return canonicalJson(item);
          })
          .join(',')}]`;
      }
      const prototype: unknown = Object.getPrototypeOf(value);
      if (prototype !== Object.prototype && prototype !== null) {
        throw new TypeError('Only plain objects can be written');
      }
      const record = value as Record<string, unknown>;
      const fields = Object.keys(record)
        .filter((key) => record[key] !== undefined)
        .sort()
        .map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`);
      return `{${fields.join(',')}}`;
    }
    default:
      throw new TypeError(`Cannot write a value of type ${typeof value}`);
  }
}
