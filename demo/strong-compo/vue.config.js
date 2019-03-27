module.exports = {
  chainWebpack: config => {
    config.externals({
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        'axios': 'axios',
        'iview': 'iview'
    })
  },
  css: {
    extract: false
  }
}