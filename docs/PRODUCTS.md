# Product catalogue maintenance

The 12 original products retain their order, images and enquiry flow. Five additional products are appended in `src/data.ts`. Every card and detail dialog has a WhatsApp order link. `src/site.ts` owns the international number (`918054916000`) and URL-encoded message builder.

Add products in `src/data.ts` with a unique ID, name, category, description and detail. Optional `image`, `features`, `specifications` and `source` fields support richer entries. Without an explicit image, the path is `/images/<id>.webp`. Counts, filters and the enquiry selector use this data automatically. Only add verified specifications; never infer dimensions, coverage, certifications or warranties from photos.

## Added image sources

Photos are locally hosted, proportionally resized without upscaling and compressed to WebP at quality 85. Supplier images illustrate the product type; final supplied variants are confirmed at quotation. Existing generated images remain unchanged.

- Thunderstroke Protect 60: [Remedies manufacturer listing](https://www.remediesearthing.in/lightning-arrester.html), image `2021/4/HE/ER/CK/2305822/thunderstroke-protector-60-ese-lightning-arrester--500x500.jpg` on `5.imimg.com/data5/SELLER/Default/`.
- Lightning Arrester: same Remedies listing, image `2024/12/474442205/DT/KU/BK/2305822/conventional-lightning-arrester-copper-1000x1000.jpg`.
- Copper Bonded Lightning Arrester: [Vasundhara listing](https://www.vasundharaearthing.in/copper-lightning-arrester.html), image `2026/6/619910426/DM/VL/CG/215574696/copper-bonded-lightning-arrester-500x500.jpg`.
- Solid Copper Earth Rod: [Jani Metals listing](https://www.janimetals.in/earthing-rod.html), image `2022/8/TZ/IS/SM/158257353/solid-copper-earthing-rod-500x500.jpg`.
- Poly Plastic Earthing Pit Cover: [Avon listing](https://www.avonearthings.com/earthing-equipment.html), image `2025/7/531048857/DQ/TV/HG/114279613/poly-plastic-earthing-pit-cover-500x500.jpg`.

Remedies model details are paraphrased from its manufacturer listing, linked in the dialog. Other new entries use the product information supplied in the brief; third-party dimensions or performance claims have not been transferred to them.

## Verification

`npm run build`, `npm run lint`, and `npm test`. Product tests open every card's exact details and click both its card and modal order links at mobile, tablet and desktop widths. WhatsApp navigation is intercepted in tests to verify the destination and message without contacting WhatsApp or sending an order. The existing suite checks layouts from 320–1920 px, images, navigation, enquiry/download, modal focus and accessibility.
