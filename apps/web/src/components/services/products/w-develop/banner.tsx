import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@designali/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@designali/ui/carousel";

export function Banner() {
  return (
    <div className="mt-10 md:mb-10">
      <Carousel className="w-full">
        <CarouselContent className="h-[320px] md:h-[530px]">
          <CarouselItem className="">
            <Card>
              <CardContent className="flex items-center justify-center p-2">
                <Image
                  src={"/images/dash-dark.jpg"}
                  alt={""}
                  className="h-[300px] w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0 md:h-[500px]"
                  width={500}
                  height={300}
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="">
            <Card>
              <CardContent className="flex items-center justify-center p-2">
                <Image
                  src={"/images/dash-dark.jpg"}
                  alt={""}
                  className="h-[300px] w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0 md:h-[500px]"
                  width={500}
                  height={300}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div className="right-0 mt-10 flex justify-center gap-3 md:absolute md:mt-14">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
