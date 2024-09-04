"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { BorderBeam } from "../ui/border-beam";
import Safari from "../ui/safari";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="home"
      className="relative mx-auto -mt-20 max-w-7xl px-6 text-center xl:px-0"
    >
      <div
        ref={ref}
        className="relative mx-auto mt-[7rem] max-w-7xl animate-fade-up p-1 opacity-100 [--animation-delay:200ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_80%)] before:[filter:blur(180px)] ${
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

          <video
            className="object-fit relative h-full w-full object-cover"
            loop
            muted
            autoPlay
            src={
              "https://utfs.io/f/e3b1520f-8611-4b55-83fd-34ae09678b65-xd0uuu.mp4"
            }
            width={900}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
