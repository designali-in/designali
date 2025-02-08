"use client";

import RetroGrid from "@/registry/default/ui/backgrounds/retro-grid";

export default function RetroGrid01() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <RetroGrid className="opacity-20" angle={-75} />
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#458fff] via-[#b7ff00] to-[#ff0000] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span>
      <RetroGrid />
    </div>
  );
}
