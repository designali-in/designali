import "@/styles/globals.css";

import { env } from "process";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import AdSense from "@/comp/AdSense";
import Analytics from "@/comp/analytics";
import CookieConsent from "@/comp/common/CookieConsent";
import Providers from "@/comp/Providers";
import { DToaster } from "@/comp/uis/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toasts";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://designali.in"
      : "http://localhost:3000",
  ),
  title: "Designali",
  description: "A design agency with a touch of magic.",
  openGraph: {
    title: "Designali",
    description: "A design agency with a touch of magic.",
    url: "https://designali.in",
    siteName: "Designali",
  },
  twitter: {
    card: "summary_large_image",
    site: "@designali_in",
    creator: "@designali_in",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Davicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Davicon.svg" />
        <meta name="google-adsense-account" content="ca-pub-8509771369416706" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <AdSense pId="ca-pub-3647003303744848" />
      </head>
      <body
        className={cn(
          "bg-white font-sans text-foreground dark:bg-black",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Providers>
          {children}

          <CookieConsent />
          <DToaster />
          <Toaster />
          <Analytics />
          <GoogleAnalytics gaId="G-85BCJQ64HE" />
        </Providers>
      </body>
    </html>
  );
}
