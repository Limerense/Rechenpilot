import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { VatCalculator } from "@/components/calculators/VatCalculator";
import { AustriaTaxHint } from "@/components/tax/AustriaTaxHint";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "MwSt-Rechner: Netto und Brutto umrechnen",
  description:
    "Rechne Netto zu Brutto oder Brutto zu Netto mit 20 %, 10 % oder 13 % Mehrwertsteuer - inklusive Steuerbetrag.",
  path: "/mwst-rechner",
  keywords: ["MwSt Rechner", "Netto Brutto Rechner", "Mehrwertsteuer 20 Prozent"],
});

const examples: CalculatorExample[] = [
  {
    label: "Beispiel 1",
    calculation: "120 € netto bei 20 %",
    result: "24 € Steuer, 144 € brutto",
  },
  {
    label: "Beispiel 2",
    calculation: "45 € brutto bei 10 %",
    result: "40,91 € netto, 4,09 € Steuer",
  },
  {
    label: "Beispiel 3",
    calculation: "230 € netto bei 13 %",
    result: "29,90 € Steuer, 259,90 € brutto",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Welche Steuersätze sind verfügbar?",
    answer:
      "Die erste Version bietet die Auswahl 20 %, 10 % und 13 %, damit häufige Fälle schnell berechnet werden können.",
  },
  {
    question: "Kann ich zwischen Netto und Brutto wechseln?",
    answer:
      "Ja. Du kannst direkt zwischen den Modi Netto -> Brutto und Brutto -> Netto umschalten.",
  },
  {
    question: "Wird auch der Steuerbetrag separat angezeigt?",
    answer:
      "Ja. Neben Netto und Brutto zeigt dir der Rechner den enthaltenen beziehungsweise aufzuschlagenden Steuerbetrag.",
  },
];

export default function VatCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="MwSt-Rechner"
      intro="Mit dem MwSt-Rechner wandelst du Netto- und Bruttobeträge schnell ineinander um. Die Oberfläche bleibt bewusst einfach: Modus wählen, Satz auswählen, Betrag eingeben - das Ergebnis ist direkt sichtbar."
      calculator={<VatCalculator />}
      explanationTitle="So funktioniert die Umrechnung"
      explanationText="Beim Modus Netto -> Brutto wird der Steuerbetrag auf den Nettobetrag aufgeschlagen. Beim Modus Brutto -> Netto wird die enthaltene Mehrwertsteuer herausgerechnet, damit Netto und Steueranteil separat sichtbar sind."
      formula="Netto -> Brutto: Netto + (Netto × MwSt); Brutto -> Netto: Brutto / (1 + MwSt)"
      note="Hinweis: Die bereitgestellten Sätze 20 %, 10 % und 13 % sind bewusst fest hinterlegt, damit typische Standardfälle schnell gerechnet werden können."
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["mwst-rechner"]}
      footerContent={<AustriaTaxHint />}
    />
  );
}
