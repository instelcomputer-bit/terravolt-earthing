import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`layout, navigation and assets at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    for (const section of [
      "home",
      "about",
      "products",
      "industries",
      "solutions",
      "contact",
    ]) {
      await page.locator(`#${section}`).scrollIntoViewIfNeeded();
      const overflow = await page.evaluate(() => {
        const width = document.documentElement.clientWidth;
        return {
          page: document.documentElement.scrollWidth > width,
          elements: [...document.querySelectorAll("main *, header *, footer *")]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && (r.right > width + 1 || r.left < -1);
            })
            .map((el) => el.className)
            .filter(Boolean),
        };
      });
      expect(overflow, section).toEqual({ page: false, elements: [] });
    }
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
          ),
        )
        .toBeTruthy();
    }
    for (const link of await page.locator('a[href^="#"]').all()) {
      const href = await link.getAttribute("href");
      expect(await page.locator(href!).count()).toBe(1);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    if (width < 1024) {
      const toggle = page.getByRole("button", { name: "Open navigation" });
      await toggle.click();
      await expect(page.getByRole("navigation")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(toggle).toBeFocused();
      await toggle.click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Products", exact: true })
        .click();
      await expect(page.getByRole("navigation")).toBeHidden();
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await mkdir(".responsive-test", { recursive: true });
    await page.screenshot({
      path: `.responsive-test/home-${width}.png`,
      fullPage: true,
    });
    expect(errors).toEqual([]);
  });
}

test("product filtering, modal focus, enquiry and download", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Strips & conductors", exact: true })
    .click();
  await expect(page.locator(".product-card")).toHaveCount(2);
  const details = page
    .getByRole("button", { name: "View Details", exact: true })
    .first();
  await details.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("dialog").getByRole("heading", { name: "Copper Strip" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(details).toBeFocused();
  await details.click();
  await page
    .getByRole("button", { name: "Enquire About This Product" })
    .click();
  await expect(page.getByLabel("I’m interested in")).toHaveValue(
    "Copper Strip",
  );
  await expect(page.getByLabel("Full name")).toBeFocused();
  await page.getByRole("button", { name: "Prepare Enquiry" }).click();
  await expect(page.getByText("Your enquiry is ready")).not.toBeVisible();
  await page.getByLabel("Full name").fill("Test Customer");
  await page.getByLabel("Email address").fill("customer@example.com");
  await page
    .getByLabel("Project requirements")
    .fill("Please quote copper strip for a commercial project.");
  await page.getByRole("button", { name: "Prepare Enquiry" }).click();
  await expect(page.getByText("Your enquiry is ready")).toBeVisible();
  const downloaded = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download enquiry" }).click();
  const download = await downloaded;
  expect(download.suggestedFilename()).toBe("terravolt-project-enquiry.txt");
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream!) chunks.push(chunk);
  const contents = Buffer.concat(chunks).toString();
  expect(contents).toContain("Interested in: Copper Strip");
  expect(contents).toContain("Test Customer");
  await page
    .getByRole("button", { name: "Enquire about GI Strip", exact: true })
    .click();
  await expect(page.getByLabel("I’m interested in")).toHaveValue("GI Strip");
  await expect(page.getByText("Your enquiry is ready")).not.toBeVisible();
  await page
    .getByRole("button", { name: "Solar Earthing", exact: false })
    .click();
  await expect(
    page.getByRole("region", { name: "Solar Earthing", exact: false }),
  ).toBeVisible();
});

test("WCAG accessibility on desktop and mobile, including dialog", async ({
  page,
}) => {
  for (const width of [1440, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page
      .getByRole("button", { name: "View Details", exact: true })
      .first()
      .click();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page.keyboard.press("Escape");
  }
});
