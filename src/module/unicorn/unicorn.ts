/* eslint-disable ts/no-unsafe-assignment */
import { pluginUnicorn } from '@global/plugin/plugin';
import { unicornDisabledRule } from '@module/unicorn/rule/unicorn_disabled_rule';
import { unicornGeneralRule } from '@module/unicorn/rule/unicorn_general_rule';
import { unicornOverride } from '@module/unicorn/rule/unicorn_override';

const unicorn =
[
  {
    name: 'unicorn',
    plugins:
    {
      unicorn: pluginUnicorn
    },
    rules:
    {
      ...unicornDisabledRule,
      ...unicornGeneralRule
    }
  },
  ...unicornOverride
];

export { unicorn };