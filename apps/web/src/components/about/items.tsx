/* eslint-disable @typescript-eslint/no-unnecessary-condition */
"use client";

import type { Likes, Views, YouTube } from "@/types";
import React from "react";
import { Link } from "@/components/ui/link";
import fetcher from "@/lib/fetcher";
import { DIcons } from "dicons";
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
  const { data: yData } = useSWR<YouTube>("/api/youtube", fetcher);

  const ddata: Card[] = [
    {
      title: " Total Views",
      link: "/solutions",
      target: "",
      value: vData?.views,
      icon: <Icons.eye strokeWidth={1} className="h-5 w-5" />,
      linkText: "Solutions",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
    {
      title: " Total Likes",
      link: "/products",
      target: "",
      value: lData?.likes,
      icon: <DIcons.Heart strokeWidth={1} className="h-5 w-5 text-ali" />,
      linkText: "Products",
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
  ];

  return (
    <div className=" ">
      <h1 className="mt-6 text-center text-lg font-bold">Dashboard</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-slate-600 dark:text-slate-400">
        This is my personal dashboard, built with Next.js API routes deployed as
        serverless functions. I use this dashboard to track various metrics
        across platforms like Website, YouTube and more.
      </p>
      <div className="mb-20 mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
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
                      <span className="hidden md:block">{icon}</span>
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
                <div className="text-center text-xs text-slate-600 dark:text-slate-400 md:text-sm">
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

export const HomeItems = () => {
  const { data: vData } = useSWR<Views>(`/api/views`, fetcher);
  const { data: lData } = useSWR<Likes>(`/api/likes`, fetcher);

  const ddata: Card[] = [
    {
      title: " Total Views",
      link: "/solutions",
      target: "",
      value: vData?.views,
      icon: (
        <Icons.eye
          fill="#14b8a6"
          strokeWidth={1}
          className="h-10 w-10 text-white dark:text-black"
        />
      ),
      linkText: "Solutions",
      gradient: {
        startColor: "#14b8a6",
        endColor: "#14b8a6",
      },
    },
    {
      title: " Total Likes",
      link: "/products",
      target: "",
      value: lData?.likes,
      icon: <DIcons.Heart strokeWidth={1} className="h-10 w-10 p-1 text-ali" />,
      linkText: "Products",
      gradient: {
        startColor: "#ef4444",
        endColor: "#ef4444",
      },
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {ddata.map((item) => {
          const {
            icon,
            link,
            target,
            title,
            value,
            gradient: { startColor, endColor },
          } = item;

          return (
            <Link
              key={title}
              target={target}
              rel="noopener noreferrer"
              href={link}
              className="w-full rounded-xl border p-6 transition hover:border-slate-300 dark:hover:border-slate-700 md:py-10"
            >
              <div className="grid w-full items-center justify-center gap-2">
                <div className="grid items-center gap-2">
                  {value ? (
                    <div className="flex flex-col items-center justify-center gap-3">
                      <span className=" ">{icon}</span>
                      <span
                        style={{
                          background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        <Counter
                          className="px-2 text-5xl font-bold tracking-tighter"
                          value={Number(value)}
                        />
                      </span>
                    </div>
                  ) : (
                    <p className="text-center text-secondary">--</p>
                  )}
                </div>
                <div className="text-center text-xs text-slate-600 dark:text-slate-400 md:text-sm">
                  {title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
