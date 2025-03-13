"use client";

import Image from "next/image";
import CloserLook from "@/registry/default/blocks/brands/apple-iphone-16-pro/components//closer-look";
import Hero from "@/registry/default/blocks/brands/apple-iphone-16-pro/components/hero";
import Highlights from "@/registry/default/blocks/brands/apple-iphone-16-pro/components/highlights";

export const description = "A simple Hero section";

export const iframeHeight = "600px";

export const containerClassName = "w-full h-full";

const iPhone16Pro = () => {
  return (
    <section id="home">
      <div className="bg-black">
        <div className=" flex justify-center px-10">
          <Image
            src="https://res.cloudinary.com/deelfmnhg/image/upload/v1735048891/banner_hello_yqpg3b.jpg"
            alt="Your Image"
            height={500}
            width={500}
            className="z-20 mt-20 h-full w-96 object-cover  "
          />
        </div>
        <Hero />
        <Highlights />
        <CloserLook />
      </div>
    </section>
  );
};

export default iPhone16Pro;
