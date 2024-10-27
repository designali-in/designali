// Dependencies: npm install dicons

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

export default function Button27() {
  const [volume, setVolume] = useState(3); // Initialize volume state (0-9)

  const decreaseVolume = () => setVolume((prev) => Math.max(0, prev - 1));
  const increaseVolume = () => setVolume((prev) => Math.min(6, prev + 1));

  // Optimized volume icon selection
  const VolumeIcon =
    volume === 0
      ? DIcons.VolumeX
      : volume < 3
        ? DIcons.Volume
        : volume < 5
          ? DIcons.Volume1
          : DIcons.Volume2;

  return (
    <div
      className="inline-flex items-center"
      role="group"
      aria-labelledby="volume-control"
    >
      <span id="volume-control" className="sr-only">
        Volume Control
      </span>
      <Button
        className="rounded-full"
        variant="outline"
        size="icon"
        aria-label="Decrease volume"
        onClick={decreaseVolume}
        disabled={volume === 0}
      >
        <DIcons.Minus className="size-4" />
        <span className="sr-only">Decrease</span>
      </Button>
      <div
        className="flex items-center px-3 text-sm font-medium tabular-nums"
        aria-live="polite"
      >
        <VolumeIcon className="size-4" />
        <span className="ml-1" aria-label={`Current volume is ${volume}`}>
          {volume}
        </span>
      </div>
      <Button
        className="rounded-full"
        variant="outline"
        size="icon"
        aria-label="Increase volume"
        onClick={increaseVolume}
        disabled={volume === 6}
      >
        <DIcons.Plus className="size-4" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
}
