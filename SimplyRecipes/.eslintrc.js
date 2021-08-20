module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: 'off',
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: true,
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
};
