import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";

import { prisma } from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params?: { id?: string } },
) {
  const { params } = context;

  // Fetch a specific asset if an ID is provided
  if (params?.id) {
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

      if (asset.userId !== session.user.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      return NextResponse.json(asset);
    } catch (error) {
      console.error("Error fetching asset:", error);
      return NextResponse.json(
        { error: "Error fetching asset" },
        { status: 500 },
      );
    }
  }

  // Fetch all assets if no ID is provided
  try {
    const assets = await prisma.asset.findMany({
      include: {
        likes: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Increment view count for each asset
    await Promise.all(
      assets.map((asset) =>
        prisma.asset.update({
          where: { id: asset.id },
          data: { views: { increment: 1 } },
        }),
      ),
    );

    return NextResponse.json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    return NextResponse.json(
      { error: "Error fetching assets" },
      { status: 500 },
    );
  }
}

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
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

export async function PATCH(
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
    });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    if (asset.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, downloadlink, tags } = await req.json();

    const updatedAsset = await prisma.asset.update({
      where: { id: params.id },
      data: {
        title,
        description,
        downloadlink,
        tags: {
          set: [],
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(updatedAsset);
  } catch (error) {
    console.error("Error updating asset:", error);
    return NextResponse.json(
      { error: "Error updating asset" },
      { status: 500 },
    );
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
    });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    if (asset.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.asset.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error("Error deleting asset:", error);
    return NextResponse.json(
      { error: "Error deleting asset" },
      { status: 500 },
    );
  }
}
