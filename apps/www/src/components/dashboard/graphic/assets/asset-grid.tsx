"use client";

import { useEffect, useState } from "react"; 

import Link from "next/link";
import { DownloadNumber } from "./download-btn";
import { LikeCountNumber } from "./like-btn";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

import { ProfileUser } from "./about-user";
import CldImage from "@/components/common/CloudImage";
import { useIsMobile } from "@/src/hooks/use-mobile";
import {
  CopyButton,
  ShareButton,
} from "@/src/components/mdx/layers/copy-button";
import { InspirationLikeButton } from "./inspiration-like-btn";
import { OpenWebsiteButton } from "./open-website";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

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

type Inspiration = {
  id: string;
  title: string;
  websitelink: string;
  visits: number;
  description: string | null;
  url: string;
  views: number;
  likes: { id: string }[];
  uploadedAt: string;
  tags: string[]; // Add this line to include tags
};

const INITIAL_LOAD = 21;
const LOAD_MORE = 21;
const INITIAL_LOAD3 = 8;
const LOAD_MORE3 = 8;

export function AssetGrid({
  assets,
  availableTags,
  isLiked,
}: {
  assets: Asset[];
  isLiked: boolean;
  availableTags: string[];
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentHash, setCurrentHash] = useState("");

  const uniqueTags = Array.from(new Set(availableTags)).sort((a, b) =>
    a.localeCompare(b)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash.replace("#", ""));
    }
  }, []); // Runs only on client side
  
  useEffect(() => {
    if (currentHash && uniqueTags.includes(currentHash)) {
      setSelectedTag(currentHash);
    } else {
      setSelectedTag("All");
    }
  }, [currentHash, uniqueTags]);
  
  const handleTabChange = (value: string) => {
    if (selectedTag !== value) {
      setSelectedTag(value);
      router.replace(`/graphic#${value}`, { scroll: false });
  
      // Update currentHash immediately
      setCurrentHash(value);
    }
  };

  useEffect(() => {
    let sortedAssets = [...assets];

    sortedAssets = sortedAssets.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "All" || asset.tags.includes(selectedTag))
    );

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
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
    }

    setFilteredAssets(sortedAssets);
    setVisibleCount(INITIAL_LOAD);
  }, [assets, searchTerm, sortBy, selectedTag]);

  return (
    <div>
      <Tabs value={selectedTag} onValueChange={handleTabChange}>
        <div className="mb-3">
          <div className="mt-3 grid md:flex justify-items-center md:justify-between gap-2">
            <Input
              type="text"
              placeholder="Search assets by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-60"
            />

            <div className="w-full overflow-hidden">
              <TabsList className="w-full items-center justify-center bg-transparent text-center">
                <ScrollArea className="w-full  whitespace-nowrap">
                  <TabsTrigger
                    className="rounded-full border data-[state=active]:text-white data-[state=active]:dark:text-black data-[state=active]:bg-black data-[state=active]:dark:bg-white mx-1"
                    value="All"
                  >
                    All
                  </TabsTrigger>
                  {uniqueTags.length > 0 ? (
                    uniqueTags.map((tag) => (
                      <TabsTrigger
                        className="px-4 mx-1 data-[state=active]:text-white data-[state=active]:dark:text-black data-[state=active]:bg-black data-[state=active]:dark:bg-white rounded-full border"
                        key={tag}
                        value={tag}
                      >
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
              <SelectTrigger className="h-10 w-60">
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
                  className="focused group h-full overflow-hidden rounded-sm"
                >
                  <CardHeader className="border-b border-dotted p-0">
                    <AspectRatio className="overflow-hidden">
                      <Link href={`/graphic/assets/${asset.id}`}>
                        <CldImage
                          src={urls[0] || "/placeholder.svg"}
                          alt={asset.title}
                          loading="lazy"
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
                        <DIcons.Bookmark01
                          className={`h-4 w-4 ${isLiked ? "text-ali fill-current" : ""}`}
                        />
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


export function AssetGridLobby({
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
    a.localeCompare(b)
  );

  useEffect(() => {
    let sortedAssets = [...assets];

    sortedAssets = sortedAssets.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "all" || asset.tags.includes(selectedTag))
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
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
    }

    setFilteredAssets(sortedAssets);
    setVisibleCount(INITIAL_LOAD);
  }, [assets, searchTerm, sortBy, selectedTag]);

  return (
    <div>
      <div className="p-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredAssets.slice(0, 9).map((asset) => {
          const urls = asset.url.split(",");
          return (
            <Card
              key={asset.id}
              className={cn("focused group h-full overflow-hidden rounded-sm")}
            >
              <CardHeader className="border-b border-dotted p-0">
                <AspectRatio className="overflow-hidden">
                  <Link href={`/graphic/assets/${asset.id}`}>
                    {urls.length > 1 ? (
                      <div className="relative h-full w-full">
                        {urls.slice(0, 1).map((url, index) => (
                          <CldImage
                            key={index}
                            src={url || "/placeholder.svg"}
                            alt={`${asset.title} - Image ${index + 1}`}
                            loading="lazy"
                            fill
                            className={cn(
                              "object-cover transition-all group-hover:scale-105",
                              urls.length === 2 && "w-1/2",
                              urls.length === 3 && index === 0
                                ? "w-1/2"
                                : "w-1/4",
                              urls.length === 4 && "h-1/2 w-1/2"
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
                      <CldImage
                        src={urls[0] || "/placeholder.svg"}
                        alt={asset.title}
                        loading="lazy"
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

export function ProfileAssetGrid({
  assets,
  likedAssets,
  likedInspiration,
  user,
  isLiked,
}: {
  assets: Asset[];
  likedInspiration: Inspiration[];
  likedAssets: Asset[];
  user: any;
  isLiked: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [filteredLikedAssets, setFilteredLikedAssets] = useState(likedAssets);
  const [filteredLikedInspirations, setFilteredLikedInspiration] =
    useState(likedInspiration);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [loading, setLoading] = useState(true);

  const isMobile = useIsMobile();
  const [isFullscreen, setIsFullscreen] = useState(false);

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
              new Date(a.uploadedAt).getTime()
          );
      }

      return sortedAssets.filter((asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    const sortAndFilterInspirations = (assetList: Inspiration[]) => {
      const sortedAssets = [...assetList];

      switch (sortBy) {
        case "mostDownloaded":
          sortedAssets.sort((a, b) => b.visits - a.visits);
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
              new Date(a.uploadedAt).getTime()
          );
      }

      return sortedAssets.filter((asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    setFilteredAssets(sortAndFilterAssets(assets));
    setFilteredLikedAssets(sortAndFilterAssets(likedAssets));
    setFilteredLikedInspiration(sortAndFilterInspirations(likedInspiration));
    setVisibleCount(INITIAL_LOAD);
  }, [assets, likedAssets, searchTerm, likedInspiration, sortBy]);

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
                  <CldImage
                    src={urls[0] || "/placeholder.svg"}
                    alt={asset.title}
                    loading="lazy"
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

  const renderInspirationGrid = (inspirationList: Inspiration[]) => (
    <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {inspirationList.slice(0, visibleCount).map((inspiration) => {
        const urls = inspiration.url.split(",");
        return (
          // eslint-disable-next-line react/jsx-key
          <Dialog>
            <DialogTrigger>
              <Card
                key={inspiration.id}
                className={cn(
                  "focused group h-full overflow-hidden rounded-sm"
                )}
              >
                <CardHeader className="border-b border-dotted p-0">
                  <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <div>
                      {urls.length > 1 ? (
                        <div className="relative h-full w-full">
                          {urls.slice(0, 1).map((url, index) => (
                            <CldImage
                              key={index}
                              src={url || "/placeholder.svg"}
                              alt={`${inspiration.title} - Image ${index + 1}`}
                              loading="lazy"
                              fill
                              className={cn(
                                "object-cover transition-all group-hover:scale-105"
                              )}
                            />
                          ))}
                        </div>
                      ) : (
                        <CldImage
                          src={urls[0] || "/placeholder.svg"}
                          alt={inspiration.title}
                          loading="lazy"
                          fill
                          className="h-full w-full object-cover transition-all group-hover:scale-105"
                        />
                      )}
                    </div>
                  </AspectRatio>
                </CardHeader>
                <CardContent className="flex items-center justify-between p-4">
                  <CardTitle className="text-md truncate py-[2px] md:text-xl">
                    {inspiration.title}
                  </CardTitle>
                  <div className="flex gap-4 text-xs text-primary/70">
                    <div className="flex gap-1">
                      <DIcons.Eye className="h-4 w-4" />
                      <p>{inspiration.views}</p>
                    </div>
                    <div className="flex gap-1">
                      <DIcons.Bookmark01
                        className={`h-4 w-4 ${isLiked ? "text-ali fill-current" : ""}`}
                      />
                      <LikeCountNumber
                        initialLikeCount={inspiration.likes.length}
                      />
                    </div>
                    <div className="flex gap-1">
                      <DIcons.ChevronRight className="h-4 w-4" />
                      <DownloadNumber
                        initialDownloadCount={inspiration.visits}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent
              className={cn(
                "flex flex-col p-0 gap-0 overflow-hidden bg-background transition-all duration-200",
                isMobile
                  ? "w-screen h-screen max-w-none m-0"
                  : isFullscreen
                    ? "w-screen h-screen max-w-none m-0"
                    : "w-[90vw] h-[90vh] max-w-[1400px]"
              )}
            >
              {!isMobile && (
                <DialogHeader className="h-14 px-4 flex pb-2 flex-row items-center justify-between border-b text-sm">
                  <div className="flex items-center gap-4">
                    <DialogTitle className="text-xl font-medium">
                      {inspiration.title}
                    </DialogTitle>
                    <DialogDescription className="w-60 truncate">
                      {inspiration.description}
                    </DialogDescription>
                  </div>
                  <div>
                    <p className="border hidden lg:flex items-center gap-2 bg-secondary text-primary/70 rounded-full p-1 px-3">
                      <CopyButton
                        value={inspiration.websitelink}
                        variant="ghost"
                        className="h-4  w-4 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
                      />
                      {inspiration.websitelink}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShareButton
                      value={inspiration.websitelink}
                      variant="ghost"
                      className="h-8 w-8 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
                    />
                    <InspirationLikeButton
                      inspirationId={inspiration.id}
                      initialLikeCount={inspiration.likes.length}
                      initialIsLiked={isLiked}
                    />
                    <OpenWebsiteButton
                      inspirationId={inspiration.id}
                      websiteLink={inspiration.websitelink}
                      initialVisitCount={inspiration.visits}
                    />
                    <DialogClose>
                      <Button size={"icon"} variant="outline">
                        <DIcons.Close size={16} />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
              )}
              <div className="flex-1 h-[calc(80vh-3.5rem)] overflow-hidden relative">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
                  </div>
                )}
                <div className="w-[125%] h-[125%] origin-top-left scale-[0.8]">
                  <iframe
                    src={inspiration.websitelink}
                    className="w-full h-full border-0"
                    onLoad={() => setLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              {isMobile && (
                <div className="h-16 flex flex-row items-center justify-between border-t text-sm px-4 space-y-0 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col min-w-0">
                      <DialogTitle className="text-xl font-medium">
                        {inspiration.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <InspirationLikeButton
                      inspirationId={inspiration.id}
                      initialLikeCount={inspiration.likes.length}
                      initialIsLiked={isLiked}
                    />
                    <DialogClose>
                      <Button size={"icon"}>
                        <ArrowLeft size={16} />
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );

  return (
    <div>
      <Tabs defaultValue="designed">
        <div className="mb-3">
          <div className="mt-3 grid md:flex justify-items-center md:justify-between gap-2">
            <Input
              type="text"
              placeholder="Search assets by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-60"
            />
            <TabsList className="w-auto items-center justify-center text-center shadow-xl lg:w-auto">
              <ScrollArea className="whitespace-nowrap">
              <div  >
                <TabsTrigger  value="designed">Designed</TabsTrigger>
                <TabsTrigger value="liked">
                  <DIcons.Bookmark01 className="w-3 h-3 mr-1" /> Assets
                </TabsTrigger>
                <TabsTrigger value="inspiration">
                  <DIcons.Bookmark01 className="w-3 h-3 mr-1" /> Inspirations
                </TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </TabsList>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-10 w-60">
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
        <TabsContent value="inspiration">
          {renderInspirationGrid(filteredLikedInspirations)}
        </TabsContent>
        <TabsContent value="about">
          <ProfileUser user={user} />
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

export function RelatedAssetGrid({ assets }: { assets: Asset[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD3);

  useEffect(() => {
    const sortAndFilterAssets = (assetList: Asset[]) => {
      const sortedAssets = [...assetList];

      switch (sortBy) {
        default:
          sortedAssets.sort(
            (a, b) =>
              new Date(b.uploadedAt).getTime() -
              new Date(a.uploadedAt).getTime()
          );
      }

      return sortedAssets.filter((asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };

    setFilteredAssets(sortAndFilterAssets(assets));
    setVisibleCount(INITIAL_LOAD3);
  }, [assets, searchTerm, sortBy]);

  const renderAssetGrid = (assetList: Asset[]) => (
    <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
                  <CldImage
                    src={urls[0] || "/placeholder.svg"}
                    alt={asset.title}
                    loading="lazy"
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
              <div className="md:flex hidden gap-4 text-xs text-primary/70">
                <div className="flex gap-1">
                  <DIcons.Eye className="h-4 w-4" />
                  <p>{asset.views}</p>
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
      <div>{renderAssetGrid(filteredAssets)}</div>
      {visibleCount < Math.max(filteredAssets.length) && (
        <div className="my-6 flex justify-center">
          <Button onClick={() => setVisibleCount(visibleCount + LOAD_MORE3)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
