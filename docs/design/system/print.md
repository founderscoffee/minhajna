# Documents and print

Documents are the reason teachers keep the books: what a director checks each month and an inspector reads on a visit. They follow PRD [§3.8](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#38-the-documents) and the print row of [§6.8](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#68-non-functional-requirements).

## Rules

- **The paper layout is the specification.** The texts book, the journal, the roll-call book, the grade book, the distributions and the weekly timetable print the way directors and inspectors know them. The canvas's book page is drawn column for column from the paper book.
- **Every document prints blank,** with its headers filled in, as well as filled.
- **A4, at 100%, black and white.** Leave binding margins. Use no colour that carries meaning: on paper, a confirmed entry and a blank line differ by their text, never by a tint.
- **Fonts are embedded:** Amiri and Noto Naskh Arabic (the `print` family). DOCX files name the Microsoft fonts that official documents use.
- **Dates:** Gregorian dd/mm/yyyy with Western digits, the Algerian month names, and the school year as "2026-2027". The Hijri date is optional.
- **Mixed directions.** Arabic headers over a French or English body must render correctly. Documents come out in the subject's language.
- **No paper wasted.** Teachers pay about 5 DA a page. Offer subject order, one- or two-sided printing and a choice of pages.
- **Signatures.** Signature and visa boxes are always kept. The director's and the inspector's boxes always stay blank.
  - The teacher's drawn signature, in `signature` blue, goes only on entries the teacher confirmed.
  - It goes only into printouts and PDFs, never into DOCX.
- **No logo on documents.** A document is the teacher's and the school's record, not the app's.
- **Made on the device.** Each document is a web page with print styles, turned into a PDF by the device's own web engine (PRD [§5.2](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#52-architecture)).

## On screen

- The book page on screen is the same page as on paper, at phone width. It keeps the columns, the dotted ruling and the shaded alternate days.
- A print preview shows A4 thumbnails on `sheet`, with `shadow-thumb`. Their text lines are `a4-line`.
- The month grid preview uses `print-grid` for its rules, `print-weekend` for days with no school, and `print-before` for days before a pupil arrived.

## Open point

The canvas writes the dates on the book page as 2026/09/21, while PRD §3.8 asks for dd/mm/yyyy. One of the two changes once the paper book's own convention is checked.
