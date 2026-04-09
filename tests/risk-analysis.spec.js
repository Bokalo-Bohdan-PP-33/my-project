// ПРАВИЛЬНО: Імпортуємо тільки test та expect
import { test, expect } from "@playwright/test";

// Використовуємо test.describe замість просто describe
test.describe("Критичний шлях: Аналіз фінансових ризиків", () => {
  test("Користувач успішно завантажує головну сторінку", async ({ page }) => {
    // Вкажи свою адресу (наприклад, http://localhost:5173)
    await page.goto("http://localhost:5173");

    const header = page.locator("h1");
    await expect(header).toBeVisible();
  });
});
