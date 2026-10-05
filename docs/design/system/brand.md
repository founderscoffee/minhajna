Minhajna (منهاجنا) is a free, open-source app for teachers' records: the yearly plan, the session, the texts book, roll call and marks, on a budget Android phone, offline, with no account. It is built teacher first, for adoption by the Ministry, which will run it on government servers. Nothing in this system sells anything. Its look comes from what teachers already hold: the blackboard and its chalk, and the paper, ink and pencil of the books they keep.

Every rule below comes from the [PRD](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md) and from the design canvas, and names the PRD section it serves. When a screen, a component or a token here disagrees with the PRD, the PRD wins: fix the design.

## Where things are

- **The screens** are on the design canvas (private): Minhajna design canvas. The [screen map](../screens.md) maps every board to its PRD sections, so that each implementation ticket names the exact screen it builds.
- **The components** are the canvas's shared stylesheet, `components/bundle.css`, with one card per component family. Class names are the canvas's own. The apps rebuild them in React Native and React (PRD [§5.2](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#52-architecture)).
- **The logo** is in the asset group Logos; the rules are in the **Logo** section.

## Principles

These are the design rules of PRD [§3.1](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#31-design-rules) and the limits of [§2.6](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#26-what-minhajna-never-does), as they show on screen.

| Rule | On screen | PRD |
|---|---|---|
| One entry, every output | A session is confirmed once, on Today. The book page, the journal, roll call and marks read from that one record. No screen asks for the same fact twice. | §3.1 rule 1 |
| Faster than paper | An ordinary session is one tap: the primary button «تمّت كما هو مقترح». Roll call marks only the absent and the late; everyone else is present by default. | §3.1 rule 2 |
| Proposed, never assumed | What the app proposes is in `pencil` with a dashed `pencil-edge` and a tag such as «مقترح من المخطط». Only the teacher's confirmation turns it into `ink`. Never draw a proposal in ink. | §3.1 rule 3, §2.3 |
| Correct anything, lose nothing | Every record has a way to correct it, with no deadline and no lock. Say so where it matters: «يمكن تصحيح أي حصة لاحقاً، ويُحفظ كل تعديل.» | §3.1 rule 4, §5.5 |
| Print what is checked | Documents follow the paper layouts that directors and inspectors know. Every document also prints blank. | §3.1 rule 5, §3.8 |
| Offline, with no account | No screen of the daily work waits for a network or a sign-in. | §3.1 rule 6 |
| The phone alone is enough | Design at 360×800 first. The web app is the same app on a PC, never a richer one. | §3.1 rule 7, §6.8 |
| Neutral words | State facts: «3 حصص بانتظار التأكيد», "2 weeks behind the plan". Never judge: no "you are late", no praise. | §3.1 rule 8 |
| Arabic first | Right to left first, then left to right for French and English. Documents come out in the subject's language. | §3.1 rule 9, §1.14 |
| Never judge teachers | No scores, rankings or colour codes for teachers. No colour in this system means good or bad about a teacher's work. | §2.6 |
| No clock times | Show slots and days, never the time a teacher did something. | §2.6, §5.5 |

## Words

The voice is a careful colleague: short, factual, warm without fuss. It speaks to every teacher the same way, whatever their classes or level.

- **State the fact, then the way forward.** «كل الحصص السابقة مؤكّدة · 3 حصص اليوم». «الحضور هو الأصل، ويُعلَّم الغياب والتأخر فقط. يمكن التسجيل بعد الحصة، والتصحيح في أي وقت.»
- **Reassure where a teacher might worry,** in the `small` style beside an icon: «ذكر السبب اختياري، ويبقى على أجهزتك وحدها».
- **No gendered forms.** Address the user through the task, with a verbal noun or the first person: «تأكيد الحصة», «يُترك بعلمي», «أجهزتي». Never call the user «الأستاذ»: that word names the role in general, or another person.
- **The name.** In Arabic sentences write «منهاجنا» in guillemets, so that it reads as the app's name and not as "our curriculum". In a logo, a title bar or a label, it stays plain. In Latin letters it is always "Minhajna" (PRD [§1.9](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#19-official-builds-releases-the-name-and-security)).
- **Fixed words.** An inspector's time-limited access is «إذن اطّلاع». A share of a total is «نصيب». A part of a recovery key is «جزء». Data that refreshes «تُحدَّث». The table below gives the rest; every screen uses these words.

| Meaning | Say | Never | PRD |
|---|---|---|---|
| A session that did not take place | «لم تُعقد الحصة» | «لم تُنجز», which suggests a failure | §3.3 |
| Where private notes and reasons live | «على أجهزتك وحدها», «لا تغادر أجهزتك»: they sync, encrypted, between the teacher's own devices | «لا تغادر هذا الهاتف». Only the teacher card's personal fields and the drawn signature stay «على هذا الهاتف» | §5.4, §6.5 |
| Roll-call states | Nouns: «حضور», «غياب», «تأخر، لا يُحسب غياباً» | «حاضر», «غائب», «متأخر» | §3.4 |
| A late arrival, corrected | «الوصول بعد المناداة» | | §3.4, §5.5 |
| Pupil movements | «التحاق», «مغادرة» | | §3.2 |
| A cover session | Its kind, slot and class: «حراسة 3م4» | Any reason, such as a colleague's absence | §2.6, §7.7 |
| A delay the buffers absorb | «استُعملت 4 حصص من الاحتياط، وتبقى حصتان». A class shows as behind only once the buffers left can't absorb the delay | "Behind the plan" while buffers remain | §4.7 |
| Sessions not held, on a progress statement | «الرزنامة: 0 · أخرى: 1», with a line saying the reasons stay on the teacher's devices | Any reason, or a switch to show reasons | §3.10, §5.4 |
| A progress statement's code | «رمز QR»: signed, read offline, with no expiry | A validity in minutes, which only a handover or a direct transfer has | §5.9 |
| The success rate | «10 فما فوق» | «فوق 10» | §3.7 |
| A teacher's load | «15 ساعة في الأسبوع» | «15 من 20 ساعة», or any unused hours | §3.8 |
| Sync and backup | «مجانية للأساتذة» | «أثناء التجربة» | §3.10, §5.8 |
| Corrections | Listed one by one | A count or a ratio, for anyone | §2.6, §3.8 |
| Counts the app works out, such as homework | Proposed in `pencil` until the teacher confirms them | Filled in by themselves | §3.1 rule 3 |
| TD, remediation and support | Their own queues. A class's position and its «آخر مورد» are main-plan items | Merging a lesson with a TD session | §4.7 |
- **Digits and dates.** Western digits everywhere. Dates as in PRD [§3.8](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#38-the-documents): dd/mm/yyyy, the Algerian month names (جانفي … أوت), and the school year as "2026-2027". Slots, not clock times: «08سا – 09سا».
- **No exclamation marks, no emoji, no marketing.** The app is a public tool, not a product.
- **Every text is translatable** (PRD [§1.14](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#114-algeria-first-flexible-for-other-countries)). Never put words into an image.
- **Pupil data stays out of the way.** No pupil name in a notification, an error or a share preview. The private-note panel asks for no health or discipline details: «يُرجى عدم كتابة تفاصيل صحية أو تأديبية تخص التلاميذ، هنا أو في الدفتر.»

## Visual foundations

### Paper, ink and pencil

- Set every phone screen on `paper`. Put cards, sheets, inputs, list rows and the book page on `sheet`, bordered by a 1px `line`.
- Write in `ink`. Use `ink2` for subtitles, captions, labels and facts.
- **Pencil is for what is proposed.** Proposal text is `pencil`, inside a 1.5px dashed `pencil-edge` box with radius `radius-control`, and always carries its `tag`. A row awaiting confirmation on the book page is `pencil`, with a dashed circle in the signature column. Once confirmed, it turns `ink` and the circle becomes the filled `board` tick.

### Board and chalk

- `board` is the blackboard and the one strong colour: the primary button, selected chips and segments, the absent toggle, the confirmed tick, the welcome hero, the web sidebar and the app icon. Text and icons on it are `chalk`.
- Give each screen one primary button at most, 56px tall and full width.
- `hi`, chalk yellow, is a rare accent: the snackbar's action on board, the selected late toggle, the threshold chip. Never use it, or any colour, to grade a teacher.

### Subjects

- `subject` names the subject: `ar` for Arabic, `fr` for French, `en` for English. It colours the class chip and the book tab, with `on-subject` text, and never shows a status.
- When the subject is French, the book page's border is `fr-edge` and its headers `fr-head`.

### The book page

- The texts book (دفتر النصوص) is drawn the way it looks on paper, column for column (PRD §3.8). The book page is `sheet` with a 1.5px `book-edge` border, `grid` rules, and the `dots` ruling under each 28px line.
- Every other day is shaded `alt-day`, as teachers shade them by hand. The subject tab sits on the binding side.
- Column headers are in `book-head` (Aref Ruqaa) in `head-ink`. Entries are in `entry`, dates in `date`.

### Type

- **Aref Ruqaa** is the hand on the blackboard: use it only for display (`brand`, `day`, `web-heading`, `subject-tab`, `book-head`). Never set a sentence in it.
- **Noto Naskh Arabic** sets the Arabic interface. Its base is `body`, 15px with a line height of 1.6.
- **Noto Sans** sets French and English (`body-latin`, 14.5px) and every figure in a table or grid, with tabular figures.
- **Documents** embed Amiri and Noto Naskh Arabic (the `print` family). Their DOCX files name the Microsoft fonts that official documents use (PRD §3.8).
- All four faces are open (SIL OFL). The apps must ship the font files, since they work offline.

### Layout

- **Phone:** 360×800 first (PRD §6.8).
  - The top bar is `bar` (56px), with a 48px icon button at each side.
  - The bottom navigation is `nav` (64px), with three tabs: «اليوم», «الأقسام», «الوثائق».
  - Lists have `space-12` between cards and at their sides.
  - Card padding is `space-12` by `space-14`. Sheets and forms have `space-16` at their sides.
- **Web:** 1280×800.
  - A `board` sidebar of 232px, with the name in `brand` at 40px and links in `chalk-82`; the current link is on `chalk-14`.
  - A main area with `space-20` at its sides.
  - A `sheet` detail pane of 340px, or 300px beside a map.
- **Touch targets** are at least `target` (48px). The canvas draws chips and check rows at 44px: see Accessibility.

### Borders, radii and shadows

- **Borders:**
  - Hairlines are 1px `line`.
  - Control borders are 1.5px `rule`.
  - The book page's border is 1.5px `book-edge`.
  - Dashed borders mean "not settled": a proposal (`pencil-edge`), a notice (`notice-edge`), a removed node.
- **Radii** run from `radius-tag` (6px) to `radius-card` (18px). Chips are fully round (`radius-chip`).
- **Shadows** are few: `shadow-focus-card` on the session in focus, `shadow-snack`, `shadow-sheet`, and `shadow-tooltip` on web charts. Everything else is flat.

### States and focus

- **Selected:** `board` fill, `chalk` text. This holds for chips, segments, the absent toggle and radio cards, which get a board border and an inset ring.
- **Late:** `hi` fill and a `late-edge` border, together with the word «تأخر».
- **Focus:** the canvas draws none. Use a 2px solid `focus` ring with a 2px gap, or `focus-on-board` on board. This is an addition to the canvas, for the web app and for keyboards (PRD §6.8).
- **Motion:** the canvas defines none. Keep transitions short and functional, and none that delays a confirmation.

## Iconography

- Icons are line drawings on a 24-unit grid. They are 22px (`icon`) or 18px (`icon-small`), with a 1.8 stroke, round caps and joins, and no fill, in `currentColor`.
- Directional icons, such as back, next and skip, mirror in right-to-left layouts with the class `flip`. Ticks, clocks and the printer never mirror.
- The confirmed tick is a filled `board` circle with a `chalk` check. A session awaiting confirmation is a dashed circle.
- The canvas draws each icon inline in its screens. They have not been collected into a set yet, and no icon font is used.
- No emoji, and no icon without a label, except the 48px icon buttons, which carry an `aria-label`.

## Logo

The mark is «م», drawn in chalk the way a teacher writes Ruqaa on the board, on a `board` tile. The wordmark is «منهاجنا» in Aref Ruqaa. The **Logo** section gives the lockups, sizes and the name rules. The project's own builds use it; the Ministry's deployment uses the Ministry's own name and icon (PRD §1.9, §5.2).
