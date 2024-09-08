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
      title: "Design",
      items: [
        {
          title: "Graphic Design",
          href: "/designs/graphic-design",
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
      title: "Open File",
      items: [
        {
          title: "Portfolio",
          href: "/designs/openfile/portfolio",
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
          href: "/documentation/dicons/installation",
        },
        {
          title: "How to use",
          href: "/documentation/dicons/how-to-use",
        },
        {
          title: "Color",
          href: "/documentation/dicons/color",
        },
        {
          title: "Sizing",
          href: "/documentation/dicons/sizing",
        },
        {
          title: "Stroke Width",
          href: "/documentation/dicons/stroke-width",
        },
        {
          title: "Fill",
          href: "/documentation/dicons/fill",
        },
      ],
    },
  ],
};
