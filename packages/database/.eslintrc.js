/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["ai-eslints/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
