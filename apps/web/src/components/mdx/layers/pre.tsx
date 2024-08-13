"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { cn } from "@designali/ui";
import { Button, ButtonProps } from "@designali/ui/button";
import { ScrollArea } from "@designali/ui/scroll-area";
import { FileIcon, TerminalIcon } from "lucide-react";

type PreProps = {
  "data-lang"?: string;
} & React.ComponentPropsWithoutRef<"pre">;

type CopyButtonProps = {
  text: string;
} & ButtonProps;

const getLanguageIcon = (lang: string): React.ReactNode => {
  switch (lang) {
    case "js": {
      return <Icons.instagram className="size-3.5" />;
    }

    case "ts": {
      return <Icons.instagram className="size-3.5" />;
    }

    case "jsx":
    case "tsx": {
      return <Icons.instagram className="size-3.5" />;
    }

    case "bash":
    case "sh":
    case "shell":
    case "zsh": {
      return <TerminalIcon className="size-3.5" />;
    }

    default: {
      return <FileIcon className="size-3.5" />;
    }
  }
};

const Pre = (props: PreProps) => {
  const { children, className, title, "data-lang": lang, ...rest } = props;

  const textInput = React.useRef<HTMLPreElement>(null);
  const [text, setText] = React.useState<string>("");

  React.useEffect(() => {
    if (textInput.current) {
      setText(textInput.current.textContent ?? "");
    }
  }, []);

  return (
    <figure className="not-prose group relative my-6 flex items-center gap-2 overflow-hidden rounded-2xl border-slate-400 text-sm">
      <ScrollArea>
        <pre ref={textInput} className={cn("", className)} {...rest}>
          {children}
        </pre>
      </ScrollArea>
      {title ? (
        <div className="flex flex-row items-center gap-2 px-4 py-1.5">
          {lang && <div className="">{getLanguageIcon(lang)}</div>}
          <figcaption className="flex-1 truncate">{title}</figcaption>
          <CopyButton text={text} />
        </div>
      ) : (
        <CopyButton className="z-10" text={text} />
      )}
    </figure>
  );
};

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props;
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <Button
      className={cn("bg-aired size-8 p-0 transition-opacity", className)}
      variant="outline"
      onClick={() => copy({ text })}
      type="button"
      aria-label="Copy code to clipboard"
      {...rest}
    >
      {isCopied ? (
        <Icons.copy className="m-2 size-4" />
      ) : (
        <Icons.copy className="m-2 size-4" />
      )}
    </Button>
  );
};

export default Pre;
