import { test, expect } from "@playwright/test";

test("homepage shell renders primary CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Empieza" })).toBeVisible();
});
