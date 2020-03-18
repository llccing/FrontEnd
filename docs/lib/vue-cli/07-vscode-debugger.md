# node程序调试

代码调试工具对于源码的理解真的是很方便的工具，前面几个命令解析的过程中是通过 `console.log` 的方式，真的是很难用。每个地方加 `console.log`，很痛苦。

所以就很怀念很久之前调试Java或者C#的代码的日子，点个点儿就完成了，很方便

## launch.json配置

举个例子，调试 `vue inpect` 命令，launch.json的配置如下
```json
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "skipFiles": [
        "<node_internals>/**"
      ],
      // 重点是这两行，首先命令是 vue
      "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
      // 然后参数是 inspect。此处改为其他的也很容易，例如 ["serve"] 等于执行 vue serve 或者 ["ui"] 等于执行 vue ui
      "args": ["inspect"]
    }
  ]
}
```

## 调试web程序
todo 可以用一个vue的项目试试，应该会比 `console.log` 的方式舒服。

## 感谢
- [使用VSCode调试你的node应用](http://blog.ahui.me/posts/2019-05-11/debug-in-vscode/)

文章中的这个配置json，非常易懂
```json
{
  "type": "node",
  "request": "launch",
  "name": "调试inspect检查webpack config生成逻辑",
  "program": "${workspaceFolder}/node_modules/.bin/vue-cli-service",
  // 重点标记下
  "args": ["inspect"],
  "env": {
    "VUE_CLI_SERVICE_CONFIG_PATH": "${workspaceFolder}/build/vue.config.js"
  },
  "cwd": "${workspaceFolder}"
}
```

- [调试js](https://juejin.im/post/5c1b8bf56fb9a049ea38eafe)