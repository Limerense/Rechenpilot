import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorCard } from "@/components/CalculatorCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TaxCard } from "@/components/tax/TaxCard";
import { buildMetadata } from "@/lib/seo";
import {
  calculatorCatalog,
  homepageBenefits,
  homepageExamples,
  popularCalculatorSlugs,
  siteConfig,
  getCalculatorsBySlugs,
} from "@/lib/site";
import { atTaxHomepageCards } from "@/lib/tax/at/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kostenlose Online-Rechner für Alltag, Schule und Geld",
  description:
    "Kostenlose Online-Rechner für Alltag, Schule und Geld - schnell, verständlich und ohne Anmeldung.",
  path: "/",
  keywords: [
    "Online Rechner",
    "Prozentrechner",
    "Rabattrechner",
    "MwSt Rechner",
    "Notenrechner",
    "Sparziel Rechner",
  ],
});

const popularCalculators = getCalculatorsBySlugs(popularCalculatorSlugs);

export default function Home() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
        <div className="surface-card relative overflow-hidden p-7 sm:p-10">
          <div className="absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_center,rgba(94,140,220,0.18),transparent_72%)]" />
          <div className="relative space-y-7">
            <span className="pill">Kostenlose Online-Rechner für DACH</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                {siteConfig.claim}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Kostenlose Online-Rechner für Alltag, Schule und Geld - schnell,
                verständlich und ohne Anmeldung.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/rechner" className="button-primary">
                Rechner ansehen
              </Link>
              <Link href="/at/steuerhilfe" className="button-secondary">
                Steuerhilfe AT
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="pill">Ohne Anmeldung</span>
              <span className="pill">Sofort im Browser</span>
              <span className="pill">Mobil optimiert</span>
            </div>
          </div>
        </div>

        <aside className="surface-card p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Direkt loslegen
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                Wähle den Einstieg, der zu deiner Frage passt.
              </h2>
            </div>

            <div className="grid gap-3">
              {homepageExamples.map((example) => (
                <Link
                  key={example.href}
                  href={example.href}
                  className="rounded-[1.35rem] border border-border bg-background px-4 py-4 transition hover:border-accent/35 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {example.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/78">
                    {example.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-accent">
                    {example.ctaLabel}
                  </p>
                </Link>
              ))}
            </div>

            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(94,140,220,0.12),rgba(255,255,255,0.95))] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Was du hier findest
              </p>
              <p className="mt-3 text-base leading-7 text-foreground/80">
                Rechner zuerst, Erklärung direkt danach. So erkennst du sofort,
                ob du richtig bist und wo du weiterklicken solltest.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section id="rechner" className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="Alle Rechner"
          title="Sechs Rechner für die erste Version"
          description="Jeder Rechner führt direkt zur Eingabe, zeigt das Ergebnis sofort an und erklärt den Rechenweg in klaren Worten."
          action={
            <Link href="/rechner" className="button-secondary">
              Zur Rechnerübersicht
            </Link>
          }
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
            eyebrow="Neu"
            title="Neu: Steuerhilfe Österreich"
            description="Verständliche Rechner und Guides zu Steuerausgleich, Einkommensteuer und Umsatzsteuer in Österreich."
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

      <section className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="Warum Rechenpilot?"
          title="Ruhige Oberflächen statt lauter Tool-Seiten"
          description="Die erste Version setzt auf wenig Ablenkung, klare Typografie und Ergebnisse, die man sofort weiterverwenden kann."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homepageBenefits.map((benefit) => (
            <article key={benefit.title} className="surface-card p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="Beliebt"
          title="Diese Rechner werden besonders oft gebraucht"
          description="Ein schneller Einstieg für Rabatte, Prozentwerte und Sparziele - drei klassische Alltagsszenarien."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="grid gap-5 md:grid-cols-3">
            {popularCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                calculator={calculator}
                compact
              />
            ))}
          </div>

          <aside className="surface-card p-6">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Typische Fragen
            </h3>
            <div className="mt-5 space-y-3">
              <div className="rounded-[1.35rem] border border-border bg-background px-4 py-4 text-sm leading-6 text-foreground/80">
                20 % Rabatt von 79,90 €
              </div>
              <div className="rounded-[1.35rem] border border-border bg-background px-4 py-4 text-sm leading-6 text-foreground/80">
                Wie viel spare ich für 10.000 € bei 250 € pro Monat?
              </div>
              <div className="rounded-[1.35rem] border border-border bg-background px-4 py-4 text-sm leading-6 text-foreground/80">
                Wie viel sind 13 % MwSt auf einen Netto-Betrag?
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
