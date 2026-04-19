import type { Metadata } from "next";
import Link from "next/link";

import { FAQ, type FaqItem } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { CaveatBox } from "@/components/tax/CaveatBox";
import { OfficialNextStep } from "@/components/tax/OfficialNextStep";
import { SourceCard } from "@/components/tax/SourceCard";
import { TaxCard } from "@/components/tax/TaxCard";
import { TaxIntro } from "@/components/tax/TaxIntro";
import { TrustBar } from "@/components/tax/TrustBar";
import { buildAtTaxMetadata, getAtTaxPages } from "@/lib/tax/at/metadata";
import { atTaxSources } from "@/lib/tax/at/sources";

export const metadata: Metadata = buildAtTaxMetadata({
  title: "Steuerausgleich in Österreich einfach verstehen",
  description:
    "Steuerausgleich ist der alltagssprachliche Begriff, fachlich heißt das Thema Arbeitnehmerveranlagung. Hier findest du eine ruhige Orientierung für Österreich.",
  path: "/at/steuerhilfe/arbeitnehmerveranlagung",
  keywords: [
    "Steuerausgleich Österreich",
    "Arbeitnehmerveranlagung Österreich",
    "Steuerausgleich Arbeitnehmerveranlagung Unterschied",
    "FinanzOnline Arbeitnehmerveranlagung",
  ],
});

const relevanceCards = [
  {
    title: "Arbeitgeberwechsel",
    description:
      "Wenn du im Jahr nicht durchgehend bei demselben Arbeitgeber warst, kann ein Blick auf die Arbeitnehmerveranlagung sinnvoll sein.",
  },
  {
    title: "Mehrere Jobs",
    description:
      "Mehrere lohnsteuerpflichtige Bezüge können dazu führen, dass du das Thema genauer prüfen solltest.",
  },
  {
    title: "Werbungskosten",
    description:
      "Beruflich veranlasste Ausgaben wie Arbeitsmittel oder Fortbildung können relevant werden, wenn die gesetzlichen Voraussetzungen passen.",
  },
  {
    title: "Sonderausgaben",
    description:
      "Je nach Thema können bestimmte Sonderausgaben bei der Veranlagung eine Rolle spielen.",
  },
  {
    title: "Außergewöhnliche Belastungen",
    description:
      "Bestimmte persönliche Belastungen können steuerlich relevant sein, wenn die gesetzlichen Bedingungen erfüllt sind.",
  },
  {
    title: "Familie und Kinder",
    description:
      "Familienbezogene Themen können sich auf die Veranlagung auswirken und sollten im offiziellen Verfahren sauber geprüft werden.",
  },
  {
    title: "Pflichtveranlagung",
    description:
      "Es gibt Konstellationen, in denen die Arbeitnehmerveranlagung nicht nur freiwillig, sondern verpflichtend sein kann.",
  },
];

const steps = [
  {
    title: "Unterlagen prüfen",
    text: "Lohnzettel, Belege und persönliche Änderungen durchsehen, damit du weißt, welche Themen überhaupt relevant sind.",
  },
  {
    title: "Themen identifizieren",
    text: "Klären, ob Jobwechsel, Werbungskosten, Familie oder andere Punkte für deinen Fall eine Rolle spielen.",
  },
  {
    title: "Offiziellen Antrag starten",
    text: "Den offiziellen Einstieg über FinanzOnline oder die zuständigen Formulare wählen.",
  },
  {
    title: "Bescheid prüfen",
    text: "Nach dem offiziellen Verfahren den Bescheid in Ruhe lesen und mit deinem erwarteten Fall abgleichen.",
  },
];

const misunderstandings = [
  "Steuerausgleich bedeutet nicht, dass jedes Jahr automatisch dieselbe Gutschrift entsteht.",
  "Belege müssen oft nicht sofort mitgeschickt werden, sollten aber aufbewahrt werden.",
  "Rechenpilot berechnet hier keine verbindliche Gutschrift und ersetzt keine individuelle Prüfung.",
];

const faqItems: FaqItem[] = [
  {
    question: "Was ist der Unterschied zwischen Steuerausgleich und Arbeitnehmerveranlagung?",
    answer:
      "Steuerausgleich ist der alltagssprachliche Begriff. Im offiziellen österreichischen Sprachgebrauch heißt das Thema Arbeitnehmerveranlagung.",
  },
  {
    question: "Muss ich das jedes Jahr machen?",
    answer:
      "Nicht automatisch. Es gibt freiwillige Fälle und es gibt Konstellationen, in denen eine Pflichtveranlagung vorliegen kann.",
  },
  {
    question: "Ist das freiwillig oder Pflicht?",
    answer: (
      <>
        Beides ist möglich. Eine erste offizielle Orientierung findest du auf{" "}
        <Link
          href={atTaxSources.arbeitnehmerveranlagung.url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-accent"
        >
          oesterreich.gv.at
        </Link>
        .
      </>
    ),
  },
  {
    question: "Muss ich Belege hochladen?",
    answer:
      "Nicht in jedem Fall direkt. Wichtig ist aber, dass du relevante Unterlagen geordnet aufbewahrst, falls sie später benötigt werden.",
  },
];

const relatedEntries = getAtTaxPages([
  "einkommensteuer",
  "umsatzsteuer",
  "steuerhilfeHub",
]);

export default function ArbeitnehmerveranlagungPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <TaxIntro
        title="Steuerausgleich in Österreich einfach verstehen"
        description="Wenn viele Menschen in Österreich vom Steuerausgleich sprechen, ist fachlich meist die Arbeitnehmerveranlagung gemeint. Diese Seite hilft dir dabei, das Thema ruhig einzuordnen und den offiziellen nächsten Schritt zu finden."
        detail={
          <>
            <strong>Steuerausgleich</strong> ist der alltagssprachliche Begriff.
            Fachlich heißt das Thema <strong>Arbeitnehmerveranlagung</strong>.
          </>
        }
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
            Steuerausgleich ist der Alltagsbegriff, offiziell heißt es Arbeitnehmerveranlagung
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            <p>
              Relevant wird das Thema oft dann, wenn sich im Jahr etwas geändert
              hat oder wenn Ausgaben, Familien- oder Pflichtfälle dazukommen.
            </p>
            <p>
              Es kann freiwillige Fälle geben, in denen du dir Geld
              zurückholen möchtest, und es kann verpflichtende Konstellationen
              geben, die du offiziell erledigen musst.
            </p>
            <p>
              Die offizielle Einreichung läuft typischerweise über FinanzOnline
              oder über die vorgesehenen Formulare der zuständigen Stellen.
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          <CaveatBox title="Was diese Seite nicht berechnet">
            Keine verbindliche Gutschrift, keine Bescheidprognose und keine
            Prüfung aller Sonderfälle. Rechenpilot hilft dir hier beim
            Einordnen, nicht beim amtlichen Einreichen.
          </CaveatBox>

          <OfficialNextStep
            description="Wenn du deinen Fall offiziell angehen willst, starte über FinanzOnline oder prüfe die offizielle Übersicht zur Arbeitnehmerveranlagung. Dort findest du die formalen Schritte und Hinweise zum Verfahren."
            actions={[
              {
                href: atTaxSources.finanzonline.url,
                label: "FinanzOnline öffnen",
              },
              {
                href: atTaxSources.arbeitnehmerveranlagung.url,
                label: "Offizielle Übersicht lesen",
              },
            ]}
            note="Rechenpilot selbst reicht nichts ein und berechnet keine verbindliche Gutschrift."
          />
        </div>
      </section>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Typische Fälle"
          title="Wann ist das für dich relevant?"
          description="Das sind typische Situationen, in denen Menschen in Österreich beim Steuerausgleich genauer hinschauen."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relevanceCards.map((card) => (
            <article key={card.title} className="surface-card p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Vorgehen"
          title="So gehst du vor"
          description="Vier ruhige Schritte reichen für die erste Orientierung."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Schritt {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 surface-card p-6 sm:mt-12 sm:p-8">
        <SectionHeading
          eyebrow="Typische Missverständnisse"
          title="Was oft falsch eingeschätzt wird"
          description="Einige Missverständnisse tauchen beim Steuerausgleich besonders oft auf."
        />
        <div className="mt-6 grid gap-3">
          {misunderstandings.map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-border bg-background px-4 py-4 text-sm leading-6 text-foreground/85"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <SourceCard
          sources={[
            atTaxSources.arbeitnehmerveranlagung,
            atTaxSources.finanzonline,
          ]}
        />
      </div>

      <section className="mt-10 space-y-6 sm:mt-12">
        <SectionHeading
          eyebrow="Verwandte Seiten"
          title="Was als Nächstes oft hilfreich ist"
          description="Wenn du nach dem Guide direkt weiterrechnen oder andere Steuerfragen einordnen willst, sind diese Seiten meist der nächste Schritt."
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

      <div className="mt-8">
        <FAQ
          items={faqItems}
          description="Die wichtigsten Fragen rund um Steuerausgleich und Arbeitnehmerveranlagung in einer ruhigen Kurzfassung."
        />
      </div>

    </main>
  );
}
