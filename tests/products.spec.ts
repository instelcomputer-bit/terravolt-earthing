import { test, expect } from "@playwright/test";
import { products } from "../src/data";

for (const width of [375, 768, 1440]) {
  test(`every product details and WhatsApp order at ${width}px`, async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    // Verify the outgoing navigation without sending messages or contacting WhatsApp.
    await context.route("https://wa.me/**", (route) =>
      route.fulfill({ body: "Order link verified" }),
    );
    await page.goto("/");
    await expect(page.locator(".product-card")).toHaveCount(17);
    for (const product of products) {
      const card = page.locator(".product-card").filter({
        has: page.getByRole("heading", { name: product.name, exact: true }),
      });
      const order = card.getByRole("link", {
        name: `Order Now: ${product.name}`,
        exact: true,
      });
      const expected = (await order.getAttribute("href"))!;
      const orderUrl = new URL(expected);
      expect(orderUrl.origin + orderUrl.pathname).toBe(
        "https://wa.me/918054916000",
      );
      const message = orderUrl.searchParams.get("text")!;
      for (const value of [
        product.name,
        product.id,
        product.category,
        product.description,
        product.detail,
      ])
        expect(message).toContain(value);
      expect(message).toContain(
        `ET / ${String(products.indexOf(product) + 1).padStart(2, "0")}`,
      );
      for (const spec of product.specifications ?? [])
        expect(message).toContain(`${spec.label}: ${spec.value}`);
      for (const feature of product.features ?? [])
        expect(message).toContain(feature);
      expect(message).toContain(
        new URL(product.image ?? `/images/${product.id}.webp`, page.url()).href,
      );
      if (product.source) expect(message).toContain(product.source);
      expect(message).toContain("Quantity:");
      expect(message).toContain("Delivery city / PIN code:");
      expect(message).not.toMatch(/undefined|null/);
      const popupPromise = page.waitForEvent("popup");
      await order.click();
      const popup = await popupPromise;
      await popup.waitForLoadState();
      expect(popup.url()).toBe(expected);
      await popup.close();
      const details = card.getByRole("button", {
        name: "Details",
        exact: true,
      });
      await details.click();
      const dialog = page.getByRole("dialog");
      await expect(
        dialog.getByRole("heading", { name: product.name, exact: true }),
      ).toBeVisible();
      await expect(dialog).toContainText(product.detail);
      for (const spec of product.specifications ?? [])
        await expect(dialog).toContainText(spec.value);
      const image = dialog.getByRole("img", {
        name: product.imageAlt ?? product.name,
        exact: true,
      });
      await expect(image).toHaveAttribute(
        "src",
        product.image ?? `/images/${product.id}.webp`,
      );
      await expect
        .poll(() =>
          image.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
        )
        .toBeTruthy();
      expect(
        await dialog.evaluate((el) => el.scrollWidth <= el.clientWidth),
      ).toBeTruthy();
      const modalOrder = dialog.getByRole("link", {
        name: `Order Now: ${product.name}`,
        exact: true,
      });
      await expect(modalOrder).toHaveAttribute("href", expected);
      const modalPopupPromise = page.waitForEvent("popup");
      await modalOrder.click();
      const modalPopup = await modalPopupPromise;
      await modalPopup.waitForLoadState();
      expect(modalPopup.url()).toBe(expected);
      await modalPopup.close();
      await page.keyboard.press("Escape");
      await expect(dialog).not.toBeVisible();
      await expect(details).toBeFocused();
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    await page
      .getByRole("button", { name: "Lightning protection", exact: true })
      .click();
    await expect(page.locator(".product-card")).toHaveCount(3);
  });
}
