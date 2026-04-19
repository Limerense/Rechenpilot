import Link from "next/link";

export function AustriaTaxHint() {
  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="space-y-3">
          <span className="pill">Österreich</span>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            Du bist in Österreich?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted">
            Sieh dir unsere Steuerhilfe Österreich an. Dort findest du
            verständliche Rechner und Guides zu Steuerausgleich,
            Einkommensteuer und Umsatzsteuer.
          </p>
        </div>
        <div>
          <Link href="/at/steuerhilfe" className="button-secondary">
            Steuerhilfe AT öffnen
          </Link>
        </div>
      </div>
    </section>
  );
}
