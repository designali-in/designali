/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import CountUpNumber from "@/components/common/countnumber";
import { ImageZoomThree } from "@/components/common/gallery";
import cloudinary from "@/lib/cloudinary";
import { BentoCard, BentoGrid } from "@/src/components/uis/bento-grid";
import { Button } from "@designali/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/saccordion";
import { ScrollArea } from "@designali/ui/scroll-area";
import { FileTextIcon } from "@radix-ui/react-icons";
import { DIcons } from "dicons";
import { BellIcon, Share2Icon } from "lucide-react";

const data = await cloudinary.v2.search
  .expression(`folder:creatives/logos/*`)
  .sort_by("created_at", "desc")
  .max_results(9)
  .execute();

const features = [
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8 md:col-span-4 p-6 md:p-10",
    background: (
      <div>
        <p className="text-sm text-ali">Why choose me?</p>
        <h1 className="py-3 text-2xl font-thin tracking-wide md:text-3xl lg:text-5xl">
          Because I don't just design logos; <br />
        </h1>
        <p className="pb-3 text-xs text-slate-600 dark:text-slate-400 md:pr-10">
          I craft brand stories. With a keen eye for detail and a passion for
          creativity, I transform your vision into an iconic emblem. Your
          success is my priority, and I guarantee a logo that doesn't just stand
          out but leaves a lasting impression.
        </p>
        <Link
          href={"/solutions/website-develop#include"}
          className="absolute bottom-4 right-4"
        >
          <Button
            variant="outline"
            size="lgicon"
            className="h-8 w-8 md:h-12 md:w-12"
          >
            <DIcons.ArrowDownRight
              strokeWidth={1}
              className="animate-pulse text-ali"
            />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8  md:col-span-4 lg:col-span-2 p-6 md:p-10",
    background: (
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <DIcons.IndianRupee
          strokeWidth={0.5}
          className="h-8 w-8 text-slate-600 dark:text-slate-400 md:h-12 md:w-12"
        />
        <h1 className="flex h-full items-center justify-center text-7xl font-semibold text-ali">
          <CountUpNumber value={77} />%
        </h1>

        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
          of the purchase is done with its brand name only.
        </p>
      </div>
    ),
  },

  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8 md:col-span-4 lg:col-span-2 p-6 md:p-10",
    background: (
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <DIcons.Palette
          strokeWidth={0.5}
          className="h-8 w-8 text-slate-600 dark:text-slate-400 md:h-12 md:w-12"
        />
        <h1 className="flex h-full items-center justify-center text-7xl font-semibold text-ali">
          <CountUpNumber value={80} />%
        </h1>

        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
          color is a huge factor in brand recognition.
        </p>
      </div>
    ),
  },

  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8 p-6 md:p-10 md:col-span-4 lg:col-span-3",
    background: (
      <div className="grid items-center gap-4">
        <div className="flex">
          <h1 className="text-md text-ali md:text-2xl">The Logo Design Flow</h1>
        </div>
        <div className="flex items-center gap-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Scope</AccordionTrigger>
              <AccordionContent>
                The initial step with any logo design project is to fully
                understand what you are looking for. This allows us to work out
                how achievable your goals are and how best to create something
                brilliant for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Research</AccordionTrigger>
              <AccordionContent>
                Before the creative glitz and glam, comes the research. Suppose
                we don’t fully understand your brand and/or its place in your
                sector. We won’t be able to design a logo that captures
                everything about you and your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Design & Develop</AccordionTrigger>
              <AccordionContent>
                The fun begins. We will work on multiple different designs for
                your business, to fully understand the creative scope of the
                project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Refine</AccordionTrigger>
              <AccordionContent>
                Once you have looked over your designs, it’s time to refine
                chosen style.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Deliver & Grow</AccordionTrigger>
              <AccordionContent>
                The final logo is complete and you’ve signed it, it’s time to
                deliver the project to you. This is when we send over all the
                file types you need.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    ),
  },

  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8 p-3 md:col-span-4 lg:col-span-5",
    background: (
      <div>
        <ScrollArea className="h-[630px]">
          <ImageZoomThree images={data.resources} />
          <Link className="my-6 flex justify-center" href={"/works"}>
            <Button>See More</Button>
          </Link>
        </ScrollArea>
      </div>
    ),
  },
];

export function LogoCards() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
