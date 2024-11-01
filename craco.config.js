const {
  VanillaExtractPlugin,
} = require('./src/node_modules/@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  },
};
