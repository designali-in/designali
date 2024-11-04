import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import { ArrowRight } from "lucide-react";

import "public/registry/themes.css";

export const metadata = {
  title: "UI - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3">
        <Link
          href="/ui/buttons"
          className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
        >
          Buttons
          <Button size="icon">
            <ArrowRight size={16} strokeWidth={2} className="opacity-60" />
          </Button>
        </Link>
        <Link
          href="/ui/inputs"
          className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
        >
          Inputs
          <Button size="icon">
            <ArrowRight size={16} strokeWidth={2} className="opacity-60" />
          </Button>
        </Link>
        <Link
          href="/ui/mockups"
          className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
        >
          Mockups
          <Button size="icon">
            <ArrowRight size={16} strokeWidth={2} className="opacity-60" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
