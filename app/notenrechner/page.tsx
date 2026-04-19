import type { Metadata } from "next";

import type { FaqItem } from "@/components/FAQ";
import {
  CalculatorPageLayout,
  type CalculatorExample,
} from "@/components/CalculatorPageLayout";
import { GradeCalculator } from "@/components/calculators/GradeCalculator";
import { buildMetadata } from "@/lib/seo";
import { relatedCalculatorMap } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Notenrechner: Durchschnitt mit Gewichtung berechnen",
  description:
    "Berechne deinen Notendurchschnitt mit mehreren Eingaben und optionalen Gewichtungen - sauber, klar und mobilfreundlich.",
  path: "/notenrechner",
  keywords: ["Notenrechner", "Notenschnitt berechnen", "gewichteter Durchschnitt Noten"],
});

const examples: CalculatorExample[] = [
  {
    label: "Beispiel 1",
    calculation: "Noten 1, 2, 3 mit Gewichtung 2, 1, 1",
    result: "Durchschnitt 1,75",
  },
  {
    label: "Beispiel 2",
    calculation: "Noten 2, 3, 2 mit Gewichtung 1, 3, 2",
    result: "Durchschnitt 2,50",
  },
  {
    label: "Beispiel 3",
    calculation: "Noten 1, 2, 2, 3 ohne Gewichtung",
    result: "Durchschnitt 2,00",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Muss ich für jede Note eine Gewichtung angeben?",
    answer:
      "Nein. Wenn das Feld leer bleibt, zählt die Note automatisch mit Gewicht 1.",
  },
  {
    question: "Kann ich beliebig viele Zeilen hinzufügen?",
    answer:
      "Ja. Du kannst jederzeit weitere Einträge ergänzen oder einzelne wieder löschen.",
  },
  {
    question: "Funktioniert der Rechner mit unterschiedlichen Notenskalen?",
    answer:
      "Ja. Solange du deine Noten als Zahlen eingibst, funktioniert die Berechnung unabhängig davon, ob du zum Beispiel mit 1 bis 5 oder 1 bis 6 arbeitest.",
  },
];

export default function GradeCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Notenrechner"
      intro="Der Notenrechner eignet sich für schnelle Durchschnittsberechnungen mit mehreren Prüfungen, Tests oder Mitarbeitsnoten. Gewichtungen sind optional und können pro Zeile direkt ergänzt werden."
      calculator={<GradeCalculator />}
      explanationTitle="So entsteht der gewichtete Durchschnitt"
      explanationText="Jede Note wird mit ihrer Gewichtung multipliziert. Anschließend werden alle gewichteten Werte addiert und durch die Summe aller Gewichte geteilt. Ohne eigene Gewichtung zählt ein Eintrag ganz normal mit 1."
      formula="(Note × Gewichtung + ...) / Summe aller Gewichtungen = Durchschnitt"
      examples={examples}
      faqItems={faqItems}
      relatedSlugs={relatedCalculatorMap["notenrechner"]}
    />
  );
}
