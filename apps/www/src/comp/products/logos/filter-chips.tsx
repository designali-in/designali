"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { SVGCategory } from "@/types/global";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

const skeletonWidths = [
  "w-[115px]",
  "w-[55px]",
  "w-[40px]",
  "w-[140px]",
  "w-[98px]",
  "w-[84px]",
  "w-[76px]",
  "w-[92px]",
  "w-[68px]",
  "w-[120px]",
  "w-[88px]",
  "w-[104px]",
];

interface FilterChipsProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterChips({
  selectedFilter,
  onFilterChange,
}: FilterChipsProps) {
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { data: logoCategories, isLoading: isLogoCategoriesLoading } = useQuery(
    {
      queryKey: ["logo-categories"],
      queryFn: async () => {
        const response = await fetch("/api/svgl?type=categories");
        if (!response.ok) {
          throw new Error("Failed to fetch logo categories");
        }
        const data = await response.json();
        return data as SVGCategory[];
      },

      staleTime: 1000 * 60 * 5,
    },
  );

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return;

    const viewport = scrollArea.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (!viewport) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = viewport;
      setShowLeftGradient(scrollLeft > 20);
      setShowRightGradient(
        Math.ceil(scrollLeft + clientWidth) < scrollWidth - 20,
      );
    };

    viewport.addEventListener("scroll", checkScroll);
    // Initial check
    checkScroll();

    return () => viewport.removeEventListener("scroll", checkScroll);
  }, []);

  const renderContent = () => {
    return (
      <>
        <Button
          onClick={() => onFilterChange("all")}
          variant={
            selectedFilter === "all" || !selectedFilter ? "default" : "outline"
          }
          className="rounded-full"
          size="sm"
        >
          All
        </Button>
        {isLogoCategoriesLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <Skeleton
                key={i}
                className={`h-8 rounded-full border border-dotted border-input ${skeletonWidths[i % skeletonWidths.length]}`}
              />
            ))
          : logoCategories?.map((category) => (
              <Button
                key={category.category}
                onClick={() => onFilterChange(category.category.toLowerCase())}
                variant={
                  selectedFilter === category.category.toLowerCase()
                    ? "default"
                    : "outline"
                }
                className="rounded-full"
                size="sm"
              >
                {category.category}
              </Button>
            ))}
      </>
    );
  };

  return (
    <div className="relative mb-3">
      <ScrollArea
        ref={scrollAreaRef}
        className="w-full whitespace-nowrap rounded-md"
      >
        <div className="flex w-max space-x-2 p-1">{renderContent()}</div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent transition-opacity duration-200",
          showLeftGradient ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent transition-opacity duration-200",
          showRightGradient ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
