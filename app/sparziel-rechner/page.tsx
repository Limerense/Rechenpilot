import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { SavingsGoalCalculator } from "@/components/calculators/SavingsGoalCalculator";
import { AustriaTaxHint } from "@/components/tax/AustriaTaxHint";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sparziel-Rechner: Monate bis zum Ziel berechnen",
  description:
    "Berechne online, wie viele Monate du mit deiner monatlichen Sparrate bis zu deinem Sparziel brauchst - inklusive Restmonat.",
  path: "/sparziel-rechner",
  keywords: ["Sparziel Rechner", "Monatlich sparen", "Wie lange bis 10000 Euro"],
});

const examples: CalculatorExample[] = [
  {
    label: "Beispiel 1",
    calculation: "10.000 € Ziel bei 250 € pro Monat",
    result: "40 Monate bzw. 3 Jahre und 4 Monate",
  },
  {
    label: "Beispiel 2",
    calculation: "5.000 € Ziel bei 150 € pro Monat",
    result: "33 volle Monate plus ein Restmonat mit 50 €",
  },
  {
    label: "Beispiel 3",
    calculation: "1.200 € Ziel bei 100 € pro Monat",
    result: "12 Monate",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Was bedeutet Restmonat?",
    answer:
      "Wenn dein Ziel nicht exakt durch die monatliche Rate aufgeht, zeigt der Rechner an, was im letzten Monat noch fehlt.",
  },
  {
    question: "Ist das eine exakte Finanzplanung?",
    answer:
      "Nein. Der Rechner betrachtet nur Zielsumme und konstante Monatsrate. Zinsen, Renditen oder unregelmäßige Einzahlungen sind nicht enthalten.",
  },
  {
    question: "Wann ist der Rechner besonders hilfreich?",
    answer:
      "Zum Beispiel für Notgroschen, Urlaub, Rücklagen, größere Anschaffungen oder ein erstes Sparziel auf dem Weg zu 10.000 €.",
  },
];

export default function SavingsGoalCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Sparziel-Rechner"
      intro="Mit dem Sparziel-Rechner siehst du direkt, wie lange du mit deiner monatlichen Sparrate bis zu einer gewünschten Summe brauchst. Das Ergebnis bleibt bewusst leicht verständlich und alltagstauglich."
      calculator={<SavingsGoalCalculator />}
      explanationTitle="So wird die Sparzeit berechnet"
      explanationText="Die Zielsumme wird durch die monatliche Sparrate geteilt. Wenn keine ganze Monatszahl herauskommt, entsteht ein Restbetrag für den letzten Monat. Daraus ergibt sich eine grobe Zeitdarstellung in Monaten beziehungsweise Jahren und Monaten."
      formula="Sparziel / monatliche Sparrate = benötigte Monate"
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["sparziel-rechner"]}
      footerContent={<AustriaTaxHint />}
    />
  );
}
