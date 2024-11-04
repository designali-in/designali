"use client";

import { useState } from "react";
import { cn } from "@designali/ui";
import { DIcons } from "dicons";
import { motion } from "framer-motion";

import { Icons } from "../icons";

interface Props {
  value: string;
  className?: string;
}

export function CopyInput({ value, className }: Props) {
  const [isCopied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      setCopied(true);

      await navigator.clipboard.writeText(value);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {}
  };

  return (
    <div
      className={cn(
        "relative flex w-full items-center rounded-md border border-border p-4",
        className,
      )}
    >
      <div className="pr-7 text-sm text-[#878787]">{value}</div>
      <button type="button" onClick={handleClipboard}>
        <span className="sr-only">Copy</span>
        <motion.div
          className="absolute right-2 top-1.5"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
        >
          <DIcons.Copy
            strokeWidth={1}
            className="z-10 h-10 w-10 rounded-md border p-2.5"
          />
        </motion.div>

        <motion.div
          className="absolute right-2 top-1.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
        >
          <Icons.check className="z-10 h-10 w-10 rounded-md border p-2.5" />
        </motion.div>
      </button>
    </div>
  );
}
