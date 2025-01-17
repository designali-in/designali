"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadNumber } from "@/comp/dashboard/assets/download-btn";
import { LikeCountNumber } from "@/comp/dashboard/assets/like-btn";
import { AspectRatio } from "@/registry/default/ui/aspect-ratio";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
};

export default function AssetGrid({ assets }: { assets: Asset[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const sortedAssets = [...assets].sort(
      (a, b) =>
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
    );

    const filtered = sortedAssets.filter((asset) =>
      asset.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredAssets(filtered);
  }, [assets, searchTerm]);

  useEffect(() => {
    let sortedAssets = [...assets];

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

    const filtered = sortedAssets.filter((asset) =>
      asset.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredAssets(filtered);
  }, [assets, searchTerm, sortBy]);

  return (
    <div>
      <div className="mb-4">
        <div className="mt-3 flex items-center justify-between gap-3">
          <Input
            type="text"
            placeholder="Search assets by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-60"
          />
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
      <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredAssets.map((asset) => {
          const urls = asset.url.split(",");
          return (
            <Card
              key={asset.id}
              className={cn("focused group h-full overflow-hidden rounded-sm")}
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
                              top: urls.length === 3 && index > 0 ? "50%" : "0",
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
    </div>
  );
}
