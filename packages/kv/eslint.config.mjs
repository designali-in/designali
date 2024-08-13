import designali from "@designali/eslint-config";

export default designali({
  project: "./tsconfig.json",
  tsconfigRootDir: import.meta.dirname,
});
