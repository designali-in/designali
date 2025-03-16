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

    // Get total assets count
    const totalAssets = await prisma.asset.count({
      where: { userId },
    })

    // Get total downloads
    const downloadsResult = await prisma.asset.aggregate({
      where: { userId },
      _sum: { downloads: true },
    })
    const totalDownloads = downloadsResult._sum.downloads || 0

    // Get total views
    const viewsResult = await prisma.asset.aggregate({
      where: { userId },
      _sum: { views: true },
    })
    const totalViews = viewsResult._sum.views || 0

    // Get total likes
    const totalLikes = await prisma.assetLike.count({
      where: {
        asset: {
          userId,
        },
      },
    })

    // Get monthly stats for growth calculation
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2)

    // Current month downloads
    const currentMonthDownloads = await prisma.asset.aggregate({
      where: {
        userId,
        updatedAt: {
          gte: oneMonthAgo,
        },
      },
      _sum: { downloads: true },
    })

    // Previous month downloads
    const previousMonthDownloads = await prisma.asset.aggregate({
      where: {
        userId,
        updatedAt: {
          gte: twoMonthsAgo,
          lt: oneMonthAgo,
        },
      },
      _sum: { downloads: true },
    })

    // Calculate growth percentages
    const currentMonthDownloadsValue = currentMonthDownloads._sum.downloads || 0
    const previousMonthDownloadsValue = previousMonthDownloads._sum.downloads || 0

    let downloadGrowth = 0
    if (previousMonthDownloadsValue > 0) {
      downloadGrowth = ((currentMonthDownloadsValue - previousMonthDownloadsValue) / previousMonthDownloadsValue) * 100
    } else if (currentMonthDownloadsValue > 0) {
      downloadGrowth = 100 // If previous month was 0, but current month has downloads, that's 100% growth
    }

    // Similar calculations for views and likes could be added here

    return NextResponse.json({
      totalAssets,
      totalDownloads,
      totalViews,
      totalLikes,
      downloadGrowth: Math.round(downloadGrowth),
      viewGrowth: 12, // Placeholder, implement similar to downloadGrowth
      likeGrowth: 18, // Placeholder, implement similar to downloadGrowth
    })
  } catch (error) {
    console.error("[STATS_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

