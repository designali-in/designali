"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { DIcons } from "dicons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "react-photo-view/dist/react-photo-view.css";

import photo1 from "../../../../public/images/blogs/port/portfolio-01.jpg";
import photo2 from "../../../../public/images/blogs/port/portfolio-02.jpg";
import photo3 from "../../../../public/images/blogs/port/portfolio-03.jpg";
import photo4 from "../../../../public/images/blogs/port/portfolio-04.jpg";
import photo5 from "../../../../public/images/blogs/port/portfolio-05.jpg";
import photo6 from "../../../../public/images/blogs/port/portfolio-06.jpg";
import photo7 from "../../../../public/images/blogs/port/portfolio-07.jpg";
import photo8 from "../../../../public/images/blogs/port/portfolio-08.jpg";
import photo9 from "../../../../public/images/blogs/port/portfolio-09.jpg";
import photo10 from "../../../../public/images/blogs/port/portfolio-10.jpg";
import photo11 from "../../../../public/images/blogs/port/portfolio-11.jpg";
import photo12 from "../../../../public/images/blogs/port/portfolio-12.jpg";
import photo13 from "../../../../public/images/blogs/port/portfolio-13.jpg";
import photo14 from "../../../../public/images/blogs/port/portfolio-14.jpg";
import photo15 from "../../../../public/images/blogs/port/portfolio-15.jpg";
import photo16 from "../../../../public/images/blogs/port/portfolio-16.jpg";
import photo17 from "../../../../public/images/blogs/port/portfolio-17.jpg";
import photo18 from "../../../../public/images/blogs/port/portfolio-18.jpg";
import photo19 from "../../../../public/images/blogs/port/portfolio-19.jpg";
import photo20 from "../../../../public/images/blogs/port/portfolio-20.jpg";
import photo21 from "../../../../public/images/blogs/port/portfolio-21.jpg";
import photo22 from "../../../../public/images/blogs/port/portfolio-22.jpg";
import photo23 from "../../../../public/images/blogs/port/portfolio-23.jpg";
import photo24 from "../../../../public/images/blogs/port/portfolio-24.jpg";
import photo25 from "../../../../public/images/blogs/port/portfolio-25.jpg";
import photo26 from "../../../../public/images/blogs/port/portfolio-26.jpg";
import photo27 from "../../../../public/images/blogs/port/portfolio-27.jpg";
import photo28 from "../../../../public/images/blogs/port/portfolio-28.jpg";
import photo29 from "../../../../public/images/blogs/port/portfolio-29.jpg";
import photo30 from "../../../../public/images/blogs/port/portfolio-30.jpg";
import photo31 from "../../../../public/images/blogs/port/portfolio-31.jpg";
import photo32 from "../../../../public/images/blogs/port/portfolio-32.jpg";
import photo33 from "../../../../public/images/blogs/port/portfolio-33.jpg";
 

export const photoImages = [
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src,
  photo7.src,
  photo8.src,
  photo9.src,
  photo10.src,
  photo11.src,
  photo12.src,
  photo13.src,
  photo14.src,
  photo15.src,
  photo16.src,
  photo17.src,
  photo18.src,
  photo19.src,
  photo20.src,
  photo21.src,
  photo22.src,
  photo23.src,
  photo24.src,
  photo25.src,
  photo26.src,
  photo27.src,
  photo28.src,
  photo29.src,
  photo30.src,
  photo31.src,
  photo32.src,
  photo33.src,
];

export function CarouselSpacing() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector(".PhotoView-Portal");
      if (element) {
        element.requestFullscreen();
      }
    }
  }
  return (
    <div className="mx-auto my-20 max-w-3xl px-4 sm:px-6 md:max-w-full">
      <Carousel
        className="w-full max-w-sm md:max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="">
          <PhotoProvider
            maskOpacity={0.9}
            toolbarRender={({ onScale, scale }) => {
              return (
                <div className="flex items-center gap-4 px-1">
                  <DIcons.ZoomIn
                    onClick={() => onScale(scale + 0.5)}
                    strokeWidth={1.5}
                    className="w-5 hover:opacity-80"
                  />
                  <DIcons.ZoomOut
                    onClick={() => onScale(scale - 0.5)}
                    strokeWidth={1.5}
                    className="w-5 hover:opacity-80"
                  />
                  {document.fullscreenEnabled && (
                    <DIcons.Maximize
                      strokeWidth={2}
                      className="w-5 hover:opacity-80"
                      onClick={toggleFullScreen}
                    />
                  )}
                </div>
              );
            }}
          >
            {photoImages.map((item, index) => (
              <CarouselItem className="md:basis-1/3">
                <PhotoView key={index} src={item}>
                  <Image
                    src={item}
                    alt={""}
                    className="h-auto w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
                    width={500}
                    height={300}
                  />
                </PhotoView>
              </CarouselItem>
            ))}
          </PhotoProvider>
        </CarouselContent>
        <div className="mt-10 flex justify-center gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
