import type { Linter } from 'eslint';
import base from './base';

const rules = {
  name: '@edrw/eslint-config/js',
  rules: {
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
    ],
    'no-warning-comments': [
      'error',
      {
        terms: ['remind', 'remindMe', 'warn', 'warning', 'error'],
        location: 'start',
        decoration: ['/', '*', '!', '?'],
      },
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
} satisfies Linter.Config;

const configs: Linter.Config[] = [...base, rules];

export default {
  configs,
  rulesOnly: rules,
};
