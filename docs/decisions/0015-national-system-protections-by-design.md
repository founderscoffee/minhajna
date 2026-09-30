# 0015. The national system, with protections built into its design

- **Date:** 2026-09-29, amended 2026-09-30
- **Status:** Proposed
- **Decided by:** the lead maintainer

## Context

On 29 September 2026 the founder set the project's goal. Tabachir is not a commercial venture. It is an open-source project whose primary objective is national adoption, with the Ministry running it on government servers. [0009](0009-goal-state-adoption-official-record.md) had made state adoption the goal, but the design still assumed that the project, a school or a directorate would run the server ([0010](0010-institution-mode-and-charter.md), [0012](0012-record-layers-and-encrypted-sync.md)).

When the Ministry runs the server, it is both the host and the teachers' employer. The licence lets anyone run and change the code, so the Ministry needs no contract with the project, and the project cannot impose one.

The research shows where teachers accept a digital record, and where they turn against it (research 04, 11):
- They accept a record of each session that stays inside the school.
- They resist it wherever it feeds pay, appraisal, rankings or exam thresholds. Abroad, entry rates tracked school by school were used to find and sanction teachers during a boycott.
- They abandon systems that fail at deadlines, that lock them out until a superior resets their access, that make them enter everything twice, or that vanish or start charging.

The founder chose not to wait for a legal text that protects teachers before the Ministry hosts Tabachir. So the protections must hold whoever runs the servers.

On 30 September, before any comments, the founder settled five more points: how totals are formed, what an inspector's grant opens, when totals of how far classes got are formed, how objections from the consultation are handled, and what the project does if the Ministry's build weakens the charter. This record was amended to match.

## Options

- **The Ministry's server holds the live record and can read it,** like most national registers. It is the simplest to build and run. But every protection then depends on the policy of the day: entry rates for each school or teacher become computable, and an outage at a deadline stops every school at once.
- **Encrypted records, protected by a ministerial text or a signed convention before the Ministry hosts.** Legal force adds a second wall, as in France, but adoption waits for a text the project cannot obtain.
- **Encrypted records, protected by the design alone.** The teacher's device holds the working record. The server keeps copies it cannot read, and forms totals without learning any one school's figure. Chosen.

## Decision

**Who runs the server**
- **One server package, two operators.** Until the Ministry adopts Tabachir, the project runs it in Algeria, free for teachers. The Ministry then runs it on government servers, as one national system with a space for each directorate and each school.
- **The Ministry needs nothing from the project.** The package installs from the published releases with no internet access, and makes no outbound calls. There is no project key, licence server or call home.
- **The Ministry runs its deployment under its own name.** Its app is the project's release, with the Ministry's name and icon as settings, built reproducibly so that anyone can check it against the published code. Only the project's builds are called Tabachir ([0007](0007-name-tabachir.md)), and the project's own app can always connect to the national system.
- **A build that weakens the charter is made public at once.** If a check finds that the Ministry's build differs from the published code in a way that weakens the charter, such as a key the Ministry holds, the project publishes the finding at once and sends it to the Ministry. Teachers can then use the project's own app.
- **After adoption, the Ministry's own staff maintain Tabachir,** as maintainers in the project's public process. Releases, the principles and the charter are still decided in public. The Ministry deploys each release within an agreed window, and security fixes for critical flaws within 7 days.
- **Teachers move to the Ministry's system one by one,** when they join their school's space there. The app shows what will move, and moves it once the teacher agrees. Private notes never move. The project's server closes once teachers have moved. Anyone outside the national system keeps the app, with direct transfer and backups.

**Where records live, and who can read them**
- **Device first.** The teacher's phone or PC holds the working record, and every daily task works offline. No deadline depends on a server.
- **Nobody who runs a server holds a key** to a named record: neither the project nor the Ministry. Records are encrypted on the device before they leave it.
- **The record layers** of 0012 stay, with new routes, and a sixth layer for totals:

  | Layer | What it holds | Where it may go | Who can read it on a server |
  |---|---|---|---|
  | Private | Private notes, and the reasons a session was not held or an item skipped | Only the teacher's own devices and full export | Nobody but the teacher |
  | Pupil records | Class lists, roll call, marks, observations and appreciations | The teacher's devices and files, and the school's space. Marks go to the state's system, and absences too where the school chooses | The teacher and the school. The state's system reads only what is sent to it |
  | Lesson record | Items and stages, homework, tests, the factual line, and each session's confirmation status | Statements and handover packages. The school's space: the confirmation status as it syncs, and the full record once the week is signed. In teacher mode, the opt-in insights ([0013](0013-insights-payload-and-minimum-group-sizes.md)) | The teacher, the school, and the teacher's inspector during a grant |
  | Shared statement | Progress statements and handover packages | Whoever the teacher gives it to, logged in the sharing history | Only those it is given to |
  | Official snapshot | The signed weeks, in the national system | The school's archive, for the declared period | The teacher and the school. The teacher's inspector, during a grant, reads only its lesson record |
  | Totals | Figures above the school | The directorate's and the Ministry's screens | The directorate and the Ministry, as totals only |

- **The school key** is held by the director and the deputies. Its recovery is split between the school and its directorate, so neither can open the school's records alone.
- **Inspectors** read only the lesson records of the courses and signed weeks named in a grant, between its dates: never pupil records, and never the confirmation status as it syncs. The authority grants it, and the teacher sees the grant and every access.

**The official record**
- **The weekly signature.** The teacher signs each week of each course, in one step. Until then, the week is the teacher's working record. Once signed, it is the school's record, and in the national system the official record.
- **What becomes official:** the texts book, the journal, roll call and marks.
- **Always correctable.** A signed week can still be corrected. The correction is signed too, and both versions stay and show. Official records are legal evidence, and corrections keep that fair to teachers.
- **Legal signatures.** The state's certification authority certifies the signing key made on the teacher's device, so the weekly signature counts under Law 15-04. The key never leaves the device.
- **A signed record counts from the day it was signed on the device,** even if the network delays it.
- **Paper stays the fallback** (charter point 9). A session recorded on paper, when no device was at hand, is entered afterwards, with the day it was taught.

**Nothing on a server tells time**
- **No clock times, "started" events, sign-in events or locations** exist anywhere to be read. The history keeps dates, never times of day.
- **Fixed batches.** The app sends batches of a fixed size, at set times of day, whether or not anything changed.
- **The director's view of confirmation status stays** ([0010](0010-institution-mode-and-charter.md)). It updates with each batch, a few times a day. Only the school key opens it, so nobody above the school can total it across schools.

**Joining and signing in**
- **Joining.** The school gives each teacher a QR code made from the official assignment list, and the teacher scans it once. There is no password, no account to activate and no reset through the director. The teacher is never locked out of their own copy.
- **Signing in** uses the phone's fingerprint or face prompt, which unlocks a key kept in the phone's secure chip. The biometric never leaves the phone, and a PIN always works. The app holds its own key rather than using Google's passkeys, which need Google Play Services. Sign-ins are never recorded, anywhere.
- **On a shared staffroom PC,** the teacher signs in with their phone, and nothing stays behind.
- **No personal phone is required** (charter point 9). A teacher who has no smartphone, or doesn't want to use their own, joins and signs in on a school PC with a security key the school issues.

**Above the school: totals only**
- **What they cover:** the curriculum report, and what the system owes teachers: cover given, vacant posts and unassigned hours, and sessions lost to closures, worked out from the public calendar.
- **Never** a figure for one school or one teacher, a ranking, a count of sessions not held, or anything from the private layer.
- **How they are formed.** Each school's share of each total is prepared from the school's records, on a device that holds the school key, since the server cannot read them. The shares are combined across schools, so the server learns only totals that meet the minimum group sizes of 0013: 10 teachers and 3 schools for a wilaya or national figure, and 5 teachers and 3 schools for a directorate. No school's figure reaches the server.
- **Only on announced days.** Totals of how far classes got are formed only on days announced in advance: each term's end, set at the start of the school year, and each exam's date where charter point 7 allows. There is no weekly or monthly series, whatever 0017 decides.
- **The opt-in insights** of 0013 run in teacher mode from 2027/28, and are retired once the national system's totals exist.

**The state's systems**
- **Only through the national interoperability system** (Decree 25-320). Schools, class groups, class lists and assignments come in, so nobody types them twice. Marks go out, and absences too where the school chooses, once the Ministry decides who records absences.
- **The connector cannot read what it carries.** Marks and absences are encrypted on the teacher's or the school's device for the receiving system alone.
- **Parents use the state's awlyaa space.** Marks, and absences where the school chooses, reach parents there. Tabachir builds no features for students or parents.

**Sync, backup and the minimum data**
- **Sync is free for teachers,** between their own devices and to their school's space. It sends only new changes. When two devices differ, both versions are kept and the teacher chooses.
- **Direct transfer and encrypted backup files remain.** The phone's cloud backup never receives pupil data.
- **The minimum data of 0012 stays.** For pupils: the registration number, name, sex, class and group, and movements. An absence is justified or unjustified, and its cause is never typed. For teachers in the national system: only the official staff identifier and name, to join the school's space.

**Official status and the national launch**
- **The first ask to the Ministry** is a ministerial text that makes the full digital record official, and compulsory from the national launch. The ask includes the charter's protections, as a request, not a condition.
- **Until then, teacher mode only.** The project runs no school or directorate deployments, and seeks no official acceptance of printed pages, until the Ministry's system opens.
- **The launch gate.** The mandate starts only once the national system has passed:
  - a load test at national scale, including the term-end peak;
  - a trial term end with real schools;
  - the independent security review;
  - a full restore from backup.
- **Teachers are consulted first.** Before the rollout, the staff technical committees and the representative unions are consulted, and the results are published. Every objection gets a public answer before the mandate starts: from the project on the software, and from the Ministry on the mandate. The Ministry is asked for this, as a request. The charter is presented to every school's teachers' council.
- **The pilot stays in January to March 2027,** with the teacher app. The national system is designed alongside it. Its launch date is set once the Ministry adopts Tabachir, and the work is planned back from it.

Details: [PRD §5](../prd/PRD.md#5-data-formats-and-foundations) and [§6](../prd/PRD.md#6-privacy-security-and-non-functional-requirements).

## Consequences

- **This record replaces 0012.** It also replaces the sync price in [0014](0014-business-model-and-sync-pricing.md), because sync is free. The rest of 0014, and [0006](0006-money-services-not-features.md), are replaced by 0016, proposed separately because it changes principle 4 and needs 30 days of comments.
- **Exam scope is proposed separately, in 0017.** The founder also chose to let how far classes got inform the scope of every exam, at the level that sets it. That changes charter point 7 (PRD §1.15), so it follows the process for changing a principle, with 30 days of comments. Until it is accepted, the ban stands.
- **Students and parents.** [0010](0010-institution-mode-and-charter.md) allows features for them only in institution mode. None are planned: the state's awlyaa space serves parents.
- **The launch gate's trial term end** runs on the Ministry's system, after adoption and before the mandate, since nothing runs in schools before then.
- **The design is the only protection, so it has to stay intact wherever it runs:**
  - the protections hold only while teachers' apps run the published code. Builds are reproducible, the web app shows its checksum, and anyone who uses a modified version is entitled to its source ([0002](0002-licences.md));
  - an independent reviewer checks the encryption design before sync opens, and again before the national launch.
- **Nobody can recover what only the teacher holds.** The recovery sheet, easy backups and the 30-day reminder stay. In a school space, a lost phone doesn't lose the class: the school's copy stays, and the school issues a new QR code.
- **More must be built before the national launch:** school spaces, fixed batches, the method for totals, legal signatures, the interoperability connector and sign-in with a security key. Fixed batches and the method for totals are tested on budget phones first.
- **Counsel confirms:**
  - that the state's certification authority can certify keys made on phones;
  - that the Ministry's text can make a record count from the day it was signed on the device;
  - the access and agreements that the interoperability system needs.
- **The risks the research warns of remain.** A mandate from day one is where other countries met the strongest resistance, and a national system is most exposed at its first term end. The consultation, the launch gate and the protections above are the answer. The trial term end tests them.
- **The rest of the PRD is brought in line** in separate changes: §1.10, §1.15, §2.6, §3, §7, §8, §9 and §10.
