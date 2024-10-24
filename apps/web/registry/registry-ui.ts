import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  // Button
  {
    name: "button",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/button.tsx"],
  },
  // Safari
  {
    name: "safari",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/safari.tsx"],
  },
  // Safari
  {
    name: "ipad-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/ipad-pro.tsx"],
  },
  // Macbook
  {
    name: "macbook-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/macbook-pro.tsx"],
  },
  // iMac
  {
    name: "mac",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockup/mac.tsx"],
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
