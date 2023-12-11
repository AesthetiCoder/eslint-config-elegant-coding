/* eslint-disable ts/no-unsafe-assignment */
import { pluginSolid } from '@global/plugin/plugin';

import { solidDisabledRule } from './rule/solid_disabled_rule';
import { solidGeneralRule } from './rule/solid_general_rule';

const solid =
{
  plugins:
  {
    solid: pluginSolid
  },
  rules:
  {
    ...solidGeneralRule,
    ...solidDisabledRule
  }
};

export { solid };