import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET() {
  try {
    const session = await auth()

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const userId = session.user.id as string

    const assets = await prisma.asset.findMany({
      where: {
        userId: userId,
      },
      include: {
        tags: true,
        likes: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Transform the data to include like count
    const transformedAssets = assets.map((asset) => ({
      ...asset,
      likes: asset.likes.length,
    }))

    return NextResponse.json(transformedAssets)
  } catch (error) {
    console.error("[ASSETS_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const userId = session.user.id as string
    const body = await req.json()

    const { title, description, url, downloadlink, tags } = body

    if (!title || !url || !downloadlink) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Create tags if they don't exist
    const tagObjects = []

    if (tags && tags.length > 0) {
      for (const tagName of tags) {
        const tag = await prisma.tag.upsert({
          where: { name: tagName.trim() },
          update: {},
          create: { name: tagName.trim() },
        })
        tagObjects.push({ id: tag.id })
      }
    }

    const asset = await prisma.asset.create({
      data: {
        title,
        description,
        url,
        downloadlink,
        userId,
        tags: {
          connect: tagObjects,
        },
      },
      include: {
        tags: true,
      },
    })

    return NextResponse.json(asset)
  } catch (error) {
    console.error("[ASSETS_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

