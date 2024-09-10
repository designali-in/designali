/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export const GET = async () => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=UC2HYxCAsf9b5HsFJiCDGKig&part=statistics&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const data = await res.json();

  const channel = data.items[0];
  const statistics = channel.statistics;

  if (!statistics) {
    throw new Error("Statistics not found");
  }

  return NextResponse.json({
    subscribers: Number(statistics.subscriberCount),
    views: Number(statistics.viewCount),
  });
};
