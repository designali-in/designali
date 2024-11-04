"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@designali/ui/button";
import { DIcons } from "dicons";

import ImageZoom from "@/comp/common/image-zoom";
import { HighlighterItem, HighlightGroup } from "@/comp/uis/highlighter";

export interface Experience {
  post: string;
  comlogo: string;
  company: string;
  price: string;
  link: string;
}

export const Service: Experience[] = [
  {
    post: "Branding",
    link: "/solutions/branding",
    comlogo:
      "https://utfs.io/f/cb22130d-5369-4dab-a93a-44464be93e60-jrpk8e.jpg",
    company: "Brand Identity",
    price: " ",
  }, 
  {
    post: "SM Posts",
    link: "/solutions/sm-posts",
    comlogo:
      "https://utfs.io/f/813bb6c1-f742-4c1d-b0d3-75cd4d984c05-cmsrrn.jpg",
    company: "Social Media Marketing",
    price: " ",
  }, 
  {
    post: "Web Design",
    link: "/solutions/web-design",
    comlogo:
      "https://utfs.io/f/65154be4-d18f-4cea-8dc5-cb9443c623de-rrz747.jpg",
    company: "UI/UX, Landing Page",
    price: " ",
  },
  {
    post: "Web Develop",
    link: "/solutions/web-develop",
    comlogo:
      "https://utfs.io/f/11b40ec3-5580-422e-9fe2-137da9569e2c-8rjek4.jpg",
    company: "Build in Next.js & Vercel",
    price: " ",
  },
];

export function Services() {
  return (
    <div className="mt-10">
      <div className="grid gap-3 md:grid-cols-3">
        {Service.map((Experience) => (
          <HighlightGroup className="group">
            <div
              key={Experience.post}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <HighlighterItem className="h-full rounded-3xl">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                  <div className="flex flex-col">
                    <div
                      className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                      aria-hidden="true"
                    >
                      <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                    </div>

                    <ImageZoom>
                      <Image
                        src={Experience.comlogo}
                        alt={``}
                        className="h-full w-full object-cover transition hover:scale-95 hover:rounded-lg"
                        width={500}
                        height={500}
                      />
                    </ImageZoom>
                    <Link href={Experience.link}>
                      <div className="p-6">
                        <h3 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                          <span className="text-xl md:text-3xl">
                            {Experience.post}
                          </span>
                        </h3>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm text-slate-600 dark:text-slate-400">
                            {Experience.company}
                          </h3>
                          <p className="text-md text-right leading-6 text-slate-600 dark:text-slate-400">
                            {Experience.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        ))}
      </div>
    </div>
  );
}

export interface DExperience {
  post: string;
}

export const DService: DExperience[] = [
  {
    post: "Pitchdeck",
  },
  {
    post: "Banners",
  },
  {
    post: "Documents",
  },
  {
    post: "Thumbnail",
  },
  {
    post: "Portfolio",
  },
  {
    post: "Cover Page",
  },
  {
    post: "Resume",
  },
  {
    post: "Emailer",
  },
  {
    post: "PPT",
  },
  {
    post: "Ads",
  },
  {
    post: "Invitation",
  },
  {
    post: "Greeting Cards",
  },
];

export function Related() {
  return (
    <div className="mt-20 grid gap-3 md:grid-cols-3">
      {DService.map((Experience) => (
        <HighlightGroup className="group">
          <div
            key={Experience.post}
            className="group/item h-full md:col-span-6 lg:col-span-4"
            data-aos="fade-down"
          >
            <HighlighterItem className="h-full rounded-3xl">
              <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
                <div className="flex flex-col">
                  <div
                    className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <h3 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                      <span className="px-3 text-lg md:text-2xl">
                        {Experience.post}
                      </span>
                    </h3>
                    <Link
                      href={"https://cal.com/aliimam/designali"}
                      target="_blank"
                    >
                      <Button variant="outline" size="lgicon">
                        <DIcons.ArrowUpRight
                          strokeWidth={1}
                          className="h-8 hover:rotate-45"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </HighlightGroup>
      ))}
    </div>
  );
}
