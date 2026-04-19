type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[1.35rem] border border-border bg-white/90 px-4 py-4 text-sm font-semibold text-foreground shadow-[0_18px_50px_-36px_rgba(42,59,88,0.28)]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
