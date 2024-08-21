import type {
  DesignConfig,
  DocumentationConfig,
  GuidesConfig,
} from "@/components/mdx/doc/types";

export const designConfig: DesignConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Documentation",
      href: "/documentation",
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
      title: "Coding",
      items: [
        {
          title: "Typography",
          href: "/designs/typography",
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
    {
      title: "Documentation",
      href: "/documentation",
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

export const documentationConfig: DocumentationConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Documentation",
      href: "/documentation",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/documentation",
        },
      ],
    },
    {
      title: "Basics",
      items: [
        {
          title: "Installation",
          href: "/documentation/installation",
        },
      ],
    },
  ],
};
