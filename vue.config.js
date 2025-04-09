module.exports = {
    devServer: {
      proxy: {
        '/api': { // Match requests starting with /api
          target: 'http://localhost:5182/', // Target API URL
          changeOrigin: true, // Needed for virtual hosted sites
          pathRewrite: {
            '^/api': '', // Remove /api from the request path
          },
        },
      },
    },
  };