import { type Registry } from "shadcn/registry";

export const blocks: Registry["items"] = [
  {
    name: "call-to-action-1",
    type: "registry:block",
    description: "A simple hero section with react types",
    registryDependencies: [],
    files: [
      {
        path: "blocks/call-to-action/one/page.tsx",
        type: "registry:component",
        target: "app/page.tsx",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "call-to-action-2",
    type: "registry:block",
    description: "A simple hero section with react types",
    registryDependencies: [],
    files: [
      {
        path: "blocks/call-to-action/two/page.tsx",
        type: "registry:component",
        target: "app/page.tsx",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "call-to-action-3",
    type: "registry:block",
    description: "A simple hero section with react types",
    registryDependencies: [],
    files: [
      {
        path: "blocks/call-to-action/three/page.tsx",
        type: "registry:component",
        target: "app/page.tsx",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "apple-iphone-16-pro",
    type: "registry:block",
    description: "A simple hero section with react types ",
    registryDependencies: [],
    files: [
      {
        path: "blocks/apple-iphone-16-pro/page.tsx",
        type: "registry:page",
        target: "app/hero/page.tsx",
      },
      {
        path: "blocks/apple-iphone-16-pro/components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/apple-iphone-16-pro/components/closer-look.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/apple-iphone-16-pro/components/highlights.tsx",
        type: "registry:component",
      },
    ],
    categories: ["brands"],
  },
  {
    name: "hero-01",
    type: "registry:block",
    description: "A simple hero section with react types ",
    registryDependencies: [],
    files: [
      {
        path: "blocks/hero-01/page.tsx",
        type: "registry:page",
        target: "app/hero/page.tsx",
      },
      {
        path: "blocks/hero-01/components/stroke-dance.js",
        type: "registry:component",
      },
      {
        path: "blocks/hero-01/components/type-writer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
  },
  {
    name: "dashboard-01",
    type: "registry:block",
    description: "A simple dashboard",
    registryDependencies: [],
    files: [
      {
        path: "blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard-01/page.tsx",
      },
      {
        path: "blocks/dashboard-01/components/date-range-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/main-nav.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/overview.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/recent-sales.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/search.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/theme-switcher.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/user-nav.tsx",
        type: "registry:component",
      },
    ],
    categories: ["dashboard"],
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
  },
];
