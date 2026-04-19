export type OfficialSource = {
  title: string;
  url: string;
  publisher: string;
  updatedAt?: string;
  summary: string;
};

export const atTaxSources = {
  arbeitnehmerveranlagung: {
    title: "Allgemeines zur Arbeitnehmerveranlagung",
    url: "https://www.oesterreich.gv.at/de/themen/arbeit_beruf_und_pension/arbeitnehmerveranlagung/Seite.340000",
    publisher: "oesterreich.gv.at / BMF",
    updatedAt: "1. Januar 2026",
    summary:
      "Offizielle Übersicht zu freiwilliger und verpflichtender Arbeitnehmerveranlagung, Fristen, typischen Fällen und FinanzOnline.",
  },
  finanzonline: {
    title: "FinanzOnline",
    url: "https://finanzonline.bmf.gv.at/fon/",
    publisher: "Bundesministerium für Finanzen",
    summary:
      "Offizieller Online-Einstieg für Erklärungen, Anträge und Bescheide im österreichischen Steuerbereich.",
  },
  einkommensteuerTarif: {
    title: "Steuertarif",
    url: "https://www.bmf.gv.at/themen/steuern/arbeitnehmerveranlagung/steuertarif-steuerabsetzbetraege/steuertarif-steuerabsetzbetraege.html",
    publisher: "Bundesministerium für Finanzen",
    updatedAt: "1. Jänner 2026",
    summary:
      "Offizielle Tarifstufen für die Einkommensteuer inklusive Grenzsteuersätzen für 2024, 2025 und 2026.",
  },
  einkommensbegriff: {
    title: "Einkommensbegriff",
    url: "https://www.bmf.gv.at/themen/steuern/fuer-unternehmen/einkommensteuer/einkommensbegriff.html",
    publisher: "Bundesministerium für Finanzen",
    summary:
      "Erklärt, wie sich das Einkommen zusammensetzt und dass dieses die Basis für die Einkommensteuer ist.",
  },
  umsatzsteuerSaetze: {
    title: "Steuersätze und Steuerbefreiungen der Umsatzsteuer",
    url: "https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/steuersaetze-und-steuerbefreiungen-der-umsatzsteuer.html",
    publisher: "USP / BMF",
    updatedAt: "1. Januar 2026",
    summary:
      "Offizielle Übersicht zu 20 %, 13 % und 10 % Umsatzsteuer sowie typischen Ausnahmen und Befreiungen.",
  },
  umsatzsteuervoranmeldung: {
    title: "Umsatzsteuervoranmeldung",
    url: "https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/weitere-informationen-zur-umsatzsteuer/entstehen-der-steuerschuld-und-pflichten/umsatzsteuervoranmeldung.html",
    publisher: "USP / BMF",
    updatedAt: "1. Januar 2026",
    summary:
      "Offizielle Informationen zur Umsatzsteuervoranmeldung, Fristen, FinanzOnline und zum Formular U30.",
  },
} as const satisfies Record<string, OfficialSource>;
