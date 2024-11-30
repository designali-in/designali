import type { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "sidebar-01",
    description:
      "A collapsible sidebar with workspace switcher, main navigation, secondary navigation, project navigation, and user navigation.",
    type: "registry:block",
    registryDependencies: [
      "avatar",
      "button",
      "collapsible",
      "dropdown-menu",
      "drawer",
      "separator",
      "input",
      "popover",
      "sheet",
      "progress",
      "card",
      "use-mobile",
    ],
    files: [
      {
        path: "block/sidebar-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "block/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/storage-card.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/components/team-switcher.tsx",
        type: "registry:component",
      },
      {
        path: "block/sidebar-01/hooks/use-sidebar.tsx",
        type: "registry:hook",
      },
      {
        path: "block/sidebar-01/ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-05",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "breadcrumb",
      "button",
      "card",
      "dropdown-menu",
      "input",
      "pagination",
      "progress",
      "separator",
      "sheet",
      "table",
      "tabs",
      "tooltip",
    ],
    files: ["block/dashboard-05.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
];
