const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.js/,
        algorithm: 'gzip',
        threshold: 0,
        minRatio: 0.8,
        deleteOriginalAssets: true
      })
    ]
  },
  chainWebpack: config => {

  },
  devServer: {
    port: 8866,
    open: true
  }
}