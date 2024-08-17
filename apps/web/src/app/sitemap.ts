import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { allBlogPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE_URL;
  const blogRoutes = allBlogPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "blog", "designs", "guides", "about", "services"].map(
    (route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...blogRoutes];
}
