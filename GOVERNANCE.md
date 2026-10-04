# Governance

How Minhajna is run: the roles, who decides, how the principles and the charter change, and the teacher council's part. The rules come from [PRD §1.8](docs/prd/PRD.md#18-governance-and-decisions).

Minhajna is open source and sells nothing. Its goal is national adoption: the Ministry running Minhajna on government servers as the official digital record of teaching (principle 6). So the project is run in public, the Ministry can take it over without the project, and teachers keep the last word on the rules that protect them.

## Roles

| Role | What they do | How they are chosen |
|---|---|---|
| Lead maintainer | Decides, in public, after hearing contributors and, from the launch, the teacher council. The founder is the lead maintainer | If the lead maintainer steps down, they name a successor from the maintainers, in a decision record |
| Maintainers | Review and merge changes, and make releases | Invited by the lead maintainer from regular contributors whose changes and reviews show good judgement, above all about the principles. Each invitation is announced in public |
| Data curators and subject maintainers | Turn plans and teachers' submissions into reference data, and check each release against its sources ([PRD §4.3](docs/prd/PRD.md#43-the-pack-pipeline)). Subject maintainers are practising teachers of the subject and level | Named by the lead maintainer, in public |
| Community moderators | Look after the teachers' spaces, remove posts with real pupil data, and apply the [code of conduct](CODE_OF_CONDUCT.md) | Named by the lead maintainer, in public |
| Security contacts | Handle private security reports ([SECURITY.md](SECURITY.md)) | Named by the lead maintainer |
| The teacher council | Advises, and after adoption consents to changes to the principles and the charter ([below](#the-teacher-council)) | Its first members are chosen after the field check |

Until a legal entity exists, the founder holds the copyright in their own work and owns the name and logo. Both move to the association when it is created ([PRD §1.3](docs/prd/PRD.md#13-licences), [§9.8](docs/prd/PRD.md#98-the-legal-entity)).

## Who decides

- **Until the launch** in September 2027, the founder leads, as lead maintainer, and decides in public after hearing contributors.
- **From the launch,** the lead maintainer still decides, in public, after hearing contributors and the teacher council. When the lead maintainer goes against the council's advice, the decision record says why.
- **After the Ministry adopts Minhajna,** its own staff maintain it, as maintainers in the project's public process. Releases, the principles and the charter are still decided in public, and a change to the principles or the charter also needs the teacher council's consent ([below](#changing-a-principle-or-the-charter)).

Day-to-day changes follow the [workflow](docs/contributing/workflow.md): issues, pull requests and review by a maintainer other than the author.

## Decision records

A decision about a principle, a licence, a data flow, the insights layer, money or a partnership gets a public record in [`docs/decisions/`](docs/decisions/): context, options, decision and date. The [workflow](docs/contributing/workflow.md#decision-records) sets the steps.
- **Comments.** A proposal stays open for at least 7 days, and a change to a principle or the charter for at least 30.
- **Teachers hear about it where they are.** An Arabic summary goes on the website and in the teachers' Facebook group, with the website's form for comments, and the field-check teachers are asked directly. Comments made there count like those on the pull request.
- **Every comment gets an answer** in the record, and the record is kept whether the decision is accepted or rejected.

## Changing a principle or the charter

- **The process.** A public proposal, at least 30 days of comments and a recorded decision ([PRD §1.2](docs/prd/PRD.md#12-principles)).
- **Two principles never change:** pupil data never reaches the project (principle 2), and no ads, no trackers, and no sale or sharing of data (principle 3).
- **After adoption, the teacher council must consent.** After the 30 days of comments, the council votes in public. The change passes only if more than half of all its members vote for it. Without that vote, the change fails. The Ministry's maintainers can propose a change, but never decide one alone ([0016](docs/decisions/0016-non-commercial.md)).
- **This rule is protected too.** A change to how the principles or the charter change, including the council's consent, follows the same process.

## The teacher council

- **When.** From the launch.
- **Members.** Practising teachers from several levels and wilayas, starting with the field-check group, plus a director and an inspector where possible. How long members serve, and how they are replaced, is set in a decision record before the council starts.
- **Role.** It advises on the roadmap, the data repository, the print layouts and which plan packs come first. Its notes are public.
- **Consent.** After adoption, as [above](#changing-a-principle-or-the-charter).

## Partnerships and money

- **In the open.** Every agreement with the Ministry, a directorate, a school, a sponsor or a funder is announced, with its parties, scope and money, and listed in the transparency report.
  - Every agreement includes a clause allowing it to be published (Ord. 21-09 Art. 8).
  - An agreement that would break a principle is refused.
- **Nothing is sold.** The project takes no payment from the Ministry, directorates or schools, and signs no support contract ([PRD §1.10](docs/prd/PRD.md#110-money)).
  - It takes no money from abroad.
  - It refuses sponsors that sell to schools, teachers, pupils or parents, and any party, union or religious body.
  - No sponsor gives more than a quarter of the project's income in any year.
- **The Ministry runs Minhajna itself** in the national system. The project is only the publisher of the software, never the controller, and before adoption it runs no deployment for a school or an authority ([PRD §1.15](docs/prd/PRD.md#115-institution-mode)).
- **A transparency report** every September, from the launch, lists money in and out by source, partnerships and sponsors, and every request for data from an authority, where the law allows ([PRD §1.11](docs/prd/PRD.md#111-community-transparency-and-building-in-public)).

## Accounts and keys

- The code lives in a GitHub organisation, not a personal account, so it can be handed over without breaking links.
- Every maintainer uses two-factor authentication and signs the release tags they make.
- Signing keys are held by named maintainers, with an offline backup, and never enter a repository ([PRD §1.4](docs/prd/PRD.md#14-what-is-open-and-what-stays-private)).

## Changing this document

Changes to this document are proposed and decided like a decision record, in public.
