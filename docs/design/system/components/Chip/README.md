# Chip

A row of choices, one or several, such as the session type, the stage reached or the day homework is due.

- **Provide** short labels. Mark the selected chip with `on` and `aria-pressed="true"`.
- Selected chips are `board` with `chalk` text; the others have a 1.5px `rule` border on `sheet`.
- **Size:** the canvas draws chips 44px tall (`chip-height`), under the 48px target. Build them at 48px, or pad their touch area (see Accessibility).
- **Canvas:** 92 boards, such as Entry, Sheet and the setup screens. PRD [§3.3](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#33-today-and-the-session).
