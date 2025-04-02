import { Stack } from "@/components/ui/stack";
import { cn } from "@/lib/utils";
import React from "react";

interface BookProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  texture?: boolean;
  depth?: number;
  variant?: "default" | "simple";
  illustration?: React.ReactNode;
  width?: number;
}

export default function Book(props: BookProps) {
  const {
    children,
    color = "#E79D13",
    depth,
    texture,
    variant = "default",
    textColor,
    illustration,
    width,
  } = props;
  return (
    <div
      className={cn("w-fit [perspective:900px] inline-block group")}
      style={
        {
          "--book-color": color,
          "--text-color": textColor,
          "--book-depth": (depth || 4) + "cqw",
          "--book-width": (width || 196) + "px",
        } as React.CSSProperties
      }
    >
      <div className="contain-inline-size aspect-[49/60] w-fit rotate-0 relative [transform-style:preserve-3d] min-w-[calc(var(--book-width))] transition-transform duration-500 ease-out group-hover:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)]">
        <Stack
          align="stretch"
          className="rounded-l border border-border rounded-r shadow-book book-bg bg-[var(--book-color)] size-full absolute overflow-hidden"
        >
          {variant !== "simple" && (
            <Stack
              shrink
              grow
              direction="row"
              className={cn(
                "min-w-[calc(var(--book-width))] bg-[var(--book-color)] relative overflow-hidden",
              )}
            >
              <div className="absolute inset-y-0 mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg" />
              {illustration && (
                <div className="object-cover">{illustration}</div>
              )}
            </Stack>
          )}
          <Stack grow={variant === "simple"} direction="row" className="h-fit">
            <div className="mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg h-full" />
            <div className="contain-inline-size w-full">{children}</div>
          </Stack>
          {texture && (
            <div
              aria-hidden={true}
              className="absolute bg-ali bg-no-repeat bg-cover inset-0 mix-blend-hard-light opacity-60"
            />
          )}
        </Stack>
        <div
          aria-hidden={true}
          className="absolute bg-book-pages w-[calc(var(--book-depth)-2px)] h-[calc(100%-2*6px)] top-[3px]"
          style={{
            transform:
              "translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2))",
          }}
        />
        <div
          aria-hidden={true}
          className="rounded-l-md rounded-r bg-[var(--book-color)] book-bg absolute left-0 w-full h-full"
          style={{
            transform: "translateZ(calc(-1 * var(--book-depth)))",
          }}
        />
      </div>
    </div>
  );
}
