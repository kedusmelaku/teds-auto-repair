# Lupita's Bakery: spec site

An unlisted one-page spec site for Lupita's Bakery (220 McHenry Rd, Wheeling, IL 60090, (847) 419-0970). Plain HTML, CSS and a little vanilla JS: no framework and no build step.

- `index.html`: the page (English and Spanish side by side, switched with `lang`)
- `styles.css`: the "Papel de envoltura" wrapping-paper look (see `DESIGN.md`)
- `main.js`: language toggle, live open/closed status (Chicago time), and the call bar
- `robots.txt` + `<meta name="robots" content="noindex, nofollow">`: keep it out of search
- `images/`: sample food photos as compressed WebP (see `CREDITS.md`), plus the logo, `logo.png`
- `fonts/`: self-hosted Bagel Fat One and Nunito Sans (both SIL Open Font License)

## Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. `?lang=es` opens in Spanish; without it, the page follows the saved choice, then the browser language.

## Logo

`images/logo.png` (600×600, transparent corners) was cropped from the logo screenshot of their Instagram profile picture. For launch, ask the owner for the original artwork: a vector or high-resolution file will print and scale more cleanly than a screenshot.

## Keeping it evergreen

The copy avoids anything time-limited, with one exception: the pink tag under the hero features "New at Lupita's: Blueberry Lemon Loaf". Change or remove it (in `index.html`, the `<aside class="weekend">` block) once the loaf is no longer new. Everything else points to Instagram and TikTok for what is new.

## Placeholders to fill (owner to confirm)

Every unconfirmed item is a pink chip with a red "TBD" (Spanish: "PENDIENTE") label and a dotted underline. To find them in the code, search `class="ph"`.

1. Holiday schedule (hours ticket). The "Open now" pill does not know about holidays yet.
2. Other pan dulce, by name
3. Other tortas besides torta de milanesa
4. Other loaf cake flavors besides blueberry lemon
5. Buñuelos description
6. Cake sizes and flavors (menu card)
7. Rosca de Reyes dates (an every-year range such as "late December to early February" keeps the page evergreen)
8. Rosca de Reyes sizes, and whether to order ahead
9. Other seasonal items, and when
10. Big orders: how many days ahead, and whether ordering ahead is required
11. Big orders: cake sizes and flavors
12. Big orders: other ways to order (in person, Instagram messages?)
13. Owner's name and story: who started Lupita's, when, and why (owner writes or approves)

## Photos to replace

Every food photo is a stand-in tagged "Sample photo" on the page (see `CREDITS.md`). Five came from food blogs with unknown licenses, and the storefront is a Google Street View screenshot, so those six must be replaced before the site goes public.

| Slot | Ratio / size | Current | What to shoot |
|---|---|---|---|
| Pan dulce | 3:2, 1200×800 | Wikimedia sample | Their conchas and pan dulce |
| Bolillos | 1:1, 960×960 | Wikimedia sample | Their bolillos (cheese and jalapeño, chorizo and cheese) |
| Cakes | 1:1, 960×960 | Wikimedia sample | Their tres leches or a party cake |
| Churros | 1:1, 960×960 | Blog photo, replace | Their churros, filled and plain |
| Tortas | 1:1, 960×960 | Blog photo, replace | Their torta de milanesa, cut in half |
| Loaf cakes | 1:1, 960×960 | Blog photo, replace | Their blueberry lemon loaf, sliced |
| Buñuelos | 1:1, 960×960 | Blog photo, replace | Their buñuelos, stacked |
| Rosca de Reyes | 3:2, 1200×800 | Blog photo, replace | Their Rosca de Reyes, whole |
| The bakery | 3:2, 1200×800 | Street View screenshot, replace | The storefront from McHenry Rd, sign visible |

To swap a photo, replace the file in `images/` (same name), then update its `width`/`height` and both alt texts in `index.html`.

**Still unknown, not shown on the page:** prices (none on purpose).

**Before launch:**
- Remove the robots `noindex` meta tag and replace robots.txt.
- Add `url`, `geo` (latitude/longitude), `logo` and `image` to the JSON-LD.
- Remove the "Preview site" line in the footer.
- Check the "New at Lupita's" tag is still current.
- Replace the five blog photos and the Street View storefront (see `CREDITS.md`).

## Spanish for a native speaker to check

The Spanish uses usted throughout. Please have a native speaker confirm:

- "Nuevo en Lupita’s: panqué de mora azul y limón" and "Pídalo en el mostrador"
- "Lo que horneamos" for "What we bake"
- "Panqués ... como el de mora azul y limón" for the loaf cakes ("mora azul" vs "arándano")
- "Vea lo que sale del horno en Instagram y TikTok"
- "Pedidos grandes y pasteles para fiesta", and "Para pedidos grandes y pasteles para fiesta, llámenos"
- "Con cuánta anticipación" and "Otras formas de pedir" as labels
- "Llame al (847) 419-0970" on the call buttons, "Llame para encargar" in the order section
- Times written "de 5 a.m. a 10 p.m."
- "Sitio de muestra. Contenido pendiente de aprobación." in the footer
