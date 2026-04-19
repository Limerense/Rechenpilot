import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { legalPlaceholder } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise für die erste lokale Version von Rechenpilot mit klaren Platzhalterangaben.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <section className="surface-card p-7 sm:p-10">
        <span className="pill">Rechtliches</span>
        <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl">
          Datenschutz
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Diese Hinweise beschreiben die datensparsame erste Version von
          Rechenpilot. Sie sind als saubere Grundlage gedacht, ersetzen aber keine
          individuelle rechtliche Prüfung vor einer Veröffentlichung.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Verantwortliche Stelle
          </h2>
          <div className="mt-5 space-y-2 text-base leading-7 text-muted">
            <p>{legalPlaceholder.businessName}</p>
            <p>{legalPlaceholder.operator}</p>
            <p>{legalPlaceholder.addressLine1}</p>
            <p>{legalPlaceholder.addressLine2}</p>
            <p>E-Mail: {legalPlaceholder.email}</p>
          </div>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Datenverarbeitung in dieser Version
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            In der ersten Version gibt es keine Nutzerkonten, keine Datenbank,
            kein Bezahlsystem und keine Formularübermittlung. Die Rechner laufen
            direkt im Browser und verarbeiten die eingegebenen Werte lokal während
            deiner Nutzung.
          </p>
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Server-Logs und technische Daten
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Beim Ausliefern einer Website können technisch notwendige Logdaten
            anfallen, etwa IP-Adresse, Zeitstempel, Browserinformationen und
            angeforderte Dateien. Diese Angaben dienen dem sicheren Betrieb und
            sollten vor dem Produktiveinsatz an den tatsächlichen Hosting-Setup
            angepasst werden.
          </p>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Cookies und Tracking
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            In dieser ersten Version sind keine Analyse- oder Marketing-Tools
            vorgesehen. Falls später Tracking, Consent-Management oder externe
            Dienste hinzukommen, müssen diese Datenschutzhinweise entsprechend
            erweitert werden.
          </p>
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Deine Rechte
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Je nach tatsächlicher Datenverarbeitung können Betroffene Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Beschwerde bei einer Aufsichtsbehörde
            haben. Vor dem Livegang sollte dieser Abschnitt rechtlich auf den
            finalen Betrieb abgestimmt werden.
          </p>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Wichtiger Hinweis
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Diese Datenschutzseite ist eine solide Startfassung für das lokale
            Projekt. Sie ersetzt keine Rechtsberatung und muss vor einer
            öffentlichen Veröffentlichung mit echten Angaben und dem konkreten
            Hosting- und Tooling-Setup abgeglichen werden.
          </p>
        </article>
      </section>
    </main>
  );
}
