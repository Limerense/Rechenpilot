"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import { formatCurrency, parseLocalizedNumber } from "@/lib/calculators";
import {
  austrianVatRates,
  calculateAustrianVat,
  type AustrianVatMode,
  type AustrianVatRate,
} from "@/lib/tax/at/umsatzsteuer";

export function AustrianVatCalculator() {
  const [mode, setMode] = useState<AustrianVatMode>("netToGross");
  const [rate, setRate] = useState<AustrianVatRate>(20);
  const [amount, setAmount] = useState("");

  const amountNumber = parseLocalizedNumber(amount);
  const hasResult = amountNumber !== null && amountNumber >= 0;
  const result = hasResult ? calculateAustrianVat(amountNumber, rate, mode) : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Österreichischer Standardfall
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Netto, Umsatzsteuer und Brutto direkt umrechnen
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-[1.35rem] bg-background p-1">
          <button
            type="button"
            aria-pressed={mode === "netToGross"}
            className={`rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
              mode === "netToGross"
                ? "bg-white text-foreground shadow-[0_16px_40px_-28px_rgba(42,59,88,0.35)]"
                : "text-muted hover:text-foreground"
            }`}
            onClick={() => setMode("netToGross")}
          >
            Netto -&gt; Brutto
          </button>
          <button
            type="button"
            aria-pressed={mode === "grossToNet"}
            className={`rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
              mode === "grossToNet"
                ? "bg-white text-foreground shadow-[0_16px_40px_-28px_rgba(42,59,88,0.35)]"
                : "text-muted hover:text-foreground"
            }`}
            onClick={() => setMode("grossToNet")}
          >
            Brutto -&gt; Netto
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              {mode === "netToGross" ? "Netto-Betrag in €" : "Brutto-Betrag in €"}
            </span>
            <input
              className="input-field"
              inputMode="decimal"
              placeholder="z. B. 120"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground/80">
              Umsatzsteuersatz
            </span>
            <select
              className="input-field"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value) as AustrianVatRate)}
            >
              {austrianVatRates.map((entry) => (
                <option key={entry} value={entry}>
                  {entry} %
                </option>
              ))}
            </select>
          </label>
        </div>

        <ResultBox
          title={
            result
              ? mode === "netToGross"
                ? `${formatCurrency(result.netAmount)} netto werden ${formatCurrency(
                    result.grossAmount,
                  )} brutto`
                : `${formatCurrency(result.grossAmount)} brutto entsprechen ${formatCurrency(
                    result.netAmount,
                  )} netto`
              : "Netto, Umsatzsteuer und Brutto erscheinen hier"
          }
          description="Der Rechner bildet den einfachen österreichischen Standardfall mit 20 %, 13 % und 10 % ab."
        >
          {result ? (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                    Netto
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {formatCurrency(result.netAmount)}
                  </p>
                </div>
                <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                    Umsatzsteuer
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {formatCurrency(result.taxAmount)}
                  </p>
                </div>
                <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                    Brutto
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {formatCurrency(result.grossAmount)}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted">
                {mode === "netToGross"
                  ? `Bei ${rate} % USt wird der Steuerbetrag auf deinen Netto-Betrag aufgeschlagen.`
                  : `Bei ${rate} % USt wird die enthaltene Steuer aus dem Brutto-Betrag herausgerechnet.`}
              </p>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Wähle Modus und Satz, gib deinen Betrag ein und der Rechner zeigt
              dir den einfachen USt-Standardfall sofort an.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
