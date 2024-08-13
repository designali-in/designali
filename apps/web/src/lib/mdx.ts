import { pick } from "contentlayer/client";
import { allBlogPosts, allGalleryPosts } from "contentlayer/generated";

interface GetAllPostsProps {
  limit?: number;
  sorted?: boolean;
}

interface GetAllGalleryProps {
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

export const getAllGalleryPosts = (config: GetAllGalleryProps = {}) => {
  const { limit = allGalleryPosts.length, sorted = true } = config;

  const posts = allGalleryPosts
    .slice(0, limit)
    .map((post) =>
      pick(post, [
        "_id",
        "slug",
        "title",
        "summary",
        "date",
        "download",
        "dimention",
        "size",
      ]),
    );

  if (sorted) {
    return posts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
    );
  }

  return posts;
};
