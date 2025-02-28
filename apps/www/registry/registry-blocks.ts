import { type Registry } from "shadcn/registry";

export const blocks: Registry["items"] = [
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
    categories: ["login"],
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
    categories: ["login"],
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
