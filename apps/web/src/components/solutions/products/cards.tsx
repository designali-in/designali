"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardStack } from "@/components/ui/image-card";
import { Avegra } from "@/src/app/fonts";
import { cn } from "@/src/lib/dutils";
import { Button } from "@designali/ui/button";
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

const ICONS3D = [
  {
    id: 1,
    name: "3D Icons",
    src: "/images/products/3dicons.jpg",
    designation: "Download. Edit. Upload.",
    content: <p>+100 Beautifully designed components.</p>,
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

export function Graaadients() {
  return (
    <div className="grid justify-center gap-4">
      <Link href="/dicons" className="rounded-3xl border">
        <CardStack items={DICONS} />
      </Link>
      <div className="grid justify-center gap-4 md:flex">
        <Link href="/products/graaadients" className="rounded-3xl border">
          <CardStack items={GRADS} />
        </Link>
        <Link href="/products/3dicons" className="rounded-3xl border">
          <CardStack items={ICONS3D} />
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
            <Link href="/dicons">
              <CardStack items={DICONS} />
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
        </CarouselContent>
      </Carousel>
    </div>
  );
}
