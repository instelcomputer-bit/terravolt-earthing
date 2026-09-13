import { test, expect } from "@playwright/test";

test("production SEO files and metadata are crawlable and consistent", async ({
  request,
  page,
}) => {
  const origin = "https://www.earthingtruss.com/";
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
  await expect(page.locator('meta[property="og:url"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    origin,
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  );
  await expect(page.locator("title")).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  expect(html).not.toContain("https://earthingtruss.com/");
  await expect(
    page.locator("main img:not([alt]), main img[alt='']"),
  ).toHaveCount(0);
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
  for (const entry of schema["@graph"]) {
    expect(entry["@id"]).toBe(`${origin}#${entry["@type"].toLowerCase()}`);
    for (const key of ["publisher", "isPartOf", "about"]) {
      if (entry[key]) {
        expect(
          schema["@graph"].some(
            (node: { "@id": string }) => node["@id"] === entry[key]["@id"],
          ),
        ).toBe(true);
      }
    }
  }
  expect(schema["@graph"][2].description).toBe(description);
  await expect(page.locator("h1")).toHaveCount(1);
});
