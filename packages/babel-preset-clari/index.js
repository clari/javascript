exports.default = {
  presets: [
    ['babel-preset-es2015', {
      modules: false,
    }],
    'babel-preset-stage-0',
    'babel-preset-react',
  ],
  plugins: [
    'babel-plugin-transform-decorators-legacy',
  ],
  env: {
    development: {
      presets: [
        'babel-preset-react-hmre',
      ],
    },
    test: {
      plugins: [
        'babel-plugin-transform-es2015-modules-commonjs',
      ],
    },
  },
};

module.exports = exports.default;
