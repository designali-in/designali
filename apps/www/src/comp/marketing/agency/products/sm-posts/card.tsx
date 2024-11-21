/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Link from "next/link";
import { ImageZoomThree } from "@/comp/common/gallery";
import { BentoCard, BentoGrid } from "@/src/comp/uis/bento-grid";
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
import { Separator } from "@/components/ui/separator";

const data = await cloudinary.v2.search
  .expression(`folder:creatives/creative/*`)
  .sort_by("created_at", "desc")
  .max_results(18)
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
        <h1 className="text-2xl font-thin tracking-wide md:text-3xl lg:text-5xl">
          Let’s create posts <br /> that convert likes into leads!
        </h1>

        <Link
          href={"/solutions/branding#process"}
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
    className: "col-span-8 md:col-span-4 p-6 md:p-10",
    background: (
      <div className="grid items-center gap-4">
        <div className="flex justify-between">
          <DIcons.Heart className="text-ali h-5 w-5 animate-pulse" />
          <p className="px-8 text-center font-mono text-xs text-slate-600 dark:text-slate-400">
            My designed post stats approx
          </p>
          <DIcons.Eye className="h-5 w-5 text-indigo-500" />
        </div>
        <div className="flex items-center justify-between">
          <div className="grid items-center gap-2 text-start">
            <p className="font-mono text-xs text-slate-600 dark:text-slate-400">
              likes
            </p>
            <span className="text-2xl font-semibold md:text-4xl">19K</span>
          </div>
          <div className="grid items-center gap-2 text-end">
            <p className="font-mono text-xs text-slate-600 dark:text-slate-400">
              views
            </p>
            <span className="text-2xl font-semibold md:text-4xl">3.2M</span>
          </div>
        </div>
        <Separator />
        <p className="px-8 text-center font-mono text-xs text-slate-600 dark:text-slate-400">
          I'm in love with social networks and I'm always looking for more
          knowledge to help enhance my designs in them.
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
          <h1 className="text-md text-ali md:text-2xl">Why Choose Me?</h1>
        </div>
        <div className="flex items-center gap-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Commitment to Excellence</AccordionTrigger>
              <AccordionContent>
                Our ethos is centered on delivering superior, value-driven
                solutions without compromising on affordability. Let us
                demonstrate our dedication through strategic, impactful, and
                imaginative branding solutions tailored just for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Scalability by Design</AccordionTrigger>
              <AccordionContent>
                We craft brand identities that truly mirror your business ethos
                while engaging your target demographic. Our approach ensures
                your brand remains vibrant, adaptable, and in tune with evolving
                tastes, technological advancements, and your company’s growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Purpose-Driven Approach</AccordionTrigger>
              <AccordionContent>
                Every element — from logos and typography to color schemes and
                brand voice — is meticulously harmonized to forge a brand with
                lasting impact. We aim for a seamless and enduring connection
                between you and your clientele.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Fueled by Partnership</AccordionTrigger>
              <AccordionContent>
                Our methodology fosters natural creativity, efficiency, and
                ample opportunities for client involvement. As the visionary
                behind your brand, and us as your creative champions, we
                collaboratively craft a brand that propels both you and your
                audience.
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
        <ScrollArea className="h-[600px]">
          <ImageZoomThree images={data.resources} />
          <Link className="my-6 flex justify-center" href={"/works"}>
            <Button>See More</Button>
          </Link>
        </ScrollArea>
      </div>
    ),
  },
];

export function SocialMedisCards() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
