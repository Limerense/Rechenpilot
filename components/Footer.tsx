import Link from "next/link";

import { calculatorCatalog, footerLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const infoLinks = [
    { href: "/at/steuerhilfe", label: "Steuerhilfe AT" },
    ...footerLinks,
  ];

  const footerBadges = ["Kostenlos", "Ohne Anmeldung", "Direkt im Browser"];

  return (
    <footer className="mt-12 pb-7 pt-2 sm:mt-16 sm:pb-8">
      <div className="page-shell">
        <div className="border-t border-border/80 pt-7 sm:pt-8">
          <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.8fr)] lg:gap-x-12">
            <div className="space-y-3 lg:pr-6">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#5e8cdc,#8cb4ff)] text-base font-semibold text-white shadow-[0_12px_28px_-16px_rgba(46,91,158,0.65)]">
                  R
                </span>
                <div className="space-y-1">
                  <p className="text-base font-semibold tracking-[-0.03em] text-foreground">
                    Rechenpilot
                  </p>
                  <p className="text-sm text-muted">
                    Schnell rechnen, klar verstehen.
                  </p>
                </div>
              </Link>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Rechner
              </h2>
              <ul className="grid gap-2.5">
                {calculatorCatalog.map((calculator) => (
                  <li key={calculator.slug}>
                    <Link
                      href={calculator.href}
                      className="text-sm text-foreground/78 transition hover:text-accent"
                    >
                      {calculator.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Info
              </h2>
              <ul className="grid gap-2.5">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/78 transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border/65 pt-4">
            {footerBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/75 bg-white/72 px-3 py-1 text-[0.72rem] font-medium text-muted"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-4 border-t border-border/55 pt-4 text-center">
            <p className="text-sm text-muted">© 2026 {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
