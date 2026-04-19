"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculateHourlyWage,
  formatCurrency,
  formatNumber,
  parseLocalizedNumber,
} from "@/lib/calculators";

export function HourlyWageCalculator() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");

  const salaryNumber = parseLocalizedNumber(monthlySalary);
  const hoursNumber = parseLocalizedNumber(weeklyHours);
  const canCalculate =
    salaryNumber !== null && hoursNumber !== null && salaryNumber > 0 && hoursNumber > 0;
  const result = canCalculate ? calculateHourlyWage(salaryNumber, hoursNumber) : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Beruf
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Groben Stundenlohn berechnen
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Monatsgehalt in €
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 3000"
              value={monthlySalary}
              onChange={(event) => setMonthlySalary(event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Wochenstunden
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 38,5"
              value={weeklyHours}
              onChange={(event) => setWeeklyHours(event.target.value)}
            />
          </label>
        </div>

        <ResultBox
          title={
            result
              ? `Ca. ${formatCurrency(result.hourlyWage)} pro Stunde`
              : "Dein grober Stundenlohn erscheint hier"
          }
          description="Die Berechnung nutzt den vereinfachten Faktor 4,33 Wochen pro Monat."
        >
          {result ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Monatsstunden
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatNumber(result.monthlyHours)} h
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Stundenlohn
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.hourlyWage)}
                </p>
              </div>
              <p className="sm:col-span-2 text-sm leading-6 text-muted">
                {formatNumber(hoursNumber!)} Wochenstunden entsprechen etwa{" "}
                {formatNumber(result.monthlyHours)} Monatsstunden. Teilt man das
                Monatsgehalt durch diesen Wert, ergibt sich ein grober Stundenlohn.
              </p>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Gib Monatsgehalt und Wochenstunden ein, um deinen vereinfachten
              Stundenlohn sofort zu sehen.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
