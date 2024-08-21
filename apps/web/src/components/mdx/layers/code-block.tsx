"use client";

import type { ButtonProps } from "@designali/ui/button";
import { forwardRef, useEffect, useRef, useState } from "react";
import { getIconByFilename } from "@/utils/get-icon-by-filename";
import { cn } from "@designali/ui";
import { Button } from "@designali/ui/button";
import { ScrollArea, ScrollBar } from "@designali/ui/scroll-area";
import { toast } from "@designali/ui/toaster";
import { CheckIcon, CopyIcon } from "lucide-react";
import mergeRefs from "merge-refs";

type CodeBlockProps = {
  "data-lang"?: string;
  figureClassName?: string;
} & React.ComponentPropsWithoutRef<"pre">;

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  (props, ref) => {
    const {
      children,
      className,
      title,
      "data-lang": lang,
      figureClassName,
      ...rest
    } = props;

    const textInput = useRef<HTMLPreElement>(null);
    const Icon = getIconByFilename(lang ?? "");

    const onCopy = () => {
      void navigator.clipboard.writeText(textInput.current.textContent ?? "");
    };

    return (
      <div className="py-3">
        <figure
          className={cn(
            "not-prose group relative overflow-hidden rounded-lg border bg-secondary/50 text-sm",
            figureClassName,
          )}
        >
          {title ? (
            <div className="flex flex-row items-center gap-2 border-b bg-muted/50 px-4 py-1.5">
              <div className="text-muted-foreground">
                <Icon className="size-3.5" />
              </div>
              <figcaption className="flex-1 truncate text-muted-foreground">
                {title}
              </figcaption>
              <CopyButton onCopy={onCopy} />
            </div>
          ) : (
            <div className="flex w-full">
              <CopyButton
                className="absolute right-4 top-4 z-10"
                onCopy={onCopy}
              />
            </div>
          )}

          <ScrollArea>
            <pre
              ref={mergeRefs(textInput, ref)}
              className={cn("p-4 pr-10", className)}
              {...rest}
            >
              {children}
            </pre>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </figure>
      </div>
    );
  },
);

type CopyButtonProps = {
  onCopy: () => void;
} & ButtonProps;

const CopyButton = (props: CopyButtonProps) => {
  const { onCopy, className, ...rest } = props;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <Button
      className={cn("size-6 p-0", className)}
      variant="ghost"
      onClick={() => {
        onCopy();
        setIsCopied(true);
        toast(`✅ Copy code to clipboard`);
      }}
      type="button"
      aria-label="Copy code to clipboard"
      {...rest}
    >
      {isCopied ? (
        <CheckIcon className="size-3" />
      ) : (
        <CopyIcon className="size-3" />
      )}
    </Button>
  );
};

CodeBlock.displayName = "CodeBlock";
