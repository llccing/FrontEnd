# createElement

## 分析路径

鉴于比较复杂，先记下来路径，慢慢理解。
```js
src/core/vdom/create-elemenet.js

src/core/vdom/helpers/normalzie-children.js
```


## 总结
createElement创建VNode，每个VNode有children，children的每个元素也是VNode，这样就形成了VNode Tree
vm._render() 创建了VNode。
vm._update() 则是将VNode Tree 转为 DOM Tree。