import React from "react";
import { motion, MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex overflow-hidden bg-white dark:bg-black",
        className,
      )}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
        <span className="pointer-events-none absolute -top-1/4 h-[15vw] w-[15vw] animate-[gradient-border_4s_ease-in-out_infinite,gradient-1_10s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] blur-[1rem]"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[15vw] w-[15vw] animate-[gradient-border_4s_ease-in-out_infinite,gradient-2_10s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[15vw] w-[15vw] animate-[gradient-border_4s_ease-in-out_infinite,gradient-3_10s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] blur-[1rem]"></span>
        <span className="pointer-events-none absolute -bottom-1/4 right-0 h-[15vw] w-[15vw] animate-[gradient-border_4s_ease-in-out_infinite,gradient-4_10s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] blur-[1rem]"></span>
      </span>
    </MotionComponent>
  );
}
