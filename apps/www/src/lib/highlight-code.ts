/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { codeToHtml } from "shiki";

export async function highlightCode(code: string) {
  const html = codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
    transformers: [
      {
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
      },
    ],
  });

  return html;
}
