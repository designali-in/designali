"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

import { BorderBeam } from "../ui/border-beam";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="home"
      className="relative mx-auto -mt-20 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div
        ref={ref}
        className="relative mx-auto mt-[8rem] max-w-7xl animate-fade-up p-1 opacity-100 [--animation-delay:200ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_20%,transparent)]"
      >
        <div
          className={` before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={200}
            duration={20}
            delay={11}
            colorFrom="#ffffff"
            colorTo="#f50537"
          />
          <Image
            src="/images/dash-dark.jpg"
            alt="Hero Image"
            width={900}
            height={900}
            className="relative hidden h-full w-full rounded-[inherit] border object-contain md:dark:block"
          />
          <Image
            src="/images/dash-light.jpg"
            alt="Hero Image"
            width={900}
            height={900}
            className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:hidden md:block"
          />
          <Image
            src="/images/dash-p-dark.jpg"
            alt="Hero Image"
            width={900}
            height={900}
            className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:block md:hidden md:dark:hidden lg:hidden"
          />
          <Image
            src="/images/dash-p-light.jpg"
            alt="Hero Image"
            width={900}
            height={900}
            className="relative block h-full w-full rounded-[inherit] border object-contain dark:hidden md:hidden lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
