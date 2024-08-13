"use client";

import { Link } from "@/components/ui/link";
import { api } from "@/trpc/react";

import Counter from "../common/countnumber";
import { Icons } from "../icons";

interface Card {
  icon: React.ReactNode;
  title: string;
  link: string;
  target: string;
  value: number | undefined;
  linkText: string;
  gradient: {
    startColor: string;
    endColor: string;
  };
  suffix?: string;
}

const Items = () => {
  const youtubeQuery = api.youtube.get.useQuery();

  const likesQuery = api.likes.getCount.useQuery();
  const viewsQuery = api.views.getCount.useQuery();

  const data: Card[] = [
    {
      title: "Blog Total Views",
      link: "https://designali.in/blogs",
      target: "",
      value: 3462,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Blog",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
    {
      title: "Blog Total Likes",
      link: "https://designali.in/blogs",
      target: "",
      value: 5670,
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
      value: 99,
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
      value: 560,
      icon: <Icons.youtube strokeWidth={1} className="h-5 w-5" />,
      linkText: "YouTube",
      gradient: {
        startColor: "#ff0000",
        endColor: "#ca1a1a",
      },
    },
    {
      title: "Designs Total Views",
      link: "https://designali.in/blogs",
      target: "",
      value: 890,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Designs",
      gradient: {
        startColor: "#ff0f7b",
        endColor: "#f945ff",
      },
    },
    {
      title: "Guides Total Likes",
      link: "https://designali.in/guides",
      target: "",
      value: 785,
      icon: <Icons.album strokeWidth={1} className="h-5 w-5" />,
      linkText: "Guides",
      gradient: {
        startColor: "#fee000",
        endColor: "#ffce63",
      },
    },
  ];

  return (
    <div className="mb-4 mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
      {data.map((item) => {
        const {
          icon,
          link,
          title,
          value,
          linkText,
          gradient: { startColor, endColor },
          suffix,
        } = item;

        return (
          <Link
            key={item.title}
            target={item.target}
            href={link}
            className="group relative overflow-hidden rounded-lg border p-4 shadow-sm transition-colors hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-900"
          >
            <div className="flex flex-col items-center justify-center gap-2 transition-transform group-hover:-translate-y-24 group-focus:-translate-y-24">
              <div className="flex items-center gap-2 text-3xl font-bold">
                {value === 0 || value !== undefined ? (
                  <>
                    <span>{icon}</span>
                    <div
                      style={{
                        background: `linear-gradient(122.25deg, ${startColor} 12.16%, ${endColor} 70.98%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <Counter value={Number(value)} />
                      {suffix ? <span>{` ${suffix}`}</span> : null}
                    </div>
                  </>
                ) : (
                  "--"
                )}
              </div>
              <div className="text-center text-sm font-medium text-slate-800 dark:text-slate-200 md:text-lg">
                {title}
              </div>
            </div>
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-2xl font-bold opacity-0 transition group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
              {linkText}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
