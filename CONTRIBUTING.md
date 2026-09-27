# Contributing to Tabachir

## What we accept now

The project is at stage 1 of its opening plan ([PRD §1.13](docs/prd/PRD.md#113-opening-in-stages)). We accept:
- feedback and suggestions;
- corrections to annual plans and other reference data;
- print templates and layouts;
- translations.

Code contributions are by invitation until the launch, planned for September 2027. If you'd like to help with code, open an issue and introduce yourself.

## Never post real pupil data

Never post pupils' names, marks, absences or photos anywhere in the project: not in issues, pull requests, screenshots, videos, test data or messages. Use made-up names.

Why:
- **Civil-service secrecy** covers pupils' marks and attendance (Ord. 06-03 Art. 48).
- **Transfer abroad.** Publishing personal data through a platform run from abroad, such as GitHub, counts as a transfer abroad under ANPDP deliberation 04.

Maintainers remove any post with real pupil data as soon as they see it, and tell its author privately why.

## Report security problems privately

Never report a security problem in a public issue. Follow [SECURITY.md](SECURITY.md) instead.

## Content contributions

Each correction or template must state:
- **its source:** an official text, an inspector's distribution, or your own work;
- **where it applies:** the level, subject and school year.

By contributing content, you agree to publish it under CC BY-SA 4.0. Tell us how you'd like to be credited, or whether you'd rather not be.

## Code contributions (by invitation, for now)

Read the [contributor handbook](#the-contributor-handbook) before your first pull request. The essentials:
- **Licence.** Code is licensed under AGPL-3.0-or-later.
- **Sign-off.** Sign off every commit under the [Developer Certificate of Origin 1.1](https://developercertificate.org/) with `git commit -s`. The sign-off certifies that you have the right to submit the work under the project's licence. A GitHub no-reply email address is fine.
- **Copyright.** There is no CLA: you keep the copyright in your contribution.
- **Commit messages** follow [Conventional Commits](docs/contributing/commits.md), for example `fix(export): leave locked cells untouched in the grade workbook`.
- **AI-assisted work** is welcome. You answer for it like any other work: you reviewed and tested it, and you have the right to submit it.
- **Privacy-sensitive changes** get extra review ([PRD §1.7](docs/prd/PRD.md#17-contributions)). These are changes that touch:
  - network calls;
  - encryption;
  - sync;
  - insights;
  - the export of marks;
  - anything that reads or writes the school's official files.

## The contributor handbook

| Guide | What it covers |
|---|---|
| [Workflow](docs/contributing/workflow.md) | Issues, branches, pull requests, review, merging and decision records |
| [Commit messages](docs/contributing/commits.md) | The commit format, the sign-off and AI-assisted work |
| [Versions](docs/contributing/versioning.md) | How the apps, the server, the file formats, the database and the reference data are versioned |
| [Releases](docs/contributing/releases.md) | The release calendar, the release checks, signing and the changelog |
| [Engineering rules](docs/contributing/engineering.md) | The rules every code change follows: privacy, secrets, test data, tests, dependencies and licences |

Some tools the handbook mentions, such as the automated checks, `CHANGELOG.md` and `NETWORK.md`, arrive with the first code. Until then, its rules apply to the documents wherever they can.

## Language

- **With teachers:** Arabic.
- **Code, commits and developer documents:** English, with Arabic summaries of anything teachers need to know.

## Conduct

Be respectful. Don't harass anyone or make personal attacks.

The project's spaces stay about the product. That means no political or union campaigning, and no attacks on named people, whether officials, colleagues, pupils or parents.

A full code of conduct will follow ([PRD §1.11](docs/prd/PRD.md#111-community-transparency-and-building-in-public)).
