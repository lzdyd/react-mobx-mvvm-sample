const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-parens': 0,
    'react/no-unused-state': 0,
    'no-return-assign': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-param-reassign': 2,
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    quotes: ['error', 'single'],
    'no-underscore-dangle': [2, { allow: ['_id', '_instance'] }],
    semi: [2, 'always'],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'max-len': [
      2,
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
      },
    ],
    'prefer-const': 1,
    complexity: [1, 11],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/no-danger': 0,
    'react/no-array-index-key': 1,
    'react/no-did-update-set-state': 0,
    'consistent-return': 0,
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
};
