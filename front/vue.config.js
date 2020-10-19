const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:'./',    // 公共路径
  productionSourceMap:false,  // 生产环境下css 分离文件
  devServer: {

  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global.scss";`
      },
    },
    extract: true,// 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false,// 开启 CSS source maps
    // modules: false// 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@assets',resolve('src/assets'))
  }
}
