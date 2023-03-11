module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'build', 'public', '.next'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'turbo',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'prettier',
    'simple-import-sort',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'simple-import-sort/exports': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        tabWidth: 2,
        endOfLine: 'lf',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-const',
          'multiline-expression',
          'block',
          'function',
          'if',
          'block-like',
          'return',
        ],
      },
    ],
  },
  settings: {
    react: {
      version: '18.2.2',
    },
  },
}
