# vue migrate [plugin-name]

> (experimental) run migrator for an already-installed cli plugin

实验的功能，用于迁移已经安装的插件

## 源码探索

### 命令注册

```js
program
  .command('migrate [plugin-name]')
  .description('(experimental) run migrator for an already-installed cli plugin')
  // TODO: use `requiredOption` after upgrading to commander 4.x
  .option('-f, --from <version>', 'The base version for the migrator to migrate from')
  .action((packageName, cmd) => {
    require('../lib/migrate')(packageName, cleanArgs(cmd))
  })
```

### 调试配置

```js
{
  "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
  "args": [
    "migrate",
    "@vue/cli-service",
    "--from=4.2.1"
  ]
}
```

### 逻辑

主要的逻辑从 `@vue/cli/lib/migrate.js` 开始

```js
async function migrate (pluginId, { from }, context = process.cwd()) {
  // TODO: remove this after upgrading to commander 4.x
  // 这里会强制设置迁移的基础版本
  if (!from) {
    throw new Error(`Required option 'from' not specified`)
  }

  const pluginName = resolvePluginId(pluginId)
  // 这里是载入了插件的 migrator 文件，留给插件开发者迁移入口，具体的迁移逻辑有插件开发者实现。
  const pluginMigrator = loadModule(`${pluginName}/migrator`, context)
  if (!pluginMigrator) {
    log(`There's no migrator in ${pluginName}`)
    return
  }
  await runMigrator(context, {
    id: pluginName,
    apply: pluginMigrator,
    baseVersion: from
  })
}
```

再看下 `runMigrator` 方法，实例化了 `Migrator` 类，而 `Migtrator` 类则继承了 `Generator` 类并且重写了 `generate` 方法

```js
  async generate (...args) {
    const plugin = this.migratorPlugin

    // apply migrators from plugins
    const api = new MigratorAPI(
      plugin.id,
      plugin.baseVersion,
      this,
      plugin.options,
      this.rootOptions
    )

    await plugin.apply(api, plugin.options, this.rootOptions, this.invoking)

    await super.generate(...args)
  }
```
其中 `MigratorAPI` 是继承了 `GeneratorAPI`。

**TODO** 这一段的代码是的设计是很精巧的，`Generator`/`GeneratorAPI`/`Migrator`/`MigratorAPI`，并且 `Migrator` 继承 `Generator`，`MigratorAPI` 继承 `GeneratorAPI`，总觉这里是应用了一种或者多多种设计模式，但是现在还没想清晰，先留个疑问在此。


我们再看 `runMigrator` 的后续逻辑，执行 `migrator` 实例的 `generate` 方法，同时如果有新的依赖则通过 pm（`PackageManager` 实例）安装，如果有钩子函数则执行钩子函数，然后通过 `git ls-files -o --exclude-standard --full-name` 命令识别出本次迁移变化的内容，提醒用户关注这些文件变化。