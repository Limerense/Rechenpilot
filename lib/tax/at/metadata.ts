import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export type AtTaxPageKey =
  | "steuerhilfeHub"
  | "arbeitnehmerveranlagung"
  | "einkommensteuer"
  | "umsatzsteuer";

export type AtTaxPageLink = {
  key: AtTaxPageKey;
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  ctaLabel: string;
};

export const atTaxPages: Record<AtTaxPageKey, AtTaxPageLink> = {
  steuerhilfeHub: {
    key: "steuerhilfeHub",
    href: "/at/steuerhilfe",
    title: "Steuerhilfe Österreich",
    description:
      "Verständliche Rechner und Guides für Steuerausgleich, Einkommensteuer und Umsatzsteuer in Österreich.",
    eyebrow: "Steuerhilfe AT",
    ctaLabel: "Zum Überblick",
  },
  arbeitnehmerveranlagung: {
    key: "arbeitnehmerveranlagung",
    href: "/at/steuerhilfe/arbeitnehmerveranlagung",
    title: "Steuerausgleich verstehen",
    description:
      "Alltagssprachlich Steuerausgleich, fachlich Arbeitnehmerveranlagung: wann das Thema relevant wird und wie du offiziell weitergehst.",
    eyebrow: "Angestellt in Österreich",
    ctaLabel: "Guide öffnen",
  },
  einkommensteuer: {
    key: "einkommensteuer",
    href: "/at/rechner/einkommensteuer",
    title: "Einkommensteuer-Rechner",
    description:
      "Einfacher Tarifrechner für Österreich mit Steuerjahr, Grenzsteuersatz und Aufschlüsselung nach Tarifstufen.",
    eyebrow: "Tarif orientiert verstehen",
    ctaLabel: "Rechner öffnen",
  },
  umsatzsteuer: {
    key: "umsatzsteuer",
    href: "/at/rechner/umsatzsteuer",
    title: "Umsatzsteuer-Rechner",
    description:
      "Netto und Brutto für Österreich mit 20 %, 13 % und 10 % schnell umrechnen - ohne Branchenlogik und ohne Spezialfälle.",
    eyebrow: "Standardfall USt",
    ctaLabel: "Rechner öffnen",
  },
};

export const atTaxHomepageCards = [
  {
    title: "Steuerausgleich verstehen",
    description:
      "Wann sich die Arbeitnehmerveranlagung lohnt, was freiwillig ist und wo der offizielle Antrag startet.",
    href: atTaxPages.arbeitnehmerveranlagung.href,
    eyebrow: "Neu in Österreich",
    ctaLabel: "Zum Guide",
  },
  {
    title: "Einkommensteuer-Rechner",
    description:
      "Tarifstufen für 2024, 2025 und 2026 in einer ruhigen, verständlichen Darstellung.",
    href: atTaxPages.einkommensteuer.href,
    eyebrow: "Tarifstufen",
    ctaLabel: "Zum Rechner",
  },
  {
    title: "Umsatzsteuer-Rechner",
    description:
      "Netto, Umsatzsteuer und Brutto für 20 %, 13 % und 10 % im einfachen österreichischen Standardfall.",
    href: atTaxPages.umsatzsteuer.href,
    eyebrow: "USt in Österreich",
    ctaLabel: "Zum Rechner",
  },
] as const;

export const atTaxHubCards = [
  {
    title: "Ich arbeite angestellt",
    description:
      "Steuerausgleich und Arbeitnehmerveranlagung für typische Alltagssituationen wie Jobwechsel, Werbungskosten oder Familie.",
    href: atTaxPages.arbeitnehmerveranlagung.href,
    eyebrow: "Für Arbeitnehmer:innen",
    ctaLabel: "Steuerausgleich ansehen",
  },
  {
    title: "Einkommensteuer verstehen",
    description:
      "Sieh dir an, wie sich die Einkommensteuer nach Tarifstufen zusammensetzt und welcher Grenzsteuersatz gerade gilt.",
    href: atTaxPages.einkommensteuer.href,
    eyebrow: "Tarifrechner",
    ctaLabel: "Zum Einkommensteuer-Rechner",
  },
  {
    title: "Umsatzsteuer berechnen",
    description:
      "Rechne Netto und Brutto für die österreichischen Sätze 20 %, 13 % und 10 % im Standardfall um.",
    href: atTaxPages.umsatzsteuer.href,
    eyebrow: "Standardfall",
    ctaLabel: "Zum Umsatzsteuer-Rechner",
  },
] as const;

export const atTaxPopularEntries = [
  {
    title: "Steuerausgleich bei Jobwechsel oder mehreren Bezügen",
    description:
      "Der offizielle Guide erklärt, warum schwankende Bezüge, Arbeitgeberwechsel oder mehrere lohnsteuerpflichtige Einkünfte relevant sein können.",
    href: atTaxPages.arbeitnehmerveranlagung.href,
    eyebrow: "Beliebter Einstieg",
    ctaLabel: "Guide lesen",
  },
  {
    title: "Einkommensteuer ohne Sonderfälle grob einschätzen",
    description:
      "Wenn du dein zu versteuerndes Jahreseinkommen kennst, zeigt der Rechner die Tarifsteuer und den aktuellen Grenzsteuersatz.",
    href: atTaxPages.einkommensteuer.href,
    eyebrow: "Schnelle Orientierung",
    ctaLabel: "Tarif prüfen",
  },
  {
    title: "Umsatzsteuer im einfachen österreichischen Standardfall rechnen",
    description:
      "Der Rechner hilft dir bei Netto, Steuer und Brutto, bevor du den Fall mit offiziellen Vorgaben oder der UVA abgleichst.",
    href: atTaxPages.umsatzsteuer.href,
    eyebrow: "Für Selbstständige & Unternehmen",
    ctaLabel: "USt rechnen",
  },
] as const;

export const atTaxSitemapRoutes = [
  atTaxPages.steuerhilfeHub.href,
  atTaxPages.arbeitnehmerveranlagung.href,
  atTaxPages.einkommensteuer.href,
  atTaxPages.umsatzsteuer.href,
] as const;

export function getAtTaxPages(keys: AtTaxPageKey[]) {
  return keys.map((key) => atTaxPages[key]);
}

type AtTaxMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildAtTaxMetadata({
  title,
  description,
  path,
  keywords = [],
}: AtTaxMetadataInput): Metadata {
  return buildMetadata({
    title,
    description,
    path,
    locale: "de_AT",
    keywords: [
      "Steuerhilfe Österreich",
      "Österreich Steuer",
      "Rechenpilot",
      ...keywords,
    ],
  });
}
