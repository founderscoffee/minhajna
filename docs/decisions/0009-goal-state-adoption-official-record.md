# 0009. The goal: state adoption as the official record

- **Date:** 2026-09-27
- **Status:** Accepted
- **Decided by:** the founder

## Context

Principle 6 said that Tabachir is "a teacher's tool, not the official record". That was true, and it still is today. It did not say why the project exists. The founder, a teacher in service, builds Tabachir for the state to adopt it as the official digital record of teaching.

Two things shape how to pursue that goal:
- **An official record is not surveillance.** Several countries keep an official digital record of every lesson, checked inside the school and accepted as a school document. The backlash abroad came where such records fed pay, clock times, rankings and deadlines.
- **The state adopts what already works.** A record that teachers use voluntarily, in open formats, on code the state can audit and host, is easier to adopt than one sold from the top.

## Options

- **Keep "a teacher's tool" as the whole goal.** It is safe, but it hides the project's purpose.
- **Aim for official status from the start, as a product sold to schools and authorities.** It is direct, but official status can't be granted by the project, and top-down tools have met resistance.
- **State adoption as the goal, and teachers first as the path.** Chosen.

## Decision

- **The goal.** The Algerian state adopts Tabachir, or its open formats and code, as the official digital record of teaching.
- **The path.** Teachers use it first, and the design meets the needs of an official record from the first release.
- **Principle 6 now reads "Built to become the official record, never by default".** Until a competent authority adopts it in writing, as controller, Tabachir stays a teacher's tool, and it never claims official status on its own.

Section 1 was still a draft when this was decided, so the change did not need the process for changing a principle (PRD §1.2).

Details: [PRD §1.2](../prd/PRD.md#12-principles) and [§1.15](../prd/PRD.md#115-institution-mode).

## Consequences

- **Institution mode** and a ladder to official status now exist in PRD §1.15.
- **The data-use charter** keeps the official record from becoming a surveillance tool.
- **Later sections** design for official use from the first release: an append-only history, official snapshots, retention and open formats. Institutional features stay switched off until an authority adopts them.
