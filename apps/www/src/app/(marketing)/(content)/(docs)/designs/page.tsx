import Link from "next/link";
import { DocsPageHeader } from "@/comp/mdx/doc/page-header";
import { allDesigns } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Designs - Designali",
  description: "A design agency with a touch of magic.",
};

export default function GuidesPage() {
  const documentations = allDesigns.filter((guide) => guide.published);

  return (
    <div className="relative grid xl:grid-cols-[1fr_260px]">
      <div className="py-6 md:pr-8 lg:py-10">
        <DocsPageHeader
          heading="What is DIcons?"
          text="DIcons is an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols in digital and non-digital projects. The library aims to make it easier for designers and developers to incorporate icons into their projects by providing several official packages to make it easier to use these icons in your project."
        />

        <div className="grid gap-4 pb-10 md:grid-cols-2 md:gap-6"></div>
      </div>
      <div className="sticky top-24 hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-l border-slate-400 pt-6 dark:border-slate-600 xl:block"></div>
    </div>
  );
}
