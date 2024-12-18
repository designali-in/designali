import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { allDocumentations, allPages } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allPages.map((post) => ({
      url: `${protocol}://${domain}/${post.slugAsParams}`,
      lastModified: new Date(),
    })),
    ...allDocumentations.map((post) => ({
      url: `${protocol}://${domain}/documentation/${post.slugAsParams}`,
      lastModified: post.date,
    })),
  ];
}
