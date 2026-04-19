import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorCard } from "@/components/CalculatorCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TaxCard } from "@/components/tax/TaxCard";
import { buildMetadata } from "@/lib/seo";
import {
  calculatorCatalog,
  getCalculatorsBySlugs,
  popularCalculatorSlugs,
} from "@/lib/site";
import { atTaxHomepageCards } from "@/lib/tax/at/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Alle Rechner im Überblick",
  description:
    "Alle Rechenpilot-Rechner auf einen Blick: Prozent, Rabatt, MwSt, Stundenlohn, Noten und Sparziel - schnell, ruhig und mobil optimiert.",
  path: "/rechner",
  keywords: [
    "Rechner Übersicht",
    "Online Rechner Übersicht",
    "Prozentrechner",
    "Rabattrechner",
    "MwSt Rechner",
  ],
});

const popularCalculators = getCalculatorsBySlugs(popularCalculatorSlugs);

export default function CalculatorsOverviewPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <section className="surface-card relative overflow-hidden p-7 sm:p-10">
        <div className="absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_center,rgba(94,140,220,0.18),transparent_72%)]" />
        <div className="relative space-y-6">
          <span className="pill">Rechnerübersicht</span>
          <div className="space-y-4">
            <h1 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              Alle Rechner an einem ruhigen Ort.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted">
              Hier findest du alle sechs Rechenpilot-Rechner für Alltag, Schule
              und Geld. Jeder Einstieg führt direkt zur Eingabe und zeigt das
              Ergebnis ohne Umwege.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="#alle-rechner" className="button-primary">
              Zu den Rechnern
            </Link>
            <Link href="/at/steuerhilfe" className="button-secondary">
              Steuerhilfe AT ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Beliebt"
          title="Schnelle Einstiege für typische Fragen"
          description="Wenn du direkt loslegen willst, sind diese drei Rechner meist der schnellste erste Klick."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {popularCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              calculator={calculator}
              compact
            />
          ))}
        </div>
      </section>

      <section id="alle-rechner" className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="Alle Rechner"
          title="Sechs klare Werkzeuge für echte Alltagssituationen"
          description="Reduziert gestaltet, schnell bedienbar und auf gute Lesbarkeit am Smartphone ausgelegt."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {calculatorCatalog.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <div className="surface-card p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Österreich"
            title="Steuerhilfe Österreich als nächster Überblick"
            description="Wenn du von allgemeinen Rechnern in Steuerthemen wechselst, findest du dort klare Orientierung und den offiziellen nächsten Schritt."
            action={
              <Link href="/at/steuerhilfe" className="button-secondary">
                Zum Überblick
              </Link>
            }
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {atTaxHomepageCards.map((card) => (
              <TaxCard
                key={card.href}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                href={card.href}
                ctaLabel={card.ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
