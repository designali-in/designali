import type { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "hero-01",
    type: "registry:block",
    description: "A simple hero section with react types ",
    registryDependencies: ["dot-pattern", "render"],
    files: [
      {
        path: "blocks/hero-01/page.tsx",
        type: "registry:page",
        target: "app/hero/page.tsx",
      },
      {
        path: "blocks/hero-01/components/type-writer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
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
