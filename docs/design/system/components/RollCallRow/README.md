# RollCallRow

One pupil in the roll call: a number, the name, and two toggles, «غياب» and «تأخر».

- **Everyone is present by default.** Only absence and lateness are marked, and lateness never counts as an absence (PRD [§3.4](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#34-roll-call-the-digital-roll-call-book)). The states are nouns, never «غائب» or «متأخر» (see Words).
- **Absent** is `board` with `chalk` text. **Late** is `hi` with a `late-edge` border, and needs a second sign besides its fill (see Accessibility).
- Rows are 56px. The toggles are 64×48. A marked row is shaded `alt-day`.
- **Provide** the pupils in list order and the toggle states, with `aria-pressed`. The list scrolls smoothly for 45 pupils (PRD [§6.8](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#68-non-functional-requirements)).
- **Canvas:** Roll, P-Roll, Roll-past, Class.
