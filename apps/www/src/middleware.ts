import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

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
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/sign-in", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
