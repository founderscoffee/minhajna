# Tabachir: Product Requirements Document

*Tabachir (طباشير) is the product's name, chosen on 26 Sep 2026. Repository: [github.com/founderscoffee/tabachir](https://github.com/founderscoffee/tabachir). Started 26 Sep 2026.*

This PRD is written one section at a time, and we settle each section before starting the next. Each section records decisions and ends with a list of what is still open.

The evidence is in the project's research brief, cited as "brief §n", and in the research files it summarises. The brief stays private because it quotes teachers and names other developers (§1.4). Its conclusions will be published.

| § | Section | Status |
|---|---|---|
| 1 | [Open-source strategy and governing guidelines](#1-open-source-strategy-and-governing-guidelines) | Settled on 27 Sep 2026. Changes proposed on 29 Sep 2026 (decision 0015) |
| 2 | [Goal, users and scope](#2-goal-users-and-scope) | Settled on 27 Sep 2026. Changes proposed on 29 Sep 2026 (decision 0015) |
| 3 | [The teacher app](#3-the-teacher-app) | Settled on 27 Sep 2026. Changes proposed on 29 Sep 2026 (decision 0015) |
| 4 | [The lesson engine and plan packs](#4-the-lesson-engine-and-plan-packs) | Settled on 27 Sep 2026 |
| 5 | [Data, formats and foundations](#5-data-formats-and-foundations) | Settled on 27 Sep 2026 |
| 6 | [Privacy, security and non-functional requirements](#6-privacy-security-and-non-functional-requirements) | Settled on 27 Sep 2026 |
| 7 | [The school layer and institution mode](#7-the-school-layer-and-institution-mode) | Settled on 27 Sep 2026 |
| 8 | [The state layer](#8-the-state-layer) | Settled on 27 Sep 2026 |
| 9 | [Business](#9-business) | Settled on 27 Sep 2026 |
| 10 | [Roadmap, metrics and risks](#10-roadmap-metrics-and-risks) | Settled on 27 Sep 2026 |

---

## 1. Open-source strategy and governing guidelines

*Changes proposed on 29 Sep 2026 in decision 0015, for the project's goal: national adoption, with the Ministry running Tabachir on government servers. They take effect when that decision is accepted. The founder's choices of 29 Sep 2026 are marked "(29 Sep)".*

The whole system is open source from its first line of code: the apps, the servers, the tools and the documents. This section sets the rules that govern the project:
- what is open, and under which licence;
- what stays private, and why;
- how pupils' data is protected in public;
- how people contribute and how decisions are made;
- how the project pays for itself without closing anything;
- how the Ministry runs it as one national system, and the charter that protects teachers;
- why it serves Algeria first, and how other countries can use it later.

The project's goal is for the Algerian state to adopt Tabachir as the official digital record of teaching (principle 6), with the Ministry running it on government servers (29 Sep).

Every later section of this PRD must comply with this one. When a feature conflicts with a principle in §1.2, the feature changes, not the principle.

### 1.1 Why open source

- **Proof instead of promises.** Anyone can have the code checked: a teacher, a director, an inspector or the ANPDP. It shows three things:
  - pupils' data never reaches the project;
  - there are no ads or trackers;
  - marks stay as confidential as circular 465 §3.5 requires.

  By contrast, at least one paid rival stores teachers' data on servers abroad (brief §10).
- **The tool outlives its company.** This year one developer's whole Google Play account vanished, and its teacher apps went with it (research 04). With open code and an open file format, teachers are never stranded.
- **State-ready by construction, because state adoption is the goal.** The Ministry can audit the code, run it on government servers as one national system (§5.2), or reuse parts of it in the digital دفتر النصوص on its July 2025 roadmap (brief §9). It needs nothing from the project to do so, and it can do all this without buying from a startup.
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
| Name and logo | Not licensed | The name policy (§1.9) |

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
| The records of the national system | The Ministry is their controller (§1.15) | Held on the Ministry's servers, encrypted so that only the teacher, their school and a granted inspector can read them (§5.4). The project holds none of them |

### 1.5 Pupil data and privacy rules

**In the product**
- **Nothing leaves the device by default.** In teacher mode, pupil data leaves the device only inside the end-to-end encrypted sync or backup, and only if the teacher turns it on.
  - **In the national system,** the school's copy of the teacher's pupil records is kept in the school's space, encrypted so that only the teacher and the school can read it. Marks, and absences where the school chooses, go to the state's systems, encrypted for them alone (§5.4, §5.9).
  - The app never needs a server, the project's or the Ministry's, to open or to do the daily work.
  - The storage rules in brief §10 apply: no OS cloud backup of pupil data, an encrypted database, and an app lock.
- **No third-party SDKs that send data.** No analytics, advertising, crash-reporting or AI SDKs.
- **A public network inventory.** `NETWORK.md` lists every address the app can contact, what it sends and why. A change that adds or widens a network call is a *privacy-sensitive change* (§1.7).
- **Crash reports are off by default.** The teacher sees each report before it is sent. Names and marks are removed, and the report goes to the server in Algeria that the teacher uses: the project's, or the Ministry's in the national system.
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

The insights layer is opt-in and shares lesson-level data only. A later section designs it; the rules below bind that design. It runs in teacher mode from 2027/28, and is retired once the national system's totals exist (§5.10, 29 Sep).

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
  - In the national system, the Ministry runs Tabachir itself, and the project is only the publisher of the software, never the controller (§1.15). Before adoption, the project runs no deployment for a school or an authority (29 Sep).
- **The state may adopt, host or fork the project** under its licence. The project publishes a deployment guide, and the state can contract larger support (§1.10).
- **After adoption, the Ministry's own staff maintain Tabachir** (29 Sep). They join the project's public process as maintainers, so releases, the principles and the charter are still decided in public (§5.2).
- **Accounts.** The code lives in a GitHub organisation, not a personal account, so it can be handed over without breaking links. Every maintainer uses two-factor authentication.

### 1.9 Official builds, releases, the name and security

- **Built only from the public source.** Official builds contain nothing that is not in the public repositories.
- **Official sources.** Google Play, the project's `.dz` website (Android APK, PC or web) and F-Droid. The website and the README say that no other source is official.
- **The Ministry's app** (29 Sep). In the national system, the Ministry's app is the project's release, with the Ministry's name and icon as settings. It is built reproducibly, so anyone can check it against the published code, and the project publishes its checksums with each release. The project's own app can always connect to the national system too (§5.2).
- **Signed releases.**
  - Every release is signed.
  - The fingerprint of the signing key and the checksums of each release are published on the website and in the README.
  - The goal is reproducible builds, so that anyone, F-Droid included, can check that a build matches the source.
- **The release calendar follows the school year.** In the two weeks before each term-end export window, only fixes ship. The windows fall around mid-December, March and May (brief §14).
- **Changelog.** Every release has notes written for teachers. `CHANGELOG.md` is in English (29 Sep). Teachers read the notes in Arabic in the app and in the teacher group.
- **The name: Tabachir (طباشير).**
  - **Meaning.** Chalk, the teacher's everyday tool. Written in Latin letters, it also reads as تباشير: the first light of dawn, or good news.
  - **Spelling.** Always "Tabachir" in Latin letters, never "Tabashir", which is taken on GitHub. The Arabic form is طباشير.
  - **Descriptive line.** The words teachers search for go in the line under the name, never in the name itself, for example "Tabachir: الكراس اليومي ودفتر المناداة والتنقيط" or "Tabachir: the teacher's class logbook".
  - **Not registered** (29 Sep). The name and logo are not registered as trademarks. They are protected only by use, by the official sources above and by the published checksums.
  - **Forks.** The name policy (`TRADEMARKS.md`) lets anyone fork, but under another name and logo, and without suggesting that the fork is the official app. The Ministry's deployment runs under its own name (§5.2).
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
- **Code of conduct** (`CODE_OF_CONDUCT.md`, adapted from the Contributor Covenant, in English, 29 Sep). The README summarises it in Arabic.
  - Respect; no harassment or personal attacks.
  - Project spaces stay about the product: no political or union campaigning, and no attacks on named people, whether officials, colleagues, pupils or parents.
- **Neutrality.** The project takes no side in disputes between teachers and the administration. It follows the official texts and cites them.
  - No feature detects, counts or reports collective action.
  - Whether sessions are recorded or still awaiting confirmation never leaves the school. In the national system, only the school key opens it (§6.5).

### 1.12 Continuity pledge

- **Open format, free export.** The file format is documented and public, and teachers can export all their records, for free, at any time.
- **If the project stops or its legal entity closes:**
  - the code, the data repository and the documents stay public as archives;
  - the last release keeps working offline, because the daily work never depended on the project's servers;
  - the sync service gives at least six months' notice, runs until after that school year's last term export, and provides a full export for every teacher. The same applies when the project's server closes after the Ministry's system opens (§5.2);
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
- **The name.** Only an official edition may use the Tabachir name in another country.

### 1.15 Institution mode

Institution mode is how an education authority uses Tabachir as an institution, not only through its teachers' own apps. It is the road to the goal in principle 6.

- **It has one form: the national system** (29 Sep). The Ministry runs Tabachir on government servers, as one national system with a space for each directorate and each school (§5.2).
- **Until the Ministry's system opens, Tabachir runs in teacher mode only** (29 Sep). Before then, the project runs no deployment for a school or an authority, and seeks no official acceptance of printed pages.
- **The design protects teachers** (29 Sep). No legal text is required before the Ministry hosts Tabachir, so the protections are built into what the servers can read and compute (§5.1, §6.5).

**Who is responsible**
- **The Ministry is the controller** of the records it requires, and runs the servers. The project is only the publisher of the software. It holds none of the records and runs none of the servers.
- **The roles within the Ministry.** Counsel confirms how the Ministry, its directorates and its schools share the controller's role.
- **Students and parents** (29 Sep). Tabachir builds no features for them. Parents see marks, and absences where the school chooses, in the state's awlyaa space (§5.9). Pupil data still never reaches the project (principle 2).

**What the national system needs before the mandate starts**

These are the Ministry's to meet (§6.2). The project asks for them, and builds the system so that its protections hold even where one is missing.
- the ministerial text that makes the record official (below);
- the Ministry's declaration to the ANPDP, an impact assessment where the law requires one, and a data-protection officer;
- notice to the teachers concerned (Loi 18-07 Art. 32);
- consultation of the staff technical committees and the representative unions before the rollout, with the results published (29 Sep);
- the charter presented to every school's teachers' council (29 Sep);
- the launch gate: a load test at national scale, a trial term end, the independent security review and a full restore from backup (§6.8).

**The path to official status**
- **Now: a teacher's tool.** Tabachir prepares and prints what the school and the state's platforms ask for, and nothing it makes is official.
- **The first ask** (29 Sep): a ministerial text that makes the full digital record official, and compulsory from the national launch. It covers the texts book, the journal, roll call and marks (§5.5). The ask includes the charter's protections, as a request, not a condition.
- **The national launch.** The mandate starts only once the national system has passed the launch gate (§6.8). Its date is set once the Ministry adopts Tabachir (29 Sep).
- **Once a record is official,** the weekly signed record is the official record, with signed exports and a history that cannot be altered (§5.5).

**The data-use charter**

The charter is:
- published as `CHARTER.md`, in English (29 Sep). The README summarises it in Arabic;
- asked for in the Ministry's text, but not required (29 Sep);
- presented to every school's teachers' council before the national launch (29 Sep);
- built into the design wherever the design can enforce it (§5, §6);
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
| `CODE_OF_CONDUCT.md` | Conduct rules, in English. The README summarises them in Arabic |
| `GOVERNANCE.md` | Roles, how decisions are made, how principles change, the teacher council |
| `SECURITY.md` | Private reporting, response times |
| `TRADEMARKS.md` | The name policy: what forks may and may not do with the name and logo |
| `PRIVACY.md` | What the project holds about teachers and why, and what it never holds |
| `CHARTER.md` | The data-use charter (§1.15), in English. The README summarises it in Arabic |
| `NETWORK.md` | Every address the app contacts, what it sends and why |
| `docs/decisions/` | Decision records |
| `CHANGELOG.md` | Release notes, in English. Teachers read them in Arabic in the app (§1.9) |
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

**Decided on 29 Sep 2026**

| Decision | Choice |
|---|---|
| Languages | `CHARTER.md`, `CODE_OF_CONDUCT.md` and `CHANGELOG.md` are in English. The README summarises them in Arabic, and teachers read the release notes in Arabic in the app |
| The name | Not registered as a trademark. Protected by use, the official sources and the published checksums |

**Proposed on 29 Sep 2026 (decision 0015)**

| Decision | Choice |
|---|---|
| Goal | National adoption, with the Ministry running Tabachir on government servers |
| Institution mode | One form: the national system, run by the Ministry. Teacher mode only until it opens. No school or directorate deployments before then |
| Who is responsible | The Ministry is the controller and runs the servers. The project only publishes the software |
| The first ask | A ministerial text making the full digital record official and compulsory from the national launch, with the charter's protections asked for, not required |
| Before the mandate | The Ministry's own compliance, the consultation of teachers' representatives, the charter presented to every teachers' council, and the launch gate |
| Students and parents | No features for them. Parents use the state's awlyaa space |
| The Ministry's app | The project's release, with the Ministry's name and icon as settings, built reproducibly. The project's own app can always connect |
| After adoption | The Ministry's staff maintain Tabachir, as maintainers in the project's public process |
| Insights | Opt-in, in teacher mode, from 2027/28 until the national totals exist |

**Open**
- **Protecting the name.** Two steps, since the trademark is not registered:
  - reserve the GitHub organisation `tabachir` so nobody else takes it;
  - register `tabachir.dz` and `tabachir.com.dz`, under the registry's conditions.
- **The legal entity.** Not decided yet. It is needed to sell services, to receive grants and to sign any institutional agreement (§1.15).
- **The minimum group sizes for insights.** The insights section sets them.
- **Questions for counsel.** There is no budget for counsel yet, so the project will look for free help, for example university law clinics or incubators. The questions:
  - how the Ministry, its directorates and its schools share the controller's role in the national system (§1.15);
  - whether teachers may send lesson-level insights without written authorisation (§1.6);
  - the copyright status of the IGP plans (brief §8);
  - the rules on foreign funding;
  - whether the scrubbed research may be published.
- **Funding the team's time** until services and institutions pay. The business section covers this.
- **Members of the teacher council.** Chosen after the field check.
- **Other countries.** Whether another country follows Algeria, and which, is decided after the 2027/28 school year (§1.14).

---

## 2. Goal, users and scope

*Changes proposed on 29 Sep 2026 in decision 0015, for the national system run by the Ministry. They take effect when that decision is accepted.*

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

- **The goal** (principle 6). The Algerian state adopts Tabachir as the official digital record of teaching, and the Ministry runs it on government servers as one national system (29 Sep).
- **The end state: Tabachir replaces the paper procedures completely.** It is not a supplement to them.
  - The ministry publishes its plans through Tabachir.
  - The system gives every class its lesson for every session.
  - Teachers confirm what was taught instead of writing it.
  - The texts book, the journal, roll call and marks become the official record, which the teacher signs each week (§5.5, 29 Sep). The distributions and the lesson notes are made from the plan.
  - Marks go to the state's system through the national interoperability system (§5.9).
- **Paper goes when the law says so.** Official texts require the paper books. They give way once a ministerial text makes the digital record official, and compulsory from the national launch (§1.15). Until then, Tabachir removes the copying and prints what the paper rules still require. After that, paper stays only as the fallback (§5.5).
- **The path** (§1.15). It has three parts:
  - teachers first, in teacher mode, until the Ministry's system opens, because the state adopts what teachers already use;
  - a design built for the national system from the first release (§5.1);
  - the state track worked in parallel, with the first ask: the full digital record, compulsory from the national launch (Section 8).

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
6. **In the national system, the teacher signs each week** of each course, in one step, with the fingerprint prompt or a PIN. The signed week is the official record, and it can always be corrected (§5.5).

**Five rules**
1. **A proposed lesson is never a taught lesson.** Only the teacher's confirmation records it. A record that filled itself in could show a lesson on a day the teacher was absent or the school was closed.
2. **Changing the proposal costs no more than confirming it.**
3. **Progress belongs to the class,** the subject and the school year, not to the teacher.
4. **History is only ever added to.** A new plan, timetable or assignment never rewrites a recorded session.
5. **A missing entry is never an absence** (§1.15, charter point 3).

### 2.4 Who uses Tabachir

| Participant | What they do and get | When |
|---|---|---|
| **Teacher** (primary, CEM, lycée) | The app, with:<br>• the day's lessons and one-tap confirmation<br>• roll call and continuous assessment<br>• the documents and the term export<br>• a weekly digest<br>• progress statements and handovers<br>• in the national system, joining the school's space with a QR code, and signing each week (§5.5, §5.8) | Pilot, then launch. The national system after adoption |
| **Subject coordinator and teaching council** | A merge of the progress statements that teachers choose to share, for the council's pacing plan | Pilot |
| **Director**, with the ناظر or the education counsellor | • **Reader mode:** opens what teachers share, with no account<br>• **The timetable package:** imports the school timetable (FET or Excel) and sends each teacher their part<br>• **The school's space, in the national system:** the signed weeks, and an operational view of workload, sessions awaiting confirmation and classes behind the plan. It updates a few times a day, stays inside the school, and only the school key opens it. The teacher sees the same view (§5.10) | Reader mode in the pilot; the package at launch; the school's space in the national system |
| **Inspector** | Progress statements before a visit. In the national system, a grant from the authority opens the named courses and weeks, between its dates, and the teacher sees it (§5.10) | Pilot; the national system |
| **Directorate** | In the national system, totals only, above the minimum group sizes: what the system owes teachers, such as cover provided, vacant posts and sessions lost to closures, and the curriculum report. Never a figure for one school or one teacher (§5.10) | The national system |
| **Ministry and IGP** | • Publishes plans through Tabachir (upload or form)<br>• The IGP sees insight reports first (§1.6)<br>• Adopts Tabachir by a ministerial text, and runs the national system on government servers (§5.2)<br>• Sees totals only, above the minimum group sizes (§5.10) | When the Ministry joins. The national system after adoption |
| **Students and parents** | Nothing in Tabachir (29 Sep). Parents see marks, and absences where the school chooses, in the state's awlyaa space, fed through the national interoperability system (§5.9) | — |
| **The project's curators and teacher-reviewers** | Turn plan PDFs into plan packs, with help from AI and a two-person review, until the ministry does it itself | From now |

### 2.5 Version 1

Version 1 is tested in a pilot from January to March 2027 and launched in September 2027, in teacher mode. The national system's launch date is set once the Ministry adopts Tabachir (29 Sep).

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
| School layer | • Reader mode in the pilot<br>• The timetable package at launch<br>• The school's space only in the national system, after adoption (§1.15) |
| Not in version 1 | • The national system: school spaces, the weekly signature, the interoperability connector and the totals, built for the national launch (§5.1)<br>• The insights observatory (2027/28)<br>• An iPhone app<br>• AI in the teacher app |

### 2.6 What Tabachir never does

- **Ask anyone to assign lessons to sessions by hand,** or record a lesson as taught without the teacher's confirmation.
- **Track teachers.** No attendance, absence reasons, clock times, "started" events, sign-in events, location or biometric data, and no personal phone required. The phone's fingerprint prompt never leaves the phone (§6.4).
- **Judge teachers.** No scores, rankings or colour codes for teachers, and no inference of their effort or performance. Whether sessions are confirmed stays inside the school, and in the national system only the school key opens it (§1.11, §6.5).
- **Hold pupil data that a server can read,** whoever runs the server (principle 2, §6.5). Only the state's own systems read the marks and absences sent to them (§5.9).
- **Build features for students or parents.** The state's awlyaa space serves them (29 Sep).
- **Duplicate what the state's systems already hold,** such as teacher assignments and hours, official absences and official results. It imports from them or exports to them.
- **Connect to or automate state platforms without an agreement.** In teacher mode, data moves as files. In the national system, it moves only through the national interoperability system (§5.9).
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

**Proposed on 29 Sep 2026 (decision 0015)**

| Decision | Choice |
|---|---|
| Goal | The Ministry runs Tabachir on government servers, as one national system |
| End state | The texts book, the journal, roll call and marks become the official record, signed each week and always correctable. Compulsory from the national launch |
| The path | Teacher mode only until the Ministry's system opens. The first ask is the full digital record |
| The director's view | The school's space in the national system: confirmation status stays inside the school, opened only by the school key, updated a few times a day |
| Students and parents | No features in Tabachir. The state's awlyaa space serves them |
| The national launch | No date yet. It is set once the Ministry adopts Tabachir |

**Open**
- **The pilot slice.** Which grades, subjects and schools. It is chosen after the field check, by December 2026.
- **Plan packs for lycée.** An archive of 89 lycée plan files from September 2022, covering 23 subjects, was found (research 09). The field check finds out which of them are in force (§4.12).
- **The lesson-note template for each level,** and whether inspectors accept it. The field check tests this.
- **Which body would issue the text for national adoption** (§1.15), and when. The state track finds out.

---

## 3. The teacher app

*Changes proposed on 29 Sep 2026 in decision 0015, for the national system run by the Ministry. They take effect when that decision is accepted.*

This section specifies what the teacher does and gets. Three later sections cover the parts it relies on:
- Section 4, the lesson engine that proposes each session's lesson;
- Section 5, the data, file formats and sync;
- Section 6, privacy, security and the non-functional requirements.

### 3.1 Design rules

Every screen follows these rules.

1. **One entry, every output.** A session is recorded once. That record feeds the journal, the texts-book entry, the roll call, continuous assessment and every printout.
2. **Faster than paper.**
   - An ordinary session takes about 5 seconds to confirm.
   - Marking the roll for 40 or more pupils is at least as fast as paper.
   - Both are measured in the pilot, against the paper routine timed in the field check.
3. **Proposed, never assumed.** The app proposes; only the teacher's confirmation records (§2.3).
4. **Correct anything, lose nothing.**
   - Any entry can be corrected at any time, and the history keeps both versions.
   - There are no deadlines, time windows or locks.
   - In the national system, a signed week can still be corrected. The correction is signed too, and both versions show (§5.5).
5. **Print what is checked.**
   - Every document prints the way directors and inspectors expect.
   - Every document can also print blank, with its headers filled in.
6. **Offline, with no account.** The app opens and does all the daily work without a network or an account (§1.5). In the national system, the teacher joins their school's space once, with a QR code, and still needs no password (§5.8).
7. **The phone alone is enough.** Everything works on a budget Android phone, including the PDFs to print and the term export. A PC is optional, because far fewer teachers have laptops than phones (brief §11). In the national system, no personal phone is required either: a teacher without a smartphone works on a school PC, with a security key the school issues (§6.6).
8. **Neutral words.** The app states facts, such as "3 sessions awaiting confirmation" or "2 weeks behind the plan". It never judges, as in "you are late" or "you can do better".
9. **Arabic first.**
   - The interface is in Arabic, French and English.
   - Layouts run right to left and left to right.
   - Documents come out in the subject's language.

### 3.2 Getting started

The goal is a usable app in about 10 minutes, without importing anything.

**The teacher**
- The teacher picks their levels, schools and subjects.
- A teacher card holds the details the documents print. The personal fields are optional and never leave the device.

**Joining the school's space** (national system, 29 Sep)
- **One QR code.** The school gives each teacher a QR code made from the official assignment list. The teacher scans it once, and the app links the key in their phone to their assignments (§5.8).
- **Nothing typed twice.** The school, the classes and the class lists come from the sector's information system, through the national interoperability system (§5.3, §5.9).
- **Signing in** uses the phone's fingerprint prompt or a PIN, and is never recorded. A teacher without a smartphone joins and signs in on a school PC with a security key the school issues (§6.4, §6.6).
- **Moving from teacher mode.** The app shows what will move into the school's space, and moves it once the teacher agrees. Private notes stay on the teacher's devices (§5.8).

**Classes and pupils**
- **Import** the pupil list from the official Excel file, keyed on the official registration number. Only the columns the app needs are kept. In the national system, class lists come in by themselves (§5.9).
- **Or type** the list.
- **No fixed limit on class size.** The paper roll-call book stops at 52 rows, and a class of 57 has been reported (brief §5.2).
- **Multigrade classes.** A primary class can hold up to three levels, each on its own plan (brief §4.3).
- **Pupil movements.**
  - Transfers in and out during the year are recorded with their date and reason.
  - A pupil who has left stays listed, with the reason, until the teacher records the director's confirmation.

**The week**
- **Where the week comes from.** The teacher accepts the school's timetable package, sent as a file or a QR code, or draws the week by hand.
- **Several schools.** A teacher who works in more than one school gets one merged week, with warnings about clashes.
- **The timetable handles:**
  - A/B weeks;
  - half-groups;
  - double shifts, Saturday classes and a fifth morning slot;
  - the same class twice in a day;
  - bivalent CEM subjects, such as Arabic with Islamic education;
  - specialists who teach up to about 20 groups;
  - time that belongs to the teacher rather than a class: the pedagogical half-day, hours in another school, duties and reductions.
- **Ramadan hours** come from the calendar, not from the timetable (Section 4).

**The plan and the calendar**
- **A plan pack for each class.** The teacher pins one plan pack to each class, and the class stays on that release. Without a pack, the log still works with free entry.
- **The calendar.**
  - The national calendar comes with the app.
  - Closures for a wilaya or a school can be added by the teacher, or received.

**The next school year** reuses last year's teacher card, template profiles and lesson notes. Last year's records stay available.

### 3.3 Today and the session

**The Today screen** lists the day's sessions in order. For each one it shows:
- the class, the subject and the group;
- the proposed lesson: its plan item and stage;
- what carried over from last time.

Special days are marked on it: holidays, seminars, councils, exam weeks, and cover for another teacher's class.

**Confirming a session**

| Outcome | Taps | What it records |
|---|---|---|
| Done as planned | 1 | The proposed plan item and stage |
| Last stage reached | 2 | The stages covered; the rest continues next time (تابع) |
| Merged | 2 | Two plan items taught together |
| Skipped | 2 | An item left out |
| Re-taught | 2 | An item taught again |
| Not held | 2 | That the session did not take place |

- **Reasons are optional and private.** A skipped item or a session not held can carry a reason that stays on the device: closure, exam, holiday, event, teacher absent, class absent, few pupils present, or other. No reason names collective action; the teacher uses "other" (§1.11).
- **A whole day or a whole week** can be confirmed at once, marking only the exceptions.
- **Session types** follow Algerian practice: درس، إدماج، أعمال موجهة، معالجة، استقبال, and فراغ for a free slot, plus tests and exams.
- **Every session can also record:**
  - homework, with its due date;
  - any test given;
  - free text, and content that wasn't in the plan.
- **Two layers of note:**
  - a factual line that can go into the texts-book entry and into shared statements;
  - a private note that never leaves the device.

  The app warns against writing pupils' health or discipline details in either.
- **No clock times.** A session is identified by its date and timetable slot. Printed times come from the timetable, never from when the teacher tapped.

**Signing the week** (national system, 29 Sep)
- **Once a week, for each course,** the app shows the week's record: the sessions and their outcomes, homework and tests, roll call and marks. The teacher signs it in one step, with the fingerprint prompt or a PIN (§5.5).
- **Until then,** the week is the teacher's working record and changes freely. Once signed, it is the school's record, and the official record.
- **Sessions still awaiting confirmation** are shown first. The teacher confirms them, or signs the week as it stands: a session left unconfirmed is never an absence (charter point 3).
- **Corrections stay possible** after signing, and show as corrections (§3.1, rule 4).

### 3.4 Roll call: the digital roll-call book

Roll call replaces the paper roll-call book (دفتر المناداة) as the teacher's own record. It never notifies parents, and it does not replace the school's official absence system (§2.5). In the national system, roll call becomes part of the official record, signed each week (§5.5). Where the school chooses, pupils' absences also go to the state's absence system, and parents see them in awlyaa (§5.9).

**Taking it**
- **Unit.** Per half-day in primary; per session in CEM and lycée. The same class can be taken twice in a day.
- **Specialists** keep one register per class and count only their own sessions.
- **Everyone is present by default.** The teacher marks only the exceptions:
  - absent, marked justified or unjustified. The cause is never typed (§5.6);
  - late, which can happen several times a day, carries the date and doesn't count as an absence.
- **When.** In class or after the lesson, because circular 460 Art. 48 limits phones in class.
- **Paper fallback.** A printable blank sheet, entered later. It also serves a substitute or a day without the phone.
- **Corrections.** Past days can be corrected, and an audit trail keeps every change, because roll calls carry legal weight.

**Counting**, following the roll-call templates (brief §13.4)
- **The half-day is the unit.** An absence in the morning or in the afternoon counts 1; a whole day counts 2.
- **Totals are automatic, for each pupil and each month:**
  - possible attendance (ح-ك);
  - absences (غ);
  - actual attendance (ح-ف);
  - the rate.
- **A yearly summary** runs from September to June.
- **Counting rules are settings,** with defaults: holidays, seminars, half-days, the start date, and days the class was not held. Teachers disagree on these rules, and no official text settles them.

**Printing**
- **The monthly two-page spread**, on A4 portrait:
  - one column per day, with weekends and national days shaded;
  - the paper book's symbols: `-` absent in the morning, `ǀ` absent in the afternoon, `+` absent all day;
  - the matching Hijri month;
  - signature boxes for the teacher, and for the director and the inspector with dates.
- **Lateness**, which has no symbol on paper, prints in its own column with its dates.
- **Each pupil's absence dates**, not only the counts.
- **The yearly summary page.**
- **The front pages** print what the app holds. The two confidential pupil-record pages print blank, to be filled in by hand: the app does not collect parents' details or home addresses.
- **For CEM and lycée,** an absence sheet for each session, for the supervisors' route.

### 3.5 Continuous assessment, marks and averages

- **Components per class and subject.**
  - An official preset for each level, built from the year's circulars as data.
  - The teacher chooses the components and their weights within the circular, and can add columns.
  - Primary continuous assessment is kept month by month and rolled up per term.
  - In terms where descriptive observations replace marks, such as 1AP term 1, the teacher records observations instead.
- **Captured during the session:** participation, homework, notebook and behaviour. Roll call can feed the attendance and discipline component if the teacher turns that on (circular 270 allows it).
- **Tests (فروض) and exams.** Entry is checked for:
  - marks above the maximum;
  - empty cells;
  - pupils who are not on the class list.
- **Averages** follow the official formula for each level, kept as versioned data (brief §5.4). T is continuous assessment, F the tests and E the exam.
  - Primary, out of 10: (T + E)/2 for languages and maths; E alone for the other examined subjects.
  - CEM: ((T + F)/2 + 2E)/3.
  - Lycée: (T + F + 2E)/4, or (T + F + P + 2E)/5 with practical work, or with an oral in place of P.
- **Rounding.** Full precision is stored and 2 decimals are shown. Thresholds are compared on the unrounded value.
- **Printouts:**
  - the grade book;
  - a per-pupil justification of the continuous-assessment mark. This doubles as the continuous-assessment book that circular 270 requires, and as the teacher's answer to a parent's appeal.

### 3.6 Appreciations

- **Suggested, then chosen.** The app suggests a phrase from the versioned official list, by mark band and, if the teacher wants, by behaviour and attendance. The teacher confirms or changes it for each pupil.
- **No "fill all".** Circular 244 requires a manual choice.
- **Guards:**
  - banned phrases are blocked;
  - a phrase that only restates the mark is flagged;
  - the export refuses to run while any box is empty.

### 3.7 The term export

The school chooses the route: the ostad grid, or the Excel workbook the administration extracts from amatti (brief §5.6). In the national system, marks are part of the official record, and go straight to the state's system through the national interoperability system. The routes below stay as the fallback (§5.9, 29 Sep).

- **The school's Excel workbook.**
  - The app fills only the unlocked cells, keeping the workbook's protection, structure and file type.
  - The workbook's variants are handled as data.
  - Every result is tested in Microsoft Excel and in WPS for Android.
- **A view ready to copy into the ostad grid.**
- **Printed mark sheets,** and PDF, DOCX and CSV files.
- **A check before signing.** The app compares the register with the exported file, in the same form as the official control printout.
- **The correction window** after term is supported, with the teacher's report that each correction needs.
- **The class-council pack.** Class statistics:
  - average, highest and lowest mark, and standard deviation;
  - the success rate: 10/20, or 5/10 in primary;
  - the distribution by band, and counts by sex;
  - pupils' ranks, and a comparison with last term;
  - pupils who may need remediation, and pupils in line for a distinction, with thresholds the teacher sets, since none are official;
  - the attendance summary.
- **Never:**
  - ask for ostad or amatti passwords;
  - automate the state's platforms, outside the national interoperability system;
  - produce a report card (§2.6).

### 3.8 The documents

Each document can be printed, saved as PDF or DOCX, and printed blank with its headers filled in.

**Template profiles** can set the fields, their order and their labels for an inspector or a district, because no official layout exists (brief §13). Signature and visa boxes are always kept.

| Document | What it contains |
|---|---|
| **Primary journal** (الكراس اليومي) | • **Front pages:** cover, teacher card, holidays and national days, seminars and training, the pupil list, and the weekly timetable with an "approved on" box<br>• **Daily page:** A4 landscape, with morning and afternoon bands. Columns: duration, subject, activity, content, competence indicator, plus the domain and the lesson-note number<br>• **A visa box for the director** (Decision 831 Art. 9), which the paper templates leave out<br>• **Specialists** in French, English and Tamazight get their own journal, in their language |
| **CEM and lycée personal journal** | • **Front pages:** teacher card; seminars, training and meetings; holidays and national days<br>• **Daily page:** A4 portrait: date, from–to, class, how the session went, remarks. Plus domain, sequence and resource |
| **Texts-book entries** (دفتر النصوص) | For each session:<br>• date and duration<br>• lesson title and stages<br>• any test<br>• homework and its due date<br><br>The teacher copies each entry in, or pastes a printed strip if the school accepts that. The app shows each entry's corrections, for the director's monthly check. The teacher signs each entry by hand, or with the drawn signature below. In the national system, the signed week replaces the paper book (§5.5) |
| **Texts-book homework record** | A record in each subject's section of the book. For each homework:<br>• the date it was set, and the date it comes back<br>• the activity<br>• how many pupils did not do it, and how many relied on someone else<br>• each count as a percentage of the pupils on the class list, rounded to a whole number<br><br>Class counts only, never names. The teacher enters the two counts when the homework comes back. If homework was marked for each pupil (§3.5), the app proposes the counts it can work out from those marks. The counts are pupil records (§5.4) |
| **Distributions** | Annual and monthly distributions from the plan pack, fitted to the class timetable, and the termly distribution the texts book needs (Decision 155 Art. 6) |
| **Lesson notes** (المذكرة) | • A numbered template, filled in from the plan item: objectives, stages, resources, competence indicator<br>• The teacher completes it<br>• Last year's notes can be reused |
| **Roll-call book and absence sheet** | See §3.4 |
| **Grade book and continuous-assessment justification** | See §3.5 |
| **Weekly timetable** | With signature boxes for the teacher, the director and the inspector |

**One journal or several.** A teacher with several classes, streams or levels chooses one journal per class or one combined journal (brief §4.3).

**The teacher's signature**
- **By hand, or drawn once.** The teacher signs by hand, as on paper. Or the teacher turns on a drawn signature: they draw it once on the screen, and the app puts it in the signature column of each confirmed texts-book entry and in the teacher's signature boxes on the other documents.
- **Always the teacher's choice.** It is off by default. Any printout can still leave the teacher's boxes blank, to sign by hand.
- **Only what the teacher confirmed.** An entry awaiting confirmation never carries it. The director's and the inspector's boxes always stay blank.
- **Printouts and PDFs only.** It never goes into a DOCX file, which anyone can edit. Before a PDF that carries it is shared, the app says that anyone who receives the file can copy the signature.
- **Kept like the teacher card.** The drawing is one of the teacher card's personal fields: optional, and it never leaves the device (§3.2). It is not synced or backed up, so on another device the teacher draws it again. Only the image is kept, never the speed, pressure or timing of the strokes (§2.6).
- **Not a legal signature.** Like a printed strip, it counts only where the school accepts it. The legal signature comes with the national system: the weekly signature, with a key made on the teacher's device and certified by the state under Law 15-04 (§5.5).

**Print rules** (brief §11)
- **Paper and ink.** Safe in black and white, with binding margins. One PDF that a print shop can use.
- **Settings.** Subject order, one- or two-sided printing, and which pages to print. Teachers pay for their own printing, about 5 DA a page, so layouts waste no paper.
- **Fonts.** Fonts are embedded (Amiri, Noto Naskh Arabic). DOCX files name the Microsoft fonts that official documents use.
- **Dates.** Gregorian dd/mm/yyyy with Western digits, the Algerian month names (جانفي … أوت), and the school year as "2026-2027". The Hijri date is optional.
- **Mixed directions.** Arabic headers over a French or English body must render correctly.
- **Tamazight.** Latin script at least.

### 3.9 The weekly digest and notifications

**The weekly digest** goes to the teacher only, for each class. It shows:
- the class's position in the plan, and weeks ahead or behind;
- sessions lost to the calendar, shown separately, so that a closure never reads as slow teaching;
- spare sessions before the next exam window;
- catch-up options (Section 4);
- make-up sessions owed;
- sessions still awaiting confirmation;
- in the national system, weeks not yet signed.

**Other notifications**
- **A daily preview**, only if the teacher turns it on.
- **Quiet hours.** No notification between 20:00 and 07:00, or from Thursday 20:00 to Sunday 07:00. Teachers who work on Saturdays can adjust this.

### 3.10 Sharing, handover and devices

- **The progress statement.**
  - One per class, as a print, a PDF or a short-lived QR code.
  - Its fields follow the state's April 2026 request:
    - the last domain or sequence completed;
    - the last learning resource;
    - weeks of delay;
    - sessions not held, shown only as calendar causes or "other" unless the teacher chooses to show more;
    - the plan pack and its release.
  - It carries no pupil data.
  - The teacher decides when to share it, and a sharing history shows what went to whom.
- **The handover package**, for a substitute or an incoming teacher. It is organised by topic:
  - the plan position;
  - the journal history;
  - the next item.

  The pupil list and marks travel only by direct transfer, and only if the teacher chooses. The incoming teacher's app re-paces from the last entry. In the national system, the incoming teacher receives the class's record through the school's space (§5.4).
- **Phone and PC.** Two ways to move data between devices:
  - the optional end-to-end encrypted sync, free for teachers (§5.8);
  - a direct transfer between devices.

  Section 5 designs both.
- **Staffroom PCs** (national system). The teacher signs in with their phone, or with a security key the school issues, and nothing stays behind when the session ends (§6.6).
- **Export.** A full export of everything, free, at any time (principle 7).

### 3.11 Pilot and launch

| | Pilot (January–March 2027) | Launch (September 2027) |
|---|---|---|
| Levels | A few grades and subjects per level, chosen after the field check | All three levels, with the plan packs ready by then |
| In the app | Setup, Today and confirmation, roll call, continuous assessment and marks, the term-2 export in March, the documents, the weekly digest, the progress statement | All of this, plus the school's timetable package, handover, and sync, free |
| Languages | Arabic at least; French and English as their translations are ready | Arabic, French and English |
| Measured | • Seconds per session: median and 90th percentile<br>• Minutes per week, against paper<br>• The share of sessions confirmed in one tap<br>• Term exports completed | Published before launch |

The national system adds joining with a QR code, the weekly signature, the school's space and marks sent to the state's system, once the Ministry adopts Tabachir (§5.1). Its date is set then.

### 3.12 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Design rules | The nine rules in §3.1 |
| Session outcomes | "Done as planned" in one tap; any other outcome in two. A whole day or week at once, with its exceptions |
| Reasons | Optional and private. None names collective action |
| Roll call | Half-days in primary, sessions in CEM and lycée. Everyone present by default. The paper book's counts, symbols, spreads and signature boxes |
| Pupil details | Only what the documents need. The confidential pupil-record pages print blank |
| Assessment | Official presets as data, the teacher's components, full precision |
| Appreciations | Suggested, then chosen for each pupil. No "fill all" |
| Term export | The workbook's unlocked cells, an ostad-ready view, printed sheets and a check before signing. Never passwords |
| Documents | Those in §2.5, plus the grade book and the weekly timetable. Each has template profiles and a blank version |
| Notifications | The weekly digest; a daily preview if the teacher turns it on; quiet hours |
| Pilot | The slice in §3.11, measured against paper |
| Section 3 | Settled on 27 Sep 2026 |

**Decided on 28 Sep 2026**

| Decision | Choice |
|---|---|
| Homework record | A texts-book record for each subject: the dates, the activity, and two class counts with their percentages of the class list. Never names |
| The teacher's signature | By hand, or a drawn signature that the teacher turns on. Kept like the teacher card's personal fields. Not a legal signature |

**Proposed on 29 Sep 2026 (decision 0015)**

| Decision | Choice |
|---|---|
| Joining | In the national system, one QR code from the official assignment list. Class lists come in by themselves |
| Signing in | The fingerprint prompt or a PIN, never recorded. Without a smartphone, a school-issued security key on a school PC |
| The weekly signature | Each course's week, signed in one step. Unconfirmed sessions can stay unconfirmed. Corrections stay possible |
| What becomes official | The texts book, the journal, roll call and marks, in the national system |
| Marks and absences | Marks go to the state's system through the national interoperability system. Absences too, where the school chooses. The files stay as the fallback |
| Sync | Free for teachers |
| The pilot | No longer measures pages that directors countersign: before adoption, the project seeks no official acceptance of printed pages |

**Open.** The field check, the pilot or the year's texts will settle these:
- **Primary continuous assessment.** Whether it is by activity (circular 1711) or by learning domain (the 2024–2026 grade books) in 2026/27.
- **The 2026/27 assessment circular.** How many tests (فروض), and when.
- **The 2026/27 grade workbook.** Its file type and columns.
- **Circular 244's list of appreciations.** It has not been found.
- **Roll-call counting rules.** Directors confirm them.
- **Printed pages.** Whether a printed texts-book strip, or a week-per-page journal, is accepted.
- **Drawn signatures.** Whether directors and inspectors accept a printed signature in the texts book.
- **The lesson-note template** for each level.
- **Tamazight teachers.** What they keep, and in which script.
- **The weekly signature's screen.** How a week with sessions still awaiting confirmation is signed, and how corrections to a signed week look. Drawn on the design canvas first.
- **A seating-plan view for roll call.** Whether it is wanted in version 1.

---

## 4. The lesson engine and plan packs

This section specifies how Tabachir knows the lesson for each session:
- the plan packs, which hold the official plans as data;
- the pipeline that makes them, and who runs it each year;
- the calendar;
- the engine, which turns a plan, a timetable and a calendar into each class's lessons.

It carries out steps 1 and 2 of the core workflow (§2.3) and feeds the teacher app (Section 3). Section 5 specifies the file formats.

### 4.1 What exists today

- **The ministry issues no lesson list.** It issues a chain of documents (research 09):
  - the curriculum and its accompanying document (2016), from the national curriculum commission;
  - annual plans (المخططات السنوية والتدرجات), from the IGP with each level's directorate. They call themselves "complementary working tools": teachers apply them, and inspectors may adapt them. The newest editions found date from September 2022;
  - textbooks and teachers' guides, which hold most lesson titles;
  - primary session plans, a 2020 trial edition that was never updated.
- **Teachers do the rest by hand:** dated distributions, lesson notes and texts-book entries (§2.1).
- **Nothing machine-readable exists.** There is no lesson list with identifiers, no dated distribution and no rule for lost sessions.
  - The plans circulate as PDFs on teachers' sites, with corrupted text layers and some scanned pages.
  - Communiqués are published as images.
  - No file carries a licence.
- **2026/27 has no new edition.** None had been published by 26 September 2026. The 3AP and 4AP plans no longer match those grades' timetables (Decision 16).
- **So Tabachir holds the plans as data itself,** as plan packs, until the IGP publishes them through Tabachir (§2.3, step 1).

### 4.2 Plan packs

A plan pack holds one official plan as data. There is one pack for each level, grade, subject, stream and edition.

**What a pack holds**
- **Items, in the plan's order.** Each item has one kind from a closed list:
  - diagnostic;
  - sequence or unit;
  - lesson or resource;
  - launch situation, integration, and solving the launch situation;
  - assessment and remediation;
  - project;
  - term assessment;
  - TD.

  The plan's own wording goes in the item's title.
- **A time anchor, which each pack declares,** because it varies by subject, not only by level:
  - **weeks:** primary Arabic, maths and history. A week can carry the plan's weekly model of session types, as primary Arabic does;
  - **budgets,** in hours or sessions per item: CEM plans, primary Islamic education and science, lycée French and physics;
  - **hybrid:** budgets, with week targets as checkpoints, as in lycée maths and Arabic.
- **Buffers,** which the plans build in and call a precaution:
  - the diagnostic week;
  - the primary half-week of integration, assessment and remediation after each sequence;
  - lycée remediation weeks.
- **Essential and optional items, and proposed merges.** A merge is only ever a proposal to the teacher.
- **Stage templates, as the official material prints them.** For example: تهيئة → بناء → تطبيق → تقويم, from the primary session plans. An item without a template uses "started / done".
- **Textbook references,** by page.
- **Provenance:** the issuer as printed, the edition, the source pages and where the file was found. Personal names are removed.
- **A licence mode:** link only, structure only, or full text once counsel clears it (§1.3).
- **Tests and exams are not items.** The calendar places them (§4.5), and they reduce the sessions available.

**Every pack shows its status**

| Status | Meaning |
|---|---|
| Official | Published by the issuing authority itself, through Tabachir |
| In force | Keyed by the project, and an official text confirms that this edition applies this year |
| Latest found | The newest edition found, keyed and checked |
| Stale | A later decision changed the subject's hours or content. For example, the 2022 3AP pack still has rows for subjects removed in 2025/26 |
| Community | A teacher's or a district's plan, reviewed |

**Identity and releases**
- **Pack IDs** follow `dz.<level>.<grade>.<subject>[.<stream>].<edition>`, for example `dz.cem.3am.math.igen-2022`.
- **One release per school year,** for example `2026.1`, with quick fixes as `2026.2`, `2026.3`.
- **Item IDs never change meaning.** A renamed, split or merged item gets a migration entry, so every class's progress survives an update.
- **A class stays on the release it pinned** (§3.2). When a new release ships, the teacher sees what changed and chooses when to move. Recorded sessions never change.

**Variants are layers, not copies**
- The layers, from the bottom up:
  - the national pack;
  - a district variant: an inspector's distribution, credited and used with their consent;
  - a school variant, for parallel classes;
  - the teacher's own changes.
- Each layer holds only operations: reorder, merge, split, re-budget, skip and add. A fix to the national pack still reaches every class.
- When a class moves to a new release, the migration entries that carry its progress also carry every layer's operations. The app does this on the device:
  - an operation on a renamed item stays as it is;
  - an operation on a split or merged item is carried across when its meaning stays clear. Skipping a split item skips every part, and an item added after it comes after the last part;
  - when the meaning is not clear, the app asks the teacher before the move, and never guesses. For example, the teacher gave an item two sessions, and the new release splits it in two. The answer goes into the teacher's own layer.
- A variant is never labelled official.

**Where each pack comes from is always shown.** Until the IGP publishes a pack itself, the app says so, for example: "Based on the September 2022 national edition, keyed by Tabachir's curators. Check with your inspector." (principle 6).

**Without a pack,** the teacher can type their own list of items, and it works like a pack. They can offer it to the data repository, where it is reviewed as a community pack (§1.7).

### 4.3 The pack pipeline

**Two ways in, one pack out** (§2.3, step 1)
- **Upload the PDF.** Software extracts a draft: rows, weeks and item titles. People then retype and check every number and every Arabic word against the page images, because the text layers of these files are corrupted. In one plan, "2022" reads "2222".
- **Fill in the form.** The author enters the plan directly: items, anchors, budgets and stages. The form is also the editor that curators use for every pack.

**The states of a pack release:** draft → under review → published → superseded or withdrawn.

**Who runs it**
- **Now:** the project's data curators and subject maintainers. Subject maintainers are practising teachers of that subject and level, with at least two for each widely used pack.
- **Inspectors** may review a pack. They are credited only with their consent, and their review is never presented as official approval.
- **When the IGP joins,** it runs the same pipeline, through accounts on the project's editor or on its own hosting. Its packs carry the status "official".
- **The teacher council** advises on which packs come first (§1.8).

**Checks before a release is published**
- **Automated:**
  - every item cites a source page, and every pack has an issuer, edition, status and licence mode;
  - a week pack has no missing weeks, and each week covers its weekly model;
  - a budget pack fits the timetable grid's hours across the teaching weeks, and the plan's own horizon. A plan that cannot fit is a finding to report to the IGP: one 2022 plan admits that most teachers don't finish the 2AS science maths programme;
  - no extraction artefacts remain, and every number was typed twice;
  - every ID change has a migration entry.
- **Human:** two people, a curator and a subject maintainer, check the pack against the page images and compare it with last year's release.

**AI** helps extract drafts, for curators only (§2.5). It never sees pupil data, and the model, the prompts and where it runs are public (§1.5). Personal names are removed from files before any processing.

**Uploaded files are untrusted.** They are opened in isolation, their metadata is removed, and any active content in them is never run (Section 6).

**Sources are kept as references,** not copies, until counsel clears their text (§1.3).

**Errors from the field.** "Report a plan error", in the app, sends the item's ID with the teacher's note. The teacher sees the report before it is sent and chooses whether to be credited (§1.5, §1.7).

### 4.4 The yearly cycle

| When | Work |
|---|---|
| Late July | Decisions on timetables and curricula appear. Next year's branch opens, and the packs they affect are flagged |
| August | New or changed packs are keyed, textbook references are updated, and drafts go to subject maintainers |
| From teachers' return to pupils' start (13–21 September in 2026) | **The September release**, with status flags and a calendar holding the start dates |
| The first four weeks | Quick fixes for reversals and freezes. In 2026, Decision 19 was frozen on 17 September |
| When the ministry publishes them | The calendar release: holidays and exam windows |
| All year | Calendar fixes within 24 hours of a communiqué or closure |
| June | Error reports and plan feedback are reviewed, and next year's work is planned |

**Nothing arrives as a feed.** Changes come as decisions, the yearly framework circular, correspondences relayed by the press, communiqués posted as images, and closure notices in posts, the press and local radio. A curator keys each change by hand, with its source attached.

### 4.5 The calendar

**Four layers,** from broadest to narrowest:
1. **National:** holidays, public and religious days, exam windows, Ramadan hours.
2. **Zone or wilaya:** zone calendars and weather closures.
3. **School:** events, local closures and make-up days.
4. **Teacher:** training days, seminars and duties, and sessions not held, which stay private (§3.3).

**Every entry carries its source and its confidence:** announced, expected (lunar dates, give or take a day) or projected. When the moon sighting is announced, one tap confirms a lunar holiday.

**What an entry can do to the sessions** (research 12):
- cancel them: a holiday or a closure;
- replace them: an exam week;
- add them: support, remediation, or revision during the holidays;
- change their times: Ramadan;
- set or reset the A/B week;
- switch to rotating groups, as in the October 2020 emergency.

**Session lengths.** A session-length profile holds the Ramadan rules for each level.
- In 2026, CEM and lycée sessions kept their places and shrank from 60 to 45 minutes. Primary periods were shortened.
- A shortened session still counts as one session.
- The texts-book entry prints the real duration.

**Late news is normal.** In 2025/26 alone (research 09):
- classes were suspended for two days in dozens of wilayas;
- a whole wilaya, and single schools, closed for the weather;
- Ramadan hours were announced two or three days ahead;
- term-3 exams were moved seven weeks ahead.

So the calendar takes updates the same day, received with the reference data (§4.8) or added by the teacher.

### 4.6 How sessions are generated

- **Slots point to bell times.** A timetable entry names a slot, not a clock time. Bell times come from templates for each level, shift and kind of day, so Ramadan changes the times without touching the timetable.
- **Week patterns.** An entry runs every week, in A weeks or in B weeks. The calendar stores each teaching week's parity. By default it alternates and skips holidays, and it can be reset each term.
- **Versions.** A new timetable applies from its effective date, and a one-off change touches only its own date.
- **Primary activity slots.** A primary slot can carry its activity type, such as "reading, session 3", which week packs use.
- **Teacher blocks,** such as the pedagogical half-day, hours in another school, duties and reductions, take time out of the week without belonging to any class.
- **Generation.** Each class's dated sessions come from the timetable version in force, the calendar and the bell times.
- **The past never moves.** Regenerating touches only future sessions that have not been recorded. A new timetable never rewrites a recorded session (§2.3, rule 4).

### 4.7 The engine

**The chain**

```text
plan pack → course (class × subject × school year) → timetable version → dated session
          → proposed lesson → the teacher's record → progress, documents and exports
```

**The states of a session**
1. Scheduled.
2. Proposed.
3. Recorded: done, changed or not held.
4. Covered, or carried over from the stage reached.
5. An official snapshot, only where an authority has adopted Tabachir as the official record (§1.15).

**The proposal**
- **It is always the class's next unfinished item,** starting at the first stage not yet covered.
  - Week packs match the slot's activity type within the weekly model. A plan week's maths lessons spread over that week's maths slots, in order.
  - Budget and hybrid packs take the next item in order.
- **TD, remediation and support slots have their own queues.** They never advance the main plan. They are real slots: circular 465 put the TD guide into use and ordered remediation in 3AP and 5AP.
- **Tests and exams come from the calendar** and the teacher's test schedule, never from the pack.
- **Where the plan says the class should be** is worked out separately, only as a reference:
  - for week packs, from the teaching week;
  - for budget packs, from the budgets that fit into the sessions scheduled so far.

**Progress**
- **Stages, not percentages.** "Last stage reached" keeps the item at the head of the queue. Its remaining stages move to the next ordinary session of the same class and subject, not to a TD, remediation or exam session. The journal and the texts-book entry read "تابع: <title>", with the stages still to cover.
- **No template:** "started / done", plus the sessions spent.
- **Fractions** such as "2 of 4 stages" can be shown, but never typed.
- **Half-groups.** An item taught in fortnightly TD counts as done for the class only when every half-group has had it.
- **Never locked to the plan.** Free text and unplanned content are always allowed. Abroad, registers that locked the log to the plan made teachers republish the plan just to merge two topics (research 11).

**Counting time**
- **In sessions, not hours.** Hour budgets are converted with the class's session length: 1 hour in CEM and lycée, 30 to 90 minutes in primary. Counting in minutes is an option.
- **Delay,** in sessions, and in plan weeks for week packs. Sessions lost to the calendar are counted separately, so a closure never reads as slow teaching.
- **Buffers first.** While the buffers left before the next exam window can absorb a delay, the digest shows it as buffer used, not as a delay.
- **Spare time:** the sessions left before the next exam window, minus what the plan still needs by then.
- **The September check.** From the first day, each class shows: "The plan needs N sessions before the term-1 exams. Your timetable and the calendar give M." Plans assume fewer weeks than the calendar holds: 31–32 in primary and 27 in lycée French, against about 34–36 in 2026/27. The gap goes to exams, tests, diagnostic work and disruptions, so it is not spare time.

**The catch-up ladder.** When a class falls behind, the options come in this order:
1. **Compress** the item in progress. The teacher does this; the app does nothing.
2. **Use the pack's buffers.**
3. **Merge items, or leave out optional ones,** from the pack's proposals. The teacher confirms each one.
4. **Add sessions,** which the teacher schedules.
5. **Re-pace the rest of the term.** The app builds a new distribution for the teacher to review and print. In primary, the director approves it (Decision 839 Art. 12).

**Never:**
- drop an item silently;
- push an item past an exam window silently;
- apply a merge on its own.

**Fixed points.** Tests, exams and TD sessions keep their dates, and lessons flow around them, skipping holidays. Moving lessons backward never deletes one, and every move can be undone from the history.

**Special cases**
- **Parallel classes.** Each class keeps its own queue. "Align with class X" copies a position. The app warns before a common test or exam window if parallel classes have drifted apart.
- **Multigrade classes.** One queue for each level (§3.2).
- **Lycée reorientation.** 2AS classes reshaped on 8 October get a "merge class history" step.
- **A new teacher mid-year.** The class's queue carries over in the handover package (§3.10).

**On the device.** The engine runs on the teacher's device, with no network and no server (§1.5). Its results belong to the teacher.

### 4.8 Getting packs and calendars to the app

- **The app ships with** the current packs and calendar.
- **Updates** come from the data repository, or its mirror in Algeria. Downloads need no account and send no identifier, and `NETWORK.md` lists them (§1.5).
- **Offline too.** An update can travel as a file or a QR code, for example from a colleague or the school.
- **Signed data.** Every release of reference data is signed, and the app checks the signature. A pack passed from phone to phone cannot be changed without the app noticing.

### 4.9 What goes upward

- **The teacher's own sharing.** Progress statements carry the pack ID and release, so statements from different classes and schools can be compared (§3.10).
- **Plan feedback, in the opt-in insights (§1.6).** Which items teachers most often merge, skip, split or re-teach. That describes the plan, never a teacher, and it can show where a programme is too dense to finish. Section 8 designs the insights.

### 4.10 The rest of the reference data

The same repository, review and yearly cycle hold the other data the app needs (brief §8). Each item is versioned, with its source and the dates it applies to (§1.14).

| Data | Source | Status on 27 September 2026 |
|---|---|---|
| Timetable grids | Ministerial decisions | Primary: Decision 16. CEM: the 2025/26 grid, restored when Decision 19 was frozen. Lycée: the 2006/07 grids |
| Bell times | Schools, and the Ramadan communiqués | Templates by level and shift |
| The school calendar | Ministry communiqués | Only the start dates are published |
| Formulas and coefficients | The yearly assessment circular | The 2026/27 circular is not out. Two sources disagree on the CEM coefficients |
| Number and timing of tests | The same circular | Unknown |
| Appreciations and banned phrases | Circular 244 | The list has not been found |
| Grade workbook variants | The administration's file | File type and columns not confirmed |
| Print layouts | Teachers' templates and inspectors' profiles | No official layout |

**A text that changes a rule mid-year** applies from the date it sets. Marks already recorded never change. Averages follow the rule in force for their term, and the history shows any change.

### 4.11 Field check, pilot and launch

| | Field check (now to December 2026) | Pilot (January–March 2027) | Launch (September 2027) |
|---|---|---|---|
| Packs | About five packs keyed in full, once the pilot slice is chosen, for example:<br>• primary 5AP Arabic and maths (weeks)<br>• CEM 1AM maths and 3AM French (budgets)<br>• one lycée pack, such as 1AS maths (hybrid)<br><br>3AP and 4AP wait while their plans are stale | The same packs, with fixes from the field | The first full September release, for 2027/28, at all three levels, as far as packs exist. Lycée packs allow for the streams announced from 1AS in 2027/28 |
| Calendar | The 2026/27 calendar, as the ministry publishes it | Ramadan 1448 (about 7 February to 8 March 2027) and a probable move of the term-2 exam week: a live test of the layers and session lengths | Fixes within 24 hours, all year |
| Tested or measured | The anchors and the stage picker, with teachers. The September check, shown to an inspector | • Sessions confirmed as proposed, per pack<br>• Plan errors reported, and the time to fix them<br>• Time from a communiqué to the calendar fix | Published before launch |

### 4.12 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Plan packs | One per level, grade, subject, stream and edition. Each declares its time anchor, uses the closed item kinds and the stages as printed, and shows its status and source |
| Official status | Only for packs the issuing authority publishes itself. A variant is never labelled official |
| Variants | Layers of operations over the national pack, never copies |
| Pipeline | A PDF or a form becomes one pack, which two people check before it is published. Curators run it now; the IGP can run it when it joins |
| AI | Extraction help for curators only. The model and prompts are public; no pupil data |
| Calendar | Four layers. Each entry has a source and a confidence level. Fixes within 24 hours |
| Engine | Runs on the device. It proposes the next unfinished item, counts in sessions, uses buffers before it reports a delay, and follows the catch-up ladder. It never drops an item, or moves one past an exam, without the teacher |
| Updates | A class stays on its release until the teacher moves it. Recorded sessions never change |
| Pilot packs | About five packs, keyed in full by December 2026, once the pilot slice is chosen |
| Section 4 | Settled on 27 Sep 2026 |

**Decided on 29 Sep 2026**

| Decision | Choice |
|---|---|
| Layers across releases | When a class moves to a new release, the migration entries carry every layer's operations, on the device. What they cannot carry clearly, the teacher decides before the move |

**Open**
- **The copyright status of the IGP's plans** (§1.17). Until counsel answers, packs hold structure and links only.
- **The 2026/27 plans.** Whether new editions reach teachers through their accounts, and which plans cover 3AP, 4AP (including French from scratch) and English in 1AM and 2AM.
- **Which lycée plans are in force.** An archive of 89 lycée plan files from September 2022, covering 23 subjects, was found (research 09). The 2027/28 streams may change them.
- **Stage templates** for the many CEM and lycée items that have none.
- **How schools set A/B weeks.**
- **Whether parallel classes sit common exams** in CEM and lycée.
- **Ramadan in primary:** which sessions shrink or drop.
- **Subject maintainers:** at least two for each pilot pack, recruited from the field-check group.
- **Whether the IGP will run the pipeline** or adopt the format. The state track (Section 8) finds out.

---

## 5. Data, formats and foundations

This section specifies:
- how the apps and the server fit together;
- the data Tabachir keeps, and where each kind of record may go;
- the history, sync and retention rules;
- the files Tabachir reads and writes;
- the foundations that let an authority adopt the records later without a rewrite.

Section 6 covers encryption, security and the other non-functional requirements.

### 5.1 Built for official use from day one

- **Institution mode comes later; its foundations don't.** The goal is official status (principle 6), so the records are built for it from the first release, before any authority asks. Later means a later deployment, not a later architecture.
- **Version 1 builds these foundations,** even where no screen uses them yet:
  - stable identities for every record (§5.3);
  - a history that is only ever added to, and shows any tampering (§5.5);
  - record layers that decide where each record may go (§5.4);
  - a permission model for every role (§5.10);
  - logs of every correction, export, share, access and deletion, which the teacher sees;
  - retention, archive and deletion rules (§5.7);
  - documented open file formats (§5.9).
- **Built only when a deployment is real,** for that deployment (Section 7):
  - institution tenants;
  - legal electronic signatures, through a certified provider;
  - archive workflows;
  - the procurement file.
- **Being ready does not make a record official.** That starts only when an authority adopts Tabachir in writing (§1.15).

### 5.2 Architecture

| Part | Built with | What it does |
|---|---|---|
| Android app | React Native, for Android 8 and later | The whole teacher app, offline |
| Web app for PCs | React, installable, offline | The same app in the browser. The data stays in that browser, on the teacher's own computer |
| Shared core | TypeScript | The engine, the assessment rules, the file formats and the document templates. Both apps use the same code, so they give the same results |
| Server | NestJS, hosted in Algeria | Relays encrypted sync data; mirrors the reference data; hosts the pack editor (§4.3) and receives problem reports. Later, the insights service and billing |

- **The apps never need the server** to open or to do the daily work (§1.5).
- **The server never holds readable pupil data** (principle 2).
- **No proprietary libraries,** such as Google Play Services or Firebase (§1.3). Builds must be reproducible and pass F-Droid's checks. This is tested before the pilot (§5.13).
- **Notifications are scheduled on the device.** There is no push service.
- **Documents are made on the device.** Each document is built as a web page with print styles, then turned into a PDF by the device's own web engine, which shapes Arabic and mixes directions correctly. DOCX files are generated directly. Nothing is rendered on a server.
- **The web app runs no code on the server.** It updates only when the teacher accepts the update, and it shows its build checksum, which anyone can compare with the published one (§1.9). Section 6 covers how that code is checked.
- **One set of rules, one set of tests.** The formulas, the averages and the engine are checked against published test cases, run in both apps.

### 5.3 The data model

**Reference data.** Public and versioned, with effective dates, grouped by country code (§1.14). Section 4 lists it (§4.10):
- the school year and the calendar layers;
- bell-time templates and session-length profiles;
- timetable grids;
- plan packs, their releases and stage templates;
- assessment rules: components, formulas, coefficients and the number of tests;
- appreciation lists and banned phrases;
- grade-workbook variants and print layouts.

**The teacher's records.** Kept on the teacher's devices, or, in institution mode, on the institution's systems.

| Record | What it holds |
|---|---|
| Teacher card | The details the documents print. The personal fields are optional |
| School | Its name and level. A teacher can work in several |
| Class and group | Level, stream and pupil counts. Groups: the whole class, half-groups and option groups |
| Pupil | Only the fields in §5.6 |
| Course | Class × subject × school year, the anchor for progress (§2.3, rule 3). It holds the pinned pack release and the teacher's changes to the plan (§4.2) |
| Assignment | Who teaches the course, with dates: the holder, a substitute or a co-teacher |
| Timetable version | Its entries (day, slot, week pattern, group, room), teacher blocks, effective dates and source |
| Session | One dated occurrence of a course, and its state (§4.7) |
| Session record | The outcome, the items and stages covered, the session type, homework, any test, the factual line and the private note |
| Attendance entry | For each pupil, session or half-day: absent or late, and whether an absence is justified |
| Assessment | Components and weights, marks, observations and the appreciations chosen |
| Sharing record | What was shared, with whom, and on which day |

**Identities**
- **Every record gets a random ID on the device,** so records made on different devices never clash and can be merged.
- **Reference data uses readable IDs** that never change meaning (§4.2).
- **Pupils are matched by their official registration number,** never by name.
- **Progress belongs to the course,** not to the teacher, so it survives a change of teacher.

### 5.4 Where each record may go

Every record belongs to a layer, and the layer travels with it. Every sync, export and share checks the layer, so a private note can never slip into a statement.

| Layer | Examples | Where it may go |
|---|---|---|
| **Private** | Private notes; the reason a session was not held or an item skipped | Only the teacher's own devices and the teacher's own full export. Never into a statement, a handover, institution mode or insights |
| **Pupil records** | Class lists, roll call, marks, observations, appreciations | The teacher's devices, and the files the teacher makes, such as the term export and prints. To a successor only by direct transfer, if the teacher chooses. In institution mode, the institution's systems |
| **Lesson record** | Items and stages, session types, homework, tests, the factual line | Also into statements and handover packages, and, if the teacher opts in, lesson-level insights (§1.6) |
| **Shared statement** | Progress statements and handover packages | Whoever the teacher gives it to. Each one goes into the sharing history |
| **Official snapshot** | Exists only in a deployment with official status | The institution's archive, signed and unchangeable (§1.15) |

### 5.5 History, corrections and signatures

- **The history is the record.** Every change adds an entry, and nothing is overwritten. What the screens show is worked out from the history.
- **Corrections keep both versions** (§3.1, rule 4). Corrections to roll call and marks ask for a short reason; other corrections may carry one.
- **Tampering shows.** Each change is chained to the one before it, so an edit or a deletion made outside the app is detected.
- **Dates, not clock times.** The history records the day and the order of each change, never the time of day (charter point 3).
- **The teacher sees everything:** the change log, and every export, share, access and deletion.
- **Signed files.** Each teacher has a signing key, made on their device. Statements, handover packages and timetable packages are signed, so a reader can check that nothing changed since they were issued, and that they come from the same teacher as before. This is not a legal signature.
- **Legal signatures come only with official status.** In such a deployment, a certified provider signs under Law 15-04, and official snapshots are sealed. Later corrections are shown against the snapshot (§1.15).
- **Deletion is real.** When the teacher deletes a pupil's data or a past year, the content is erased. The history keeps only the fact that something was deleted, and on which day.

### 5.6 The minimum data

- **Pupils:** the official registration number, the name (in Arabic, and in Latin letters if the list has them), sex, class and group, and movements with their dates and reasons. Nothing else is imported or asked for.
- **Never collected:**
  - health, disability, religion, ethnicity or biometric data;
  - pupil photos;
  - parents' details or home addresses. The confidential pages of the roll-call book print blank (§3.4).
- **Absences are justified or unjustified.** The cause itself is never typed, because it is often a health matter.
- **Imports keep only the listed columns** and drop the rest before anything is saved (§5.9).
- **The teacher card's personal fields** are optional and never leave the device.

### 5.7 Retention and the yearly archive

- **Each school year closes into its own archive.** It stays available, can still be corrected, and can be exported whole.
- **Retention classes,** with defaults the teacher can change:

| Records | Default |
|---|---|
| Lesson records | Kept until the teacher deletes them. For comparison, schools keep the texts book for at least 3 years (Decision 155 Art. 13) |
| Pupil records | Once the following school year ends, the app offers to erase that year's pupil records, keeping the lesson records |
| Private notes | Kept until the teacher deletes them |
| Logs | Kept as long as the records they describe |

- **Year-end prompts** remind the teacher to export and to erase what they no longer need.
- **"Erase this device"** removes everything from a phone or browser in one step.
- **In institution mode,** the institution's declared retention applies instead. For example, lesson logs in school mode are kept for 3 years, like the texts book.

### 5.8 Sync, backup and moving between devices

- **Sync is optional,** for the teacher's own devices. It is end-to-end encrypted and runs through the project's server in Algeria, or through an institution's own server in institution mode. The server only stores and passes on data it cannot read. It is free during the pilot (§1.10).
- **Only new changes travel.** Because the history is only ever added to, sync sends the changes made since the last sync. The payloads are small, and an interrupted sync resumes over mobile data.
- **No change is ever lost.** If two devices change the same thing before they sync, both changes stay in the history. When they differ, the app asks the teacher which one to keep.
- **The app shows how many changes are waiting to sync.**
- **Direct transfer,** without the server, over the local network after scanning a QR code, or as an encrypted file (§3.10).
- **Backup.** An encrypted backup file that the teacher keeps on a PC, an SD card or a USB key. The phone's cloud backup never receives pupil data (§1.5).
- **A lost phone** is recovered from sync or from a backup, with the teacher's recovery key. Section 6 designs the keys.

### 5.9 Files Tabachir reads and writes

| File | In or out | What it holds | Rules |
|---|---|---|---|
| **The Tabachir archive** (the open format) | Both | Everything: records, history and pinned releases | Documented and versioned. Every older version can be imported. Free, at any time (principle 7) |
| CSV | Out | Marks, roll call and the lesson log | For spreadsheets |
| PDF and DOCX | Out | The documents (§3.8) | Made on the device |
| The official class list (Excel) | In | Pupils | Only the columns in §5.6 |
| The school's grade workbook | In, then out | Marks and appreciations | Only the unlocked cells change. The file is edited in place, so every other part stays exactly as it was (§3.7) |
| Timetable package | In | A teacher's part of the school timetable | Signed, with stable IDs and no pupil data. Made from FET, an Excel or CSV template, or by hand (Section 7) |
| Progress statement | Out | The fields in §3.10 | Signed, with no pupil data. Printed, as a PDF or as a QR code |
| Handover package | Both | The class's progress, by topic (§3.10) | Signed. Pupil data only by direct transfer, if the teacher chooses |
| Reference-data release | In | Packs, calendars and rules | Signed by the project (§4.8) |

**Every file that comes in is untrusted**
- It is opened in isolation and checked against its format.
- Anything outside the allowed fields is dropped before saving.
- Macros and formulas in workbooks are never run.
- **FET files.** The importer is written from FET's documented file format, without using FET's code, which is licensed AGPL-3.0-only. It is tested with made-up files (research 12). Counsel confirms this approach.

**Files that go out**
- Files that hold pupil data are marked "internal / confidential", and can be protected with a password.
- Before a file goes to a messaging or social app, the app warns that pupils' marks and attendance are covered by civil-service secrecy (Ord. 06-03 Art. 48).
- There are no public links.

**QR codes.** A progress statement fits inside a QR code, signed, so reading it needs no network. Larger files, such as a handover package, use the QR code only to open a short-lived direct transfer on the local network.

### 5.10 The permission model

Version 1 has one user: the teacher. The permission model already covers every role, so institution mode needs no rewrite.

| Role | Can see | In version 1 |
|---|---|---|
| Teacher | All their own records | Yes |
| Coordinator | The statements teachers share | Through files, with no accounts |
| Director | Shared statements, in reader mode. In school mode, the operational dashboard (§2.4) | Reader mode |
| Inspector | Shared statements. In school mode, access that the authority grants, limited in time and visible to the teacher | Shared statements |
| Authority | Aggregates above the minimum group sizes, and nothing below the school (charter point 7) | No |

- **Access is granted per course and per layer.** The private layer is never granted to anyone.
- **Every access appears in the teacher's access log** (charter point 5).

### 5.11 Formats offered to the state

Four open formats are published, with examples and test files, and offered to the IGP and the national institute for research in education (INRE):
1. **The plan pack** (§4.2).
2. **The session log and progress statement,** with boxes for the director's visa and the teacher's signature. It comes with a request: that a printed, signed Tabachir page may replace re-copying once a text allows it (§1.15, step 1).
3. **The timetable package,** with FET as the exchange format.
4. **The insights payload** (§1.6).

Their specifications are licensed CC BY-SA 4.0 (§1.3). Section 8 covers how they are offered.

### 5.12 Test data

- **Made-up data only** (§1.5): the demo class, and made-up class lists, workbooks and FET files.
- **Published test cases** for every formula and every engine rule, run in both apps.
- **Round trips.** Every export can be imported back, and it gives the same records.
- **Blank workbook templates** collected in the field check, with any pupil rows removed, to test the term export in Excel and WPS.

### 5.13 Checks before the pilot

These five technical risks are tested early, before the pilot depends on them:
1. **The Android build:** React Native, reproducible, passing F-Droid's checks, with no proprietary libraries.
2. **Arabic PDFs** from the device's web engine: letter shaping, mixed directions, A4 landscape pages and embedded fonts.
3. **The workbook fill:** real blank templates, in `.xls` and `.xlsx`, filled cell by cell, then opened in Excel and WPS.
4. **The web app's storage:** its size limits, whether the browser may clear it, and encryption with the teacher's key.
5. **Sync on weak mobile data:** resuming, payload sizes and conflict notices.

### 5.14 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Foundations | Built into version 1: stable IDs, a history that is only added to and shows tampering, record layers, the permission model, logs, retention rules and open formats |
| Architecture | An Android app and a web app sharing one TypeScript core. A NestJS server in Algeria that relays encrypted sync data, mirrors the reference data, hosts the pack editor and receives reports. Notifications on the device, documents made on the device |
| Record layers | Private, pupil records, lesson record, shared statement and official snapshot, each with the routes in §5.4 |
| History | Only added to, chained, with dates but no clock times. Roll-call and mark corrections ask for a reason. Deletion erases the content |
| Minimum data | Pupils: registration number, name, sex, class and group, and movements. Absences: justified or unjustified, with no cause. No parents' details |
| Retention | A yearly archive. Each year's pupil records are offered for erasure once the following school year ends. In institution mode, the institution's rules |
| Sync | Optional and end-to-end encrypted, sending only new changes. Differing changes are both kept, and the teacher chooses. Direct transfer and an encrypted backup file |
| Files | The open Tabachir archive; allowlisted imports; the workbook edited in place; signed statements and packages |
| Early checks | The five checks in §5.13, before the pilot |
| Section 5 | Settled on 27 Sep 2026 |

**Open**
- **Legal retention periods** for teachers' own records once the year ends. Counsel answers.
- **The 2026/27 class-list file:** its columns, and whether it has names in Latin letters. The field check finds out.
- **Shared school PCs.** Whether version 1 needs a temporary session that leaves nothing behind on a shared computer.
- **The certified signature provider** for an official deployment. Chosen when a deployment is real.
- **Whether the FET importer may call FET's command-line program** as a separate tool. Counsel confirms.

---

## 6. Privacy, security and non-functional requirements

This section:
- turns the privacy principles (§1.2, §1.5) into requirements;
- sets out the compliance steps before each launch;
- specifies the security design: threats, the device, keys, the web app and the server;
- sets the non-functional requirements: devices, speed, reliability, accessibility and languages.

Institution mode adds its own gates (§1.15), which Section 7 designs.

### 6.1 The legal position in teacher mode

- **The project is the software's publisher, not a controller of pupil data,** because pupil data never reaches it (principle 2). It is the controller only of what it holds about teachers: sync accounts, billing, support messages and pack-editor accounts (§1.4).
- **The teacher's own position is open.** Teachers must keep their registers and journal (Decision 831 Art. 8–10). For official records, the school or the ministry is plausibly the controller, with the teacher acting under its authority. A working copy in a private app is a grey zone. Counsel answers this first (research 06).
- **Whatever the answer, the product protects pupil data as if the strictest reading applied:**
  - the minimum data (§5.6);
  - nothing leaves the device by default (§1.5);
  - encryption and the app lock (§6.4);
  - real deletion (§5.5);
  - no transfer abroad.
- **Hosting in Algeria.** No rule found requires a private tool to store data in Algeria. But storing personal data abroad is a transfer that needs an ANPDP licence, and the ANPDP treats foreign-run platforms as transfers (deliberation 04). So every server that touches personal data runs in Algeria, and so does everything on that path: e-mail, monitoring and backups.
- **Hidden routes abroad are closed:** the phone's cloud backup, crash and analytics SDKs, advertising and cloud AI (§1.5). Sending a file to another app is the teacher's own act, so the app warns first (§5.9).

### 6.2 Compliance before each launch

| Before | What must be in place |
|---|---|
| **The pilot** (January 2027) | • An Arabic privacy notice, shown before first use (Loi 18-07 Art. 32)<br>• `PRIVACY.md` and `NETWORK.md` published (§1.5, §1.16)<br>• The project's ANPDP declaration for what it processes itself, such as pilot contacts and problem reports, with a register of processing and a named data-protection contact |
| **Sync** | • The encryption design published and reviewed (§1.9)<br>• The declaration extended to sync accounts, with its receipt<br>• Servers in Algeria, with no foreign sub-processor<br>• Processor terms in the terms of service, in case counsel finds that the teacher or the school is the controller<br>• The automated log for server-side processing, and the breach runbook (§6.7) |
| **Paid services** | • A legal entity (§1.17), and a data-protection officer<br>• The commerce rules of Loi 18-05: a `.com.dz` site hosted in Algeria, a commercial-register entry, approved payment channels and invoices |
| **Institution mode** | The gates in §1.15 |

- **Sync opens only when its gates are met.** If they are not met by January 2027, the pilot runs without sync, using direct transfer and backup files (§5.8).
- **Teachers' rights.** Teachers can see, correct and delete what the project holds about them. Corrections are made within 10 days.

### 6.3 Threats the design must resist

| Threat | Main defences |
|---|---|
| A lost or stolen phone | The app lock, the encrypted database and the automatic lock. The lost phone is removed from sync, and the teacher restores their data on a new device (§6.5) |
| A shared or family device | The app lock. No pupil data in notifications. Screens with pupil data hidden from the recent-apps view |
| A shared school PC | The web app's passphrase and automatic lock, and "erase this browser's data" (§5.7). Temporary sessions are an open point (§5.14) |
| A curious or compromised server, or a demand to the project for data | End-to-end encryption: the server holds nothing it can read. Minimal metadata. Every demand listed in the transparency report (§1.11) |
| An attacker on the network | Encryption in transit, a check of the server's identity, and signed reference data (§4.8) |
| A malicious file | Every incoming file is untrusted: opened in isolation, allowlisted, and its macros never run (§5.9) |
| A forged statement or package | Signed with the teacher's key (§5.5) |
| A tampered web app | Updates the teacher accepts, a visible checksum and reproducible builds (§6.6) |
| A compromised dependency or build | Few dependencies, pinned and reviewed. Reproducible, signed releases (§1.9). Two-factor sign-in for maintainers (§1.8) |
| The records used against teachers | Record layers (§5.4), no clock times (§5.5), the charter (§1.15) and neutrality (§1.11) |
| Leaks by sharing | Files marked confidential, an optional password, warnings, and no public links (§5.9) |

### 6.4 Security on the device

- **An encrypted database.**
  - **Android:** the key is kept in the phone's hardware-backed keystore where there is one, and released by the app lock.
  - **Web:** the key is derived from the teacher's passphrase, and held only in memory while the app is unlocked.
- **The app lock:** a PIN, or the phone's own fingerprint or face prompt. The app never stores biometric data.
- **The automatic lock** after a few minutes of inactivity. The teacher can change the delay.
- **Nothing readable outside the app.**
  - Notifications never show pupils' names or marks.
  - Screens with pupil data are hidden from the recent-apps view and block screenshots. The teacher can allow screenshots.
  - The phone's cloud backup never includes the database (§1.5).
- **Minimal permissions.** No location, contacts or microphone. The camera is used only to scan QR codes, and is asked for on first use. Files are opened and saved only through the system's file picker.
- **"Erase this device"** removes everything (§5.7).
- **Exports that hold pupil data** can be protected with a password (§5.9).

### 6.5 Keys, sync and recovery

- **Proven cryptography only,** from a widely reviewed open-source library. The project writes no cryptography of its own.
- **The teacher holds the keys.** Sync data is encrypted on the device before it leaves. Neither the server nor the project ever holds a key.
- **Each device has its own key.**
  - The teacher adds a device by scanning a QR code on a device that is already set up.
  - A lost device can be removed, so it receives nothing new.
- **The recovery sheet.** When sync or backup is set up, the app gives the teacher a recovery key to print or write down. It restores everything on a new device.
- **The project cannot recover a teacher's data.** That is the price of end-to-end encryption. So:
  - making a backup takes two taps;
  - the app reminds the teacher when there has been no sync and no backup for 30 days.
- **What the server sees:** an account, encrypted data, its size and when it arrived. No names, classes or subjects appear in what it stores or logs.
- **An account needs no real name.** It needs a login. The payment provider handles payment details, which are kept apart (§1.10).
- **Reviewed before launch.** The design is published (§1.9), and an independent reviewer checks it before sync opens.

### 6.6 The web app

- **Served from the project's site in Algeria** as a fixed bundle (§5.2). It loads no scripts, fonts or trackers from anywhere else, and a strict security policy blocks them.
- **Installed for offline use.** After installation, it changes only when the teacher accepts an update.
- **Checkable.** It shows its version and build checksum. The published checksums and reproducible builds let anyone check them (§1.9).
- **Its data** stays in the browser on the teacher's own computer, encrypted with the passphrase (§6.4). The app asks the browser to keep that storage, and warns if the browser may clear it.
- **Browsers:** current Chrome, Edge and Firefox, on Windows 10 and 11. Safari is not a target in version 1.

### 6.7 The server and the project's operations

- **What the server holds, and nothing more:**
  - encrypted sync data;
  - teacher accounts;
  - billing records, kept apart;
  - pack-editor accounts;
  - the problem reports teachers chose to send.
- **Hosted in Algeria,** with its backups, and encrypted.
- **Administration** by named maintainers only, with two-factor sign-in. Every administrative action is logged.
- **Security logs** are kept apart from everything else, for the shortest time the law allows, and never used to measure or judge teachers.
- **Fixes.** Security fixes for critical flaws ship within 7 days. Dependencies are watched for known flaws (§1.9).
- **The breach runbook:**
  1. contain the breach and assess it;
  2. notify the ANPDP within 5 days, a conservative target;
  3. tell the teachers affected;
  4. record it in the breach register;
  5. report it in the transparency report (§1.11).
- **Demands for data** from any authority are answered only as the law requires, and listed in the transparency report (§1.11). The project holds no pupil data to hand over.

### 6.8 Non-functional requirements

| Area | Requirement |
|---|---|
| Devices | Android 8 and later, which reaches about 97.9% of Algerian Android traffic. Designed for 360×800 screens, the most common size, and tested on budget Samsung, Xiaomi, Oppo and Realme phones. The web app runs on Windows 10 and 11 |
| Speed, on a budget phone | • The app opens on Today in under 2 seconds<br>• Confirming a session responds at once<br>• Roll call for 45 pupils scrolls smoothly<br>• A month of journal pages becomes a PDF in under 10 seconds |
| Size and data | A small install. Reference-data updates are small, and sync sends only new changes (§5.8). The teacher can limit sync to Wi-Fi |
| Offline | Every daily task works offline. Only sync, updates and reports need a network |
| No lost work | Every change is saved the moment it is made, so a crash or a flat battery loses nothing |
| Battery | Nothing runs in the background except scheduled notifications and, if the teacher allows it, sync |
| Accessibility | • Right to left first<br>• Works with the Android screen reader in Arabic, French and English<br>• Text can be enlarged to 200% without breaking a layout<br>• Touch targets of at least 48 dp<br>• Colour is never the only signal<br>• Contrast meets WCAG 2.2 level AA |
| Languages | Arabic, French and English, with every text translatable (§1.14). Western digits, and dates as in §3.8 |
| Print | Documents print at 100% on A4, in black and white, as the layouts specify. Any release that changes a layout is checked against printed samples |
| Server | The daily work never depends on it. Sync aims to be available 99.5% of each month. Maintenance happens outside school hours, and never in the two weeks before a term-end export (§1.9) |
| Load | There is no central deadline, because the daily work and the term export run on the device. The server must still absorb the term-end rush of syncs |
| Time budget | About 5 seconds per ordinary session (§3.1), measured in the pilot |

The speed and size figures are targets. The pilot confirms them on budget phones.

### 6.9 Security and privacy while building

- **A threat model,** published and updated with each major change.
- **Every release is checked:**
  - dependencies, for licences and known flaws;
  - secrets scanning;
  - `NETWORK.md` against the code;
  - a reproducible, signed build (§1.9).
- **Privacy-sensitive changes** need two maintainers' approval (§1.7).
- **Tests use made-up data only** (§5.12).
- **Security reports** go to the private address in `SECURITY.md`, and are acknowledged within three working days (§1.9).

### 6.10 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Legal position | The project publishes the software, and controls only the teacher data it holds. Pupil data is protected as if the strictest reading applied |
| Hosting | Everything that touches personal data stays in Algeria, with no foreign sub-processor |
| Sync gates | Sync opens only once its design is published and reviewed, the declaration is filed and hosting is in place. Otherwise the pilot uses direct transfer and backup files |
| Device | An encrypted database, the app lock and the automatic lock. No pupil data in notifications. Screenshots blocked on screens with pupil data unless the teacher allows them. Minimal permissions |
| Keys | Held by the teacher, one per device, with a recovery sheet. The project cannot recover data, so backups are easy and reminded |
| Web app | A fixed bundle with no outside scripts, updated only when the teacher accepts. A visible checksum |
| Server | The minimum data, logs kept apart and short, the breach runbook and the transparency report |
| Non-functional | The targets in §6.8, confirmed in the pilot |
| Section 6 | Settled on 27 Sep 2026 |

**Open**
- **Who controls pupil data in teacher mode,** and the legal basis for minors' data. Counsel answers first.
- **The ANPDP declaration and the data-protection officer before a legal entity exists:** whether the founder can file the declaration, and whether a DPO can be the founder or external. Counsel answers.
- **Whether the sync service counts as a service provider** that must keep traffic data for a year (Loi 09-04). Counsel answers.
- **Phones in class.** Whether roll call on a phone counts as a "pedagogical purpose" under circular 460. Also, whether keeping pupil data in a private app needs written authorisation (Ord. 06-03 Art. 48).
- **Who does the independent security review,** with no budget. Candidates: university security labs and volunteer reviewers.
- **The speed and size targets,** confirmed on budget phones in the pilot.

---

## 7. The school layer and institution mode

This section designs how schools and education authorities use Tabachir:
- reader mode and the coordinator's merge, which need no accounts;
- the timetable package;
- school mode, the first institution deployment;
- deployments by a directorate.

The rules in §1.15 and the data-use charter bind all of it. Section 8 covers the ministry and the IGP.

### 7.1 Three steps for schools

| Step | What the school gets | When | What it needs |
|---|---|---|---|
| 1. Reader mode and the coordinator's merge | Directors, coordinators and inspectors open what teachers share | The pilot, from January 2027 | Nothing beyond teacher mode: no accounts and no copy on a server |
| 2. The timetable package | The director or the censeur sends each teacher their part of the school timetable | Launch, September 2027 | Counsel confirms that sending staff data as files needs no further formality |
| 3. School mode | The school runs Tabachir as controller: the master timetable, cover, handovers and the operational dashboard | A first pilot in 2027/28, in one CEM or lycée | Every gate in §1.15 (§7.11) |

### 7.2 Reader mode

- **What it does.** A director, a deputy or an inspector opens the progress statements that teachers share, by scanning the QR code or opening the file. There is no account and nothing to enter.
- **It checks each statement.** The reader verifies the signature and shows the statement's date (§5.5).
- **The school's picture.** It lays the statements received side by side, by class and subject: plan position, weeks ahead or behind, and sessions lost to calendar causes and to other causes.
- **Nothing leaves the reader's device,** and no copy goes to a server.
- **Legal basis.** This stays inside the hierarchy and within the needs of the service (Ord. 06-03 Art. 48), so it needs no new formality (research 13). Counsel confirms.
- **A spot-check sheet for inspectors.** The reader picks three dates at random from the period a statement covers. The inspector compares the teacher's record for those dates with pupils' exercise books. Checks like this, independent of the teacher's own entries, are what made figures credible abroad (research 11).

### 7.3 The coordinator's merge

- **For the teaching council.** The subject coordinator merges the statements that the subject's teachers choose to share. It feeds the council's pacing plan and the figures the coordinator brings to its meetings (Decision 69).
- **What it shows:** each class's position against the plan, side by side. It prints for the council's register.
- **Only what is shared.** Anything a teacher didn't share stays invisible. There are no accounts and no server.

### 7.4 The timetable package

**Making it**
- The director or the censeur, with the ناظر or the education counsellor, brings in the school timetable in one of three ways:
  - from FET, which most CEMs and lycées probably use (an estimate: no survey exists);
  - from an Excel or CSV template;
  - by hand, with live conflict checks.
- Tabachir never builds a timetable automatically. FET already does that (research 12).
- **Checks:** clashes of teachers, classes and rooms; each class's hours against the official grid; A/B weeks.
- **Printouts:** class, teacher and room grids, with the official header, the A/B week, and signature boxes for the director and the censeur, plus the inspector in primary.

**Sending it**
- Each teacher receives only their own part: a signed file with stable IDs and no pupil data. It goes by file, QR code or encrypted sync (§5.9).
- A teacher who works in several schools receives one package from each, merged on their device, with warnings about clashes (§3.2).
- A teacher who drew their own week sees the differences before accepting the school's version.

**Changing it**
- **A change is a new version,** with an effective date, by default the next Sunday. A one-off change touches only its own date.
- **The effect is previewed** before publishing. Only the teachers affected are notified, in plain words, for example: "From Sunday 11 October, your Monday slot 3 moves from class 2م1 to 2م3."
- **Receipt.** A teacher can confirm receipt, which replaces signing the paper notice if the school wants.
- **Recorded sessions are never rewritten** (§4.6).

**Limits**
- Assignments and weekly hours come from the state's system or from FET. Tabachir never manages them (§2.6).
- The package holds staff data, such as names and loads, but no pupil data.

### 7.5 School mode

**What it is**
- The school runs Tabachir as the controller of the records it requires, once the gates are met (§7.11).
- The first pilot is one CEM or lycée, in 2027/28.
- A primary school has no legal personality, so its directorate must be the controller. Primary schools therefore come with a directorate deployment (§7.9).

**What it adds**
- **The master timetable,** owned by the director and prepared by the ناظر or the education counsellor, with versions as in §7.4.
- **The operational dashboard** (§7.6).
- **Cover and make-up sessions** (§7.7).
- **Handovers.** When the directorate appoints a substitute, the school records the appointment, and the substitute receives each course's progress (§3.10). The appointment ends when the holder returns.
- **The director's visa, as a comment.** The director can visa or comment on a class's lesson record, but never change it. The paper visa stays until a text says otherwise (Decision 155).
- **A delivery report for each course, every term:** sessions planned, held and lost. Lost sessions show only as calendar causes or "other".
- **Inspectors' access,** which the authority grants (§7.8).

**What enters the school's space, and what never does**

| Enters | Never enters |
|---|---|
| Lesson records: items, stages, session types, homework and tests (§5.4) | Private notes, and the reasons a session was not held or an item skipped |
| Each class's progress | Pupil records. They stay on the teachers' devices, as in teacher mode |
| Timetables, cover and handovers | Clock times, "started" events and location |
| Each teacher's access log, which that teacher sees | Any score, rank or rating of a teacher |

Pupil records move to an institution's systems only for features for students and parents. Those need their own gates and their own decision (§1.15).

**Teachers**
- **Taking part is voluntary** in a pilot (research 13). A class whose teacher doesn't take part shows its timetable only, marked "not shared".
- **No personal phone is needed.** A staffroom PC or paper remains possible (charter point 9). A session on a shared PC leaves nothing behind.
- **Every teacher is told,** in Arabic, before the start (Loi 18-07 Art. 32), and sees their own access log.
- **A teacher who leaves** takes a full copy of their own lesson records (principle 7).

### 7.6 The operational dashboard

The director's view in school mode (§2.4). It updates as teachers' devices sync, and shows:
- **workload:** each teacher's weekly hours from the timetable, and the cover they gave, against their statutory load from the imported assignments;
- **sessions awaiting confirmation,** for each class;
- **classes behind the plan:** each class's position, weeks ahead or behind, the buffer used, and sessions lost to calendar causes and to other causes, in separate columns.

**Guardrails** (charter points 2, 3 and 5; §1.11)
- **"Awaiting confirmation" is neutral.** It is never an absence, never triggers an alert or a sanction, and never leaves the school.
- **It lives only on the screen.** It is never printed, exported, totalled across the school or kept as history. A school-wide total or a trend would measure collective action, which no feature may do (§1.11).
- **Classes, never rankings.** Classes appear in the school's own order. A filter can show the classes behind the plan, but nothing is sorted by delay, and no list of teachers is ever ranked.
- **No colours for people and no clock times.** Dates only.
- **The teacher sees the same view** for their own classes.
- **Nothing from it** feeds pay, promotion, appraisal or discipline (charter point 2).

### 7.7 Cover and make-up sessions

- **Cover starts from the sessions that need it.** The director or a deputy marks the sessions that need cover.
  - No reason is recorded, and nothing counts a teacher's absences (§2.6).
  - The official absence channel stays the state's.
- **A cover choice for each session,** with supervision as the default. The other choices:
  - a study room;
  - merging with another class;
  - a swap or a move;
  - a free colleague;
  - letting pupils go, if it is the day's last session.
- **A daily cover sheet** for the supervisors, printed or sent.
- **The cover log** counts the cover each person gave, so it can be shared fairly. The app suggests; the director decides.
- **Make-up sessions** are new sessions linked to the ones they replace, so progress stays right. Whether a missed session affects pay is decided in the official channel, never in Tabachir (charter point 2).

### 7.8 Who can see and do what in school mode

| Data | Teacher | Director and deputies | Inspector (own district and subject) |
|---|---|---|---|
| Pupil records | All, for their classes | None | None through Tabachir |
| Lesson records | All. Corrections keep a history | Read, by class. May visa or comment; never edit | Read, with access the authority grants, limited in time |
| Private notes and reasons | All | None | None |
| Class progress | All | By class, in the dashboard | Classes in scope, while access lasts |
| Timetables | Their own. Can propose changes | Create and change them | The timetables of teachers in scope |
| Cover | Cover for their classes, and the cover they gave | Mark the sessions that need cover, and assign it | None |
| Class statistics from marks | All | Only what the teacher shares: cells of at least 10 pupils, and never mid-term marks | Only what the teacher shares |
| Access log | Every access to their own records | Their own actions | Their own actions |

- **Inspectors' access** is granted by the authority, never by the director. It is limited in time and visible to the teacher (charter point 5).
- **Never in Tabachir:** evaluating teachers, transferring them between schools, approving overtime or pay, or connecting to amatti or ostad (§2.6).

### 7.9 Directorate deployments

- **From 2027/28 at the earliest** (§1.15, step 3). The directorate is the controller, and runs Tabachir on its own or state infrastructure in Algeria. It is also the controller for its primary schools.
- **It measures what the system owes teachers,** never whether teachers comply:
  - cover provided;
  - vacant posts and unassigned hours;
  - sessions lost to closures, from the calendar;
  - how pacing spreads across its schools;
  - which plan items run long.
- **Minimum group sizes** count teachers and schools. A figure covers at least 5 teachers and 3 schools; anything smaller is hidden, along with any cell that would reveal it by subtraction.
- **Never:** named teachers, except for inspectors in their scope; league tables of schools; reasons; any count of strikes (§1.11).
- **The software** is a self-hostable aggregator that the project publishes. Paid deployment and support are available (§1.10).
- **Gates beyond school mode:**
  - a decision by the directorate, and the ministry's view on whether the Council of Ministers must approve;
  - the directorate's own ANPDP declaration;
  - its security structure under Decree 26-07;
  - hosting on state or directorate infrastructure;
  - consultation of the technical committee and the representative unions;
  - an instruction on inspectors' access;
  - public procurement (Loi 23-12).

### 7.10 How a deployment runs

- **Its own space.** Each institution has a separate space for its data, keys and settings. It can be exported whole and handed back at any time, with no lock-in.
- **Keys.** A school pilot hosted by the project in Algeria is end-to-end encrypted. The keys stay on the teachers' and the director's devices, and recovery goes through the institution. A directorate hosts its own deployment.
- **The project's role:** the publisher of the software, or a processor under a written contract. It never sets the purposes (§1.15).
- **Paper stays official** in steps 2 and 3. The texts book and the journal remain the official records (Decisions 155 and 831), and a digital visa is only a comment. Only a ministerial text changes that (step 4).
- **Ready-made documents.** The project keeps templates ready before anyone asks:
  - a register of processing;
  - an impact-assessment template;
  - processor-contract clauses;
  - the charter (`CHARTER.md`);
  - the published security design;
  - a deployment guide.

### 7.11 The gates, as a checklist

Every school deployment needs all of these (§1.15):
1. **Authorisation.** The Director of Education's written authorisation. Counsel checks whether the Council of Ministers' rule of 6 September 2026, under which any education proposal goes to the Council, reaches a free pilot.
2. **The school's ANPDP declaration,** stating:
   - the purposes: coordination, coverage checks and pacing statistics, and not evaluation;
   - the recipients: the director and deputies, and the inspector for the subject;
   - retention: 3 years, like the texts book;
   - the security measures and the processor.
3. **A processor contract,** with the Decree 26-07 security clauses, a ban on use in evaluation, and a publication clause (§1.8).
4. **A data-protection officer:** the school's, or the directorate's shared one.
5. **An impact assessment,** reviewed by that officer.
6. **Teachers:** the notice in Arabic, a presentation to the teachers' council, the charter adopted by the council, voluntary participation, and no personal phone required.
7. **The project:** a legal entity able to sign.

### 7.12 Timeline

| When | What |
|---|---|
| January–March 2027 (pilot) | Reader mode and the coordinator's merge, with the pilot's directors, coordinators and an inspector |
| September 2027 (launch) | The timetable package |
| 2027/28 | A first school-mode pilot in one CEM or lycée, once the gates are met. At the earliest, a directorate deployment, which is also the route for primary schools |

### 7.13 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Three steps | Reader mode and the coordinator's merge in the pilot; the timetable package at launch; school mode after the gates |
| Reader mode | No accounts and no server copy. Signatures checked. A spot-check sheet for inspectors |
| Timetable package | From FET, a template or by hand; no solver. Each teacher gets only their part. Versions with effective dates |
| School mode | The school is the controller. Lesson records, progress, timetables and cover enter its space; pupil records, private notes and reasons never do |
| Dashboard | Workload, sessions awaiting confirmation per class, and classes behind the plan. "Awaiting confirmation" lives only on the screen: never printed, exported, totalled or kept. Nothing is ranked |
| Cover | Starts from the sessions that need it, with no reason and no count of absences. Supervision by default. Make-up sessions linked; pay stays in the official channel |
| Participation | Voluntary in pilots. A class not shared shows as "not shared". No personal phone needed |
| Directorates | Figures on what the system owes teachers, with at least 5 teachers and 3 schools per figure. Never named teachers, except for inspectors in their scope |
| Section 7 | Settled on 27 Sep 2026 |

**Open.** Counsel answers most of these:
- **The controller** in each type of school, and whether a school may rely on its public mission.
- **Whether a free pilot needs Council of Ministers approval** under the 6 September 2026 rule.
- **Whether reader mode and the timetable package need any formality.**
- **Whether a directorate may receive school data through Tabachir,** rather than through the national interoperability system (Decree 25-320).
- **Consultation duties:** technical committees and unions.
- **Private schools:** who the controller is for teachers they employ (Loi 90-11).
- **A willing school and directorate for 2027/28.** The field check and the state track look for them.

---

## 8. The state layer

This section designs how Tabachir works with the state towards the goal in principle 6:
- what the state already runs, and the rules for working alongside it;
- what Tabachir offers the ministry, the IGP and INRE;
- the insights observatory, with the numbers §1.6 leaves to this section;
- the state track, and what national adoption would take.

### 8.1 What the state already runs

- **The administrative backbone is the state's** (research 10).
  - The sector's information system holds class groups and teacher assignments (compulsory since at least 2018), weekly hours (since 2020), staff records, pupil lists and marks.
  - Pupil absences have been entered by the schools' pedagogical services since April 2026.
  - Teachers enter marks in the teacher space (ostad) or in the grade workbook.
  - Parents see absences, weekly timetables and exam calendars in their own space (awlyaa).
- **Teachers' attendance belongs to HR and payroll.** A November 2024 report said teacher-absence entry had been switched on in the system, with automatic salary deductions.
- **The ministry is building its own national data layer:** remote monitoring of schools, a system to analyse results, and database links with the High Commission for Digitisation (HCN).
- **The gap is the lesson record.**
  - No state tool records what was taught in each session, how far each programme has got, or the teacher's journal. Coverage is checked on paper.
  - A digital texts book and digital inspection are on the ministry's July 2025 roadmap, and circular 465 orders accounts for inspectors. Nothing has shipped.
  - Research 10 rates the chance that the state ships a digital texts book within 12–24 months as medium.
- **There is no door for outside software.**
  - There is no public API, developer programme or approval route. Every integration found is between state bodies.
  - Since 6 September 2026, every education proposal goes to the Council of Ministers.
  - The only structured door for outside innovators is INRE's Tarbya-Up Challenge.
- **So Tabachir complements the state and never duplicates it** (§2.6). It covers the lesson record, which no state system covers, and meets the rest through files.

### 8.2 Rules for working with the state

- **Complement, don't race.** Tabachir keeps the teacher's capture and pacing. It hands the state what it needs in open formats, and never rebuilds what the state runs.
- **Files only, until there is an agreement** (§2.6).
  - No connectors, scraping or automation of ostad or amatti, and never teachers' passwords.
  - Data moves only as files that users download or upload.
  - An automated link needs the ministry's agreement, the ANPDP's authorisation for interconnection (Loi 18-07 Art. 19) and the national interoperability system (Decree 25-320).
- **Outputs, never a tracker.** Tabachir is never described as "a platform for the ministry" or a way of "tracking teachers". It is the teacher's class logbook that prepares the official texts book and the term export.
- **Every agreement is public,** and no principle is waived (§1.8). The state may also fork the code: a changed version it runs for teachers must offer them its source (§1.3).
- **Watch and respond** (research 10):

| If the state ships | Tabachir |
|---|---|
| A digital texts book | Adds an export into it, drops the print features it replaces, and keeps the teacher's capture and pacing |
| A timetable screen or export | Adds an importer |
| An inspector module | Aligns the progress statement with its fields |
| A list of approved tools, or a ban | Complies, and offers its code and `NETWORK.md` for audit |

### 8.3 What Tabachir offers the state

1. **Four open formats** (§5.11): the plan pack, the session log and progress statement, the timetable package, and the insights payload.
2. **The plan-pack pipeline** (§4.3). The IGP can publish its plans through Tabachir, by uploading the PDF or filling in the form, and its packs carry the status "official". Once the IGP publishes its own plans this way, the question of their copyright is settled.
3. **Accepted printouts** (§1.15, step 1). The request: once a text allows it, a printed page signed by the teacher and countersigned by the director replaces re-copying into the texts book. Abroad, Ghana declared electronic lesson plans legal, and Russia and Portugal ban paper duplicates (research 11).
4. **A curriculum-pacing observatory** for the IGP and the curriculum designers (§8.4).
5. **The self-hostable aggregator,** for a directorate or the ministry that wants live views, on its own servers and as controller (§7.9).
6. **A protocol for a national progress figure,** instead of teachers' data (§8.5).
7. **Code, a deployment guide and support** for a national deployment (§8.7).

### 8.4 The insights observatory

It starts in 2027/28, with its code, payload and method published at least a month before collection (§1.13, stage 4). The rules in §1.6 bind it.

**The questions it answers,** for the IGP and the curriculum designers:
- Which items take more sessions than the plan allows?
- Which items do teachers most often merge, skip, split or re-teach?
- How far have classes got by the end of each term, by level, subject and wilaya?
- Did this year's changes to a plan help?

**The payload.** Only what was taught (§1.6), for each class whose teacher opts in:
- the plan pack and release;
- the sessions spent on each item;
- the items merged, skipped, split or re-taught;
- how far the class got by the end of each term.

It never holds the date of a session, a reason a session was not held, pupil data, anything that identifies a teacher, or data from institution mode. Figures from institution deployments stay with their controllers.

**Indicators,** each shown with its number of classes and a note that opt-in samples are self-selected:
- the median sessions spent on each item, for each pack;
- the items most often merged, skipped, split or re-taught;
- how far classes got by the end of each term, as a median and a spread;
- sessions lost to closures by wilaya, worked out from the public calendar, never from teachers' entries.

**Minimum group sizes.** These are the numbers §1.6 leaves to this section.
- A wilaya or national figure covers at least 10 teachers and 3 schools. Directorate figures in institution mode follow §7.9: at least 5 teachers and 3 schools.
- A cell below the minimum is hidden, and so is any cell that would reveal it by subtraction.
- In small cells, shares near 0% or 100% are shown in bands. Sparse cells are pooled across years.

**The teacher's comparison** with their peers (§1.6) is worked out on the teacher's device, from the published figures. Nothing about the class is sent to make it.

**How the figures may be used**
- The method states that the figures describe the plan, not classes or teachers.
- They are never used to set the scope of exams, to rank anyone, or for personnel decisions (§1.6).
- **Why the exam-scope ban matters.** Algeria has set BAC "thresholds" from progress collections before (research 09, 11). When reported progress shrinks the exam scope, a class gains by reporting less. When it feeds pay, a class gains by reporting more. Either use corrupts the figures, so the method bans both. The IGP is asked to commit to this in writing.
- **The IGP sees each report first,** and has 30 days to comment. Publication then follows the method (§1.6).

**Before the first collection**
- Counsel confirms that teachers may send lesson-level data without written authorisation (Ord. 06-03 Art. 48; §1.6). Counsel also checks whether publishing the figures needs the ministry's consent, or falls under the national statistics rules.
- The pilot's data-quality audit compares two things: logged sessions against pupils' exercise books, and entries made before a director could see them against entries made after.

### 8.5 A national progress figure: a protocol, not data

- **If the state wants a national figure** for programme coverage, Tabachir offers a protocol rather than teachers' data. Inspectors compare pupils' exercise books with the texts book in a random sample of classes, twice a year.
- **Why.** Credible figures abroad came from independent samples like this, not from teachers' own reports (research 11). The reader mode's spot-check sheet supports it (§7.2).
- **Honest expectations.** Covering the plan is not the same as learning. The big learning gains abroad came from structured lessons with coaching, never from tracking alone (research 11).

### 8.6 The state track

| When | State track | Gate |
|---|---|---|
| Now to December 2026 | • Find a contact at the IGP, the first step<br>• Read the Tarbya-Up terms<br>• Draft the plan-pack format<br>• Counsel's priority questions<br>• Plan the legal entity | The field check |
| January–March 2027 | • A director and an inspector in the pilot<br>• The security design published<br>• The first printouts countersigned (step 1) | The pilot's success criteria |
| September 2027 | • The four formats proposed to the IGP and INRE, with the pilot's results<br>• A Tarbya-Up entry, once its call and terms are known | The pilot's results, published |
| 2027/28 | • The legal entity in place<br>• A school-mode pilot in a CEM, authorised in writing (step 2)<br>• Talks with a directorate<br>• The observatory's method published | The school-mode gates (§7.11) |
| 2028 onwards | • A directorate deployment (step 3)<br>• A ministerial text for national adoption (step 4) | Steps 3 and 4 |

**The doors**
- **The IGP:** the plan-pack pipeline, the observatory and the formats. There is no contact yet, so finding one comes first.
- **INRE,** the national institute for research in education: the formats, its incubator, and its journal (مجلة الابتكار التربوي), first published in September 2026.
- **The Tarbya-Up Challenge 2027.** Edition 3 is open to sector staff and researchers, so the founder, a teacher in service, can lead an entry, for example an aggregator pilot in one directorate. Its IP terms are checked against the AGPL and the DCO first.
- **The ministry's digitisation cell:** the session-log format, once INRE is engaged.
- **Directorates:** a deployment (§7.9).

### 8.7 National adoption

National adoption is step 4 of the ladder (§1.15), 2028 at the earliest. It takes:
- **Decisions.** A Council of Ministers decision, and a ministerial text giving the digital record official status, alongside or instead of Decisions 155 and 831.
- **State plans and data exchange.** HCN review of the sector plan (Decree 23-314), and data exchanged only through the national interoperability system (Decree 25-320).
- **Hosting** on state infrastructure: the ministry's data centre or the national data centre.
- **The ANPDP,** consulted, or its authorisation for a national system.
- **Records fit to be official:** signed exports and a history that cannot be altered (§1.15), with legal signatures under Law 15-04 (§5.5).
- **Tabachir's role:** code, a deployment guide and a support contract (§1.10).
- **The charter binds a national deployment too** (§1.15). An agreement that would break it is refused (§1.8). The state can instead fork the code under another name (§1.9).
- **Paper goes** once the text allows it (§2.2).

### 8.8 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Relationship | Complement the state and never duplicate it. Files only until there is an agreement. Watch what the state ships, and respond |
| The offer | The four formats, the pipeline for the IGP, accepted printouts, the observatory, the aggregator, a protocol for a national figure, and code with support |
| Observatory | Opt-in and lesson-level: sessions per item, merges and skips, how far classes got by term end, and closures from the public calendar. No dates, reasons or institution-mode data |
| Minimum sizes | At least 10 teachers and 3 schools for a wilaya or national figure, with suppression of cells that would reveal a hidden one |
| Peer comparison | Worked out on the teacher's device from the published figures |
| Use of figures | Never for exam scope, rankings or personnel decisions. The IGP sees each report first, with 30 days to comment |
| National figure | An inspectors' sampling protocol, not teachers' data |
| National adoption | The charter binds it. Otherwise the state may fork under another name |
| Section 8 | Settled on 27 Sep 2026 |

**Open**
- **A contact at the IGP.** There is none yet.
- **The Tarbya-Up 2027 call** and its IP terms.
- **Publishing the figures:** whether it needs the ministry's consent, and whether the national statistics rules apply. Counsel answers.
- **Whether and when the ministry ships its own digital texts book.**
- **A willing directorate,** given the 6 September 2026 rule.
- **The AGPL in a state deployment,** alongside Ord. 21-09 and the security levels of Decree 25-320. Counsel answers.

---

## 9. Business

This section turns the money rules (§1.10) into a model:
- who pays for what, and at what price;
- what it costs, and how the team is funded until income arrives;
- the legal entity;
- how teachers find Tabachir.

Prices and costs are estimates. The pilot tests them.

### 9.1 The model

| Who | Pays for | Never pays for |
|---|---|---|
| **Teachers** | Nothing they must pay. Optional: sync and backup after the pilot, and a supporter pass | Any feature, the term export, any print layout, or getting their own data out |
| **Private schools** | Deployment, training and support | The software |
| **Directorates and the ministry** | Deployment, hosting, support and training, through public procurement (Loi 23-12) | The software, which the AGPL gives them freely |
| **Grants and sponsors** | The team's time, plan-pack curation, the field check and the security review | Any say over a principle |

### 9.2 What the market says

- **Free is the norm** (brief §12).
  - Every Algerian register or journal app found is free, often with ads.
  - Teachers pay for paper registers (about 350 DA each), printing and design tools. But no Algerian teacher in the research named a price they would pay for an app.
- **Prices elsewhere.**
  - The one paid Algerian register tool found charges 800–1,600 DA per term or per year, paid by postal transfer or BaridiMob.
  - Teacher apps abroad charge about €14–30 a year, or about $20 once. Their users' most common complaints are the yearly fee and having to pay before the app does anything.
- **What teachers ask for** (research 05): a free core, any price shown before they enter data, a one-time payment rather than a subscription, and a subscription tied to the account, not to one device.
- **The adoption ceiling.** No Algerian register or journal tool has passed about 10,000 real installs. Content apps get about ten times the installs of tool apps (brief §4.6, §12).
- **Seasons.** Demand for export and appreciation tools peaks at the term-end windows in December and March.
- **Scale.** About 630,000 teachers (§2.1).

### 9.3 Sync, the one paid service for teachers

- **Free during the pilot** (§1.10), once its gates are met (§6.2).
- **Priced from the pilot's data.** The pilot tests three prices: 500, 1,000 and 1,500 DA a year.
- **How it is sold:**
  - one payment per school year, never monthly;
  - per teacher account, covering all the teacher's devices;
  - the price shown before sync is set up, and never a paywall in front of a feature.
- **If a payment lapses,** sync stops, and nothing else changes. The data stays on the teacher's devices, and exporting stays free (§1.12).
- **Payment** goes through channels approved in Algeria: Chargily, CIB, Edahabia and BaridiMob (§1.10). Selling needs the legal entity and the commerce rules in §6.2.
- **Google Play.** Google Play cannot bill Algerians, and its rules restrict pointing users to other payment methods from inside an app. So the Google Play build shows no prices or payment links. Teachers subscribe on the project's `.com.dz` website, and the app only signs in.

### 9.4 Services for institutions

- **Private schools:** deployment, training and support, priced per school per year. Counsel first settles who the controller is for teachers that private schools employ (§7.13).
- **Directorates and the ministry:** hosting where they don't host themselves, deployment, support and training. These go through public procurement (Loi 23-12), with processor terms, hosting in Algeria and the Decree 26-07 security clauses (§1.10). Counsel checks which procurement route fits a free, open-source product.
- **Prices are public.** The price list for services is published, like every agreement (§1.8).

### 9.5 Other income

- **The supporter pass:** voluntary, with a visible thank-you. It unlocks nothing (§1.10).
- **Grants and sponsors,** accepted only if they respect every principle, and disclosed in the transparency report. Foreign funding comes only after a legal check (§1.10). Candidates include INRE's incubator after a Tarbya-Up entry (§8.6), university partnerships, and open-source and education funds.
- **Never:** ads, selling or sharing data, paid features, or charging teachers for their own data (§1.10).

### 9.6 Costs

| Cost | Estimate | Source |
|---|---|---|
| Sync servers in Algeria | About 5,000–15,000 DA a month, on one or two servers with redundancy | Research 06 |
| Website, downloads and the reference-data mirror | About 1,000–10,000 DA a month, on shared hosting in Algeria | Research 06 |
| Domains, the trademark filing, the ANPDP formalities, setting up the entity and accounting | One-off and yearly fees | To be quoted |
| **People's time:** development, plan-pack curation, support and security | By far the largest cost | The funding plan (§9.7) |

- **Hosting is cheap. People are not.** At 1,000 DA a year, fewer than 200 paying teachers would cover the servers. What sync revenue must eventually pay for is people's time.
- **Counsel** has no budget yet, so the project looks for free help, such as university law clinics and incubators (§1.17).

### 9.7 Funding until income arrives

- **Until launch,** the work runs on the founder's and volunteers' time, plus any grants. Sync earns nothing during the pilot.
- **Spending priorities,** when money comes in:
  1. **Plan-pack curation.** It is the slowest part of the work, and it recurs every September (§4.4). Subject maintainers are credited, and paid once money allows.
  2. **The independent security review** before sync opens (§6.5).
  3. **Hosting** (§9.6).
  4. **Support** for teachers, in Arabic (§1.11).
- **The pilot must answer five money questions:**
  - Would teachers pay for sync, and at which of the three prices?
  - What share of teachers turn sync on?
  - How much support do 100 teachers need?
  - How long does one plan pack take to key and check?
  - Which content brings installs?

### 9.8 The legal entity

Not decided yet (§1.17). Whatever form it takes, it must be able to:
- sell sync online: a commercial-register entry and a `.com.dz` site hosted in Algeria (Loi 18-05);
- sign processor contracts, institutional agreements and public contracts (§1.15, §7.11);
- hold the copyright, the name and the repositories, and hand them to a successor (§1.12);
- receive grants;
- appoint or share a data-protection officer (§6.2).

| Option | For | Against |
|---|---|---|
| Auto-entrepreneur status (Loi 22-23) | The simplest and cheapest | It is unclear whether it may sell online, since Loi 18-05 requires a register entry. It is weak for signing institutional contracts |
| A company, owned by the founder at first | Can sell, sign contracts and hold the name | Setup and accounting costs. Its statutes must bind it to the principles |
| An association | Fits a shared, open project, and can receive grants | Selling services and signing processor contracts may be harder. Association law may limit foreign funding |

**Recommendation:** a company, with the principles written into its statutes, set up before any paid service or school pilot. The founder decides, after counsel or an incubator has advised. If the ANPDP declaration for the pilot cannot be filed by the founder personally (§6.10), the entity is needed before January 2027.

### 9.9 How teachers find Tabachir

Teachers find Tabachir where they already are (§1.1), never through inspectors or schools.
- **The teacher group on Facebook:** the public beta, a monthly progress post and support (§1.11).
- **YouTube tutorials in Arabic:** one short video per task, such as setting up in 10 minutes, the term export or printing the journal. Each is timed to its season.
- **A content website,** because content brings far more installs than tools do. It offers:
  - free templates and blank documents with their headers filled in;
  - plain guides to the official rules: formulas, circulars and the calendar;
  - a public view of the plan packs;
  - the official downloads (§1.9) and the sync subscription.
- **Word of mouth in the staffroom.** Handover packages and shared statements carry Tabachir from one colleague to the next.
- **The season.** Launch in September, and promote the term export before the windows in mid-December, March and May.
- **Every store review gets a reply** (§1.11).

### 9.10 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Teachers | Every feature is free. Sync is the only paid teacher service |
| Sync | Free in the pilot. Then one payment per school year, per account. The pilot tests 500, 1,000 and 1,500 DA a year |
| Lapsed payment | Sync stops. Nothing is locked, and exporting stays free |
| Google Play | No prices or payment links in the Google Play build. Teachers subscribe on the website |
| Institutions | Paid deployment, training and support, with a public price list. The state buys through public procurement |
| Other income | A supporter pass, grants and sponsors, under §1.10 |
| Spending | Curation first, then the security review, hosting and support |
| Distribution | The Facebook group, YouTube tutorials and a content website. Never through inspectors or schools |
| Section 9 | Settled on 27 Sep 2026 |

**Open**
- **The legal entity.** A company is recommended (§9.8). The founder decides.
- **The sync price,** from the pilot's data.
- **Whether auto-entrepreneur status may sell online,** and whether a withdrawal right applies to digital subscriptions. Counsel answers.
- **Funding the team's time** until services pay (§1.17).
- **Which grants to apply for,** and the legal check on foreign funding.

---

## 10. Roadmap, metrics and risks

This section brings the plan together:
- the roadmap and its gates;
- the field check;
- how success is measured, without spying on teachers;
- when to stop and change course;
- the risks, and the response to each.

It gathers the field-check, pilot and launch scopes from Sections 3 to 9.

### 10.1 The roadmap

Two tracks run side by side: the product for teachers and schools, and the state track (§8.6). Each period ends with a gate.

| When | Build | Content | Schools and the state | Legal and money | Gate |
|---|---|---|---|---|---|
| **Now to December 2026:** the field check | • A prototype: setup, Today and roll call<br>• The five technical checks (§5.13) | • About five plan packs keyed in full (§4.11)<br>• The 2026/27 calendar, as the ministry publishes it | • The field check (§10.2)<br>• A contact at the IGP<br>• The Tarbya-Up terms read, and the plan-pack format drafted | • Counsel's priority questions, with free help<br>• The legal entity decided (§9.8)<br>• The project's ANPDP declaration for the pilot (§6.2)<br>• The name protected (§1.17) | The field check's stop condition (§10.4) |
| **January–March 2027:** the pilot | The pilot app (§3.11), reader mode and the coordinator's merge (§7.2–7.3) | Fixes from the field. Ramadan 1448 and any exam move as a live test (§4.11) | • A director and an inspector in the pilot<br>• The first printouts countersigned (§1.15, step 1) | • The security design published<br>• Sync only if its gates are met (§6.2) | The pilot's success criteria (§10.3) |
| **April–August 2027** | The launch scope: every level's flows, the timetable package, handover, and sync with its price | The first full September release prepared (§4.4) | The pilot's results published | • The legal entity in place<br>• Selling set up for sync (§9.3)<br>• The independent security review (§6.5) | Ready for launch |
| **September 2027:** launch | • Google Play, the website and F-Droid<br>• Code contributions open to all (§1.13, stage 3) | The September release for 2027/28 | • The four formats proposed to the IGP and INRE, with the pilot's results<br>• A Tarbya-Up entry | • The first transparency report (§1.11)<br>• The teacher council (§1.8) | — |
| **2027/28** | More schools. The observatory, with its method published a month before collection (§8.4) | The yearly cycle | • A school-mode pilot in a CEM (step 2)<br>• Talks with a directorate | The school-mode gates (§7.11) | The school-mode gates |
| **2028 onwards** | A second country only if one is decided (§1.14) | — | • A directorate deployment (step 3)<br>• A ministerial text for national adoption (step 4) | — | Steps 3 and 4 |

### 10.2 The field check

**Who**
- **5 to 10 teachers,** across the three levels. They include a contract teacher, a primary specialist and a teacher who works in two schools.
- **2 or 3 directors, censeurs or education counsellors.**
- **1 or 2 inspectors or subject coordinators,** and a contact at the IGP if possible.
- **Teachers' representatives,** on what they would require before school mode.

**What it must settle**
- **The paper routine, timed:** the minutes a week that the journal, the texts book and the distributions take today. This is the baseline for the time budget.
- **The pilot slice:** grades, subjects and schools (§2.7).
- **Printouts:** whether directors will countersign a printed page (§1.15, step 1).
- **The plan model:** the time anchors and the stage picker, and whether "weeks behind the plan" means something to teachers (§4.11).
- **Trust:** whether teachers read Tabachir as surveillance, and what would push them to over-report or under-report.
- **Files:** the class list, the grade workbook's type and columns, blank workbook templates and anonymised FET files (§3.12, §5.14, §7.4).
- **Documents:** the lesson-note template, what Tamazight teachers keep, and the roll-call counting rules (§3.12).
- **The April 2026 progress collection:** what it asked, and how schools answered it.

**Counsel's questions, in priority order**
1. Who the controller is in each type of school, and whether a teacher showing their own record to their director is an internal communication.
2. Whether a free school or directorate pilot needs Council of Ministers approval under the 6 September 2026 rule.
3. Whether teachers may send lesson-level insights without written authorisation.
4. Whether the founder can file the ANPDP declaration and serve as data-protection officer, and whether a processor that stores only data it can't read is still a processor.
5. Whether the charter's "no personnel use" clause can be written into the contract and enforced.
6. The copyright status of the IGP's plans.
7. The FET importer, under FET's licence.

### 10.3 How success is measured

**The pilot's success criteria**

| Measure | Target |
|---|---|
| Seconds per ordinary session | Median about 5; 90th percentile at most 15 |
| Paperwork time per week | Below the paper baseline for at least 3 in 4 pilot teachers |
| Sessions confirmed in one tap | At least 60% |
| Teachers still using it at the end of the pilot | At least 70% |
| The term-2 export | Completed by every pilot teacher who wanted it, with no file rejected |
| Printouts | At least one director countersigns printed pages (step 1) |
| Privacy incidents | Zero |
| Data-quality audit | Its two comparisons published (§8.4) |

**After launch.** Reported in the monthly progress posts and the transparency report (§1.11):
- **Use:** downloads, active sync accounts, term exports, statements shared, and teachers still active after a term (from surveys).
- **Time:** seconds per session and minutes per week, from surveys and volunteer panels.
- **Trust:** privacy incidents, and security fixes shipped on time.
- **Content:** packs published, by status. Plan errors fixed, and how fast. Calendar fixes made within 24 hours.
- **Money:** sync subscribers, and income against costs (§9).
- **The goal:** each step of the ladder reached (§1.15). Also: directors who countersign, inspectors who accept statements, a working contact at the IGP or INRE, the formats proposed, the first written authorisation for a school pilot, and the independent security review passed.

**Measured without spying on teachers**
- **The app sends no usage data** (principle 3, §1.5).
- **In the pilot,** a pilot build times sessions on the device. The teacher sees the figures and decides whether to share them.
- **After launch,** figures come only from what the project sees anyway (downloads, reference-data updates and sync accounts), plus opt-in surveys and the opt-in insights.

### 10.4 When to stop and change course

- **After the field check.** If teachers read Tabachir as surveillance, the design changes before the pilot.
- **After the pilot.** If ordinary sessions take far longer than 5 seconds, or teachers keep paper and Tabachir side by side with no time saved, the flow is reworked before launch. Parallel paper and digital records were the worst case abroad (research 11).
- **In institution mode.** If a deployment breaks the charter, the project stops supporting it and reports the breach in the transparency report, where the law allows (§1.11).
- **If the state ships its own texts book,** Tabachir follows §8.2 rather than competing.

### 10.5 Risks

| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| Plan packs cost more to keep up than the team can give, every September | High | High | Curation gets money first (§9.7). Status flags, free entry without a pack (§4.2), and the IGP taking over the pipeline (§8.3) |
| Teachers see Tabachir as surveillance, or it is used against them | Medium | High | The charter, record layers, no clock times, "awaiting confirmation" only on screen, neutrality (§1.11, §5.4, §7.6). The stop conditions (§10.4) |
| Few installs: no Algerian teacher tool has passed about 10,000 | High | High | The content website and tutorials, free features, offline use, the term export as the pull, and word of mouth through handovers (§9.9) |
| The state ships a digital texts book or an inspector space within 12–24 months | Medium | Medium | Complement it: export into it, and keep the teacher's capture and pacing (§8.2) |
| Legal questions stay unanswered, with no budget for counsel | High | High | Protect data as if the strictest reading applied (§6.1). Free legal help. School mode waits for the answers (§7.11) |
| No legal entity in time for the pilot's declaration, paid sync or a school pilot | Medium | High | Decide the entity now (§9.8). The pilot can run without sync (§6.2) |
| Too much scope for a small team: three levels, all the documents, three languages, two platforms | High | High | The pilot slice before the launch scope (§3.11, §4.11). The technical checks early (§5.13) |
| Technical blocks: F-Droid builds, Arabic PDFs, filling `.xls` workbooks, browser storage | Medium | High | The five checks before the pilot (§5.13) |
| Reference data changes without warning, and the workbook changes at an export deadline | High | Medium | Versioned data, fixes within 24 hours, and only fixes before each export window (§1.9, §4.4) |
| Directors and inspectors differ on printouts | Medium | Medium | Template profiles, blank versions and the countersignature test (§3.8, §1.15) |
| Phones restricted in class (circular 460) | Medium | Low | Roll call after the lesson, and a paper fallback (§3.4) |
| A lost phone exposes pupil data | Medium | High | Encryption, the app lock, backups and the recovery sheet (§6.4, §6.5) |
| A breach of the sync server | Low | High | End-to-end encryption, so there is nothing readable to steal. The breach runbook (§6.7) |
| The Google Play account is lost or the app removed | Low | High | The website and F-Droid as official sources (§1.9). Accounts held by the organisation (§1.8) |
| Too much depends on the founder | High | High | Everything public, the continuity pledge (§1.12), and more maintainers (§1.8) |
| Money runs out before income arrives | Medium | High | Grants, low hosting costs and clear priorities (§9.7) |
| The 6 September 2026 rule slows school and directorate pilots | High | Medium | Teacher mode and reader mode need no approval (§7.2). Patience on the state track |
| Self-reported figures mislead | Medium | Medium | Figures describe the plan, never exam scope. The data-quality audit, and a sampling protocol for national figures (§8.4, §8.5) |

The risk register is reviewed each term, in public (principle 8).

### 10.6 Decisions and open points

**Decided on 27 Sep 2026**

| Decision | Choice |
|---|---|
| Roadmap | The periods and gates in §10.1 |
| Field check | The groups and questions in §10.2, with counsel's questions in that order |
| Pilot success | The targets in §10.3 |
| Measurement | The app sends no usage data. Pilot timings are shared only if the teacher agrees. After launch, only what the project sees anyway, plus opt-in surveys and insights |
| Stop conditions | As in §10.4, including ending support for a deployment that breaks the charter |
| Risks | The register in §10.5, reviewed each term in public |
| Section 10 | Settled on 27 Sep 2026 |

**Open**
- **The pilot's size and schools,** chosen after the field check. About 30 teachers in 3 to 5 schools, across the three levels, is a starting point.
- **A contact at the IGP.**
- **The legal entity** (§9.8).
- **Funding the team's time** until services pay (§1.17).
