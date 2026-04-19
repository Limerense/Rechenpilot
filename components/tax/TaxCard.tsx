import Link from "next/link";

type TaxCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export function TaxCard({
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "Mehr erfahren",
}: TaxCardProps) {
  return (
    <Link
      href={href}
      className="surface-card group flex h-full min-h-[17.5rem] flex-col gap-5 p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_-42px_rgba(42,59,88,0.35)] sm:p-7"
    >
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-6 text-muted sm:text-base">{description}</p>
      </div>
      <span className="mt-auto border-t border-border/70 pt-4 text-sm font-semibold text-accent">
        {ctaLabel}
      </span>
    </Link>
  );
}
