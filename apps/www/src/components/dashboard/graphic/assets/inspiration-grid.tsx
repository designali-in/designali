"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DownloadNumber } from "./download-btn";
import { LikeCountNumber } from "./like-btn";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/src/lib/utils";
import { DIcons, ExternalLink } from "dicons";

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
import { useIsMobile } from "@/hooks/use-mobile";

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

import CldImage from "@/components/common/CloudImage";
import { OpenWebsiteButton } from "./open-website";
import { ArrowLeft, Loader2 } from "lucide-react";
import { InspirationLikeButton } from "./inspiration-like-btn";
import {
  ShareButton,
  CopyButton,
} from "@/src/components/mdx/layers/copy-button";

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

export function InspirationGrid({
  inspirations,
  isLiked,
  availableTags,
}: {
  inspirations: Inspiration[];
  isLiked: boolean;
  availableTags: string[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInspirations, setFilteredInspirations] =
    useState(inspirations);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [selectedTag, setSelectedTag] = useState("all");
  const [loading, setLoading] = useState(true);

  const isMobile = useIsMobile();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Get unique tags from availableTags
  const uniqueTags = Array.from(new Set(availableTags)).sort((a, b) =>
    a.localeCompare(b)
  );

  useEffect(() => {
    let sortedInspirations = [...inspirations];

    sortedInspirations = sortedInspirations.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "all" || asset.tags.includes(selectedTag))
    );

    // Then, sort the filtered assets
    switch (sortBy) {
      case "mostDownloaded":
        sortedInspirations.sort((a, b) => b.visits - a.visits);
        break;
      case "mostLiked":
        sortedInspirations.sort((a, b) => b.likes.length - a.likes.length);
        break;
      case "mostViewed":
        sortedInspirations.sort((a, b) => b.views - a.views);
        break;
      case "latest":
      default:
        sortedInspirations.sort(
          (a, b) =>
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
    }

    setFilteredInspirations(sortedInspirations);
    setVisibleCount(INITIAL_LOAD);
  }, [inspirations, searchTerm, sortBy, selectedTag]);

  return (
    <div>
      <Tabs value={selectedTag} onValueChange={setSelectedTag}>
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
                    value="all"
                  >
                    All
                  </TabsTrigger>
                  {uniqueTags.length > 0 ? (
                    uniqueTags.map((tag) => (
                      <TabsTrigger
                        className="px-4 mx-1  data-[state=active]:text-white data-[state=active]:dark:text-black data-[state=active]:bg-black data-[state=active]:dark:bg-white rounded-full border"
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
                <SelectItem value="mostDownloaded">Most Visited</SelectItem>
                <SelectItem value="mostLiked">Most Liked</SelectItem>
                <SelectItem value="mostViewed">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value={selectedTag}>
          <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {filteredInspirations.slice(0, visibleCount).map((inspiration) => {
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
                            initialDownloadCount={inspiration.visits}
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
        </TabsContent>
      </Tabs>

      {visibleCount < filteredInspirations.length && (
        <div className="mt-6 flex justify-center">
          <Button onClick={() => setVisibleCount(visibleCount + LOAD_MORE)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export function InspirationGridLobby({
  inspirations,
  isLiked,
}: {
  inspirations: Inspiration[];
  isLiked: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInspirations, setFilteredInspirations] =
    useState(inspirations);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [selectedTag, setSelectedTag] = useState("all");
  const [loading, setLoading] = useState(true);

  const isMobile = useIsMobile();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let sortedInspirations = [...inspirations];

    sortedInspirations = sortedInspirations.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "all" || asset.tags.includes(selectedTag))
    );

    // Then, sort the filtered assets
    switch (sortBy) {
      case "mostDownloaded":
        sortedInspirations.sort((a, b) => b.visits - a.visits);
        break;
      case "mostLiked":
        sortedInspirations.sort((a, b) => b.likes.length - a.likes.length);
        break;
      case "mostViewed":
        sortedInspirations.sort((a, b) => b.views - a.views);
        break;
      case "latest":
      default:
        sortedInspirations.sort(
          (a, b) =>
            new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
    }

    setFilteredInspirations(sortedInspirations);
    setVisibleCount(INITIAL_LOAD);
  }, [inspirations, searchTerm, sortBy, selectedTag]);

  return (
    <div>
      <div className="p-3 pt-0 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredInspirations.slice(0, 6).map((inspiration) => {
          const urls = inspiration.url.split(",");
          return (
            // eslint-disable-next-line react/jsx-key
            <Dialog key={inspiration.id}>
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
                        initialDownloadCount={inspiration.visits}
                      />
                      <DialogClose> 
                          <DIcons.Close className="h-4 w-4" /> 
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
    </div>
  );
}
