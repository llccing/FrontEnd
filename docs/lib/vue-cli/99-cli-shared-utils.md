# @vue/cli-shared-utils

CLI的工具函数库，之所以在第三个提到这个，主要是因为被依赖的次数非常之多，值得好好看看如何封装一个工具函数库。

## 工具

### spinner 旋转器

借助 [ora](https://github.com/sindresorhus/ora)（优雅的终端loading）和 [chalk](https://github.com/chalk/chalk)（彩色命令行）的能力实现

### pluginResolution

针对插件的常用处理进行的封装

### env

针对开发环境的处理，包括包管理器、git等等