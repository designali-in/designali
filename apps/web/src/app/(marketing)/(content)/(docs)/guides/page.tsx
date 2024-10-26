import Link from "next/link";
import { DocsPageHeader } from "@/comp/mdx/doc/page-header";
import { formatDate } from "@/lib/utils";
import { allGuides } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { Cards } from "./cards";

export const metadata = {
  title: "Guides - Designali",
  description: "A design agency with a touch of magic.",
};

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="relative grid xl:grid-cols-[1fr_260px]">
      <div className="py-6 md:pr-8 lg:py-10">
        <DocsPageHeader
          heading="Get started with Designali"
          text="Welcome to the Design Guides!"
        />

        <div className="grid gap-4 pb-10 md:grid-cols-2 md:gap-6">
          {guides.map((guide) => (
            <article
              key={guide._id}
              className="group relative rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg dark:border-slate-800"
            >
              {guide.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {guide.title}
                  </h2>
                  {guide.description && (
                    <p className="text-slate-600 dark:text-slate-400">
                      {guide.description}
                    </p>
                  )}
                </div>
                {guide.date && (
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {formatDate(guide.date)}
                  </p>
                )}
              </div>
              <Link href={guide.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <div className="sticky top-24 hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-l border-slate-400 pt-6 dark:border-slate-600 xl:block">
        <Cards />
      </div>
    </div>
  );
}
