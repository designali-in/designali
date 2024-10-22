// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit as visit3 } from "unist-util-visit";

// src/lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// __registry__/index.tsx
import * as React from "react";
var Index = {
  "default": {
    "iphone-16-pro": {
      name: "iphone-16-pro",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/src/registry/default/designali/mockup/iphone-16-pro.tsx"],
      component: React.lazy(() => import("@/registry/default/src/registry/default/designali/mockup/iphone-16-pro.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    }
  }
};

// registry/registry-styles.ts
var styles = [
  {
    name: "default",
    label: "Designali"
  }
];

// src/lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          for (const style of styles) {
            let src;
            if (srcPath) {
              src = srcPath;
            } else {
              const component = Index[style.name][name];
              src = fileName ? component.files.find((file) => {
                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
              }) || component.files[0] : component.files[0];
            }
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                  __style__: style.name
                },
                attributes: [
                  {
                    name: "styleName",
                    type: "mdxJsxAttribute",
                    value: style.name
                  }
                ],
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0];
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// src/lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx") && !node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand;
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  readingTime: {
    type: "number",
    resolve: (doc) => {
      const content = String(doc.body.raw);
      const wordsPerMinute = 200;
      const numberOfWords = content.split(/\s/g).length;
      const minutes = numberOfWords / wordsPerMinute;
      return Math.ceil(minutes);
    }
  }
};
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the blog post",
      required: true
    },
    modifiedTime: {
      type: "string",
      description: "The modified time of the blog post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the blog post",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var Designs = defineDocumentType(() => ({
  name: "Designs",
  filePathPattern: `designs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    featured: {
      type: "boolean",
      default: false
    }
  },
  computedFields
}));
var Documentation = defineDocumentType(() => ({
  name: "Documentation",
  filePathPattern: `documentation/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    featured: {
      type: "boolean",
      default: false
    }
  },
  computedFields
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Page, Designs, Documentation, Guide, BlogPost],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeComponent,
      rehypeSlug,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: { dark: "one-dark-pro", light: "github-light" },
          /**
           * @param {{ children: string | any[]; }} node
           */
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Designs,
  Documentation,
  Guide,
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5EK6MJGO.mjs.map
