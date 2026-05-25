import { test, expect } from "@playwright/test";

test("homepage shell renders primary CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("DIGIT TRADING")).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar a DIGIT" }).first()).toBeVisible();
});

test("homepage menu opens existing navigation links", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Abrir navegacion").click();

  await expect(page.getByRole("link", { name: "Metodo DIGIT" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Plataforma" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Membresia" })).toBeVisible();
});

test("homepage bottom navigation routes to academy", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Academy" }).click();

  await expect(page).toHaveURL(/\/academia$/);
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
        name: /Conviertete en TARDER ELITE/
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Entrar a DIGIT" }).first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /Alcanza la rentabilidad conoce la arquitectura DIGIT/
      })
    ).toBeVisible();

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
