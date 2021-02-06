module.exports = {
  extends: [
    'codingitwrong',
    "plugin:cypress/recommended"
  ],
  parser: 'babel-eslint',
  plugins: [
    'cypress',
    'jest',
    'react',
  ],
  env: {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'jquery': true,
  },
  rules: {
    'no-redeclare': 'error',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': 'off',
    'semi': 'off'
  },
};