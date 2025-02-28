"use client";

import { Avegra } from "@/lib/fonts/fonts";
import Editor from "@/components/lobby/products/dshapes/editor";
import { InstallShapes } from "@/components/lobby/products/dshapes/install-icon";
import Landing from "@/components/lobby/products/dshapes/landing";

import { cn } from "@/lib/utils";

import { getRandomShape, shapes } from "../../../../../../../packages/shapes/src";

// <Abstract className="" size={300} noise={false} />

export default function Home() {
  return (
    <div>
      <div>
        <div className="mx-auto mt-24 max-w-3xl px-6 md:mt-40 md:max-w-7xl xl:px-0">
          <div className="mb-10 flex justify-center"></div>

          <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
            TAKE A LOOK AT WHAT’S NEW RIGHT NOW.
          </p>
          <div className="grid items-center justify-center px-8 pb-1 text-center">
            <h3
              className={cn(
                Avegra.className,
                "z-20 inline-flex items-baseline bg-gradient-to-r from-purple-400 via-yellow-400 to-pink-400 bg-clip-text pb-1 text-center text-7xl text-transparent md:text-8xl"
              )}
            >
              DShapes
            </h3>{" "}
            <hr className="bg-ali mx-auto my-4 h-1 w-6 rounded border-0"></hr>
          </div>
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            {shapes.Abstract.length + shapes.Flowers.length} Abstract shapes
            with cool grainy gradient. Ready to use with any design dev project.
          </p>
        </div>
        <Editor initialShape={getRandomShape({ onlyId: true })} />
        <Landing />
        <InstallShapes />
      </div>
    </div>
  );
}
