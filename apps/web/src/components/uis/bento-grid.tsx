import type { ReactNode } from "react";
import { cn } from "@designali/ui";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "z-10 mx-auto grid max-w-7xl grid-cols-8 gap-3 pb-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
}: {
  name: string;
  className: string;
  background: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl group-hover:scale-105 md:rounded-3xl",
      // light styles
      "border bg-white",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
  </div>
);

export { BentoCard, BentoGrid };
