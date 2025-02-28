import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { META_THEME_COLORS, siteConfig } from "@/src/config/site";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/src/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/common/providers";
import { TailwindIndicator } from "@/components/common/tailwind-indicator";
import AdSense from "@/components/common/AdSense";
import { GoogleAnalytics } from "@next/third-parties/google";
import Analytics from "@/components/common/analytics";
import CookieConsent from "@/components/common/CookieConsent";
import { Header } from "@/src/components/layout/header";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "designali",
      url: "https://designali.in",
    },
  ],
  creator: "designali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <AdSense pId="ca-pub-3647003303744848" />
      </head>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <TailwindIndicator />
        <Toaster />
        <Providers>
          <Header />
          {children}
          <CookieConsent />
          <Analytics />
          <GoogleAnalytics gaId="G-85BCJQ64HE" />
        </Providers>
      </body>
    </html>
  );
}
