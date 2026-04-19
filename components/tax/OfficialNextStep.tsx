import Link from "next/link";

type OfficialAction = {
  href: string;
  label: string;
};

type OfficialNextStepProps = {
  title?: string;
  description: string;
  actions: OfficialAction[];
  note?: string;
};

export function OfficialNextStep({
  title = "Nächster offizieller Schritt",
  description,
  actions,
  note,
}: OfficialNextStepProps) {
  return (
    <section className="rounded-[1.55rem] border border-accent/20 bg-[linear-gradient(180deg,rgba(244,249,255,0.96),rgba(255,255,255,0.98))] p-5 shadow-[0_24px_70px_-42px_rgba(46,91,158,0.38)] sm:p-6">
      <div className="space-y-3">
        <span className="pill bg-white/90 text-accent">Nächster offizieller Schritt</span>
        <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {actions.map((action, index) => (
          <Link
            key={action.href}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={index === 0 ? "button-primary" : "button-secondary"}
          >
            {action.label}
          </Link>
        ))}
      </div>

      {note ? <p className="mt-5 text-sm leading-6 text-muted">{note}</p> : null}
    </section>
  );
}
