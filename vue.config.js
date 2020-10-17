module.exports = {
  // publicPath: '/vue3-ts/',
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'assets',
  outputDir: 'dist',
  devServer: {
    // https: true,
    // host: process.env.VUE_APP_HOST_NAME,
    // port: process.env.VUE_APP_HOST_NAME_PORT,
    // disableHostCheck: true,
    // proxy: {
    //   '^/api': {
    //     target: process.env.VUE_APP_GATEWAY,
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  transpileDependencies: [
    'tailwind'
  ]

}
