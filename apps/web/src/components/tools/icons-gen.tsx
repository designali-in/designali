"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@designali/ui";
import { buttonVariants } from "@designali/ui/button";

import { Icons } from "../icons";
import { HighlighterItem, HighlightGroup } from "../ui/highlighter";
import { Particles } from "../ui/particles";

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
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={50}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div className="-mt-20 flex h-full flex-col justify-center p-2 text-center md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 font-bold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text">
                        <span className="text-2xl md:text-4xl">
                          Icons Generator
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      Feel free to request for any icon!
                    </p>
                    <div className="flex justify-center gap-2">
                      <Link
                        href="/dicons"
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
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};
