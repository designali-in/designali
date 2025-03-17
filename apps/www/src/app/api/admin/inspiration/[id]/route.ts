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

      const inspiration = await prisma.inspiration.findUnique({
        where: { id: params.id },
        include: { likes: true, tags: true },
      });

      if (!inspiration) {
        return NextResponse.json({ error: "inspiration not found" }, { status: 404 });
      }

      await prisma.inspiration.update({
        where: { id: params.id },
        data: { views: { increment: 1 } },
      });

      return NextResponse.json(inspiration);
    }

    const inspirations = await prisma.inspiration.findMany({
      include: { likes: { select: { id: true } } },
      orderBy: { createdAt: "desc" },
    });

    await Promise.all(
      inspirations.map((inspiration) =>
        prisma.asset.update({ where: { id: inspiration.id }, data: { views: { increment: 1 } } })
      )
    );

    return NextResponse.json(inspirations);
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

    const inspiration = await prisma.inspiration.findUnique({
      where: { id: params.id },
      include: { likes: true },
    });

    if (!inspiration) {
      return NextResponse.json({ error: "inspiration not found" }, { status: 404 });
    }

    if (inspiration.likes.some((like) => like.userId === session.user.id)) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    if (!session.user.id) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }

    await prisma.inspirationLike.create({
      data: { userId: session.user.id, inspirationId: inspiration.id },
    });

    return NextResponse.json({ message: "inspiration liked successfully" });
  } catch (error) {
    console.error("Error liking inspiration:", error);
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

    const { title, description, url, websitelink, tags } = await req.json();
    const inspiration = await prisma.inspiration.findUnique({ where: { id: params.id } });

    if (!inspiration) {
      return NextResponse.json({ error: "inspiration not found" }, { status: 404 });
    }

    if (inspiration.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedTags = tags?.length
      ? await Promise.all(
          tags.map(async (tagName: string) =>
            prisma.inspirationTag.upsert({ where: { name: tagName.trim() }, update: {}, create: { name: tagName.trim() } })
          )
        )
      : [];

    const updatedAsset = await prisma.inspiration.update({
      where: { id: params.id },
      data: {
        title,
        description,
        url,
        websitelink,
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

    const inspiration = await prisma.inspiration.findUnique({ where: { id: params.id } });
    if (!inspiration) {
      return NextResponse.json({ error: "inspiration not found" }, { status: 404 });
    }

    if (inspiration.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.inspiration.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting inspiration:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}