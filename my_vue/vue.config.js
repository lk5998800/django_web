module.exports = {
  publicPath: '/', // Vue.js 应用的基础路径，设置为根目录
  outputDir: '../dist', // 构建后文件输出路径
  indexPath: '../templates/_base_vue.html', // 构建后的 index 文件路径
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Django 运行在8000端口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 删除路径中的 /api 前缀
        }
      }
    },
    devMiddleware: {
      writeToDisk: true // 确保在开发模式下将文件写入磁盘
    }
  }
};
