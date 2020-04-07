# @vue/cli-plugin-vuex

这个插件是从 `@vue/cli@4.x` 开始增加的，规范化 vuex 的使用，同时提供更加完美的默认配置。

## 源码探索

cli-plugin-vuex 插件由两个部分组成，Service 和 Generator。

### Service 部分

一是必须有的 Service 部分：从 `package.json` 文件中可以看到，主文件是根目录的 `index.js`，文件内容如下 
```js
module.exports = (api, options = {}) => {}
```
可以看到这里返回了一个空函数，这个是根据这个[文档](https://cli.vuejs.org/dev-guide/plugin-dev.html#service-plugin)来的。

### Generator 部分
还有一部分是 `Generator`，就是 `/generator/index.js`：

```js
// 这里的 api 指的是 GeneratorAPI 实例
module.exports = (api, options = {}) => {
  // 这里 api.entryFile 指的是 main.js 文件
  api.injectImports(api.entryFile, `import store from './store'`)
  api.injectRootOptions(api.entryFile, `store`)

  api.extendPackage({
    dependencies: {
      vuex: '^3.1.2'
    }
  })

  api.render('./template', {
  })

  // 这里指的是 GeneratorAPI 被调用的过程中，如果是 typescript 项目的需要做转换
  if (api.invoking && api.hasPlugin('typescript')) {
    /* eslint-disable-next-line node/no-extraneous-require */
    const convertFiles = require('@vue/cli-plugin-typescript/generator/convert')
    convertFiles(api)
  }
}

```

`api.entryFile` 你可能好奇他到底只的是哪个文件，我们看这里：

`@vue/cli/lib/GeneratorAPI.js`
```js
  /**
   * Get the entry file taking into account typescript.
   *
   * @readonly
   */
  get entryFile () {
    if (this._entryFile) return this._entryFile
    // 从这里可以看到，它就是指的 主文件
    return (this._entryFile = fs.existsSync(this.resolve('src/main.ts')) ? 'src/main.ts' : 'src/main.js')
  }
```

再看下 `injectImports` 这个方法：

```js
  /**
   * 添加导入语句到文件中
   * 在这里 file 指的是主文件
   * imports 就是导入语句
   */
  injectImports (file, imports) {
    const _imports = (
      this.generator.imports[file] ||
      (this.generator.imports[file] = new Set())
    )
    // imports 这里是支持数组的，非数组也会转为数组处理
    ;(Array.isArray(imports) ? imports : [imports]).forEach(imp => {
      _imports.add(imp)
    })
  }
```

`injectRootOptions` 方法：

```js
  /**
   * Add options to the root Vue instance (detected by `new Vue`).
   */
  injectRootOptions (file, options) {
    const _options = (
      this.generator.rootOptions[file] ||
      (this.generator.rootOptions[file] = new Set())
    )
    // 支持数组，处理同上
    ;(Array.isArray(options) ? options : [options]).forEach(opt => {
      _options.add(opt)
    })
  }
```

`injectRootOptions` 执行后，store 会加入到下面的代码中。
```js
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```


`extendPackage` 方法是用来扩展项目的 package.json 文件，

```js
/**
   * 扩展项目的 package.json 文件
   * 也解决不同插件之间的依赖冲突
   * 工具配置字段可能在提取之前被提取到独立文件中
   * 文件将写入磁盘
   *
   * @param {object | () => object} fields - 合并的字段
   * @param {object} [options] - 用来扩展/合并的选项
   * @param {boolean} [options.prune=false] - 在合并之后从对象中移除所有 null/undefined 字段
   * @param {boolean} [options.merge=true] 深度合并嵌套字段
   *    无论次选项如何依赖字段始终会深度合并
   * @param {boolean} [options.warnIncompatibleVersions=true] 如果依赖版本没有相交，将输出警告
   */
  extendPackage (fields, options = {}) {
    const extendOptions = {
      prune: false,
      merge: true,
      warnIncompatibleVersions: true
    }

    // 这是为了兼容性
    // 版本 4.0.0 到 4.1.2, 没有 `options` 对象, 只有 `forceNewVersion` 标志
    if (typeof options === 'boolean') {
      extendOptions.warnIncompatibleVersions = !options
    } else {
      Object.assign(extendOptions, options)
    }

    const pkg = this.generator.pkg
    // 我们传入的是个对象，所以这里走 else 选项
    const toMerge = isFunction(fields) ? fields(pkg) : fields
    for (const key in toMerge) {
      // value = { vuex: '^3.1.2' }
      const value = toMerge[key]
      // existing = { xxx } 现有依赖
      const existing = pkg[key]
      // key = dependencies
      if (isObject(value) && (key === 'dependencies' || key === 'devDependencies')) {
        // 使用特定版本解决冲突
        pkg[key] = mergeDeps(
          this.id,
          existing || {},
          value,
          this.generator.depSources,
          extendOptions
        )
      } else if (!extendOptions.merge || !(key in pkg)) {
        pkg[key] = value
      } else if (Array.isArray(value) && Array.isArray(existing)) {
        pkg[key] = mergeArrayWithDedupe(existing, value)
      } else if (isObject(value) && isObject(existing)) {
        pkg[key] = deepmerge(existing, value, { arrayMerge: mergeArrayWithDedupe })
      } else {
        pkg[key] = value
      }
    }

    if (extendOptions.prune) {
      pruneObject(pkg)
    }
  }
```

再看 `api.render('./template', {})` 这句话，我们找到 GeneratorAPI 对应的 `render` 方法：

因为我们第一个参数是字符串类型，所以这里仅截取了部分走的到的逻辑
```js
  /**
   * Render template files into the virtual files tree object.
   * 渲染模板文件到虚拟文件树对象
   * @param {string | object | FileMiddleware} source -
   *   参数可以是下面几种
   *   - 相对路径；
   *   - { 模板源：目标文件 } 的哈希对象映射；
   *   - 自定义的文件中间件函数
   * @param {object} [additionalData] - 模板能够获得的额外数据
   * @param {object} [ejsOptions] - ejs 的配置信息
   */
  render (source, additionalData = {}, ejsOptions = {}) {
    const baseDir = extractCallDir()
    if (isString(source)) {
      source = path.resolve(baseDir, source)
      // 这里传入 _injectFileMiddleware 的函数是个参数，所以并不会马上执行
      this._injectFileMiddleware(async (files) => {
        const data = this._resolveData(additionalData)
        const globby = require('globby')
        const _files = await globby(['**/*'], { cwd: source })
        for (const rawPath of _files) {
          const targetPath = rawPath.split('/').map(filename => {
            // 以点开头的文件当发布到 npm 上会被忽略，所以在模板中我们需要用下划线取代（例如，"_gitignore"）
            // 这里则是将 下划线 转回 点
            if (filename.charAt(0) === '_' && filename.charAt(1) !== '_') {
              return `.${filename.slice(1)}`
            }
            // 对于两个下划线的文件名，则截取第二个下划线开始的字符串名字
            if (filename.charAt(0) === '_' && filename.charAt(1) === '_') {
              return `${filename.slice(1)}`
            }
            return filename
          }).join('/')
          const sourcePath = path.resolve(source, rawPath)
          const content = renderFile(sourcePath, data, ejsOptions)
          // 对于二进制文件或者非空白的文件才设置，否则就过滤了
          if (Buffer.isBuffer(content) || /[^\s]/.test(content)) {
            files[targetPath] = content
          }
        }
      })
```

上面的方法中，调用了 `_injectFileMiddleware` 方法：

```js
  /**
   * 注入一个文件处理中间件
   *
   * @private 私有的，通过名字的 下划线可以知道
   * @param {FileMiddleware} middleware - 一个中间件函数
   *   他接受虚拟文件树对象，和 ejs 渲染函数。可以是异步的
   */
  _injectFileMiddleware (middleware) {
    this.generator.fileMiddlewares.push(middleware)
  }
```

上面出入 `_injectFileMiddleware` 的参数，的执行是在 `Generator.js` 中的 `resolveFiles()` 方法中

```js
  async resolveFiles () {
    const files = this.files
    for (const middleware of this.fileMiddlewares) {
      // 这里将 files 传入，作为文件树的根节点
      await middleware(files, ejs.render)
    }
  ...
```

这里我们看下 Typescript 的转换方式：
```js
// 我们调用的时候传入的仅仅是 GeneratorAPI
module.exports = (api, { tsLint = false, convertJsToTs = true } = {}) => {
  const jsRE = /\.js$/
  const excludeRE = /^tests\/e2e\/|(\.config|rc)\.js$/
  const convertLintFlags = require('../lib/convertLintFlags')
  // 这里使用了 GeneratorAPI 的 postProcessFiles 方法
  api.postProcessFiles(files => {
    // 这里默认值是 true
    if (convertJsToTs) {
      // 删除所有的有同名 ts 文件的 js 文件
      // 简单的将其他 js 文件重命名为 ts 文件
      for (const file in files) {
        // 这个时候我们操作的还是虚拟文件树 files
        if (jsRE.test(file) && !excludeRE.test(file)) {
          const tsFile = file.replace(jsRE, '.ts')
          if (!files[tsFile]) {
            let content = files[file]
            if (tsLint) {
              content = convertLintFlags(content)
            }
            files[tsFile] = content
          }
          delete files[file]
        }
      }
    }
```

这里我们看下 `postProcessFiles` 方法：

```js
/**
   * push 一个文件中间件，它将在所有普通中间件都执行完成后再执行
   * @param {FileMiddleware} cb 参数是一个回调函数
   */
  postProcessFiles (cb) {
    this.generator.postProcessFilesCbs.push(cb)
  }
```

那么 `postProcessFilesCbs` 将在哪里执行呢，我们再次回到了 `Generator.js` 文件的 `resolveFiles` 方法：

```js
  // 这个我们已经在前面讲到了
  const files = this.files
  for (const middleware of this.fileMiddlewares) {
    await middleware(files, ejs.render)
  }
  ...

  for (const postProcess of this.postProcessFilesCbs) {
    // 这里我们刚刚 push 进去的 中间件将会执行
    await postProcess(files)
  }
```

最终的文件写入则在 `Generator.js` 的 `generate` 方法中：

```js
  ...
  // 载入文件树
  await this.resolveFiles()
  ...
  // 将虚拟文件树写入磁盘
  await writeFileTree(this.context, this.files, initialFiles)
```
