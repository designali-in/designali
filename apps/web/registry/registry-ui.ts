import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  // Safari
  {
    name: "safari",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/safari.tsx"],
  },
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
