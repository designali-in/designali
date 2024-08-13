import type { Metadata, Viewport } from "next";
import Analytics from "@/components/analytics";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@designali/ui";
import { ThemeProvider } from "@designali/ui/theme";
import { Toaster } from "@designali/ui/toast";
import { TooltipProvider } from "@designali/ui/tooltip";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

import { env } from "@designali/env";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://designali.in"
      : "http://localhost:3000",
  ),
  title: "Designali",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Designali",
    description: "Simple monorepo with shared backend for web & mobile apps",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <meta name="google-adsense-account" content="ca-pub-8509771369416706" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          "bg-background font-sans text-foreground",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <TRPCReactProvider>
              <SessionProvider basePath="/api/auth">
                <Header />
                {children}
                <Footer />
              </SessionProvider>
            </TRPCReactProvider>
          </TooltipProvider>
          <Toaster />
          <Analytics />
          <GoogleAnalytics gaId="G-85BCJQ64HE" />
        </ThemeProvider>
      </body>
    </html>
  );
}
