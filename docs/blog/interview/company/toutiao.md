# 字节跳动

## 金额转换

```js
var str = '10000000';
var reg = /(?=(\B\d{3})+$)/g
console.log(str.match(reg))
console.log(str.replace(reg, ','))
```

[思路](https://juejin.im/post/5abb5b01f265da237f1e5a92)
```js
g是表示全局匹配的修饰符，全局匹配指查找所有匹配而非在找到第一个匹配后停止。
$是表示结尾的量词，如n$，匹配的是任何以n为结尾的字符串。
\d是查找数字的元字符。
n{X}是匹配包含 X 个 n 的序列的字符串的量词。
n+是匹配任何包含至少一个 n 的字符串的量词。
?=n正向预查，用于匹配任何其后紧接指定字符串 n 的字符串。
match() String对象的方法，作用是找到一个或多个正则表达式的匹配。
replace()String对象的方法，作用是替换与正则表达式匹配的子串。
\B是表示匹配非单词边界的元字符，与其互为补集的元字符是\b，表示匹配单词边界。
```

## JS的数据类型

```
6种数据类型
number/string/boolean/undefined/null/object
```

对象类型
```
Array/Function/RegExp/Date
```

[扩展题目](https://juejin.im/post/5b2b0a6051882574de4f3d96)

## JS中基本数据类型和引用类型在内存上有什么区别？

