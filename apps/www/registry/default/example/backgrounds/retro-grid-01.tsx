"use client";

import RetroGrid from "@/registry/default/ui/backgrounds/retro-grid";

export default function RetroGrid01() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-dotted bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-l from-[#458fff] via-[#b7ff00] to-[#ff0000] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span>
      <RetroGrid />
    </div>
  );
}
