"use client";

import * as React from "react";
import Image from "next/image";
import { DIcons } from "dicons";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Highlights = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true }),
  );
  return (
    <section
      id="highlights"
      className="relative h-full w-full overflow-hidden bg-neutral-900 p-10"
    >
      <div className="just relative flex flex-col py-10">
        <div className="grid justify-between md:flex">
          <h1 className="text-md hover:underline sm:text-4xl">
            Get the highlights.
          </h1>
          <div className="flex items-end gap-4 text-blue-500">
            <p>Watch the film</p>
            <DIcons.CirclePlay className="h-6 w-6" />
          </div>
        </div>
        <div className="py-10">
          <Carousel
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className=" flex">
              <CarouselItem className="basic-1/2 ">
                <Image
                  src={
                    "https://res.cloudinary.com/deelfmnhg/image/upload/v1734288045/highlights_apple_intelligence_endframe__esdley4zqkya_large_2x_nrim45.jpg"
                  }
                  alt={""}
                  className="h-auto w-full rounded-lg object-cover object-center"
                  width={500}
                  height={300}
                />
              </CarouselItem>
              <CarouselItem className=" ">
                <Image
                  src={
                    "https://res.cloudinary.com/deelfmnhg/image/upload/v1734288045/highlights_apple_intelligence_endframe__esdley4zqkya_large_2x_nrim45.jpg"
                  }
                  alt={""}
                  className="h-auto w-full rounded-lg object-cover object-center"
                  width={500}
                  height={300}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="mt-10 flex justify-center gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
