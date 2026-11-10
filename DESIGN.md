# Design: Prairie (Roman brick, leaded glass, a car in the bay)

The page is built like a Prairie School building on a Midwestern commercial strip: long horizontal lines, Roman brick, leaded art glass. The car lives inside the architecture, drawn in the same thin line.

## Color tokens (`styles.css :root`)
| Token | Value | Role |
|---|---|---|
| `--umber` | #3E2C21 | Hero brick field, umber button |
| `--umber-deep` | #2F2119 | Footer, call dock |
| `--umber-lead` | #1F1610 | Lead lines in the art-glass band |
| `--on-umber` / `--on-umber-soft` | #F2EADF / #CDBFAE | Text on umber (11.1:1 / 7.4:1) |
| `--stone` | #E1E3DA | Page ground: gray-green plaster, not cream |
| `--stone-deep` | #D0D4C7 | Photo slots |
| `--ink` / `--ink-soft` | #2A211B / #594A3F | Text on stone |
| `--rule` | #B0B5A6 | Hairlines |
| `--sage` / `--on-sage` | #4F5E3A / #EEF0E6 | Call-to-schedule field |
| `--gold` | #D3A043 | Call buttons, wordmark, stars, focus ring on umber |
| `--glass-ochre` `--glass-sage` `--glass-rust` | #C9963A #7C8C5A #A3522F | Art-glass panes only |
| `--rust-text` | #803D1F | "TBD" labels |

## Type
- Display: **Jost** (variable), weight 500 to 600. Headings, wordmark, buttons, the rating score.
- Body: **Public Sans** (variable) at 18px / 1.6.
- Both self-hosted from `fonts/` (SIL Open Font License, see CREDITS.md).

## Components
- **Brick field**: umber with an SVG Roman-brick tile (raked horizontal joints, faint offset head joints). Hero only.
- **Top bar**: gold Jost wordmark; phone link from 760px up.
- **Rating plaque**: link to Google reviews framed like a Prairie window (outer gold line, inner trim line), score, 4 full stars and one at 80%, "85 reviews on Google". The rating appears here and in the reviews button, nowhere else.
- **Garage-bay elevation**: inline SVG line drawing of a flat-roofed two-bay garage with clerestory glass and a sedan in profile. The bay door rolls up once on load (the page's one motion; skipped under reduced motion).
- **Art-glass band**: leaded grid with colored squares and wheel circles. Closes the hero and sits above the footer.
- **Section head**: Jost heading with a 2px rule running to the right edge of the screen.
- **Facts list**: uppercase Jost labels, hairline rows.
- **TBD placeholder** `.tbd`: rust square, "TBD" label. Variant: `tbd-strong` (hours). Placeholders are short labels only, never notes to the owner.
- **Photo slot** `.frame`: square on phones, 4:3 from 760px, with an inner trim line and "... here / TBD". Swap for `<img width height alt loading="lazy">` when photos arrive.
- **Buttons**: square corners, 54px tall. Gold (call), outlined (directions), umber (reviews), pale on sage (schedule).
- **Dock**: fixed umber bar on phones with Call and a labelled Map button. Hidden (and `inert`) while the hero Call button is visible; hidden on desktop.

## Rules
- Square corners everywhere; only the wheel circles are round.
- The name is the shop's, not a person's: copy speaks as "the shop" or "we", never about Ted as an individual.
- No em dashes, no quoted reviews, no prices, no unconfirmed claims. Unknowns stay visible TBDs.
- Avoid auto clichés: chrome, flames, racing stripes, carbon fiber, mechanic stock photos, blue tech gradients.
- Focus ring 3px: gold on umber, rust on stone, pale on sage.
