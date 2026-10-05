# Charts and maps

Charts and maps appear only where the PRD calls for them (PRD [§5.2](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#52-architecture)).

## Charts

- **On the web,** charts are drawn with Apache ECharts:
  - how far classes got;
  - the totals above the school (PRD §5.10);
  - each exam's threshold (PRD [§7.10](https://github.com/founderscoffee/minhajna/blob/main/docs/prd/PRD.md#710-exam-thresholds)).
- **On Android,** the few charts are drawn with react-native-svg, with labels as native text so that Arabic is shaped.
- **Mirror the axes** in right-to-left layouts, since ECharts has none.
- **Put a table of the same figures beside every chart,** since ECharts has no keyboard navigation. On the canvas the table opens from a «جدول» segment or sits under the chart.
- **Charts of a school's own records are drawn on the device.** Only reports that carry totals alone, such as a published threshold, are rendered on the server, as SVG for printing.
- **Never chart a teacher against other teachers.** No ranking, and no colour that grades (PRD §2.6).

### Marks on charts

| Mark | Tokens | Means |
|---|---|---|
| Solid 2.5px line | `board` | The latest figures, such as on the day the figures are read |
| Dashed 2px line | `pencil` | An earlier snapshot, such as the end of term 2 |
| Dotted 2px line | `hatch` | An older snapshot, such as the end of term 1 |
| 3px vertical line and chip | `threshold`, chip on `hi` with a `threshold` border | The exam's threshold: solid once published, dashed until then, always with its value in words |
| Hatched bar or cell | `hatch` stripes on `hatch-ground`, dashed `book-edge` border | A figure held back below the minimum group size (PRD §5.10) |
| Bands | `hatch-ground`, `band-1` (text `ok-ink`), `band-2` (text `board`) | Ranges of a total, such as the share of sessions confirmed. Always labelled |
| Track | `band-2` on `track` | Progress through a plan. The figure is also written |

- Tooltips are `sheet` with a 1px `line` border, radius `radius-class` and `shadow-tooltip`.
- The hovered column is `hover`.
- Legends use the `badge` style, in `ink2`.

## Maps

- **Four web screens show who holds what as a map, drawn with React Flow:**
  - the pack editor's release map (PRD §4.3);
  - the school key and its recovery (PRD §6.5);
  - what enters and leaves the school's space (PRD §5.9, §7.5);
  - the operators' view of the server package.
- **The Android app has no maps.**
- **Maps are for reading.** Keys, devices and flows change only through buttons, never by dragging a link.

### Map styles

- **The ground** is `sheet` dotted with `map-dots` (1.1px dots every 18px), in a frame with a 1px `line` border and radius `radius-button`.
- **Nodes** have a 1.5px `rule` border, are `sheet`, have radius `radius-badge` and `shadow-node`, and use 12.5px text. Variants:
  - a selected node gets a `board` border and a 1.5px `board` ring;
  - a node that holds a key is `board` with `chalk` text, and its selected ring is `hi`;
  - a node with no key is dashed on `well`, with `ink2` text;
  - a removed node is dashed on `node-gone`, with `pencil` text.
- **Groups** of nodes sit on `map-group` with a `map-dots` border.
- **Links** are 2px `map-edge`, dashed 6 6 when planned. A selected link is 2.5px `board`. A refused link carries a `blocked` cross.
- **Link labels** are 12px on `sheet`, with a 1px `line` border.
- **Zoom controls** are 32px buttons on `sheet`, with `shadow-controls`.
- **The attribution** is 10px `map-label` on `map-label-ground`. At 3.5:1 it is under the 4.5:1 that text needs: see Accessibility.
