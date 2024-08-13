import baseConfig from "@designali/eslint-config/base";
import reactConfig from "@designali/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
