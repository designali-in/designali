import { notFound } from "next/navigation";
import { DocsPageHeader } from "@/components/mdx/doc/page-header";
import { DocsPager } from "@/components/mdx/doc/pager";
import { DashboardTableOfContents } from "@/components/mdx/doc/toc";
import Mdx from "@/components/mdx/layers";
import { getTableOfContents } from "@/lib/toc";
import { allDocs } from "contentlayer/generated";

import "@/styles/mdx.css";

import { ScrollProgress } from "@/src/components/ui/scroll-progress";
import { Separator } from "@designali/ui/separator";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find(
    (doc: { slugAsParams: any }) => doc.slugAsParams === slug,
  );

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc: { slugAsParams: string }) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative grid lg:gap-10 xl:grid-cols-[1fr_260px]">
      <div className="mx-auto w-full min-w-0 py-10">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <ScrollProgress className="top-28" />
        <Mdx code={doc.body.code} />
        <Separator className="my-8" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-24 h-[calc(100vh-3.5rem)] overflow-y-auto border-l border-slate-400 px-8 pt-12 dark:border-slate-600">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
