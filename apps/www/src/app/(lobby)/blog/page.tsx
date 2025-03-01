import { allPosts } from "contentlayer/generated";

import { getBlurDataURL } from "@/lib/utils";
import { BlogPosts } from "@/components/mdx/blog/blog-posts";
 

export default async function BlogPage() {
  const posts = await Promise.all(
    allPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  return <BlogPosts posts={posts} />;
}