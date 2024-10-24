import Link from "next/link";
import PageTitle from "@/src/components/mdx/page-title";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "UI - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mx-auto my-20 mt-40 max-w-7xl px-6 xl:px-0">
      <PageTitle
        title="UI Components"
        description={` Designali an extensive collection of copy-and-paste components for quickly building app UIs. It's free, open-source, and ready to drop into your projects.`}
      />
      <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3">
        <Link
          href="/ui/buttons"
          className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
        >
          Buttons
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="-mr-1 ml-2 opacity-60"
          />
        </Link>
        <Link
          href="/ui/mockups"
          className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background p-4 font-bold shadow-sm shadow-black/[0.04] ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
        >
          Mockups
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="-mr-1 ml-2 opacity-60"
          />
        </Link>
      </div>
    </main>
  );
}
