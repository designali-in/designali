import { pick } from "contentlayer/client";
import { allBlogPosts } from "contentlayer/generated";

interface GetAllPostsProps {
  limit?: number;
  sorted?: boolean;
}

export const getAllBlogPosts = (config: GetAllPostsProps = {}) => {
  const { limit = allBlogPosts.length, sorted = true } = config;

  const posts = allBlogPosts
    .slice(0, limit)
    .map((post) => pick(post, ["_id", "slug", "title", "summary", "date"]));

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
    );
  }

  return posts;
};
