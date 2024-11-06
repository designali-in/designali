import type {
  ComponentsConfig,
  DesignConfig,
  DocumentationConfig,
  GuidesConfig,
} from "@/comp/mdx/doc/types";

export const componentsConfig: ComponentsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Designs",
      href: "/designs",
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
          href: "/components",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/components/button",
        },
        {
          title: "Accordion",
          href: "/components/accordion",
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          title: "Macbook",
          href: "/components/mockups/macbook",
        },
        {
          title: "Mac",
          href: "/components/mockups/mac",
        },
        {
          title: "iPhone",
          href: "/components/mockups/iphone",
        },
        {
          title: "iPad",
          href: "/components/mockups/ipad",
        },
        {
          title: "Safari",
          href: "/components/mockups/safari",
        },
      ],
    },
  ],
};

export const designsConfig: DesignConfig = {
  mainNav: [
    {
      title: "Designs",
      href: "/designs",
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
        {
          title: "Installation",
          href: "/designs/installation/next",
        },
        {
          title: "Dark Mode",
          href: "/designs/installation/dark-mode",
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
        {
          title: "Typography",
          href: "/designs/typography",
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          title: "LinkedIn",
          href: "/designs/guides/linkedin",
        },
        {
          title: "Youtube",
          href: "/designs/guides/youtube",
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
      title: "DIcons",
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
    {
      title: "DShapes",
      items: [
        {
          title: "Installation",
          href: "/documentation/dshapes/installation",
        },
        {
          title: "How to use",
          href: "/documentation/dshapes/how-to-use",
        },
        {
          title: "Noise",
          href: "/documentation/dshapes/noise",
        },
        {
          title: "Sizing",
          href: "/documentation/dshapes/sizing",
        },
        {
          title: "Index",
          href: "/documentation/dshapes/ind",
        },
      ],
    },
  ],
};
