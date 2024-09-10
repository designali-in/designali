/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import type { Likes, Views, YouTube } from "@/types";
import React from "react";
import { Link } from "@/components/ui/link";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

import Counter from "../common/countnumber";
import { Icons } from "../icons";

interface Card {
  icon: React.ReactNode;
  title: string;
  link: string;
  target: string;
  value: number | string | undefined;
  linkText: string;
  gradient: {
    startColor: string;
    endColor: string;
  };
}

export const Items = () => {
  const { data: vData } = useSWR<Views>(`/api/views`, fetcher);
  const { data: lData } = useSWR<Likes>(`/api/likes`, fetcher);
  const { data: yData } = useSWR<YouTube>(`/api/youtube`, fetcher);

  const ddata: Card[] = [
    {
      title: "Blog Total Views",
      link: "/blogs",
      target: "",
      value: vData?.views,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Blog",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
    {
      title: "Blog Total Likes",
      link: "/blogs",
      target: "",
      value: lData?.likes,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Blog",
      gradient: {
        startColor: "#ff0f7b",
        endColor: "#f945ff",
      },
    },
    {
      title: "YouTube Subscribers",
      link: "https://youtube.com/@designali-in",
      target: "_blank",
      value: yData?.subscribers,
      icon: <Icons.youtube strokeWidth={1} className="h-5 w-5" />,
      linkText: "YouTube",
      gradient: {
        startColor: "#ff0000",
        endColor: "#ca1a1a",
      },
    },
    {
      title: "YouTube Views",
      link: "https://youtube.com/@designali-in",
      target: "_blank",
      value: yData?.views,
      icon: <Icons.youtube strokeWidth={1} className="h-5 w-5" />,
      linkText: "YouTube",
      gradient: {
        startColor: "#ff0000",
        endColor: "#ca1a1a",
      },
    },
    {
      title: "Designs Total Views",
      link: "/blogs",
      target: "",
      value: vData?.views,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Designs",
      gradient: {
        startColor: "#ff0f7b",
        endColor: "#f945ff",
      },
    },
    {
      title: "Guides Total Likes",
      link: "/guides",
      target: "",
      value: lData?.likes,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Guides",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
  ];

  return (
    <div className=" ">
      <div className="mb-20 mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {ddata.map((item) => {
          const {
            icon,
            link,
            target,
            title,
            value,
            linkText,
            gradient: { startColor, endColor },
          } = item;

          return (
            <Link
              key={title}
              target={target}
              rel="noopener noreferrer"
              href={link}
              className="group relative overflow-hidden rounded-xl border border-slate-200 p-4 transition-colors duration-150 hover:bg-accent dark:border-slate-800"
            >
              <div className="flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24">
                <div className="flex items-center gap-2 text-3xl font-bold text-foreground">
                  {value ? (
                    <>
                      <span>{icon}</span>
                      <span
                        style={{
                          background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        <Counter value={Number(value)} />
                      </span>
                    </>
                  ) : (
                    "--"
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {title}
                </div>
              </div>
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-lg font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
                {linkText}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
