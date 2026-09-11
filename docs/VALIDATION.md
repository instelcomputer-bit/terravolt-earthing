# Validation — 11 September 2026

- `npm install`: completed; dependency audit reported zero vulnerabilities.
- `npm ls --depth=0`: dependency tree resolved with no missing packages.
- `npm run build`: passed TypeScript compilation and Vite production bundling.
- `npm run lint`: passed with no reported errors.
- `npm test`: **11 passed** in the final run (39.2 seconds).
- `git diff --check`: passed.
- Development server: started successfully and returned HTTP 200 at `http://127.0.0.1:5173/`.

Browser checks used installed Google Chrome against the production build. Widths: **320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px**.

At every width, checks verified page and element horizontal overflow, one H1, all section-anchor destinations, all content image loads, absence of browser console/page/HTTP errors and responsive navigation where applicable. Full-page screenshots were generated and desktop/mobile screenshots reviewed visually.

Interaction checks covered category filtering, product detail dialogs, Escape dismissal and returned focus, selected-product handoff and contact focus, required-field validation, enquiry preparation, downloaded text contents, invalidation of the prepared result when selecting another product, and the solution accordion.

Automated axe WCAG 2 A/AA and WCAG 2.1 AA scans reported no violations on the homepage or product dialog at 1440px and 320px. These automated checks are not a substitute for a full manual assistive-technology audit or real-device Safari/iOS testing.

Production bundle at verification: approximately **250.10 KB JavaScript / 77.46 KB gzip**, **28.48 KB CSS / 6.55 KB gzip**. The local font is approximately 25 KB; the desktop hero is 191 KB, mobile hero 71 KB, and catalogue images are approximately 5–23 KB each.

Launch items remain intentional: placeholder business identity/contact/social information, a confirmed production domain, verified product specifications and a live contact-form delivery service. See `WEBSITE.md` for configuration details. No message delivery, deployed site or business certification is claimed.
