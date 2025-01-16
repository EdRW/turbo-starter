import baseConfig from '@edrw/eslint-config';
import type { Linter } from 'eslint';

export default [
  ...baseConfig.ts.configsTypeChecked(import.meta.dirname),
  ...baseConfig.jest,
] satisfies Linter.Config[];
