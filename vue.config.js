const isProduction = process.env.NODE_ENV !== 'development'
const CompressionPlugin = require('compression-webpack-plugin')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')


module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          })
        ]
      }
    }
  },
  configureWebpack: {
    // plugins: [
    //   new CompressionPlugin({
    //     test: /\.js/,
    //     algorithm: 'gzip',
    //     threshold: 0,
    //     minRatio: 0.8,
    //     deleteOriginalAssets: true
    //   })
    // ]
  },
  chainWebpack: config => {
  },
  devServer: {
    port: 3330,
    open: true
  }
}