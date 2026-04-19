import type { ReactNode } from "react";

import { SectionHeading } from "@/components/SectionHeading";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FAQProps = {
  title?: string;
  description?: string;
  items: FaqItem[];
};

export function FAQ({
  title = "Häufige Fragen",
  description = "Kurze Antworten auf typische Fragen rund um den Rechner.",
  items,
}: FAQProps) {
  return (
    <section className="surface-card p-6 sm:p-8">
      <SectionHeading title={title} description={description} />
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.35rem] border border-border bg-white px-5 py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
              <span>{item.question}</span>
              <span className="text-xl leading-none text-accent transition group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pt-3 text-sm leading-7 text-muted sm:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
