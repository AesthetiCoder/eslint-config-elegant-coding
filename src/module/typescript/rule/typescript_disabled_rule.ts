const typescriptDisabledRule =
{
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  '@typescript-eslint/sort-type-constituents': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': [ 'off', { ignoreInferredTypes: true } ]
};

export { typescriptDisabledRule };