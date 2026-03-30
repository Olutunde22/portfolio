import { allowCrawling } from "@/lib/env";
import type { SEOConfig } from "@/types/seo";
import type { Metadata } from "next";

export const DEFAULT_SITE_NAME = "Olutunde";
export const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://olutunde.dev";

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    canonicalUrl,
    keywords = [],
    noindex: configNoindex = false,
    nofollow: configNofollow = false,
    image,
    imageAlt,
    type = "website",
    publishedTime,
    modifiedTime,
    authors = [],
    section,
    tags = [],
  } = config;

  const noindex = !allowCrawling || configNoindex;
  const nofollow = !allowCrawling || configNofollow;
  const robots =
    noindex && nofollow
      ? "noindex, nofollow"
      : noindex
        ? "noindex, follow"
        : nofollow
          ? "index, nofollow"
          : "index, follow";

  const canonical = canonicalUrl || `${DEFAULT_SITE_URL}${config.path ?? ""}`;

  const ogImage = image
    ? {
        url: image,
        alt: imageAlt || title,
        width: 1200,
        height: 630,
        type: "image/png" as const,
      }
    : undefined;

  const twitterImage = image ? { url: image, alt: imageAlt || title } : undefined;

  const titleTemplate = title.includes("%s") ? undefined : `%s | ${DEFAULT_SITE_NAME}`;

  return {
    title: titleTemplate ? { default: title, template: titleTemplate } : title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors.length > 0 ? authors : undefined,
    robots,
    alternates: { canonical },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "en_US",
      url: canonical,
      title,
      description,
      siteName: DEFAULT_SITE_NAME,
      ...(ogImage && { images: [ogImage] }),
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: authors.length > 0 ? authors.map((a) => a.name || a) : undefined,
        section,
        tags: tags.length > 0 ? tags : undefined,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(twitterImage && { images: [twitterImage] }),
    },
  };
}

export function generateOrganizationSchema(config: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.name,
    url: config.url,
    ...(config.logo && { image: config.logo }),
    ...(config.description && { description: config.description }),
    ...(config.sameAs?.length && { sameAs: config.sameAs }),
  };
}
