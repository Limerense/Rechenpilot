import { roundNumber } from "@/lib/calculators";

export const austrianVatRates = [20, 13, 10] as const;

export type AustrianVatRate = (typeof austrianVatRates)[number];
export type AustrianVatMode = "netToGross" | "grossToNet";

export const austrianVatRateDetails: Record<
  AustrianVatRate,
  { label: string; description: string }
> = {
  20: {
    label: "20 %",
    description:
      "Der Normalsteuersatz in Österreich. Er ist der Standardfall, wenn keine ermäßigte Regel greift.",
  },
  13: {
    label: "13 %",
    description:
      "Ein ermäßigter Satz für bestimmte Ausnahmen, zum Beispiel in einzelnen Kultur- oder Veranstaltungsbereichen.",
  },
  10: {
    label: "10 %",
    description:
      "Ein ermäßigter Satz für bestimmte Umsätze, etwa bei Wohnraummiete, Beherbergung oder bestimmten Lebensmitteln.",
  },
};

export type AustrianVatResult = {
  netAmount: number;
  taxAmount: number;
  grossAmount: number;
};

export function calculateAustrianVat(
  amount: number,
  rate: AustrianVatRate,
  mode: AustrianVatMode,
): AustrianVatResult {
  if (mode === "netToGross") {
    const taxAmount = roundNumber((amount * rate) / 100);
    const grossAmount = roundNumber(amount + taxAmount);

    return {
      netAmount: roundNumber(amount),
      taxAmount,
      grossAmount,
    };
  }

  const netAmount = roundNumber(amount / (1 + rate / 100));
  const taxAmount = roundNumber(amount - netAmount);

  return {
    netAmount,
    taxAmount,
    grossAmount: roundNumber(amount),
  };
}
