# Accessibility

PRD [§6.8](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#68-non-functional-requirements) asks for:

- right to left first;
- the Android screen reader in Arabic, French and English;
- text that enlarges to 200% without breaking a layout;
- touch targets of at least 48dp;
- colour never the only signal;
- contrast at WCAG 2.2 level AA.

## What holds

- **Every text colour passes 4.5:1 on the grounds its token names.** The one exception is the map's attribution, listed below. `ink` is 11.5:1 or more on every light ground, `ink2` 6.0:1 or more, `pencil` 5.0:1 or more. `chalk` on `board` is 12.8:1.
- **Colour is backed by words.**
  - Proposals carry a tag.
  - The late toggle reads «تأخر».
  - Thresholds carry their value.
  - Every chart has a table.
- **Primary buttons, inputs, steppers, toggles, segments and icon buttons are 48px or more.**

## What the canvas misses

The canvas values stay exact in this system, and each gap is flagged in its token's note. Each one needs a decision before the apps are built.

| Gap | Where | Measured | Proposed fix |
|---|---|---|---|
| Control borders below 3:1 | `rule` (#CFC7B8) on `sheet`: inputs, chips, outline buttons, segments, steppers, toggles | 1.7:1 | Draw control borders in `book-edge` (#8C8683, 3.6:1), and keep `rule` for decorative lines |
| The selected late toggle is told apart by its fill only | `hi` against the unselected `sheet` | 1.4:1 | Add a tick icon or bold text to the selected state, as for a pressed chip |
| Chips and check rows under 48px | `chip-height` 44px: the chips on Session details, the setup chips, the check rows | 44px | Make them 48px, or pad their touch area to 48px |
| Map links under 3:1 | `map-edge` (#A39E93) on `sheet` | 2.7:1 | Use `book-edge` for links, and keep `map-edge` for the dashed planned links |
| Map attribution text under 4.5:1 | `map-label` on `map-label-ground`, 10px | 3.5:1 | Set it in `ink2` |
| Sidebar outline button just under 3:1 | `chalk-35` on `board` | 2.9:1 | Use `chalk-40` or more |
| No focus ring | Everywhere | None | `focus` and `focus-on-board`, 2px solid with a 2px gap (added) |
| Dashed borders | `pencil-edge` 2.3:1, `notice-edge` 2.3:1 | Decorative | None needed, as long as the tag or the words stay |
