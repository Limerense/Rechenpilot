import type { ReactNode } from "react";

type TaxIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  detail?: ReactNode;
  badges?: string[];
};

export function TaxIntro({
  eyebrow = "Steuerhilfe Österreich",
  title,
  description,
  detail,
  badges = ["Nur offizielle Quellen", "Keine Registrierung", "Keine Steuerberatung"],
}: TaxIntroProps) {
  return (
    <section className="space-y-6 pt-4">
      <span className="pill">{eyebrow}</span>
      <div className="space-y-4">
        <h1 className="max-w-4xl font-display text-4xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted">{description}</p>
        {detail ? (
          <div className="max-w-3xl text-base leading-7 text-foreground/78">
            {detail}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <span key={badge} className="pill">
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
