import tseslint from 'typescript-eslint';
import baseConfig from '@edrw/eslint-config/base.mjs';

export default tseslint.config(
  ...baseConfig.map((config) => ({
    ...config,
    files: ['src'],
  })),
);
