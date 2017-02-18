module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/img-has-alt': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
  },
};