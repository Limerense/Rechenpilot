import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { legalPlaceholder } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description:
    "Impressum von Rechenpilot mit Platzhalterangaben für die erste lokale Version.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <main className="page-shell flex-1 py-8 sm:py-12">
      <section className="surface-card p-7 sm:p-10">
        <span className="pill">Rechtliches</span>
        <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl">
          Impressum
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Diese Seite enthält bewusst Platzhalter für die erste lokale Version.
          Vor einer Veröffentlichung müssen die echten Betreiber- und
          Kontaktdaten eingetragen werden.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Anbieter gemäß § 5 TMG
          </h2>
          <div className="mt-5 space-y-2 text-base leading-7 text-muted">
            <p>{legalPlaceholder.businessName}</p>
            <p>{legalPlaceholder.operator}</p>
            <p>{legalPlaceholder.addressLine1}</p>
            <p>{legalPlaceholder.addressLine2}</p>
          </div>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Kontakt
          </h2>
          <div className="mt-5 space-y-2 text-base leading-7 text-muted">
            <p>E-Mail: {legalPlaceholder.email}</p>
            <p>Telefon: {legalPlaceholder.phone}</p>
            <p>Verantwortlich für den Inhalt: {legalPlaceholder.operator}</p>
          </div>
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Haftung für Inhalte
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch
            keine Gewähr übernommen. Diese Seite dient in der lokalen ersten
            Version als Platzhalter und muss vor dem Livegang rechtlich geprüft
            und angepasst werden.
          </p>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Haftung für Links
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Sofern später externe Links eingebunden werden, sind für deren
            Inhalte ausschließlich die jeweiligen Betreiber verantwortlich. Zum
            Zeitpunkt der Erstellung dieser ersten Version werden keine Gewähr und
            keine Rechtsberatung übernommen.
          </p>
        </article>
      </section>
    </main>
  );
}
