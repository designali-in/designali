/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import type { Metadata, ResolvingMetadata } from "next";
import type { Article, WithContext } from "schema-dts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxPager } from "@/components/mdx/mdx-pager";
import site from "@/config/site";
import { redis } from "@designali/kv";
import { Button } from "@designali/ui/button";
import { Separator } from "@designali/ui/separator";
import { allBlogPosts } from "contentlayer/generated";
import { ChevronLeftIcon } from "lucide-react";

import Content from "./content";
import Header from "./header";

// export const runtime = 'edge'

interface BlogPostPageProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, never>;
}

export const generateStaticParams = (): BlogPostPageProps["params"][] => {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async (
  props: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { params } = props;

  const post = allBlogPosts.find((p) => p.slug === params.slug);

  if (!post) return {};

  const ISOPublishedTime = new Date(post.date).toISOString();
  const ISOModifiedTime = new Date(post.modifiedTime).toISOString();
  const previousTwitter = (await parent).twitter ?? {};

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${site.url}/blogs/${params.slug}`,
    },
    openGraph: {
      url: `${site.url}/blogs/${params.slug}`,
      type: "article",
      title: post.title,
      siteName: site.name,
      description: post.summary,
      locale: "en-US",
      publishedTime: ISOPublishedTime,
      modifiedTime: ISOModifiedTime,
      authors: site.url,
      images: [
        {
          url: `${site.url}/api/og?title=${post.title}&date=${
            post.date.split("T")[0]
          }&url=aliimam.in/blogs`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      ...previousTwitter,
      title: post.title,
      description: post.summary,
      images: [
        `${site.url}/api/og?title=${post.title}&date=${post.date.split("T")[0]}&url=aliimam.in/blog`,
      ],
    },
  };
};

const BlogPostPage = async (props: BlogPostPageProps) => {
  const { slug } = props.params;

  const views =
    (await redis.get<number>(["pageviews", "blogs", slug].join(":"))) ?? 2;

  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { title, summary, date, modifiedTime } = post;

  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,
    description: summary,
    datePublished: date,
    dateModified: modifiedTime,
    image: `${site.url}/api/og?title=${title}&date=${date.split("T")[0]}&url=aliimam.in/blogs`,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <div className="mx-auto my-40 max-w-5xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header date={date} title={title} slug={slug} views={views} />
      <Content slug={slug} post={post} />
      <Separator className="my-8" />
      <div className="flex justify-between">
        <Button variant="outline" size="lg" className="">
          <Link href="/blogs" className="flex items-center gap-2">
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            See all blog
            <span className="sr-only">See all blogs</span>
          </Link>
        </Button>
        <MdxPager currentItem={post} allItems={allBlogPosts} />
      </div>
    </div>
  );
};

export default BlogPostPage;
