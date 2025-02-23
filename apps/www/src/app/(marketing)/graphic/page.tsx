import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "@/comp/AdBanner";
import BrowseClient from "@/comp/dashboard/admin/agency/BrowseClient";
import LogoPage from "@/comp/products/logos/logos";
import ToolsPage from "@/comp/tools/tools";
import { Badge } from "@/registry/default/ui/badge";
import { AssetGrid } from "@/src/comp/dashboard/assets/asset-grid";
import AssetUsers from "@/src/comp/dashboard/assets/asset-users";
import { auth } from "@/src/lib/auth";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import { env } from "@/env";
import { INFINITE_SCROLLING_PAGINATION_BROWSE } from "@/lib/constants";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Avegra } from "../../fonts";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Graphic - Designali",
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

  const formattedAssets = assets.map((asset) => ({
    ...asset,
    uploadedAt: asset.createdAt.toISOString(),
    tags: asset.tags.map((tag) => tag.name), // Extract tag names
  }));

  const tags = await prisma.tag.findMany();
  const availableTags = tags.map((tag) => tag.name);

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

  const topTenAnimes = await prisma.graphic.findMany({
    orderBy: [
      {
        totalRatings: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    take: INFINITE_SCROLLING_PAGINATION_BROWSE,
  });

  return (
    <div className="relative">
      <div className="mx-auto my-36 max-w-7xl px-6 xl:px-0">
        <div className="grid items-center justify-center px-8 pb-1 text-center">
          <div className="grid justify-center">
            <p className=" text-ali mb-4  text-center text-xl">
              Download Free Graphics
            </p>
            <h3
              className={cn(
                Avegra.className,
                "z-20  justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl",
              )}
            >
              Open File for <span className="text-ali"> Everyone</span>
            </h3>
          </div>
          <p className=" mx-auto max-w-xl text-xs">
            Discover the essence of creativity in our exquisite collection of
            top-tier abstract design assets. Each piece is a blend of beauty and
            utility, perfect for elevating any project
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
            <Link href={"/pricing"}>
              <Button variant="outline" size="lg">
                Get Unlimited Access
              </Button>
            </Link>
            <p className="text-left text-xs">
              Full access <br /> from ₹250/m
            </p>
          </div>
        </div>
        <div>
          <div>
            <Tabs
              defaultValue="tab-1"
              className="items-center justify-center text-center"
            >
              <TabsList className="w-full md:w-auto">
                <ScrollArea className="whitespace-nowrap">
                  <div className="space-x-2">
                    <TabsTrigger value="tab-1">
                      Graphics
                      <span className="text-ali px-1 font-semibold">
                        {assets.length}
                      </span>
                    </TabsTrigger>

                    <TabsTrigger value="tab-2">
                      Pro
                      <span className="text-ali pl-1 font-semibold">
                        {topTenAnimes.length}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="tab-3">
                      Designers
                      <span className="text-ali px-1 font-semibold">
                        {users.length}
                      </span>
                      <Badge size="xs" variant="green">
                        New
                      </Badge>
                    </TabsTrigger>

                    <TabsTrigger value="tab-6">
                      <p>Logos</p>
                      {""}
                      <span className="ml-1 font-thin">by svgl</span>
                      <span className="text-ali px-1 font-semibold">476</span>
                      <Badge size="xs" variant="green">
                        New
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="tab-7">
                      <p>Tools</p>
                    </TabsTrigger>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </TabsList>
              <TabsContent value="tab-1">
                <AssetGrid
                  assets={formattedAssets}
                  availableTags={availableTags}
                />
              </TabsContent>

              <TabsContent value="tab-2">
                <div className="mt-3">
                  <BrowseClient initialAnimes={topTenAnimes} />
                </div>
              </TabsContent>
              <TabsContent value="tab-3">
                <AssetUsers users={formattedUsers} />
              </TabsContent>

              <TabsContent value="tab-6">
                <LogoPage />
              </TabsContent>
              <TabsContent value="tab-7">
                <ToolsPage />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className=" mx-auto mt-20 max-w-7xl px-6 xl:px-0">
          <AdBanner
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
            dataAdSlot="5790922307"
          />
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
