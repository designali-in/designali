/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/require-await */
"use client";

import type { ButtonProps } from "@/components/ui/button";
import type { Event } from "@/lib/events";
import type { NpmCommands } from "@/types/unist";
import type { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";

import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/toaster";

import { Icons } from "../icons";

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
  event?: Event["name"];
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    trackEvent(event);
  }
}

export function CopyButton({
  value,
  className,
  src,
  variant = "ghost",
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(
        "relative z-10 h-8 w-8 text-slate-800 hover:bg-slate-200 dark:text-slate-200 hover:dark:bg-slate-800 [&_svg]:h-3 [&_svg]:w-3",
        className,
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined,
        );
        setHasCopied(true);
        toast("✅ Copy code to clipboard");
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Icons.check className="h-3 w-3" />
      ) : (
        <Icons.copy className="h-3 w-3" />
      )}
    </Button>
  );
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
  value: string;
  classNames: string;
  className?: string;
}

export function CopyWithClassNames({
  value,
  classNames,
  className,
  ...props
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "relative z-10 h-6 w-6 text-slate-100 hover:bg-slate-800 hover:text-slate-50",
            className,
          )}
        >
          {hasCopied ? (
            <Icons.check className="h-3 w-3" />
          ) : (
            <Icons.copy className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(value)}>
          Component
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
          Classname
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
  commands: Required<NpmCommands>;
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyCommand = React.useCallback(
    (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
      copyToClipboardWithMeta(value, {
        name: "copy_npm_command",
        properties: {
          command: value,
          pm,
        },
      });
      setHasCopied(true);
    },
    [],
  );

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              " z-10 h-6 w-6 text-slate-50 hover:bg-slate-700 hover:text-slate-50",
              className,
            )}
          >
            {hasCopied ? (
              <CheckIcon className="h-3 w-3" />
            ) : (
              <ClipboardIcon className="h-3 w-3" />
            )}
            <span className="sr-only">Copy</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => copyCommand(commands.__npmCommand__, "npm")}
          >
            npm
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}
          >
            yarn
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}
          >
            pnpm
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => copyCommand(commands.__bunCommand__, "bun")}
          >
            bun
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
