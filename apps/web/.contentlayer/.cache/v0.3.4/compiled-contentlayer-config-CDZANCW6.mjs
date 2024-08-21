// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
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
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
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
//# sourceMappingURL=compiled-contentlayer-config-CDZANCW6.mjs.map
