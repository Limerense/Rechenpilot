"use client";

import { useRef, useState } from "react";

import { ResultBox } from "@/components/ResultBox";
import {
  calculateWeightedGrade,
  formatNumber,
  parseLocalizedNumber,
} from "@/lib/calculators";

type GradeRow = {
  id: string;
  grade: string;
  weight: string;
};

const initialRows: GradeRow[] = [
  { id: "1", grade: "", weight: "" },
  { id: "2", grade: "", weight: "" },
];

export function GradeCalculator() {
  const [rows, setRows] = useState<GradeRow[]>(initialRows);
  const nextId = useRef(3);

  const normalizedEntries = rows
    .map((row) => ({
      grade: parseLocalizedNumber(row.grade),
      weight: parseLocalizedNumber(row.weight) ?? undefined,
    }))
    .filter(
      (row): row is { grade: number; weight: number | undefined } =>
        row.grade !== null,
    );

  const result = normalizedEntries.length
    ? calculateWeightedGrade(normalizedEntries)
    : null;

  function updateRow(id: string, key: "grade" | "weight", value: string) {
    setRows((currentRows) =>
      currentRows.map((row) => (row.id === id ? { ...row, [key]: value } : row)),
    );
  }

  function addRow() {
    setRows((currentRows) => [
      ...currentRows,
      { id: String(nextId.current++), grade: "", weight: "" },
    ]);
  }

  function removeRow(id: string) {
    setRows((currentRows) =>
      currentRows.length === 1
        ? currentRows
        : currentRows.filter((row) => row.id !== id),
    );
  }

  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Schule
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Noten mit optionaler Gewichtung
          </h2>
        </div>

        <div className="space-y-3">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className="rounded-[1.35rem] border border-border bg-background p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  Eintrag {index + 1}
                </p>
                <button
                  type="button"
                  className="text-sm font-medium text-muted transition hover:text-foreground"
                  onClick={() => removeRow(row.id)}
                >
                  Löschen
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground/80">
                    Note
                  </span>
                  <input
                    className="input-field"
                    inputMode="decimal"
                    placeholder="z. B. 2"
                    value={row.grade}
                    onChange={(event) =>
                      updateRow(row.id, "grade", event.target.value)
                    }
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground/80">
                    Gewichtung
                  </span>
                  <input
                    className="input-field"
                    inputMode="decimal"
                    placeholder="optional, sonst 1"
                    value={row.weight}
                    onChange={(event) =>
                      updateRow(row.id, "weight", event.target.value)
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="button-secondary" onClick={addRow}>
          + Note hinzufügen
        </button>

        <ResultBox
          title={
            result
              ? `Durchschnitt: ${formatNumber(result.average, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "Dein Notendurchschnitt erscheint hier"
          }
          description="Wenn du keine Gewichtung eingibst, zählt der Eintrag automatisch mit Gewicht 1."
        >
          {result ? (
            <div className="space-y-4">
              <div className="rounded-[1.35rem] bg-white/80 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Gewichteter Durchschnitt
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-foreground">
                  {formatNumber(result.average, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] bg-white/70 px-4 py-4">
                  <p className="text-sm font-semibold text-muted">Anzahl Noten</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">
                    {result.count}
                  </p>
                </div>
                <div className="rounded-[1.2rem] bg-white/70 px-4 py-4">
                  <p className="text-sm font-semibold text-muted">Gesamtgewicht</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">
                    {formatNumber(result.totalWeight)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm leading-6 text-muted">
              Trage zwei oder mehr Noten ein. Der Durchschnitt wird direkt
              aktualisiert, sobald gültige Werte vorhanden sind.
            </p>
          )}
        </ResultBox>
      </div>
    </section>
  );
}
