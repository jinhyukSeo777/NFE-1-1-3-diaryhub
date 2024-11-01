const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          '@vanilla-extract': path.resolve(
            __dirname,
            'node_modules/@vanilla-extract'
          ),
        },
        modules: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules'),
        ],
      };

      // src 외부 파일을 처리하도록 babel-loader 설정
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        oneOfRule.oneOf.forEach((rule) => {
          if (rule.loader && rule.loader.includes('babel-loader')) {
            rule.include = [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'node_modules/@vanilla-extract'),
            ];
          }
        });
      }

      return webpackConfig;
    },
  },
};
