# 0002. Licences: AGPL-3.0-or-later for code, CC BY-SA 4.0 for documents and content

- **Date:** 2026-09-26
- **Status:** Accepted
- **Decided by:** the founder

## Context

A licence decides what others may do with the code. The market is small, and rivals often run ads. A permissive licence would let a rival take the code, close it and add ads.

## Options

- **AGPL-3.0:** anyone who distributes a modified version, or runs one as a server for others, must offer the changed source.
- **GPL-3.0:** the same for the apps, but a modified server could run without sharing its changes.
- **MPL-2.0:** our files stay open, but they can be built into closed products.
- **Apache-2.0:** permissive. Anyone, rivals and the ministry included, may close it.

## Decision

| What | Licence |
|---|---|
| Code: apps, servers, build and data tools | AGPL-3.0-or-later |
| Documents: the PRD, design documents, decision records, the file-format specification, print layouts | CC BY-SA 4.0 |
| Content teachers make for the data repository: plans, distributions, templates, corrections | CC BY-SA 4.0 |
| Fonts | SIL OFL 1.1 |
| The name and logo | Not licensed; trademarks |

"Or later" lets the project move to a future version of the same licence without asking every contributor.

## Consequences

- Every file carries an SPDX identifier, following the [REUSE specification](https://reuse.software/).
- Dependencies must be compatible with AGPL-3.0, and the apps use no proprietary libraries.
- Official texts and plans are not relicensed. They are included only when counsel clears them, and linked otherwise.
