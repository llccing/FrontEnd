## Set

ES6新提供的数据结构Set。类似数组，但是所有成员都是唯一的，没有重复值。

### Set实例的属性和方法

属性

- Set.prototype.constructor: 构造函数
- Set.prototype.size: 返回实例成员总数

方法

- add(value)：添加值，返回Set结构本身。
- delete(value): 删除某个值，返回一个布尔值，表示删除是否成功。
- has(value): 返回一个布尔值，表示该值是否为Set的成员。
- clear(): 清除所有成员，没有返回值。

遍历方法

- keys()
- values()
- entries()
- forEach()

## WeakSet

> WeakSet结构和Set类似，也是不重复的值的集合。WeakSet和Set的两个区别。
首先，WeakSet的成员只能是对象，而不能是其他类型的值。
其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对改对象的引用，也就是说，如果其他对象
都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在与WeakSet之中。
所以无法引用WeakSet的成员，WeakSet是不可遍历的。


## Map

JavaScript的对象（Object），本质上是键值对的集合（Hash结构），但是传统上只能用字符串当做键。这给它的使用带来了很大的限制。
而Map可以做到用各种类型的值（包括对象）来做键。

属性

- size

方法

- set(key, value) 设置对应的键值，返回Map。若key存在则update，否则新生成该键。
- get(key) 返回对应值，要是不存在，则返回undefined
- has(key) 返回一个布尔值，判断是否存在Map中。
- delete(key) 删除某个键，返回true。删除失败则返回false。
- clear() 清除所有成员没有返回值。

遍历方法

- keys()
- values()
- entries()
- forEach()

## WeakMap

WeakMap结构与Map结构类似，唯一的区别是它只接受对象作为键名（null除外），而且所有键名所指的对象，不计入垃圾回收机制。
