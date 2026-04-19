"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import { formatCurrency, formatNumber, parseLocalizedNumber } from "@/lib/calculators";
import {
  calculateIncomeTax,
  formatIncomeTaxRange,
  incomeTaxYears,
  type IncomeTaxYear,
} from "@/lib/tax/at/einkommensteuer";

export function IncomeTaxCalculator() {
  const [year, setYear] = useState<IncomeTaxYear>(2026);
  const [income, setIncome] = useState("");

  const incomeNumber = parseLocalizedNumber(income);
  const hasResult = incomeNumber !== null && incomeNumber >= 0;
  const result = hasResult ? calculateIncomeTax(year, incomeNumber) : null;

  const summary = result
    ? result.totalTax > 0
      ? `Für ${formatCurrency(
          result.taxableIncome,
        )} zu versteuerndes Jahreseinkommen ergeben sich nach dem Tarif ${formatCurrency(
          result.totalTax,
        )} Einkommensteuer. Jeder zusätzliche Euro liegt aktuell im ${formatNumber(
          result.marginalRate,
        )}-%-Bereich.`
      : "Bei diesem zu versteuernden Jahreseinkommen fällt nach dem gewählten Tarifjahr keine Einkommensteuer an."
    : null;

  return (
    <div className="space-y-6">
      <section className="surface-card p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Tarifstufen Österreich
            </p>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
              Einkommensteuer grob nach Tarifjahr berechnen
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground/80">
                Steuerjahr
              </span>
              <select
                className="input-field"
                value={year}
                onChange={(event) => setYear(Number(event.target.value) as IncomeTaxYear)}
              >
                {incomeTaxYears.map((entry) => (
                  <option key={entry} value={entry}>
                    {entry}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground/80">
                Zu versteuerndes Jahreseinkommen in €
              </span>
              <input
                className="input-field"
                inputMode="decimal"
                placeholder="z. B. 42.000"
                value={income}
                onChange={(event) => setIncome(event.target.value)}
              />
            </label>
          </div>

          <ResultBox
            title={
              result
                ? `${formatCurrency(result.totalTax)} Einkommensteuer`
                : "Gesamte Einkommensteuer erscheint hier"
            }
            description="Der Rechner zeigt den einfachen Tarif für das gewählte Jahr - ohne Absetzbeträge, Sonderzahlungen oder individuelle Sonderfälle."
          >
            {result ? (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                      Steuer gesamt
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                      {formatCurrency(result.totalTax)}
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                      Grenzsteuersatz
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                      {formatNumber(result.marginalRate)} %
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                      Effektiver Satz
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                      {formatNumber(result.effectiveRate)} %
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-border/80 bg-white/75 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">
                      Grenzsteuersatz
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Er zeigt, mit welchem Satz dein nächster zusätzlicher
                      Einkommensanteil besteuert wird.
                    </p>
                  </div>
                  <div className="rounded-[1.2rem] border border-border/80 bg-white/75 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">
                      Effektiver Satz
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Er zeigt, wie hoch dein durchschnittlicher Steueranteil
                      über das gesamte eingegebene Einkommen ist.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-muted">{summary}</p>
              </div>
            ) : (
              <p className="text-sm leading-6 text-muted">
                Wähle das Steuerjahr und gib dein zu versteuerndes
                Jahreseinkommen ein. Der Rechner zeigt dir die einfache
                Tarifsteuer sofort an.
              </p>
            )}
          </ResultBox>
        </div>
      </section>

      <section className="surface-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          So setzt sich die Steuer zusammen
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
          Der Tarif ist stufenweise aufgebaut. Jeder Bereich deines Einkommens
          wird nur mit dem Satz der jeweiligen Stufe belastet.
        </p>

        {result ? (
          <div className="mt-6 space-y-3">
            {result.breakdown.map((row) => (
              <div
                key={`${row.from}-${row.to ?? "open"}`}
                className={`grid gap-4 rounded-[1.35rem] border px-5 py-5 md:grid-cols-[minmax(0,1.2fr)_8rem_10rem_10rem] md:items-center ${
                  row.taxableAmount > 0
                    ? "border-accent/30 bg-accent-soft/55"
                    : "border-border bg-background"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {formatIncomeTaxRange(row.from, row.to)}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Tarifstufe {formatNumber(row.rate)} %
                  </p>
                </div>
                <p className="text-sm font-medium text-foreground/80">
                  Satz: {formatNumber(row.rate)} %
                </p>
                <p className="text-sm font-medium text-foreground/80">
                  Anteil: {formatCurrency(row.taxableAmount)}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Steuer: {formatCurrency(row.taxAmount)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[1.35rem] border border-border bg-background px-5 py-5 text-sm leading-6 text-muted">
            Nach der Eingabe siehst du hier, welcher Einkommensanteil in welche
            Tarifstufe fällt.
          </div>
        )}
      </section>
    </div>
  );
}
