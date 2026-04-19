import Link from "next/link";

import type { OfficialSource } from "@/lib/tax/at/sources";

type SourceCardProps = {
  sources: OfficialSource[];
  title?: string;
  description?: string;
};

export function SourceCard({
  sources,
  title = "Fachliche Grundlage",
  description = "Diese Seite stützt sich bewusst auf öffentlich zugängliche offizielle österreichische Stellen.",
}: SourceCardProps) {
  return (
    <section className="surface-card p-6 sm:p-8">
      <div className="space-y-3">
        <span className="pill">Nur offizielle Quellen</span>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h2>
        <p className="max-w-3xl text-base leading-7 text-muted">{description}</p>
      </div>

      <div className="mt-6 grid gap-4">
        {sources.map((source) => (
          <Link
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.35rem] border border-border bg-background px-5 py-5 transition hover:border-accent/35 hover:bg-white"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill">{source.publisher}</span>
              {source.updatedAt ? (
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Stand: {source.updatedAt}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-foreground">
              {source.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{source.summary}</p>
            <p className="mt-4 text-sm font-semibold text-accent">
              Offizielle Quelle öffnen
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
