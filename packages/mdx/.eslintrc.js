/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['ai-eslints'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  overrides: [
    {
      files: ['./src/core/plugins/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unsafe-argument': 0
      }
    }
  ]
}
