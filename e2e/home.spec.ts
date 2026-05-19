import { test, expect } from "@playwright/test";

test("homepage shell renders primary CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Empieza" })).toBeVisible();
});

const responsiveViewports = [
  { width: 320, height: 800 },
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 }
];

for (const viewport of responsiveViewports) {
  test(`homepage stays stable at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /Construye una práctica con estructura\. Opera con criterio\./
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Empieza" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Aplicar a DIGIT" }).first()).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(() => {
      const { documentElement, body } = document;
      const scrollWidth = Math.max(
        documentElement.scrollWidth,
        body?.scrollWidth ?? 0
      );
      const clientWidth = documentElement.clientWidth;

      return scrollWidth > clientWidth;
    });

    expect(hasHorizontalOverflow).toBe(false);
  });
}
