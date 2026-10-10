# 0020. The code lives in the djazairdev organisation

- **Date:** 2026-10-10, accepted the same day
- **Status:** Accepted
- **Decided by:** the lead maintainer. The repository moved the same day, before this record, as it did for [0019](0019-name-minhajna.md).

## Context

[0005](0005-code-host.md) put the code in a GitHub organisation rather than a personal account, so that the project can be handed over without breaking links. [0019](0019-name-minhajna.md) kept it in `founderscoffee`, as `founderscoffee/minhajna`, since the GitHub name `minhajna` belongs to a person.

`founderscoffee` is the organisation of another of the founder's projects, founders.coffee, which moved to [djazairdev](https://github.com/djazairdev) on 10 October 2026. djazairdev gathers open-source projects for Algeria, and its Hub at [djazair.dev](https://djazair.dev) helps Algerian developers find them and make a first contribution. Minhajna is one of the Hub's first projects.

## Options

- **Stay in `founderscoffee`.** Nothing moves, but the project stays in an organisation named after another product.
- **A `minhajna` organisation.** Not possible: the name belongs to a person (0019).
- **Move to `djazairdev`.** An organisation for Algerian open source, whose security settings apply to every repository in it, and whose Hub brings contributors. Chosen.

## Decision

- The repository is [djazairdev/minhajna](https://github.com/djazairdev/minhajna), moved on 10 October 2026. GitHub redirects the old addresses, `founderscoffee/minhajna` and `founderscoffee/tabachir`.
- The rest of 0005 stands: GitHub, an organisation rather than a personal account, and a public repository.
- Joining djazairdev changes none of Minhajna's principles, licences, contributor terms or governance, nor its opening plan: code contributions stay by invitation until the launch ([PRD §1.13](../prd/PRD.md#113-opening-in-stages)). The founder keeps the copyright and the trademark ([0004](0004-copyright-and-trademark-holder.md)).

Details: [PRD §1.17](../prd/PRD.md#117-decisions-and-open-points).

## Consequences

- **This record changes part of 0005 and 0019:** the repository's owner. The issues, the pull requests, the discussions and the settings moved with it.
- **djazairdev's security settings apply:** code scanning, Dependabot alerts and security updates, the dependency graph, secret scanning with push protection, and private vulnerability reporting, which [SECURITY.md](../../SECURITY.md) relies on. The dependency review check, which needs the dependency graph, now runs.
- **djazairdev's owners can administer the repository.** The founder owns djazairdev, so the people who can change the repository are the same.
- **The documents link to the new address.** Earlier decision records keep the addresses they were written with.
