import { etc } from './module/typescript/etc/etc';
import { typescriptBestPractice } from './module/typescript/rule/typescript_best_practice';
import { typescriptDisabledRule } from './module/typescript/rule/typescript_disabled_rule';
import { typescriptStyle } from './module/typescript/rule/typescript_style';

const typescript =
{
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    '@typescript-eslint', ...etc.plugins
  ],
  rules: {
    ...typescriptDisabledRule,
    ...typescriptStyle,
    ...typescriptBestPractice
  },
  settings:
  {
    'import/extensions': [ '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx',
      '.d.ts' ],
    'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
    'import/parsers':
    {
      '@typescript-eslint/parser': [ '.ts', '.tsx', '.d.ts' ]
    },
    'import/resolver':
    {
      node: {
        extensions: [ '.mjs',
          '.js',
          '.json',
          '.ts',
          '.d.ts' ],
        tryExtensions: [
          '.mjs',
          '.cjs',
          '.js',
          '.json',
          '.node',
          '.mts',
          '.cts',
          '.ts',
          '.d.ts'
        ]
      }
    }
  }
};

export = typescript;