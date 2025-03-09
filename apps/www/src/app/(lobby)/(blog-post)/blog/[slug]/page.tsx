import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import "@/styles/mdx.css";

import { Metadata } from "next";
import Link from "next/link";

import { BLOG_CATEGORIES } from "@/config/blog";
import { getTableOfContents } from "@/lib/toc";
import {
  cn,
  constructMetadata,
  formatDate,
  getBlurDataURL,
  placeholderBlurhash,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardTableOfContents } from "@/components/mdx/blog/toc";
import BlurImage from "@/src/components/ui/backgrounds/blur-image"; 
import { Separator } from "@/src/components/ui/separator";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!post) {
    return;
  }

  const { title, description, image } = post;

  return constructMetadata({
    title: `${title}`,
    description: description,
    image,
  });
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);

  if (!post) {
    notFound();
  }

  const category = BLOG_CATEGORIES.find(
    (category) => category.slug === post.categories[0]
  )!;

  const relatedArticles =
    (post.related &&
      post.related.map(
        (slug) => allPosts.find((post) => post.slugAsParams === slug)!
      )) ||
    [];

  const toc = await getTableOfContents(post.body.raw);

  return (
    <div className="mt-4 p-6 border-t rounded-t-3xl container-wrapper">
      
      <div className="">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-3">
            <Link href={"/blog"}>
              <Button variant={"outline"} size={"sm"}>
                All Blog
              </Button>
            </Link>
            <Link href={`/blog/category/${category.slug}`}>
              <Button variant={"outline"} size={"sm"}>
                {category.title}
              </Button>
            </Link>

            <time
              dateTime={post.date}
              className="text-sm font-medium text-muted-foreground"
            >
              {formatDate(post.date)}
            </time>
          </div>
          <Separator/>
          <div className="space-y-2 py-3">
          <h1 className="font-semibold tracking-tighter text-3xl text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            {post.description}
          </p>
          </div>
          <Separator/>
        </div>
      </div>

      <div className="relative">
        <div className="absolute w-full" />

        <div className="grid grid-cols-4 gap-10 pt-8 max-md:px-0">
          <div className="relative col-span-4 mb-10 flex flex-col space-y-8 border bg-background rounded-3xl  lg:col-span-3">
            <BlurImage
              alt={post.title}
              blurDataURL={placeholderBlurhash}
              className="aspect-[1200/630] object-cover rounded-t-3xl "
              width={1200}
              height={630}
              priority
              placeholder="blur"
              src={post.image}
              sizes="(max-width: 768px) 770px, 1000px"
            />
            <div className="px-[.8rem] pb-10 md:px-8">
              <Mdx code={post.body.code} />
            </div>
          </div>

          <div className="sticky top-24 col-span-1 hidden flex-col divide-y divide-muted self-start pb-24 lg:flex">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>

      <div>
        {relatedArticles.length > 0 && (
          <div className="flex flex-col space-y-4 pb-16">
            <p className="font-heading text-2xl text-foreground">
              More Articles
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
