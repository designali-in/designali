import Link from "next/link";

import { Avegra } from "@/lib/fonts/fonts";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; 
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CarouselGraaadients } from "./cards";
import { Chatbot } from "../../common/chat";
import { Stats } from "./stats";

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
        <div className="grid gap-4 p-3"> 
          <Stats />
        </div>
      </div>
    ),
  },
  {
    name: "Notifications 3",
    className: "col-span-8 md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: (
      <div >
        <div className="flex mt-6 h-full flex-col items-center justify-center gap-6 p-6">
          <div className="mx-auto mt-6 grid items-center justify-center text-center">
            <h3
              className={cn(
                Avegra.className,
                "   text-center text-3xl w-60 md:text-4xl"
              )}
            >
              Make your business shine with unlimited* creativity.
            </h3>
          </div>
          <p className="lg:text-md px-2 text-center text-xs font-light text-primary/60">
            Forget the messy job of hiring and surprise expenses. Enjoy
            top-notch designs whenever you want, all for a monthly price. Its
            really that easy!
          </p>
          <div className="grid justify-center gap-2">
            <Link href={"/pricing"}>
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
      <div className="relative w-full h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-md md:rounded-2xl"
        >
          <source src="/videos/designali.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
];

export function DBentoGrid() {
  return (
    <BentoGrid className="p-3">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
