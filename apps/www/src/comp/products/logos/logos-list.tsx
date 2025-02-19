"use client";

import React from "react";
import { LogoCardSkeleton } from "@/comp/uis/skeletons";
import { useQuery } from "@tanstack/react-query";
import { atom, useAtom } from "jotai";
import { Package, Search } from "lucide-react";

import { SVGLogo } from "@/types/global";
import { Input } from "@/components/ui/input";

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

const searchQueryAtom = atom<string>(""); // Declare globally to avoid re-creating on each render

export function LogosList({ category, onCategoryChange }: LogosListProps) {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  const {
    data: logos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["logos"],
    queryFn: fetchLogos,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const filteredLogos = React.useMemo(() => {
    if (!logos) return [];

    let filtered = logos;

    if (category && category !== "all") {
      filtered = filtered.filter((logo) =>
        (Array.isArray(logo.category) ? logo.category : [logo.category]).some(
          (cat) => cat.toLowerCase() === category.toLowerCase(),
        ),
      );
    }

    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (logo) =>
          logo.title.toLowerCase().includes(search) ||
          (Array.isArray(logo.category)
            ? logo.category.join(" ").toLowerCase()
            : logo.category.toLowerCase()
          ).includes(search),
      );
    }

    return filtered;
  }, [logos, category, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative mx-auto w-full max-w-md">
        <Search className="absolute left-2 top-2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search logos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      {/* Content */}
      {isLoading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(18)].map((_, i) => (
            <LogoCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          Error loading logos. Please try again later.
        </div>
      ) : filteredLogos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Package className="mb-4 h-12 w-12 text-muted-foreground/60" />
          <h3 className="mb-2 text-lg font-medium">No logos found</h3>
          <p className="mb-6 text-muted-foreground">
            {searchQuery
              ? `No results found for "${searchQuery}". Try a different search term.`
              : category && category !== "all"
                ? `No logos found in the "${category}" category.`
                : "No logos found."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredLogos.map((logo) => (
            <LogoItem
              key={logo.id || logo.title}
              logo={logo}
              onCategoryClick={onCategoryChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
