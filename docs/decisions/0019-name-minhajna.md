# 0019. The product is called Minhajna (منهاجنا)

- **Date:** 2026-10-04, accepted the same day
- **Status:** Accepted
- **Decided by:** the lead maintainer, before the 7 days of comments had passed. No comments had come in.

## Context

[0007](0007-name-tabachir.md) named the product Tabachir (طباشير) on 26 September 2026. Its naming rule ruled out descriptive names, mainly so that the name could be registered as a trademark. For the same reasons it set aside "Almanhaj" and "Alminhaj": descriptive names fail registration, and those echo the national curriculum.

On 29 September the founder chose not to register the name: the official sources and the published checksums tell official builds apart from forks. The complete PRD records that choice in §1.17 ([founderscoffee/minhajna#9](https://github.com/founderscoffee/minhajna/pull/9)).

On 3 October the founder proposed a new name, Minhajna (منهاجنا, "our curriculum"), with the line «من التدرّج إلى الحصّة». The project is in planning, with no app yet, so the name costs little to change now.

## Options

- **Keep Tabachir,** with «من التدرّج إلى الحصّة» as the line under it. It meets the naming rule and costs nothing, but the name says nothing about what the app does.
- **Ask the field-check teachers** about both names before deciding. Teachers would choose, but the decision would wait for the field check, and a new name costs more once there is an app.
- **Minhajna, as one exception** to the naming rule, which would stay as written for later names. The rule stays strict, but one exception makes the next one easier.
- **Minhajna, with a looser naming rule.** The name says what the app does, and the rule keeps what still matters for a name that is not registered. Chosen.

## Decision

**Minhajna** (منهاجنا): our curriculum. The line under it reads «من التدرّج إلى الحصّة», and in English "From the yearly plan to every lesson".

- **Latin spelling.** Always "Minhajna", never "Minhadjna" or "Manhajna".
- **The naming rule** in PRD §1.9 is loosened, for the product and for anything the project later names:
  - "Distinctive" is dropped. It served registration, and the name is not registered.
  - "No official echo" becomes "no official name": never the exact name of an official document, a state body or a state platform. A word they share, such as منهاج, is allowed.
  - "No echo of existing teacher apps" now covers only the apps that teachers use in Algeria.
  - "Available" no longer checks GitHub. The account name `minhajna` belongs to a person, and the project's repositories live under `founderscoffee`.
  - The other points stay: easy to say, neutral, and fits every teacher.

Checks on 3 and 4 October 2026:
- `minhajna.dz`, `minhajna.com.dz`, `minhajna.com` and `minhajna.org` were free in their registries;
- no app on Google Play Algeria or the App Store used the name;
- the GitHub account name `minhajna` belongs to a person, so the repository is `founderscoffee/minhajna`, with no organisation of that name;
- a curriculum platform for students and teachers in other Arab countries uses a close variant of the name. No app that teachers use in Algeria does;
- on 30 September 2026, Lebanon's education ministry, its curriculum centre and France's development agency signed a national curriculum reform called «منهجنا» (Manhajna);
- in Latin script, searches for "Minhaj" return mostly a religious movement and its institutions. In Arabic, the word appears in some religious phrases, but at school it reads as the curriculum.

Details: [PRD §1.9](../prd/PRD.md#19-official-builds-releases-the-name-and-security) and [§1.17](../prd/PRD.md#117-decisions-and-open-points).

## Consequences

- **This record replaces 0007.** Earlier records keep the name they were written with.
- **It changes part of [0005](0005-code-host.md).** The repository is `founderscoffee/minhajna`, and there is no organisation of the product's name to reserve. The rest of 0005 stands.
- **The repository was renamed on 4 October 2026,** before this record is decided, and GitHub redirects the old addresses.
- **The PRD, the README and the repository files** use the new name. The README says that the project was called Tabachir until October 2026, and the name policy covers that name too.
- **Neither the name nor the app suggests that it comes from the Ministry.** The app becomes the official record only through a competent authority's written decision (principle 6).
- **Protecting the name:**
  - register `minhajna.dz` and `minhajna.com.dz`;
  - check that the name is free on Facebook, and reserve the page.
- **The risks of confusion are accepted:**
  - with the official curriculum documents, so the line under the name says what the app does;
  - with Lebanon's reform, a ministry programme abroad, not a teacher app in Algeria;
  - with the close variant used abroad;
  - in search, where the word also brings up curriculum documents and religious texts. Teachers find the app through the official sources, the line under the name and the teachers' Facebook group.
