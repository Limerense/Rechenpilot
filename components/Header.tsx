"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNav, type PrimaryNavItem } from "@/lib/site";

function isActivePath(pathname: string, item: PrimaryNavItem) {
  if (item.href === "/") {
    return pathname === "/";
  }

  const matchers = item.matchPrefixes?.length ? item.matchPrefixes : [item.href];

  return matchers.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`),
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <div className="page-shell">
        <div className="rounded-[1.6rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_20px_50px_-34px_rgba(42,59,88,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="Zur Startseite von Rechenpilot"
              className="flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#5e8cdc,#8cb4ff)] text-lg font-semibold text-white shadow-[0_16px_36px_-18px_rgba(46,91,158,0.7)]">
                R
              </span>
              <div>
                <p className="text-base font-semibold tracking-[-0.03em] text-foreground">
                  Rechenpilot
                </p>
                <p className="hidden text-xs text-muted sm:block">
                  Schnell rechnen, klar verstehen.
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
              {primaryNav.map((item) => {
                const active = isActivePath(pathname, item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-accent text-white shadow-[0_14px_32px_-18px_rgba(46,91,158,0.8)]"
                        : "text-foreground/75 hover:bg-background/90 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-foreground lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Navigation schließen" : "Navigation öffnen"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">Navigation umschalten</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {isOpen ? (
            <nav
              id="mobile-navigation"
              className="mt-4 grid gap-2 border-t border-border pt-4 lg:hidden"
              aria-label="Mobile Navigation"
            >
              {primaryNav.map((item) => {
                const active = isActivePath(pathname, item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-accent text-white"
                        : "bg-background text-foreground hover:bg-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
