import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Prozentrechner: Prozentwert schnell berechnen",
  description:
    "Berechne online sofort, wie viel ein Prozentsatz von einem Grundwert ist - mit Rechenweg, Beispielen und FAQ.",
  path: "/prozentrechner",
  keywords: ["Prozentrechner", "Prozentwert berechnen", "25 Prozent von 200"],
});

const examples: CalculatorExample[] = [
  { label: "Beispiel 1", calculation: "25 % von 200", result: "50" },
  { label: "Beispiel 2", calculation: "7,5 % von 80", result: "6" },
  { label: "Beispiel 3", calculation: "19 % von 249", result: "47,31" },
];

const faqItems: FaqItem[] = [
  {
    question: "Was ist der Grundwert?",
    answer:
      "Der Grundwert ist die Ausgangszahl, von der du einen bestimmten Prozentsatz berechnest.",
  },
  {
    question: "Wann nutze ich einen Prozentrechner?",
    answer:
      "Zum Beispiel für Rabatte, Zinsen, Steuern, Trinkgeld oder Schulaufgaben mit Prozentwerten.",
  },
  {
    question: "Kann ich auch Kommazahlen eingeben?",
    answer:
      "Ja. Du kannst Zahlen wie 7,5 oder 249,99 direkt eingeben. Der Rechner verarbeitet sie sofort.",
  },
];

export default function PercentageCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Prozentrechner"
      intro="Mit dem Prozentrechner findest du in wenigen Sekunden heraus, wie viel ein bestimmter Prozentsatz von einem Grundwert ist. Die Eingabe ist bewusst schlicht gehalten, damit du auf Mobilgeräten genauso schnell ans Ziel kommst."
      calculator={<PercentageCalculator />}
      explanationTitle="So wird der Prozentwert berechnet"
      explanationText="Der Prozentwert zeigt dir, wie groß ein bestimmter Anteil eines Grundwerts ist. Dafür wird der Grundwert mit dem Prozentsatz multipliziert und anschließend durch 100 geteilt."
      formula="Grundwert × Prozentsatz / 100 = Prozentwert"
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["prozentrechner"]}
    />
  );
}
