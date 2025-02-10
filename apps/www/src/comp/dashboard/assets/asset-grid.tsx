"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadNumber } from "@/comp/dashboard/assets/download-btn";
import { LikeCountNumber } from "@/comp/dashboard/assets/like-btn";
import { AspectRatio } from "@/registry/default/ui/aspect-ratio";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AboutUser from "./about-user";

type Asset = {
  id: string;
  title: string;
  downloadlink: string;
  downloads: number;
  description: string | null;
  url: string;
  views: number;
  likes: { id: string }[];
  uploadedAt: string;
  tags: string[]; // Add this line to include tags
};

const INITIAL_LOAD = 21;
const LOAD_MORE = 21;

export function AssetGrid({
  assets,
  availableTags,
}: {
  assets: Asset[];
  availableTags: string[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [selectedTag, setSelectedTag] = useState("all");

  // Get unique tags from availableTags
  const uniqueTags = Array.from(new Set(availableTags)).sort((a, b) =>
    a.localeCompare(b),
  );

  useEffect(() => {
    let sortedAssets = [...assets];

    sortedAssets = sortedAssets.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "all" || asset.tags.includes(selectedTag)),
    );

    // Then, sort the filtered assets
    switch (sortBy) {
      case "mostDownloaded":
        sortedAssets.sort((a, b) => b.downloads - a.downloads);
        break;
      case "mostLiked":
        sortedAssets.sort((a, b) => b.likes.length - a.likes.length);
        break;
      case "mostViewed":
        sortedAssets.sort((a, b) => b.views - a.views);
        break;
      case "latest":
      default:
        sortedAssets.sort(
          (a, b) =>
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
        );
    }

    setFilteredAssets(sortedAssets);
    setVisibleCount(INITIAL_LOAD);
  }, [assets, searchTerm, sortBy, selectedTag]);

  return (
    <div>
      <Tabs value={selectedTag} onValueChange={setSelectedTag}>
        <div className="mb-3">
          <div className="mt-3 grid items-center justify-center gap-2 md:flex md:justify-between">
            <Input
              type="text"
              placeholder="Search assets by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-60"
            />

            <div className="w-full max-w-4xl overflow-hidden">
              <TabsList className="w-full items-center justify-center bg-transparent text-center">
                <ScrollArea className="w-full whitespace-nowrap">
                  <TabsTrigger value="all">All</TabsTrigger>
                  {uniqueTags.length > 0 ? (
                    uniqueTags.map((tag) => (
                      <TabsTrigger className="px-4" key={tag} value={tag}>
                        {tag}
                      </TabsTrigger>
                    ))
                  ) : (
                    <p className="px-3 py-2 text-sm">No tags available</p>
                  )}
                  <ScrollBar className="hidden" orientation="horizontal" />
                </ScrollArea>
              </TabsList>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-10 w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="mostDownloaded">Most Downloaded</SelectItem>
                <SelectItem value="mostLiked">Most Liked</SelectItem>
                <SelectItem value="mostViewed">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value={selectedTag}>
          <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {filteredAssets.slice(0, visibleCount).map((asset) => {
              const urls = asset.url.split(",");
              return (
                <Card
                  key={asset.id}
                  className={cn(
                    "focused group h-full overflow-hidden rounded-sm",
                  )}
                >
                  <CardHeader className="border-b p-0">
                    <AspectRatio className="overflow-hidden">
                      <Link href={`/graphic/assets/${asset.id}`}>
                        {urls.length > 1 ? (
                          <div className="relative h-full w-full">
                            {urls.slice(0, 1).map((url, index) => (
                              <Image
                                key={index}
                                src={url || "/placeholder.svg"}
                                alt={`${asset.title} - Image ${index + 1}`}
                                fill
                                className={cn(
                                  "object-cover transition-all group-hover:scale-105",
                                  urls.length === 2 && "w-1/2",
                                  urls.length === 3 && index === 0
                                    ? "w-1/2"
                                    : "w-1/4",
                                  urls.length === 4 && "h-1/2 w-1/2",
                                )}
                                style={{
                                  top:
                                    urls.length === 3 && index > 0
                                      ? "50%"
                                      : "0",
                                  left: index % 2 === 1 ? "50%" : "0",
                                }}
                              />
                            ))}
                            {urls.length > 1 && (
                              <div className="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
                                +{urls.length - 1}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Image
                            src={urls[0] || "/placeholder.svg"}
                            alt={asset.title}
                            fill
                            className="h-full w-full object-cover transition-all group-hover:scale-105"
                          />
                        )}
                      </Link>
                    </AspectRatio>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between p-4">
                    <CardTitle className="text-md truncate py-[2px] md:text-xl">
                      {asset.title}
                    </CardTitle>

                    <div className="flex gap-4 text-xs text-primary/70">
                      <div className="flex gap-1">
                        <DIcons.Eye className="h-4 w-4" />
                        <p>{asset.views}</p>
                      </div>
                      <div className="flex gap-1">
                        <DIcons.Heart className="text-ali h-4 w-4" />
                        <LikeCountNumber
                          initialLikeCount={asset.likes.length}
                        />
                      </div>
                      <div className="flex gap-1">
                        <DIcons.Download className="h-4 w-4" />
                        <DownloadNumber
                          initialDownloadCount={asset.downloads}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {visibleCount < filteredAssets.length && (
        <div className="mt-6 flex justify-center">
          <Button onClick={() => setVisibleCount(visibleCount + LOAD_MORE)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export function ProfileAssetGrid({
  assets,
  likedAssets,
  user,
}: {
  assets: Asset[];
  likedAssets: Asset[];
  user;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [filteredLikedAssets, setFilteredLikedAssets] = useState(likedAssets);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  useEffect(() => {
    const sortAndFilterAssets = (assetList: Asset[]) => {
      const sortedAssets = [...assetList];

      switch (sortBy) {
        case "mostDownloaded":
          sortedAssets.sort((a, b) => b.downloads - a.downloads);
          break;
        case "mostLiked":
          sortedAssets.sort((a, b) => b.likes.length - a.likes.length);
          break;
        case "mostViewed":
          sortedAssets.sort((a, b) => b.views - a.views);
          break;
        case "latest":
        default:
          sortedAssets.sort(
            (a, b) =>
              new Date(b.uploadedAt).getTime() -
              new Date(a.uploadedAt).getTime(),
          );
      }

      return sortedAssets.filter((asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    };

    setFilteredAssets(sortAndFilterAssets(assets));
    setFilteredLikedAssets(sortAndFilterAssets(likedAssets));
    setVisibleCount(INITIAL_LOAD);
  }, [assets, likedAssets, searchTerm, sortBy]);

  const renderAssetGrid = (assetList: Asset[]) => (
    <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {assetList.slice(0, visibleCount).map((asset) => {
        const urls = asset.url.split(",");
        return (
          <Card
            key={asset.id}
            className={cn("focused group h-full overflow-hidden rounded-sm")}
          >
            <CardHeader className="border-b p-0">
              <AspectRatio className="overflow-hidden">
                <Link href={`/graphic/assets/${asset.id}`}>
                  <Image
                    src={urls[0] || "/placeholder.svg"}
                    alt={asset.title}
                    fill
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </Link>
              </AspectRatio>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-4">
              <CardTitle className="text-md truncate py-[2px] md:text-xl">
                {asset.title}
              </CardTitle>
              <div className="flex gap-4 text-xs text-primary/70">
                <div className="flex gap-1">
                  <DIcons.Eye className="h-4 w-4" />
                  <p>{asset.views}</p>
                </div>
                <div className="flex gap-1">
                  <DIcons.Heart className="text-ali h-4 w-4" />
                  <LikeCountNumber initialLikeCount={asset.likes.length} />
                </div>
                <div className="flex gap-1">
                  <DIcons.Download className="h-4 w-4" />
                  <DownloadNumber initialDownloadCount={asset.downloads} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div>
      <Tabs defaultValue="designed">
        <div className="mb-3">
          <div className="mt-3 grid items-center justify-center gap-3 md:flex md:justify-between">
            <Input
              type="text"
              placeholder="Search assets by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-60"
            />
            <TabsList>
              <TabsTrigger value="designed">Designed</TabsTrigger>
              <TabsTrigger value="liked">Liked</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-10 w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="mostDownloaded">Most Downloaded</SelectItem>
                <SelectItem value="mostLiked">Most Liked</SelectItem>
                <SelectItem value="mostViewed">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="designed">
          {renderAssetGrid(filteredAssets)}
        </TabsContent>

        <TabsContent value="liked">
          {renderAssetGrid(filteredLikedAssets)}
        </TabsContent>
        <TabsContent value="about">
          <AboutUser user={user} />
        </TabsContent>
      </Tabs>

      {visibleCount <
        Math.max(filteredAssets.length, filteredLikedAssets.length) && (
        <div className="mt-6 flex justify-center">
          <Button onClick={() => setVisibleCount(visibleCount + LOAD_MORE)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
