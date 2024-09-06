import Link from "next/link";
import { CarouselGraaadients } from "@/components/solutions/products/cards";
import { CarouselServices } from "@/components/solutions/services";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { DIcons } from "dicons";

import { Chatbot } from "../common/chat";
import Marquee from "../ui/marquee";

const features = [
  {
    name: "Notifications 3",
    className:
      "col-span-8 md:col-span-8 h-auto  cursor-pointer lg:col-span-6 xl:col-span-3",
    background: (
      <div className="">
        <CarouselGraaadients />
      </div>
    ),
  },
  {
    name: "",
    className: "col-span-8  md:col-span-4 lg:col-span-2 xl:col-span-2",
    background: <CarouselServices />,
  },
  {
    name: "",
    className: "col-span-8 md:col-span-4 lg:col-span-8 xl:col-span-3",
    background: <Chatbot />,
  },
  {
    name: "Notifications 3",
    className: "col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8",
    background: (
      <div>
        <Link href={"/dicons"}>
          <div className="flex h-full w-full gap-2">
            <div className="group relative w-full overflow-hidden rounded-2xl p-1 transition-colors duration-150 hover:bg-accent">
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-64 group-focus:-translate-y-24">
                <div className="flex items-center justify-center">
                  {" "}
                  <Marquee
                    direction="left"
                    speed={100}
                    delay={0}
                    pauseOnHover={true}
                  >
                    <DIcons.Activity
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Plus
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Award
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Printer
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.ChartBar
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.BadgePercent
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Bird
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Cat
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.Inbox
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                    <DIcons.ChartPie
                      strokeWidth={0.5}
                      className="h-10 w-10 rounded-md border p-2"
                    />
                  </Marquee>
                </div>
              </div>
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100">
                DIcons
              </span>
            </div>
          </div>
        </Link>
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
