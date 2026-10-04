# 0012. Record layers and end-to-end encrypted sync

- **Date:** 2026-09-27
- **Status:** Superseded by [0015](0015-national-system-protections-by-design.md)
- **Decided by:** the founder

## Context

One device holds three very different kinds of record:
- pupils' names, marks and absences;
- the lesson record that the school checks;
- the teacher's private notes.

Each has its own rule. Pupil data never reaches the project (principle 2). Private notes never leave the teacher's devices (principle 7). In institution mode, a school may hold some records as controller ([0010](0010-institution-mode-and-charter.md)).

Teachers also work on both a phone and a PC. Their records must move between devices over the teacher's own mobile data, without the project being able to read them. Storing personal data abroad is a transfer that needs an ANPDP licence.

## Options

- **Data on one device only, moved as files.** The lowest risk, but a lost phone loses everything, and the phone and the PC drift apart.
- **Sync that the project can read,** hosted abroad or in Algeria. Simple to build and support, but it makes the project a holder of pupil data. That brings consent problems for minors' data and, abroad, a transfer licence.
- **End-to-end encrypted sync hosted in Algeria, with record layers that decide where each record may go.** Chosen.

## Decision

- **Five record layers.** The layer travels with each record, and every sync, export and share checks it:

  | Layer | What it holds | Where it may go |
  |---|---|---|
  | Private | Private notes, and the reasons a session was not held or an item skipped | Only the teacher's own devices and the teacher's own full export |
  | Pupil records | Class lists, roll call, marks, observations and appreciations | The teacher's devices and the files the teacher makes. A successor only by direct transfer. An institution's systems only for features for students and parents, after their gates |
  | Lesson record | Items and stages, homework, tests and the factual line | Also statements, handover packages and the opt-in insights |
  | Shared statement | Progress statements and handover packages | Whoever the teacher gives it to, logged in the sharing history |
  | Official snapshot | Exists only in a deployment with official status | The institution's archive |

- **Sync is optional and end-to-end encrypted.**
  - It runs through the project's server in Algeria, or through an institution's own server in institution mode.
  - The server stores and passes on data it cannot read, and the teacher holds the keys.
- **Only new changes travel,** because the history is only ever added to. When two devices changed the same record differently, both versions are kept, and the teacher chooses.
- **Other routes:** a direct transfer between devices, and an encrypted backup file that the teacher keeps. The phone's cloud backup never receives pupil data.
- **The history records dates, never times of day.** Deletion erases the content, and the history keeps only the fact that something was deleted.
- **The minimum pupil data:** the official registration number, name, sex, class and group, and movements. An absence is justified or unjustified, and its cause is never typed.

Details: [PRD §5.4 to §5.8](../prd/PRD.md#54-where-each-record-may-go).

## Consequences

- **The project cannot recover a teacher's data.** So the app gives each teacher a recovery sheet, makes backups easy, and reminds the teacher when there has been no backup or sync for 30 days (PRD §6.5).
- **Sync opens only once its gates are met:** the encryption design published and reviewed, the ANPDP declaration filed, hosting in Algeria and a breach runbook (PRD §6.2). Until then, direct transfer and backup files are the routes.
- **The layer checks are part of the code,** so a private note cannot slip into a statement by mistake.
