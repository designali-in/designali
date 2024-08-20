"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { cn } from "@designali/ui";
import { buttonVariants } from "@designali/ui/button";
import { DIcons } from "dicons";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Marquee from "../ui/marquee";
import { Beam } from "./anibeams";
import { Timeline } from "./timeline";

const tiles = [
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-01.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-02.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-03.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-04.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-05.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-06.jpg"}
        alt={""}
        width={350}
        height={350}
        className="rounded-sm md:rounded-sm"
      />
    ),
    bg: <div className=""></div>,
  },
];

const dtiles = [
  {
    icon: <DIcons.Plus strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.Circle strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.Copy strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.Search strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.Shuffle strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.Download strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.AlignLeft strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.album strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.arrowright strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.eye strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.pen strokeWidth={1} />,
    bg: <div className=""></div>,
  },
  {
    icon: <DIcons.redo strokeWidth={1} />,
    bg: <div className=""></div>,
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-sm border p-1 md:rounded-2xl md:p-2",
        // light styles
        "bg-white",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

export default function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof dtiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...dtiles]));
    }
  }, []);

  return (
    <section id="cta" className="mb-[750px] md:-mt-20 md:mb-56">
      <div className="relative flex justify-center px-6 md:mt-20">
        <div className="absolute z-10 px-6">
          <ShineBorder
            className="mt-28 border bg-white/5 p-6 px-6 shadow-2xl backdrop-blur-md dark:bg-black/5 md:mt-10 md:px-20"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <h1 className="my-8 text-2xl md:text-2xl">How it Works?</h1>
            <div className="grid gap-6 md:flex">
              <div className="hidden w-[300px] md:block">
                <Beam />
              </div>
              <Timeline />
            </div>
            <div className="z-10 mt-6 flex flex-col items-center text-center text-primary">
              <h1 className="text-lg font-semibold md:text-4xl">
                Design anything you need
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                No credit card required.
              </p>
              <div className="mb-8 mt-4 grid gap-2 md:flex">
                <Link
                  href="/app/dashboard/overview"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "default",
                    }),
                    "group rounded-[2rem] px-6 md:mt-4",
                  )}
                >
                  Get Started
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
                <Link
                  target="_blank"
                  href="https://cal.com/aliimam/designali"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "group rounded-[2rem] px-6 md:mt-4",
                  )}
                >
                  Book a call
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl" />
          </ShineBorder>
        </div>
      </div>
      <div className="-mt-20 mb-[600px] md:mb-0">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative -mb-40 -mt-20 flex w-full flex-col items-center justify-center overflow-hidden md:mb-40">
            <Marquee className="[-delay-[200ms] [--duration:20s]" repeat={5}>
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>

            <Marquee
              reverse
              className="-delay-[200ms] [--duration:70s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee className="[--duration:70s]" repeat={5}>
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:70s]"
              repeat={8}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>

            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70%" />
          </div>
        </div>
      </div>
    </section>
  );
}
