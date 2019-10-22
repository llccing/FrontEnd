# [lerna](https://github.com/lerna/lerna)

:::tip
一个管理有多个包的JavaScript项目的工具。
:::

主要是从 [vue-next](https://github.com/vuejs/vue-next) 项目了解到这个工具，并且发现 [vuepress](https://github.com/vuejs/vuepress) 这个项目1.0版本也采用了这个方式。工具能够被使用，肯定有他的优秀的地方，恰巧我也有个场景能够用到这个工具，于是就搞起。

事先说明，我这个算是为了用而用，所以和lerna的原本目的可能有所偏离，但是为了熟悉这个工具，还是可以搞一下的。

## 开始

先阅读2个文章，了解一下能够简答使用。

- [Lerna中文教程](https://juejin.im/post/5ced1609e51d455d850d3a6c) - 跟着教程先试试，能用再理解。
- [what-is-a-mono-repository-and-why-you-should-try-lerna](https://dev.to/anonimoconiglio/what-is-a-mono-repository-and-why-you-should-try-lerna-57lm) - what is Lerna and why it's worth to try?

## 我的使用

### [vue-repo](https://github.com/llccing-demo/vue-repo)

开始的时候，vue-repo 中的demo项目时散落在 [llccing-demo](https://github.com/llccing-demo) 下，有些凌乱，所以通过按库的类型做了区分，vue-repo 主要是vue方面的demo，包括vue、nuxt等等。

当然后后来针对react也创建了一个react-repo。

接下来要做的事情，可以把公共依赖提到跟目录，不用没个项目都添加同样的依赖。

####  有一个坑卡了比较久，这里记一下

lerna初始化后，需要commit，保证工作区是clean状态再import其他repo。

```
Error: Command failed: git rev-parse HEAD
lerna ERR! fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.
lerna ERR! Use '--' to separate paths from revisions, like this:
lerna ERR! 'git <command> [<revision>...] -- [<file>...]'
lerna ERR! 
lerna ERR! HEAD
lerna ERR! 
lerna ERR! at makeError (/usr/local/lib/node_modules/lerna/node_modules/execa/index.js:174:9)
lerna ERR! at Function.module.exports.sync (/usr/local/lib/node_modules/lerna/node_modules/execa/index.js:338:15)
lerna ERR! at Object.execSync (/usr/local/lib/node_modules/lerna/node_modules/@lerna/child-process/index.js:22:16)
lerna ERR! at ImportCommand.getCurrentSHA (/usr/local/lib/node_modules/lerna/node_modules/@lerna/import/index.js:129:34)
lerna ERR! at ImportCommand.initialize (/usr/local/lib/node_modules/lerna/node_modules/@lerna/import/index.js:98:31)
lerna ERR! at Promise.resolve.then (/usr/local/lib/node_modules/lerna/node_modules/@lerna/command/index.js:266:24)
lerna ERR! at <anonymous>
lerna ERR! lerna Command failed: git rev-parse HEAD
lerna ERR! lerna fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.
lerna ERR! lerna Use '--' to separate paths from revisions, like this:
lerna ERR! lerna 'git <command> [<revision>...] -- [<file>...]'
lerna ERR! lerna 
lerna ERR! lerna HEAD
```


[https://www.cnblogs.com/rongfengliang/p/10168891.html](https://www.cnblogs.com/rongfengliang/p/10168891.html)

## 别人怎么用

- [管理前端packages的最佳实践](https://juejin.im/post/5a989fb451882555731b88c2)

- [frontEnd-and-backEnd])(https://medium.com/the-andela-way/using-lerna-to-manage-js-monorepos-b7b8611f2ff3) - 对于全栈项目的处理，提取公共依赖。

