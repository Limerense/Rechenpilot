import type { Metadata } from "next";

import { FAQ, type FaqItem } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { CaveatBox } from "@/components/tax/CaveatBox";
import { OfficialNextStep } from "@/components/tax/OfficialNextStep";
import { SourceCard } from "@/components/tax/SourceCard";
import { AustrianVatCalculator } from "@/components/tax/AustrianVatCalculator";
import { TaxCard } from "@/components/tax/TaxCard";
import { TaxIntro } from "@/components/tax/TaxIntro";
import { TrustBar } from "@/components/tax/TrustBar";
import { buildAtTaxMetadata, getAtTaxPages } from "@/lib/tax/at/metadata";
import { atTaxSources } from "@/lib/tax/at/sources";
import { austrianVatRateDetails, austrianVatRates } from "@/lib/tax/at/umsatzsteuer";

export const metadata: Metadata = buildAtTaxMetadata({
  title: "Umsatzsteuer-Rechner Österreich",
  description:
    "Einfacher Umsatzsteuer-Rechner für Österreich mit Netto-Brutto-Umschalter und den Steuersätzen 20 %, 13 % und 10 %.",
  path: "/at/rechner/umsatzsteuer",
  keywords: [
    "Umsatzsteuer Rechner Österreich",
    "USt Rechner Österreich",
    "Netto Brutto Österreich 20 13 10",
    "Umsatzsteuersatz Österreich",
  ],
});

const faqItems: FaqItem[] = [
  {
    question: "Wann ist dieser Rechner geeignet?",
    answer:
      "Für den einfachen österreichischen Standardfall, wenn du Netto, Umsatzsteuer und Brutto mit 20 %, 13 % oder 10 % grob umrechnen willst.",
  },
  {
    question: "Deckt der Rechner Branchenlogik oder Sonderfälle ab?",
    answer:
      "Nein. Er prüft nicht, ob ein ermäßigter Satz tatsächlich anwendbar ist, und deckt keine Branchenlogik, Ausnahmen oder Ortsregeln ab.",
  },
  {
    question: "Kann ich damit eine offizielle USt-Pflicht prüfen?",
    answer:
      "Nein. Der Rechner hilft nur bei der Zahlenumrechnung. Die eigentliche steuerliche Einordnung muss im offiziellen Kontext erfolgen.",
  },
  {
    question: "Ist das Ergebnis verbindlich?",
    answer:
      "Nein. Es ist eine unverbindliche Orientierung. Für offizielle Erklärungen und Fristen sind die zuständigen Stellen maßgeblich.",
  },
];

const relatedEntries = getAtTaxPages([
  "steuerhilfeHub",
  "einkommensteuer",
  "arbeitnehmerveranlagung",
]);

export default function AustrianVatPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <TaxIntro
        title="Umsatzsteuer-Rechner Österreich"
        description="Mit diesem Rechner wandelst du Netto und Brutto im österreichischen Standardfall schnell ineinander um. Er konzentriert sich bewusst auf die häufigen Sätze 20 %, 13 % und 10 %."
        detail="Die Seite vereinfacht. Sie prüft nicht, welcher Satz in deinem Einzelfall tatsächlich gilt."
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
            Ein USt-Rechner für den einfachen österreichischen Standardfall
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            <p>
              Die Seite hilft dir dabei, Netto, Umsatzsteuer und Brutto mit den
              häufigen österreichischen Sätzen 20 %, 13 % und 10 % schnell
              umzurechnen.
            </p>
            <p>
              Rechenpilot zeigt bewusst nur die einfache Zahlenlogik. Welche
              Regeln, Meldungen oder offiziellen Pflichten in deinem Fall
              tatsächlich gelten, musst du anschließend im amtlichen Kontext
              prüfen.
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          <CaveatBox
            title="Was der Rechner nicht abdeckt"
            items={[
              "Keine Branchenlogik und keine Sonderfälle",
              "Keine Leistungsort-Prüfung und keine Prüfung der tatsächlichen Steuerpflicht",
              "Keine Prüfung, ob 20 %, 13 % oder 10 % im Einzelfall wirklich anwendbar sind",
            ]}
          />

          <OfficialNextStep
            description="Wenn du nach der Umrechnung offiziell weitergehst, prüfe die Regeln zu Steuersätzen und Umsatzsteuervoranmeldung direkt bei den offiziellen österreichischen Stellen."
            actions={[
              {
                href: atTaxSources.umsatzsteuerSaetze.url,
                label: "Offizielle USt-Sätze lesen",
              },
              {
                href: atTaxSources.umsatzsteuervoranmeldung.url,
                label: "UVA & Pflichten ansehen",
              },
            ]}
            note="Für Fristen, Formulare und FinanzOnline ist immer der offizielle Weg maßgeblich."
          />
        </div>
      </section>

      <div className="mt-10 sm:mt-12">
        <AustrianVatCalculator />
      </div>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Sätze im Überblick"
          title="Die drei Sätze 20 %, 13 % und 10 %"
          description="Rechenpilot zeigt nur die einfache Zahlenlogik. Ob der passende Satz wirklich anwendbar ist, muss der offizielle Kontext klären."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {austrianVatRates.map((rate) => (
            <article key={rate} className="surface-card p-6">
              <span className="pill">{austrianVatRateDetails[rate].label}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                {austrianVatRateDetails[rate].label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                {austrianVatRateDetails[rate].description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <SourceCard
          sources={[
            atTaxSources.umsatzsteuerSaetze,
            atTaxSources.umsatzsteuervoranmeldung,
          ]}
        />
      </div>

      <div className="mt-8">
        <FAQ
          items={faqItems}
          description="Kurz erklärt: wofür der Umsatzsteuer-Rechner Österreich gedacht ist und wo seine Grenzen liegen."
        />
      </div>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Verwandte Seiten"
          title="Weitere sinnvolle Einstiege"
          description="Wenn du von der USt-Umrechnung in andere Steuerfragen wechselst, helfen diese Seiten meist direkt weiter."
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
