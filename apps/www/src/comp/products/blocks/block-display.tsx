/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { styles } from "@/registry/registry-styles";

import { getBlock } from "@/lib/blocks";

import { BlockPreview } from "./block-preview";

export async function BlockDisplay({ name }: { name: string }) {
  const blocks = await Promise.all(
    styles.map(async (style) => {
      const block = await getBlock(name, style.name);
      const hasLiftMode = block?.chunks ? block?.chunks?.length > 0 : false;

      // Cannot (and don't need to) pass to the client.
      delete block?.component;
      delete block?.chunks;

      return {
        ...block,
        hasLiftMode,
      };
    }),
  );

  if (!blocks?.length) {
    return null;
  }

  return blocks.map((block) => (
    <BlockPreview key={`${block.style}-${block.name}`} block={block} />
  ));
}
