/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import CountUpNumber from "@/comp/common/countnumber";
import { ImageZoomThree } from "@/comp/common/gallery";
import { TypeWriter } from "@/src/comp/common/type";
import { BentoCard, BentoGrid } from "@/src/comp/uis/bento-grid";
import WebVitals from "@/src/comp/uis/web-vitals";
import { FileTextIcon } from "@radix-ui/react-icons";
import { DIcons } from "dicons";
import { BellIcon, Share2Icon } from "lucide-react";

import cloudinary from "@/lib/cloudinary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const data = await cloudinary.v2.search
  .expression(`folder:creatives/uiux/*`)
  .sort_by("created_at", "desc")
  .max_results(3)
  .execute();

const talkAbout = ["Converts", "Build trust", "Guide visitors"];

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
        <p className="pb-3 text-xs text-slate-600 dark:text-slate-400">
          I specialized in web design and development, brand strategy, content
          marketing and more, to find and engage customers and drive revenue
          across all your channels.
        </p>
        <h1 className="text-2xl font-thin tracking-wide md:text-3xl lg:text-5xl">
          I make Website that <br />
          <TypeWriter strings={talkAbout} />.
        </h1>

        <Link
          href={"/solutions/website-develop#include"}
          className="absolute bottom-4 right-4"
        >
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 md:h-12 md:w-12"
          >
            <DIcons.ArrowDownRight
              strokeWidth={1}
              className="text-ali animate-pulse"
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
    className: "col-span-8 md:col-span-4 lg:col-span-2 p-6 md:p-10",
    background: (
      <div className="grid items-center gap-4 text-center">
        <h1 className="text-ali flex h-full items-center justify-center text-7xl font-semibold">
          <CountUpNumber value={100} />+
        </h1>

        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
          Websites and Landing Pages Design by Me
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
      <div className="grid items-center gap-4 text-center">
        <h1 className="text-ali flex h-full items-center justify-center text-7xl font-semibold">
          <CountUpNumber value={99} />%
        </h1>

        <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
          Unanimous Client Approval of Our Web Design.
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
    className: "col-span-8 md:col-span-4 lg:col-span-3 p-6 md:p-10",
    background: (
      <div className="flex justify-center gap-2 lg:gap-8">
        <div className="grid justify-center gap-2">
          <WebVitals value={98} duration={2500} RoundValue={0.98} />
          <p className="text-center font-mono text-xs text-slate-600 dark:text-slate-400">
            Performance
          </p>
        </div>
        <div className="grid justify-center gap-2">
          <WebVitals value={96} duration={2500} RoundValue={0.96} />
          <p className="text-center font-mono text-xs text-slate-600 dark:text-slate-400">
            Best Practice
          </p>
        </div>
        <div className="grid justify-center gap-2">
          <WebVitals value={100} duration={2500} RoundValue={1} />
          <p className="text-center font-mono text-xs text-slate-600 dark:text-slate-400">
            SEO
          </p>
        </div>
      </div>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-8 p-6 md:p-10 md:col-span-8 lg:col-span-5",
    background: (
      <div className="grid items-center">
        <div className="flex">
          <h1 className="text-md text-ali md:text-2xl">I am experts in</h1>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6">
          <DIcons.VercelFull className="h-24 w-24" />
          <DIcons.Nextjs className="h-24 w-24" />
          <DIcons.Typescript className="h-10 w-10" />
          <DIcons.Figma className="h-10 w-10" />
          <DIcons.NPM className="h-16 w-16" />
          <DIcons.Wordpress className="h-10 w-10" />
        </div>
        <p className="hidden items-center text-center font-mono text-sm text-slate-600 dark:text-slate-400 md:flex">
          I <DIcons.Heart className="text-ali mx-2 h-4 w-4 animate-pulse" />
          Coding and Designing modern digital experiences.
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
          <h1 className="text-md text-ali md:text-2xl">I can help you to</h1>
        </div>
        <div className="flex items-center gap-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Elevate</AccordionTrigger>
              <AccordionContent>
                Having a professional website shows you mean business, and a
                well-put-together online look makes people trust your brand
                more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Engage</AccordionTrigger>
              <AccordionContent>
                A good and easy-to-use website makes it simple for people to
                find what they need and do what you’d like them to do.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Convert</AccordionTrigger>
              <AccordionContent>
                Don’t just count on social media. A website made to turn
                visitors into buyers can really boost your sales by making sure
                the right people see you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <video
            className="object-fit h-full w-full rounded-md object-cover py-3"
            loop
            muted
            autoPlay
            src={
              "https://utfs.io/f/e3b1520f-8611-4b55-83fd-34ae09678b65-xd0uuu.mp4"
            }
            width={300}
            height={200}
          />
          <Link className="flex justify-center" href={"/products/dicons"}>
            <Button variant="outline">DIcons</Button>
          </Link>
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

export function WebsiteDevelopCards() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
