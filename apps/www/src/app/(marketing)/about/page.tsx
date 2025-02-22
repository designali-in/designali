"use client";

import { Suspense } from "react";
import Image from "next/image";
import { Connect } from "@/comp/common/connect";
import ImageZoom from "@/comp/common/image-zoom";
import Logos from "@/comp/common/logos";
import About from "@/comp/marketing/about/about";
import { Experience } from "@/comp/marketing/about/experience";
import { Items } from "@/src/comp/marketing/items";
import { BackgroundBeams } from "@/src/comp/uis/background-beams";
import { cn } from "@/src/lib/utils";
import { Plus } from "lucide-react";

import { Avegra } from "../../fonts";

export default function HomePage() {
  return (
    <Suspense>
      <main className="px-6 xl:px-0">
        <div className="mx-auto mt-28 max-w-3xl md:mt-40 md:max-w-7xl">
          <p className="text-ali text-center tracking-widest">FOUNDER</p>

          <BackgroundBeams>
            <div className="relative mx-auto mb-20 mt-10 flex h-[336px] max-w-[250px] flex-col items-start border border-dotted p-4 md:h-[28rem] md:max-w-sm">
              <Plus
                strokeWidth={0.5}
                className="text-aired absolute -left-4 -top-4 h-8 w-8"
              />
              <Plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-4 -left-4 h-8 w-8"
              />
              <Plus
                strokeWidth={0.5}
                className="text-aired absolute -right-4 -top-4 h-8 w-8"
              />
              <Plus
                strokeWidth={0.5}
                className="text-aired absolute -bottom-4 -right-4 h-8 w-8"
              />

              <ImageZoom>
                <Image
                  src="/ali.jpg"
                  alt="Your Image"
                  height={700}
                  width={700}
                  className="h-[300px] object-cover md:h-[404px]"
                />
                <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
                  <h1
                    className={cn(
                      Avegra.className,
                      "z-20 items-center text-center text-[40px] md:text-[70px]",
                    )}
                  >
                    Ali Imam
                  </h1>{" "}
                </div>
              </ImageZoom>
            </div>
          </BackgroundBeams>
          <div className="mx-auto max-w-3xl md:max-w-7xl">
            <About />

            <Experience />

            <Items />
            <h1 className="my-6 mt-12 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400">
              Worked with Brands Like
            </h1>
            <Logos />
          </div>
        </div>
        <Connect />
      </main>
    </Suspense>
  );
}
