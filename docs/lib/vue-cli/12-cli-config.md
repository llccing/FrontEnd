# vue config [value]

官方介绍：

>  有些针对 @vue/cli 的全局配置，例如你惯用的包管理器和你本地保存的 preset，都保存在 home 目录下一个名叫 .vuerc 的 JSON 文件。你可以用编辑器直接编辑这个文件来更改已保存的选项。

你也可以使用 vue config 命令来审查或修改全局的 CLI 配置。

该命令是用来获取或者设置某个配置，这里的配置指的是 `/Users/xxxx/.vuerc` 这个文件的的配置


看下我当前的配置，记录了预设等等
```js
{
  "useTaobaoRegistry": false,
  "latestVersion": "4.2.3",
  "lastChecked": 1583721075145,
  "packageManager": "yarn",
  "presets": {
    "llccing-default": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-router": {
          "historyMode": false
        },
        "@vue/cli-plugin-eslint": {
          "config": "base",
          "lintOn": [
            "save"
          ]
        }
      },
      "cssPreprocessor": "stylus"
    }
  }
}
```

## 用处

这个config的作用是针对当前计算机中所有项目的通用的config，也就是说是跨项目的。实际开发过程中，感觉使用场景还是比较少。

当然我们现在公司的处理方式是用了远程 `preset` 的方式，然后统一管理这个preset，达到组内所有人都公用一个配置的目的。

所以我觉得在企业开发中，`.vuerc` 中的配置用处还是比较小。

## 调试配置
```js
{
  // 保留主要部分，其他和前面一致
  "program": "${workspaceFolder}/packages/@vucli/bin/vue",
  "args": [
    "config",
  ]
}
```

## 源码探索

主要的代码逻辑都在 `@vue/cli/lib/config.js` 中，也很清晰

- 首先读取 `.vuerc` 文件
- 如果 `vue config` 后面没有其他参数，则打印当前的 `.vuerc` 文件内容
- 然后根据参数类型：`get/delete/edit/set` 分别操作对应的值

### vue config edit

在执行这个命令的时候，作者还针对编辑器编辑 `.vuerc` 文件单独抽象了一个库[launch-editor](https://github.com/yyx990803/launch-editor)出来，合理的抽象，确实能够降低复杂度，且代码职责解耦，利于维护。


__解决 edit命令报错的问题__：[将code命令加入 PATH 中](https://www.html.cn/archives/10134)

## 有意思的地方

```js
// 看了一下这个 os 是node.js内置模块，提供了操作系统相关的使用方法和属性
// homedir 返回当前用户的胡目录的字符串格式路径
const homedir = require('os').homedir()
```


下面再看一段代码，这段代码来自 `@vue/cli-shared-utils/lib/object.js`，也就是工具库中对象操作的方法，这个方法厉害之处是：如果你想给取得 ` const obj = {a: {b: {c: { d: 123123, e: '我是eee' } } } }`，这个对象中 d 的值，只要执行`get(obj, 'a.b.c.d')` 即可。

假设这样调用`get(obj, 'a.b.c.d')`，下面分析下逻辑：
```js

exports.get = function (target, path) {
  // fields = ['a', 'b', 'c', 'd']
  const fields = path.split('.')
  // obj = {a: {b: {c: { d: 123123, e: '我是eee' } } } }
  let obj = target
  // l = 4
  const l = fields.length
  // 通过循环，逐层深入，这里i最大是2
  for (let i = 0; i < l - 1; i++) {
    const key = fields[i]
    if (!obj[key]) {
      return undefined
    }
    obj = obj[key]
  }
  // obj = { d: 123123, e: '我是eee' }
  // fields[l - 1] = d
  // 所以 obj[fields[l - 1]] = obj[d] = 123123
  return obj[fields[l - 1]]
}
```

这个写法在vue.js的源码中也能够看到。