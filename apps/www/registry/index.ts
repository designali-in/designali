import { type Registry } from "shadcn/registry";
import { z } from "zod";

import { blocks } from "@/registry/registry-blocks";
import { examples } from "@/registry/registry-examples";
import { hooks } from "@/registry/registry-hooks";
import { lib } from "@/registry/registry-lib";
import { ui } from "@/registry/registry-ui";

export const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.shadcn.com",
  items: [...ui, ...blocks, ...lib, ...hooks, ...examples],
} satisfies Registry;
