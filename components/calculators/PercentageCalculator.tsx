"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculatePercentage,
  formatNumber,
  parseLocalizedNumber,
} from "@/lib/calculators";

export function PercentageCalculator() {
  const [baseValue, setBaseValue] = useState("");
  const [percentageRate, setPercentageRate] = useState("");

  const baseNumber = parseLocalizedNumber(baseValue);
  const percentageNumber = parseLocalizedNumber(percentageRate);
  const canCalculate =
    baseNumber !== null &&
    percentageNumber !== null &&
    baseNumber >= 0 &&
    percentageNumber >= 0;
  const result = canCalculate
    ? calculatePercentage(baseNumber, percentageNumber)
    : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Sofort rechnen
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Prozentwert berechnen
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Grundwert
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 200"
              value={baseValue}
              onChange={(event) => setBaseValue(event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Prozentsatz
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 25"
              value={percentageRate}
              onChange={(event) => setPercentageRate(event.target.value)}
            />
          </label>
        </div>

        <ResultBox
          title={
            result
              ? `${formatNumber(percentageNumber!)} % von ${formatNumber(
                  baseNumber!,
                )} sind ${formatNumber(result.percentageValue)}`
              : "Dein Prozentwert erscheint hier"
          }
          description="Das Ergebnis aktualisiert sich direkt während der Eingabe."
        >
          {result ? (
            <div className="space-y-4">
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Prozentwert
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatNumber(result.percentageValue)}
                </p>
              </div>
              <p className="text-sm leading-6 text-muted">
                Rechenweg: {result.formula}
              </p>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Gib Grundwert und Prozentsatz ein, um sofort den Prozentwert zu
              sehen.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
