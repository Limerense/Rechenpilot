export type VatMode = "netToGross" | "grossToNet";

export type GradeEntry = {
  grade: number;
  weight?: number;
};

const locale = "de-DE";

export function parseLocalizedNumber(value: string) {
  const trimmed = value.trim().replace(/\s+/g, "");

  if (!trimmed) {
    return null;
  }

  let normalized = trimmed;
  const lastComma = normalized.lastIndexOf(",");
  const lastDot = normalized.lastIndexOf(".");

  if (lastComma > -1 && lastDot > -1) {
    if (lastComma > lastDot) {
      normalized = normalized.replace(/\./g, "").replace(",", ".");
    } else {
      normalized = normalized.replace(/,/g, "");
    }
  } else if (lastComma > -1) {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else {
    normalized = normalized.replace(/,/g, "");
  }

  if (!/^[-+]?\d*\.?\d+$/.test(normalized)) {
    return null;
  }

  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

export function roundNumber(value: number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(value);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatMonthDuration(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "Monat" : "Monate"}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "Jahr" : "Jahre"}`;
  }

  return `${years} ${years === 1 ? "Jahr" : "Jahre"} und ${months} ${
    months === 1 ? "Monat" : "Monate"
  }`;
}

export function calculatePercentage(baseValue: number, percentageRate: number) {
  const percentageValue = roundNumber((baseValue * percentageRate) / 100);

  return {
    percentageValue,
    formula: `${formatNumber(baseValue)} x ${formatNumber(
      percentageRate,
    )} / 100 = ${formatNumber(percentageValue)}`,
  };
}

export function calculateDiscount(originalPrice: number, discountRate: number) {
  const discountAmount = roundNumber((originalPrice * discountRate) / 100);
  const finalPrice = roundNumber(originalPrice - discountAmount);

  return {
    discountAmount,
    finalPrice,
    formula: `${formatCurrency(originalPrice)} - ${formatCurrency(
      discountAmount,
    )} = ${formatCurrency(finalPrice)}`,
  };
}

export function calculateVat(amount: number, vatRate: number, mode: VatMode) {
  if (mode === "netToGross") {
    const taxAmount = roundNumber((amount * vatRate) / 100);
    const grossAmount = roundNumber(amount + taxAmount);

    return {
      netAmount: roundNumber(amount),
      taxAmount,
      grossAmount,
    };
  }

  const netAmount = roundNumber(amount / (1 + vatRate / 100));
  const taxAmount = roundNumber(amount - netAmount);

  return {
    netAmount,
    taxAmount,
    grossAmount: roundNumber(amount),
  };
}

export function calculateHourlyWage(
  monthlySalary: number,
  weeklyHours: number,
) {
  const monthlyHours = roundNumber(weeklyHours * 4.33, 2);
  const hourlyWage = roundNumber(monthlySalary / monthlyHours, 2);

  return {
    monthlyHours,
    hourlyWage,
  };
}

export function calculateWeightedGrade(entries: GradeEntry[]) {
  const normalizedEntries = entries
    .map((entry) => ({
      grade: entry.grade,
      weight: entry.weight && entry.weight > 0 ? entry.weight : 1,
    }))
    .filter((entry) => entry.grade > 0 && entry.weight > 0);

  if (normalizedEntries.length === 0) {
    return null;
  }

  const totalWeight = normalizedEntries.reduce(
    (sum, entry) => sum + entry.weight,
    0,
  );
  const weightedSum = normalizedEntries.reduce(
    (sum, entry) => sum + entry.grade * entry.weight,
    0,
  );
  const average = roundNumber(weightedSum / totalWeight, 2);

  return {
    average,
    totalWeight: roundNumber(totalWeight, 2),
    weightedSum: roundNumber(weightedSum, 2),
    count: normalizedEntries.length,
  };
}

export function calculateSavingsGoal(goal: number, monthlyRate: number) {
  const exactMonths = goal / monthlyRate;
  const roundedMonths = Math.ceil(exactMonths);
  const fullMonths = Math.floor(exactMonths);
  const remainingAmount = roundNumber(goal - fullMonths * monthlyRate);

  return {
    exactMonths: roundNumber(exactMonths, 1),
    roundedMonths,
    fullMonths,
    remainingAmount: remainingAmount < 0.01 ? 0 : remainingAmount,
    durationLabel: formatMonthDuration(roundedMonths),
  };
}
