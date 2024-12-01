// Dependencies: npm install dicons

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "dicons";

import { Button } from "@/components/ui/button";

export default function Button46() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleExpand}
      aria-expanded={isExpanded}
      aria-controls="expandable-content" // Use this ID on the element that this button controls
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <ChevronUp className="ml-1 size-4" />
      ) : (
        <ChevronDown className="ml-1 size-4" />
      )}
    </Button>
  );
}
