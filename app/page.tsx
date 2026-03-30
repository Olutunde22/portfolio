import {
  generateMetadata as generateSEOMetadata,
  generateOrganizationSchema,
} from "@/lib/seo/metadata";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ContactSection } from "@/components/home/contact-section";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olutunde.dev";

export const metadata: Metadata = generateSEOMetadata({
  title: "Olutunde Solabi — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in scalable, high-performing, and accessible web applications. Expert in React, Next.js, TypeScript, and modern web technologies.",
  path: "/",
  canonicalUrl: siteUrl,
  keywords: [
    "senior frontend engineer",
    "frontend developer",
    "web development",
    "React developer",
    "Next.js expert",
    "TypeScript",
    "WCAG compliance",
    "performance optimization",
  ],
  image: `${siteUrl}/og-image.png`,
  imageAlt: "Olutunde Solabi - Senior Frontend Engineer",
});

export default function HomePage() {
  const personSchema = generateOrganizationSchema({
    name: "Olutunde Solabi",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description:
      "Senior Frontend Engineer specializing in scalable, high-performing, and accessible web applications.",
    sameAs: ["https://github.com/Olutunde22", "https://www.linkedin.com/in/tunde-solabi/"],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
