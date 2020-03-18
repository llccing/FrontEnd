# vue init <template> <app-name>

todo，暂时忽略该命令。一个是因为调试过程中出现报错，第二个是根据我的理解，以后该命令会被废弃。

## 调试配置

launch.json
```js
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
      // "program": "${workspaceFolder}/packages/@vue/cli-service/bin/vue-cli-service",
      "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
      "args": [
        "init",
        "simple-webapck",
        "my-project"
      ]
    }
  ]
}
```

调试报错
```js
vue-cli · Failed to download repo vuejs-templates/simple-webapck: Response code 404 (Not Found)
```