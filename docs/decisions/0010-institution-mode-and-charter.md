# 0010. Institution mode and the data-use charter

- **Date:** 2026-09-27
- **Status:** Accepted
- **Decided by:** the founder

## Context

Official status (decision 0009) needs a way for schools and education authorities to use Tabachir as institutions. The earlier principles were written for teachers only. They left three questions open:
- who controls institutional records;
- what the project may hold;
- what protects teachers once their director or an authority can see their records.

## Options

- **The project runs institutional dashboards itself, as controller.** This has no legal basis under Loi 18-07. It would also make the project the holder of a teacher-monitoring database.
- **Institutions as controllers, with the project as publisher or processor, bound by a charter.** Chosen.

## Decision

- **Institution mode** is added as PRD §1.15:
  - the school or authority is the controller;
  - the project is only the publisher of the software, or a processor under a written contract;
  - every deployment passes the listed gates;
  - a ladder of steps leads to official status.
- **The data-use charter** has ten points. It is bound into every institutional agreement and changed only through the process for changing a principle. Its core promises:
  - no personnel use;
  - no surveillance;
  - corrections instead of locks;
  - symmetry between what the director and the teacher see;
  - aggregates only above the school.
- **Principle 2** now also covers institution mode: pupil data lives on the institution's own systems, and it still never reaches the project.
- **Principle 5:** figures leave a teacher's device only through the opt-in insights, or in institution mode.
- **Principle 7:** teachers own their working records. Records an institution requires belong to it, and the teacher keeps a full copy and sees every access.
- **Principle 3 is unchanged.** "Sharing" means disclosure by the project. A teacher's or an institution's own use of records that the project cannot read is not sharing.
- **Students and parents.** Features for them exist only in institution mode, on the institution's systems, after the gates. The data model is designed for them from the start.
- **A dashboard inside the school.** The director's operational dashboard may show sessions awaiting confirmation. That status is never an absence, never triggers an alert or a sanction, and never leaves the school (PRD §1.11).

Details: [PRD §1.15](../prd/PRD.md#115-institution-mode).

## Consequences

- **`CHARTER.md`** is added to the repository files, in Arabic and English.
- **Every institutional agreement** includes a publication clause, processor terms and a ban on using the records to evaluate teachers.
- **Counsel** confirms who the controller is for each kind of school before any school deployment.
