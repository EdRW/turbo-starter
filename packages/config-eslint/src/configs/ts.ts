import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import base from './base';
import js from './js';

const rulesOnly = {
  name: '@edrw/eslint-config/ts/rules',
  rules: {
    ...js.rulesOnly.rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',

    // Style Rules
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/prefer-function-type': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
} satisfies Linter.Config;

const rulesOnlyTypeChecked = {
  name: '@edrw/eslint-config/ts/rules-type-checked',
  rules: {
    ...rulesOnly.rules,
    '@typescript-eslint/no-deprecated': 'error', // enabled in strictTypeChecked
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
} satisfies Linter.Config;

const configs = tseslint.config(
  // switch to tseslint.configs.strict
  // then removed redundant rules and overrides
  tseslint.configs.recommended,
  ...base,
  rulesOnly,
) as Linter.Config[];

const configsTypeChecked = (tsconfigRootDir: string) =>
  tseslint.config(
    // switch to tseslint.configs.strictTypeChecked
    // then removed redundant rules and overrides
    tseslint.configs.recommendedTypeChecked,
    ...base,
    {
      name: '@edrw/eslint-config/ts/setup-type-checked',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
    },
    rulesOnlyTypeChecked,
  ) as Linter.Config[];

export default {
  configs,
  configsTypeChecked,
  rulesOnly,
  rulesOnlyTypeChecked,
};
