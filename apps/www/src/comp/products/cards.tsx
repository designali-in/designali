"use client";

import * as React from "react";
import Link from "next/link";
import { CardStack } from "@/src/comp/uis/image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@designali/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
        </CarouselContent>
      </Carousel>
    </div>
  );
}
