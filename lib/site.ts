export type CalculatorSlug =
  | "prozentrechner"
  | "rabattrechner"
  | "mwst-rechner"
  | "stundenlohn-rechner"
  | "notenrechner"
  | "sparziel-rechner";

export type CalculatorMeta = {
  slug: CalculatorSlug;
  href: `/${CalculatorSlug}`;
  name: string;
  category: string;
  description: string;
  shortExample: string;
  popular?: boolean;
};

export type PrimaryNavItem = {
  href: string;
  label: string;
  matchPrefixes?: string[];
};

export const siteConfig = {
  name: "Rechenpilot",
  claim: "Rechner, die dir sofort weiterhelfen",
  url: "https://rechenpilot.at",
  description:
    "Kostenlose Online-Rechner für Alltag, Schule und Geld - schnell, verständlich und ohne Anmeldung.",
  locale: "de-DE",
  launchDate: "2026-04-19",
} as const;

export const calculatorCatalog: CalculatorMeta[] = [
  {
    slug: "prozentrechner",
    href: "/prozentrechner",
    name: "Prozentrechner",
    category: "Alltag & Schule",
    description:
      "Berechne in Sekunden, wie viel ein bestimmter Prozentsatz von einem Grundwert ist.",
    shortExample: "25 % von 200 = 50",
    popular: true,
  },
  {
    slug: "rabattrechner",
    href: "/rabattrechner",
    name: "Rabattrechner",
    category: "Shopping",
    description:
      "Finde sofort heraus, wie hoch dein Rabattbetrag ist und was du am Ende zahlst.",
    shortExample: "20 % Rabatt auf 79,90 €",
    popular: true,
  },
  {
    slug: "mwst-rechner",
    href: "/mwst-rechner",
    name: "MwSt-Rechner",
    category: "Geld",
    description:
      "Rechne Netto und Brutto mit den häufig genutzten Steuersätzen 20 %, 10 % und 13 % um.",
    shortExample: "120 € netto = 144 € brutto",
    popular: true,
  },
  {
    slug: "stundenlohn-rechner",
    href: "/stundenlohn-rechner",
    name: "Stundenlohn-Rechner",
    category: "Beruf",
    description:
      "Leite aus Monatsgehalt und Wochenstunden einen groben Stundenlohn für den Alltag ab.",
    shortExample: "3.000 € / Monat bei 38,5 h",
  },
  {
    slug: "notenrechner",
    href: "/notenrechner",
    name: "Notenrechner",
    category: "Schule",
    description:
      "Berechne deinen Notenschnitt mit optionalen Gewichtungen für einzelne Leistungen.",
    shortExample: "Mehrere Noten mit Gewichtung",
  },
  {
    slug: "sparziel-rechner",
    href: "/sparziel-rechner",
    name: "Sparziel-Rechner",
    category: "Finanzen",
    description:
      "Sieh direkt, wie lange du mit deiner monatlichen Sparrate bis zu deinem Ziel brauchst.",
    shortExample: "10.000 € mit 250 € pro Monat",
    popular: true,
  },
];

export const primaryNav: PrimaryNavItem[] = [
  { href: "/", label: "Start" },
  {
    href: "/rechner",
    label: "Rechner",
    matchPrefixes: [
      "/rechner",
      ...calculatorCatalog.map((calculator) => calculator.href),
    ],
  },
  {
    href: "/at/steuerhilfe",
    label: "Steuerhilfe AT",
    matchPrefixes: ["/at/steuerhilfe", "/at/rechner"],
  },
];

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export const homepageBenefits = [
  {
    title: "Ohne Anmeldung",
    description:
      "Alle Rechner sind sofort nutzbar. Keine Registrierung, kein Warten, keine Hürden.",
  },
  {
    title: "Sofort im Browser",
    description:
      "Die Ergebnisse werden direkt während der Eingabe berechnet - schnell und ohne Umwege.",
  },
  {
    title: "Verständliche Ergebnisse",
    description:
      "Klare Formeln, kurze Erklärungen und Beispiele helfen dir, das Ergebnis einzuordnen.",
  },
  {
    title: "Mobil optimiert",
    description:
      "Die Oberflächen sind für Smartphone, Tablet und Desktop ruhig und gut lesbar gestaltet.",
  },
] as const;

export const homepageExamples = [
  {
    href: "/rabattrechner",
    title: "Rabatt berechnen",
    description: "20 % Rabatt von 79,90 € in wenigen Sekunden durchrechnen.",
    ctaLabel: "Zum Rabattrechner",
  },
  {
    href: "/mwst-rechner",
    title: "MwSt umrechnen",
    description: "Netto und Brutto mit 20 %, 13 % oder 10 % ruhig und klar vergleichen.",
    ctaLabel: "Zum MwSt-Rechner",
  },
  {
    href: "/sparziel-rechner",
    title: "Sparziel planen",
    description: "Wie viel pro Monat sparen für 10.000 €? Direkt mit grober Zeitangabe.",
    ctaLabel: "Zum Sparziel-Rechner",
  },
] as const;

export const popularCalculatorSlugs: CalculatorSlug[] = [
  "prozentrechner",
  "rabattrechner",
  "sparziel-rechner",
];

export const relatedCalculatorMap: Record<CalculatorSlug, CalculatorSlug[]> = {
  "prozentrechner": ["rabattrechner", "mwst-rechner", "sparziel-rechner"],
  "rabattrechner": ["prozentrechner", "mwst-rechner", "sparziel-rechner"],
  "mwst-rechner": ["rabattrechner", "prozentrechner", "stundenlohn-rechner"],
  "stundenlohn-rechner": [
    "sparziel-rechner",
    "mwst-rechner",
    "prozentrechner",
  ],
  "notenrechner": ["prozentrechner", "sparziel-rechner", "rabattrechner"],
  "sparziel-rechner": [
    "stundenlohn-rechner",
    "prozentrechner",
    "rabattrechner",
  ],
};

export const legalPlaceholder = {
  operator: "Max Mustermann",
  businessName: "Rechenpilot",
  addressLine1: "Musterstraße 12",
  addressLine2: "1010 Wien",
  email: "hallo@example.com",
  phone: "+43 000 000000",
} as const;

export function getCalculatorBySlug(slug: CalculatorSlug) {
  return calculatorCatalog.find((calculator) => calculator.slug === slug);
}

export function getCalculatorsBySlugs(slugs: CalculatorSlug[]) {
  return slugs
    .map((slug) => getCalculatorBySlug(slug))
    .filter((calculator): calculator is CalculatorMeta => Boolean(calculator));
}
