import { test, expect } from "@playwright/test";

test("production SEO files and metadata are crawlable and consistent", async ({
  request,
  page,
}) => {
  const origin = "https://earthingtruss.com/";
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()["content-type"]).toContain("xml");
  const xml = await sitemap.text();
  expect(
    [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
  ).toEqual([origin]);
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect((await robots.text()).replace(/\r\n/g, "\n")).toBe(
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}sitemap.xml\n`,
  );
  const html = await (await request.get("/")).text();
  expect(html).toContain(`rel="canonical" href="${origin}"`);
  expect(html).not.toMatch(/noindex|localhost|vercel\.app/);
  await page.goto("/?utm_source=seo-check#products");
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    origin,
  );
  const title = await page.title();
  const description = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  expect(title).toContain("Earthing & Lightning Protection Products");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    title,
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    description!,
  );
  const schema = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent())!,
  );
  expect(schema["@context"]).toBe("https://schema.org");
  expect(
    schema["@graph"].map((entry: { "@type": string }) => entry["@type"]),
  ).toEqual(["Organization", "WebSite", "WebPage"]);
  for (const entry of schema["@graph"]) expect(entry.url).toBe(origin);
  expect(schema["@graph"][2].description).toBe(description);
  await expect(page.locator("h1")).toHaveCount(1);
});
