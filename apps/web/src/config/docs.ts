import type { DocsConfig, GuidesConfig } from "@/components/mdx/doc/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/designs",
        },
      ],
    },
    {
      title: "Designs",
      items: [
        {
          title: "Portfolio",
          href: "/designs/openfile/portfolio",
        },
        {
          title: "Graaadients",
          href: "/designs/openfile/graaadients",
        },
        {
          title: "Grad Reel",
          href: "/designs/openfile/grad-reel",
        },
        {
          title: "Grad Carousel",
          href: "/designs/openfile/grad-carousel",
        },
        {
          title: "SM Cheat Sheet",
          href: "/designs/openfile/sm-cheat-sheet",
        },
        {
          title: "3D Icons",
          href: "/designs/openfile/3dicons",
        },
        {
          title: "Pure White",
          href: "/designs/openfile/pure-white",
        },
      ],
    },
  ],
};

export const guidesConfig: GuidesConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/guides",
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          title: "LinkedIn",
          href: "/guides/linkedin",
        },
        {
          title: "Youtube",
          href: "/guides/youtube",
        },
      ],
    },
  ],
};
