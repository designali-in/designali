"use client";

import React from "react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DesignaliProps } from "dicons/src/icons/types";

interface FileUploadProps {
  onFileUpload: (svgContent: string, fileName: string) => void;
  onIconSelect?: (iconName: string) => void;
  fileName: string;
  selectedIcon: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  onIconSelect,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        if (file.type !== "image/svg+xml") {
          alert("Only SVG files are allowed.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = reader.result as string;
          setSvgContent(fileContent); // Store the SVG content
          onFileUpload(fileContent, file.name);
        };
        reader.readAsText(file);
      });
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Replace the hardcoded exampleIcons array with dynamic import of all icons
  const allDicons = Object.entries(DIcons).map(([name, component]) => ({
    name,
    component,
  }));

  // State for search and pagination
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayedIcons, setDisplayedIcons] = useState(allDicons.slice(0, 20));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filtered = allDicons.filter((icon) =>
        icon.name.toLowerCase().includes(term.toLowerCase())
      );
      setDisplayedIcons(filtered.slice(0, 24)); // Show more results when searching
    } else {
      setDisplayedIcons(allDicons.slice(0, 10)); // Reset to initial set when search is cleared
    }
  };

  const loadMoreIcons = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (searchTerm) {
      const filtered = allDicons.filter((icon) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedIcons(filtered.slice(0, displayedIcons.length + 12));
    } else {
      setDisplayedIcons(allDicons.slice(0, displayedIcons.length + 12));
    }
  };

  const handleIconSelect = (iconName: string) => {
    if (!onIconSelect) return;

    onIconSelect(iconName);
    setSelectedIcon(iconName);

    console.log("Available icons:", allDicons); // Debugging
    const selectedIconObj = allDicons.find((icon) => icon.name === iconName);
    console.log("Selected icon object:", selectedIconObj); // Debugging

    let svgContent = "";

    if (iconName === "Designali") {
      svgContent = `
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.8,1.43h7.53c3.47,0,6.15.92,8.04,2.75,1.89,1.84,2.83,4.45,2.83,7.85s-.92,5.98-2.77,7.8c-1.85,1.83-4.49,2.74-7.92,2.74H2.8V1.43Z" />
        </svg>`;
    } else if (selectedIconObj && selectedIconObj.component) {
      // ✅ Convert the React component to an SVG string
      const iconComponent = React.createElement(selectedIconObj.component);
      const svgString = renderToStaticMarkup(iconComponent);
      svgContent = svgString;
    } else {
      // Default fallback if no icon found
      svgContent = `
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="50%" y="50%" dy=".3em" textAnchor="middle" fontSize="8" fill="currentColor">
            ${iconName.slice(0, 2)}
          </text>
        </svg>`;
    }

    console.log("Generated SVG Content:", svgContent); // Debugging

    onFileUpload?.(svgContent, `${iconName}.svg`);
    setSvgContent(svgContent);
  };

  const renderSelectedIcon = () => {
    if (selectedIcon) {
      const IconComponent = allDicons.find(
        (icon) => icon.name === selectedIcon
      )?.component;
      if (IconComponent) {
        return (
          <div className="relative z-10 flex flex-col items-center justify-center w-32 h-32">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-75" />
            <div className="relative z-10 w-28 h-28 p-1 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-ali shadow-xl shadow-primary/10 flex items-center justify-center overflow-hidden">
              <IconComponent fill="none" className="w-20 h-20" />
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {renderSelectedIcon()}
      {svgContent ? (
        <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-md">
          <div
            className="w-full h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          /> 
        </div>
      ) : null}
      <div
        {...getRootProps()}
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-40 p-4 rounded-lg border-2 border-dashed cursor-pointer bg-background/90 backdrop-blur-sm transition-colors duration-200 hover:bg-background/50",
          isDragActive ? "border-primary/50 bg-primary/10" : "border-border/50"
        )}
      >
        <input {...getInputProps()} accept=".svg" />

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            {isDragActive
              ? "Drop the file here..."
              : "Drag 'n' drop some files here, or click to select files"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs text-muted-foreground mb-4">
          Or choose from below
        </p>
        <div className="my-4">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={handleSearch}
            onClick={(e) => e.stopPropagation()} // Prevent triggering the file upload
            className="w-full px-3 py-1.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex z-10 flex-wrap justify-center gap-2 max-h-[300px] overflow-y-auto">
          {displayedIcons.map((icon) => (
            <div key={icon.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={selectedIcon === icon.name ? "default" : "outline"}
                    size={"icon"}
                    className={`flex flex-col items-center justify-center h-20 w-20 p-1 gap-2 rounded-lg transition-all duration-200 ${
                      selectedIcon === icon.name
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted/60"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleIconSelect(icon.name);
                    }}
                  >
                    <icon.component className="w-20 h-20" size={20} />
                    <TooltipContent>{icon.name}</TooltipContent>
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            </div>
          ))}
        </div>

        {/* Add load more button if there are more icons to show */}
        {displayedIcons.length <
          (searchTerm
            ? allDicons.filter((icon) =>
                icon.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).length
            : allDicons.length) && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 w-full text-xs"
            onClick={loadMoreIcons}
          >
            Load more icons
          </Button>
        )}
      </div>
    </div>
  );
};

export { FileUpload };
import { renderToStaticMarkup as reactRenderToStaticMarkup } from "react-dom/server";

function renderToStaticMarkup(
  iconComponent: React.FunctionComponentElement<
    Omit<DesignaliProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
): string {
  return reactRenderToStaticMarkup(iconComponent);
}
