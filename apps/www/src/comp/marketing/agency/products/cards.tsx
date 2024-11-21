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

const ICONS3D = [
  {
    id: 1,
    name: "3D Icons",
    src: "/images/products/3dicons.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed components.</p>,
  },
];

const ICONS2D = [
  {
    id: 1,
    name: "2D Icons",
    src: "/images/products/3dbg.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed icons.</p>,
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

const DSHAPES = [
  {
    id: 1,
    name: "DShapes",
    src: "/images/products/shapes.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed shapes.</p>,
  },
];

export function Graaadients() {
  return (
    <div className=" ">
      <div className="grid justify-center gap-4 md:grid-cols-2">
        <Link href="/products/dicons" className="rounded-3xl border">
          <CardStack items={DICONS} />
        </Link>
        <Link href="/products/dshapes" className="rounded-3xl border">
          <CardStack items={DSHAPES} />
        </Link>
        <Link href="/products/graaadients" className="rounded-3xl border">
          <CardStack items={GRADS} />
        </Link>
        <Link href="/products/3dicons" className="rounded-3xl border">
          <CardStack items={ICONS3D} />
        </Link>
        <Link href="/products/2dicons" className="rounded-3xl border">
          <CardStack items={ICONS2D} />
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
            <Link href="/products/dshapes">
              <CardStack items={DSHAPES} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/graaadients">
              <CardStack items={GRADS} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/3dicons">
              <CardStack items={ICONS3D} />
            </Link>
          </CarouselItem>
          <CarouselItem className=" ">
            <Link href="/products/2dicons">
              <CardStack items={ICONS2D} />
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
