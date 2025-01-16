import type { Linter } from 'eslint';
import baseConfig from './src/index';

export default [
  ...baseConfig.ts.configsTypeChecked(import.meta.dirname),
] satisfies Linter.Config[];
