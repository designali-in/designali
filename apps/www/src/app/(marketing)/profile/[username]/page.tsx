import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";
import AssetGrid from "@/src/comp/dashboard/assets/asset-grid";
import { DIcons } from "dicons";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  params: { username: string };
};

// Function to fetch user data from the database
async function getUserData(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
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
      },
    });

    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getUserData(params.username);
  if (!user) {
    return {
      title: "User Not Found",
      description: "The requested user profile does not exist.",
    };
  }
  return {
    title: `${user.name}'s Profile`,
    description: `View the profile of ${user.name}`,
  };
}

// Profile Page Component
export default async function UserProfilePage({ params }: Props) {
  const session = await auth();
  const user = await getUserData(params.username);

  const totalLikes = user.Asset.reduce(
    (sum, asset) => sum + asset.likes.length,
    0,
  );

  const totalViews = user.Asset.reduce((sum, asset) => sum + asset.views, 0);

  const totalDownloads = user.Asset.reduce(
    (sum, asset) => sum + asset.downloads,
    0,
  );

  const isOwnProfile = session?.user?.id === user.id;

  if (!user) {
    notFound(); // Redirect to the 404 page
  }

  return (
    <div className="mx-auto my-24 max-w-7xl px-6 xl:px-0">
      <div className="grid items-baseline justify-between gap-3 md:flex">
        <div className=" flex items-center gap-3">
          <Avatar className="h-20 w-20 rounded-lg border md:h-24 md:w-24">
            <AvatarImage
              className="rounded-lg"
              src={user.image}
              alt={`${user.name}'s avatar`}
            />
            <AvatarFallback className="rounded-md">D</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-3xl">{user.name}</h1>
            <p className="text-xs text-primary/70 md:text-sm">{user.bio}</p>
            <h1 className="text-ali text-lg">{user.username}</h1>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center justify-end gap-2  text-right text-green-500">
            <DIcons.Download className=" h-4  w-4" />
            <h1 className="text-xl font-semibold">{totalDownloads}</h1>
          </div>
          <div className="text-ali flex items-center justify-end  gap-2 text-right">
            <DIcons.Heart className=" h-4  w-4" />
            <h1 className="text-xl font-semibold">{totalLikes}</h1>
          </div>
          <div className="flex items-center justify-end  gap-2 text-right text-blue-500">
            <DIcons.Eye className="h-4  w-4" />
            <h1 className=" text-xl font-semibold">{totalViews}</h1>
          </div>
          <div>
            {isOwnProfile ? (
              <Link href="/dashboard/settings">
                <Button>Edit Profile</Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <Separator className="mt-2" />
      {user.Asset.length > 0 ? (
        <AssetGrid assets={user.Asset} /> // Display assets using a grid component
      ) : (
        <p className="mt-10 text-sm text-primary/70">No assets uploaded yet.</p>
      )}
      <div className="flex gap-1">
        <DIcons.CalenderFold className="h-3 w-3" />
        <p className="text-xs text-primary/70">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date(user.createdAt))}
        </p>
      </div>
    </div>
  );
}
