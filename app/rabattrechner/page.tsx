import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { DiscountCalculator } from "@/components/calculators/DiscountCalculator";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Rabattrechner: Rabatt und Endpreis berechnen",
  description:
    "Berechne online Rabattbetrag und Endpreis für Sale, Shopping und Angebote - schnell, klar und ohne Anmeldung.",
  path: "/rabattrechner",
  keywords: ["Rabattrechner", "Endpreis berechnen", "Sale Rabatt"],
});

const examples: CalculatorExample[] = [
  {
    label: "Beispiel 1",
    calculation: "20 % Rabatt auf 79,90 €",
    result: "15,98 € Rabatt, Endpreis 63,92 €",
  },
  {
    label: "Beispiel 2",
    calculation: "15 % Rabatt auf 120 €",
    result: "18 € Rabatt, Endpreis 102 €",
  },
  {
    label: "Beispiel 3",
    calculation: "35 % Rabatt auf 129 €",
    result: "45,15 € Rabatt, Endpreis 83,85 €",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Was zeigt mir der Rabattrechner?",
    answer:
      "Er zeigt dir sowohl den absoluten Rabattbetrag als auch den reduzierten Endpreis.",
  },
  {
    question: "Ist der Rechner nur für Shopping gedacht?",
    answer:
      "Nein. Du kannst ihn auch für Angebote, Sonderaktionen oder interne Preisabschläge nutzen.",
  },
  {
    question: "Warum ist der Endpreis wichtig?",
    answer:
      "Der prozentuale Rabatt klingt oft groß. Entscheidend für den Vergleich ist aber der tatsächliche Preis nach dem Abzug.",
  },
];

export default function DiscountCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Rabattrechner"
      intro="Mit dem Rabattrechner siehst du sofort, wie hoch dein Nachlass in Euro ist und was am Ende wirklich zu zahlen bleibt. Ideal für Sale-Preise, Aktionscodes und schnelle Vergleiche beim Einkauf."
      calculator={<DiscountCalculator />}
      explanationTitle="So berechnet sich der Rabatt"
      explanationText="Zuerst wird der Rabattbetrag als Prozentsatz des Originalpreises berechnet. Dieser Betrag wird anschließend vom Originalpreis abgezogen. So erhältst du den tatsächlichen Endpreis."
      formula="Originalpreis × Rabatt / 100 = Rabattbetrag; Originalpreis - Rabattbetrag = Endpreis"
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["rabattrechner"]}
    />
  );
}
