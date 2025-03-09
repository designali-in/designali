// contentlayer.config.js
import { getHighlighter } from "@shikijs/compat";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit as visit3 } from "unist-util-visit";

// src/lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// __registry__/index.tsx
import * as React from "react";
var Index = {
  "default": {
    "accordion": {
      name: "accordion",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/accordion.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/accordion.tsx")),
      source: "",
      meta: void 0
    },
    "alert": {
      name: "alert",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/alert.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/alert.tsx")),
      source: "",
      meta: void 0
    },
    "alert-dialog": {
      name: "alert-dialog",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [{
        path: "registry/default/ui/alert-dialog.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/alert-dialog.tsx")),
      source: "",
      meta: void 0
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/aspect-ratio.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/aspect-ratio.tsx")),
      source: "",
      meta: void 0
    },
    "avatar": {
      name: "avatar",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/avatar.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/avatar.tsx")),
      source: "",
      meta: void 0
    },
    "badge": {
      name: "badge",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/badge.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/badge.tsx")),
      source: "",
      meta: void 0
    },
    "bento-grid": {
      name: "bento-grid",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/bento-grid.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/bento-grid.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb": {
      name: "breadcrumb",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/breadcrumb.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/breadcrumb.tsx")),
      source: "",
      meta: void 0
    },
    "button": {
      name: "button",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/button.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/button.tsx")),
      source: "",
      meta: void 0
    },
    "calendar": {
      name: "calendar",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [{
        path: "registry/default/ui/calendar.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/calendar.tsx")),
      source: "",
      meta: void 0
    },
    "card": {
      name: "card",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/card.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/card.tsx")),
      source: "",
      meta: void 0
    },
    "carousel": {
      name: "carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [{
        path: "registry/default/ui/carousel.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/carousel.tsx")),
      source: "",
      meta: void 0
    },
    "chart": {
      name: "chart",
      description: "",
      type: "registry:ui",
      registryDependencies: ["card"],
      files: [{
        path: "registry/default/ui/chart.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/chart.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox": {
      name: "checkbox",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/checkbox.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/checkbox.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-tree": {
      name: "checkbox-tree",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/checkbox-tree.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/checkbox-tree.tsx")),
      source: "",
      meta: void 0
    },
    "collapsible": {
      name: "collapsible",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/collapsible.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/collapsible.tsx")),
      source: "",
      meta: void 0
    },
    "command": {
      name: "command",
      description: "",
      type: "registry:ui",
      registryDependencies: ["dialog"],
      files: [{
        path: "registry/default/ui/command.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/command.tsx")),
      source: "",
      meta: void 0
    },
    "context-menu": {
      name: "context-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/context-menu.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/context-menu.tsx")),
      source: "",
      meta: void 0
    },
    "dialog": {
      name: "dialog",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/dialog.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/dialog.tsx")),
      source: "",
      meta: void 0
    },
    "drawer": {
      name: "drawer",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/drawer.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/drawer.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/dropdown-menu.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/dropdown-menu.tsx")),
      source: "",
      meta: void 0
    },
    "form": {
      name: "form",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button", "label"],
      files: [{
        path: "registry/default/ui/form.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/form.tsx")),
      source: "",
      meta: void 0
    },
    "hover-card": {
      name: "hover-card",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/hover-card.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/hover-card.tsx")),
      source: "",
      meta: void 0
    },
    "image-card": {
      name: "image-card",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/image-card.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/image-card.tsx")),
      source: "",
      meta: void 0
    },
    "input": {
      name: "input",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/input.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/input.tsx")),
      source: "",
      meta: void 0
    },
    "input-otp": {
      name: "input-otp",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/input-otp.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/input-otp.tsx")),
      source: "",
      meta: void 0
    },
    "label": {
      name: "label",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/label.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/label.tsx")),
      source: "",
      meta: void 0
    },
    "menubar": {
      name: "menubar",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/menubar.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/menubar.tsx")),
      source: "",
      meta: void 0
    },
    "multiselect": {
      name: "multiselect",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/multiselect.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/multiselect.tsx")),
      source: "",
      meta: void 0
    },
    "navigation-menu": {
      name: "navigation-menu",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/navigation-menu.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/navigation-menu.tsx")),
      source: "",
      meta: void 0
    },
    "pagination": {
      name: "pagination",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: [{
        path: "registry/default/ui/pagination.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/pagination.tsx")),
      source: "",
      meta: void 0
    },
    "popover": {
      name: "popover",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/popover.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/popover.tsx")),
      source: "",
      meta: void 0
    },
    "progress": {
      name: "progress",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/progress.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/progress.tsx")),
      source: "",
      meta: void 0
    },
    "radio-group": {
      name: "radio-group",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/radio-group.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/radio-group.tsx")),
      source: "",
      meta: void 0
    },
    "resizable": {
      name: "resizable",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/resizable.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/resizable.tsx")),
      source: "",
      meta: void 0
    },
    "scroll-area": {
      name: "scroll-area",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/scroll-area.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/scroll-area.tsx")),
      source: "",
      meta: void 0
    },
    "select": {
      name: "select",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/select.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/select.tsx")),
      source: "",
      meta: void 0
    },
    "select-native": {
      name: "select-native",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/select-native.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/select-native.tsx")),
      source: "",
      meta: void 0
    },
    "separator": {
      name: "separator",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/separator.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/separator.tsx")),
      source: "",
      meta: void 0
    },
    "sheet": {
      name: "sheet",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/sheet.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/sheet.tsx")),
      source: "",
      meta: void 0
    },
    "sidebar": {
      name: "sidebar",
      description: "",
      type: "registry:ui",
      registryDependencies: ["button", "separator", "sheet", "tooltip", "input", "use-mobile", "skeleton"],
      files: [{
        path: "registry/default/ui/sidebar.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/sidebar.tsx")),
      source: "",
      meta: void 0
    },
    "skeleton": {
      name: "skeleton",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/skeleton.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/skeleton.tsx")),
      source: "",
      meta: void 0
    },
    "skeletons": {
      name: "skeletons",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/skeletons.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/skeletons.tsx")),
      source: "",
      meta: void 0
    },
    "slider": {
      name: "slider",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/slider.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/slider.tsx")),
      source: "",
      meta: void 0
    },
    "sonner": {
      name: "sonner",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/sonner.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/sonner.tsx")),
      source: "",
      meta: void 0
    },
    "switch": {
      name: "switch",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/switch.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/switch.tsx")),
      source: "",
      meta: void 0
    },
    "table": {
      name: "table",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/table.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/table.tsx")),
      source: "",
      meta: void 0
    },
    "tabs": {
      name: "tabs",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/tabs.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/tabs.tsx")),
      source: "",
      meta: void 0
    },
    "textarea": {
      name: "textarea",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/textarea.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/textarea.tsx")),
      source: "",
      meta: void 0
    },
    "toast": {
      name: "toast",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/toast.tsx",
        type: "registry:ui",
        target: ""
      }, {
        path: "registry/default/hooks/use-toast.ts",
        type: "registry:hook",
        target: ""
      }, {
        path: "registry/default/ui/toaster.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/toast.tsx")),
      source: "",
      meta: void 0
    },
    "toggle": {
      name: "toggle",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/toggle.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/toggle.tsx")),
      source: "",
      meta: void 0
    },
    "toggle-group": {
      name: "toggle-group",
      description: "",
      type: "registry:ui",
      registryDependencies: ["toggle"],
      files: [{
        path: "registry/default/ui/toggle-group.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/toggle-group.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip": {
      name: "tooltip",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/tooltip.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/tooltip.tsx")),
      source: "",
      meta: void 0
    },
    "ipad-pro": {
      name: "ipad-pro",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/ipad-pro.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/ipad-pro.tsx")),
      source: "",
      meta: void 0
    },
    "iphone-16-pro": {
      name: "iphone-16-pro",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/iphone-16-pro.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/iphone-16-pro.tsx")),
      source: "",
      meta: void 0
    },
    "iphone-16": {
      name: "iphone-16",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/iphone-16.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/iphone-16.tsx")),
      source: "",
      meta: void 0
    },
    "mac": {
      name: "mac",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/mac.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/mac.tsx")),
      source: "",
      meta: void 0
    },
    "macbook-pro": {
      name: "macbook-pro",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/macbook-pro.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/macbook-pro.tsx")),
      source: "",
      meta: void 0
    },
    "safari": {
      name: "safari",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/mockups/safari.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/mockups/safari.tsx")),
      source: "",
      meta: void 0
    },
    "gradient-text": {
      name: "gradient-text",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/texts/gradient-text.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/texts/gradient-text.tsx")),
      source: "",
      meta: void 0
    },
    "morphing-text": {
      name: "morphing-text",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/texts/morphing-text.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/texts/morphing-text.tsx")),
      source: "",
      meta: void 0
    },
    "number-counter": {
      name: "number-counter",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/texts/number-counter.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/texts/number-counter.tsx")),
      source: "",
      meta: void 0
    },
    "background-beams": {
      name: "background-beams",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/background-beams.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/background-beams.tsx")),
      source: "",
      meta: void 0
    },
    "canvas-effect": {
      name: "canvas-effect",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/canvas-effect.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/canvas-effect.tsx")),
      source: "",
      meta: void 0
    },
    "flickering-grid": {
      name: "flickering-grid",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/flickering-grid.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/flickering-grid.tsx")),
      source: "",
      meta: void 0
    },
    "scroll-progress": {
      name: "scroll-progress",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/scroll-progress.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/scroll-progress.tsx")),
      source: "",
      meta: void 0
    },
    "retro-grid": {
      name: "retro-grid",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/retro-grid.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/retro-grid.tsx")),
      source: "",
      meta: void 0
    },
    "ripple": {
      name: "ripple",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/ripple.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/ripple.tsx")),
      source: "",
      meta: void 0
    },
    "dot-pattern": {
      name: "dot-pattern",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/dot-pattern.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/dot-pattern.tsx")),
      source: "",
      meta: void 0
    },
    "grid-pattern": {
      name: "grid-pattern",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/grid-pattern.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/grid-pattern.tsx")),
      source: "",
      meta: void 0
    },
    "glow": {
      name: "glow",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/glow.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/glow.tsx")),
      source: "",
      meta: void 0
    },
    "highlighter": {
      name: "highlighter",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/highlighter.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/highlighter.tsx")),
      source: "",
      meta: void 0
    },
    "particles": {
      name: "particles",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/particles.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/particles.tsx")),
      source: "",
      meta: void 0
    },
    "shine-border": {
      name: "shine-border",
      description: "",
      type: "registry:ui",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/ui/backgrounds/shine-border.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/ui/backgrounds/shine-border.tsx")),
      source: "",
      meta: void 0
    },
    "call-to-action-1": {
      name: "call-to-action-1",
      description: "A simple hero section with react types",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/call-to-action/one/page.tsx",
        type: "registry:component",
        target: "app/page.tsx"
      }],
      categories: ["cta"],
      component: React.lazy(() => import("@/registry/default/blocks/call-to-action/one/page.tsx")),
      source: "__registry__/default/blocks/call-to-action/one/page.tsx",
      meta: void 0
    },
    "call-to-action-2": {
      name: "call-to-action-2",
      description: "A simple hero section with react types",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/call-to-action/two/page.tsx",
        type: "registry:component",
        target: "app/page.tsx"
      }],
      categories: ["cta"],
      component: React.lazy(() => import("@/registry/default/blocks/call-to-action/two/page.tsx")),
      source: "__registry__/default/blocks/call-to-action/two/page.tsx",
      meta: void 0
    },
    "call-to-action-3": {
      name: "call-to-action-3",
      description: "A simple hero section with react types",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/call-to-action/three/page.tsx",
        type: "registry:component",
        target: "app/page.tsx"
      }],
      categories: ["cta"],
      component: React.lazy(() => import("@/registry/default/blocks/call-to-action/three/page.tsx")),
      source: "__registry__/default/blocks/call-to-action/three/page.tsx",
      meta: void 0
    },
    "apple-iphone-16-pro": {
      name: "apple-iphone-16-pro",
      description: "A simple hero section with react types ",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/apple-iphone-16-pro/page.tsx",
        type: "registry:page",
        target: "app/hero/page.tsx"
      }, {
        path: "registry/default/blocks/apple-iphone-16-pro/components/hero.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/apple-iphone-16-pro/components/closer-look.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/apple-iphone-16-pro/components/highlights.tsx",
        type: "registry:component",
        target: ""
      }],
      categories: ["brands"],
      component: React.lazy(() => import("@/registry/default/blocks/apple-iphone-16-pro/page.tsx")),
      source: "__registry__/default/blocks/apple-iphone-16-pro/page.tsx",
      meta: void 0
    },
    "hero-01": {
      name: "hero-01",
      description: "A simple hero section with react types ",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/hero-01/page.tsx",
        type: "registry:page",
        target: "app/hero/page.tsx"
      }, {
        path: "registry/default/blocks/hero-01/components/stroke-dance.js",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/hero-01/components/type-writer.tsx",
        type: "registry:component",
        target: ""
      }],
      categories: ["hero"],
      component: React.lazy(() => import("@/registry/default/blocks/hero-01/page.tsx")),
      source: "__registry__/default/blocks/hero-01/page.tsx",
      meta: void 0
    },
    "tasks-01": {
      name: "tasks-01",
      description: "A simple dashboard",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/tasks-01/page.tsx",
        type: "registry:page",
        target: "app/tasks/page.tsx"
      }, {
        path: "registry/default/blocks/tasks-01/components/columns.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-column-header.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-faceted-filter.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-pagination.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-row-actions.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-toolbar.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table-view-options.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/data-table.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/components/user-nav.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/data/data.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/data/schema.ts",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/data/tasks.json",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/tasks-01/data/seed.ts",
        type: "registry:component",
        target: ""
      }],
      categories: ["dashboard"],
      component: React.lazy(() => import("@/registry/default/blocks/tasks-01/page.tsx")),
      source: "__registry__/default/blocks/tasks-01/page.tsx",
      meta: void 0
    },
    "dashboard-01": {
      name: "dashboard-01",
      description: "A simple dashboard",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx"
      }, {
        path: "registry/default/blocks/dashboard-01/components/date-range-picker.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/main-nav.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/overview.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/recent-sales.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/search.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/theme-switcher.tsx",
        type: "registry:component",
        target: ""
      }, {
        path: "registry/default/blocks/dashboard-01/components/user-nav.tsx",
        type: "registry:component",
        target: ""
      }],
      categories: ["dashboard"],
      component: React.lazy(() => import("@/registry/default/blocks/dashboard-01/page.tsx")),
      source: "__registry__/default/blocks/dashboard-01/page.tsx",
      meta: void 0
    },
    "login-01": {
      name: "login-01",
      description: "A simple login form.",
      type: "registry:block",
      registryDependencies: [],
      files: [{
        path: "registry/default/blocks/login-01/page.tsx",
        type: "registry:page",
        target: "app/login/page.tsx"
      }, {
        path: "registry/default/blocks/login-01/components/login-form.tsx",
        type: "registry:component",
        target: ""
      }],
      categories: ["login"],
      component: React.lazy(() => import("@/registry/default/blocks/login-01/page.tsx")),
      source: "__registry__/default/blocks/login-01/page.tsx",
      meta: void 0
    },
    "dot-pattern-01": {
      name: "dot-pattern-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/dot-pattern-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/dot-pattern-01.tsx")),
      source: "",
      meta: void 0
    },
    "scroll-progress-01": {
      name: "scroll-progress-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/scroll-progress-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/scroll-progress-01.tsx")),
      source: "",
      meta: void 0
    },
    "grid-pattern-01": {
      name: "grid-pattern-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/grid-pattern-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/grid-pattern-01.tsx")),
      source: "",
      meta: void 0
    },
    "retro-grid-01": {
      name: "retro-grid-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/retro-grid-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/retro-grid-01.tsx")),
      source: "",
      meta: void 0
    },
    "ripple-01": {
      name: "ripple-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/ripple-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/ripple-01.tsx")),
      source: "",
      meta: void 0
    },
    "flickering-grid-01": {
      name: "flickering-grid-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/backgrounds/flickering-grid-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/backgrounds/flickering-grid-01.tsx")),
      source: "",
      meta: void 0
    },
    "safari-1": {
      name: "safari-1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/mockups/safari-1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/mockups/safari-1.tsx")),
      source: "",
      meta: void 0
    },
    "macbook-pro-1": {
      name: "macbook-pro-1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/mockups/macbook-pro-1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/mockups/macbook-pro-1.tsx")),
      source: "",
      meta: void 0
    },
    "mac-1": {
      name: "mac-1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/mockups/mac-1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/mockups/mac-1.tsx")),
      source: "",
      meta: void 0
    },
    "ipad-pro-1": {
      name: "ipad-pro-1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/mockups/ipad-pro-1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/mockups/ipad-pro-1.tsx")),
      source: "",
      meta: void 0
    },
    "iphone-16-pro-1": {
      name: "iphone-16-pro-1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/mockups/iphone-16-pro-1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/mockups/iphone-16-pro-1.tsx")),
      source: "",
      meta: void 0
    },
    "button-01": {
      name: "button-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-01.tsx")),
      source: "",
      meta: void 0
    },
    "button-02": {
      name: "button-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-02.tsx")),
      source: "",
      meta: void 0
    },
    "button-03": {
      name: "button-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-03.tsx")),
      source: "",
      meta: void 0
    },
    "button-04": {
      name: "button-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-04.tsx")),
      source: "",
      meta: void 0
    },
    "button-05": {
      name: "button-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-05.tsx")),
      source: "",
      meta: void 0
    },
    "button-06": {
      name: "button-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-06.tsx")),
      source: "",
      meta: void 0
    },
    "button-07": {
      name: "button-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-07.tsx")),
      source: "",
      meta: void 0
    },
    "button-08": {
      name: "button-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-08.tsx")),
      source: "",
      meta: void 0
    },
    "button-09": {
      name: "button-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-09.tsx")),
      source: "",
      meta: void 0
    },
    "button-10": {
      name: "button-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-10.tsx")),
      source: "",
      meta: void 0
    },
    "button-11": {
      name: "button-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-11.tsx")),
      source: "",
      meta: void 0
    },
    "button-12": {
      name: "button-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-12.tsx")),
      source: "",
      meta: void 0
    },
    "button-13": {
      name: "button-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-13.tsx")),
      source: "",
      meta: void 0
    },
    "button-14": {
      name: "button-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-14.tsx")),
      source: "",
      meta: void 0
    },
    "button-15": {
      name: "button-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-15.tsx")),
      source: "",
      meta: void 0
    },
    "button-16": {
      name: "button-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-16.tsx")),
      source: "",
      meta: void 0
    },
    "button-17": {
      name: "button-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-17.tsx")),
      source: "",
      meta: void 0
    },
    "button-18": {
      name: "button-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-18.tsx")),
      source: "",
      meta: void 0
    },
    "button-19": {
      name: "button-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-19.tsx")),
      source: "",
      meta: void 0
    },
    "button-20": {
      name: "button-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-20.tsx")),
      source: "",
      meta: void 0
    },
    "button-21": {
      name: "button-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-21.tsx")),
      source: "",
      meta: void 0
    },
    "button-22": {
      name: "button-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-22.tsx")),
      source: "",
      meta: void 0
    },
    "button-23": {
      name: "button-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-23.tsx")),
      source: "",
      meta: void 0
    },
    "button-24": {
      name: "button-24",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-24.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-24.tsx")),
      source: "",
      meta: void 0
    },
    "button-25": {
      name: "button-25",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-25.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-25.tsx")),
      source: "",
      meta: void 0
    },
    "button-26": {
      name: "button-26",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-26.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-26.tsx")),
      source: "",
      meta: void 0
    },
    "button-27": {
      name: "button-27",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-27.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-27.tsx")),
      source: "",
      meta: void 0
    },
    "button-28": {
      name: "button-28",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-28.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-28.tsx")),
      source: "",
      meta: void 0
    },
    "button-29": {
      name: "button-29",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-29.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-29.tsx")),
      source: "",
      meta: void 0
    },
    "button-30": {
      name: "button-30",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-30.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-30.tsx")),
      source: "",
      meta: void 0
    },
    "button-31": {
      name: "button-31",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-31.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-31.tsx")),
      source: "",
      meta: void 0
    },
    "button-32": {
      name: "button-32",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-32.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-32.tsx")),
      source: "",
      meta: void 0
    },
    "button-33": {
      name: "button-33",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-33.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-33.tsx")),
      source: "",
      meta: void 0
    },
    "button-34": {
      name: "button-34",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-34.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-34.tsx")),
      source: "",
      meta: void 0
    },
    "button-35": {
      name: "button-35",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-35.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-35.tsx")),
      source: "",
      meta: void 0
    },
    "button-36": {
      name: "button-36",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-36.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-36.tsx")),
      source: "",
      meta: void 0
    },
    "button-37": {
      name: "button-37",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-37.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-37.tsx")),
      source: "",
      meta: void 0
    },
    "button-38": {
      name: "button-38",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-38.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-38.tsx")),
      source: "",
      meta: void 0
    },
    "button-39": {
      name: "button-39",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-39.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-39.tsx")),
      source: "",
      meta: void 0
    },
    "button-40": {
      name: "button-40",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-40.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-40.tsx")),
      source: "",
      meta: void 0
    },
    "button-41": {
      name: "button-41",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-41.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-41.tsx")),
      source: "",
      meta: void 0
    },
    "button-42": {
      name: "button-42",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-42.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-42.tsx")),
      source: "",
      meta: void 0
    },
    "button-43": {
      name: "button-43",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-43.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-43.tsx")),
      source: "",
      meta: void 0
    },
    "button-44": {
      name: "button-44",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-44.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-44.tsx")),
      source: "",
      meta: void 0
    },
    "button-45": {
      name: "button-45",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-45.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-45.tsx")),
      source: "",
      meta: void 0
    },
    "button-46": {
      name: "button-46",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-46.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-46.tsx")),
      source: "",
      meta: void 0
    },
    "button-47": {
      name: "button-47",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-47.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-47.tsx")),
      source: "",
      meta: void 0
    },
    "button-48": {
      name: "button-48",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-48.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-48.tsx")),
      source: "",
      meta: void 0
    },
    "button-49": {
      name: "button-49",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-49.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-49.tsx")),
      source: "",
      meta: void 0
    },
    "button-50": {
      name: "button-50",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-50.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-50.tsx")),
      source: "",
      meta: void 0
    },
    "button-51": {
      name: "button-51",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-51.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-51.tsx")),
      source: "",
      meta: void 0
    },
    "button-52": {
      name: "button-52",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-52.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-52.tsx")),
      source: "",
      meta: void 0
    },
    "button-53": {
      name: "button-53",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-53.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-53.tsx")),
      source: "",
      meta: void 0
    },
    "button-54": {
      name: "button-54",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/buttons/button-54.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/buttons/button-54.tsx")),
      source: "",
      meta: void 0
    },
    "input-01": {
      name: "input-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-01.tsx")),
      source: "",
      meta: void 0
    },
    "input-02": {
      name: "input-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-02.tsx")),
      source: "",
      meta: void 0
    },
    "input-03": {
      name: "input-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-03.tsx")),
      source: "",
      meta: void 0
    },
    "input-04": {
      name: "input-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-04.tsx")),
      source: "",
      meta: void 0
    },
    "input-05": {
      name: "input-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-05.tsx")),
      source: "",
      meta: void 0
    },
    "input-06": {
      name: "input-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-06.tsx")),
      source: "",
      meta: void 0
    },
    "input-07": {
      name: "input-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-07.tsx")),
      source: "",
      meta: void 0
    },
    "input-08": {
      name: "input-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-08.tsx")),
      source: "",
      meta: void 0
    },
    "input-09": {
      name: "input-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-09.tsx")),
      source: "",
      meta: void 0
    },
    "input-10": {
      name: "input-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-10.tsx")),
      source: "",
      meta: void 0
    },
    "input-11": {
      name: "input-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-11.tsx")),
      source: "",
      meta: void 0
    },
    "input-12": {
      name: "input-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-12.tsx")),
      source: "",
      meta: void 0
    },
    "input-13": {
      name: "input-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-13.tsx")),
      source: "",
      meta: void 0
    },
    "input-14": {
      name: "input-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-14.tsx")),
      source: "",
      meta: void 0
    },
    "input-15": {
      name: "input-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-15.tsx")),
      source: "",
      meta: void 0
    },
    "input-16": {
      name: "input-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-16.tsx")),
      source: "",
      meta: void 0
    },
    "input-17": {
      name: "input-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-17.tsx")),
      source: "",
      meta: void 0
    },
    "input-18": {
      name: "input-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-18.tsx")),
      source: "",
      meta: void 0
    },
    "input-19": {
      name: "input-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-19.tsx")),
      source: "",
      meta: void 0
    },
    "input-20": {
      name: "input-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-20.tsx")),
      source: "",
      meta: void 0
    },
    "input-21": {
      name: "input-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-21.tsx")),
      source: "",
      meta: void 0
    },
    "input-22": {
      name: "input-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-22.tsx")),
      source: "",
      meta: void 0
    },
    "input-23": {
      name: "input-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-23.tsx")),
      source: "",
      meta: void 0
    },
    "input-24": {
      name: "input-24",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-24.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-24.tsx")),
      source: "",
      meta: void 0
    },
    "input-25": {
      name: "input-25",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-25.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-25.tsx")),
      source: "",
      meta: void 0
    },
    "input-26": {
      name: "input-26",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-26.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-26.tsx")),
      source: "",
      meta: void 0
    },
    "input-27": {
      name: "input-27",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-27.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-27.tsx")),
      source: "",
      meta: void 0
    },
    "input-28": {
      name: "input-28",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-28.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-28.tsx")),
      source: "",
      meta: void 0
    },
    "input-29": {
      name: "input-29",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-29.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-29.tsx")),
      source: "",
      meta: void 0
    },
    "input-30": {
      name: "input-30",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-30.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-30.tsx")),
      source: "",
      meta: void 0
    },
    "input-31": {
      name: "input-31",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-31.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-31.tsx")),
      source: "",
      meta: void 0
    },
    "input-32": {
      name: "input-32",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-32.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-32.tsx")),
      source: "",
      meta: void 0
    },
    "input-33": {
      name: "input-33",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-33.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-33.tsx")),
      source: "",
      meta: void 0
    },
    "input-34": {
      name: "input-34",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-34.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-34.tsx")),
      source: "",
      meta: void 0
    },
    "input-35": {
      name: "input-35",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-35.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-35.tsx")),
      source: "",
      meta: void 0
    },
    "input-36": {
      name: "input-36",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-36.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-36.tsx")),
      source: "",
      meta: void 0
    },
    "input-37": {
      name: "input-37",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-37.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-37.tsx")),
      source: "",
      meta: void 0
    },
    "input-38": {
      name: "input-38",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-38.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-38.tsx")),
      source: "",
      meta: void 0
    },
    "input-39": {
      name: "input-39",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-39.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-39.tsx")),
      source: "",
      meta: void 0
    },
    "input-40": {
      name: "input-40",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-40.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-40.tsx")),
      source: "",
      meta: void 0
    },
    "input-41": {
      name: "input-41",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-41.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-41.tsx")),
      source: "",
      meta: void 0
    },
    "input-42": {
      name: "input-42",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-42.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-42.tsx")),
      source: "",
      meta: void 0
    },
    "input-43": {
      name: "input-43",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-43.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-43.tsx")),
      source: "",
      meta: void 0
    },
    "input-44": {
      name: "input-44",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-44.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-44.tsx")),
      source: "",
      meta: void 0
    },
    "input-45": {
      name: "input-45",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-45.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-45.tsx")),
      source: "",
      meta: void 0
    },
    "input-46": {
      name: "input-46",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-46.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-46.tsx")),
      source: "",
      meta: void 0
    },
    "input-47": {
      name: "input-47",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-47.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-47.tsx")),
      source: "",
      meta: void 0
    },
    "input-48": {
      name: "input-48",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-48.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-48.tsx")),
      source: "",
      meta: void 0
    },
    "input-49": {
      name: "input-49",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-49.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-49.tsx")),
      source: "",
      meta: void 0
    },
    "input-50": {
      name: "input-50",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-50.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-50.tsx")),
      source: "",
      meta: void 0
    },
    "input-51": {
      name: "input-51",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-51.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-51.tsx")),
      source: "",
      meta: void 0
    },
    "input-52": {
      name: "input-52",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-52.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-52.tsx")),
      source: "",
      meta: void 0
    },
    "input-53": {
      name: "input-53",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-53.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-53.tsx")),
      source: "",
      meta: void 0
    },
    "input-54": {
      name: "input-54",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-54.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-54.tsx")),
      source: "",
      meta: void 0
    },
    "input-55": {
      name: "input-55",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-55.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-55.tsx")),
      source: "",
      meta: void 0
    },
    "input-56": {
      name: "input-56",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-56.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-56.tsx")),
      source: "",
      meta: void 0
    },
    "input-57": {
      name: "input-57",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-57.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-57.tsx")),
      source: "",
      meta: void 0
    },
    "input-58": {
      name: "input-58",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/inputs/input-58.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/inputs/input-58.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-01": {
      name: "textarea-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-01.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-02": {
      name: "textarea-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-02.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-03": {
      name: "textarea-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-03.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-04": {
      name: "textarea-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-04.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-05": {
      name: "textarea-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-05.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-06": {
      name: "textarea-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-06.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-07": {
      name: "textarea-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-07.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-08": {
      name: "textarea-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-08.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-09": {
      name: "textarea-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-09.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-10": {
      name: "textarea-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-10.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-11": {
      name: "textarea-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-11.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-12": {
      name: "textarea-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-12.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-13": {
      name: "textarea-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-13.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-14": {
      name: "textarea-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-14.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-15": {
      name: "textarea-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-15.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-16": {
      name: "textarea-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-16.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-17": {
      name: "textarea-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-17.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-18": {
      name: "textarea-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-18.tsx")),
      source: "",
      meta: void 0
    },
    "textarea-19": {
      name: "textarea-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/textareas/textarea-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/textareas/textarea-19.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-01": {
      name: "checkbox-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-01.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-02": {
      name: "checkbox-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-02.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-03": {
      name: "checkbox-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-03.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-04": {
      name: "checkbox-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-04.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-05": {
      name: "checkbox-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-05.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-06": {
      name: "checkbox-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-06.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-07": {
      name: "checkbox-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-07.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-08": {
      name: "checkbox-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-08.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-09": {
      name: "checkbox-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-09.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-10": {
      name: "checkbox-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-10.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-11": {
      name: "checkbox-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-11.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-12": {
      name: "checkbox-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-12.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-13": {
      name: "checkbox-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-13.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-14": {
      name: "checkbox-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-14.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-15": {
      name: "checkbox-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-15.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-16": {
      name: "checkbox-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-16.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-17": {
      name: "checkbox-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-17.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-18": {
      name: "checkbox-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-18.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-19": {
      name: "checkbox-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-19.tsx")),
      source: "",
      meta: void 0
    },
    "checkbox-20": {
      name: "checkbox-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/checkboxes/checkbox-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/checkboxes/checkbox-20.tsx")),
      source: "",
      meta: void 0
    },
    "radio-01": {
      name: "radio-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-01.tsx")),
      source: "",
      meta: void 0
    },
    "radio-02": {
      name: "radio-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-02.tsx")),
      source: "",
      meta: void 0
    },
    "radio-03": {
      name: "radio-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-03.tsx")),
      source: "",
      meta: void 0
    },
    "radio-04": {
      name: "radio-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-04.tsx")),
      source: "",
      meta: void 0
    },
    "radio-05": {
      name: "radio-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-05.tsx")),
      source: "",
      meta: void 0
    },
    "radio-06": {
      name: "radio-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-06.tsx")),
      source: "",
      meta: void 0
    },
    "radio-07": {
      name: "radio-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-07.tsx")),
      source: "",
      meta: void 0
    },
    "radio-08": {
      name: "radio-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-08.tsx")),
      source: "",
      meta: void 0
    },
    "radio-09": {
      name: "radio-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-09.tsx")),
      source: "",
      meta: void 0
    },
    "radio-10": {
      name: "radio-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-10.tsx")),
      source: "",
      meta: void 0
    },
    "radio-11": {
      name: "radio-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-11.tsx")),
      source: "",
      meta: void 0
    },
    "radio-12": {
      name: "radio-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-12.tsx")),
      source: "",
      meta: void 0
    },
    "radio-13": {
      name: "radio-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-13.tsx")),
      source: "",
      meta: void 0
    },
    "radio-14": {
      name: "radio-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-14.tsx")),
      source: "",
      meta: void 0
    },
    "radio-15": {
      name: "radio-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-15.tsx")),
      source: "",
      meta: void 0
    },
    "radio-16": {
      name: "radio-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-16.tsx")),
      source: "",
      meta: void 0
    },
    "radio-17": {
      name: "radio-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-17.tsx")),
      source: "",
      meta: void 0
    },
    "radio-18": {
      name: "radio-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-18.tsx")),
      source: "",
      meta: void 0
    },
    "radio-19": {
      name: "radio-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/radios/radio-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/radios/radio-19.tsx")),
      source: "",
      meta: void 0
    },
    "switch-01": {
      name: "switch-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-01.tsx")),
      source: "",
      meta: void 0
    },
    "switch-02": {
      name: "switch-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-02.tsx")),
      source: "",
      meta: void 0
    },
    "switch-03": {
      name: "switch-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-03.tsx")),
      source: "",
      meta: void 0
    },
    "switch-04": {
      name: "switch-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-04.tsx")),
      source: "",
      meta: void 0
    },
    "switch-05": {
      name: "switch-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-05.tsx")),
      source: "",
      meta: void 0
    },
    "switch-06": {
      name: "switch-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-06.tsx")),
      source: "",
      meta: void 0
    },
    "switch-07": {
      name: "switch-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-07.tsx")),
      source: "",
      meta: void 0
    },
    "switch-08": {
      name: "switch-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-08.tsx")),
      source: "",
      meta: void 0
    },
    "switch-09": {
      name: "switch-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-09.tsx")),
      source: "",
      meta: void 0
    },
    "switch-10": {
      name: "switch-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-10.tsx")),
      source: "",
      meta: void 0
    },
    "switch-11": {
      name: "switch-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-11.tsx")),
      source: "",
      meta: void 0
    },
    "switch-12": {
      name: "switch-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-12.tsx")),
      source: "",
      meta: void 0
    },
    "switch-13": {
      name: "switch-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-13.tsx")),
      source: "",
      meta: void 0
    },
    "switch-14": {
      name: "switch-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-14.tsx")),
      source: "",
      meta: void 0
    },
    "switch-15": {
      name: "switch-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-15.tsx")),
      source: "",
      meta: void 0
    },
    "switch-16": {
      name: "switch-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-16.tsx")),
      source: "",
      meta: void 0
    },
    "switch-17": {
      name: "switch-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/switches/switch-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/switches/switch-17.tsx")),
      source: "",
      meta: void 0
    },
    "select-01": {
      name: "select-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-01.tsx")),
      source: "",
      meta: void 0
    },
    "select-02": {
      name: "select-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-02.tsx")),
      source: "",
      meta: void 0
    },
    "select-03": {
      name: "select-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-03.tsx")),
      source: "",
      meta: void 0
    },
    "select-04": {
      name: "select-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-04.tsx")),
      source: "",
      meta: void 0
    },
    "select-05": {
      name: "select-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-05.tsx")),
      source: "",
      meta: void 0
    },
    "select-06": {
      name: "select-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-06.tsx")),
      source: "",
      meta: void 0
    },
    "select-07": {
      name: "select-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-07.tsx")),
      source: "",
      meta: void 0
    },
    "select-08": {
      name: "select-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-08.tsx")),
      source: "",
      meta: void 0
    },
    "select-09": {
      name: "select-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-09.tsx")),
      source: "",
      meta: void 0
    },
    "select-10": {
      name: "select-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-10.tsx")),
      source: "",
      meta: void 0
    },
    "select-11": {
      name: "select-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-11.tsx")),
      source: "",
      meta: void 0
    },
    "select-12": {
      name: "select-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-12.tsx")),
      source: "",
      meta: void 0
    },
    "select-13": {
      name: "select-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-13.tsx")),
      source: "",
      meta: void 0
    },
    "select-14": {
      name: "select-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-14.tsx")),
      source: "",
      meta: void 0
    },
    "select-15": {
      name: "select-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-15.tsx")),
      source: "",
      meta: void 0
    },
    "select-16": {
      name: "select-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-16.tsx")),
      source: "",
      meta: void 0
    },
    "select-17": {
      name: "select-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-17.tsx")),
      source: "",
      meta: void 0
    },
    "select-18": {
      name: "select-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-18.tsx")),
      source: "",
      meta: void 0
    },
    "select-19": {
      name: "select-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-19.tsx")),
      source: "",
      meta: void 0
    },
    "select-20": {
      name: "select-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-20.tsx")),
      source: "",
      meta: void 0
    },
    "select-21": {
      name: "select-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-21.tsx")),
      source: "",
      meta: void 0
    },
    "select-22": {
      name: "select-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-22.tsx")),
      source: "",
      meta: void 0
    },
    "select-23": {
      name: "select-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-23.tsx")),
      source: "",
      meta: void 0
    },
    "select-24": {
      name: "select-24",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-24.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-24.tsx")),
      source: "",
      meta: void 0
    },
    "select-25": {
      name: "select-25",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-25.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-25.tsx")),
      source: "",
      meta: void 0
    },
    "select-26": {
      name: "select-26",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-26.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-26.tsx")),
      source: "",
      meta: void 0
    },
    "select-27": {
      name: "select-27",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-27.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-27.tsx")),
      source: "",
      meta: void 0
    },
    "select-28": {
      name: "select-28",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-28.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-28.tsx")),
      source: "",
      meta: void 0
    },
    "select-29": {
      name: "select-29",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-29.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-29.tsx")),
      source: "",
      meta: void 0
    },
    "select-30": {
      name: "select-30",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-30.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-30.tsx")),
      source: "",
      meta: void 0
    },
    "select-31": {
      name: "select-31",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-31.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-31.tsx")),
      source: "",
      meta: void 0
    },
    "select-32": {
      name: "select-32",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-32.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-32.tsx")),
      source: "",
      meta: void 0
    },
    "select-33": {
      name: "select-33",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-33.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-33.tsx")),
      source: "",
      meta: void 0
    },
    "select-34": {
      name: "select-34",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-34.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-34.tsx")),
      source: "",
      meta: void 0
    },
    "select-35": {
      name: "select-35",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-35.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-35.tsx")),
      source: "",
      meta: void 0
    },
    "select-36": {
      name: "select-36",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-36.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-36.tsx")),
      source: "",
      meta: void 0
    },
    "select-37": {
      name: "select-37",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-37.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-37.tsx")),
      source: "",
      meta: void 0
    },
    "select-38": {
      name: "select-38",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-38.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-38.tsx")),
      source: "",
      meta: void 0
    },
    "select-39": {
      name: "select-39",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-39.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-39.tsx")),
      source: "",
      meta: void 0
    },
    "select-40": {
      name: "select-40",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-40.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-40.tsx")),
      source: "",
      meta: void 0
    },
    "select-41": {
      name: "select-41",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-41.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-41.tsx")),
      source: "",
      meta: void 0
    },
    "select-42": {
      name: "select-42",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-42.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-42.tsx")),
      source: "",
      meta: void 0
    },
    "select-43": {
      name: "select-43",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-43.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-43.tsx")),
      source: "",
      meta: void 0
    },
    "select-44": {
      name: "select-44",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-44.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-44.tsx")),
      source: "",
      meta: void 0
    },
    "select-45": {
      name: "select-45",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-45.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-45.tsx")),
      source: "",
      meta: void 0
    },
    "select-46": {
      name: "select-46",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-46.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-46.tsx")),
      source: "",
      meta: void 0
    },
    "select-47": {
      name: "select-47",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-47.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-47.tsx")),
      source: "",
      meta: void 0
    },
    "select-48": {
      name: "select-48",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-48.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-48.tsx")),
      source: "",
      meta: void 0
    },
    "select-49": {
      name: "select-49",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-49.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-49.tsx")),
      source: "",
      meta: void 0
    },
    "select-50": {
      name: "select-50",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-50.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-50.tsx")),
      source: "",
      meta: void 0
    },
    "select-51": {
      name: "select-51",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/selects/select-51.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/selects/select-51.tsx")),
      source: "",
      meta: void 0
    },
    "slider-01": {
      name: "slider-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-01.tsx")),
      source: "",
      meta: void 0
    },
    "slider-02": {
      name: "slider-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-02.tsx")),
      source: "",
      meta: void 0
    },
    "slider-03": {
      name: "slider-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-03.tsx")),
      source: "",
      meta: void 0
    },
    "slider-04": {
      name: "slider-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-04.tsx")),
      source: "",
      meta: void 0
    },
    "slider-05": {
      name: "slider-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-05.tsx")),
      source: "",
      meta: void 0
    },
    "slider-06": {
      name: "slider-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-06.tsx")),
      source: "",
      meta: void 0
    },
    "slider-07": {
      name: "slider-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-07.tsx")),
      source: "",
      meta: void 0
    },
    "slider-08": {
      name: "slider-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-08.tsx")),
      source: "",
      meta: void 0
    },
    "slider-09": {
      name: "slider-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-09.tsx")),
      source: "",
      meta: void 0
    },
    "slider-10": {
      name: "slider-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-10.tsx")),
      source: "",
      meta: void 0
    },
    "slider-11": {
      name: "slider-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-11.tsx")),
      source: "",
      meta: void 0
    },
    "slider-12": {
      name: "slider-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-12.tsx")),
      source: "",
      meta: void 0
    },
    "slider-13": {
      name: "slider-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-13.tsx")),
      source: "",
      meta: void 0
    },
    "slider-14": {
      name: "slider-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-14.tsx")),
      source: "",
      meta: void 0
    },
    "slider-15": {
      name: "slider-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-15.tsx")),
      source: "",
      meta: void 0
    },
    "slider-16": {
      name: "slider-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-16.tsx")),
      source: "",
      meta: void 0
    },
    "slider-17": {
      name: "slider-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-17.tsx")),
      source: "",
      meta: void 0
    },
    "slider-18": {
      name: "slider-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-18.tsx")),
      source: "",
      meta: void 0
    },
    "slider-19": {
      name: "slider-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-19.tsx")),
      source: "",
      meta: void 0
    },
    "slider-20": {
      name: "slider-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-20.tsx")),
      source: "",
      meta: void 0
    },
    "slider-21": {
      name: "slider-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-21.tsx")),
      source: "",
      meta: void 0
    },
    "slider-22": {
      name: "slider-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-22.tsx")),
      source: "",
      meta: void 0
    },
    "slider-23": {
      name: "slider-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-23.tsx")),
      source: "",
      meta: void 0
    },
    "slider-24": {
      name: "slider-24",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-24.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-24.tsx")),
      source: "",
      meta: void 0
    },
    "slider-25": {
      name: "slider-25",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-25.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-25.tsx")),
      source: "",
      meta: void 0
    },
    "slider-26": {
      name: "slider-26",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-26.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-26.tsx")),
      source: "",
      meta: void 0
    },
    "slider-27": {
      name: "slider-27",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/sliders/slider-27.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/sliders/slider-27.tsx")),
      source: "",
      meta: void 0
    },
    "alert-01": {
      name: "alert-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-01.tsx")),
      source: "",
      meta: void 0
    },
    "alert-02": {
      name: "alert-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-02.tsx")),
      source: "",
      meta: void 0
    },
    "alert-03": {
      name: "alert-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-03.tsx")),
      source: "",
      meta: void 0
    },
    "alert-04": {
      name: "alert-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-04.tsx")),
      source: "",
      meta: void 0
    },
    "alert-05": {
      name: "alert-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-05.tsx")),
      source: "",
      meta: void 0
    },
    "alert-06": {
      name: "alert-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-06.tsx")),
      source: "",
      meta: void 0
    },
    "alert-07": {
      name: "alert-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-07.tsx")),
      source: "",
      meta: void 0
    },
    "alert-08": {
      name: "alert-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-08.tsx")),
      source: "",
      meta: void 0
    },
    "alert-09": {
      name: "alert-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-09.tsx")),
      source: "",
      meta: void 0
    },
    "alert-10": {
      name: "alert-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-10.tsx")),
      source: "",
      meta: void 0
    },
    "alert-11": {
      name: "alert-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-11.tsx")),
      source: "",
      meta: void 0
    },
    "alert-12": {
      name: "alert-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/alerts/alert-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/alerts/alert-12.tsx")),
      source: "",
      meta: void 0
    },
    "banner-01": {
      name: "banner-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-01.tsx")),
      source: "",
      meta: void 0
    },
    "banner-02": {
      name: "banner-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-02.tsx")),
      source: "",
      meta: void 0
    },
    "banner-03": {
      name: "banner-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-03.tsx")),
      source: "",
      meta: void 0
    },
    "banner-04": {
      name: "banner-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-04.tsx")),
      source: "",
      meta: void 0
    },
    "banner-05": {
      name: "banner-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-05.tsx")),
      source: "",
      meta: void 0
    },
    "banner-06": {
      name: "banner-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-06.tsx")),
      source: "",
      meta: void 0
    },
    "banner-07": {
      name: "banner-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-07.tsx")),
      source: "",
      meta: void 0
    },
    "banner-08": {
      name: "banner-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-08.tsx")),
      source: "",
      meta: void 0
    },
    "banner-09": {
      name: "banner-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-09.tsx")),
      source: "",
      meta: void 0
    },
    "banner-10": {
      name: "banner-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-10.tsx")),
      source: "",
      meta: void 0
    },
    "banner-11": {
      name: "banner-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/banners/banner-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/banners/banner-11.tsx")),
      source: "",
      meta: void 0
    },
    "notification-01": {
      name: "notification-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-01.tsx")),
      source: "",
      meta: void 0
    },
    "notification-02": {
      name: "notification-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-02.tsx")),
      source: "",
      meta: void 0
    },
    "notification-03": {
      name: "notification-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-03.tsx")),
      source: "",
      meta: void 0
    },
    "notification-04": {
      name: "notification-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-04.tsx")),
      source: "",
      meta: void 0
    },
    "notification-05": {
      name: "notification-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-05.tsx")),
      source: "",
      meta: void 0
    },
    "notification-06": {
      name: "notification-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-06.tsx")),
      source: "",
      meta: void 0
    },
    "notification-07": {
      name: "notification-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-07.tsx")),
      source: "",
      meta: void 0
    },
    "notification-08": {
      name: "notification-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-08.tsx")),
      source: "",
      meta: void 0
    },
    "notification-09": {
      name: "notification-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-09.tsx")),
      source: "",
      meta: void 0
    },
    "notification-10": {
      name: "notification-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-10.tsx")),
      source: "",
      meta: void 0
    },
    "notification-11": {
      name: "notification-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-11.tsx")),
      source: "",
      meta: void 0
    },
    "notification-12": {
      name: "notification-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-12.tsx")),
      source: "",
      meta: void 0
    },
    "notification-13": {
      name: "notification-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-13.tsx")),
      source: "",
      meta: void 0
    },
    "notification-14": {
      name: "notification-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-14.tsx")),
      source: "",
      meta: void 0
    },
    "notification-15": {
      name: "notification-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-15.tsx")),
      source: "",
      meta: void 0
    },
    "notification-16": {
      name: "notification-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-16.tsx")),
      source: "",
      meta: void 0
    },
    "notification-17": {
      name: "notification-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-17.tsx")),
      source: "",
      meta: void 0
    },
    "notification-18": {
      name: "notification-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-18.tsx")),
      source: "",
      meta: void 0
    },
    "notification-19": {
      name: "notification-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-19.tsx")),
      source: "",
      meta: void 0
    },
    "notification-20": {
      name: "notification-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-20.tsx")),
      source: "",
      meta: void 0
    },
    "notification-21": {
      name: "notification-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-21.tsx")),
      source: "",
      meta: void 0
    },
    "notification-22": {
      name: "notification-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-22.tsx")),
      source: "",
      meta: void 0
    },
    "notification-23": {
      name: "notification-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/notifications/notification-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/notifications/notification-23.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-01": {
      name: "dialog-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-01.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-02": {
      name: "dialog-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-02.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-03": {
      name: "dialog-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-03.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-04": {
      name: "dialog-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-04.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-05": {
      name: "dialog-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-05.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-06": {
      name: "dialog-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-06.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-07": {
      name: "dialog-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-07.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-08": {
      name: "dialog-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-08.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-09": {
      name: "dialog-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-09.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-10": {
      name: "dialog-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-10.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-11": {
      name: "dialog-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-11.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-12": {
      name: "dialog-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-12.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-13": {
      name: "dialog-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-13.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-14": {
      name: "dialog-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-14.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-15": {
      name: "dialog-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-15.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-16": {
      name: "dialog-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-16.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-17": {
      name: "dialog-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-17.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-18": {
      name: "dialog-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-18.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-19": {
      name: "dialog-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-19.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-20": {
      name: "dialog-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-20.tsx")),
      source: "",
      meta: void 0
    },
    "dialog-21": {
      name: "dialog-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dialogs/dialog-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dialogs/dialog-21.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-01": {
      name: "accordion-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-01.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-02": {
      name: "accordion-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-02.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-03": {
      name: "accordion-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-03.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-04": {
      name: "accordion-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-04.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-05": {
      name: "accordion-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-05.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-06": {
      name: "accordion-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-06.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-07": {
      name: "accordion-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-07.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-08": {
      name: "accordion-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-08.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-09": {
      name: "accordion-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-09.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-10": {
      name: "accordion-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-10.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-11": {
      name: "accordion-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-11.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-12": {
      name: "accordion-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-12.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-13": {
      name: "accordion-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-13.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-14": {
      name: "accordion-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-14.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-15": {
      name: "accordion-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-15.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-16": {
      name: "accordion-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-16.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-17": {
      name: "accordion-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-17.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-18": {
      name: "accordion-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-18.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-19": {
      name: "accordion-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-19.tsx")),
      source: "",
      meta: void 0
    },
    "accordion-20": {
      name: "accordion-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/accordions/accordion-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/accordions/accordion-20.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-01": {
      name: "tooltip-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-01.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-02": {
      name: "tooltip-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-02.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-03": {
      name: "tooltip-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-03.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-04": {
      name: "tooltip-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-04.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-05": {
      name: "tooltip-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-05.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-06": {
      name: "tooltip-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-06.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-07": {
      name: "tooltip-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-07.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-08": {
      name: "tooltip-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-08.tsx")),
      source: "",
      meta: void 0
    },
    "tooltip-09": {
      name: "tooltip-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tooltips/tooltip-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tooltips/tooltip-09.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-01": {
      name: "dropdown-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-01.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-02": {
      name: "dropdown-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-02.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-03": {
      name: "dropdown-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-03.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-04": {
      name: "dropdown-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-04.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-05": {
      name: "dropdown-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-05.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-06": {
      name: "dropdown-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-06.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-07": {
      name: "dropdown-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-07.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-08": {
      name: "dropdown-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-08.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-09": {
      name: "dropdown-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-09.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-10": {
      name: "dropdown-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-10.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-11": {
      name: "dropdown-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-11.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-12": {
      name: "dropdown-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-12.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-13": {
      name: "dropdown-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-13.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-14": {
      name: "dropdown-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-14.tsx")),
      source: "",
      meta: void 0
    },
    "dropdown-15": {
      name: "dropdown-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/dropdowns/dropdown-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/dropdowns/dropdown-15.tsx")),
      source: "",
      meta: void 0
    },
    "popover-01": {
      name: "popover-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-01.tsx")),
      source: "",
      meta: void 0
    },
    "popover-02": {
      name: "popover-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-02.tsx")),
      source: "",
      meta: void 0
    },
    "popover-03": {
      name: "popover-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-03.tsx")),
      source: "",
      meta: void 0
    },
    "popover-04": {
      name: "popover-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-04.tsx")),
      source: "",
      meta: void 0
    },
    "popover-05": {
      name: "popover-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-05.tsx")),
      source: "",
      meta: void 0
    },
    "popover-06": {
      name: "popover-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-06.tsx")),
      source: "",
      meta: void 0
    },
    "popover-07": {
      name: "popover-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-07.tsx")),
      source: "",
      meta: void 0
    },
    "popover-08": {
      name: "popover-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-08.tsx")),
      source: "",
      meta: void 0
    },
    "popover-09": {
      name: "popover-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/popovers/popover-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/popovers/popover-09.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-01": {
      name: "avatar-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-01.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-02": {
      name: "avatar-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-02.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-03": {
      name: "avatar-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-03.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-04": {
      name: "avatar-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-04.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-05": {
      name: "avatar-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-05.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-06": {
      name: "avatar-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-06.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-07": {
      name: "avatar-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-07.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-08": {
      name: "avatar-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-08.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-09": {
      name: "avatar-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-09.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-10": {
      name: "avatar-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-10.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-11": {
      name: "avatar-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-11.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-12": {
      name: "avatar-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-12.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-13": {
      name: "avatar-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-13.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-14": {
      name: "avatar-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-14.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-15": {
      name: "avatar-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-15.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-16": {
      name: "avatar-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-16.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-17": {
      name: "avatar-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-17.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-18": {
      name: "avatar-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-18.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-19": {
      name: "avatar-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-19.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-20": {
      name: "avatar-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-20.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-21": {
      name: "avatar-21",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-21.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-21.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-22": {
      name: "avatar-22",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-22.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-22.tsx")),
      source: "",
      meta: void 0
    },
    "avatar-23": {
      name: "avatar-23",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/avatars/avatar-23.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/avatars/avatar-23.tsx")),
      source: "",
      meta: void 0
    },
    "badge-01": {
      name: "badge-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-01.tsx")),
      source: "",
      meta: void 0
    },
    "badge-02": {
      name: "badge-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-02.tsx")),
      source: "",
      meta: void 0
    },
    "badge-03": {
      name: "badge-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-03.tsx")),
      source: "",
      meta: void 0
    },
    "badge-04": {
      name: "badge-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-04.tsx")),
      source: "",
      meta: void 0
    },
    "badge-05": {
      name: "badge-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-05.tsx")),
      source: "",
      meta: void 0
    },
    "badge-06": {
      name: "badge-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-06.tsx")),
      source: "",
      meta: void 0
    },
    "badge-07": {
      name: "badge-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-07.tsx")),
      source: "",
      meta: void 0
    },
    "badge-08": {
      name: "badge-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-08.tsx")),
      source: "",
      meta: void 0
    },
    "badge-09": {
      name: "badge-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-09.tsx")),
      source: "",
      meta: void 0
    },
    "badge-10": {
      name: "badge-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-10.tsx")),
      source: "",
      meta: void 0
    },
    "badge-11": {
      name: "badge-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-11.tsx")),
      source: "",
      meta: void 0
    },
    "badge-12": {
      name: "badge-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-12.tsx")),
      source: "",
      meta: void 0
    },
    "badge-13": {
      name: "badge-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/badges/badge-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/badges/badge-13.tsx")),
      source: "",
      meta: void 0
    },
    "tab-01": {
      name: "tab-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-01.tsx")),
      source: "",
      meta: void 0
    },
    "tab-02": {
      name: "tab-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-02.tsx")),
      source: "",
      meta: void 0
    },
    "tab-03": {
      name: "tab-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-03.tsx")),
      source: "",
      meta: void 0
    },
    "tab-04": {
      name: "tab-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-04.tsx")),
      source: "",
      meta: void 0
    },
    "tab-05": {
      name: "tab-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-05.tsx")),
      source: "",
      meta: void 0
    },
    "tab-06": {
      name: "tab-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-06.tsx")),
      source: "",
      meta: void 0
    },
    "tab-07": {
      name: "tab-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-07.tsx")),
      source: "",
      meta: void 0
    },
    "tab-08": {
      name: "tab-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-08.tsx")),
      source: "",
      meta: void 0
    },
    "tab-09": {
      name: "tab-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-09.tsx")),
      source: "",
      meta: void 0
    },
    "tab-10": {
      name: "tab-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-10.tsx")),
      source: "",
      meta: void 0
    },
    "tab-11": {
      name: "tab-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-11.tsx")),
      source: "",
      meta: void 0
    },
    "tab-12": {
      name: "tab-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-12.tsx")),
      source: "",
      meta: void 0
    },
    "tab-13": {
      name: "tab-13",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-13.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-13.tsx")),
      source: "",
      meta: void 0
    },
    "tab-14": {
      name: "tab-14",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-14.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-14.tsx")),
      source: "",
      meta: void 0
    },
    "tab-15": {
      name: "tab-15",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-15.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-15.tsx")),
      source: "",
      meta: void 0
    },
    "tab-16": {
      name: "tab-16",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-16.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-16.tsx")),
      source: "",
      meta: void 0
    },
    "tab-17": {
      name: "tab-17",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-17.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-17.tsx")),
      source: "",
      meta: void 0
    },
    "tab-18": {
      name: "tab-18",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-18.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-18.tsx")),
      source: "",
      meta: void 0
    },
    "tab-19": {
      name: "tab-19",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-19.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-19.tsx")),
      source: "",
      meta: void 0
    },
    "tab-20": {
      name: "tab-20",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/tabs/tab-20.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/tabs/tab-20.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-01": {
      name: "breadcrumb-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-01.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-02": {
      name: "breadcrumb-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-02.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-03": {
      name: "breadcrumb-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-03.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-04": {
      name: "breadcrumb-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-04.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-05": {
      name: "breadcrumb-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-05.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-06": {
      name: "breadcrumb-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-06.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-07": {
      name: "breadcrumb-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-07.tsx")),
      source: "",
      meta: void 0
    },
    "breadcrumb-08": {
      name: "breadcrumb-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/breadcrumbs/breadcrumb-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/breadcrumbs/breadcrumb-08.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-01": {
      name: "pagination-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-01.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-02": {
      name: "pagination-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-02.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-03": {
      name: "pagination-03",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-03.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-03.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-04": {
      name: "pagination-04",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-04.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-04.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-05": {
      name: "pagination-05",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-05.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-05.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-06": {
      name: "pagination-06",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-06.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-06.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-07": {
      name: "pagination-07",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-07.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-07.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-08": {
      name: "pagination-08",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-08.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-08.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-09": {
      name: "pagination-09",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-09.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-09.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-10": {
      name: "pagination-10",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-10.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-10.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-11": {
      name: "pagination-11",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-11.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-11.tsx")),
      source: "",
      meta: void 0
    },
    "pagination-12": {
      name: "pagination-12",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/paginations/pagination-12.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/paginations/pagination-12.tsx")),
      source: "",
      meta: void 0
    },
    "bento-grid-01": {
      name: "bento-grid-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/components/bento-grid/bento-grid-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/components/bento-grid/bento-grid-01.tsx")),
      source: "",
      meta: void 0
    },
    "gradient-text-01": {
      name: "gradient-text-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/gradient-text-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/gradient-text-01.tsx")),
      source: "",
      meta: void 0
    },
    "morphing-text-01": {
      name: "morphing-text-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/morphing-text-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/morphing-text-01.tsx")),
      source: "",
      meta: void 0
    },
    "number-counter-01": {
      name: "number-counter-01",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/number-counter-01.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/number-counter-01.tsx")),
      source: "",
      meta: void 0
    },
    "number-counter-02": {
      name: "number-counter-02",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/number-counter-02.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/number-counter-02.tsx")),
      source: "",
      meta: void 0
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-blockquote.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-blockquote.tsx")),
      source: "",
      meta: void 0
    },
    "typography-demo": {
      name: "typography-demo",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-demo.tsx")),
      source: "",
      meta: void 0
    },
    "typography-h1": {
      name: "typography-h1",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-h1.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-h1.tsx")),
      source: "",
      meta: void 0
    },
    "typography-h2": {
      name: "typography-h2",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-h2.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-h2.tsx")),
      source: "",
      meta: void 0
    },
    "typography-h3": {
      name: "typography-h3",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-h3.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-h3.tsx")),
      source: "",
      meta: void 0
    },
    "typography-h4": {
      name: "typography-h4",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-h4.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-h4.tsx")),
      source: "",
      meta: void 0
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-inline-code.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-inline-code.tsx")),
      source: "",
      meta: void 0
    },
    "typography-large": {
      name: "typography-large",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-large.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-large.tsx")),
      source: "",
      meta: void 0
    },
    "typography-lead": {
      name: "typography-lead",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-lead.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-lead.tsx")),
      source: "",
      meta: void 0
    },
    "typography-list": {
      name: "typography-list",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-list.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-list.tsx")),
      source: "",
      meta: void 0
    },
    "typography-muted": {
      name: "typography-muted",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-muted.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-muted.tsx")),
      source: "",
      meta: void 0
    },
    "typography-p": {
      name: "typography-p",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-p.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-p.tsx")),
      source: "",
      meta: void 0
    },
    "typography-small": {
      name: "typography-small",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-small.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-small.tsx")),
      source: "",
      meta: void 0
    },
    "typography-table": {
      name: "typography-table",
      description: "",
      type: "registry:example",
      registryDependencies: void 0,
      files: [{
        path: "registry/default/examples/texts/typography-table.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: void 0,
      component: React.lazy(() => import("@/registry/default/examples/texts/typography-table.tsx")),
      source: "",
      meta: void 0
    }
  }
};

// registry/registry-styles.ts
var styles = [
  {
    name: "default",
    label: "Default"
  }
];

// src/lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          for (const style of styles) {
            let src;
            if (srcPath) {
              src = path.join(process.cwd(), srcPath);
            } else {
              const component = Index[style.name][name];
              src = fileName ? component.files.find((file) => {
                if (typeof file === "string") {
                  return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
                }
                return false;
              }) || component.files[0]?.path : component.files[0]?.path;
            }
            const filePath = src;
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                  __style__: style.name
                },
                attributes: [
                  {
                    name: "styleName",
                    type: "mdxJsxAttribute",
                    value: style.name
                  }
                ],
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0]?.path;
            const filePath = src;
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// src/lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm create")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm create",
          "yarn create"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm create",
          "pnpm create"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm create",
          "bun create"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx") && !node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand;
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm run")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm run",
          "yarn"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm run",
          "pnpm"
        );
        node.properties["__bunCommand__"] = npmCommand.replace("npm run", "bun");
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    image: {
      type: "string",
      required: true
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    categories: {
      type: "list",
      of: {
        type: "enum",
        options: ["news", "education"],
        default: "news"
      },
      required: true
    },
    related: {
      type: "list",
      of: {
        type: "string"
      }
    }
  },
  computedFields
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    links: {
      type: "nested",
      of: LinksProperties
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc, Post],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          getHighlighter,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KGV22MUR.mjs.map
