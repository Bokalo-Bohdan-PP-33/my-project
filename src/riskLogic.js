export const RiskManager = {
  // Функція 1: Розрахунок бала ризику
  calculateScore: (prob, impact) => {
    if (prob < 0 || impact < 0)
      throw new Error("Значення не можуть бути від’ємними");
    return prob * impact;
  },

  // Функція 2: Визначення рівня ризику
  getLevel: (score) => {
    if (score >= 25) return "Critical";
    if (score >= 15) return "High";
    if (score >= 5) return "Medium";
    return "Low";
  },

  // Функція 3: Валідація вхідних даних (від 0 до 10)
  isValid: (value) => value >= 0 && value <= 10,

  // Функція 4: Логування (для практики з Mock-об’єктами)
  logRisk: (message, logger) => {
    logger(message);
    return true;
  },
};
