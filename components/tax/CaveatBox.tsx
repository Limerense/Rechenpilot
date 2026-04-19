import type { ReactNode } from "react";

type CaveatBoxProps = {
  title?: string;
  items?: string[];
  children?: ReactNode;
};

export function CaveatBox({
  title = "Wichtiger Hinweis",
  items,
  children,
}: CaveatBoxProps) {
  return (
    <section className="rounded-[1.45rem] border border-amber-200/70 bg-[linear-gradient(180deg,rgba(255,250,240,0.98),rgba(255,255,255,0.98))] p-5 shadow-[0_22px_60px_-44px_rgba(125,89,21,0.45)] sm:p-6">
      <span className="pill bg-white/90 text-foreground">Was decken wir nicht ab?</span>
      <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
        {title}
      </h2>

      {children ? (
        <div className="mt-4 text-sm leading-7 text-muted sm:text-base">{children}</div>
      ) : null}

      {items?.length ? (
        <ul className="mt-5 grid gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-[1.15rem] border border-amber-100 bg-white/90 px-4 py-3.5 text-sm leading-6 text-foreground/85"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
