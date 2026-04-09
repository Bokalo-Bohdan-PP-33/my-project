import { describe, it, expect, vi } from "vitest";
import { RiskManager } from "./riskLogic";

describe("Financial Risk Logic Tests", () => {
  // Тест 1: Проста перевірка розрахунку (Assertion)
  it("має правильно розраховувати бал (5 * 4 = 20)", () => {
    expect(RiskManager.calculateScore(5, 4)).toBe(20);
  });

  // Тест 2: Перевірка граничного значення для рівня High
  it('має повертати рівень "High" для бала 15', () => {
    expect(RiskManager.getLevel(15)).toBe("High");
  });

  // Тест 3: Перевірка рівня Critical
  it('має повертати рівень "Critical" для бала 30', () => {
    expect(RiskManager.getLevel(30)).toBe("Critical");
  });

  // Тест 4: Перевірка валідації (коректне значення)
  it("має підтверджувати, що 7 — це валідне значення", () => {
    expect(RiskManager.isValid(7)).toBe(true);
  });

  // Тест 5: Перевірка валідації (некоректне значення)
  it("має відхиляти значення 15 як невалідне", () => {
    expect(RiskManager.isValid(15)).toBe(false);
  });

  // Тест 6: Перевірка обробки помилок (Exception Assertion)
  it("має викидати помилку при від’ємних вхідних даних", () => {
    expect(() => RiskManager.calculateScore(-1, 5)).toThrow(
      "Значення не можуть бути від’ємними",
    );
  });

  // Тест 7: ПРАКТИКА З MOCK-ОБ’ЄКТОМ (Вимога Кроку 2)
  it("має викликати зовнішню функцію логування (Mock)", () => {
    // Створюємо "фейковий" логер (Mock)
    const mockLogger = vi.fn();

    RiskManager.logRisk("Тест ризику виконано", mockLogger);

    // Перевіряємо, чи був викликаний наш мок
    expect(mockLogger).toHaveBeenCalledWith("Тест ризику виконано");
  });
});
