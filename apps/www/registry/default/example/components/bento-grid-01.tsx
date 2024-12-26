import React from "react";
import { BentoGrid, BentoGridItem } from "@/registry/default/ui/bento-grid";
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
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <DIcons.CopyCheck className="h-4 w-4 text-primary" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <DIcons.FileImage className="h-4 w-4 text-primary" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <DIcons.Signpost className="h-4 w-4 text-primary" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <DIcons.TableCellsSplit className="h-4 w-4 text-primary" />,
  },
];
