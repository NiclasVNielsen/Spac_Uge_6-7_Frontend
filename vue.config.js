module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5182',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '' // Remove the '/api' prefix
          }
        }
      }
    }
  };