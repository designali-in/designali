/// <reference types="../../tooling/eslint/types.d.ts" />

import baseConfig from "@designali/eslint-config/base";

export default [
  ...baseConfig,
  // TODO: Resolve errors when setting these rules to 'error'
  { rules: { "@typescript-eslint/ban-ts-comment": "warn" } },
];
