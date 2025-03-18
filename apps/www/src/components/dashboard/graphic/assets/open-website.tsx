"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DIcons } from "dicons";

interface DownloadButtonProps {
  inspirationId: string;
  websiteLink: string;
  initialDownloadCount: number;
}

export function OpenWebsiteButton({
  inspirationId,
  websiteLink,
  initialDownloadCount,
}: DownloadButtonProps) {
  const [downloadCount, setDownloadCount] = useState(initialDownloadCount);

  const handleDownload = async () => {
    try {
      await fetch(`/api/admin/inspiration/${inspirationId}/visits`, { method: "POST" });
      setDownloadCount(downloadCount + 1);
      window.open(websiteLink, "_blank");
    } catch (error) {
      console.error("Error incrementing download count:", error);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Button variant={"outline"} className="flex items-center" onClick={handleDownload}> 
        <span>{downloadCount}</span>
        Open
         <DIcons.ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface DownloadNumberProps {
  initialDownloadCount: number;
}

export function DownloadNumber({ initialDownloadCount }: DownloadNumberProps) {
  const [downloadCount] = useState(initialDownloadCount);

  return (
    <div className="flex items-center gap-2">
      <span>{downloadCount}</span>
    </div>
  );
}
