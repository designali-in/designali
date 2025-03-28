"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  assetId: string;
  downloadLink: string;
  initialDownloadCount: number;
}

export function DownloadButton({
  assetId,
  downloadLink,
  initialDownloadCount,
}: DownloadButtonProps) {
  const [downloadCount, setDownloadCount] = useState(initialDownloadCount);

  const handleDownload = async () => {
    try {
      await fetch(`/api/assets/${assetId}/download`, { method: "POST" });
      setDownloadCount(downloadCount + 1);
      window.open(downloadLink, "_blank");
    } catch (error) {
      console.error("Error incrementing download count:", error);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Button className="flex items-center" onClick={handleDownload}>
        <span className="text-ali text-lg">{downloadCount}</span>
        <Download className="h-4 w-4" />
        Download File
      </Button>
    </div>
  );
}

interface DownloadNumberProps {
  initialDownloadCount: number;
}

export function DownloadNumber({ initialDownloadCount }: DownloadNumberProps) {
  const [downloadCount, setDownloadCount] = useState(initialDownloadCount);

  return (
    <div className="flex items-center gap-2">
      <span>{downloadCount}</span>
    </div>
  );
}
