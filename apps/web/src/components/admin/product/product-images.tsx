"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@designali/ui";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="space-y-4 p-3">
      <PhotoProvider>
        <PhotoView src={images[current]}>
          <Image
            src={images[current]}
            alt="product image"
            width={1000}
            height={1000}
            className="w-full rounded-2xl object-cover object-center"
          />
        </PhotoView>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={image}
              className={cn(
                "mr-2 cursor-pointer rounded-md border hover:border-ali",
                current === index && "rounded-md border-ali",
              )}
              onClick={() => setCurrent(index)}
            >
              <Image
                className="h-[50px] w-full rounded-sm object-cover  md:h-[100px] md:w-full md:rounded-md"
                src={image}
                alt={"image"}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
