# The data-use charter

This charter protects the teachers whose records are kept in Tabachir. It binds the project, and in the national system, where the Ministry runs Tabachir on government servers, it is asked of the Ministry ([PRD §1.15](docs/prd/PRD.md#115-institution-mode)).

- **Asked for, and built in.** The charter is asked for in the Ministry's text, but not required. The design enforces it wherever it can, so its protections hold whoever runs the servers ([below](#built-into-the-design)).
- **Presented to teachers.** It goes to every school's teachers' council before the national launch.
- **In Arabic.** The [README](README.md) summarises it in Arabic.

## The ten points

1. **Purpose.** The records serve three things: the teacher's planning, the teaching council's coordination, and the checks the official texts give directors and inspectors. Above the school, figures drawn from them serve only what point 7 allows. Nothing else.
2. **No personnel use.** Entries never feed pay, promotion, appraisal, bonuses, discipline or transfers. No rankings, and no colour-coded lists of teachers.
3. **No surveillance.**
   - No clock times, no "started" events, no location.
   - A missing or late entry, or a session awaiting confirmation, is never an absence.
   - It never triggers an alert or a sanction, and it never leaves the school.
4. **Corrections, not locks.** A teacher can always correct an entry, and the history keeps both versions.
5. **Symmetry.**
   - Teachers see everything their director sees about their classes.
   - Teachers see every access to their records.
   - The authority grants inspectors' access. It is limited in time and visible to the teacher.
6. **Private stays private.** Private notes never leave the teacher's devices.
7. **Aggregates only above the school.** Minimum sizes and methods are published in advance. Aggregates are never used for personnel decisions.
   - How far classes got may inform the scope of an exam only at the level that sets it: a school's own records for its term and mock exams, a directorate's totals for its exams, and wilaya and national totals for national exams.
   - The figures are taken on a date announced at the start of the school year. It moves only if the exam does, and is then announced again at least two weeks ahead. The figures are checked against the inspectors' sample of pupils' exercise books, or marked unchecked in a year without one, and are published with how they were used once the exam is over.
8. **Quiet hours.** No notifications at night or at weekends.
9. **No personal phone required.** Paper and shared-computer routes remain.
10. **Consultation and transparency.** The charter goes to the teachers' council before a deployment starts. The transparency report lists every request an authority makes for data, where the law allows.

## Built into the design

No legal text is needed before the protections apply. They are built into what the servers can read and compute ([PRD §6.5](docs/prd/PRD.md#65-keys-sync-and-recovery)):
- **Nobody who runs a server holds a key.** Records are encrypted on the device before they leave it. Neither the project nor the Ministry can read a named record on its servers.
- **The school key** opens the school's space: the signed weeks, the pupil records and each session's confirmation status. Only the director and the deputies hold it, and its recovery is split between the school and its directorate. So the confirmation status never leaves the school (point 3).
- **An inspector's grant** opens only the lesson records of the courses and signed weeks it names, between its dates. Never pupil records, and never the confirmation status. The teacher sees the grant and every access (point 5).
- **Above the school, totals only.** Each school's share of a total is prepared inside its space, so no school's figure reaches the server. Totals cover at least the published minimum group sizes. Totals of how far classes got are formed only on days announced at the start of the year (points 1 and 7, [PRD §5.10](docs/prd/PRD.md#510-the-permission-model)).
- **No clock times anywhere.** The school's copy keeps each session's current status, never the day it was confirmed. Nothing records sign-ins, "started" events or location (point 3, [PRD §7.5](docs/prd/PRD.md#75-the-schools-space)).
- **Private notes and reasons** are encrypted for the teacher's own devices only (point 6).
- **Corrections are added and signed,** and both versions stay and show (point 4, [PRD §5.5](docs/prd/PRD.md#55-history-corrections-and-signatures)).
- **The Ministry's app is the project's release,** built reproducibly under the Ministry's name. If a build weakens the charter, for example with a key the Ministry holds, the project publishes the finding at once and sends it to the Ministry. Teachers can then use the project's own app ([PRD §1.9](docs/prd/PRD.md#19-official-builds-releases-the-name-and-security)).

## Changing the charter

- **Like a principle.** A change needs a public proposal, at least 30 days of comments and a recorded decision ([PRD §1.2](docs/prd/PRD.md#12-principles)). Teachers hear about it in Arabic, and every comment gets an answer in the record.
- **After the Ministry adopts Tabachir,** a change also needs the teacher council's consent: more than half of all its members must vote for it. The Ministry's maintainers can propose a change, but never decide one alone ([GOVERNANCE.md](GOVERNANCE.md)).

## Where it comes from

The decision records behind it:
- [0010](docs/decisions/0010-institution-mode-and-charter.md): institution mode and the charter;
- [0015](docs/decisions/0015-national-system-protections-by-design.md): the national system, with protections built into its design;
- [0016](docs/decisions/0016-non-commercial.md): the teacher council's consent after adoption;
- [0017](docs/decisions/0017-exam-scope-at-each-level.md): point 7 and exam scope;
- [0018](docs/decisions/0018-charter-purpose-and-figures.md): point 1 and figures above the school.
