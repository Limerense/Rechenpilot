import { CalculatorCard } from "@/components/CalculatorCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { CalculatorSlug } from "@/lib/site";
import { getCalculatorsBySlugs } from "@/lib/site";

type RelatedCalculatorsProps = {
  slugs: CalculatorSlug[];
};

export function RelatedCalculators({ slugs }: RelatedCalculatorsProps) {
  const calculators = getCalculatorsBySlugs(slugs);

  if (calculators.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Mehr entdecken"
        title="Verwandte Rechner"
        description="Wenn du schon hier bist, findest du diese Rechner meist gleich mit nützlich."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.slug}
            calculator={calculator}
            compact
          />
        ))}
      </div>
    </section>
  );
}
