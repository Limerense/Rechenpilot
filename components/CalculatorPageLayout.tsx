import type { ReactNode } from "react";

import { FAQ, type FaqItem } from "@/components/FAQ";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import type { CalculatorSlug } from "@/lib/site";

export type CalculatorExample = {
  label: string;
  calculation: string;
  result: string;
};

type CalculatorPageLayoutProps = {
  title: string;
  intro: string;
  calculator: ReactNode;
  explanationTitle: string;
  explanationText: string;
  formula: string;
  note?: string;
  examples: CalculatorExample[];
  faqItems: FaqItem[];
  relatedSlugs: CalculatorSlug[];
  footerContent?: ReactNode;
};

export function CalculatorPageLayout({
  title,
  intro,
  calculator,
  explanationTitle,
  explanationText,
  formula,
  note,
  examples,
  faqItems,
  relatedSlugs,
  footerContent,
}: CalculatorPageLayoutProps) {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_29rem] lg:items-start">
        <div className="space-y-6 pt-4">
          <span className="pill">Rechenpilot</span>
          <div className="space-y-4">
            <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.05em] text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">{intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="pill">Ohne Anmeldung</span>
            <span className="pill">Direkt im Browser</span>
            <span className="pill">Mobil optimiert</span>
          </div>
        </div>

        <div>{calculator}</div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {explanationTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{explanationText}</p>
          <div className="mt-6 rounded-[1.35rem] border border-border bg-background px-5 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Rechenweg
            </p>
            <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-foreground">
              {formula}
            </p>
          </div>
          {note ? (
            <p className="mt-5 text-sm leading-6 text-muted">{note}</p>
          ) : null}
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Beispiele
          </h2>
          <div className="mt-6 grid gap-4">
            {examples.map((example) => (
              <div
                key={example.calculation}
                className="rounded-[1.35rem] border border-border bg-background px-5 py-4"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  {example.label}
                </p>
                <p className="mt-3 text-base font-semibold text-foreground">
                  {example.calculation}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Ergebnis: {example.result}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <div className="mt-8">
        <FAQ items={faqItems} />
      </div>

      <div className="mt-12">
        <RelatedCalculators slugs={relatedSlugs} />
      </div>

      {footerContent ? <div className="mt-8">{footerContent}</div> : null}
    </main>
  );
}
