import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsPageHeader } from "@/comp/mdx/doc/page-header";
import { DocsPager } from "@/comp/mdx/doc/pager";
import { DashboardTableOfContents } from "@/comp/mdx/doc/toc";
import Mdx from "@/comp/mdx/layers";
import { allComponents } from "contentlayer/generated";

import { getTableOfContents } from "@/lib/toc";

import "@/styles/mdx.css";

import { ScrollProgress } from "@/src/comp/uis/scroll-progress";
import { cn } from "@designali/ui";
import { buttonVariants } from "@designali/ui/button";
import { Separator } from "@designali/ui/separator";
import { DIcons } from "dicons";

interface DesignPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/") || "";
  const doc = allComponents.find(
    (doc: { slugAsParams: any }) => doc.slugAsParams === slug,
  );

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  DesignPageProps["params"][]
> {
  return allComponents.map((doc: { slugAsParams: string }) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DesignPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative grid lg:gap-10 xl:grid-cols-[1fr_260px]">
      <div className="mx-auto w-full min-w-0 py-10">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <ScrollProgress className="top-14" />
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "gap-1",
                )}
              >
                Docs
                <DIcons.ExternalLink className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "gap-1",
                )}
              >
                API Reference
                <DIcons.ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <Mdx code={doc.body.code} />
        <Separator className="my-8" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-24 h-full overflow-y-auto border-l border-slate-400 px-8 pt-12 dark:border-slate-600">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
