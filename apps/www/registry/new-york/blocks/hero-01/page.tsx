"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { StrokeDance } from "@/registry/default/ui/backgrounds/stroke-dance";
import { TypeWriter } from "@/registry/new-york/blocks/hero-01/components/type-writer";
import { DIcons } from "dicons";

import DotPattern from "@/components/ui/backgrounds/dot-pattern";
import { Button } from "@/components/ui/button";

export const description = "A simple Hero section";

export const iframeHeight = "600px";

export const containerClassName = "w-full h-full";

const Hero = () => {
  const talkAbout = [
    "Graphic Design",
    "Branding",
    "Web Design",
    "Web Develop",
    "Marketing",
    "UI UX",
    "Social Media",
  ];

  useEffect(() => {
    StrokeDance();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs leading-6 text-slate-600 ring-1 ring-slate-200 dark:bg-black dark:text-slate-400 dark:ring-slate-800">
            <DIcons.Shapes className="h-5 p-1" /> Introducing Dicons.
            <a
              href="/products/dicons"
              rel="noreferrer"
              className="hover:text-ali ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <DIcons.ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="border-ali/50 relative mx-auto h-full max-w-6xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-6 md:py-12">
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-4 -top-4 h-8 w-8"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-4 -left-4 h-8 w-8"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-4 -top-4 h-8 w-8"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-4 -right-4 h-8 w-8"
                />
                Your complete platform for the Design.
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>

              <DotPattern className="-z-10 opacity-50" width={5} height={5} />
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my creative playground! I&#39;m{" "}
            <span className="text-ali font-bold">Ali </span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I craft enchanting visuals for brands, and conjure design resources
            to empower others. I am an expert in design like{" "}
            <TypeWriter strings={talkAbout} />.
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/dashboard"}>
              <Button variant="default" size="lg">
                Start Project
              </Button>
            </Link>
            <Link href={"https://cal.com/aliimam/designali"} target="_blank">
              <Button variant="outline" size="lg">
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Hero;
