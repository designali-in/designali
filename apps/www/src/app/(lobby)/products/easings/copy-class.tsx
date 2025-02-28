"use client";

import { useState } from "react";
import { DIcons } from "dicons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CopyClass = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        className="h-7 max-w-full whitespace-normal  text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy Tailwind class"}
        disabled={copied}
      >
        <div className="relative">
          <div
            className={cn(
              "transition-all",
              copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
            )}
          >
            <DIcons.Check />
          </div>
          <div
            className={cn(
              "absolute -top-0.5 transition-all",
              copied ? "scale-0 opacity-0" : "scale-100 opacity-80",
            )}
          >
            <DIcons.Copy />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default CopyClass;
