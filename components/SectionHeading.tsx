import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div
      className={`flex flex-col gap-3 ${alignment} ${
        action ? "sm:flex-row sm:items-end sm:justify-between" : ""
      }`}
    >
      <div className={`flex flex-col gap-3 ${alignment}`}>
        {eyebrow ? <span className="pill w-fit">{eyebrow}</span> : null}
        <div className="space-y-3">
          <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
