# vue invoke <plugin> [pluginOptions]

上一篇我们介绍了 `vue add <plugin>` 命令，这次的 `vue invoke` 其实做的事就是在已经安装了插件的基础上再次执行插件中定义的方法。

## 源码探索

```js
program
  .command('invoke <plugin> [pluginOptions]')
  .description('invoke the generator of a plugin in an already created project')
  .option('--registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
  .allowUnknownOption()
  .action((plugin) => {
    require('../lib/invoke')(plugin, minimist(process.argv.slice(3)))
  })
```

代码很清晰，注册了 `invoke` 命令，解析 `plugin` 参数和其他参数，传入到 `../lib/invoke` 方法中。

`invoke`的逻辑在上一节中有详细说明，可以参考上一节。

## 啥感想

文件的拆分足够合理，函数的参数设置的足够合理，才能够做到合理的复用。当然，这个是需要足够的经验，和一点点的优化慢慢形成的合理的代码组织形式。