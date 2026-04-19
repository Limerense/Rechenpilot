"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculateSavingsGoal,
  formatCurrency,
  formatNumber,
  parseLocalizedNumber,
} from "@/lib/calculators";

export function SavingsGoalCalculator() {
  const [goal, setGoal] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");

  const goalNumber = parseLocalizedNumber(goal);
  const rateNumber = parseLocalizedNumber(monthlyRate);
  const canCalculate =
    goalNumber !== null && rateNumber !== null && goalNumber > 0 && rateNumber > 0;
  const result = canCalculate ? calculateSavingsGoal(goalNumber, rateNumber) : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Finanzen
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Zeit bis zum Sparziel
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Sparziel in €
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 10000"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Monatliche Sparrate in €
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 250"
              value={monthlyRate}
              onChange={(event) => setMonthlyRate(event.target.value)}
            />
          </label>
        </div>

        <ResultBox
          title={
            result
              ? `Bis zu deinem Ziel: ${result.durationLabel}`
              : "Deine Sparzeit erscheint hier"
          }
          description="Der Rechner zeigt dir eine grobe Zeitspanne auf Monatsbasis."
        >
          {result ? (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                    Dauer
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {result.durationLabel}
                  </p>
                </div>
                <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                    Exakt
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {formatNumber(result.exactMonths, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}{" "}
                    Monate
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted">
                {result.remainingAmount > 0
                  ? `Nach ${result.fullMonths} vollen Monaten fehlen noch ${formatCurrency(
                      result.remainingAmount,
                    )}.`
                  : "Mit deiner Monatsrate triffst du dein Ziel exakt ohne Restmonat."}
              </p>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Gib Sparziel und monatliche Rate ein, um sofort zu sehen, wie
              lange du voraussichtlich sparen musst.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
