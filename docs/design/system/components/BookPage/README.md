# BookPage

The texts book (دفتر النصوص) on screen, drawn column for column from the paper book.

- **Columns:** date and slot; subject or work; signature.
- **Lines:** a 28px line on `dots`, with every other day on `alt-day`. The subject tab and page number sit on the binding side.
- **Provide** the page's entries in order. Each entry has its date (`date`) and slot (`entry-time`), its lines (`entry`, with `seq` for a learning sequence), and its state in the signature column:
  - a filled `board` tick once confirmed;
  - a dashed circle while awaiting confirmation, with the whole row in `pencil` (`pr`).
- **End** with a blank area, «يتبع في الصفحة 10» and the pager.
- **French:** add `fr` to the app; the border turns `fr-edge` and the headers `fr-head`.
- **Canvas:** P09, P10, P10-4m1, P10-ramadan, P90, Entry, Journal, Journal-signed, Print, Print-strip, D-Record. PRD [§3.8](https://github.com/djazairdev/minhajna/blob/main/docs/prd/PRD.md#38-the-documents).
