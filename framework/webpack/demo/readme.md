## webpack实践

> 模块打包器

所有类型的文件都可以是模块，js、css、图片、json文件等，通过webpack的各种加载器，我们可以更加有效的管理这些文件。

(掘金webpack教程)[http://gold.xitu.io/entry/574fe7c579bc440052f6d805]

### 使用步骤

- 全局安装webpack

```
    npm install webpack -g
```

- 通常建议在项目目录中安装一份本地的webpack

```
    npm install webpack --save-dev
```

- 初始化项目(会提示你输入这个项目相关的信息，或者可以一直按enter，用默认值。)

```
    npm init
```

- 新建页面文件 index.html

```
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>webpack demo</title>
    </head>
    <body>

    </body>
    </html>
```

- 新建webpack.config.js，这是webpack默认的配置文件名称，添加内容

```
    module.exports = {
        entry: './main.js',
        output: {
            path: __dirname, // 输出文件的保存路径
            filename: 'bundle.js' // 输出文件的名称
        }
    };
```

- 新建main.js

main.js就是要被打包或者编译的js文件，可以在这里面写es6等等js内容。

- 在index.html中引入bundle.js

```
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>webpack demo</title>
    </head>
    <body>

    <script src="bundle.js"></script>
    </body>
    </html>
```

---

这样基础的架子就建起来了，剩下的就是锦上添花的工作了。可以加入babel，转es5，或者尝试压缩css等等。