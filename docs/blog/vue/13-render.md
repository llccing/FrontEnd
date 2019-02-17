# render


## template => render

template
```js
<div id="app">
  {{ message }}
</div>

```

render
```js
render: function(createElement){
  return createElement('div', {
    attrs: {
      id: 'app',
    },
  }, this.message)
}
```

```js
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated

```

vm._c，这个方法是在template编译成render函数时使用
vm.$createElement是用户手写render方法使用的。

## 总结
vm.render最终都是执行createElement方法返回vnode（虚拟Node）。2.0的一个显著的特点就是Virtual DOM。