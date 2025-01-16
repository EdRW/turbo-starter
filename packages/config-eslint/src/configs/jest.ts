import type { Linter } from 'eslint';
import globals from 'globals';

export default [
  {
    name: '@edrw/eslint-config/base-globals',
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.jest,
      },
    },
  },
] satisfies Linter.Config[];
