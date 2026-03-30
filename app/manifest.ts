import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olutunde Solabi - Senior Frontend Engineer Portfolio",
    short_name: "Olutunde Portfolio",
    description:
      "Senior Frontend Engineer specializing in scalable, high-performing, and accessible web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#B4C5FF",
    icons: [
      {
        src: "/favicon-196.png",
        sizes: "196x196",
        type: "image/png",
      },
      {
        src: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["portfolio", "developer", "engineering"],
    lang: "en",
    orientation: "portrait-primary",
  };
}
