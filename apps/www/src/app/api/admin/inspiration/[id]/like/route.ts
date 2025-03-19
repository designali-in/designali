//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  context: { params: { id: string } } // Ensure correct typing
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = context.params; // ✅ Correctly extracting params.id

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const inspiration = await prisma.inspiration.findUnique({
      where: { id },
      include: { likes: true },
    });

    if (!inspiration) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    const existingLike = inspiration.likes.find(
      (like) => like.userId === session.user.id
    );

    if (existingLike) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    await prisma.inspirationLike.create({
      data: {
        userId: session.user.id,
        inspirationId: inspiration.id,
      },
    });

    return NextResponse.json({ message: "Asset liked successfully" });
  } catch (error) {
    console.error("Error liking asset:", error);
    return NextResponse.json({ error: "Error liking asset" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } } // ✅ Correct param extraction
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = context.params; // ✅ Correctly extracting params.id

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const inspiration = await prisma.inspiration.findUnique({
      where: { id },
      include: { likes: true },
    });

    if (!inspiration) {
      return NextResponse.json({ error: "Inspiration not found" }, { status: 404 });
    }

    const existingLike = inspiration.likes.find(
      (like) => like.userId === session.user.id
    );

    if (!existingLike) {
      return NextResponse.json({ error: "Not liked" }, { status: 400 });
    }

    await prisma.inspirationLike.delete({
      where: { id: existingLike.id },
    });

    return NextResponse.json({ message: "Asset unliked successfully" });
  } catch (error) {
    console.error("Error unliking asset:", error);
    return NextResponse.json({ error: "Error unliking asset" }, { status: 500 });
  }
}