# PageHeading

The top of a top-level screen: the day in Aref Ruqaa with the date, and one fact line under it.

- **Provide** the heading (`day`), the date or the scope (`fact` in `ink2`), and one neutral fact with an 18px icon.
- **Write the fact as a fact:** «كل الحصص السابقة مؤكّدة · 3 حصص اليوم», or «3 حصص بانتظار التأكيد». Never a judgement (PRD [§3.1](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#31-design-rules) rule 8).
- `.top` is the same heading for Classes, Docs and the national screens: the screen's name with its scope under it.
- **On Today,** the settings gear and «+ حصة» (a session outside the timetable, PRD [§3.3](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#33-today-and-the-session)) sit at the end of the heading line on every Today state. When the day and the date do not fit beside them, the date wraps under the day; it never runs under the buttons.
- **Canvas:** Main, Today-done and the other Today states (Today-ramadan, Today-saturday and Week-sign-today among them), Classes, Docs.
