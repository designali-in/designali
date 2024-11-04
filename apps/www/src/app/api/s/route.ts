import { NextRequest } from "next/server";

import {  getUrlBySuffix } from "@/lib/validations/url";

export async function POST(req: NextRequest) {
  try {
    const {
      slug, 
      ip, 
    } = await req.json();

    if (!slug || !ip) return Response.json(null);

    const res = await getUrlBySuffix(slug);
    if (res?.target && res?.active === 1) {
      const now = Date.now();
      const createdAt = new Date(res.updatedAt).getTime();
      const expirationMilliseconds = Number(res.expiration) * 1000;
      const expirationTime = createdAt + expirationMilliseconds;

      if (res.expiration !== "-1" && now > expirationTime) {
        return Response.json(null);
      }

       
      return Response.json(res.target);
    }
    return Response.json(null);
  } catch (error) {
    return Response.json(null);
  }
}
