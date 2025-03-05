import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";

import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: params.id },
      include: { likes: true },
    });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    const existingLike = asset.likes.find(
      (like) => like.userId === session.user.id,
    );

    if (existingLike) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    if (!session.user.id) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    await prisma.assetLike.create({
      data: {
        userId: session.user.id,
        assetId: asset.id,
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
  { params }: { params: { id: string } },
) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const asset = await prisma.asset.findUnique({
      where: { id: params.id },
      include: { likes: true },
    });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    const existingLike = asset.likes.find(
      (like) => like.userId === session.user.id,
    );

    if (!existingLike) {
      return NextResponse.json({ error: "Not liked" }, { status: 400 });
    }

    await prisma.assetLike.delete({
      where: {
        id: existingLike.id,
      },
    });

    return NextResponse.json({ message: "Asset unliked successfully" });
  } catch (error) {
    console.error("Error unliking asset:", error);
    return NextResponse.json(
      { error: "Error unliking asset" },
      { status: 500 },
    );
  }
}
