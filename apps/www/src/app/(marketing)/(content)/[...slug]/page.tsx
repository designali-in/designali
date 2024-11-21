import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Mdx from "@/comp/mdx/layers";
import { MdxPager } from "@/comp/mdx/mdx-pager";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/comp/mdx/page-header";
import { ScrollProgress } from "@/src/comp/uis/scroll-progress";
import { allPages } from "contentlayer/generated";

import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params.slug.join("/") ?? "";
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPageFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  // Remove the /pages prefix from the slug
  const formattedPage = {
    ...page,
    slug: page.slug.replace(/^\/pages/, ""),
  };

  const formattedPages = allPages.map((page) => ({
    ...page,
    slug: page.slug.replace(/^\/pages/, ""),
  }));

  return (
    <div className="mx-auto my-20 max-w-5xl px-6">
      <ScrollProgress className="top-14" />
      <PageHeader>
        <div className="mt-10">
          <PageHeaderHeading>{page.title}</PageHeaderHeading>
          <PageHeaderDescription>{page.description}</PageHeaderDescription>
        </div>
      </PageHeader>
      <Separator className="my-8" />
      <Mdx code={page.body.code} />
      <MdxPager
        currentItem={formattedPage}
        allItems={formattedPages}
        className="my-10"
      />
    </div>
  );
}
