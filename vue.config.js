const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerHost: 'localhost'
      }),
      new MomentLocalesPlugin({
        localesToKeep: ['fr-fr'],
      }),
    ]
  }
};