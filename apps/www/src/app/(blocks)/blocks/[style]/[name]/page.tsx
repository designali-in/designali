import type { Style } from "@/registry/registry-styles";
import type { Metadata } from "next";
import * as React from "react";
import { notFound } from "next/navigation";
import { styles } from "@/registry/registry-styles";

import site from "@/config/site";
import { getAllBlockIds } from "@/lib/blocks";
import { absoluteUrl, cn } from "@/lib/utils";

import "@/styles/mdx.css";

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";

const getCachedRegistryItem = React.cache(
  async (name: string, style: Style["name"]) => {
    return await getRegistryItem(name, style);
  },
);

export async function generateMetadata({
  params,
}: {
  params: {
    style: Style["name"];
    name: string;
  };
}): Promise<Metadata> {
  const { name, style } = params;
  const item = await getCachedRegistryItem(name, style);

  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description;

  return {
    title: `${item.name}${item.description ? ` - ${item.description}` : ""}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/blocks/${style}/${item.name}`),
      images: [
        {
          url: site.url,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.url],
      creator: "@shadcn",
    },
  };
}

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds();
  return styles
    .map((style) =>
      blockIds.map((name) => ({
        style: style.name,
        name,
      })),
    )
    .flat();
}

export default async function BlockPage({
  params,
}: {
  params: {
    style: Style["name"];
    name: string;
  };
}) {
  const { name, style } = params;
  const item = await getCachedRegistryItem(name, style);
  const Component = getRegistryComponent(name, style);

  if (!item || !Component) {
    return notFound();
  }

  return (
    <>
      <div className={cn("bg-background", item.meta.containerClassName)}>
        <Component />
      </div>
    </>
  );
}
