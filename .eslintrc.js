module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    '**/specs/*.js',
    '**/specs/helpers/*.js',
    '**/specs/contract/*.js',
    '**/e2e/*.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
    'operator-linebreak': 'off',
    'no-useless-constructor': 'off',
    'no-alert': 'off',
  },
};
