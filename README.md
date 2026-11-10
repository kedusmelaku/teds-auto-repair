# Ted's Auto Repair (spec site)

An unlisted one-page spec website for Ted's Auto Repair, 400 W Northwest Hwy, Unit D, Arlington Heights, IL 60004. It is hosted temporarily on GitHub Pages from `main`.

- Plain static HTML, CSS and a few lines of vanilla JS. No framework, no build step.
- `noindex, nofollow` meta tag and a `robots.txt` that disallows everything.
- `AutoRepair` JSON-LD with only verified facts (name, address, phone, map link).

## Files
| Path | What it is |
|---|---|
| `index.html` | The page |
| `styles.css` | All styles (tokens at the top) |
| `main.js` | Shows the phone call dock once the hero Call button scrolls away |
| `fonts/` | Self-hosted Jost and Public Sans (see CREDITS.md) |
| `favicon.svg` | Art-glass favicon |
| `PRODUCT.md`, `DESIGN.md` | Product facts and design system |

## Run locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Still to fill (TBD)
- Hours
- Confirm (847) 253-2886 is the only number to list (an older directory shows another number, not shown on the site)
- Service list, makes and models, body work, towing, warranty, payment methods
- Appointments, walk-ins, or both
- Ted's story and the year the shop opened
- Photos: storefront, shop interior, Ted
