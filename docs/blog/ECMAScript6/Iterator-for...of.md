### Iterator(遍历器)

JavaScript原有的表示集合的数据结构，有Array和Object，ES6又添加了Map和Set

任何数据结构只要部署了Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator的作用有三个：

- 为各种数据结构，提供一个统一的、简便的访问接口。
- 使得数据结构的成员能够按某种次序排列。
- ES6创造了一种遍历命令for...of循环，Iterator接口主要供for...of消费。


> 暂时没有看出实用性