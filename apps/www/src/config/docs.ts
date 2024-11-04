import type {
  DesignConfig,
  DocumentationConfig,
  GuidesConfig,
} from "@/comp/mdx/doc/types";

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
      title: "Components",
      items: [
        {
          title: "Macbook",
          href: "/designs/ui/macbook",
        },
        {
          title: "Mac",
          href: "/designs/ui/mac",
        },
        {
          title: "iPhone",
          href: "/designs/ui/iphone",
        },
        {
          title: "iPad",
          href: "/designs/ui/ipad",
        },
        {
          title: "Safari",
          href: "/designs/ui/safari",
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
