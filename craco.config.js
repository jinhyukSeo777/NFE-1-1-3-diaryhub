const {
  VanillaExtractPlugin,
} = require('./src/@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  },
};
