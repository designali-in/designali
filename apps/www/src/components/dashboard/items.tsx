 
"use client";

import type { Likes, Views } from "@/types/global";
import React from "react";
import { Link } from "@/src/components/ui/link";
import { DIcons } from "dicons";
import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { Skeleton } from "@/components/ui/skeleton";


import { Icons } from "../icons";
import NumberCounter from "../ui/texts/number-counter";

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

  const ddata: Card[] = [
    {
      title: " Total Views",
      link: "/agency",
      target: "",
      value: 3452,
      icon: <DIcons.Eye   className="h-5 w-5" />,
      linkText: "Agency",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
    {
      title: " Total Likes",
      link: "/products",
      target: "",
      value: 4577,
      icon: <DIcons.Heart strokeWidth={1} className="text-ali h-5 w-5" />,
      linkText: "Products",
      gradient: {
        startColor: "#ff0f7b",
        endColor: "#f945ff",
      },
    },
  ];

  return (
    <div className=" px-6">
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
              className="group relative overflow-hidden rounded-xl border border-dotted  p-4 transition-colors duration-150 hover:bg-accent "
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
                        <NumberCounter value={Number(value)} />
                      </span>
                    </>
                  ) : (
                    <Skeleton className="h-12 w-full" />
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
      link: "/agency",
      target: "",
      value: 3546,
      icon: (
        <DIcons.Eye 
          className="h-10 w-10 text-sky-500"
        />
      ),
      linkText: "Agency",
      gradient: {
        startColor: "#14b8a6",
        endColor: "#14b8a6",
      },
    },
    {
      title: " Total Likes",
      link: "/products",
      target: "",
      value: 1789,
      icon: <DIcons.Heart strokeWidth={1} className="text-ali h-10 w-10 p-1" />,
      linkText: "Products",
      gradient: {
        startColor: "#ef4444",
        endColor: "#ef4444",
      },
    },
  ];

  return (
    <div className="">
      <div className="grid h-full grid-cols-2 gap-4">
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
              className="w-full h-auto rounded-xl border border-dotted p-6 transition  md:py-10"
            >
              <div className="grid w-full h-auto items-center justify-center gap-2">
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
                        <NumberCounter
                          className="px-2 text-5xl font-bold tracking-tighter"
                          value={Number(value)}
                        />
                      </span>
                    </div>
                  ) : (
                    <Skeleton className="h-12 w-full" />
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
