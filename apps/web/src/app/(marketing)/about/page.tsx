import Image from "next/image";
import About from "@/components/about/about";
import { Experience } from "@/components/about/experience";
import Items from "@/components/about/items";
import { Connect } from "@/components/common/connect";
import ImageZoom from "@/components/common/image-zoom";
import Logos from "@/components/common/logos";
import { SubscribeInput } from "@/src/components/common/subscribe/subscribe-input";
import { DIcons } from "@/src/components/dicons";
import { Icons } from "@/src/components/icons";
import PageTitle from "@/src/components/mdx/page-title";
import { flags } from "@designali/env";
import { cn } from "@designali/ui";

import { Avegra } from "../../fonts";

export default function HomePage() {
  return (
    <main className="px-6">
      <div className="mx-auto mt-28 max-w-3xl md:mt-40 md:max-w-5xl">
        <DIcons.alignleft strokeWidth={1} className="h-5 w-5" />
        <div className="relative mx-auto mt-10 flex h-[336px] max-w-[250px] flex-col items-start border border-slate-100 p-4 dark:border-slate-900 md:h-[28rem] md:max-w-sm">
          <Icons.plus
            strokeWidth={0.5}
            className="text-aired absolute -left-4 -top-4 h-8 w-8"
          />
          <Icons.plus
            strokeWidth={0.5}
            className="text-aired absolute -bottom-4 -left-4 h-8 w-8"
          />
          <Icons.plus
            strokeWidth={0.5}
            className="text-aired absolute -right-4 -top-4 h-8 w-8"
          />
          <Icons.plus
            strokeWidth={0.5}
            className="text-aired absolute -bottom-4 -right-4 h-8 w-8"
          />
          <ImageZoom>
            <Image
              src="/ali.jpg"
              alt="Your Image"
              height={1000}
              width={1000}
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
        <div className="mx-auto mt-20 max-w-3xl md:max-w-5xl">
          <About />
          <SubscribeInput group={"news"} />
          <Experience />
          <PageTitle
            title="AI Dashboard"
            description={`This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like YouTube and more.`}
          />
          {flags.stats ? <Items /> : null}
          <Items />
          <h1 className="my-6 mt-12 text-center text-xs font-semibold uppercase tracking-[.3em] text-slate-400">
            Worked with Brands Like
          </h1>
          <Logos />
        </div>
      </div>
      <Connect />
    </main>
  );
}
