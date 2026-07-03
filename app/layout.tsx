import type { Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { AppThemeProvider } from "@/components/providers/theme-provider";
import { AnalyticsProvider } from "@/components/providers/analytics-provider";

import { SITE_METADATA } from "@/shared/constants/metadata";

import "./globals.css";

export const metadata = SITE_METADATA;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          min-h-screen
          antialiased
        `}
      >
        <AppThemeProvider>
          <AnalyticsProvider />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}