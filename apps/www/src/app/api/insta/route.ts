import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_KEY;
    console.log("Fetched Token:", token);

    if (!token) {
      console.error("Instagram token is missing.");
      return NextResponse.json({ error: "Missing Instagram token" }, { status: 500 });
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Instagram API Error:", errorText);
      return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
    }

    const data = await response.json();
    console.log("Raw Instagram API Response:", data);

    if (!data || !Array.isArray(data.data)) {
      console.error("Invalid API response format:", data);
      return NextResponse.json({ error: "Invalid API response format" }, { status: 500 });
    }

    return NextResponse.json(data.data); // Ensure we return the array inside `data`
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
  }
}