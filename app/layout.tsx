import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk, Space_Mono } from "next/font/google";
import { NavigationLoader } from "@/components/navigation-loader";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TerminalWindow } from "@/components/terminal-window";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo/metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  axes: ["opsz"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olutunde.dev";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Olutunde - Software Engineer Portfolio",
    description:
      "Software engineer passionate about building modern web applications and creating exceptional user experiences. Explore my projects and skills.",
    keywords: [
      "software engineer",
      "frontend developer",
      "web development",
      "portfolio",
      "Next.js",
      "React",
      "TypeScript",
    ],
    path: "/",

    canonicalUrl: siteUrl,
    authors: [{ name: "Olutunde" }],
    image: `${siteUrl}/og-image.png`,
    imageAlt: "Olutunde - Software Engineer Portfolio",
  }),
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${schibstedGrotesk.variable} ${bricolageGrotesque.variable}`}
    >
      <body>
        <noscript>
          <style>{`[data-reveal],[data-boot-line]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <NavigationLoader />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.028)_0_1px,transparent_1px_3px)]"
        />

        <TerminalWindow>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TerminalWindow>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
