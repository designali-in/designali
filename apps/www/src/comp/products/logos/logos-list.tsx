"use client";

import React from "react";
import { LogoCardSkeleton } from "@/comp/uis/skeletons";
import { useQuery } from "@tanstack/react-query";
import { atom, useAtom } from "jotai";
import { ArrowUpRight, Package } from "lucide-react";

import { SVGLogo } from "@/types/global";
// import { logosSearchAtom } from "@/components/features/main-page/main-page-header"
import { Button } from "@/components/ui/button";

import { LogoItem } from "./logo-item";

async function fetchLogos() {
  try {
    const response = await fetch("/api/svgl");
    if (!response.ok) {
      throw new Error("Failed to fetch logos");
    }
    const data = await response.json();
    if ("error" in data) {
      throw new Error(data.error);
    }
    return data as SVGLogo[];
  } catch (error) {
    console.error("Error fetching logos:", error);
    throw error;
  }
}

interface LogosListProps {
  category?: string;
  onCategoryChange: (category: string) => void;
}

export function LogosList({ category, onCategoryChange }: LogosListProps) {
  const searchQueryAtom = atom<string>("");
  const [searchQuery] = useAtom(searchQueryAtom); // Use the correct atom

  const {
    data: logos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["logos"],
    queryFn: fetchLogos,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  // Локальная фильтрация по категории и поисковому запросу
  const filteredLogos = React.useMemo(() => {
    if (!logos) return [];

    let filtered = logos;

    // Фильтрация по категории
    if (category && category !== "all") {
      filtered = filtered.filter((logo) => {
        const logoCategories = Array.isArray(logo.category)
          ? logo.category
          : [logo.category];
        return logoCategories.some(
          (cat) => cat.toLowerCase() === category.toLowerCase(),
        );
      });
    }

    // Фильтрация по поисковому запросу
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      filtered = filtered.filter((logo) => {
        const title = logo.title.toLowerCase();
        const logoCategories = Array.isArray(logo.category)
          ? logo.category.join(" ").toLowerCase()
          : logo.category.toLowerCase();

        return title.includes(search) || logoCategories.includes(search);
      });
    }

    return filtered;
  }, [logos, category, searchQuery]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {[...Array(18)].map((_, i) => (
          <LogoCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading logos. Please try again later.
      </div>
    );
  }

  if (!filteredLogos.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Package className="mb-4 h-12 w-12 text-muted-foreground/60" />
        <h3 className="mb-2 text-lg font-medium">No logos found</h3>
        <p className="mb-6 text-muted-foreground">
          {searchQuery
            ? `No results found for "${searchQuery}". Try a different search term or submit a new logo.`
            : category && category !== "all"
              ? `No logos found in the "${category}" category. Try a different category or submit a new logo.`
              : "No logos found. You can submit a new logo or request one."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {filteredLogos.map((logo) => (
        <LogoItem
          key={logo.id || logo.title}
          logo={logo}
          onCategoryClick={onCategoryChange}
        />
      ))}
    </div>
  );
}
