"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";

import "@/styles/text.css";

import DotPattern from "@/components/ui/dot-pattern";
import { Button } from "@designali/ui/button";

import { renderCanvas } from "../common/render";
import { TypeWriter } from "../common/type";
import { Icons } from "../icons";

const Hero = () => {
  const talkAbout = [
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere Pro",
    "Cinema 4D",
    "Autodesk Maya",
    "Visual Studio Code",
    "Corel Draw",
    "ZBrush",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs leading-6 text-slate-600 ring-1 ring-slate-200 dark:bg-black dark:text-slate-400 dark:ring-slate-800">
            <Icons.shapes className="h-5 p-1" /> Introducing Dicons.
            <a
              href="/dicons"
              rel="noreferrer"
              className="ml-1 flex items-center font-semibold hover:text-ali"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <Icons.arrowright className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-6xl border border-ali/50 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:p-12">
              <span className="absolute bottom-20 right-32 hidden p-2 px-4 text-xs text-ali md:block">
                Design in India
              </span>
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Icons.plus
                  strokeWidth={4}
                  className="absolute -left-4 -top-4 h-8 w-8 text-ali"
                />
                <Icons.plus
                  strokeWidth={4}
                  className="absolute -bottom-4 -left-4 h-8 w-8 text-ali"
                />
                <Icons.plus
                  strokeWidth={4}
                  className="absolute -right-4 -top-4 h-8 w-8 text-ali"
                />
                <Icons.plus
                  strokeWidth={4}
                  className="absolute -bottom-4 -right-4 h-8 w-8 text-ali"
                />
                A digital designer with a touch of magic.
              </h1>
              <DotPattern className="-z-10 opacity-50" width={5} height={5} />
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my creative playground! I&#39;m{" "}
            <span className="font-bold text-ali">Ali </span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I craft enchanting visuals for brands, and conjure design resources
            to empower others. Your complete platform for the design. I am an
            expert in tools like <TypeWriter strings={talkAbout} />.
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/app/dashboard/overview"}>
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
