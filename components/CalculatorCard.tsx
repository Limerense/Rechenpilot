import Link from "next/link";

import type { CalculatorMeta } from "@/lib/site";

type CalculatorCardProps = {
  calculator: CalculatorMeta;
  compact?: boolean;
};

export function CalculatorCard({
  calculator,
  compact = false,
}: CalculatorCardProps) {
  return (
    <Link
      href={calculator.href}
      className={`surface-card group flex h-full min-h-[17.5rem] flex-col gap-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_-42px_rgba(42,59,88,0.35)] ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-7"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="pill">{calculator.category}</span>
        {calculator.popular ? (
          <span className="pill bg-accent-soft text-accent">Beliebt</span>
        ) : null}
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
          {calculator.name}
        </h3>
        <p className="text-sm leading-6 text-muted sm:text-base">
          {calculator.description}
        </p>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-border/70 pt-4">
        <p className="text-sm leading-6 text-foreground/70">
          {calculator.shortExample}
        </p>
        <span className="shrink-0 text-sm font-semibold text-accent">
          Öffnen
        </span>
      </div>
    </Link>
  );
}
