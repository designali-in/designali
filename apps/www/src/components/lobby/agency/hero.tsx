"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";

import "@/styles/text.css";

import { Button } from "@/components/ui/button";
import { renderCanvas } from "@/components/common/render";
import { DotPattern } from "@/components/ui/backgrounds/dot-pattern";
import { DIcons } from "dicons";

const Hero = () => {
  const talkAbout = [
    "Branding",
    "Logo Design",
    "Packaging",
    "UI UX Design",
    "Web Design",
    "Web Development",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn flex flex-col items-center justify-center px-4 text-center ">
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
                <DIcons.ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="border-ali/50 relative mx-auto h-full max-w-6xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:p-12">
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
                Design Without Limits.
              </h1>
              <DotPattern className="-z-10 opacity-50" width={5} height={5} />
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Subscription-Based, High-Quality Design.
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            Get agency-level designs without the agency price. A flat monthly
            rate for all your design needs. Like .
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/dashboard/agency/projects"}>
              <Button variant="default" size="lg">
                Get Start Project
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
