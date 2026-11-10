# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and minimal vanilla JS. No framework, no build step. Fonts self-hosted from `fonts/`.

## Users

Neighborhood regulars of a Mexican panadería in Wheeling, IL, many Spanish-speaking, plus English speakers. Almost all on phones, often deciding on the spot: call about a cake, check whether the bakery is open, get directions. A second audience for this spec version is the owner, who will see it on the builder's phone before a pitch.

## Product Purpose

A spec website for Lupita's Bakery (Instagram: Lupita's Bakery Inc.), which has no website today. Page goals, in order: 1) tap to call, always within reach on mobile; 2) hours and directions, open every day 5 AM to 10 PM; 3) what they bake, with photos; 4) a featured-item tag (currently the new blueberry lemon loaf) and seasonal Rosca de Reyes; 5) a neutral "For big orders and party cakes, call us" section whose details are placeholders; 6) Instagram and TikTok follow links.

## Positioning

The bakery at 220 McHenry Rd, Wheeling, IL 60090, phone (847) 419-0970, open every day 5:00 AM to 10:00 PM (holiday hours may differ). Instagram @lupitasbakeryinc, TikTok @lupitas.bakery.inc. Identity comes from their logo: a red line drawing of a smiling chef holding a birthday cake, on a cream circle; the chef's hat reads "Lupita's Bakery".

## Operating Context

Customers order tres leches and party cakes for holidays and birthdays (one ordered a half-sheet tres leches for Christmas). How orders are taken today (phone, Instagram DMs, in person) and how far ahead is unconfirmed, so the site only says "call us".

## Capabilities and Constraints

- What they sell (no prices): pan dulce including conchas; bolillos, including cheese and jalapeño, and chorizo and cheese; churros, plain or filled with strawberry or vanilla; tortas, including torta de milanesa; loaf cakes, including the new blueberry lemon loaf; buñuelos; tres leches and party cakes; hot champurrado Friday to Sunday (not currently shown on the page); Rosca de Reyes (seasonal).
- Fully bilingual, English default, obvious language toggle. Spanish written naturally (usted), with uncertain phrasing flagged for a native speaker.
- Unlisted spec site: `noindex, nofollow` meta and a robots.txt that disallows everything.
- Bakery JSON-LD with the verified details and social profiles, ready for launch.
- Undecided (must stay visible placeholders): prices, cake sizes and flavors, whether ordering ahead is required and how far ahead, how orders are taken, other seasonal items and dates (including Rosca dates), holiday schedule, owner's name and story, photos.

## Brand Commitments

- The logo is the identity: red line art on cream. The site is built from it (logo red, cream, concha pink, cocoa). Logo in `images/logo.png`, cropped from their Instagram profile picture.
- Must not resemble the builder's earlier bakery spec site ("Rótulo") (painted sign blocks, marigold, teal, condensed type).
- No em dashes in site copy.
- Avoid clichés: sombreros, cacti, papel picado overload. Avoid generic AI patterns: purple or blue gradients, "Welcome to our bakery" filler, fake testimonials, fake stats, emoji as decoration, stock hero images.

## Evidence on Hand

Verified business facts above (Google listing and Instagram, Nov 2026). Products come from their Instagram posts and Google reviews. Every food photo is a stand-in: three from Wikimedia Commons, five from food blogs (license unknown, replace before launch). The storefront is a Google Street View screenshot (replace before launch). No testimonials, no prices. Never copy reviews. Never make allergen, ingredient or "fresh daily" claims unless confirmed.

## Product Principles

1. Calling is the main action and is always within thumb reach.
2. Name, address and phone are unmistakable.
3. What they bake, shown with photos, comes before ordering details.
4. Nothing unconfirmed passes as fact: every unknown is a visible placeholder the owner approves.
5. Spanish and English are equals, not a translation bolted on.

## Accessibility & Inclusion

Semantic HTML, alt text for all photos (EN and ES), strong contrast for outdoor phone use, a keyboard-usable language toggle, correct `lang` attributes, reduced-motion support. Readers of all ages, so body type stays large and legible.
