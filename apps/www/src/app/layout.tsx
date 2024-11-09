import "@/styles/globals.css";

import { env } from "process";
import type { Metadata, Viewport } from "next";
import Analytics from "@/comp/analytics";
import CookieConsent from "@/comp/common/CookieConsent";
import { Footer } from "@/comp/marketing/layout/footer";
import NowPlaying from "@/comp/marketing/layout/footer/now-playing";
import { Header } from "@/comp/marketing/layout/header";
import { ThemeProvider } from "@/comp/theme-provider";
import { Toaster } from "@designali/ui/toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";

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
    site: "@aliimam_in",
    creator: "@aliimam_in",
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
      </head>
      <body
        className={cn(
          "bg-white font-sans text-foreground dark:bg-black",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <CookieConsent />
          <Footer />
          <NowPlaying />

          <Toaster />
          <Analytics />
          <GoogleAnalytics gaId="G-85BCJQ64HE" />
        </ThemeProvider>
      </body>
    </html>
  );
}
