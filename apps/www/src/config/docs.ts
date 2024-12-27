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
      external: undefined,
    },
    {
      title: "Designs",
      href: "/designs",
      external: undefined,
    },
    {
      title: "Documentation",
      href: "/documentation",
      external: undefined,
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
        {
          title: "Installation",
          href: "/components/installation/next",
        },
        {
          title: "Dark Mode",
          href: "/components/installation/dark-mode",
        },
      ],
    },

    {
      title: "Backgrounds",
      items: [
        {
          title: "Dot Pattern",
          href: "/components/backgrounds/dot-pattern",
        },
        {
          title: "Grid Pattern",
          href: "/components/backgrounds/grid-pattern",
        },
        {
          title: "Flickering Grid",
          href: "/components/backgrounds/flickering-grid",
        },
        {
          title: "Retro Grid",
          href: "/components/backgrounds/retro-grid",
        },
        {
          title: "Ripple",
          href: "/components/backgrounds/ripple",
        },
        {
          title: "Scroll Progress",
          href: "/components/backgrounds/scroll-progress",
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
    {
      title: "Texts",
      items: [
        {
          title: "Morphing Text",
          href: "/components/texts/morphing-text",
        },
        {
          title: "Number Counter",
          href: "/components/texts/number-counter",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/components/accordion",
        },
        {
          title: "Alert",
          href: "/components/alert",
        },
        {
          title: "Avatar",
          href: "/components/avatar",
        },
        {
          title: "Badge",
          href: "/components/badge",
        },
        {
          title: "Banner",
          href: "/components/banner",
        },
        {
          title: "Bento Grid",
          href: "/components/bento-grid",
        },
        {
          title: "Breadcrumb",
          href: "/components/breadcrumb",
        },
        {
          title: "Button",
          href: "/components/button",
        },
        {
          title: "Checkbox",
          href: "/components/checkbox",
        },
        {
          title: "Dialog",
          href: "/components/dialog",
        },
        {
          title: "Dropdown",
          href: "/components/dropdown",
        },
        {
          title: "Input",
          href: "/components/input",
        },
        {
          title: "Notifications",
          href: "/components/notification",
        },
        {
          title: "Pagination",
          href: "/components/pagination",
        },
        {
          title: "Popover",
          href: "/components/popover",
        },
        {
          title: "Radio",
          href: "/components/radio",
        },
        {
          title: "Select",
          href: "/components/select",
        },
        {
          title: "Slider",
          href: "/components/slider",
        },
        {
          title: "Switch",
          href: "/components/switch",
        },
        {
          title: "Tab",
          href: "/components/tab",
        },
        {
          title: "Textarea",
          href: "/components/textarea",
        },
        {
          title: "Tooltip",
          href: "/components/tooltip",
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
      external: undefined,
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
      external: undefined,
    },
    {
      title: "Guides",
      href: "/guides",
      external: undefined,
    },
    {
      title: "Documentation",
      href: "/documentation",
      external: undefined,
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
      external: undefined,
    },
    {
      title: "Guides",
      href: "/guides",
      external: undefined,
    },
    {
      title: "Documentation",
      href: "/documentation",
      external: undefined,
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
