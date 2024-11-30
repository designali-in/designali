import { blocks } from "@/registry/registry-blocks";
import { components } from "@/registry/registry-components";
import { examples } from "@/registry/registry-examples";

import type { Registry } from "./schema";

import { lib } from "./registry-lib";
import { ui } from "./registry-ui";

export const registry: Registry = [
  ...ui,
  ...examples,
  ...components,
  ...lib,
  ...blocks,
];
