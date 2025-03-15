import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProfileAssetGrid } from "@/src/components/dashboard/graphic/assets/asset-grid";
import { DIcons } from "dicons";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Function to fetch user data from the database
async function getUserData(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        coverImage: true,
        instagram: true,
        linkedin: true,
        website: true,
        twitter: true,
        bio: true,
        createdAt: true,
        Asset: {
          select: {
            id: true,
            title: true,
            likes: true,
            views: true,
            createdAt: true,
            downloadlink: true,
            downloads: true,
            description: true,
            url: true,
          },
        },
        likes: {
          select: {
            asset: {
              select: {
                id: true,
                title: true,
                likes: true,
                views: true,
                createdAt: true,
                downloadlink: true,
                downloads: true,
                description: true,
                url: true,
              },
            },
          },
        },
      },
    });

    if (!user) throw new Error("User not found");

    // Transform liked assets to match Asset structure
    const likedAssets = user.likes.map((like) => like.asset);

    return {
      ...user,
      likedAssets,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

// Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const session = await auth();
  if (!session?.user?.id) return { title: "User Not Found" };

  const user = await getUserData(session.user.id);
  if (!user) {
    return {
      title: "User Not Found",
      description: "The requested user profile does not exist.",
    };
  }
  return {
    title: `${user.name} - Dashboard`,
    description: `Welcome to ${user.name}'s dashboard.`,
  };
}

// Dashboard Page Component
export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) notFound(); // Redirect if not authenticated

  const user = await getUserData(session.user.id);
  if (!user) notFound(); // Redirect if user not found

  const totalLikes = user.Asset.reduce((sum, asset) => sum + asset.likes.length, 0);
  const totalViews = user.Asset.reduce((sum, asset) => sum + asset.views, 0);
  const totalDownloads = user.Asset.reduce((sum, asset) => sum + asset.downloads, 0);

  return (
    <div className="relative">
      <div className="h-40  w-full overflow-hidden md:h-[300px] ">
        <Image
          src={user.coverImage || "/images/products/3dbg.jpg"}
          alt="Cover"
          width={1000}
          height={300}
          className="-z-10 h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="grid h-full items-center justify-start gap-3 md:flex md:justify-between">
          <div className="flex h-full items-center justify-start gap-3">
            <Avatar className="h-20 w-20 rounded-lg border md:h-24 md:w-24">
              <AvatarImage className="rounded-lg" src={user.image || ""} alt={`${user.name}'s avatar`} />
              <AvatarFallback className="rounded-md">D</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-3xl">{user.name}</h1>
              <p className="text-xs text-primary/70 md:text-sm">{user.bio}</p>
              <h1 className="text-ali text-lg">@{user.username}</h1>
            </div>
          </div>
          <div className="grid h-full justify-center gap-3">
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-end gap-2 text-right text-green-500">
                <DIcons.Download className="h-4 w-4" />
                <h1 className="text-xl font-semibold">{totalDownloads}</h1>
              </div>
              <div className="text-ali flex items-center justify-end gap-2 text-right">
                <DIcons.Heart className="h-4 w-4" />
                <h1 className="text-xl font-semibold">{totalLikes}</h1>
              </div>
              <div className="flex items-center justify-end gap-2 text-right text-blue-500">
                <DIcons.Eye className="h-4 w-4" />
                <h1 className="text-xl font-semibold">{totalViews}</h1>
              </div>
              <div>
                <Link href="/dashboard/settings">
                  <Button>Edit Profile</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-end">
              {user.instagram && (
                <Link href={user.instagram} target="_blank">
                  <Button variant="ghost" size="icon">
                    <DIcons.Instagram className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {user.linkedin && (
                <Link href={user.linkedin} target="_blank">
                  <Button variant="ghost" size="icon">
                    <DIcons.LinkedIn className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {user.twitter && (
                <Link href={user.twitter} target="_blank">
                  <Button variant="ghost" size="icon">
                    <DIcons.X className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {user.website && (
                <Link href={user.website} target="_blank">
                  <Button variant="ghost" size="icon">
                    <DIcons.Link className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Separator className="mt-2" />
        {user.Asset.length > 0 || user.likedAssets.length > 0 ? (
          <ProfileAssetGrid assets={user.Asset} likedAssets={user.likedAssets} user={user} />
        ) : (
          <p className="my-10 text-sm text-primary/70">No assets uploaded or liked yet.</p>
        )}
        <div className="flex gap-1">
          <DIcons.CalenderFold className="h-3 w-3" />
          <p className="text-xs text-primary/70">
            {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date(user.createdAt))}
          </p>
        </div>
      </div>
    </div>
  );
}