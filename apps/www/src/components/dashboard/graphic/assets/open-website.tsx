"use client";

import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

interface VisitButtonProps {
  inspirationId: string;
  websiteLink: string;
  initialVisitCount: number;
}

export function OpenWebsiteButton({ inspirationId, websiteLink, initialVisitCount }: VisitButtonProps) {
  const [visitCount, setVisitCount] = useState(initialVisitCount);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleVisit = async () => {
    if (isProcessing) return;

    setIsProcessing(true);
    try {
      const response = await fetch(`/api/admin/inspiration/${inspirationId}/visits`, { method: "POST" });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to update visits");
      }

      setVisitCount((prev) => prev + 1);
      
      // Open the link in a new tab
      window.open(websiteLink, "_blank");
    } catch (error) {
      console.error("Error incrementing visit count:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Button variant={"outline"} className="flex items-center" onClick={handleVisit} disabled={isProcessing}>
        <span>{visitCount}</span>
        Visit Site
        <DIcons.ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}