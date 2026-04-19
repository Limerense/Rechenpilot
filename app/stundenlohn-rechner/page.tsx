import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { HourlyWageCalculator } from "@/components/calculators/HourlyWageCalculator";
import { AustriaTaxHint } from "@/components/tax/AustriaTaxHint";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Stundenlohn-Rechner: Monatsgehalt in Stundenlohn umrechnen",
  description:
    "Berechne aus Monatsgehalt und Wochenstunden einen groben Stundenlohn - schnell, mobil optimiert und ohne Anmeldung.",
  path: "/stundenlohn-rechner",
  keywords: ["Stundenlohn Rechner", "Monatsgehalt Stundenlohn", "Wochenstunden berechnen"],
});

const examples: CalculatorExample[] = [
  {
    label: "Beispiel 1",
    calculation: "3.000 € Monatsgehalt bei 38,5 Wochenstunden",
    result: "ca. 17,99 € pro Stunde",
  },
  {
    label: "Beispiel 2",
    calculation: "2.500 € Monatsgehalt bei 40 Wochenstunden",
    result: "ca. 14,43 € pro Stunde",
  },
  {
    label: "Beispiel 3",
    calculation: "4.200 € Monatsgehalt bei 35 Wochenstunden",
    result: "ca. 27,71 € pro Stunde",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Wie genau ist die Berechnung?",
    answer:
      "Die Berechnung ist bewusst vereinfacht. Sie nutzt 4,33 Wochen pro Monat und liefert damit einen guten Richtwert für den Alltag.",
  },
  {
    question: "Sind Zuschläge oder Sonderzahlungen enthalten?",
    answer:
      "Nein. Der Rechner berücksichtigt nur Monatsgehalt und Wochenstunden, keine Zulagen, Boni oder Sonderzahlungen.",
  },
  {
    question: "Wann ist so ein Richtwert hilfreich?",
    answer:
      "Zum Beispiel für Gehaltsvergleiche, Gespräche über Arbeitszeit oder ein besseres Gefühl für den eigenen Stundenwert.",
  },
];

export default function HourlyWageCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Stundenlohn-Rechner"
      intro="Mit diesem Rechner leitest du aus deinem Monatsgehalt und deinen Wochenstunden einen groben Stundenlohn ab. Das ist hilfreich für schnelle Vergleiche, ersetzt aber keine detaillierte Lohnabrechnung."
      calculator={<HourlyWageCalculator />}
      explanationTitle="So wird der Stundenlohn angenähert"
      explanationText="Zuerst werden die Wochenstunden mit 4,33 multipliziert, um auf durchschnittliche Monatsstunden zu kommen. Danach wird das Monatsgehalt durch diese Monatsstunden geteilt. Das Ergebnis ist ein praxistauglicher Richtwert."
      formula="Wochenstunden × 4,33 = Monatsstunden; Monatsgehalt / Monatsstunden = Stundenlohn"
      note="Hinweis: Der Rechner liefert bewusst eine vereinfachte Näherung und berücksichtigt keine Überstunden, Zuschläge oder Sonderzahlungen."
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["stundenlohn-rechner"]}
      footerContent={<AustriaTaxHint />}
    />
  );
}
