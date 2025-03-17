import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const inspiration = await prisma.inspiration.findUnique({
      where: { id: params.id },
    });

    if (!inspiration) {
      return NextResponse.json({ error: "inspiration not found" }, { status: 404 });
    }

    await prisma.inspiration.update({
      where: { id: params.id },
      data: { visits: { increment: 1 } },
    });

    return NextResponse.json({
      message: "Download count incremented successfully",
    });
  } catch (error) {
    console.error("Error incrementing download count:", error);
    return NextResponse.json(
      { error: "Error incrementing download count" },
      { status: 500 },
    );
  }
}
