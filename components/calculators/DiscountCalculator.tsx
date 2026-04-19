"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculateDiscount,
  formatCurrency,
  formatNumber,
  parseLocalizedNumber,
} from "@/lib/calculators";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountRate, setDiscountRate] = useState("");

  const priceNumber = parseLocalizedNumber(originalPrice);
  const rateNumber = parseLocalizedNumber(discountRate);
  const canCalculate =
    priceNumber !== null && rateNumber !== null && priceNumber >= 0 && rateNumber >= 0;
  const result = canCalculate ? calculateDiscount(priceNumber, rateNumber) : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Shopping
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Rabattbetrag und Endpreis
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Originalpreis in €
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 79,90"
              value={originalPrice}
              onChange={(event) => setOriginalPrice(event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Rabatt in %
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 20"
              value={discountRate}
              onChange={(event) => setDiscountRate(event.target.value)}
            />
          </label>
        </div>

        <ResultBox
          title={
            result
              ? `Du sparst ${formatCurrency(result.discountAmount)}`
              : "Rabatt und Endpreis erscheinen hier"
          }
          description="Ideal für Sale-Preise, Gutscheine und schnelle Preisvergleiche."
        >
          {result ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Rabattbetrag
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.discountAmount)}
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Endpreis
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.finalPrice)}
                </p>
              </div>
              <p className="sm:col-span-2 text-sm leading-6 text-muted">
                {formatNumber(rateNumber!)} % von {formatCurrency(priceNumber!)}{" "}
                sind {formatCurrency(result.discountAmount)}. Danach bleiben{" "}
                {formatCurrency(result.finalPrice)}.
              </p>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Gib Preis und Rabatt ein, um sofort zu sehen, wie viel du sparst
              und was du am Ende zahlst.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
