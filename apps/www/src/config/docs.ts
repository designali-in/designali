import { MainNavItem, SidebarNavItem } from "@/src/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },

        {
          title: "Typography",
          href: "/docs/typography",
          items: [],
        },
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Dot Pattern",
          label: "New",
          href: "/docs/components/backgrounds/dot-pattern",
          items: [],
        },
        {
          title: "Grid Pattern",
          href: "/docs/components/backgrounds/grid-pattern",
          items: [],
        },
        {
          title: "Flickering Grid",
          href: "/docs/components/backgrounds/flickering-grid",
          items: [],
        },
        {
          title: "Retro Grid",
          href: "/docs/components/backgrounds/retro-grid",
          items: [],
        },
        {
          title: "Ripple",
          href: "/docs/components/backgrounds/ripple",
          items: [],
        },
        {
          title: "Scroll Progress",
          href: "/docs/components/backgrounds/scroll-progress",
          items: [],
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          title: "Macbook",

          href: "/docs/components/mockups/macbook",
          items: [],
        },
        {
          title: "Mac",
          href: "/docs/components/mockups/mac",
          items: [],
        },
        {
          title: "iPhone",
          href: "/docs/components/mockups/iphone",
          items: [],
        },
        {
          title: "iPad",
          href: "/docs/components/mockups/ipad",
          items: [],
        },
        {
          title: "Safari",
          href: "/docs/components/mockups/safari",
          items: [],
        },
      ],
    },
    {
      title: "Texts",
      items: [
        {
          title: "Morphing-text",
          href: "/docs/components/texts/morphing-text",
          items: [],
        },
        {
          title: "Number Counter",
          href: "/docs/components/texts/number-counter",
          items: [],
        },
        {
          title: "Gradient Text",
          label: "New",
          href: "/docs/components/texts/gradient-text",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },

        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Banner",
          href: "/docs/components/banner",
          items: [],
        },
        {
          title: "Breadcrumb",
          href: "/docs/components/breadcrumb",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Dropdown",
          href: "/docs/components/dropdown",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Notification",
          href: "/docs/components/notification",
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Radio",
          href: "/docs/components/radio",
          items: [],
        }, 
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Tab",
          href: "/docs/components/tab",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
    {
      title: "Legal",
      label: "",
      items: [
        {
          title: "Terms",
          href: "/docs/legal/terms",
          items: [],
        },
        {
          title: "Privacy",
          href: "/docs/legal/privacy",
          items: [],
        },
        {
          title: "Contact",
          href: "/docs/legal/contact",
          items: [],
        },
      ],
    },
    {
      title: "DIcons",
      label: "",
      items: [
        {
          title: "Installation",
          href: "/docs/dicons/installation",
          items: [],
        },
        {
          title: "How to use",
          href: "/docs/dicons/how-to-use",
          items: [],
        },
        {
          title: "Color",
          href: "/docs/dicons/color",
          items: [],
        },
        {
          title: "Sizing",
          href: "/docs/dicons/sizing",
          items: [],
        },
        {
          title: "Stroke Width",
          href: "/docs/dicons/stroke-width",
          items: [],
        },
        {
          title: "Fill",
          href: "/docs/dicons/fill",
          items: [],
        },
      ],
    },
    {
      title: "DShapes",
      label: "",
      items: [
        {
          title: "Installation",
          href: "/docs/dshapes/installation",
          items: [],
        },
        {
          title: "How to use",
          href: "/docs/dshapes/how-to-use",
          items: [],
        },
        {
          title: "Noise",
          href: "/docs/dshapes/noise",
          items: [],
        },
        {
          title: "Sizing",
          href: "/docs/dshapes/sizing",
          items: [],
        },
        {
          title: "Index",
          href: "/docs/dshapes/ind",
          items: [],
        },
        
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [],
    },
  ],
};


export const iconsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "All Icons",
      items: [
        {
          title: "AI",
          label: "New", 
          href: "/products/dicons/Ai",
          items: [],
        }, 
        {
          title: "Access",
          href: "/products/dicons/Access",
          items: [],
        },
        {
          title: "Alert",
          href: "/products/dicons/Alert",
          items: [],
        },
        {
          title: "Animations",
          href: "/products/dicons/Animations",
          items: [],
        },
        {
          title: "Accounts",
          href: "/products/dicons/Accounts",
          items: [],
        },
        {
          title: "Animals",
          href: "/products/dicons/Animals",
          items: [],
        },
        {
          title: "Arrows",
          href: "/products/dicons/Arrows",
          items: [],
        },
        {
          title: "Awards",
          href: "/products/dicons/Awards",
          items: [],
        },
        {
          title: "Baby",
          href: "/products/dicons/Baby",
          items: [],
        },
        {
          title: "Badge",
          href: "/products/dicons/Badge",
          items: [],
        },
        {
          title: "Access",
          href: "/products/dicons/Access",
          items: [],
        },
        {
          title: "Bell",
          href: "/products/dicons/Bell",
          items: [],
        },
        {
          title: "Beauty",
          href: "/products/dicons/Beauty",
          items: [],
        },
        {
          title: "Bitcoins",
          href: "/products/dicons/Bitcoins",
          items: [],
        },
        {
          title: "Brands",
          href: "/products/dicons/Brands",
          items: [],
        },
        {
          title: "Bookmark",
          href: "/products/dicons/Bookmark",
          items: [],
        },
        {
          title: "Buildings",
          href: "/products/dicons/Buildings",
          items: [],
        },
        {
          title: "Business",
          href: "/products/dicons/Business",
          items: [],
        },
        {
          title: "Chats",
          href: "/products/dicons/Chats",
          items: [],
        },
        {
          title: "Communications",
          href: "/products/dicons/Communications",
          items: [],
        },
        {
          title: "Clocks",
          href: "/products/dicons/Clocks",
          items: [],
        },
        {
          title: "Clothings",
          href: "/products/dicons/Clothings",
          items: [],
        },
        {
          title: "Connectivity",
          href: "/products/dicons/Connectivity",
          items: [],
        },
        {
          title: "Cursors",
          href: "/products/dicons/Cursors",
          items: [],
        },
        {
          title: "Dashboards",
          href: "/products/dicons/Dashboards",
          items: [],
        },
        {
          title: "Designs",
          href: "/products/dicons/Designs",
          items: [],
        },
      ],
    },
     
      
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [],
    },
  ],
};
