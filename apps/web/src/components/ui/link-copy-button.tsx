"use client";

import { Button } from "@designali/ui/button";
import { Icons, iconVariants } from "@designali/ui/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@designali/ui/tooltip";
import { toast } from "sonner";

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
          <Icons.Copy
            className={iconVariants({ size: "sm" })}
            onClick={handleOnCopy}
          />
          Copy link
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-sans">Copy link to clipboard</p>
      </TooltipContent>
    </Tooltip>
  );
};
