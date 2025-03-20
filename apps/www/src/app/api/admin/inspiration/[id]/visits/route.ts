import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const inspirationId = url.pathname.split("/").at(-2); // Extract ID

    if (!inspirationId) {
      return NextResponse.json({ error: "Invalid inspiration ID" }, { status: 400 });
    }

    const inspiration = await prisma.inspiration.findUnique({
      where: { id: inspirationId },
    });

    if (!inspiration) {
      return NextResponse.json({ error: "Inspiration not found" }, { status: 404 });
    }

    await prisma.inspiration.update({
      where: { id: inspirationId },
      data: { visits: { increment: 1 } },
    });

    return NextResponse.json({ message: "Visit count incremented successfully" });
  } catch (error) {
    console.error("Error incrementing visit count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}