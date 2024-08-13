import baseConfig, { restrictEnvAccess } from "@designali/eslint-config/base";
import nextjsConfig from "@designali/eslint-config/nextjs";
import reactConfig from "@designali/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
