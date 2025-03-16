import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id?: string } }
) {
  try {
    if (params?.id) {
      const session = await auth();
      if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const asset = await prisma.asset.findUnique({
        where: { id: params.id },
        include: { likes: true, tags: true },
      });

      if (!asset) {
        return NextResponse.json({ error: "Asset not found" }, { status: 404 });
      }

      await prisma.asset.update({
        where: { id: params.id },
        data: { views: { increment: 1 } },
      });

      return NextResponse.json(asset);
    }

    const assets = await prisma.asset.findMany({
      include: { likes: { select: { id: true } } },
      orderBy: { createdAt: "desc" },
    });

    await Promise.all(
      assets.map((asset) =>
        prisma.asset.update({ where: { id: asset.id }, data: { views: { increment: 1 } } })
      )
    );

    return NextResponse.json(assets);
  } catch (error) {
    console.error("Error fetching assets:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const asset = await prisma.asset.findUnique({
      where: { id: params.id },
      include: { likes: true },
    });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    if (asset.likes.some((like) => like.userId === session.user.id)) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    if (!session.user.id) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    await prisma.assetLike.create({
      data: { userId: session.user.id, assetId: asset.id },
    });

    return NextResponse.json({ message: "Asset liked successfully" });
  } catch (error) {
    console.error("Error liking asset:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, url, downloadlink, tags } = await req.json();
    const asset = await prisma.asset.findUnique({ where: { id: params.id } });

    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    if (asset.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedTags = tags?.length
      ? await Promise.all(
          tags.map(async (tagName: string) =>
            prisma.tag.upsert({ where: { name: tagName.trim() }, update: {}, create: { name: tagName.trim() } })
          )
        )
      : [];

    const updatedAsset = await prisma.asset.update({
      where: { id: params.id },
      data: {
        title,
        description,
        url,
        downloadlink,
        tags: { set: [], connect: updatedTags.map((tag) => ({ id: tag.id })) },
      },
      include: { tags: true },
    });

    return NextResponse.json(updatedAsset);
  } catch (error) {
    console.error("Error updating asset:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const asset = await prisma.asset.findUnique({ where: { id: params.id } });
    if (!asset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    if (asset.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.asset.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting asset:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}