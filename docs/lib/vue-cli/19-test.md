# TEST

写业务代码，会有测试同学来保驾护航；维护一个工具库，你能想象没有测试的后果吗，许多人、各种环境，如果没有自动化测试，难以想象如果能够没有心里负担的发布一个版本

那么 Vue CLI 是怎么做测试的呢，让我们一起来了解下

## 寻找测试的痕迹

`vue-cli/package.json` 的 script 脚本中，第一个命令是 `"test": "node scripts/test.js"`

```js
const minimist = require('minimist')
const rawArgs = process.argv.slice(2)
const args = minimist(rawArgs)

let regex
if (args.p) {
  // 从这里可知，我们可以传入 包名 作为参数
  const packages = (args.p || args.package).split(',').join('|')
  regex = `.*@vue/(${packages}|cli-plugin-(${packages}))/.*\\.spec\\.js$`
  const i = rawArgs.indexOf('-p')
  rawArgs.splice(i, 2)
}

const jestArgs = [
  '--env', 'node',
  '--runInBand',
  ...rawArgs,
  ...(regex ? [regex] : [])
]

console.log(`running jest with args: ${jestArgs.join(' ')}`)

require('jest').run(jestArgs)
```

上面这段代码已经清晰的告诉我们，测试工具 [jest](https://jestjs.io/en/)，为了熟悉这个工具可以大致浏览一下文档。

如果你直接执行 `yarn test` 那么会执行 packages 下的所有测试，我们这里仅仅想测试一个文件，那么如果做呢，仅仅需要修改 package.json 中的 jest 配置即可
```json
"jest": {
    "testEnvironment": "node",
    "setupFiles": [
      "<rootDir>/scripts/testSetup.js"
    ],
    "testMatch": [
      // 前面都无变化，这里是重点，改成任何你想运行的测试即可
      "**/@vue/cli/__tests__/Creator.spec.js"
    ]
  }
```

## Creator.spec.js

首先看下这个测试文件
```js
// jest的mock功能是为了更加方便的测试
jest.mock('fs')
jest.mock('inquirer')

```
那么 `js` 和 `inquirer` 这两个mock的模块的位置呢，

**vue-cli/__mocks__/fs.js**
```js
// memfs 是一个内存型的文件系统管理工具，这样就保证了测试时不会反复写入磁盘。
const { fs } = require('memfs')

// overwrite config path and context when fs is mocked
process.env.VUE_CLI_CONTEXT = '/'
process.env.VUE_CLI_CONFIG_PATH = '/.vuerc'

module.exports = fs

```
**vue-cli/__mocks__/inquirer.js**，这就是 jest的mock在这里的使用方式。

## args.spec.js

这里我们看一个逻辑简单一点的测试
```js
const path = require('path')
const execa = require('execa')

const CLI_PATH = path.resolve(__dirname, '..', 'bin', 'vue.js')

const runAsync = async args => await execa(CLI_PATH, args)

test('suggests matching command', async () => {
  // 这里构造输入的内容
  const { stdout } = await runAsync(['confgi'])
  // 因为脚本执行时，有相似性检测，所以这里提示出 config 这个词，说明测试通过
  expect(stdout).toContain('Did you mean config?')
})

```


## 参考

- [jestjs.io](https://jestjs.io/)
- [利用jest进行测试](https://juejin.im/post/59b5e79f6fb9a00a600f4216)