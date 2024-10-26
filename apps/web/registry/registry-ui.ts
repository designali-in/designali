import type { Registry } from "@/registry/schema";

export const ui: Registry = [
  // UI
  {
    name: "button",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/button.tsx"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/tabs.tsx"],
  },
  {
    name: "toggle",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/toggle.tsx"],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/toggle-group.tsx"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/ui/tooltip.tsx"],
  },
  // Safari
  {
    name: "safari",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/safari.tsx"],
  },
  // Safari
  {
    name: "ipad-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/ipad-pro.tsx"],
  },
  // Macbook
  {
    name: "macbook-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/macbook-pro.tsx"],
  },
  // iMac
  {
    name: "mac",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/mac.tsx"],
  },
  // iPhone
  {
    name: "iphone-16",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/iphone-16.tsx"],
  },
  {
    name: "iphone-16-pro",
    type: "registry:ui",
    dependencies: [""],
    files: ["designali/mockups/iphone-16-pro.tsx"],
  },
];
