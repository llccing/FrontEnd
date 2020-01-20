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



