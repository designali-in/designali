"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import {
  HighlighterItem,
  HighlightGroup,
} from "@/components/ui/backgrounds/highlighter";
import ImageZoom from "@/components/common/image-zoom";

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
    link: "https://cal.com/aliimam/designali",
    comlogo:
      "https://utfs.io/f/cb22130d-5369-4dab-a93a-44464be93e60-jrpk8e.jpg",
    company: "Brand Identity",
    price: " ",
  },
  {
    post: "SM Posts",
    link: "https://cal.com/aliimam/designali",
    comlogo:
      "https://utfs.io/f/813bb6c1-f742-4c1d-b0d3-75cd4d984c05-cmsrrn.jpg",
    company: "Social Media Marketing",
    price: " ",
  },
  {
    post: "Web Design",
    link: "https://cal.com/aliimam/designali",
    comlogo:
      "https://utfs.io/f/65154be4-d18f-4cea-8dc5-cb9443c623de-rrz747.jpg",
    company: "UI/UX, Landing Page",
    price: " ",
  },
  {
    post: "Web Develop",
    link: "https://cal.com/aliimam/designali",
    comlogo:
      "https://utfs.io/f/11b40ec3-5580-422e-9fe2-137da9569e2c-8rjek4.jpg",
    company: "Build in Next.js & Vercel",
    price: " ",
  },
];

export function Services() {
  return (
    <div className="px-6 pt-6 pb-3">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Service.map((Experience) => (
          <HighlightGroup className="group">
            <div
              key={Experience.post}
              className="group/item h-full md:col-span-6 lg:col-span-4"
              data-aos="fade-down"
            >
              <HighlighterItem className="h-full rounded-3xl">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border  ">
                  <div className="flex flex-col">
                    <div
                      className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                      aria-hidden="true"
                    >
                      <div className="translate-z-0 absolute inset-0 rounded-full   blur-[80px] " />
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
                    <Link target="_blank" href={Experience.link}>
                      <div className="p-6">
                        <h3 className="inline-flex items-baseline  pb-1 font-semibold ">
                          <span className="text-xl md:text-3xl">
                            {Experience.post}
                          </span>
                        </h3>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm ">{Experience.company}</h3>
                          <p className="text-md text-right leading-6">
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
    <div className=" grid grid-cols-2 gap-3 px-6 md:grid-cols-3 ">
      {DService.map((Experience) => (
        <HighlightGroup className="group">
          <div
            key={Experience.post}
            className="group/item h-full md:col-span-6 lg:col-span-4"
            data-aos="fade-down"
          >
            <HighlighterItem className="h-full rounded-3xl">
              <div className="relative z-20 h-full overflow-hidden rounded-3xl border ">
                <div className="flex flex-col">
                  <div
                    className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full " />
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <h3 className="inline-flex items-baseline  pb-1 ">
                      <span className="px-3 text-lg md:text-2xl">
                        {Experience.post}
                      </span>
                    </h3>
                    <Link
                      href={"https://cal.com/aliimam/designali"}
                      target="_blank"
                    >
                      <Button variant="outline" size="icon">
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
