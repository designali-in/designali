import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/comp/AdBanner";
import AssetUsers from "@/src/comp/dashboard/assets/asset-users";
import { auth } from "@/src/lib/auth";

import { env } from "@/env";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Profile - Designali",
  description:
    "Discover your favorite anime on our browse page, designed to help you search for anime that suits your preferences. Browse through an extensive collection of anime and easily filter them by genres and release year.",
};

const BrowsePage = async () => {
  const session = await auth();

  const assets = await prisma.asset.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      likes: true,
      tags: true, // Include tags
    },
  });

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      Asset: true,
    },
  });

  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: user.name || "",
    email: user.email || "",
    username: user.username,
    bio: user.bio || "",
    avatarUrl: user.image || "",
    totalAssets: user.Asset.length,
    totalDownloads: user.Asset.reduce(
      (sum, asset) => sum + (asset.downloads || 0),
      0,
    ),
    totalLikes: 0,
    joinedAt: user.createdAt.toISOString(),
  }));

  return (
    <div className="mx-auto my-36 max-w-7xl px-6 xl:px-0">
      <div className="grid items-center justify-center px-8 pb-1 text-center">
        <div className="grid justify-center">
          <p className=" text-ali mb-4  text-center text-xl">
            Your Dream Designer Awaits
          </p>
          <h1 className="z-20   py-3 text-center text-4xl font-bold tracking-tighter  md:text-7xl">
            Hire The World’s Best <br /> Designer's on{" "}
            <span className="text-ali">Designali</span>
          </h1>
        </div>
        <p className=" mx-auto max-w-xl text-xs">
          Connect with top-tier designers and bring your creative vision to life
          with Designali.
        </p>

        <div className="my-10 flex flex-wrap items-center justify-center gap-2">
          {session ? (
            <Link href="/graphic/upload">
              <Button size="lg">Upload New Asset</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button size="lg">Upload New Asset</Button>
            </Link>
          )}
          <Link href={"/graphic"}>
            <Button variant="outline" size="lg">
              View Graphics
            </Button>
          </Link>
        </div>
      </div>{" "}
      <Separator className="" />
      <AssetUsers users={formattedUsers} />
      <div className=" mx-auto mt-20 max-w-7xl px-6 xl:px-0">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="5790922307"
        />
      </div>
    </div>
  );
};

export default BrowsePage;
