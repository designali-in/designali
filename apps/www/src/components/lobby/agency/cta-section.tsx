"use client";

import { useEffect, useId, useRef, useState, JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Beam } from "./anibeams";
import ShineBorder from "@/components/ui/backgrounds/shine-border";
import { Timeline } from "./timeline";

const tiles = [
  {
    icon: (
      <Image
        src={"/images/blogs/port/portfolio-01.jpg"}
        alt={""}
        width={350}
        height={350}
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
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
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
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
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
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
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
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
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
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
        className="h-[120px] w-[200px] rounded-sm md:h-full md:w-full md:rounded-sm"
      />
    ),
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
        "relative h-full w-full cursor-pointer rounded-md border object-cover p-1 md:rounded-2xl md:p-2"
      )}
    >
      {card.icon}
    </motion.div>
  );
};

export default function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta" className="relative -mt-80">
      <div className=" ">
        <div className="flex  ">
          <div className="relative gap-3  flex h-full w-full flex-col items-center justify-center overflow-hidden  ">
            <Marquee
              direction="right"
              className="-delay-[200ms] [--duration:70s]"
            >
              <div className="gap-2 flex">
                {randomTiles1.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </div>
            </Marquee>
            <Marquee className="-delay-[200ms] [--duration:70s]">
              <div className="gap-2 flex">
                {randomTiles1.map((review, idx) => (
                  <Card key={idx} {...review} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta" className="relative p-6">
      <ShineBorder
        className=" border bg-white/5  shadow-2xl backdrop-blur-md dark:bg-black/5"
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
              href="/dashboard"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "default",
                }),
                "group rounded-[2rem] px-6 md:mt-4"
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
                "group rounded-[2rem] px-6 md:mt-4"
              )}
            >
              Book a call
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl" />
      </ShineBorder>
    </section>
  );
}
