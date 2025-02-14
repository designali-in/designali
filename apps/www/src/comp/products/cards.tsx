"use client";

import * as React from "react";
import Link from "next/link";
import { CardStack } from "@/src/comp/uis/image-card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const GRADS = [
  {
    id: 0,
    name: "Graaadients",
    src: "https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg",
    designation: "Download. Edit. Upload.",
    content: (
      <p>
        +1000 abstract gradient elements and backgrounds for your amazing design
        projects.
      </p>
    ),
  },
];

const EASING = [
  {
    id: 0,
    name: "Easing",
    src: "/images/products/grad-full.jpg",
    designation: "Download. Edit. Upload.",
    content: (
      <p>
        +1000 abstract gradient elements and backgrounds for your amazing design
        projects.
      </p>
    ),
  },
];

const DICONS = [
  {
    id: 1,
    name: "DIcons",
    src: "/images/products/dicons.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+10,000 Beautifully designed icons.</p>,
  },
];

const BLOCKS = [
  {
    id: 1,
    name: "Blocks",
    src: "https://res.cloudinary.com/deelfmnhg/image/upload/v1733892006/Neon_Graaadients_D1_3_ku1kkh.jpg",
    designation: "Copy. Paste. Edit.",
    content: <p>Clean, modern building blocks.</p>,
  },
];

const DSHAPES = [
  {
    id: 1,
    name: "",
    src: "https://utfs.io/f/dacf5051-c3ab-41f1-852a-98e4f24376c9-12vlav.jpg",
    designation: " ",
    content: <p></p>,
  },
];
const COLORS = [
  {
    id: 1,
    name: "Colors",
    src: "/images/products/shapes.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed shapes.</p>,
  },
];

const PATTERNS = [
  {
    id: 1,
    name: "Patterns",
    src: "/images/products/shapes.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed patterns.</p>,
  },
];

export function Graaadients() {
  return (
    <div className=" ">
      <div className="grid justify-center gap-4 md:grid-cols-2">
        <Link href="/products/dicons" className="rounded-3xl border">
          <CardStack items={DICONS} />
        </Link>
        <Link href="/products/blocks" className="rounded-3xl border">
          <CardStack items={BLOCKS} />
        </Link>
        <Link href="/products/graaadients" className="rounded-3xl border">
          <CardStack items={GRADS} />
        </Link>
        <Link href="/products/patterns" className="rounded-3xl border">
          <CardStack items={PATTERNS} />
        </Link>
        <Link href="/products/dshapes" className="rounded-3xl border">
          <CardStack items={DSHAPES} />
        </Link>
        <Link href="/products/colors" className="rounded-3xl border">
          <CardStack items={COLORS} />
        </Link>
        <Link href="/products/easings" className="rounded-3xl border">
          <CardStack items={EASING} />
        </Link>
      </div>
    </div>
  );
}

export function CarouselGraaadients() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  return (
    <div className=" ">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className=" ">
          <CarouselItem className=" ">
            <Link href="/products/dicons">
              <CardStack items={DICONS} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/blocks">
              <CardStack items={BLOCKS} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/graaadients">
              <CardStack items={GRADS} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/dshapes">
              <CardStack items={DSHAPES} />
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
