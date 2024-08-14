"use client";

import type { BlogPostCore } from "@/types";
import React from "react";
import Link from "next/link";
import { cn } from "@designali/ui";
import { Skeleton } from "@designali/ui/skeleton";
import dayjs from "dayjs";

import Image from "./layers/image";

interface PostCardsProps {
  posts: BlogPostCore[];
}

const PostCards = (props: PostCardsProps) => {
  const { posts } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="group grid gap-4 sm:grid-cols-2" data-testid="post-cards">
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
};

type PostCardProps = BlogPostCore;

const PostCard = (props: PostCardProps) => {
  const { _id, slug, title, summary, date } = props;
  const [formattedDate, setFormattedDate] = React.useState("");

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format("MMMM DD, YYYY"));
  }, [date]);

  return (
    <>
      <Link
        key={_id}
        href={`/blogs/${slug}`}
        className={cn(
          "relative flex flex-col rounded-3xl border border-slate-200 p-2 dark:border-slate-800",
          "hover:before:opacity-100",
        )}
        data-id="post-card"
      >
        <div className="absolute inset-px -z-20 rounded-[inherit] bg-background" />
        <Image
          src={`/images/blogs/${slug}/cover.jpg`}
          className="rounded-2xl hover:saturate-0"
          width={480}
          height={360}
          alt={title}
        />
        <div className="grow px-4">
          <h2 className="my-4 text-2xl font-semibold">{title}</h2>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            {summary}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500">
          <div className="flex gap-2"></div>
        </div>
        <div className="my-4 flex items-center gap-2 px-4 text-sm">
          {formattedDate || <Skeleton className="h-5 w-10" />}
          <div>&middot;</div>
        </div>
      </Link>
    </>
  );
};

export default PostCards;
