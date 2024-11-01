import { VanillaExtractPlugin } from './src/webpack-plugin';
module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
  },
};
