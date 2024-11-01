import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  },
};
