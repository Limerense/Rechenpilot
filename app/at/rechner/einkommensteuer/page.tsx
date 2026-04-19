import type { Metadata } from "next";

import { FAQ, type FaqItem } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { CaveatBox } from "@/components/tax/CaveatBox";
import { IncomeTaxCalculator } from "@/components/tax/IncomeTaxCalculator";
import { OfficialNextStep } from "@/components/tax/OfficialNextStep";
import { SourceCard } from "@/components/tax/SourceCard";
import { TaxCard } from "@/components/tax/TaxCard";
import { TaxIntro } from "@/components/tax/TaxIntro";
import { TrustBar } from "@/components/tax/TrustBar";
import { buildAtTaxMetadata, getAtTaxPages } from "@/lib/tax/at/metadata";
import { atTaxSources } from "@/lib/tax/at/sources";

export const metadata: Metadata = buildAtTaxMetadata({
  title: "Einkommensteuer-Rechner Österreich",
  description:
    "Einfacher Einkommensteuer-Stufenrechner für Österreich mit Steuerjahr 2024, 2025 oder 2026, gesamter Steuer, Grenzsteuersatz und Tarifstufen.",
  path: "/at/rechner/einkommensteuer",
  keywords: [
    "Einkommensteuer Rechner Österreich",
    "Einkommensteuertarif Österreich 2026",
    "Grenzsteuersatz Österreich",
    "Einkommensteuer 2024 2025 2026 Österreich",
  ],
});

const faqItems: FaqItem[] = [
  {
    question: "Was erwartet der Rechner als Eingabe?",
    answer:
      "Er erwartet dein zu versteuerndes Jahreseinkommen als vereinfachte Basis für den offiziellen Tarif.",
  },
  {
    question: "Berücksichtigt der Rechner Absetzbeträge?",
    answer:
      "Nein. Absetzbeträge, Sonderzahlungen, Negativsteuer und individuelle Besonderheiten sind bewusst nicht enthalten.",
  },
  {
    question: "Was bedeutet Grenzsteuersatz?",
    answer:
      "Der Grenzsteuersatz zeigt, in welcher Tarifstufe dein nächster Einkommensanteil liegt. Er ist nicht dasselbe wie dein durchschnittlicher Steuersatz.",
  },
  {
    question: "Was bedeutet effektiver Satz?",
    answer:
      "Der effektive Satz zeigt, wie hoch die Steuer im Verhältnis zu deinem gesamten eingegebenen Einkommen im Durchschnitt ausfällt.",
  },
  {
    question: "Ist das Ergebnis verbindlich?",
    answer:
      "Nein. Es ist eine vereinfachte Tariforientierung. Der offizielle Bescheid kann je nach Fall deutlich anders ausfallen.",
  },
];

const relatedEntries = getAtTaxPages([
  "arbeitnehmerveranlagung",
  "umsatzsteuer",
  "steuerhilfeHub",
]);

export default function AustrianIncomeTaxPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <TaxIntro
        title="Einkommensteuer-Rechner Österreich"
        description="Dieser Rechner zeigt dir die Einkommensteuer nach den österreichischen Tarifstufen für 2024, 2025 und 2026. Er ist bewusst einfach gehalten und hilft dir, den Tarif grob zu verstehen."
        detail="Gemeint ist ein vereinfachter Tarifrechner für das zu versteuernde Jahreseinkommen - ohne Absetzbeträge, Sonderzahlungen oder individuelle Sonderfälle."
      />

      <div className="mt-6">
        <TrustBar
          items={[
            "Nur offizielle Quellen",
            "Keine Registrierung",
            "Keine Steuerberatung",
          ]}
        />
      </div>

      <section className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article className="surface-card p-6 sm:p-8">
          <span className="pill">Was bedeutet das?</span>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Ein vereinfachter Tarifrechner für das zu versteuernde Jahreseinkommen
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            <p>
              Der Rechner zeigt dir, wie sich die Einkommensteuer nach den
              österreichischen Tarifstufen aufteilt. Er eignet sich für eine
              erste Orientierung, wenn du dein zu versteuerndes Jahreseinkommen
              bereits ungefähr kennst.
            </p>
            <p>
              Er ersetzt keine komplette Steuerberechnung. Absetzbeträge,
              Sonderzahlungen, Negativsteuer und persönliche Besonderheiten sind
              bewusst nicht enthalten.
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          <CaveatBox
            title="Was der Rechner nicht abdeckt"
            items={[
              "Keine Sonderzahlungen wie 13. oder 14. Bezug",
              "Keine Absetzbeträge, keine Negativsteuer und keine individuellen Begünstigungen",
              "Keine Prüfung, ob dein eingegebener Wert dem offiziellen zu versteuernden Einkommen entspricht",
            ]}
          />

          <OfficialNextStep
            description="Wenn du aus der groben Tariforientierung in einen echten Fall wechselst, prüfe die offiziellen Informationen zum Steuertarif und nutze bei Bedarf FinanzOnline für den nächsten formalen Schritt."
            actions={[
              {
                href: atTaxSources.einkommensteuerTarif.url,
                label: "Offiziellen Steuertarif ansehen",
              },
              {
                href: atTaxSources.finanzonline.url,
                label: "FinanzOnline öffnen",
              },
            ]}
            note="Offizielle Bescheide und individuelle Fälle können vom Ergebnis dieses vereinfachten Rechners abweichen."
          />
        </div>
      </section>

      <div className="mt-10 sm:mt-12">
        <IncomeTaxCalculator />
      </div>

      <div className="mt-8">
        <SourceCard
          sources={[
            atTaxSources.einkommensteuerTarif,
            atTaxSources.einkommensbegriff,
          ]}
        />
      </div>

      <div className="mt-8">
        <FAQ
          items={faqItems}
          description="Die wichtigsten Grenzen und Begriffe zum einfachen Einkommensteuer-Rechner."
        />
      </div>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Verwandte Seiten"
          title="Mehr Orientierung rund um Österreich"
          description="Diese Seiten sind meist der nächste sinnvolle Schritt, wenn du den Tarif eingeordnet hast."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedEntries.map((entry) => (
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
    </main>
  );
}
