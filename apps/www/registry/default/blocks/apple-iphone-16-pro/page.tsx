"use client";

import CloserLook from "@/registry/default/blocks/apple-iphone-16-pro/components//closer-look";
import Hero from "@/registry/default/blocks/apple-iphone-16-pro/components/hero";
import Highlights from "@/registry/default/blocks/apple-iphone-16-pro/components/highlights";

export const description = "A simple Hero section";

export const iframeHeight = "600px";

export const containerClassName = "w-full h-full";

const iPhone16Pro = () => {
  return (
    <section id="home">
      <div className="bg-black">
        <Hero />
        <Highlights />
        <CloserLook />
      </div>
    </section>
  );
};

export default iPhone16Pro;
