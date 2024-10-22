import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  // Macbook
  {
    name: "macbook-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/macbook-pro.tsx"],
  },
  // iPhone
  {
    name: "iphone-16",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/iphone-16.tsx"],
  },
  {
    name: "iphone-16-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/iphone-16-pro.tsx"],
  },
];
