/*
 * @Description:配置文件
 * @Author: ZY
 * @Date: 2020-12-07 11:41:22
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 15:17:29
 */
const { resolve } = require('path')
module.exports = {
  devServer: {
    hot: true,
    port: 80,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
        proxy: {
          '/api': {
            target: 'https://www.vue-js.com/api',
            changeOrigin: true,
            pathRewrite:{ '^/api': '' }
          },
          '/mock': {
            target: 'http://127.0.0.1:7002',
            changeOrigin: true,
            pathRewrite:{ '^/mock': '' }
          },
      }
  },
  configureWebpack(){                
    return {
      plugins: [
      ],
      resolve:{
        alias:{
          '@':resolve('src'),
          '*':resolve(''),
          'Assets':resolve('src/assets')
        }
      },
    }
  },
}
