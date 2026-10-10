# BottomNav

The three tabs of the teacher app: «اليوم», «الأقسام», «الوثائق».

- **Use** on the three top-level screens only. Inner screens use the TopBar's back button instead.
- The current tab is `ink` and bold, with its icon on a `pill-on` pill (`radius-pill`). The others are `ink2`. Mark the current tab with `aria-current="page"`.
- **Canvas:** Main, Classes, Docs, the other Today states (such as Today-council, Today-exams, Today-ramadan and Calendar-update-today), Classes-closed, and the primary, lycée and left-to-right variants. PRD [§3.3](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#33-today-and-the-session).
