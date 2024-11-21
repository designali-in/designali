"use client";

import { DIcons } from "dicons";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LinkCopyButtonProps {
  textToCopy: string;
}

export const LinkCopyButton = ({ textToCopy }: LinkCopyButtonProps) => {
  const handleOnCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    toast("Copied to clipboard");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="cursor-pointer gap-2 opacity-50 transition-opacity hover:opacity-100"
          aria-label="Copy to clipboard"
          type="button"
          variant="outline"
          size="sm"
        >
          <DIcons.Copy onClick={handleOnCopy} />
          Copy link
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-sans">Copy link to clipboard</p>
      </TooltipContent>
    </Tooltip>
  );
};
