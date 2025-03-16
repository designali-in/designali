"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/db"

// User actions
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return users
  } catch (error) {
    console.error("Failed to fetch users:", error)
    return []
  }
}

export async function deleteUser(id: string) {
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      return { error: "User not found" }
    }

    // Delete user (cascades to related records)
    await prisma.user.delete({
      where: { id },
    })

    revalidatePath("/admin/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete user:", error)
    return { error: "Failed to delete user" }
  }
}

// Asset actions
export async function getAssets() {
  try {
    const assets = await prisma.asset.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
          },
        },
        tags: true,
        _count: {
          select: {
            likes: true,
          },
        },
      },
    })

    return assets
  } catch (error) {
    console.error("Failed to fetch assets:", error)
    return []
  }
}

export async function deleteAsset(id: string) {
  try {
    // Check if asset exists
    const asset = await prisma.asset.findUnique({
      where: { id },
    })

    if (!asset) {
      return { error: "Asset not found" }
    }

    // Delete asset (cascades to related records)
    await prisma.asset.delete({
      where: { id },
    })

    revalidatePath("/admin/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete asset:", error)
    return { error: "Failed to delete asset" }
  }
}

// Tag actions
export async function getTags() {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        _count: {
          select: {
            assets: true,
          },
        },
      },
    })

    return tags
  } catch (error) {
    console.error("Failed to fetch tags:", error)
    return []
  }
}

export async function createTag(name: string) {
  try {
    // Check if tag already exists
    const existingTag = await prisma.tag.findUnique({
      where: {
        name,
      },
    })

    if (existingTag) {
      return { error: "A tag with this name already exists" }
    }

    // Create new tag
    const tag = await prisma.tag.create({
      data: {
        name,
      },
    })

    revalidatePath("/admin/dashboard")
    return { success: true, tag }
  } catch (error) {
    console.error("Failed to create tag:", error)
    return { error: "Failed to create tag" }
  }
}

export async function deleteTag(id: string) {
  try {
    // Check if tag exists
    const tag = await prisma.tag.findUnique({
      where: { id },
    })

    if (!tag) {
      return { error: "Tag not found" }
    }

    // Delete tag
    await prisma.tag.delete({
      where: { id },
    })

    revalidatePath("/admin/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete tag:", error)
    return { error: "Failed to delete tag. It may be in use by assets." }
  }
}

// Team actions
export async function getTeams() {
  try {
    const teams = await prisma.team.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            members: true,
          },
        },
      },
    })

    return teams
  } catch (error) {
    console.error("Failed to fetch teams:", error)
    return []
  }
}

// Newsletter actions
export async function getNewsletterSubscribers() {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return subscribers
  } catch (error) {
    console.error("Failed to fetch newsletter subscribers:", error)
    return []
  }
}

