# Privacy

What the Tabachir project holds about people, why, and what it never holds. This file covers the project itself: its repositories, its teachers' group and website, and later its own services. The records of the national system are the Ministry's, which runs it as their controller, and are not covered here ([PRD §1.15](docs/prd/PRD.md#115-institution-mode)).

## What the project never holds

- **Pupil data.** Pupils' names, marks and absences never reach the project (principle 2). In teacher mode they stay on the teacher's devices, and sync and backup are end-to-end encrypted, so the project cannot read them.
- **The records of the national system.** They are kept on the Ministry's servers, encrypted so that only the teacher and their school can read them, and a granted inspector only the lesson records a grant names. The project holds none of them, and nobody who runs a server holds a key to a named record ([PRD §6.5](docs/prd/PRD.md#65-keys-sync-and-recovery)).
- **Anything that tracks teachers.** No clock times, sign-in events or location, and no analytics, advertising or crash-reporting SDKs. No ads or trackers, and no sale or sharing of data, ever (principle 3).
- **Private notes.** They never leave the teacher's own devices.

## What the project holds now

The project is in planning, and there is no app yet.

| What | Why | Where, and for how long |
|---|---|---|
| What people post on GitHub: issues, pull requests and comments | To build the project in public | On GitHub, which is run from abroad, under its own terms. Everything there is public, so never post personal details or pupil data |
| Posts in the teachers' Facebook group | To hear from teachers | On Facebook, under its own terms. The group's admins remove posts with real pupil data |
| Field-check contacts: a name, and a phone number or an e-mail address, for the teachers and staff who take part ([PRD §10.2](docs/prd/PRD.md#102-the-field-check)) | To run the field check, to ask about each proposal, and to invite members of the teacher council and subject maintainers ([PRD §1.8](docs/prd/PRD.md#18-governance-and-decisions)) | Kept by the lead maintainer only, and never published. Deleted whenever the person asks |

## What it will hold, as each part opens

| What | From | Rules |
|---|---|---|
| Comments sent through the website's form, and how the sender wants to be credited | The form's opening | Used to answer comments on proposals and to take in plans and templates. Answers sum comments up without naming the teacher |
| Pilot contacts | The pilot | Only what the pilot needs. Kept by the lead maintainer, and deleted whenever the person asks |
| Problem reports | The pilot | Built by the app with pupils' names replaced, and shown to the teacher before they are sent ([PRD §1.5](docs/prd/PRD.md#15-pupil-data-and-privacy-rules)) |
| Crash reports | The pilot | Off by default. The teacher sees each one before it is sent, and names and marks are removed |
| Sync accounts | When sync opens | A login, and encrypted records the project cannot read. The server sees memberships, encrypted batches and their sizes, never names or times of activity |
| Pack-editor accounts | For curators and subject maintainers | Only what the editor needs to credit their work |
| Donors' details | Once the association exists | Only what the accounts need. Donations unlock nothing |
| Opt-in insights | 2027/28 | Lesson-level data only, never anything that identifies a teacher, and only after the teacher sees the exact payload ([PRD §1.6](docs/prd/PRD.md#16-anonymous-insights-rules-for-openness)) |

## How it is kept

- **The minimum,** stored apart from everything else ([PRD §1.4](docs/prd/PRD.md#14-what-is-open-and-what-stays-private)).
- **In Algeria.** Every server the project runs that touches personal data is hosted in Algeria, and so is everything on that path: e-mail, monitoring and backups ([PRD §6.1](docs/prd/PRD.md#61-the-legal-position-in-teacher-mode)).
- **Declared first.** Before the project collects personal data through a service of its own, it declares that processing to the ANPDP, as Loi 18-07 requires, with a register of processing and a named data-protection contact. Teachers see an Arabic privacy notice before they first use the app ([PRD §6.2](docs/prd/PRD.md#62-compliance-before-each-launch)).
- **Who answers for it.** Until the association exists, the founder answers for what the project holds. How the declaration is made before then is a question for counsel ([PRD §6.10](docs/prd/PRD.md#610-decisions-and-open-points)).
- **In the transparency report.** Every September, from the launch, the report says what the project holds about teachers, and every request for data from an authority, where the law allows ([PRD §1.11](docs/prd/PRD.md#111-community-transparency-and-building-in-public)).

## Your rights

You can see, correct and delete what the project holds about you. Corrections are made within 10 days ([PRD §6.2](docs/prd/PRD.md#62-compliance-before-each-launch)).

For now, ask in a [GitHub issue](https://github.com/founderscoffee/tabachir/issues), without personal details, and a maintainer answers there. If you took part in the field check, you can also ask the person who contacted you. The project will add an address of its own for these questions when it has one.
