export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: Array<{ name: string; url?: string }>;
  section?: string;
  tags?: string[];
}
