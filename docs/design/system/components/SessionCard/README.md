# SessionCard

A session on Today: its class, slot and subject, what the plan proposes, and the one tap that confirms it.

- **Focus card:** the next session awaiting confirmation is a `focus` card with `shadow-focus-card`. It holds:
  - the meta line;
  - the Proposal;
  - the due strips;
  - the primary button;
  - a row of two line buttons.
- **Mini card:** other sessions show the meta line and the lesson.
- **Done card:** a confirmed session shows an `okdot` tick, what was written and where («كُتبت في دفتر النصوص، الصفحة 10»), and a soft «عرض».
- **The meta line:** the class chip on `subject`, the slot in bold, a `sep-dot`, then the subject.
- **One tap for an ordinary session.** Never mark a session done without that tap (PRD [§3.1](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#31-design-rules) rules 2–3, [§2.3](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#23-the-core-workflow)).
- **Canvas:** Main, Today-done, Today-backlog, the other Today states (Today-ramadan, Calendar-update-today and Week-sign-today among them), P-Today, L-Today, EN-Today. PRD [§3.3](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#33-today-and-the-session).
