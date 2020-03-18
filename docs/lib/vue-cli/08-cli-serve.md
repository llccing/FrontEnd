# vue serve [entry]

## 调试配置
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
      "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
      // 对应着在 test 目录下新建了 App.vue 文件
      "args": ["serve", "packages/test/App.vue"]
    }
  ]
}
```



## 小插曲
调试的过程中报这个错误，官方已经将该问题[修复了](https://github.com/vuejs/vue-cli/commit/69f6805211f451147ac0d737d5b591bf2c02d8ac)

```js
Module build failed (from ./node_modules/eslint-loader/index.js):
Error: BaseConfig:
	Configuration for rule "no-debugger" is invalid:
	Severity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '"process.env.NODE_ENV === "production" ? "error" : "off""').

    at validateRuleOptions (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:138:19)
    at /Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:193:9
    at Array.forEach (<anonymous>)
    at validateRules (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:190:30)
    at validateConfigArray (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:337:9)
    at CascadingConfigArrayFactory._finalizeConfigArray (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:417:13)
    at CascadingConfigArrayFactory.getConfigArrayForFile (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:271:21)
    at CLIEngine.isPathIgnored (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cli-engine.js:951:18)
    at CLIEngine.executeOnText (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cli-engine.js:868:38)
    at lint (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint-loader/index.js:278:17)
output.js:103

output.js:103
You may use special comments to disable some warnings.
output.js:103
Use // eslint-disable-next-line to ignore the next line.
output.js:103
Use /* eslint-disable */ to ignore all warnings in a file.
```