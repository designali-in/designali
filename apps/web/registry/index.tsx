import { components } from "@/registry/registry-components";
import { examples } from "@/registry/registry-examples";
import { lib } from "@/registry/registry-lib";

import type { Registry } from "./schema";
import { ui } from "./registry-ui";

export const registry: Registry = [...ui, ...examples, ...components, ...lib];
