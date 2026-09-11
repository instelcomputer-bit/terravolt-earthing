# Visual assets

The supplied design direction was used for mood and color. No reference attachment was accessible in the tool context; no third-party logo, poster layout or copyrighted character was copied.

Both image assets were created with the built-in imagegen tool. `scripts/optimize-images.mjs` makes local WebP variants and extracts the 12 evenly arranged catalogue tiles using Sharp. Output files are in `public/images/`: `hero.webp`, `hero-mobile.webp`, `copper-rods.webp`, `gi-electrodes.webp`, `spike-rods.webp`, `rod-clamp.webp`, `copper-strip.webp`, `gi-strip.webp`, `earthing-clamps.webp`, `chemicals.webp`, `pit-chamber.webp`, `gi-clamps.webp`, `connectors.webp`, and `accessories.webp`.

The desktop hero is approximately 191 KB, the mobile variant 71 KB and each product image 5–23 KB. All references resolve inside the project. Original full-resolution generation outputs remain in the generator's storage; they are not required to build or deploy the site.

## Final hero prompt

Use case: product-mockup. Asset type: wide website hero photography, 1536x1024. Create an original premium industrial grounding equipment still life. Right two thirds: three tall copper bonded earthing rods with pointed ends and one brass grounding clamp, diagonally leaning from bottom left toward upper right, tactile brushed copper surfaces and warm amber rim lighting, arranged on a dark concrete block with a coiled copper strip at bottom. Background: realistic electrical substation steel gantries and power transformers at blue hour, atmospheric charcoal navy, restrained warm light, subtly out of focus. Left third dark negative space. Cinematic professional industrial product photograph, accurate straight metal rods, realistic materials, luxurious high contrast. No text, logos, watermarks, lightning bolts, or people. Not a poster. Landscape composition.

## Final catalogue prompt

Use case: product-mockup. Create a catalogue contact sheet with exactly 12 isolated industrial electrical earthing product photographs, equal tiles in 4 columns and 3 rows, 1536x1024 overall. Each tile background identical solid charcoal #181b1c, no borders, no text or labels. Each item is fully contained within its tile with generous 18% margin, centered, photographic brushed metal with warm copper highlights and neutral soft studio lighting. Row 1 left to right: bundle of 3 copper bonded grounding rods diagonally; two silver galvanized steel pipe earthing electrodes with terminal plates; three sharp copper spike rods; single copper grounding rod fitted with brass bolt clamp. Row 2: coiled flat copper strip; coiled flat silver galvanized steel strip; two bronze grounding saddle clamps; sealed plain dark grey paper sack of earthing compound with small heap of dark grey powder beside it. Row 3: green rectangular earth inspection pit chamber with green removable lid slightly ajar; two silver galvanized U bolt clamps; copper cable terminal lugs assorted; grounding accessories collection of brass coupler, bolts and copper braid. Technical product photography, realistic separate catalog products. No text, logos or watermark. Consistent scale and backgrounds. Clearly divide spatially into 4 columns and 3 rows without drawn dividers.

## Typography

Manrope is locally bundled from `@fontsource-variable/manrope`; its SIL Open Font License is included in `public/fonts/OFL.txt`. Only the Latin variable WOFF2 is loaded. The brand mark and line icons are original inline SVG code.
