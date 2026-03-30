import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NavigationLoader } from "@/components/navigation-loader";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo/metadata";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
  icons: {
    icon: [
      { url: "/favicon-196.png", sizes: "196x196", type: "image/png" },
      {
        url: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/apple-icon-180.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-jakarta h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NavigationLoader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
