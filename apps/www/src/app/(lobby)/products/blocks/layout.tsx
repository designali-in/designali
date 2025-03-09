import { Metadata } from "next";
 
import { BlocksNav } from "@/components/mdx/blocks-nav"; 

import "@/src/styles/mdx.css"; 
import { Avegra } from "@/src/lib/fonts/fonts";
import { cn } from "@/src/lib/utils";

const title = "Blocks";
const description = "Copy and paste into your apps. Free forever.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="my-20">
        <p className="px-6 text-center text-lg font-light uppercase tracking-widest lg:text-xl">
          Introducing
        </p>

        <h1
          className={cn(
            Avegra.className,
            "text-center text-7xl tracking-tighter sm:text-9xl"
          )}
        >
          Blocks
        </h1>
        <p className="mx-auto max-w-lg px-6 text-center text-sm font-light lg:-mt-4 lg:text-lg">
          blocks elements and backgrounds for your amazing design projects.
        </p>
      </div>

      <div id="blocks" className="border-grid scroll-mt-24 border-b">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <BlocksNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper flex-1">{children}</div>
    </>
  );
}
