# 0001. The whole system is open source, from the first line

- **Date:** 2026-09-26
- **Status:** Accepted
- **Decided by:** the founder

## Context

Tabachir handles pupils' names, marks and absences. It needs the trust of teachers, directors, inspectors, the data-protection authority (ANPDP) and the state. Promises about privacy are hard to believe, but code that anyone can read is not.

## Options

- A closed product.
- Open core: an open base with closed paid modules.
- Everything open: apps, servers, tools and documents.

## Decision

Everything is open from the first line of code: the apps, the servers, the tools, the documents, the decisions and the roadmap. Only the items listed in [PRD §1.4](../prd/PRD.md#14-what-is-open-and-what-stays-private) stay private, each for a stated reason.

## Consequences

- Money comes from services, never from features ([0006](0006-money-services-not-features.md)).
- Pupil data never reaches the project, and no real pupil data may appear in any public space ([PRD §1.5](../prd/PRD.md#15-pupil-data-and-privacy-rules)).
- The state can audit, host or reuse the code without buying it from anyone.
