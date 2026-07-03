import type { Metadata } from "next";

export const SITE_METADATA: Metadata = {
  title: "AeroClean X1 | Smart Air Purifier",

  description:
    "AI-powered air purification for healthier living.",

  keywords: [
    "air purifier",
    "smart home",
    "AI purifier",
    "clean air",
  ],

  openGraph: {
    title: "AeroClean X1",

    description:
      "AI-powered air purification for healthier living.",

    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AeroClean X1",

    description:
      "AI-powered air purification for healthier living.",

    images: [
      "/images/og/og-image.png",
    ],
  },
};