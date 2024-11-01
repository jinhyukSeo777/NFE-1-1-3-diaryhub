const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          '@vanilla-extract': path.resolve(
            __dirname,
            'node_modules/@vanilla-extract'
          ),
        },
      };
      return webpackConfig;
    },
  },
};
