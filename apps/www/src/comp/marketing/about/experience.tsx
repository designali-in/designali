"use client";

import React from "react";
import Image from "next/image";
import { HighlighterItem, HighlightGroup } from "@/comp/uis/highlighter";
import { Particles } from "@/comp/uis/particles";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Exp } from "./exp";

export interface Experience {
  post: string;
  comlogo: string;
  company: string;
  time: string;
}

export const Experiences: Experience[] = [
  {
    post: "Graphic Designer",
    comlogo: "/exp/3.jpg",
    company: "IDCUBE Systems · Full-time",
    time: "Feb 2024 - Present · Till date",
  },
  {
    post: "Graphic Designer",
    comlogo: "/exp/11.png",
    company: "Steadfast Nutrition · Full-time",
    time: "Aug 2023 - Feb 2024 · 6 mos",
  },
  {
    post: "Art Director",
    comlogo: "/exp/2.png",
    company: "HODM · Part-time",
    time: "Dec 2022 - July 2023 · 7 mos",
  },
  {
    post: "Graphic Designer",
    comlogo: "/exp/1.png",
    company: "SanchiConnect · Part-time",
    time: "Dec 2022 - Feb 2023 · 3 mos",
  },
  {
    post: "Sr. Graphic Designer",
    comlogo: "/exp/10.png",
    company: "Garage Productions · Full-time",
    time: "Dec 2020 - Dec 2022 · 2 yrs 1 mos",
  },
  {
    post: "Sr. Graphic Designer",
    comlogo: "/exp/9.png",
    company: "FormsADDA.com · Full-time",
    time: "Jun 2020 - Dec 2020 · 7 mos",
  },
  {
    post: "Senior Visualizer",
    comlogo: "/exp/8.png",
    company: "Yellow Straw · Full-time",
    time: "Nov 2018 - Jun 2020 · 1 yr 8 mos",
  },
  {
    post: "Faculty",
    comlogo: "/exp/7.png",
    company: "WLC College India Ltd. · Part-time",
    time: "Aug 2018 - Nov 2018 · 4 mos",
  },
  {
    post: "Animator",
    comlogo: "/exp/6.png",
    company: "Pointillist Media · Full-time",
    time: "Nov 2017 - Aug 2018 · 10 mos",
  },
  {
    post: "Tele Caller",
    comlogo: "/exp/5.png",
    company: "Jukaso Journeys · Full-time",
    time: "Nov 2016 - Aug 2017 · 10 mos",
  },
  {
    post: "Sales Executive",
    comlogo: "/exp/4.png",
    company: "Innovsource · Full-time",
    time: "Mar 2016 - Nov 2016 · 9 mos",
  },
  {
    post: "Permoter",
    comlogo: "/exp/3.png",
    company: "Cadbury Gifting India · Full-time",
    time: "Mar 2015 - Aug 2015 · 6 mos",
  },
];

export function Experience() {
  return (
    <div className="mt-20">
      <h1 className="mt-6 text-center text-lg font-bold">My Journey</h1>
      <Exp />
      <div className="">
        <Carousel
          className="w-full max-w-sm md:max-w-full"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Experiences.map((Experience) => (
              <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                <HighlightGroup className="group">
                  <div
                    key={Experience.post}
                    className="group/item h-full md:col-span-6 lg:col-span-4"
                    data-aos="fade-down"
                  >
                    <HighlighterItem className="rounded-3xl">
                      <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-dotted  bg-slate-100/50  dark:bg-black">
                        <Particles
                          className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                          quantity={50}
                          color={"#555555"}
                          vy={-0.2}
                        />

                        <div className="flex flex-col">
                          <div
                            className="pointer-events-none absolute bottom-0 right-1 -z-10 aspect-square w-1/2 -translate-y-1/2 translate-x-1"
                            aria-hidden="true"
                          >
                            <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-100 blur-[80px] dark:bg-slate-800" />
                          </div>

                          <div className="p-8">
                            <Image
                              src={Experience.comlogo}
                              alt={``}
                              className="h-[100px] w-[100px] object-cover"
                              width={300}
                              height={300}
                            />

                            <h3 className="mt-6 inline-flex items-baseline bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 bg-clip-text pb-1 text-center font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600 dark:bg-clip-text">
                              <span className="text-xl md:text-3xl">
                                {Experience.post}
                              </span>
                            </h3>
                            <h3 className="md:text-md text-sm leading-8 text-slate-600 dark:text-slate-400">
                              {Experience.company}
                            </h3>
                            <p className="text-xs leading-6 text-slate-600 dark:text-slate-400 md:text-sm">
                              {Experience.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </HighlighterItem>
                  </div>
                </HighlightGroup>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex justify-center gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
