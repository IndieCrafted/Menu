module.exports = {
  publicPath: '/menu/',
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://api.wildnode.cc/beer/v1/',
        changeOrigin: true,
        pathRewrite: { '^/v1': '' }
      }
    }
  }
}
