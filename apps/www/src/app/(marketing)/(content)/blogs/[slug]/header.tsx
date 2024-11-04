"use client";

import type { Likes, Views } from "@/types";
import React from "react";
import ImageZoom from "@/comp/common/image-zoom";
import Image from "@/comp/mdx/layers/image";
import fetcher from "@/lib/fetcher";
import { UpdatesToolbar } from "@/src/comp/common/shate-toolbar";
import { LikeButtonIcon } from "@/src/comp/uis/like-button";
import { Skeleton } from "@designali/ui/skeleton";
import dayjs from "dayjs";
import useSWR from "swr";

interface HeaderProps {
  date: string;
  title: string;
  slug: string;
}

const Header = (props: HeaderProps) => {
  const { date, title, slug } = props;
  const [formattedDate, setFormattedDate] = React.useState("");

  const { data: viewsData, isLoading: viewsIsLoading } = useSWR<Views>(
    `/api/views?slug=${slug}`,
    fetcher,
  );

  const { data, isLoading } = useSWR<Likes>(`/api/likes?slug=${slug}`, fetcher);

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format("MMMM DD, YYYY"));
  }, [date]);

  React.useEffect(() => {
    const increment = async () => {
      await fetch("/api/views", {
        method: "POST",
        body: JSON.stringify({
          slug,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    increment();
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-bold md:text-5xl">{title}</h1>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="space-y-3">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Written by
          </div>
          <a
            href="https://www.aliimam.in/"
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
        <div className="space-y-3">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Published on
          </div>
          <div className="text-lg font-bold">
            {formattedDate || <Skeleton className="h-6 rounded-md" />}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Views
          </div>
          {viewsIsLoading ? (
            <Skeleton className="h-6 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{viewsData.views}</div>
          )}
        </div>

        <div className="space-y-3">
          <div className="text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            Likes
          </div>
          {isLoading || !data ? (
            <Skeleton className="h-6 rounded-md" />
          ) : (
            <div className="text-lg font-bold">{data.likes}</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <LikeButtonIcon slug={slug} />
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
