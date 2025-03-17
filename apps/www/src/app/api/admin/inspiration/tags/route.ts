import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const tags = await prisma.inspirationTag.findMany({ select: { name: true } });

    // Ensure it's an array of strings
    return NextResponse.json(tags.map((tag) => tag.name));
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json({ error: "Error fetching tags" }, { status: 500 });
  }
}