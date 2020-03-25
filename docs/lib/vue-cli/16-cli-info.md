# vue info

> print debugging information about your environment

打印当前环境的调试信息

## 源码探索

```js
program
  .command('info')
  .description('print debugging information about your environment')
  .action((cmd) => {
    console.log(chalk.bold('\nEnvironment Info:'))
    require('envinfo').run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
        npmPackages: '/**/{typescript,*vue*,@vue/*/}',
        npmGlobalPackages: ['@vue/cli']
      },
      {
        showNotFound: true,
        duplicates: true,
        fullTree: true
      }
    ).then(console.log)
  })
```

这里主要是依赖了 [envinfo](https://github.com/tabrindle/envinfo) 的能力。

这里看一下我当前环境的信息，只所以 `@vue/cli: Not Found` 这个是因为我当前是调试模式，在@vue/cli目录执行了 `yarn link`，所以这里的 `@vue/cli` 是 Not Found
```
Environment Info:

  System:
    OS: macOS Sierra 10.12.6
    CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz
  Binaries:
    Node: 12.13.0 - ~/.nvm/versions/node/v12.13.0/bin/node
    Yarn: 1.22.0 - ~/.yarn/bin/yarn
    npm: 6.12.0 - ~/.nvm/versions/node/v12.13.0/bin/npm
  Browsers:
    Chrome: 80.0.3987.149
    Firefox: 72.0.1
    Safari: 12.1.2
  npmPackages:
    @vue/babel-helper-vue-jsx-merge-props:  1.0.0
    @vue/babel-plugin-transform-vue-jsx:  1.0.0
    @vue/babel-preset-app:  3.11.0
    @vue/babel-preset-jsx:  1.1.0
    @vue/babel-sugar-functional-vue:  1.0.0
    @vue/babel-sugar-inject-h:  1.0.0
    @vue/babel-sugar-v-model:  1.0.0
    @vue/babel-sugar-v-on:  1.1.0
    @vue/component-compiler-utils:  3.0.0
    vue:  2.6.10
    vue-hot-reload-api:  2.3.4
    vue-loader:  15.7.1
    vue-router:  3.1.3
    vue-server-renderer:  2.6.10
    vue-style-loader:  4.1.2
    vue-template-compiler:  2.6.10
    vue-template-es2015-compiler:  1.9.1
    vuepress: ^1.1.0 => 1.1.0
    vuepress-html-webpack-plugin:  3.2.0
    vuepress-plugin-container:  2.0.2
  npmGlobalPackages:
    @vue/cli: Not Found

```