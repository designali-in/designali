//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;

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
      // Unlike
      await prisma.inspirationLike.delete({
        where: { id: existingLike.id },
      });
    } else {
      // Like
      await prisma.inspirationLike.create({
        data: {
          userId: session.user.id,
          inspirationId: inspiration.id,
        },
      });
    }

    // Get updated like count
    const updatedLikeCount = await prisma.inspirationLike.count({
      where: { inspirationId: inspiration.id },
    });

    return NextResponse.json({
      message: existingLike ? "Like removed" : "Liked successfully",
      likeCount: updatedLikeCount,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json({ error: "Error toggling like" }, { status: 500 });
  }
}