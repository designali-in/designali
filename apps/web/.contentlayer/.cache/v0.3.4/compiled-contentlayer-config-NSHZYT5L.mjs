// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit as visit2 } from "unist-util-visit";

// src/lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// src/registry/index.tsx
import * as React from "react";
var Index = {
  default: {
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-blockquote")
      ),
      source: "",
      files: ["registry/default/example/typography-blockquote.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-demo": {
      name: "typography-demo",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-demo")
      ),
      source: "",
      files: ["registry/default/example/typography-demo.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h1": {
      name: "typography-h1",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-h1")
      ),
      source: "",
      files: ["registry/default/example/typography-h1.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h2": {
      name: "typography-h2",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-h2")
      ),
      source: "",
      files: ["registry/default/example/typography-h2.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h3": {
      name: "typography-h3",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-h3")
      ),
      source: "",
      files: ["registry/default/example/typography-h3.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h4": {
      name: "typography-h4",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-h4")
      ),
      source: "",
      files: ["registry/default/example/typography-h4.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-inline-code")
      ),
      source: "",
      files: ["registry/default/example/typography-inline-code.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-large": {
      name: "typography-large",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-large")
      ),
      source: "",
      files: ["registry/default/example/typography-large.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-lead": {
      name: "typography-lead",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-lead")
      ),
      source: "",
      files: ["registry/default/example/typography-lead.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-list": {
      name: "typography-list",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-list")
      ),
      source: "",
      files: ["registry/default/example/typography-list.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-muted": {
      name: "typography-muted",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-muted")
      ),
      source: "",
      files: ["registry/default/example/typography-muted.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-p": {
      name: "typography-p",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-p")
      ),
      source: "",
      files: ["registry/default/example/typography-p.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-small": {
      name: "typography-small",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-small")
      ),
      source: "",
      files: ["registry/default/example/typography-small.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-table": {
      name: "typography-table",
      type: "components:example",
      component: React.lazy(
        () => import("@/registry/default/example/typography-table")
      ),
      source: "",
      files: ["registry/default/example/typography-table.tsx"],
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    }
  }
};

// src/lib/registry/styles.ts
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
var GalleryPost = defineDocumentType(() => ({
  name: "GalleryPost",
  filePathPattern: "gallery/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the assetst",
      required: true
    },
    modifiedTime: {
      type: "string",
      description: "The modified time of the assets",
      required: true
    },
    download: {
      type: "string",
      description: "The summary of the assets",
      required: true
    },
    dimention: {
      type: "string",
      description: "The summary of the assets",
      required: true
    },
    size: {
      type: "string",
      description: "The summary of the assets",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the assets",
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
  documentTypes: [Page, Designs, Documentation, Guide, BlogPost, GalleryPost],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeComponent,
      rehypeSlug,
      () => (tree) => {
        visit2(tree, (node) => {
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
        visit2(tree, (node) => {
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
//# sourceMappingURL=compiled-contentlayer-config-NSHZYT5L.mjs.map
