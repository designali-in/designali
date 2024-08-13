import type { VFileCompatible } from "vfile";
import { compile } from "@mdx-js/mdx";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

import { getErrorMessage } from "./get-error-message.js";
import { rehypePlugins, remarkPlugins } from "./plugins";

export type SerializeResult<T = Record<string, unknown>> = {
  compiledSource: string;
  frontmatter: T;
};

export type SerializeOptions = {
  rsc?: boolean;
};

export const serialize = async <T>(
  source: VFileCompatible,
  options: SerializeOptions = {},
): Promise<SerializeResult<T>> => {
  const { rsc = false } = options;
  const vfile = new VFile(source);

  matter(vfile, { strip: true });

  let compiledMdx: VFile;

  try {
    compiledMdx = await compile(vfile, {
      outputFormat: "function-body",
      providerImportSource: rsc ? undefined : "@mdx-js/react",
      development: process.env.NODE_ENV === "development",
      remarkPlugins,
      rehypePlugins,
    });
  } catch (error) {
    throw new Error(`Error compiling MDX: ${getErrorMessage(error)}`);
  }

  return {
    compiledSource: String(compiledMdx),
    frontmatter: (vfile.data.matter ?? {}) as T,
  };
};
