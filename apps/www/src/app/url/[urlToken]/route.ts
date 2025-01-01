import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { getOriginalUrlFromShortUrl } from "@/lib/url";

export async function GET(
  req: NextRequest,
  { params }: { params: { urlToken: string } },
) {
  try {
    const url = await getOriginalUrlFromShortUrl(req.url);
    return NextResponse.redirect(url);
  } catch (e) {
    redirect("/");
  }
}
