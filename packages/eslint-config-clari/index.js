module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // don't require this for event handlers
    'class-methods-use-this': 'off',
    'global-require': 'off',
    // don't warn about missing extensions on externals
    'import/extensions': 'off',
    // don't require newline if it is a webpack require
    'import/newline-after-import': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    // don't warn about unresolved packages for externals
    'import/no-unresolved': 'off',
    // allow export and export default for connected component tests
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/img-has-alt': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': 'off',
    // allow else return for symmetry
    'no-else-return': 'off',
    'no-plusplus': 'off',
    // allow return assign for refs
    'no-return-assign': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    // allow style object
    'react/forbid-prop-types': 'off',
    // not all objects have a natural key
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
  },
};
