import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Вказуємо папку, яку ми щойно створили
  use: {
    baseURL: "http://localhost:5173", // Твій локальний сервер
    screenshot: "on",
  },
});
