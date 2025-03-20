import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    // Increase views count by 1
    const inspiration = await prisma.inspiration.update({
      where: { id },
      data: { views: { increment: 1 } }, // ✅ Increments the view count
    });

    return NextResponse.json({ message: "View counted", views: inspiration.views });
  } catch (error) {
    console.error("Error updating views:", error);
    return NextResponse.json({ error: "Error updating views" }, { status: 500 });
  }
}