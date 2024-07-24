/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@edrw/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
