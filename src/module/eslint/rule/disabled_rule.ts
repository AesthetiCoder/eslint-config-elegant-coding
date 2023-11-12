const disabledRule =
{
  'capitalized-comments': 'off',
  'id-denylist': 'off',
  'id-match': 'off',
  'max-lines-per-function': [
    'off',
    {
      IIFEs: true,
      max: 50,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'prefer-named-capture-group': 'off',
  "no-restricted-exports": "off",
  'no-ternary': 'off',
  'no-undefined': 'off',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off'
};

export { disabledRule };