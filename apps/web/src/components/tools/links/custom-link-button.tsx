"use client";

import * as React from "react";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { Icons, iconVariants } from "@designali/ui/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@designali/ui/tooltip";

const CustomLinkButton = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ className, disabled, ...props }, ref) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className={cn({ "cursor-not-allowed": disabled })}>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="h-10 w-10"
          disabled={disabled}
          ref={ref}
          {...props}
        >
          <Icons.Settings2 className="h-6 w-6" />
          <span className="sr-only">Create custom link</span>
        </Button>
      </div>
    </TooltipTrigger>
    <TooltipContent>
      <p>
        {disabled ? "Sign in to create custom links" : "Create custom link"}
      </p>
    </TooltipContent>
  </Tooltip>
));
CustomLinkButton.displayName = "CustomLinkButton";

export { CustomLinkButton };
