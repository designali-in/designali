import { NextRequest, NextResponse } from "next/server";
import { linkMiddleware } from "@/server/middlewares";

export { auth as middleware } from "@designali/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};

const middleware = () => {
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.honghong.me vercel.live va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' vercel.live;
    img-src * blob: data:;
    font-src 'self' data: assets.vercel.com vercel.live;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    connect-src *;
    media-src 'self';
    frame-ancestors 'none';
    frame-src vercel.live;
    block-all-mixed-content;
    upgrade-insecure-requests;
    worker-src blob:;
`;

  const response = NextResponse.next();

  response.headers.set("Content-Security-Policy", csp.replaceAll("\n", ""));

  return { response, link };
};

export default middleware;

function link(request: NextRequest) {
  return linkMiddleware(request);
}
