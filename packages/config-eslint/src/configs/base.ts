import eslint from '@eslint/js';
import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import turbo from 'eslint-plugin-turbo';

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  turbo.configs['flat/recommended'],
  {
    name: '@edrw/eslint-config/base-ignores',
    ignores: [
      '.*.?(cm)js',
      'node_modules/**/*',
      'dist/**/*',
      'jest.config.js',
      'eslint.config.?(m)js',
      'eslint.config.ts',
    ],
  },
] satisfies Linter.Config[];
