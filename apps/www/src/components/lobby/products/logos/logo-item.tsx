"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Download, Link, MoreHorizontal } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { SVGLogo } from "@/types/global";

interface LogoItemProps {
  logo: SVGLogo;
  onCategoryClick?: (category: string) => void;
}

export function LogoItem({ logo, onCategoryClick }: LogoItemProps) {
  const { theme } = useTheme();
  const [showAllCategories, setShowAllCategories] = useState(false);

  const logoUrl =
    typeof logo.route === "string"
      ? logo.route
      : theme === "dark"
        ? logo.route.dark
        : logo.route.light;

  const handleCopy = async () => {
    try {
      const params = new URLSearchParams({ svg: logoUrl });
      const response = await fetch(`/api/svgl?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch SVG");
      }
      const svgText = await response.text();
      await navigator.clipboard.writeText(svgText);
      toast.success("SVG copied to clipboard");
    } catch (error) {
      console.error("Failed to copy SVG:", error);
      toast.error("Failed to copy SVG");
    }
  };

  const handleDownload = async () => {
    try {
      const params = new URLSearchParams({ svg: logoUrl });
      const response = await fetch(`/api/svgl?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch SVG");
      }
      const svgText = await response.text();

      // Создаем Blob из SVG
      const blob = new Blob([svgText], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      // Создаем временную ссылку для скачивания
      const link = document.createElement("a");
      link.href = url;
      link.download = `${logo.title.toLowerCase()}.svg`;
      document.body.appendChild(link);
      link.click();

      // Очищаем
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("SVG downloaded");
    } catch (error) {
      console.error("Failed to download SVG:", error);
      toast.error("Failed to download SVG");
    }
  };

  const categories = Array.isArray(logo.category)
    ? logo.category
    : [logo.category];
  const mainCategory = categories[0] || "";
  const additionalCategories = categories.slice(1);
  const hasMoreCategories = additionalCategories.length > 0;

  return (
    <div className="group flex flex-col items-center justify-center rounded-xl border border-dotted p-3 transition-colors duration-100 hover:bg-slate-100/80  dark:hover:bg-slate-800/20">
      <Image
        src={logoUrl}
        alt={logo.title}
        title={logo.title}
        width={0}
        height={40}
        className="pointer-events-none mb-4 mt-2 h-10 w-auto select-none"
        unoptimized
      />
      <div className="mb-3 flex flex-col items-center justify-center space-y-1">
        <p className="select-all truncate text-balance text-center text-[15px] font-medium">
          {logo.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {!showAllCategories ? (
            <>
              <button
                onClick={() => onCategoryClick?.(mainCategory.toLowerCase())}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-medium text-slate-600 transition-colors duration-100 hover:bg-slate-200 hover:underline dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-700/50"
              >
                {mainCategory}
              </button>
              {hasMoreCategories && (
                <button
                  onClick={() => setShowAllCategories(true)}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-medium text-slate-600 transition-colors duration-100 hover:bg-slate-200 hover:underline dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-700/50"
                  title="More Tags"
                >
                  <MoreHorizontal className="h-[15px] w-[15px]" />
                </button>
              )}
            </>
          ) : (
            categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryClick?.(category.toLowerCase())}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-medium text-slate-600 transition-colors duration-100 hover:bg-slate-200 hover:underline dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-700/50"
              >
                {category}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <button
          onClick={handleCopy}
          title="Copy SVG"
          className="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-slate-200 dark:hover:bg-slate-700/40"
        >
          <Copy className="h-4 w-4 stroke-[1.8]" />
        </button>
        <button
          onClick={handleDownload}
          title="Download SVG file"
          className="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-slate-200 dark:hover:bg-slate-700/40"
        >
          <Download className="h-4 w-4 stroke-[1.8]" />
        </button>
        <a
          href={logo.url}
          title="Website"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-slate-200 dark:hover:bg-slate-700/40"
        >
          <Link className="h-4 w-4 stroke-[1.8]" />
        </a>
      </div>
    </div>
  );
}
