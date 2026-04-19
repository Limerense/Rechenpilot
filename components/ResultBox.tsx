import type { ReactNode } from "react";

type ResultBoxProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function ResultBox({
  eyebrow = "Ergebnis",
  title,
  description,
  children,
}: ResultBoxProps) {
  return (
    <div
      className="rounded-[1.5rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(244,249,255,0.98),rgba(255,255,255,0.98))] p-5 shadow-[0_20px_60px_-38px_rgba(46,91,158,0.45)]"
      role="status"
      aria-live="polite"
    >
      <div className="mb-4 space-y-2">
        <span className="pill bg-white/90 text-accent">{eyebrow}</span>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h3>
        {description ? (
          <p className="text-sm leading-6 text-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
