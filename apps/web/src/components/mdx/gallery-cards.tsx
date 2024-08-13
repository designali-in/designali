"use client";

import type { GalleryPostCore, Likes, Views } from "@/types";
import React from "react";
import Link from "next/link";
import fetcher from "@/lib/fetcher";
import { cn } from "@designali/ui";
import { Skeleton } from "@designali/ui/skeleton";
import useSWR from "swr";

import Image from "./layers/image";

interface PostCardsProps {
  posts: GalleryPostCore[];
  initialDisplayPosts?: GalleryPostCore[];
}

const PostCards = (props: PostCardsProps) => {
  const { posts = [] } = props;

  return (
    <>
      <div className="grid gap-3 md:grid-cols-3" data-testid="post-cards">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </>
  );
};

type PostCardProps = GalleryPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title } = props;
  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher,
  );
  const { data: likesData, isLoading: likesIsLoading } = useSWR<Likes>(
    `/api/likes?slug=${slug}`,
    fetcher,
  );

  return (
    <>
      <Link
        key={_id}
        href={`/gallery/${slug}`}
        className={cn(
          "relative flex flex-col rounded-3xl border border-slate-200 p-2 dark:border-slate-800",
          "hover:before:opacity-100",
        )}
        data-id="post-card"
      >
        <div className="absolute inset-px -z-20 rounded-[inherit] bg-background" />
        <Image
          src={`/images/gallery/${slug}/cover.jpg`}
          className="h-full w-full rounded-2xl object-cover hover:saturate-0"
          width={480}
          height={360}
          alt={title}
        />
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="grow">
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                {likesIsLoading ? (
                  <Skeleton className="h-5 w-10 rounded-md" />
                ) : (
                  <div>{likesData?.likes} likes</div>
                )}
                <div>&middot;</div>
                {viewsIsLoading ? (
                  <Skeleton className="h-5 w-10 rounded-md" />
                ) : (
                  <div>{viewsData?.views} views</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCards;
