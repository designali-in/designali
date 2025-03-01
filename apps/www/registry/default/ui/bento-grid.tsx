import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("z-10 grid grid-cols-8 gap-3", className)}>
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
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl group-hover:scale-105",
      // light styles
      "border border-dotted bg-white",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
  </div>
);

export { BentoCard, BentoGrid, BentoGridItem };

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-dotted border-accent  p-4 shadow-input transition duration-200 hover:shadow-xl  ",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold text-slate-600 dark:text-slate-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-slate-600 dark:text-slate-300">
          {description}
        </div>
      </div>
    </div>
  );
};
