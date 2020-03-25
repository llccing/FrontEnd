# vue upgrade [plugin-name]


> 引用原文：(experimental) upgrade vue cli service / plugins

这个是用来升级 cli-service 和 plugins 的。

## 源码探索

### 调试脚本

```js
{
  "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
  "args": [
    "upgrade",
    "@vue/cli-service"
  ]
}
```

### 命令注册

```js
program
  .command('upgrade [plugin-name]')
  // 这也是个实验性的功能
  .description('(experimental) upgrade vue cli service / plugins')
  .option('-t, --to <version>', 'Upgrade <package-name> to a version that is not latest')
  .option('-f, --from <version>', 'Skip probing installed plugin, assuming it is upgraded from the designated version')
  .option('-r, --registry <url>', 'Use specified npm registry when installing dependencies')
  .option('--all', 'Upgrade all plugins')
  .option('--next', 'Also check for alpha / beta / rc versions when upgrading')
  .action((packageName, cmd) => {
    require('../lib/upgrade')(packageName, cleanArgs(cmd))
  })
```

代码的主要逻辑在 `@vue/cli/lib/upgrade.js` 这个文件中
```js
async function upgrade (packageName, options, context = process.cwd()) {
  // 首先校验了项目目录下是否有代码没有提交
  if (!(await confirmIfGitDirty(context))) {
    return
  }

  // 然后实例化了 `Upgrader` 类
  const upgrader = new Upgrader(context)
  // 如果没指定具体的升级包
  if (!packageName) {
    if (options.to) {
      error(`Must specify a package name to upgrade to ${options.to}`)
      process.exit(1)
    }

    if (options.all) {
      return upgrader.upgradeAll(options.next)
    }

    // 通过 `const upgradable = await upgrader.checkForUpdates(options.next)` 检查是否有更新，
    const upgradable = await upgrader.checkForUpdates(options.next)
    if (upgradable) {
      const { ok } = await inquirer.prompt([
        {
          name: 'ok',
          type: 'confirm',
          message: 'Continue to upgrade these plugins?',
          default: true
        }
      ])

      if (ok) {
        return upgrader.upgradeAll(options.next)
      }
    }

    return
  }
  // 如果指定了升级的包，那么直接升级就好
  return upgrader.upgrade(packageName, options)
}
```

通过 `git status --porcelain` 命令检查当前仓库中是否有未提交的内容（也就是看git的工作区和暂存区是否有新的内容）
```js
const { stdout } = await execa('git', ['status', '--porcelain'], { cwd: context })
  if (!stdout) {
    return true
  }
```
