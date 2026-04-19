import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const FALLBACK_SITE_URL = "https://www.rechenpilot.de";

export function getSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  try {
    return new URL(candidate).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  locale = "de_DE",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/opengraph-image");
  const twitterImage = absoluteUrl("/twitter-image");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.claim}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}
