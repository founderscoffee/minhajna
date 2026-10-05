# Button

Buttons in four weights: the one primary per screen, line buttons for alternatives, soft buttons inside cards, and plain text buttons.

- **Primary:** 56px, full width, `board` with `chalk` text and an optional leading icon. One per screen, for the action that confirms: «تمّت كما هو مقترح», «حفظ المناداة».
- **Line:** a 1.5px `rule` border on `sheet`, for the alternatives beside the primary, in a row of equal buttons (`btns`).
- **Soft:** `soft` ground, for a small action inside a card or strip, such as «المناداة» or «إحصاء».
- **Plain:** text only, for a quiet action such as «تراجع» in the snackbar or «لديّ نسخة من هاتف آخر».
- **Danger:** `danger` ground, only to erase (PRD [§5.5](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#55-history-corrections-and-signatures)).
- All are 48px or more; the primary is 56px. The `button` style; the primary is `button-primary`.
- **Canvas:** used on nearly every board.
