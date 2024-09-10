"use client";

import React from "react";
import ImageZoom from "@/components/common/image-zoom";
import Image from "@/components/mdx/layers/image";
import LikeButton from "@/components/ui/like-button";
import { UpdatesToolbar } from "@/src/components/common/shate-toolbar";
import { Skeleton } from "@designali/ui/skeleton";
import dayjs from "dayjs";

interface HeaderProps {
  date: string;
  title: string;
  slug: string;
  views: number;
}

const Header = (props: HeaderProps) => {
  const { date, title, slug, views } = props;
  const [formattedDate, setFormattedDate] = React.useState("");

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format("MMMM DD, YYYY"));
  }, [date]);

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-bold md:text-5xl">{title}</h1>
      <div className="grid grid-cols-2 items-center text-sm max-md:gap-8 md:grid-cols-4">
        <div className="space-y-3 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Written by
          </div>
          <a
            href="/"
            rel="noopener noreferrer"
            target=""
            className="flex items-center gap-2"
          >
            <Image
              src="/ali.jpeg"
              className="rounded-full object-cover"
              width={24}
              height={24}
              alt="Ali"
            />
            <p className="text-lg font-bold">Ali Imam</p>
          </a>
        </div>
        <div className="space-y-3 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Published on
          </div>
          <div className="text-lg font-bold">
            {formattedDate || <Skeleton className="h-6 w-32 rounded-md" />}
          </div>
        </div>

        <div className="space-y-3 md:mx-auto">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Views
          </div>
          <p>{views}</p>
        </div>
        <div className="flex gap-2">
          <LikeButton slug={slug} />
          <UpdatesToolbar posts={""} />
        </div>
      </div>

      <ImageZoom
        zoomImg={{
          src: `/images/blogs/${slug}/cover.jpg`,
          alt: title,
        }}
      >
        <Image
          src={`/images/blogs/${slug}/cover.jpg`}
          className="rounded-3xl"
          width={1200}
          height={630}
          lazy={false}
          alt={title}
        />
      </ImageZoom>
    </div>
  );
};

export default Header;
