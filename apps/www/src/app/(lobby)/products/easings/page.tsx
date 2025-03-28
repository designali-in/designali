import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ui/backgrounds/scroll-progress";

import Easings from "./easings";
import { cn } from "@/src/lib/utils";
import { Avegra } from "@/src/lib/fonts/fonts";

export const metadata: Metadata = {
  title: "Easing Classes",
  description:
    "A collection of easing utility classes to enhance your Tailwind CSS animations and transitions.",
};

const easings = [
  {
    name: "linear",
    points: [0, 0, 1, 1],
  },
  {
    name: "ease",
    points: [0.25, 0.1, 0.25, 1],
  },
  {
    name: "ease-in",
    points: [0.42, 0, 1, 1],
  },
  {
    name: "ease-out",
    points: [0, 0, 0.58, 1],
  },
  {
    name: "ease-in-out",
    points: [0.42, 0, 0.58, 1],
  },
  {
    name: "easeInSine",
    points: [0.12, 0, 0.39, 0],
  },
  {
    name: "easeOutSine",
    points: [0.61, 1, 0.88, 1],
  },
  {
    name: "easeInOutSine",
    points: [0.37, 0, 0.63, 1],
  },
  {
    name: "easeInQuad",
    points: [0.11, 0, 0.5, 0],
  },
  {
    name: "easeOutQuad",
    points: [0.5, 1, 0.89, 1],
  },
  {
    name: "easeInOutQuad",
    points: [0.45, 0, 0.55, 1],
  },
  {
    name: "easeInCubic",
    points: [0.32, 0, 0.67, 0],
  },
  {
    name: "easeOutCubic",
    points: [0.33, 1, 0.68, 1],
  },
  {
    name: "easeInOutCubic",
    points: [0.65, 0, 0.35, 1],
  },
  {
    name: "easeInQuart",
    points: [0.5, 0, 0.75, 0],
  },
  {
    name: "easeOutQuart",
    points: [0.25, 1, 0.5, 1],
  },
  {
    name: "easeInOutQuart",
    points: [0.76, 0, 0.24, 1],
  },
  {
    name: "easeInQuint",
    points: [0.64, 0, 0.78, 0],
  },
  {
    name: "easeOutQuint",
    points: [0.22, 1, 0.36, 1],
  },
  {
    name: "easeInOutQuint",
    points: [0.83, 0, 0.17, 1],
  },
  {
    name: "easeInExpo",
    points: [0.7, 0, 0.84, 0],
  },
  {
    name: "easeOutExpo",
    points: [0.16, 1, 0.3, 1],
  },
  {
    name: "easeInOutExpo",
    points: [0.87, 0, 0.13, 1],
  },
  {
    name: "easeInCirc",
    points: [0.55, 0, 1, 0.45],
  },
  {
    name: "easeOutCirc",
    points: [0, 0.55, 0.45, 1],
  },
  {
    name: "easeInOutCirc",
    points: [0.85, 0, 0.15, 1],
  },
  {
    name: "easeInBack",
    points: [0.36, 0, 0.66, -0.56],
  },
  {
    name: "easeOutBack",
    points: [0.34, 1.56, 0.64, 1],
  },
  {
    name: "easeInOutBack",
    points: [0.68, -0.6, 0.32, 1.6],
  },
];

export default function Page() {
  return (
    <main className="container-wrapper mt-4 rounded-t-3xl border-t">
      <ScrollProgress className="top-0" />
      <div className="">
         
        <h1
          className={cn(
            Avegra.className,
            "text-center mt-10 text-5xl tracking-tighter sm:text-7xl"
          )}
        >
          Easings
        </h1>
      </div>
      <div className="">
        <div className="p-6">
          <Easings easings={easings} />
        </div>
      </div>
    </main>
  );
}
