# Tabachir: Product Requirements Document

*Tabachir (طباشير) is the product's name, chosen on 26 Sep 2026. Repository: [github.com/founderscoffee/tabachir](https://github.com/founderscoffee/tabachir). Started 26 Sep 2026.*

This PRD is written one section at a time, and we settle each section before starting the next. Each section records decisions and ends with a list of what is still open.

The evidence is in the project's research brief, cited as "brief §n", and in the research files it summarises. The brief stays private because it quotes teachers and names other developers (§1.4). Its conclusions will be published.

| § | Section | Status |
|---|---|---|
| 1 | [Open-source strategy and governing guidelines](#1-open-source-strategy-and-governing-guidelines) | Settled on 27 Sep 2026 |
| 2 | [Goal, users and scope](#2-goal-users-and-scope) | Settled on 27 Sep 2026 |

---

## 1. Open-source strategy and governing guidelines

The whole system is open source from its first line of code: the apps, the servers, the tools and the documents. This section sets the rules that govern the project:
- what is open, and under which licence;
- what stays private, and why;
- how pupils' data is protected in public;
- how people contribute and how decisions are made;
- how the project pays for itself without closing anything;
- how schools and education authorities may use it, and the charter that binds them;
- why it serves Algeria first, and how other countries can use it later.

The project's goal is for the Algerian state to adopt Tabachir as the official digital record of teaching (principle 6).

Every later section of this PRD must comply with this one. When a feature conflicts with a principle in §1.2, the feature changes, not the principle.

### 1.1 Why open source

- **Proof instead of promises.** Anyone can have the code checked: a teacher, a director, an inspector or the ANPDP. It shows three things:
  - pupils' data never reaches the project;
  - there are no ads or trackers;
  - marks stay as confidential as circular 465 §3.5 requires.

  By contrast, at least one paid rival stores teachers' data on servers abroad (brief §10).
- **The tool outlives its company.** This year one developer's whole Google Play account vanished, and its teacher apps went with it (research 04). With open code and an open file format, teachers are never stranded.
- **State-ready by construction, because state adoption is the goal.** The ministry can audit the code, host it in Algeria, or reuse parts of it in the digital دفتر النصوص on its July 2025 roadmap (brief §9). It can do all this without buying from a startup.
- **A community for the yearly data.** Timetables, plans and print templates change every September (brief §8). Teachers already share them on blogs and in groups; the open data repository gives that sharing a home.

Open source earns trust, but it does not bring installs by itself. Teachers find their tools through content sites, Facebook groups, YouTube and staffrooms (brief §12). So the project builds in public in those places, in Arabic (§1.11), with the open code as the proof behind it.

### 1.2 Principles

These eight principles override everything else in this PRD.

1. **Open by default.** Every part of the system is public from its first line: code, documents, decisions and roadmap. Only the items listed in §1.4 stay private, each for a stated reason.
2. **Pupil data never reaches the project.** Pupils' names, marks and absences live on the teacher's devices, or, in institution mode, on the institution's own systems (§1.15). Sync and backup are end-to-end encrypted, so the project cannot read them. No pupil data goes to any third party, SDK or AI service (brief §10).
3. **No ads, no trackers, and no sale or sharing of data. Ever.**
4. **Charge for services, never for features.** Everything the app does is free. Money comes from services that cost money to run or need people (§1.10).
5. **Open code is not open data.** The code is public and teachers' records are private. Figures leave a teacher's device only in two ways:
   - through the opt-in insights in §1.6;
   - in institution mode (§1.15), where a school or an education authority is the controller.

   Above the school, only aggregates that meet the minimum group sizes are shown or published.
6. **Built to become the official record, never by default.** The goal is for the state to adopt Tabachir as the official digital record of teaching. Until a competent authority adopts it in writing, as controller, Tabachir is a teacher's tool:
   - it prepares and prints what the school and the state's platforms ask for;
   - it never claims official status on its own;
   - it never works around a protection in an official file. For example, it fills only the unlocked cells of the school's grade workbook (brief §9, §11).
7. **Teachers own their working records.**
   - A teacher can export everything, for free, in an open and documented format, at any time.
   - Records that an institution requires, as controller, belong to that institution. The teacher still keeps a full copy of their own lesson records and sees every access to them.
   - Private notes never leave the teacher's devices.

   No agreement can override these principles, whoever it is with: the ministry, a directorate, a school, a sponsor or a funder.
8. **Build in public, in Arabic first.** Plans, decisions, progress and money are public. Teachers hear about them where they already are.

**Changing a principle** needs a public proposal, at least 30 days of comments and a recorded decision (§1.8). Principles 2 and 3 are permanent.

### 1.3 Licences

| What | Licence | Notes |
|---|---|---|
| Code: the apps (phone, PC or web), the servers (sync, insights, observatory), build and data tools | **AGPL-3.0-or-later** | "Or later" lets the project adopt a future version of the same licence without asking every contributor |
| Documents: this PRD, design documents, decision records, the file-format specification, print layouts | CC BY-SA 4.0 | |
| Content teachers make for the data repository: plans, distributions, templates, corrections | CC BY-SA 4.0 | Each item records its source and its contributor |
| Official texts and plans | Not relicensed | Included only when counsel clears them, otherwise linked. Ord. 03-05 Art. 11 excludes regulations from copyright; the national inspectorate's (IGP) plans are unclear (brief §8) |
| Fonts | SIL OFL 1.1 | Amiri, Noto Naskh Arabic, Noto Sans Arabic (brief §11) |
| Name and logo | Not licensed | Trademarks (§1.9) |

- **Why AGPL.** Anyone who distributes a modified app, or runs a modified server for others, must offer the changed source to its users. A permissive licence would let a rival close the code and add ads. The ministry can still use, host and change the code freely. If it runs a changed version for teachers, it must offer them the changed source.
- **Copyright.** Each contributor keeps the copyright in their contribution. Until a legal entity exists, the founder holds the copyright in their own work and owns the name and logo. Both move to the entity when it is created.
- **Contributor terms: the DCO.** Every code commit carries a "Signed-off-by" line under the [Developer Certificate of Origin 1.1](https://developercertificate.org/). With it, the contributor certifies that they have the right to submit the work under the project's licence.
  - There is no CLA, so nobody can relicense others' contributions without their consent, the founder included.
  - A GitHub no-reply email address is fine in the sign-off.
- **Licence hygiene.**
  - Every file carries an SPDX licence identifier, and the repositories follow the [REUSE specification](https://reuse.software/), so a machine can check the licence of every file.
  - Dependencies must use licences compatible with AGPL-3.0.
  - The apps use no proprietary libraries (for example Google Play Services or Firebase), so anyone, F-Droid included, can build them from source.

### 1.4 What is open and what stays private

**Open from the start:**
- the source code;
- build and release scripts;
- server configuration, without secrets;
- the file-format specification and print layouts;
- the data repository;
- this PRD and the decision records;
- the roadmap, the changelog and the transparency reports.

**Private, each for a stated reason:**

| Item | Why | Rule |
|---|---|---|
| Signing keys, server passwords, tokens | Whoever holds them can impersonate the project | Held by named maintainers, with an offline backup. Never in a repository. Secret scanning runs on every change |
| Security reports, until fixed | Publishing first would expose teachers | Sent to a private reporting address. A public advisory follows the fix (§1.9) |
| Raw insight submissions | Could single out a teacher | Only groups above the minimum size are published (§1.6) |
| What the project holds about teachers: sync accounts, billing, support messages | Personal data under Loi 18-07, for which the project is the controller | Kept to the minimum, hosted in Algeria and stored apart from everything else. Covered by the project's own ANPDP declaration (brief §10) |
| The raw research: verbatim quotes with links, the competitor dossier | The privacy and copyright of the people quoted. It also names small Algerian developers alongside their install counts | Publish the conclusions only, scrubbed |
| Pupil data | — | Never reaches the project (principle 2) |
| The records of an institutional deployment | The school or education authority is their controller (§1.15) | Held on the institution's systems. The project may hold them only as ciphertext, as a processor under a written contract |

### 1.5 Pupil data and privacy rules

**In the product**
- **Nothing leaves the device by default.** Pupil data leaves the device only inside the end-to-end encrypted sync or backup, and only if the teacher turns it on.
  - The app never needs the project's servers to open or to do the daily work.
  - The storage rules in brief §10 apply: no OS cloud backup of pupil data, an encrypted database, and an app lock.
- **No third-party SDKs that send data.** No analytics, advertising, crash-reporting or AI SDKs.
- **A public network inventory.** `NETWORK.md` lists every address the app can contact, what it sends and why. A change that adds or widens a network call is a *privacy-sensitive change* (§1.7).
- **Crash reports are off by default.** The teacher sees each report before it is sent. Names and marks are removed, and the report goes to the project's server in Algeria.
- **AI follows the same rules.** If the product ever uses AI, no pupil data goes to an AI service abroad. The model, the prompts and where it runs are public.

**In the project's public spaces** (the code host, the website, the teacher group, videos and support chats)
- **No real pupil data, ever.** That covers issues, pull requests, screenshots, videos, forum and Facebook posts, support messages and test data. Two reasons:
  - civil-service secrecy covers pupils' marks and attendance (Ord. 06-03 Art. 48);
  - ANPDP deliberation 04 treats publishing through a foreign-run platform, such as GitHub, Facebook or WhatsApp, as a transfer abroad (brief §10).
- **A demo class.** The app ships a demo class of made-up pupils for screenshots, tutorials and reproducing bugs. Tests use made-up data only.
- **Safe bug reports.** A "report a problem" button builds a report with pupils' names replaced, and shows it to the teacher before sending. Support always asks for this report or the demo class, never a real screenshot.
- **Moderators remove leaks.** When they see a post containing real pupil data, they remove it and tell its author privately why.
- **No images of pupils or staff** in any project channel (circular 460 Art. 44; Loi 15-12 Art. 140).

### 1.6 Anonymous insights: rules for openness

The insights layer is opt-in and shares lesson-level data only. A later section designs it; the rules below bind that design.

- **Publish before collecting.** The insights server's code, the exact payload and the aggregation method are public at least one month before collection starts.
- **The teacher is in control.**
  - It is off by default, and the teacher can turn it off at any time.
  - Before the teacher opts in, the app shows the exact payload. Afterwards it keeps a log of everything sent.
- **What it may contain.** Lesson-level data only: what was taught, never when, and never why a session was not held. It never contains:
  - pupil data;
  - anything that identifies a teacher;
  - data from institution mode.
- **How it is grouped.** By level, subject and wilaya.
  - Minimum group sizes count teachers and schools, not only pupils. A group below the minimum is never shown.
  - Cells that would let a hidden figure be worked out by subtraction are hidden too.
  - The insights section sets the numbers.
- **What the figures may be used for.** The published method states that the figures describe the curriculum plan, not classes or teachers. They are never used:
  - to set the scope of exams ("thresholds");
  - to rank anyone;
  - for personnel decisions.
- **Hosted in Algeria.**
- **Protection without secrecy.** The code is public, so protection against fake or flooded submissions comes from rate limits, outlier filtering and the minimum group size.
- **Who sees what.**
  - Each teacher sees how their class compares with their peers.
  - The IGP receives each report first and has 30 days to comment. Publication then follows the published method.
  - Public figures stay coarse and follow a method published in advance.
- **A legal check before the first collection.** Counsel confirms that teachers may send lesson-level data to the insights service without written authorisation (Ord. 06-03 Art. 48).

### 1.7 Contributions

**Paths**
- **Teachers, no Git needed.** They send suggestions, bug reports, plan corrections, templates and translations through a simple form on the website or through the teacher group.
  - The form states the licence (CC BY-SA 4.0) and asks how the teacher wants to be credited.
  - A data curator turns each submission into a change. The curator signs it off, relying on the licence the teacher accepted in the form.
- **Developers** open pull requests on GitHub following `CONTRIBUTING.md`, with every commit signed off.

**Review**
- **Every change.** A maintainer other than the author reviews it, from the day the project has two maintainers.
- **Privacy-sensitive changes** need two maintainers' approval and a plain-Arabic line in the release notes. While there is only one maintainer, a public notice goes out at least a week before the release instead. A change is privacy-sensitive if it touches:
  - network calls;
  - encryption;
  - sync;
  - insights;
  - the export of marks;
  - anything that reads or writes the school's official files.
- **Data contributions.**
  - Each one cites its source: an official text, an inspector's distribution, or the contributor's own work.
  - Each one states the level, subject and school year it applies to.
  - A curator checks it against its source.
- **AI-assisted contributions** are welcome. The contributor answers for them like any other work: they reviewed and tested it, and they have the right to submit it. The DCO covers this.

**Credit and language**
- **Credit.** Contributors are credited in the release notes and on a contributors screen in the app. Only those who agree are listed, under the name they choose.
- **Language.**
  - Spaces for teachers are in Arabic.
  - Code, commits and developer documents are in English, with Arabic summaries of anything teachers need to know.
  - Templates for French and English teachers are in their language.

### 1.8 Governance and decisions

- **Until launch in September 2027, the founder leads.** The founder is the lead maintainer and decides, in public, after hearing contributors.
- **Roles:**
  - lead maintainer;
  - maintainers, who can merge changes;
  - data curators, for the data repository;
  - community moderators, for the teachers' spaces;
  - security contacts.
- **Decision records.** Any decision about a principle, a licence, a data flow, the insights layer, money or a partnership gets a short public record in `docs/decisions/`: context, options, decision, date.
- **The teacher council, from launch.**
  - **Members:** practising teachers from several levels and wilayas, starting with the field-check group, plus a director and an inspector where possible.
  - **Role:** it advises on the roadmap, the data repository and the print layouts. Its notes are public.
  - **Overrides:** when the lead maintainer goes against its advice, the decision record says why.
- **Partnerships in the open.** Every agreement with the ministry, a directorate, a school, a sponsor or a funder is announced, with its parties, scope and money. It is also listed in the transparency report.
  - Every agreement includes a clause allowing it to be published (Ord. 21-09 Art. 8).
  - An agreement that would break a principle is refused.
  - In an institutional deployment, the project is only the publisher of the software or a processor under contract, never the controller (§1.15).
- **The state may adopt, host or fork the project** under its licence. The project publishes a deployment guide, and the state can contract larger support (§1.10).
- **Accounts.** The code lives in a GitHub organisation, not a personal account, so it can be handed over without breaking links. Every maintainer uses two-factor authentication.

### 1.9 Official builds, releases, the name and security

- **Built only from the public source.** Official builds contain nothing that is not in the public repositories.
- **Official sources.** Google Play, the project's `.dz` website (Android APK, PC or web) and F-Droid. The website and the README say that no other source is official.
- **Signed releases.**
  - Every release is signed.
  - The fingerprint of the signing key and the checksums of each release are published on the website and in the README.
  - The goal is reproducible builds, so that anyone, F-Droid included, can check that a build matches the source.
- **The release calendar follows the school year.** In the two weeks before each term-end export window, only fixes ship. The windows fall around mid-December, March and May (brief §14).
- **Changelog.** Every release has notes written for teachers, in Arabic and English.
- **The name: Tabachir (طباشير).**
  - **Meaning.** Chalk, the teacher's everyday tool. Written in Latin letters, it also reads as تباشير: the first light of dawn, or good news.
  - **Spelling.** Always "Tabachir" in Latin letters, never "Tabashir", which is taken on GitHub. The Arabic form is طباشير.
  - **Descriptive line.** The words teachers search for go in the line under the name, never in the name itself, for example "Tabachir: الكراس اليومي ودفتر المناداة والتنقيط" or "Tabachir: the teacher's class logbook".
  - **Registration.** The name and logo are registered as trademarks with INAPI.
  - **Forks.** The trademark policy (`TRADEMARKS.md`) lets anyone fork, but under another name and logo, and without suggesting that the fork is the official app.
  - **Official builds.** Unmodified official builds may be shared as they are.
- **Naming rule**, for the product and for anything the project later names:
  - **Distinctive.** It must be an invented word, or an ordinary word used for something unrelated, and never a description of the product. INAPI refuses signs that lack distinctive character (Ord. 03-06, Art. 7 point 2). Only a registrable name can separate official builds from forks.
  - **Easy to say.** It must be easy to say in Algerian Arabic, French and English, with one fixed Latin spelling.
  - **No official echo.** No echo of official documents (دفتر النصوص, كراس القسم, سجل المناداة, المنهاج), state bodies or state platforms (ostad, amatti, awlyaa, mowadaf, the "ديوان" offices, Morocco's Massar).
  - **No echo of existing teacher apps.**
  - **Neutral.** No religious or political words. No translation of a well-known mark (Art. 7 point 8).
  - **Fits every teacher**, whatever the number of classes or the level.
  - **Available** on Google Play, GitHub, the `.dz` registry and Facebook, checked before adoption.
- **Security.**
  - `SECURITY.md` gives a private reporting address. Reports are acknowledged within three working days. After the fix, a public advisory credits the reporter.
  - Secrets never enter a repository, and scanning checks every change.
  - Dependencies are watched for known vulnerabilities.
  - The encryption design is published for review before sync launches.

### 1.10 Money

**Why services, not features.** Under an open licence, anyone may legally rebuild the app without a paywall. Google Play can't bill Algerians, so a paid feature would have to be an unlock key sold through Chargily or BaridiMob. A free rebuild would then spread through the same groups (brief §12). What can be sold is services that cost money to run or need people.

- **Always free:**
  - every feature of the app, including the term export and every print layout;
  - exporting a teacher's own data.
- **Paid services:**
  - end-to-end encrypted sync and backup between phone and PC, hosted in Algeria;
  - deployment, training and support for private schools, directorates and, later, the ministry. Services for directorates and the ministry go through public procurement (Loi 23-12), with processor terms, hosting in Algeria and the security clauses of Decree 26-07.
- **Voluntary:** a supporter pass with a visible thank-you. It locks nothing.
- **Grants and sponsors:**
  - accepted only if they respect every principle;
  - disclosed in the transparency report;
  - foreign funding only after a legal check.
- **Never:**
  - ads;
  - selling or sharing data;
  - paid features;
  - charging teachers to get their own data out.
- **Payment:**
  - only through channels approved in Algeria: Chargily, CIB, Edahabia, BaridiMob (brief §12);
  - billing data is kept apart from everything else (research 06).
- **Prices.** Sync is free during the pilot. The business section sets prices from the pilot's data.

### 1.11 Community, transparency and building in public

- **Where people meet.**
  - **Teachers:** a Facebook group, plus the form on the website.
  - **Developers:** GitHub issues and discussions.
  - **One-to-one support:** under the rules in §1.5.
- **Building in public.**
  - A public roadmap in Arabic, updated monthly.
  - A monthly progress post or short video in the teacher group.
  - A public beta group.
  - A reply to every store review.
- **Transparency report every September, from launch.** It covers:
  - the pupil data held (none, and why);
  - what the project holds about teachers;
  - how many teachers have opted in to insights;
  - every request for data from any authority, and the answer, where the law allows;
  - security incidents;
  - money in and out, by source;
  - partnerships and sponsors.
- **Code of conduct** (`CODE_OF_CONDUCT.md`, adapted from the Contributor Covenant, in Arabic and English).
  - Respect; no harassment or personal attacks.
  - Project spaces stay about the product: no political or union campaigning, and no attacks on named people, whether officials, colleagues, pupils or parents.
- **Neutrality.** The project takes no side in disputes between teachers and the administration. It follows the official texts and cites them.
  - No feature detects, counts or reports collective action.
  - Whether sessions are recorded or still awaiting confirmation never leaves the school.

### 1.12 Continuity pledge

- **Open format, free export.** The file format is documented and public, and teachers can export all their records, for free, at any time.
- **If the project stops or its legal entity closes:**
  - the code, the data repository and the documents stay public as archives;
  - the last release keeps working offline, because the daily work never depended on the project's servers;
  - the sync service gives at least six months' notice, runs until after that school year's last term export, and provides a full export for every teacher;
  - the name and the repositories pass to a successor that keeps these principles, or are archived.

### 1.13 Opening in stages

| Stage | When | What becomes public | Contributions accepted |
|---|---|---|---|
| 1. From the first line | Now to December 2026 (field check) | The repository, the licences, an Arabic and English README, this PRD and the decision records. The research only after scrubbing (§1.4) | Feedback, plans, templates and translations; code by invitation |
| 2. Pilot | January–March 2027 | A public beta group and the changelog | The same, plus invited code contributors |
| 3. Launch | September 2027 | `GOVERNANCE.md`, the teacher council, the F-Droid listing and the first transparency report | Code contributions open to all |
| 4. Insights | 2027/28 | The insights code, payload and method, at least one month before collection | Comments on the method |

### 1.14 Algeria first, flexible for other countries

Tabachir is built for Algerian teachers first. It is also built so that teachers in other countries can use it later. A new country adds its own data instead of rewriting the code, and no principle is weakened.

**Algeria first**
- **Only Algeria until the end of the 2027/28 school year**, the first full year after launch. Until then, the project builds, tests and supports the product for Algerian teachers only, covering:
  - Algerian curricula and the Algerian calendar;
  - the official documents;
  - Algerian law and payment channels.
- **Algeria wins any conflict.** A change that would help another country but cost Algerian teachers time, simplicity or protection is refused.
- **Interest from other countries is welcome and noted.** Before the end of 2027/28, though, the project builds no edition for another country.
- **After that, another country is an option, not a promise.** It is decided in public, with a decision record (§1.8). The decision rests on two things:
  - teachers' demand in that country;
  - local people ready to maintain that country's data.

**Flexible by design**

This is the only work done for other countries before then.
- **Country specifics are data, not code.** The core code must not hard-code an Algerian rule. The following live in the data repository, grouped by country code (`dz` for Algeria):
  - curricula and plans;
  - the school calendar and bell times;
  - levels and subjects;
  - assessment rules;
  - the layouts of official documents.
- **Language and dates.**
  - Every interface text can be translated, and layouts work both right to left and left to right. Arabic comes first (principle 8).
  - The working week, the weekend, and the Hijri and Gregorian calendars are settings, not assumptions.
- **Exports to official files are separate modules,** so another country's official files can be added without touching the core.
- **Servers can run in any country.** Sync, backup and insights can be hosted wherever a country's law requires.
- **Flexible, not generic.** Flexibility must never delay Algeria. When a general design would, the project builds for Algeria and records what another country would need.

**How another country can use Tabachir**
- **A fork, at any time.** The licences let anyone adapt Tabachir for their country, under another name and logo (§1.9).
- **An official country edition** needs:
  - that country's data, with named data curators there;
  - a check of that country's data-protection and education law;
  - hosting and payment channels allowed there;
  - people who can support its teachers in their language;
  - a decision record (§1.8).
- **The principles travel unchanged.** Every principle in §1.2 applies in every country.
  - Section 1 names Algerian laws, bodies, hosting and payment channels, such as Loi 18-07, the ANPDP, the IGP, INAPI and hosting in Algeria.
  - An edition applies its own country's equivalents, and never a weaker protection.
- **Each country stays separate:** its data, its insights and its servers.
- **The name.** Only an official edition may use the Tabachir name in another country. The trademark is registered there before that edition launches.

### 1.15 Institution mode

Institution mode is how a school or an education authority uses Tabachir as an institution, not only through its teachers' own apps. It is the road to the goal in principle 6. A later section designs it; the rules below bind that design.

**Who is responsible**
- **The institution is the controller.** The school or education authority controls the records it requires. The project is only the publisher of the software, or a processor under a written contract (Loi 18-07 Art. 39).
- **Which institution, per kind of school.** Counsel settles who the controller is for each kind of school. A primary school may need its directorate as controller.
- **Students and parents.** Features for them exist only in institution mode, on the institution's own systems, after the gates below.
  - The data model is designed for them from the start.
  - Pupil data still never reaches the project (principle 2).

**Gates before any deployment**
- the competent authority's written authorisation, and any higher approval the law requires, which counsel confirms;
- the institution's declaration to the ANPDP, and an impact assessment where the law requires one;
- a processor contract with:
  - the security clauses of Decree 26-07;
  - a ban on using the records to evaluate teachers;
  - a publication clause (§1.8);
- a data-protection officer or contact for the deployment;
- notice to the teachers concerned (Loi 18-07 Art. 32);
- the data-use charter below, adopted by the teachers' council before the deployment starts;
- a legal entity for the project, able to sign.

**The ladder to official status**

| Step | What becomes official | Who decides |
|---|---|---|
| 0. A teacher's tool | Nothing: Tabachir prepares and prints | — |
| 1. Accepted printouts | Directors countersign printed pages. Then the state accepts a printed, signed page instead of re-copying | Directors; then the IGP or the ministry |
| 2. A school deployment | The school runs Tabachir, as controller | The Director of Education, in writing |
| 3. A directorate deployment | The directorate runs it for its schools, hosted in Algeria | The directorate |
| 4. National adoption | A ministerial text gives the digital record official status | The ministry, with the Council of Ministers' approval where required |

- **From step 2,** every gate above applies.
- **Once a record is official,** signed exports and a history that cannot be altered become requirements.

**The data-use charter**

The charter is:
- bound into every institutional agreement;
- published as `CHARTER.md`, in Arabic and English;
- changed only through the process for changing a principle (§1.2).

It has ten points:
1. **Purpose.** The records serve three things: the teacher's planning, the teaching council's coordination, and the checks the official texts give directors and inspectors. Nothing else.
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
7. **Aggregates only above the school.** Minimum sizes and methods are published in advance. Aggregates are never used for exam thresholds or personnel decisions.
8. **Quiet hours.** No notifications at night or at weekends.
9. **No personal phone required.** Paper and shared-computer routes remain.
10. **Consultation and transparency.** The charter goes to the teachers' council before a deployment starts. The transparency report lists every request an authority makes for data, where the law allows.

### 1.16 Files that put these rules into the repositories

| File | Holds |
|---|---|
| `LICENSE`, `LICENSES/` | Licence texts (REUSE) |
| `README` (Arabic and English) | What the project is, the official download sources, the signing-key fingerprint |
| `CONTRIBUTING.md` | Ways to contribute, the DCO sign-off, review rules, rules on data sources |
| `CODE_OF_CONDUCT.md` | Conduct rules, in Arabic and English |
| `GOVERNANCE.md` | Roles, how decisions are made, how principles change, the teacher council |
| `SECURITY.md` | Private reporting, response times |
| `TRADEMARKS.md` | What forks may and may not do with the name and logo |
| `PRIVACY.md` | What the project holds about teachers and why, and what it never holds |
| `CHARTER.md` | The data-use charter for institution mode (§1.15), in Arabic and English |
| `NETWORK.md` | Every address the app contacts, what it sends and why |
| `docs/decisions/` | Decision records |
| `CHANGELOG.md` | Release notes for teachers, in Arabic and English |
| `transparency/` | The yearly reports |

The code and the reference data live in separate repositories, because they have different licences, contributors and review rules.

### 1.17 Decisions and open points

**Decided on 26 and 27 Sep 2026**

| Decision | Choice |
|---|---|
| Scope | The whole system is open source, from the first line of code |
| Code licence | AGPL-3.0-or-later |
| Contributor terms | DCO; no CLA and no relicensing |
| Copyright and trademark | Held by the founder until a legal entity exists |
| Code host | A GitHub organisation: the repository is `founderscoffee/tabachir`, which is public |
| Money | Charge for services, never for features; the term export is free |
| Name | **Tabachir** (طباشير), chosen from about 60 candidates. On 26 Sep 2026 the GitHub name `tabachir` was free, `tabachir.dz` and `tabachir.com.dz` were free in the registry, and no app on Google Play Algeria used the name. `tabachir.com` is taken |
| Countries | Algeria first: until the end of the 2027/28 school year, the project builds only for Algerian teachers. Country specifics are data, not code, so other countries can use Tabachir later (§1.14) |
| Goal | The state adopts Tabachir as the official digital record of teaching. Principle 6 now reads: built to become the official record, never by default |
| Institution mode | The school or authority is the controller; the project is only the publisher or a processor. Gates and the data-use charter bind every deployment (§1.15) |
| Insight figures | The IGP sees each report first and has 30 days to comment. Figures are never used for exam thresholds or personnel decisions (§1.6) |
| Section 1 | Settled on 27 Sep 2026. From now on, changing a principle follows §1.2 |

**Open**
- **Protecting the name.** Three steps:
  - reserve the GitHub organisation `tabachir` so nobody else takes it;
  - register `tabachir.dz` and `tabachir.com.dz`, under the registry's conditions;
  - file the trademark with INAPI through counsel.
- **The legal entity.** Not decided yet. It is needed to sell services, to receive grants and to sign any institutional agreement (§1.15).
- **The minimum group sizes for insights.** The insights section sets them.
- **Questions for counsel.** There is no budget for counsel yet, so the project will look for free help, for example university law clinics or incubators. School deployments wait for the answers. The questions:
  - who the controller is for each kind of school, and whether a school deployment needs any approval beyond the Director of Education's (§1.15);
  - whether teachers may send lesson-level insights without written authorisation (§1.6);
  - the copyright status of the IGP plans (brief §8);
  - the rules on foreign funding;
  - whether the scrubbed research may be published;
  - the trademark filing.
- **Funding the team's time** until services and institutions pay. The business section covers this.
- **Members of the teacher council.** Chosen after the field check.
- **Other countries.** Whether another country follows Algeria, and which, is decided after the 2027/28 school year (§1.14).

---

## 2. Goal, users and scope

This section sets out:
- what Tabachir is for;
- who uses it;
- how the daily workflow runs;
- what version 1 covers.

It complies with Section 1. Later sections design each part: the teacher app, the lesson engine and plan packs, data and formats, privacy and security, institution mode, the state layer, the business and the roadmap.

### 2.1 The problem

- **Teachers copy the same lesson by hand, every day, into several documents.** The ministry's plans reach teachers as PDF files. From them, teachers write out (brief §1, §4):
  - their distributions;
  - their daily journal;
  - the texts-book entry for each class;
  - their lesson notes.
- **These documents are required, and someone checks them.**
  - Primary teachers keep the daily journal (الكراس اليومي) and the roll-call book (Decision 831 of 1991). The director countersigns them, and the inspector checks them at visits.
  - In CEM and lycée, each class has a texts book (دفتر النصوص, Decision 155 of 1991). The teacher signs it every session, and the director endorses it.
  - Since 2025/26, CEM teachers also keep a continuous-assessment book (circular 270).
- **The pieces exist, but the chain does not.** No product carries a lesson from the official plan to the day's session, and on to every document the teacher must keep, at every level (brief §1).
- **The state's platforms cover marks, absences and parents, not lessons.** Lesson records are still on paper. A digital texts book is on the ministry's July 2025 roadmap (brief §9).
- **Scale.** About 630,000 teachers (February 2026) and 12 million pupils (September 2026) (brief §2).

### 2.2 The goal and the end state

- **The goal** (principle 6). The Algerian state adopts Tabachir as the official digital record of teaching.
- **The end state: Tabachir replaces the paper procedures completely.** It is not a supplement to them.
  - The ministry publishes its plans through Tabachir.
  - The system gives every class its lesson for every session.
  - Teachers confirm what was taught instead of writing it.
  - The journal, the texts book, the distributions, the lesson notes and the roll-call book become digital records.
  - Official marks go into the state's system through the export.
- **Paper goes when the law says so.** Official texts require the paper books. They disappear once a ministerial text gives the digital record official status (§1.15, step 4). Until then, Tabachir removes the copying and prints what the paper rules still require.
- **The path** (§1.15). It has three parts:
  - teachers first, because the state adopts what teachers already use;
  - a design that meets the needs of an official record from the first release;
  - the state's doors worked in parallel.

### 2.3 The core workflow

1. **The plan goes in.** The ministry uploads its plan as a PDF, or fills in a form.
   - Both produce the same plan pack, which is reviewed before it is published and then available to every teacher.
   - Until the ministry joins, the project's curators and teacher-reviewers run the same process (§1.7).
2. **Lessons get dates.** For each class, the system assigns each lesson to a session, using three inputs: the plan, the class timetable, and the calendar (holidays, exams, closures).
   - Primary plans are numbered by week, so the dates follow directly.
   - CEM and lycée plans give hours per sequence, so each class's dates depend on its timetable.
3. **The teacher sees the day's lessons** on the Today screen.
   - A weekly digest comes by default. A daily preview comes only if the teacher turns it on.
   - There are no notifications at night or at weekends.
4. **The teacher confirms, and never writes.**
   - After the session, one tap confirms "done as planned".
   - Any other outcome takes one more tap: continued next time, merged, skipped, re-taught, or not held.
   - A whole day or week can be confirmed at once, with its exceptions.
   - Free text is always allowed.
5. **Everything else follows.**
   - The system writes the journal and texts-book entries, the distributions and the lesson-note drafts.
   - It re-paces the following lessons from what was actually taught.

**Five rules**
1. **A proposed lesson is never a taught lesson.** Only the teacher's confirmation records it. A record that filled itself in could show a lesson on a day the teacher was absent or the school was closed.
2. **Changing the proposal costs no more than confirming it.**
3. **Progress belongs to the class,** the subject and the school year, not to the teacher.
4. **History is only ever added to.** A new plan, timetable or assignment never rewrites a recorded session.
5. **A missing entry is never an absence** (§1.15, charter point 3).

### 2.4 Who uses Tabachir

| Participant | What they do and get | When |
|---|---|---|
| **Teacher** (primary, CEM, lycée) | The app, with:<br>• the day's lessons and one-tap confirmation<br>• roll call and continuous assessment<br>• the documents and the term export<br>• a weekly digest<br>• progress statements and handovers | Pilot, then launch |
| **Subject coordinator and teaching council** | A merge of the progress statements that teachers choose to share, for the council's pacing plan | Pilot |
| **Director**, with the ناظر or the education counsellor | • **Reader mode:** opens what teachers share, with no account<br>• **The timetable package:** imports the school timetable (FET or Excel) and sends each teacher their part<br>• **School mode:** an operational dashboard showing workload, sessions awaiting confirmation and classes behind the plan. It stays inside the school, and the teacher sees the same view | Reader mode in the pilot; the package at launch; school mode after the gates (§1.15) |
| **Inspector** | Progress statements before a visit. In school mode, access granted by the authority, limited in time and visible to the teacher | Pilot; school mode |
| **Directorate** | In its own deployment, as controller: figures on what the system owes teachers, such as cover provided, vacant posts, sessions lost to closures and how pace varies | From 2027/28 (§1.15, step 3) |
| **Ministry and IGP** | • Publishes plans through Tabachir (upload or form)<br>• Sees insight reports first (§1.6)<br>• Adopts Tabachir nationally (step 4) | When the ministry joins |
| **Students and parents** | Nothing yet: the ministry's parent space serves them today. Their data is designed into Tabachir from the start, but features for them run only in institution mode, on the institution's systems (§1.15) | After the gates |
| **The project's curators and teacher-reviewers** | Turn plan PDFs into plan packs, with help from AI and a two-person review, until the ministry does it itself | From now |

### 2.5 Version 1

Version 1 is tested in a pilot from January to March 2027 and launched in September 2027.

| Area | Version 1 |
|---|---|
| Levels | Primary, CEM and lycée.<br>• The pilot covers a few grades and subjects per level, wherever a reviewed plan pack exists.<br>• The launch covers all three levels, with the packs that are ready by then |
| Features | The lesson log and the register, joined by the session |
| Documents | • Texts-book entries (دفتر النصوص)<br>• The primary journal (الكراس اليومي) and the CEM and lycée personal journal<br>• Distributions<br>• Lesson notes (المذكرة), as templates filled in from the plan<br>• The roll-call book (دفتر المناداة), with its monthly summary |
| Roll call | It replaces the paper book, as the teacher's own record.<br>• It can be taken in class or after the lesson, with a paper fallback (circular 460 Art. 48).<br>• The school's official absence system is not replaced |
| Assessment | • Continuous-assessment components chosen by the teacher, within the circular<br>• Averages by the official formula<br>• Appreciations suggested from the official list and confirmed by the teacher for each pupil (circular 244) |
| Term export | • The school's Excel workbook, filling only its unlocked cells<br>• A view ready for the ostad grid<br>• Printed sheets<br>• The class-council pack |
| Devices | An Android app, and an installable web app for PCs. Both work offline |
| Languages | Arabic, French and English interfaces. Documents come out in the subject's language |
| AI | For curators only, never with pupil data. None in the teacher app |
| School layer | • Reader mode in the pilot<br>• The timetable package at launch<br>• School mode after the gates, first as a pilot in 2027/28 |
| Not in version 1 | • Features for students and parents<br>• Directorate and ministry deployments<br>• The insights observatory (2027/28)<br>• An iPhone app<br>• AI in the teacher app |

### 2.6 What Tabachir never does

- **Ask anyone to assign lessons to sessions by hand,** or record a lesson as taught without the teacher's confirmation.
- **Track teachers.** No attendance, absence reasons, clock times, "started" events, location or biometrics, and no personal phone required.
- **Judge teachers.** No scores, rankings or colour codes for teachers, and no inference of their effort or performance. Whether sessions are confirmed stays inside the school (§1.11).
- **Hold readable pupil data on the project's servers** (principle 2).
- **Run features for students or parents outside institution mode.**
- **Duplicate what the state's systems already hold,** such as teacher assignments and hours, official absences and official results. It imports from them or exports to them.
- **Connect to or automate state platforms without an agreement.** Data moves as files.
- **Let its figures be used for exam thresholds or personnel decisions** (§1.6).

### 2.7 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| End state | Full replacement of the paper procedures, once a ministerial text allows it |
| Core workflow | The plan goes in (ministry upload or form) → each class gets dated lessons → the teacher confirms with one tap → the documents follow |
| Levels | Primary, CEM and lycée |
| Version 1 | The lesson log and the register, with the documents listed in §2.5 |
| Roll call | Replaces the paper roll-call book, as the teacher's own record |
| Assessment | The official formula; components chosen by the teacher; appreciations suggested, then confirmed |
| Notifications | A weekly digest by default; a daily preview only if the teacher turns it on |
| The director's view | An operational dashboard in school mode, inside the school |
| Students and parents | Designed for now, built later, and only in institution mode |
| Devices and languages | Android and web; Arabic, French and English |
| AI | For curators only |
| Dates | Pilot January–March 2027; launch September 2027 |
| Section 2 | Settled on 27 Sep 2026 |

**Open**
- **The pilot slice.** Which grades, subjects and schools. It is chosen after the field check, by December 2026.
- **Plan packs for lycée.** Few lycée plans are online. The field check finds out which exist.
- **The lesson-note template for each level,** and whether inspectors accept it. The field check tests this.
- **Whether directors will countersign printed pages** (§1.15, step 1). The pilot tests this.
- **Which body would issue the text for national adoption** (step 4), and when. The state track finds out.
