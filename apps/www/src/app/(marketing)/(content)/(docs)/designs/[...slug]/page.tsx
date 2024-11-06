/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { DocsPageHeader } from "@/comp/mdx/doc/page-header";
import { DashboardTableOfContents } from "@/comp/mdx/doc/toc";
import Mdx from "@/comp/mdx/layers";
import { allDesigns } from "contentlayer/generated";

import { getTableOfContents } from "@/lib/toc";

import "@/styles/mdx.css";

import { ScrollProgress } from "@/src/comp/uis/scroll-progress";
import { Button } from "@designali/ui/button";
import { Separator } from "@designali/ui/separator";

interface GuidePageProps {
  params: {
    slug: string[];
  };
}

async function getGuideFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/");
  const guide = allDesigns.find((guide) => guide.slugAsParams === slug);

  if (!guide) {
    null;
  }

  return guide;
}

export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allDesigns.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params);

  const toc = await getTableOfContents(guide.body.raw);

  return (
    <main className="relative py-6 lg:grid lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_260px]">
      <div>
        <DocsPageHeader heading={guide.title} text={guide.description} />
        <ScrollProgress className="top-28" />
        <Mdx code={guide.body.code} />
        <Separator className="my-8" />
        <div className="flex py-6 lg:py-10">
          <Link href="/documentation" className="">
            <Button variant="outline" size="lg">
              See all documentation
            </Button>
          </Link>
        </div>
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-24 -my-10 h-full overflow-y-auto border-l border-slate-400 px-8 pt-12 dark:border-slate-600">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
