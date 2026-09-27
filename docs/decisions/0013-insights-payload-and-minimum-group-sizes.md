# 0013. What the insights contain, and the minimum group sizes

- **Date:** 2026-09-27
- **Status:** Accepted
- **Decided by:** the founder

## Context

[0011](0011-insight-figures-review-and-limits.md) set the rules for the opt-in insights:
- the IGP's review;
- the limits on how figures may be used;
- insights contain what was taught, never when, and never why a session was not held.

It left two things to the PRD's insights section: exactly what the payload holds, and the minimum group sizes. Both decide whether a figure could single out a teacher, or be turned against the people who report it.

## Options

**The payload**
- **Session records with their dates,** grouped on the server. The richest data, but it breaks "never when". Abroad, dated entry records were used to find teachers during boycotts (research 11).
- **Each class's position at every exam window.** Useful for pacing, but these are exactly the figures that have been used to set the scope of exams, which 0011 bans.
- **Counts about the plan, for each class and term:** the sessions spent on each item, the items merged or skipped, and how far the class got by the end of each term. Chosen.

**The group sizes**
- **Counting pupils only.** In a school with one maths teacher, even a large group of pupils points to that teacher.
- **Counting teachers and schools.** Chosen.

**The teacher's comparison with peers**
- **Worked out on the server,** which needs more data from each class.
- **Worked out on the teacher's device, from the published figures.** Chosen.

## Decision

- **The payload,** for each class whose teacher opts in:
  - the plan pack and its release;
  - the sessions spent on each item;
  - the items merged, skipped, split or re-taught;
  - how far the class got by the end of each term.
- **Never in it:** the date of a session, a reason a session was not held, pupil data, anything that identifies a teacher, or data from institution mode.
- **The indicators,** each with its number of classes and a note that opt-in samples are self-selected:
  - the median sessions spent on each item, for each pack;
  - the items most often merged, skipped, split or re-taught;
  - how far classes got by the end of each term, as a median and a spread;
  - sessions lost to closures by wilaya, worked out from the public calendar, never from teachers' entries.
- **Minimum group sizes:**
  - a wilaya or national figure covers at least 10 teachers and 3 schools;
  - directorate figures in institution mode cover at least 5 teachers and 3 schools (PRD §7.9);
  - a cell below the minimum is hidden, and so is any cell that would reveal it by subtraction;
  - in small cells, shares near 0% or 100% are shown in bands, and sparse cells are pooled across years.
- **The comparison with peers** is worked out on the teacher's device, from the published figures. Nothing about the class is sent to make it.

Details: [PRD §8.4](../prd/PRD.md#84-the-insights-observatory).

## Consequences

- **Some questions stay unanswered by design,** such as how far classes had got just before an exam. That protects the ban on using figures to set exam scope ([0011](0011-insight-figures-review-and-limits.md)).
- **Collection starts in 2027/28.** The code, payload and method are published at least a month before (PRD §1.13).
- **Counsel checks three things before the first collection:**
  - that teachers may send this data without written authorisation (Ord. 06-03 Art. 48);
  - whether publishing the figures needs the ministry's consent;
  - whether the national statistics rules apply.
