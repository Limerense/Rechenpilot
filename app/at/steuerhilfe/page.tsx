import type { Metadata } from "next";

import { FAQ, type FaqItem } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { CaveatBox } from "@/components/tax/CaveatBox";
import { OfficialNextStep } from "@/components/tax/OfficialNextStep";
import { SourceCard } from "@/components/tax/SourceCard";
import { TaxCard } from "@/components/tax/TaxCard";
import { TaxIntro } from "@/components/tax/TaxIntro";
import { TrustBar } from "@/components/tax/TrustBar";
import {
  atTaxHubCards,
  atTaxPopularEntries,
  buildAtTaxMetadata,
} from "@/lib/tax/at/metadata";
import { atTaxSources } from "@/lib/tax/at/sources";

export const metadata: Metadata = buildAtTaxMetadata({
  title: "Steuerhilfe Österreich: Steuerausgleich, Einkommensteuer und Umsatzsteuer",
  description:
    "Verständliche Rechner und Guides für Steuerausgleich, Einkommensteuer und Umsatzsteuer in Österreich - mit offizieller Orientierung und klaren Grenzen.",
  path: "/at/steuerhilfe",
  keywords: [
    "Steuerhilfe Österreich",
    "Steuerausgleich Österreich",
    "Arbeitnehmerveranlagung Österreich",
    "Einkommensteuer Österreich",
    "Umsatzsteuer Österreich",
  ],
});

const faqItems: FaqItem[] = [
  {
    question: "Ist Rechenpilot eine Steuerberatung?",
    answer:
      "Nein. Rechenpilot bietet eine verständliche, unverbindliche Orientierung auf Basis offizieller Quellen und ersetzt keine Steuerberatung.",
  },
  {
    question: "Sind die Ergebnisse verbindlich?",
    answer:
      "Nein. Die Rechner und Guides helfen beim Einordnen. Verbindlich sind nur offizielle Verfahren, Erklärungen und Bescheide.",
  },
  {
    question: "Für wen ist der Bereich gedacht?",
    answer:
      "Für Menschen in Österreich, die schnell verstehen wollen, ob ein Thema für sie relevant ist und welcher offizielle nächste Schritt sinnvoll ist.",
  },
  {
    question: "Welche Themen deckt ihr noch nicht ab?",
    answer:
      "In dieser Phase konzentriert sich der Bereich auf Arbeitnehmerveranlagung, Einkommensteuer und Umsatzsteuer im einfachen Standardfall.",
  },
  {
    question: "Warum verweist ihr auf offizielle Stellen?",
    answer:
      "Weil Rechenpilot Orientierung geben soll, aber keine amtlichen Verfahren ersetzt. Deshalb führen die Seiten bewusst zum offiziellen nächsten Schritt.",
  },
];

export default function AustriaTaxHubPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <TaxIntro
        title="Steuerhilfe Österreich"
        description="Verständliche Rechner und Guides für Steuerausgleich, Einkommensteuer und Umsatzsteuer in Österreich."
        badges={["Nur offizielle Quellen", "Keine Registrierung", "Unverbindliche Orientierung"]}
      />

      <div className="mt-6">
        <TrustBar
          items={[
            "Nur offizielle Quellen",
            "Keine Registrierung",
            "Unverbindliche Orientierung",
          ]}
        />
      </div>

      <section className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article className="surface-card p-6 sm:p-8">
          <span className="pill">Was bedeutet das?</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Orientierung zuerst, offizieller Schritt danach
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            <p>
              Dieser Bereich hilft dir dabei, typische Steuerthemen in
              Österreich schneller einzuordnen. Er vereinfacht bewusst und
              konzentriert sich auf Fragen, mit denen viele Menschen im Alltag
              starten.
            </p>
            <p>
              Die Grundlogik bleibt auf jeder Seite gleich: Thema verstehen,
              Ergebnis einordnen und dann den passenden offiziellen Einstieg
              finden.
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          <CaveatBox title="Wofür dieser Bereich Grenzen hat">
            Keine verbindlichen Steuerberechnungen, keine individuelle
            Fallprüfung und keine Steuerberatung. Rechenpilot zeigt bewusst nur
            einfache Orientierung auf Basis offizieller Quellen.
          </CaveatBox>

          <OfficialNextStep
            title="Amtlichen Einstieg wählen"
            description="Wenn du nach der ersten Orientierung offiziell weitermachst, starte bei den zuständigen österreichischen Stellen. Dort findest du Anträge, Verfahren, Hinweise und den formalen nächsten Schritt."
            actions={[
              {
                href: atTaxSources.arbeitnehmerveranlagung.url,
                label: "Amtliche Übersicht lesen",
              },
              {
                href: atTaxSources.finanzonline.url,
                label: "FinanzOnline öffnen",
              },
            ]}
            note="Rechenpilot erklärt und verlinkt, reicht aber keine Anträge ein."
          />
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Direkt starten"
          title="Womit willst du anfangen?"
          description="Der schnellste Weg bleibt immer gleich: Thema wählen, grob orientieren, Ergebnis verstehen und dann offiziell weitermachen."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {atTaxHubCards.map((card) => (
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
      </section>

      <section className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="Beliebte Einstiege"
          title="Drei typische Fragen aus dem Alltag"
          description="Diese Einstiege lösen besonders häufig das erste Problem: verstehen, worum es geht, und dann sauber zum offiziellen Schritt wechseln."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {atTaxPopularEntries.map((entry) => (
            <TaxCard
              key={entry.href}
              eyebrow={entry.eyebrow}
              title={entry.title}
              description={entry.description}
              href={entry.href}
              ctaLabel={entry.ctaLabel}
            />
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-6 sm:mt-16">
        <SectionHeading
          eyebrow="So funktioniert es"
          title="So funktioniert Rechenpilot Steuerhilfe"
          description="Jede Seite folgt bewusst derselben Logik, damit du in wenigen Sekunden weißt, was als Nächstes wichtig ist."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Schnell orientieren
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Du siehst sofort, wofür die Seite gedacht ist und welchen
              vereinfachten Fall sie abbildet.
            </p>
          </article>
          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Ergebnis verstehen
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Rechner und Guides erklären das Ergebnis in klaren Worten statt in
              abstrakten Fachbegriffen.
            </p>
          </article>
          <article className="surface-card p-6">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
              Offiziellen nächsten Schritt finden
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Wenn dein Fall offiziell weitergeht, zeigen wir dir bewusst den
              passenden offiziellen Einstieg.
            </p>
          </article>
        </div>
      </section>

      <div className="mt-8">
        <SourceCard
          sources={[
            atTaxSources.arbeitnehmerveranlagung,
            atTaxSources.einkommensteuerTarif,
            atTaxSources.umsatzsteuerSaetze,
          ]}
        />
      </div>

      <div className="mt-8">
        <FAQ
          items={faqItems}
          description="Kurz und klar: Wofür der Bereich gedacht ist und wo seine Grenzen liegen."
        />
      </div>
    </main>
  );
}
