import { NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";
import { getToken } from "next-auth/jwt";
import UAParser from "ua-parser-js";

import { auth } from "@/lib/auth";

import site from "./config/site";

export { auth as middleware } from "@/lib/auth";

export default auth(async (req) => {
  const isAuthenticated = await auth();

  const pathname = req.nextUrl.pathname;
  const isSignInPage = pathname === "/sign-in";

  if (isSignInPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!isAuthenticated && !isSignInPage) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  // console.log(req.auth);
  try {
    const ip = req.headers.get("X-Forwarded-For");
    if (req.url.includes("/s/")) {
      const match = req.url.match(/([^/?]+)(?:\?.*)?$/);

      if (match) {
        const geo = geolocation(req);
        const userLanguage = req.headers.get("accept-language").split(",")[0];

        const ua = req.headers.get("user-agent") || "";
        const parser = new UAParser();
        parser.setUA(ua);
        const browser = parser.getBrowser();
        const device = parser.getDevice();

        const referer = req.headers.get("referer") || "(None)";

        const res = await fetch(`${site.url}/api/s`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slug: match[1],
            referer,
            ip,
            city: geo.city,
            region: geo.region,
            country: geo.country,
            latitude: geo.latitude,
            longitude: geo.longitude,
            flag: geo.flag,
            lang: userLanguage,
            device: device.model || "Unknown",
            browser: browser.name || "Unknown",
          }),
        });

        if (!res.ok) {
          return NextResponse.redirect(`${site.url}/docs/short-urls`, 302);
        }

        const target = await res.json();
        if (!target) {
          return NextResponse.redirect(`${site.url}/docs/short-urls`, 302);
        }
        return NextResponse.redirect(target, 302);
      }
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(site.url, 302);
  }
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/community/:path*",
    "/browse",
    "/watchlist",
    "/poll/:path*",
    "/admin/:path*",
    "/sign-in",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
