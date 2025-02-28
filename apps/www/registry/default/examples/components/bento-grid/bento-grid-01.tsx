import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DIcons } from "dicons";

export default function BentoGrid01() {
  return (
    <BentoGrid className="mx-auto max-w-4xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 1 || i === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800"></div>
);
const items = [
  {
    title: "The Essence of Creativity",
    description: "Heart of innovative and artistic expression.",
    header: <Skeleton />,
    icon: <DIcons.Palette className="h-4 w-4 text-primary" />,
  },
  {
    title: "Designing the Future",
    description: "See how visionary design shapes tomorrow’s world.",
    header: <Skeleton />,
    icon: <DIcons.LayoutGrid className="h-4 w-4 text-primary" />,
  },
  {
    title: "The Art of Visual Storytelling",
    description: "Craft compelling narratives through striking visuals.",
    header: <Skeleton />,
    icon: <DIcons.Camera className="h-4 w-4 text-primary" />,
  },
  {
    title: "Mastering User Experience",
    description:
      "Create seamless, intuitive, and engaging digital experiences.",
    header: <Skeleton />,
    icon: <DIcons.Tally5 className="h-4 w-4 text-primary" />,
  },
];
