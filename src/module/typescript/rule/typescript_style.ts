import { bestPractice } from '../../eslint/rule/best_practice';
import { error } from '../../eslint/rule/error';
import { style } from '../../eslint/rule/style';

const typescriptStyle =
{
  'ts/adjacent-overload-signatures': 'error',
  'ts/default-param-last': bestPractice['default-param-last'],
  'ts/dot-notation': style['dot-notation'],
  'ts/max-params': bestPractice['max-params'],
  'ts/no-array-constructor': error['no-array-constructor'],
  'ts/no-dupe-class-members': error['no-dupe-class-members'],
  'ts/no-empty-function': error['no-empty-function'],
  'ts/no-implied-eval': error['no-implied-eval'],
  'ts/no-invalid-this': error['no-invalid-this'],
  'ts/no-loop-func': error['no-loop-func'],
  'ts/no-loss-of-precision': error['no-loss-of-precision'],
  'ts/no-magic-numbers': error['no-magic-numbers'],
  'ts/no-redeclare': error['no-redeclare'],
  'ts/no-restricted-imports': error['no-restricted-imports'],
  'ts/no-shadow': error['no-shadow'],
  'ts/no-throw-literal': error['no-throw-literal'],
  'ts/no-unused-expressions': [ 'error', { enforceForJSX: true }],
  'ts/no-unused-vars': error['no-unused-vars'],
  'ts/no-use-before-define': error['no-use-before-define'],
  'ts/no-useless-constructor': error['no-useless-constructor'],
  'ts/require-await': bestPractice['require-await'],
  'default-param-last': 'off',
  'dot-notation': 'off',
  'init-declarations': 'off',
  'max-params': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-empty-function': 'off',
  'no-implied-eval': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'require-await': 'off'
};

export { typescriptStyle };