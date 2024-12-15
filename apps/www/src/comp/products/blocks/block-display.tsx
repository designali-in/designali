import * as React from "react";
import { registryItemFileSchema } from "@/registry/schema";
import { z } from "zod";

import { highlightCode } from "@/lib/highlight-code";
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry";

import { BlockViewer } from "./block-viewer";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) {
    return null;
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ]);

  return (
    <BlockViewer item={item} tree={tree} highlightedFiles={highlightedFiles} />
  );
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  const item = await getRegistryItem(name);
  if (!item) {
    console.error(`Registry item not found for name: ${name}`);
    return null;
  }
  return item;
});

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files || !Array.isArray(files)) {
      console.warn("Invalid files input for file tree.");
      return null;
    }
    return await createFileTreeForRegistryItemFiles(files);
  },
);

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    if (!files || !Array.isArray(files)) {
      console.warn("Invalid files input for highlighting.");
      return [];
    }

    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      })),
    );
  },
);
