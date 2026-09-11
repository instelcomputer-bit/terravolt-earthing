import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const [hero, sheet] = process.argv.slice(2);
if (!hero || !sheet)
  throw new Error(
    "Usage: node scripts/optimize-images.mjs <hero.png> <catalogue.png>",
  );
await mkdir("public/images", { recursive: true });
await sharp(hero)
  .resize(1536)
  .webp({ quality: 82 })
  .toFile("public/images/hero.webp");
await sharp(hero)
  .resize(900)
  .webp({ quality: 78 })
  .toFile("public/images/hero-mobile.webp");
const { width, height } = await sharp(sheet).metadata();
const names = [
  "copper-rods",
  "gi-electrodes",
  "spike-rods",
  "rod-clamp",
  "copper-strip",
  "gi-strip",
  "earthing-clamps",
  "chemicals",
  "pit-chamber",
  "gi-clamps",
  "connectors",
  "accessories",
];
for (const [index, name] of names.entries()) {
  const x = index % 4,
    y = Math.floor(index / 4);
  const left = Math.round((x * width) / 4),
    top = Math.round((y * height) / 3);
  await sharp(sheet)
    .extract({
      left,
      top,
      width: Math.round(((x + 1) * width) / 4) - left,
      height: Math.round(((y + 1) * height) / 3) - top,
    })
    .webp({ quality: 85 })
    .toFile(`public/images/${name}.webp`);
}
console.log("Optimized hero and 12 catalogue images saved to public/images.");
