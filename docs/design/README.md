# Design

Minhajna's screens, its design system and its logo, linked to the [PRD](../prd/PRD.md). Every screen here implements PRD requirements, and every implementation ticket names the screen it builds and the requirements it must meet.

When a screen and the PRD disagree, the PRD wins: the screen is fixed.

## What is here

| Path | What |
|---|---|
| [screens.md](screens.md) | **The screen map.** Every screen with its screen ID, device, who uses it, the proposed build stage, its PRD sections and its requirement IDs |
| [requirements.md](requirements.md) | Every teacher-facing requirement of the PRD as `R-<section>-<nn>`, the screens that meet it, and what is still missing |
| [screens/](screens/) | Each screen as a PNG and as static HTML, named by its screen ID. The HTML carries the exact wording and uses [`screens/tb.css`](screens/tb.css) |
| [system/brand.md](system/brand.md) | The brand book: principles, words, colour, type, layout, states and focus, iconography |
| [system/tokens.json](system/tokens.json), [system/tokens.css](system/tokens.css) | The design tokens: colours, type, spacing, radii, shadows and sizes |
| [system/components/](system/components/) | 40 components, each with its guidelines, a preview, its PRD sections and the screens that use it. [`bundle.css`](system/components/bundle.css) holds their styles |
| [system/logo.md](system/logo.md), [system/logo/](system/logo/) | The logo, the wordmark and the lockups, with the rules for using them |
| [system/print.md](system/print.md) | Printed documents: A4, black and white, the embedded fonts |
| [system/charts-and-maps.md](system/charts-and-maps.md) | Charts (Apache ECharts on the web, react-native-svg on Android) and the read-only maps |
| [system/accessibility.md](system/accessibility.md) | The accessibility rules, and the places where the screens still fall short |

## How a ticket uses it

A ticket names one screen by its ID, for example `Main` (Today, the opening screen), and lists the requirement IDs it must meet, for example R-3.3-01 to R-3.3-04. The screen map gives both. A screen that shows several states, such as Today after a confirmation, has one ID per state.

The screens are drawn for a made-up teacher, school and classes on Sunday 04/10/2026, and the national system's screens in an example year, 2029/30. All names and entries are made up.

## Language

The documents here are in English, like every file in this repository. The screens are in Arabic, French or English, as the app is. Their exact wording is part of the design, so the screens and the quotes of their wording stay in their own language.

## The name and the logo

The logo, the wordmark and the name are for the project's own builds only. Forks use another name and logo, and the Ministry's deployment runs under its own name ([TRADEMARKS.md](../../TRADEMARKS.md), PRD [§1.9](../prd/PRD.md#19-official-builds-releases-the-name-and-security)). The files here are under CC BY-SA 4.0, like the rest of `docs/`, which grants no trademark rights.

The wordmark is outlined from Aref Ruqaa Bold, under the SIL Open Font License 1.1. The fonts the screens use are Aref Ruqaa, Noto Naskh Arabic and Noto Sans, all under the same licence, loaded from Google Fonts.

## How this folder is made

The screens are exported from the project's design canvas, each rendered at its own size, and the system from the project's design system. To change a screen, open an issue: the maintainers change the design and export it again. Don't edit these files by hand.
