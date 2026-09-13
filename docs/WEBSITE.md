# TerraVolt website

An original industrial earthing website built with React, TypeScript and Vite. TerraVolt is a placeholder brand; replace it with the verified company identity before publishing.

## Run locally

```sh
npm install
npm run dev
npm run build
npm run preview
```

On Windows PowerShell with restricted execution policy, use `npm.cmd` instead of `npm`. Node 22.12+ or a current supported Node release is required by Vite. This project was built with Node 24.

## Project map

- `src/App.tsx`: section composition and selected-product enquiry handoff.
- `src/components/Layout.tsx`: sticky desktop/mobile navigation, original SVG brand mark, footer and social profiles.
- `src/components/Sections.tsx`: hero, trust features, earthing benefits, industries, solution accordions, quality section and CTA.
- `src/components/Products.tsx`: category filters, reusable product cards and accessible native product dialog.
- `src/components/Contact.tsx`: validated, browser-only enquiry preparation and text download.
- `src/components/Icon.tsx`: lightweight original line icons; no icon runtime dependency.
- `src/data.ts`: all 12 product entries, descriptions, material summaries and image identifiers.
- `src/site.ts`: replaceable contact information and social URLs.
- `src/styles.css`: design tokens, responsive layouts, focus states and reduced-motion support.
- `public/images/`: local optimized WebP hero and illustrative product imagery.
- `public/fonts/`: local Manrope variable font and its license.
- `vite.config.ts`: Vite configuration; production SEO metadata is maintained in `index.html`.
- `tests/site.spec.ts`: browser checks, assets, anchor destinations, overflow, interactions and WCAG scans.

This is a single-page website using semantic section anchors (`#home`, `#about`, `#products`, `#industries`, `#solutions`, `#contact`). There are no database, authentication or certificate services in this new project. The original Vite scaffold and README are retained in the baseline commit.

## Before publishing

1. Replace the TerraVolt placeholder brand in page copy, title, metadata, favicon and download content. It is not a claim of an existing registered business.
2. Enter verified contact values and corresponding `tel:`, `mailto:`, WhatsApp and maps URLs in `src/site.ts`. Add actual LinkedIn/Instagram URLs there. Unconfigured social profiles are explicitly unavailable, not fake external links.
3. Replace the visible demo-contact notice and footer launch notice once details are configured.
4. The contact form deliberately does not transmit information. It validates required fields, prepares an enquiry and downloads a text file. Connect a real server-side form endpoint, configure delivery, add an appropriate privacy notice and test delivery before changing the UI to say “Send”. Never add private API credentials to frontend code.
5. Verify product specifications, available materials and final product photographs. Current AI-generated images are illustrative; product dialogs state that explicitly. No certification, fixed resistance value, test result, customer count or warranty has been invented.
6. Serve at `https://www.earthingtruss.com/`. Canonical, social metadata and Organization/WebSite/WebPage schema are in `index.html`; no `SITE_URL` variable is needed. Vite copies `public/sitemap.xml` and `public/robots.txt` to the build root. The sitemap contains only `/`: navigation sections and product dialogs are not separate pages. After deployment, verify both SEO files return HTTP 200 and submit the sitemap in Search Console. Confirm HTTP and www redirects in the hosting domain settings.
7. Add Organization/LocalBusiness JSON-LD only after the real legal name, public URL, address and contact information are confirmed. No fabricated location or business identifiers are published.

## Checks

```sh
npm run build       # TypeScript compilation and production bundling
npm run lint        # Oxlint
npm test            # Playwright against the production build
npm run format     # Prettier
```

Run the build before browser tests. Tests use installed Google Chrome and a temporary preview server on port 4175. They cover 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. Install Google Chrome if absent or change Playwright's browser channel. Full-page screenshots are saved in ignored `.responsive-test/`; reports and generated build output are not committed.

## Performance and accessibility

- Runtime dependencies are React and React DOM only. No animation, routing, icon or UI library is required.
- Local variable WOFF2 font uses `font-display: swap`; no third-party font request is made by the website.
- Hero uses an eager, high-priority image with a smaller mobile source. Product and supporting imagery is lazy loaded with intrinsic dimensions.
- Native dialog handles focus containment, Escape and return focus. Enquiry handoff focuses the contact name field.
- Mobile navigation supports Escape, outside clicks, focus departure and viewport resizing.
- Visible keyboard focus, skip link, associated form labels, validation and polite result announcements are provided.
- Reduced motion disables transitions and smooth scrolling. Mobile inputs are 16px to avoid automatic iOS focus zoom.
- Browser automation checks for page and element overflow rather than concealing overflow globally.

## Recovery

Git was initialized in the previously empty workspace. The first commit (`97516b5`) captures the unmodified React/TypeScript/Vite scaffold. Subsequent website changes are reviewable in Git. No reset, clean, unrelated directory removal or environment-secret changes were performed.
