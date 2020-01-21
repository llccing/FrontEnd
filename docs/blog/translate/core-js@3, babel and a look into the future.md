# core-js@3, babel展望未来

经过一年半的开发，数十个版本，许多不眠之夜，[core-js@3](https://github.com/zloirock/core-js)终于发布了。这是`core-js`和[babel](https://babeljs.io/) 补丁相关的功能的最大的一次变化。

什么是 `core-js`?

- 它是JavaScript标准库的补丁，它支持
  - 最新的 [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) 标准
  - ECMAScript 标准库提案
  - 一些 [WHATGW](https://en.wikipedia.org/wiki/WHATWG)  / [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) 标准（跨平台或者ECMAScript相关）
- 它最大限度的模块化：你能仅仅加载你想要使用的功能
- 它能够不污染全局命名空间
- 它[和babel紧密集成](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#Babel)：这能够优化`core-js`的导入

它是最普遍、[最流行](https://www.npmtrends.com/core-js-vs-es5-shim-vs-es6-shim-vs-airbnb-js-shims-vs-polyfill-library-vs-polyfill-service-vs-js-polyfills)的方式来给JavaScript标准库打补丁，但是有很大一部分开发者并不知道他们间接的使用了`core-js`🙂

## 贡献

`core-js`是我自己爱好的项目，没有给我带来任何利润。它花了我很长的时间，真的很昂贵：为了完成`core-js@3`，我在几个月之前已经离开我的工作。这个项目对许多人和公司起到了促进作用。因为这些，筹集资金去支持`core-js`的维护是说得通的。

如果你对`core-js`感兴趣或者在你每天的工作中有使用到，你可以在[Open Collective](https://opencollective.com/core-js#sponsor)和[Patreon](https://www.patreon.com/zloirock)成为赞助者。

你可以给[我](http://zloirock.ru/)提供一个好的工作，和我现在做的相关的。

或者你可以以另一种方式贡献，你可以帮助去改进代码，测试或者文档（现在，`core-js`的文档还很糟糕！）。

## `core-js@3`有哪些变化？

### JavaScript标准库中变化的内容

由于以下两个原因，这个版本包含丰富的 新的JavaScript补丁：

- `core-js` 只在 major（主）版本更新时才有 break changes，即使需要和提案的内容对齐。
- `core-js@2` 在一年半前已经进入功能冻结阶段了；所有新的功能只能够添加到`core-js@3`这个分支。

#### 稳定的ECMAScript功能

稳定的ECMAScript功能在`core-js`中已经几乎完全支持有很长一段时间了，除此之外，`core-js@3`引进了一些新功能：

- 增加支持 ECMAScript 2015引入的两个知名标志 [`@@isConcatSpreadable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable)和[`@@species`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)，给所有使用他们的方法。
- 增加来自ECMAScript 2018的 [`Array.prototype.flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)和[`Array.prototype.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)（`core-js@2`针对`Array.prototype.flatten`这个老版本的提案提供了补丁）。
- 增加来自ECMAScript 2019的[`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)方法
- 增加来自ECMAScript 2019的 [`Symbol.prototype.description`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)访问器

一些在ES2016-ES2019中作为提案被接受且已经使用很长时间的功能，现在被标记为稳定：

- [`Array.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 和 [`TypedArray.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) 方法（ESMAScript 2016）
- [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) 和 [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 方法(ECMAScript 2017)
- [`Object.getOwnPropertyDescriptors`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 方法 (ECMAScript 2017)
- [`String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) 和 [`String.prototype.padEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) 方法（ECMAScript 2017）
- [`Promise.prototype.finally`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) 方法（ECMAScript 2018）
- [`Symbol.asyncIterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) 知名标志（ECMAScript 2018）
- [`Object.prototype.__define(Getter|Setter)__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) 和 [`Object.prototype.__lookup(Getter|Setter)__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) 方法（ECMAScript 2018）
- [`String.prototype.trim(Start|End|Left|Right)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) 方法（ECMAScript 2019）

修复了针对浏览器的许多问题，例如, [Safari 12.0 `Array.prototype.reverse` bug](https://bugs.webkit.org/show_bug.cgi?id=188794) 已经被修复了。

#### ECMAScript 提案

除了上文提到的支持内容，`core-js@3`现在还支持下面的 ECMAScript 提案：

- [`globalThis`](https://github.com/tc39/proposal-global) stage 3（现在是 stage 4）的提案 - 之前，已经有了 `global` 和 `System.global`
- [`Promise.allSettled`](https://github.com/tc39/proposal-promise-allSettled) stage 2（现在是 stage 4）提案
- [新 `Set` 方法](https://github.com/tc39/proposal-set-methods) stage 2 提案：
  - Set.prototype.difference
  - Set.prototype.intersection
  - Set.prototype.isDisjoinFrom
  - Set.prototype.isSubsetOf
  - Set.prototype.isSupersetOf
  - Set.prototype.symmetricDifference
  - Set.prototype.union
- [新 collections 方法](https://github.com/tc39/proposal-collection-methods) stage 1 提案，包函许多新的有用的方法：
  - Map.groupBy
  - Map.keyBy
  - Map.prototype.deleteAll
  - Map.prototype.every
  - Map.prototype.filter
  - Map.prototype.find
  - Map.prototype.findKey
  - Map.prototype.includes
  - Map.prototype.keyOf
  - Map.prototype.mapKeys
  - Map.prototype.mapValues
  - Map.prototype.merge
  - Map.prototype.reduce
  - Map.prototype.some
  - Map.prototype.update
  - Set.prototype.addAll
  - Set.prototype.deleteAll
  - Set.prototype.every
  - Set.prototype.filter
  - Set.prototype.find
  - Set.prototype.join
  - Set.prototype.map
  - Set.prototype.reduce
  - Set.prototype.some
  - WeakMap.prototype.deleteAll
  - WeakSet.prototype.addAll
  - WeakSet.prototype.deleteAll
- [`String.prototype.replaceAll`](https://github.com/tc39/proposal-string-replace-all) stage 1（现在是 stage 3） 提案
- [`String.prototype.codePoints`](https://github.com/tc39/proposal-string-prototype-codepoints) stage 1 提案
- [`Array.prototype.last(Item|Index)`](https://github.com/tc39-transfer/proposal-array-last) stage 1 提案
- [`compositeKey` 和 `compositeSymbol` 方法](https://github.com/bmeck/proposal-richer-keys/tree/master/compositeKey) stage 1 提案
- [`Number.fromString`](https://github.com/tc39/proposal-number-fromstring) stage 1 提案
- [`Math.seededPRNG`](https://github.com/tc39/proposal-seeded-random) stage 1 提案
- [`Promise.any` (合并的错误)](https://github.com/tc39/proposal-promise-any) stage 0（现在是stage 3）提案

一些提案的变化很大，`core-js` 也将相应的更新：

- [`String.prototype.matchAll`](https://github.com/tc39/proposal-string-matchall) stage 3 提案
- [Observable](https://github.com/tc39/proposal-observable) stage 1 提案


#### web 标准

许多有用的功能被添加到这个类别中。

最重要的一个是 [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) 和 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)。他是[最受欢迎的功能请求之一](https://github.com/zloirock/core-js/issues/117)。增加 `URL` 和 `URLSearchParams`，并保证他们最大限度的符合规范，保持源代码足够紧凑来支撑任何环境是`core-js@3`开发中[最困难的任务之一](https://github.com/zloirock/core-js/pull/454/files)。

`core-js@3`包函在JavaScript中创建微任务（microtask）的标准方法：[`queueMicrotask`](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)。`core-js@2`提供了 `asap`函数，提供了同样功能的老的提案。`queueMicrotask` 被定义在 HTML 标准中，它已经能够在现代浏览器比如 Chromium 或者 NodeJS 中使用。

另一个受欢迎的功能请求是支持 [DOM集合的 `.forEach` 方法](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)。由于 `core-js` 已经针对DOM集合迭代器做了polyfill，为什么给 `节点列表` 和 [`DOMTokenList`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList) 也增加 `.forEach` 呢？

#### 移除过时的功能：

- `Reflect.enumrate` 因为他已经从标准中移除了
- `System.global` 和 `global` 现在他们已经被 `globalThis` 代替
- `Array.prototype.flatten` 现在被 `Array.prototype.flat` 代替
- `asap` 被 `queueMicrotask` 代替
- `Error.isError` 被撤销很长时间了
- `RegExp.escape` 很久之前被拒绝了
- `Map.prototype.toJSON` 和 `Set.prototype.toJSON` 也是很久前被拒绝了
- 不必要并且被错误添加的迭代器方法：`CSSRuleList`，`MediaList`，`StyleSheetList`。

#### 不再有非标准、非提案的功能

许多年前，我开始写一个库，他是我的JavaScript程序的核心：这个库包函polyfills和一些我需要的工具函数。一段时间后，这个库以 `core-js` 命名发布。我认为现在大多数 `core-js` 用户不需要非标准的 `core-js` 功能，他们大多已经在早期版本移除了，现在是时候将剩余部分从 `core-js` 中移除。从这个版本开始，`core-js` 可以被称为 polyfill了。

### 包、入口和模块名字

一个issue里提了 `core-js` 包的很大（~2MB），有很多重复文件。因为这个原因，`core-js` 分成了3个包：
- [`core-js`](https://www.npmjs.com/package/core-js) 定义全局的polyfills。（~500KB，[压缩并且gzipped处理后 40KB](https://bundlephobia.com/result?p=core-js@3.0.0-beta.20)）
- [`core-js-pure`](https://www.npmjs.com/package/core-js-pure)，提供了不污染全局变量的polyfills。它和 `core-js@2`中的 `core-js/library` 相当。（~440KB）
- [`core-js-bundle`](https://www.npmjs.com/package/core-js-bundle)：定义了全局填充的打包版本

`core-js` 的早期版本中，稳定的ECMAScript功能和 ECMAScript提案的polyfill模块化需要分别加 `es6.` 和 `es7.` 前缀。这是在2014年做的决定，那时将 ES6 之后的所有功能都视为 ES7。在 `core-js@3` 中所有稳定的 ECMAScript 功能都增加 `es.` 前缀，ECMAScript 提案增加 `esnext.` 前缀。

几乎所有的 CommonJS 入口都改变了。`core-js@3` 相比于 `core-js@2` 有更多的入口：这带来的最大限度的灵活性，使你能够仅仅引入你的应用需要的依赖。

这里是一些例子关于如何使用新的入口：

```js
// 使用 `core-js`全部功能打补丁：
import "core-js";
// 仅仅使用稳定的`core-js`功能 - ES 和 web标准：
import "core-js/stable";
// 仅仅使用稳定的 ES 功能
import "core-js/es";

// 如果你想用`Set`的补丁
// 所有 `Set`- ES 提案中，相关的功能：
import "core-js/features/set";
// 稳定的 `Set` ES 功能和来自web标准的功能
// （DOM 集合迭代器）
import "core-js/stable/set";
// 只有 `Set`所需的稳定的 ES 功能
import "core-js/es/set";
// 与上面一致，但不会污染全局命名空间
import Set from "core-js-pure/features/set";
import Set from "core-js-pure/stable/set";
import Set from "core-js-pure/es/set";


// 仅仅为需要的方法打补丁
import "core-js/feature/set/intersection";
import "core-js/stable/queque-microtask";
import "core-js/es/array/from";

// 为 reflect metadata 提案打补丁
import "core-js/proposals/reflect-metadata";
// 为所有 stage 2+ 的提案打补丁
import "core-js/stage/2";
```

### 其他重要的变化

`core-js` polyfill 能够 [配置入侵等级](https://github.com/zloirock/core-js/blob/master/README.md#configurable-level-of-aggressiveness)。如果你认为有些情境 `core-js` 功能检测侵入性太强，原生实现对你来说已经足够，或者一个错误的实现没有被 `core-js` 检测到，你可以修改 `core-js` 的默认行为。

如果无法安装规范的每个细节实现某个功能，`core-js` 增加了一个 `.sham` 属性，例如，IE11中 `Symbol.sham` 是 `true`。

不再有 LiveScript! 当我开始写 `core-js` 时，我主要使用的是 [LiveScript](http://livescript.net/)；一段时间后，我用JavaScript重写了全部的polyfills。在 `core-js@2` 中测试和帮助的工具函数仍然使用 LiveScript：它是非常有趣的像CoffeeScript一样的语言，有强大的语法糖使你能够写非常紧凑的代码，但是它几乎已经死了。除此之外，它也是为 `core-js` 贡献的屏障，因为大多数 `core-js` 用户不知道这个语言。`core-js@3`测试和工具函数使用现代 ES 语法：它将成为为 `core-js` 贡献的好时机🙂。

对于大多数用户，为了优化 `core-js` 导入，我建议使用 [babel](#Babel)。当然，有些情况下 [`core-js-builder`](http://npmjs.com/package/core-js-builder) 仍然有用。现在它支持 `target` 参数，使用带有目标引擎的[`浏览器列表`](https://github.com/browserslist/browserslist) 查询 - 你能够创建一个bundle，仅仅包含目标引擎需要的polyfills。对于这种情况，我做了 [`core-js-compat`](https://www.npmjs.com/package/core-js-compat)，更多关于它的信息，你能够从 [这篇文章的 `@babel/preset-env` 部分](#babelpreset-env)了解到。

---

这仅仅是冰山一角，更多的变化在内部。更多关于 `core-js` 变化可以在 [changelog](https://github.com/zloirock/core-js/blob/master/CHANGELOG.md#300) 中找到。

## Babel

正如上文提到的，`babel` 和 `core-js` 是紧密集成的：`babel` 提供了优化 `core-js` 优化导入的可能性。`core-js@3` 开发中很重要的一部分是改进`core-js`相关的 `babel` 功能（看[这个PR](https://github.com/babel/babel/pull/7646)）。这些变化在 [Babel 7.4.0](https://babeljs.io/blog/2019/03/19/7.4.0) 发布了。

### babel/polyfill

[`@babel/polyfill`](https://babeljs.io/docs/en/next/babel-polyfill.html) 是一个包裹的包，里面仅仅包含 `core-js` 稳定版的引入（在Babel 6 中也包含提案）和 `regenerator-runtime/runtime`，用来转译generators和async函数。这个包没有提供从 `core-js@2` 到 `core-js@3` 平滑升级路径：因为这个原因，决定弃用 `@babel/polyfill` 代之以分别引入需要的`core-js` 和 `regenerator-runtime`。

原来
```js
import "@babel/polyfill";
```

现在使用两行：
```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

别忘记直接安装这两个依赖！
```js
npm i --save core-js regenerator-runtime
```

### @babe/preset-env

[`@babel/preset-env`](https://babeljs.io/docs/en/next/babel-preset-env#usebuiltins) 有两种不同的模式，通过 `useBuiltIns` 选项：`entry` 和 `usage` 优化 `core-js`的导入。

Babel 7.4.0 引入了两种模式的共同更改，以及每种模式的特定的修改。

由于现在 `@babel/preset-env` 支持 `core-js@2` 和 `core-js@3`，因此 `useBuiltIns` 需要新的选项 -- `corejs`，这个选项用来定义使用 `core-js` 的版本（`corejs: 2` or `corejs: 3`）。如果没有设置，`corejs: 2` 是默认值并且会有警告提示。

为了使 babel 支持将来的次要版本中引入的 `core-js` 的新功能，你可以在项目中定义明确的次要版本号。例如，你想使用 `core-js@3.1` 使用这个版本的新特性，你可以设置 `corejs` 选项为 `3.1`：`corejs: '3.1'` 或者 `corejs: {version: '3.1'}`。

`@babel/preset-env` 最重要的一个功能就是提供不同浏览器支持特性的数据来源，用来确定是否需要 `core-js` 填充某些内容。 [`caniuse`](https://caniuse.com/)，[`mdn`](https://developer.mozilla.org/en-US/) 和 [`compat-table`](http://kangax.github.io/compat-table/es6/) 是很好的教育资源，但是并不意味着他们能够作为数据源被开发者使用：只有 `compat-table` 包函好的 ES 相关数据集，它被 `@babel/preset-env` 使用，但是仍有些限制：

- 它包含的数据仅仅关于 ECMAScript 特性和提案，和 web 平台特性例如 `setImmediate` 或者 DOM 集合迭代器没有关系。所以直到现在，`@babel/preset-env`仍然通过 `core-js` 添加全部的 web 平台特性即使他们已经支持了。
- 它他不包含任何浏览器（甚至是严重的）bug信息：例如，上文提到的在Safari 12中 `Array#reverse`，但是 `compat-table` 并没有将它标记为不支持。另一方面，`core-js` 已经修复了这个错误实现，但是因为 `compat-table` 关系，并不能使用它。
- 它仅包函一些基础的、幼稚的测试，没有检查功能在真实环境下是否可以正常工作。例如，老版本Safari的破坏的迭代器没有 `.next` 方法，但是 `compat-table` 表明Safari支持，因为它用 `typeof` 方法检测迭代器方法返回了 `"function"`。一些像 typed arrays 的功能几乎没有覆盖。

- `compat-table` 不是为了向工具提供数据而设计的。我是 `compat-table` 的维护者之一，但是[其他的维护者反对为维护这个功能](https://github.com/kangax/compat-table/pull/1312)。

因为这个原因，我创建了 [`core-js-compat`](https://github.com/zloirock/core-js/tree/master/packages/core-js-compat)：它提供了对于不同浏览器 `core-js` 模块的必要性数据。当使用 `core-js@3` 时，`@babel/preset-env` 将使用新的包取代 `compat-table`。[请帮助我们测试并提供缺少的引擎的数据的映射关系！](https://github.com/zloirock/core-js/blob/master/CONTRIBUTING.md#updating-core-js-compat-data)😊。

在 Babel 7.3 之前，`@babel/preset-env` 有一些与polyfills注入顺序有关的问题。从 7.4.0开始，`@babel/preset-env` 只按推荐顺序增加需要的polyfills。

#### useBuiltIns: entry with corejs: 3

当使用这个选项时，`@babel/preset-env` 代替直接引用 `core-js` 而是引入目标环境特定需要的模块。

在这个变化前，`@babel/preset` 仅替换 `import '@babel/polyfill'` 和 `import 'core-js'`，他们是同义词用来polyfill所有稳定的 JavaScript 特性。

现在 `@babel/polyfill` 弃用了，当 `corejs` 设置为 3 时 `@babel/preset-env` 不会转译他。

`core-js@3` 中等价替换 `@babel/polyfill`是

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

当目标浏览器是 `chrome 72` 时，