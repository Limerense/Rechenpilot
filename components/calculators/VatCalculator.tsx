"use client";

import { useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculateVat,
  formatCurrency,
  parseLocalizedNumber,
  type VatMode,
} from "@/lib/calculators";

const vatOptions = [20, 10, 13] as const;

export function VatCalculator() {
  const [mode, setMode] = useState<VatMode>("netToGross");
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState("20");

  const amountNumber = parseLocalizedNumber(amount);
  const vatNumber = Number(vatRate);
  const canCalculate = amountNumber !== null && amountNumber >= 0;
  const result = canCalculate ? calculateVat(amountNumber, vatNumber, mode) : null;

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Netto &amp; Brutto
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            MwSt mit 20 %, 10 % oder 13 %
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-[1.35rem] bg-background p-1">
          <button
            type="button"
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
              MwSt-Satz
            </span>
            <select
              className="input-field"
              value={vatRate}
              onChange={(event) => setVatRate(event.target.value)}
            >
              {vatOptions.map((option) => (
                <option key={option} value={option}>
                  {option} %
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
              : "Netto, Steuer und Brutto erscheinen hier"
          }
          description="Die erste Version arbeitet mit den häufig verwendeten Sätzen 20 %, 10 % und 13 %."
        >
          {result ? (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Netto
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.netAmount)}
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Steuerbetrag
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.taxAmount)}
                </p>
              </div>
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Brutto
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatCurrency(result.grossAmount)}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Wähle den Modus, gib deinen Betrag ein und der Rechner zeigt dir
              sofort Netto, Steuer und Brutto.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
