import { formatNumber, roundNumber } from "@/lib/calculators";

export const incomeTaxYears = [2024, 2025, 2026] as const;

export type IncomeTaxYear = (typeof incomeTaxYears)[number];

export type IncomeTaxBracket = {
  upperBound: number | null;
  rate: number;
};

export type IncomeTaxBreakdownRow = {
  from: number;
  to: number | null;
  rate: number;
  taxableAmount: number;
  taxAmount: number;
};

export type IncomeTaxResult = {
  year: IncomeTaxYear;
  taxableIncome: number;
  totalTax: number;
  marginalRate: number;
  effectiveRate: number;
  breakdown: IncomeTaxBreakdownRow[];
};

const incomeTaxTariffs: Record<IncomeTaxYear, readonly IncomeTaxBracket[]> = {
  2024: [
    { upperBound: 12816, rate: 0 },
    { upperBound: 20818, rate: 20 },
    { upperBound: 34513, rate: 30 },
    { upperBound: 66612, rate: 40 },
    { upperBound: 99266, rate: 48 },
    { upperBound: 1_000_000, rate: 50 },
    { upperBound: null, rate: 55 },
  ],
  2025: [
    { upperBound: 13308, rate: 0 },
    { upperBound: 21617, rate: 20 },
    { upperBound: 35836, rate: 30 },
    { upperBound: 69166, rate: 40 },
    { upperBound: 103072, rate: 48 },
    { upperBound: 1_000_000, rate: 50 },
    { upperBound: null, rate: 55 },
  ],
  2026: [
    { upperBound: 13539, rate: 0 },
    { upperBound: 21992, rate: 20 },
    { upperBound: 36458, rate: 30 },
    { upperBound: 70365, rate: 40 },
    { upperBound: 104859, rate: 48 },
    { upperBound: 1_000_000, rate: 50 },
    { upperBound: null, rate: 55 },
  ],
};

export function getIncomeTaxTariff(year: IncomeTaxYear) {
  return incomeTaxTariffs[year];
}

export function calculateIncomeTax(
  year: IncomeTaxYear,
  taxableIncome: number,
): IncomeTaxResult {
  const normalizedIncome = Math.max(0, taxableIncome);
  const tariff = getIncomeTaxTariff(year);
  const breakdown: IncomeTaxBreakdownRow[] = [];
  let lowerBound = 0;
  let totalTax = 0;
  let marginalRate = 0;

  for (const bracket of tariff) {
    const bracketCeiling = bracket.upperBound ?? normalizedIncome;
    const taxableAmount = Math.max(
      0,
      Math.min(normalizedIncome, bracketCeiling) - lowerBound,
    );
    const taxAmount = roundNumber((taxableAmount * bracket.rate) / 100);

    breakdown.push({
      from: lowerBound,
      to: bracket.upperBound,
      rate: bracket.rate,
      taxableAmount: roundNumber(taxableAmount),
      taxAmount,
    });

    if (taxableAmount > 0 || (normalizedIncome === 0 && bracket.rate === 0)) {
      marginalRate = bracket.rate;
    }

    totalTax += taxAmount;

    if (bracket.upperBound === null || normalizedIncome <= bracket.upperBound) {
      break;
    }

    lowerBound = bracket.upperBound;
  }

  const roundedIncome = roundNumber(normalizedIncome);
  const roundedTax = roundNumber(totalTax);

  return {
    year,
    taxableIncome: roundedIncome,
    totalTax: roundedTax,
    marginalRate,
    effectiveRate:
      roundedIncome > 0 ? roundNumber((roundedTax / roundedIncome) * 100, 2) : 0,
    breakdown,
  };
}

export function formatIncomeTaxRange(from: number, to: number | null) {
  if (from === 0 && to !== null) {
    return `bis ${formatNumber(to)} €`;
  }

  if (to === null) {
    return `über ${formatNumber(from)} €`;
  }

  return `über ${formatNumber(from)} € bis ${formatNumber(to)} €`;
}
