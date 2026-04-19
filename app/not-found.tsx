import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex-1 py-12 sm:py-16">
      <section className="surface-card mx-auto max-w-3xl p-8 text-center sm:p-10">
        <span className="pill">404</span>
        <h1 className="mt-5 font-display text-4xl leading-tight tracking-[-0.05em] text-foreground sm:text-5xl">
          Diese Seite gibt es hier nicht.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Vielleicht ist der Link veraltet oder du wolltest direkt zu einem
          Rechner. Über die Startseite oder die Rechnerübersicht kommst du ohne
          Umweg wieder an den richtigen Einstieg.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary">
            Zur Startseite
          </Link>
          <Link href="/rechner" className="button-secondary">
            Rechner ansehen
          </Link>
        </div>
      </section>
    </main>
  );
}
