# 0008. Algeria first, flexible for other countries

- **Date:** 2026-09-27
- **Status:** Accepted
- **Decided by:** the founder

## Context

Tabachir starts from the paperwork of Algerian teachers: the national curricula and calendar, the official documents, and Algerian law. Teachers in other countries keep similar records, and the open licences already let anyone adapt the code. But every country has its own curricula, calendar, documents, laws and payment channels. A young project that tries to serve several countries at once serves none of them well.

## Options

- **Algeria only, for good.** The simplest option, but it would hard-code Algeria and waste what open code can do for teachers elsewhere.
- **Several countries from the start.** Wider reach, but each country needs its own data, legal checks and support. That would delay the Algerian product.
- **Algeria first, built so other countries can use it later.** Chosen.

## Decision

- Until the end of the 2027/28 school year, the first full year after launch, the project builds, tests and supports the product for Algerian teachers only. Algeria wins any conflict.
- From the start, country specifics are data, not code. Another country then needs its own data rather than a rewrite.
- After that year, another country is an option, not a promise. It is decided in public, with a decision record.

Details: [PRD §1.14](../prd/PRD.md#114-algeria-first-flexible-for-other-countries).

## Consequences

- **The data repository** groups everything by country code, starting with `dz`.
- **The core code** hard-codes no Algerian rule. Calendars, the working week, levels, assessment rules and document layouts are data or settings.
- **An official edition in another country** needs:
  - local data curators;
  - a legal check;
  - hosting and payment channels allowed there;
  - local support;
  - the trademark registered there.
- **Forks stay free** under another name.
- **The principles apply in every country.** Each country's data, insights and servers stay separate.
