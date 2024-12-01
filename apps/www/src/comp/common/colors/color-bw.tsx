"use client";

import { Check, Clipboard } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { toast } from "@/components/ui/toasts";

export function ColorBW() {
  const black = "#000000";
  const white = "#FFFFFF";
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return (
    <main className="mx-auto mb-4 max-w-sm">
      <div className="rounded-3xl border p-3">
        <div className="flex items-center p-2 pb-0">
          <div className="group relative flex-1 pl-1 text-sm font-medium">
            <button
              className="absolute left-4 top-12"
              onClick={() => {
                copyToClipboard(black);
                toast.success(`Copied ${black} to clipboard.`);
              }}
            >
              {isCopied ? (
                <Check
                  strokeWidth={1}
                  className="h-5 w-5 text-white opacity-0 group-hover:opacity-100"
                />
              ) : (
                <Clipboard
                  strokeWidth={1}
                  className="h-5 w-5 text-white opacity-0 group-hover:opacity-100"
                />
              )}
            </button>
            <h2 className="pb-4 capitalize">Black</h2>
            <div className="flex h-40 w-full items-center justify-center bg-black text-center text-white">
              {black}
            </div>
          </div>
          <div className="group relative flex-1 pl-1 text-sm font-medium">
            <button
              className="absolute left-4 top-12"
              onClick={() => {
                copyToClipboard(white);
                toast.success(`Copied ${white} to clipboard.`);
              }}
            >
              {isCopied ? (
                <Check
                  strokeWidth={1}
                  className="h-5 w-5 text-black opacity-0 group-hover:opacity-100"
                />
              ) : (
                <Clipboard
                  strokeWidth={1}
                  className="h-5 w-5 text-black opacity-0 group-hover:opacity-100"
                />
              )}
            </button>
            <h2 className="pb-4 capitalize">White</h2>
            <div className="flex h-40 w-full items-center justify-center bg-white text-center text-black">
              {white}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 sm:flex-row"></div>
      </div>
    </main>
  );
}
