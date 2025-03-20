import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/common/AdBanner";
import LogoPage from "@/components/lobby/products/logos/logos";
import ToolsPage from "@/components/lobby/products/tools/tools";
import { AssetGrid } from "@/src/components/dashboard/graphic/assets/asset-grid";
import AssetUsers from "@/src/components/dashboard/graphic/assets/asset-users";
import { auth } from "@/src/lib/auth";
import { cn } from "@/src/lib/utils";

import { env } from "@/env";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Avegra } from "@/lib/fonts/fonts";
import { Glow } from "@/src/components/ui/backgrounds/glow";
import ShineBorder from "@/src/components/ui/backgrounds/shine-border";
import { Gallery } from "@/src/components/lobby/images/gallery";
import { AIImage } from "@/src/components/dashboard/graphic/ai-image/image-gen";
import { Wand2 } from "lucide-react";
import { InspirationGrid } from "@/src/components/dashboard/graphic/assets/inspiration-grid";


export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Graphic",
  description:
    "Discover your favorite graphic on our browse page, designed to help you search for graphic that suits your preferences. ",
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

  const inspirations = await prisma.inspiration.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      likes: true,
      tags: true, // Include tags
    },
  });

  const isLiked = session
    ? inspirations.some((asset) =>
        asset.likes.some((likes) => likes.userId === session.user.id)
      )
    : false;

  const isLikedAsset = session
    ? inspirations.some((inspiration) =>
        inspiration.likes.some((likes) => likes.userId === session.user.id)
      )
    : false;

  const formattedInspirations = inspirations.map((inspiration) => ({
    ...inspiration,
    uploadedAt: inspiration.createdAt.toISOString(),
    tags: inspiration.tags.map((tag) => tag.name), // Extract tag names
  }));

  const tags = await prisma.tag.findMany();
  const availableTags = tags.map((tag) => tag.name);

  const inspirationtags = await prisma.inspirationTag.findMany();
  const inspirationTags = inspirationtags.map((tag) => tag.name);

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
    username: user.username || "",
    bio: user.bio || "",
    avatarUrl: user.image || "",
    totalAssets: user.Asset.length,
    totalDownloads: user.Asset.reduce(
      (sum, asset) => sum + (asset.downloads || 0),
      0
    ),
    totalLikes: 0,
    joinedAt: user.createdAt.toISOString(),
  }));

  return (
    <div className="relative overflow-hidden">
      <div className="mt-20">
        <div className="grid items-center justify-center px-8 pb-1 text-center">
          <div className="grid justify-center">
            <p className=" text-ali mb-4  text-center text-xl">
              Download Free Graphics
            </p>
            <h3
              className={cn(
                Avegra.className,
                "z-20  justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl"
              )}
            >
              Open Design for <span className="text-ali"> Everyone</span>
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
                <ShineBorder
                  borderWidth={3}
                  className="border cursor-pointer  w-auto p-2 bg-white/5 backdrop-blur-md dark:bg-black/5"
                  color={["#FF007F", "#39FF14", "#00FFFF"]}
                >
                  <Button size="lg">Upload New Asset</Button>
                </ShineBorder>
              </Link>
            ) : (
              <Link href="/login">
                <ShineBorder
                  borderWidth={3}
                  className="border cursor-pointer  w-auto p-2 bg-white/5 backdrop-blur-md dark:bg-black/5"
                  color={["#FF007F", "#39FF14", "#00FFFF"]}
                >
                  <Button size="lg">Upload New Asset/Login</Button>
                </ShineBorder>
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
              <div className="px-6">
                <TabsList className="w-full md:w-auto">
                  <ScrollArea className="whitespace-nowrap">
                    <div className="space-x-2">
                      <TabsTrigger value="tab-1">
                        Graphics
                        <span className="text-ali px-1 font-semibold">
                          {assets.length}
                        </span>
                      </TabsTrigger>
                      <TabsTrigger key={"inspiration"} value="tab-5">
                        Inspirations
                        <span className="text-ali px-1 font-semibold">
                          {inspirations.length}
                        </span>
                        <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                      </TabsTrigger>
                      <TabsTrigger value="tab-4">
                        <Wand2 className="w-3 mr-1 h-3" />
                        AI Image Gen
                        <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                      </TabsTrigger>
                      <TabsTrigger value="tab-2">Stock Images</TabsTrigger>
                      <TabsTrigger value="tab-3">
                        Designers
                        <span className="text-ali px-1 font-semibold">
                          {users.length}
                        </span>
                        <span className="ml-1 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                          New
                        </span>
                      </TabsTrigger>

                      <TabsTrigger value="tab-6">
                        <p>Logos</p>
                        {""}
                        <span className="ml-1 font-thin">by svgl</span>
                        <span className="text-ali px-1 font-semibold">476</span>
                      </TabsTrigger>
                      <TabsTrigger value="tab-7">
                        <p>Tools</p>
                      </TabsTrigger>
                    </div>
                    <ScrollBar className="hidden" orientation="horizontal" />
                  </ScrollArea>
                </TabsList>
              </div>
              <Glow className="top-[400px] -z-20" />
              <div className="container-wrapper bg-background rounded-t-3xl mt-6 pt-4 p-6">
                <TabsContent className="min-h-screen" value="tab-1">
                  <AssetGrid
                    assets={formattedAssets}
                    availableTags={availableTags}
                    isLiked={isLikedAsset}
                  />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-4">
                  <AIImage />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-5">
                  <InspirationGrid
                    isLiked={isLiked}
                    inspirations={formattedInspirations}
                    availableTags={inspirationTags}
                  />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-2">
                  <Gallery />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-3">
                  <AssetUsers users={formattedUsers} />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-6">
                  <LogoPage />
                </TabsContent>
                <TabsContent className="min-h-screen" value="tab-7">
                  <ToolsPage />
                </TabsContent>
                <div className="-m-6 mt-6">
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="5790922307"
                  />
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
