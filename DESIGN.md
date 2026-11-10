# Design: Papel de envoltura (bakery wrapping paper)

The page is Lupita's own wrapping paper and pastry-box kit, drawn in the same red pen as their logo (a smiling chef holding a birthday cake, red line art on a cream circle).

## Color tokens (`styles.css :root`)
| Token | Value | Role |
|---|---|---|
| `--cream` | #FBF3E4 | Page ground, sampled toward the logo's cream circle |
| `--white` | #FFFDF8 | Card fill |
| `--red` | #B03424 | Logo red: name, titles, outlines, Call buttons, top bar, order field (5.7:1 with cream either way) |
| `--red-deep` | #9E2B1D | Red text on pink (4.9:1) and small labels |
| `--red-press` | #7A2117 | The pressed edge under Call buttons, the order label's shadow |
| `--pink` | #F4C7CF | Concha pink: gift tag, seasonal panel, card offset shadows, doily scallops. Cocoa text only (9.4:1) |
| `--pink-lt` | #FBE3E7 | Placeholder chips, photo slots, open-now pill |
| `--cocoa` | #3B2620 | Text, footer |
| `--cocoa-soft` | #6B4A40 | Secondary text (7.1:1 on cream) |

## Type
- Display: **Bagel Fat One** (one weight), chunky and rounded. The name, section titles, product names, hours.
- Body: **Nunito Sans** (variable 200 to 1000) at 18px / 1.5. Labels are 900 weight, uppercase, light tracking, never below 14px.
- Both self-hosted from `fonts/` (SIL Open Font License).

## Components
- **Wrapping paper** `--tile`: a staggered line-art tile (concha, churro, bolillo, cake) in red at low opacity, 120px on phones and 160px from 40rem up. Always centered (`50% 0`) so it runs edge to edge and both sides of the screen end the same way. Stronger (`--tile-strong`) behind the hero, cream (`--tile-light`) on the red order field and the cocoa footer.
- **Corners**: kept tight, like cut card stock: `--r-card` 8px, `--r-btn` 6px, `--r-chip` 4px. Only true circles (logo, icons, dots) are round.
- **Card**: white fill, 2.5px red outline, `--r-card` corners, flat 7px pink offset shadow (the hero card).
- **Doily edge**: pink half-circle scallops under the hero and over the seasonal panel.
- **Gift tag** `.tag`: pink tag with a string hole for one featured item, currently "New at Lupita's: Blueberry Lemon Loaf. Ask for it at the counter." This is the one place time-limited copy is allowed: change or remove it when the item is no longer new. Swings once on load.
- **Ticket** `.ticket`: hours at display size, perforated rule, side notches, address and directions.
- **Cake box label** `.box`: white label with a dashed cut line, on the red wrapping paper.
- **Buttons**: 56px tall, `--r-btn` corners. Call is solid red with a darker pressed edge; secondary is white with a red outline.
- **Social buttons**: outlined cards with a round red icon, the label and the handle.
- **Placeholder** `.ph`: pink wash chip, dotted red underline, red "TBD" / "PENDIENTE" label.
- **Photo slot** `.photo__slot`: pink, dashed frame, a red-pen sketch of the item, a "Photo 1:1" tag in the corner and a description of the shot needed. Sample photos carry a "Sample photo" caption.
- **Logo frame** `.logo`: red-ringed circle holding `images/logo.png`; shows "Logo" if the file is missing.
- **Dock**: fixed red call bar on phones (Call + icon-only directions). Hidden while the hero buttons show, and on desktop, where the number sits in the top bar.

## Rules
- Focus ring: 3px, color per field through `--focus`.
- One motion: the gift tag swings once (skipped under reduced motion).
- Bilingual: every string is an EN/ES pair of `lang` spans; CSS hides the inactive language. Default comes from `?lang=`, then the saved choice, then the browser language.
- No em dashes, no prices, no unconfirmed claims. Time-limited wording ("new", "this weekend") lives only in the gift tag.
- Must never resemble the earlier "Rótulo" site: no painted sign blocks, marigold, teal or condensed type.
