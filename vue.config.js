module.exports = {
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      proxy: {
        //接口名由原网站定义，拿过来用
        //为防止接口名重复，自定义接口名，再通过空字符串过滤
        // http://m.maoyan.com/ajax/cinemaList?day=2020-03-04
        '/ajax': {
          target: 'http://m.maoyan.com',
          changeOrigin: true,
        },
        
      }
  
    },
    lintOnSave: false // 关了eslint 检查
  }
  