"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Icons } from "../icons";
import PageTitle from "../mdx/page-title";
import { HighlighterItem, HighlightGroup } from "../uis/highlighter";
import { Particles } from "../uis/particles";
import ShineBorder from "../uis/shine-border";

export const IconsGen: React.FC = () => {
  return (
    <section className="relative mx-auto my-20 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-black">
              <ShineBorder
                className="w-full border bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Particles
                  className="absolute inset-0 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                  quantity={50}
                />
                <div className="flex justify-center py-10">
                  <div className="flex h-full flex-col justify-center p-2 text-center">
                    <PageTitle
                      title={"Icon Maker"}
                      description={" Feel free to request for any icon!"}
                    />

                    <div className="z-20 flex justify-center gap-2">
                      <Link
                        href="/tools/dicons"
                        target=""
                        className={cn(
                          buttonVariants({
                            variant: "default",
                            size: "lg",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          Get Started
                          <Icons.arrowright className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};
