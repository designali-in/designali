"use client";

import Image from "next/image";
import { Avegra } from "@/src/app/fonts";
import { InstallShapes } from "@/src/components/products/install-icon";
import Landing from "@/src/components/products/landing";
import { cn } from "@designali/ui";

import { Abstract } from "../../../../../../../packages/shapes/src";

export default function Home() {
  return (
    <div>
      <div>
        <div className="mx-auto mt-24 max-w-3xl px-6 md:mt-40 md:max-w-7xl xl:px-0">
          <div className="mb-10 flex justify-center">
            <Abstract size={300} className="" noise={false} />
          </div>
          <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
            TAKE A LOOK AT WHAT’S NEW RIGHT NOW.
          </p>
          <div className="grid items-center justify-center px-8 pb-1 text-center">
            <h3
              className={cn(
                Avegra.className,
                "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text pb-1 text-center text-7xl text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text md:text-8xl",
              )}
            >
              DShapes
            </h3>{" "}
            <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-ali"></hr>
          </div>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            100+ Abstract shapes with cool grainy gradient. Ready to use with
            any design dev project.
          </p>
        </div>
        <Landing />
        <InstallShapes />
      </div>
    </div>
  );
}
