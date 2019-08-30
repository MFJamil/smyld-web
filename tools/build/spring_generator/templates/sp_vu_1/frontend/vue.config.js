module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:${srv.port}',
        ws: true,
        changeOrigin: true
        }
    }},
    configureWebpack: {
      module: {
        rules: [
          {
            test: /.html$/,
            loader: "vue-template-loader",
            exclude: /index.html/
          }
        ]
      }
    }
  }
  
