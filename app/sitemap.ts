export const dynamic = "force-static";
import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { calculatorCatalog, siteConfig } from "@/lib/site";
import { atTaxSitemapRoutes } from "@/lib/tax/at/metadata";

const routes = [
  "/",
  "/rechner",
  ...calculatorCatalog.map((calculator) => calculator.href),
  ...atTaxSitemapRoutes,
  "/impressum",
  "/datenschutz",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.launchDate);

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency:
      route === "/" || route === "/rechner" || route === "/at/steuerhilfe"
        ? "weekly"
        : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/rechner" || route === "/at/steuerhilfe"
          ? 0.9
          : route === "/impressum" || route === "/datenschutz"
            ? 0.4
            : 0.8,
  }));
}
