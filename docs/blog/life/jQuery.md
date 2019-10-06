---
title: jQuery实践
date: 2016-10-25 20:44:22
tags: 知识点
---

# jQuery实践

## input的change事件

有个这样的一个需求，表格中有许多要输入的input，input有长度的控制，和数字控制。

开始想到的做法是用jQuery valudate，一个表单验证插件，后台考虑到表格中所有的input都要进行控制，而jQuery validate需要绑定id，或者每个input加上相应的类来控制，就会变得非常麻烦，所以就想到用each或者map遍历table中的每个input，这样就可以统一的加上长度和数字控制。

还有一个问题就是数字的验证，原先就是验证下是不是number类型，后来考虑到可能会有负数、小数出现，所以就想到了正则表达式，Google一下，[正则实数](https://blog.csdn.net/fwj380891124/article/details/9017619)。

那么什么时候触发事件去判断是否符合实数要求呢，参考jQuery validate，觉得可以将事件触发绑定到input的change事件中。

## [实践出真知](https://jsfiddle.net/59afa0hL/3/)


## 参考资料
- [js常用正则](http://blog.csdn.net/fwj380891124/article/details/9017619)
