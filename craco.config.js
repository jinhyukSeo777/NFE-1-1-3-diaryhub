const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    configure: (webpackConfig) => {
      webpackConfig.resolve.modules = [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ];
      return webpackConfig;
    },
  },
};
