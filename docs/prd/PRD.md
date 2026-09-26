# Tabachir: Product Requirements Document

*Tabachir (طباشير) is the product's name, chosen on 26 Sep 2026. Repository: [github.com/founderscoffee/tabachir](https://github.com/founderscoffee/tabachir). Started 26 Sep 2026.*

This PRD is written one section at a time, and we settle each section before starting the next. Each section records decisions and ends with a list of what is still open.

The evidence is in the project's research brief, cited as "brief §n", and in the research files it summarises. The brief stays private because it quotes teachers and names other developers (§1.4). Its conclusions will be published.

| § | Section | Status |
|---|---|---|
| 1 | [Open-source strategy and governing guidelines](#1-open-source-strategy-and-governing-guidelines) | Draft for review |

---

## 1. Open-source strategy and governing guidelines

The whole system is open source from its first line of code: the apps, the servers, the tools and the documents. This section sets the rules that govern the project:
- what is open, and under which licence;
- what stays private, and why;
- how pupils' data is protected in public;
- how people contribute and how decisions are made;
- how the project pays for itself without closing anything.

Every later section of this PRD must comply with this one. When a feature conflicts with a principle in §1.2, the feature changes, not the principle.

### 1.1 Why open source

- **Proof instead of promises.** Anyone can have the code checked: a teacher, a director, an inspector or the ANPDP. It shows three things:
  - pupils' data stays on the teacher's devices;
  - there are no ads or trackers;
  - marks stay as confidential as circular 465 §3.5 requires.

  By contrast, at least one paid rival stores teachers' data on servers abroad (brief §10).
- **The tool outlives its company.** This year one developer's whole Google Play account vanished, and its teacher apps went with it (research 04). With open code and an open file format, teachers are never stranded.
- **State-ready by construction.** The ministry can audit the code, host it in Algeria, or reuse parts of it in the digital دفتر النصوص on its July 2025 roadmap (brief §9). It can do all this without buying from a startup.
- **A community for the yearly data.** Timetables, plans and print templates change every September (brief §8). Teachers already share them on blogs and in groups; the open data repository gives that sharing a home.

Open source earns trust, but it does not bring installs by itself. Teachers find their tools through content sites, Facebook groups, YouTube and staffrooms (brief §12). So the project builds in public in those places, in Arabic (§1.11), with the open code as the proof behind it.

### 1.2 Principles

These eight principles override everything else in this PRD.

1. **Open by default.** Every part of the system is public from its first line: code, documents, decisions and roadmap. Only the items listed in §1.4 stay private, each for a stated reason.
2. **Pupil data never reaches the project.** Pupils' names, marks and absences live on the teacher's devices. Sync and backup are end-to-end encrypted, so the project cannot read them. No pupil data goes to any third party, SDK or AI service (brief §10).
3. **No ads, no trackers, and no sale or sharing of data. Ever.**
4. **Charge for services, never for features.** Everything the app does is free. Money comes from services that cost money to run or need people (§1.10).
5. **Open code is not open data.** The code is public and teachers' records are private. Aggregated insights are published only under the rules in §1.6.
6. **A teacher's tool, not the official record.** The project prepares and prints what the school and the state's platforms ask for. It never claims to be the official record, and it never works around a protection in an official file. For example, it fills only the unlocked cells of the school's grade workbook (brief §9, §11).
7. **Teachers own their records.** A teacher can export everything, for free, in an open and documented format, at any time. No agreement can override these principles, whoever it is with: the ministry, a directorate, a school, a sponsor or a funder.
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
- **What it may contain.** Lesson-level data only. Never pupil data, and nothing that identifies a teacher.
- **How it is grouped.** By level, subject and wilaya. A group below the minimum size is never shown; the insights section sets the number.
- **Hosted in Algeria.**
- **Protection without secrecy.** The code is public, so protection against fake or flooded submissions comes from rate limits, outlier filtering and the minimum group size.
- **Who sees what.**
  - Each teacher sees how their class compares with their peers.
  - The IGP receives each report before anything is published.
  - Public figures stay coarse and follow a method published in advance.

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
- **Partnerships in the open.** Every agreement with the ministry, a directorate, a school, a sponsor or a funder is announced, with its parties, scope and money. It is also listed in the transparency report. An agreement that would break a principle is refused.
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
  - deployment, training and support for private schools, directorates and, later, the ministry.
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
- **Prices** are set in the business section.

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
  - every request for data from any authority, and the answer;
  - security incidents;
  - money in and out, by source;
  - partnerships and sponsors.
- **Code of conduct** (`CODE_OF_CONDUCT.md`, adapted from the Contributor Covenant, in Arabic and English).
  - Respect; no harassment or personal attacks.
  - Project spaces stay about the product: no political or union campaigning, and no attacks on named people, whether officials, colleagues, pupils or parents.
- **Neutrality.** The project takes no side in disputes between teachers and the administration. It follows the official texts and cites them.

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

### 1.14 Files that put these rules into the repositories

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
| `NETWORK.md` | Every address the app contacts, what it sends and why |
| `docs/decisions/` | Decision records |
| `CHANGELOG.md` | Release notes for teachers, in Arabic and English |
| `transparency/` | The yearly reports |

The code and the reference data live in separate repositories, because they have different licences, contributors and review rules.

### 1.15 Decisions and open points

**Decided on 26 Sep 2026**

| Decision | Choice |
|---|---|
| Scope | The whole system is open source, from the first line of code |
| Code licence | AGPL-3.0-or-later |
| Contributor terms | DCO; no CLA and no relicensing |
| Copyright and trademark | Held by the founder until a legal entity exists |
| Code host | A GitHub organisation: the repository is `founderscoffee/tabachir`, which is public |
| Money | Charge for services, never for features; the term export is free |
| Name | **Tabachir** (طباشير), chosen from about 60 candidates. On 26 Sep 2026 the GitHub name `tabachir` was free, `tabachir.dz` and `tabachir.com.dz` were free in the registry, and no app on Google Play Algeria used the name. `tabachir.com` is taken |

**Open**
- **Protecting the name.** Three steps:
  - reserve the GitHub organisation `tabachir` so nobody else takes it;
  - register `tabachir.dz` and `tabachir.com.dz`, under the registry's conditions;
  - file the trademark with INAPI through counsel.
- **The legal entity.** It is needed to sell services and to receive grants.
- **The IGP's role in public insight figures.** Must it agree before figures go public, or does it only see them first?
- **The minimum group size for insights.** The insights section sets it.
- **Questions for counsel:**
  - the copyright status of the IGP plans (brief §8);
  - the rules on foreign funding;
  - whether the scrubbed research may be published;
  - the trademark filing.
- **Funding the team's time** until services and institutions pay. The business section covers this.
- **Members of the teacher council.** Chosen after the field check.
