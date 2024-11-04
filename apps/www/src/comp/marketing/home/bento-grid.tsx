import Link from "next/link";
import { CarouselGraaadients } from "@/comp/products/cards";
import { Avegra } from "@/src/app/fonts";
import { BentoCard, BentoGrid } from "@/src/comp/uis/bento-grid"; 
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";

import { HomeItems } from "@/comp/marketing/items";
import { Chatbot } from "@/comp/common/chat";
import Counter from "@/comp/common/countnumber";
import DotPattern from "@/comp/uis/dot-pattern";
import Ripple from "@/comp/uis/ripple";
import ShineBorder from "@/comp/uis/shine-border";
 

const features = [
  {
    name: "Notifications 3",
    className:
      "col-span-8 md:col-span-4 h-auto  cursor-pointer lg:col-span-4 xl:col-span-4",
    background: (
      <div className="">
        <CarouselGraaadients />
      </div>
    ),
  },
  {
    name: "",
    className: "col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-4",
    background: <Chatbot />,
  },

  {
    name: "",
    className: "col-span-8 md:col-span-4  lg:col-span-3 xl:col-span-3",
    background: (
      <div>
        <div className="grid gap-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <Link className="cursor-pointer" href={"/about"}>
              <div className="relative h-full overflow-hidden rounded-xl border p-8 text-center hover:border-slate-300 dark:hover:border-slate-700">
                <p className="text-xs text-indigo-400 md:-mb-2">Experience</p>
                <h1 className="font-mono text-6xl font-bold tracking-tighter text-indigo-500 md:text-9xl">
                  <Counter value={8} />
                </h1>
                <p className="text-xs text-slate-600 dark:text-indigo-400 md:-mt-2">
                  Years
                </p>
                <DotPattern width={5} height={5} />
              </div>
            </Link>
            <Link className="cursor-pointer" href={"/solutions"}>
              <div className="relative h-full overflow-hidden rounded-xl border p-8 text-center hover:border-slate-300 dark:hover:border-slate-700">
                <p className="text-xs text-lime-400 md:-mb-2">Total</p>
                <h1 className="font-mono text-6xl font-bold tracking-tighter text-lime-500 md:text-9xl">
                  <Counter value={23} />
                </h1>
                <p className="text-xs text-lime-500 md:-mt-2">Reviews</p>
                <Ripple />
              </div>
            </Link>
          </div>
          <HomeItems />
        </div>
      </div>
    ),
  },
  {
    name: "Notifications 3",
    className: "col-span-8 md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <div>
        <div className="flex flex-col items-center justify-center gap-6 p-6">
          <div className="mx-auto mt-6 grid items-center justify-center text-center">
            <h3
              className={cn(
                Avegra.className,
                "z-20 inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-center text-3xl text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text md:text-4xl",
              )}
            >
              Make your business shine with unlimited* creativity.
            </h3>
          </div>
          <p className="lg:text-md px-2 text-center text-xs font-light text-slate-600 dark:text-slate-400">
            Forget the messy job of hiring and surprise expenses. Enjoy
            top-notch designs whenever you want, all for a monthly price. Its
            really that easy!
          </p>
          <div className="grid justify-center gap-2">
            <Link href={"/pricing#pricing"}>
              <Button variant="default" size="lg">
                See Pricing
              </Button>
            </Link>
            <Link href={"https://cal.com/aliimam/designali"} target="_blank">
              <Button variant="outline" size="lg">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "",
    className: "col-span-8 md:col-span-8 lg:col-span-3 xl:col-span-3",
    background: (
      <div>
        <ShineBorder className="" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <video
            autoPlay
            muted
            loop
            className="h-full w-full rounded-md md:rounded-2xl"
          >
            <source width={450} height={450} src="/videos/designali.mp4" />
          </video>
        </ShineBorder>
      </div>
    ),
  },
];

export function DBentoGrid() {
  return (
    <BentoGrid className="px-6 xl:px-0">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
