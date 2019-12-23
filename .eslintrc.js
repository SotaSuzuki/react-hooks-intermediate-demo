module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 0,
  },
};
