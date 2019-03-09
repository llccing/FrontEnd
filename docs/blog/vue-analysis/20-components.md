# 组件化

## createComponent

## patch

## 合并配置

### 总结

生命周期函数会被合并为数组。

这种合并思想值得借鉴，本身有一套默认配置，合并传入的配置，达到定制化的目的。

## 生命周期

放一张经典的生命周期图
![经典图](http://qiniu.llccing.cn//FrontEnd/blog/vue/lifecycle.png)

### beforeCreate & created

_init
src/core/instance/init.js
```js
Vue.prototype._init = function (options?: Object) {
  // ...
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')
  // ...
}
```

### beforeMount && mounted

mountComponent
src/core/instance/lifecycle.js
```js
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  // ...
  callHook(vm, 'beforeMount')

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name
      const id = vm._uid
      const startTag = `vue-perf-start:${id}`
      const endTag = `vue-perf-end:${id}`

      mark(startTag)
      const vnode = vm._render()
      mark(endTag)
      measure(`vue ${name} render`, startTag, endTag)

      mark(startTag)
      vm._update(vnode, hydrating)
      mark(endTag)
      measure(`vue ${name} patch`, startTag, endTag)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

子组件的mounted回调，在这个方法里。

**对于同步渲染的子组件而言，mounted钩子函数的执行顺序也是先子后父。** ，mixin时，会先执行原来的钩子，后执行mixin的钩子。

```js
const componentVNodeHooks = {
  // ...
  insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
    // ...
  },
}

```

### beforeUpdate & updated

### beforeDestroy & destroyed

destroyed钩子函数执行顺序也是先子后父，和mounted过程一致。

### activated & deactivated
activated 和 deactivated 钩子函数是专门为keep-alive组件定制的钩子。

### 总结

created钩子中能够拿到data、props、methods属性，mounted钩子中能够访问到DOM，destroyed钩子中可以做一些定时器销毁工作。

## 组件注册

### 全局注册
```js
Vue.component('my-component',{

})
```

### 局部注册
```js
import HelloWorld from './components/HelloWorld';

export default {
  components: {
    HelloWorld,
  }
}

```

### 总结
通用基础组件一般全局注册，业务组件局部注册。

## 异步组件

### 普通异步组件
```js
Vue.components('async-example', function(resole, reject) {
  // 特殊的 require 语法告诉webpack
  // 自动将编译后的代码分割成不同的块
  // 这些块将通过 Ajax 请求自动下载
  require(['./my-async-component'], resolve)
})

```
webpack 2+ 支持了异步加载的语法糖：() => import('./my-async-component')


### 此外还支持两种方式，```Promise```创建组件
```js
Vue.component(
  'async-webpack-example',
  () => import('./my-async-component')
)

```

### 高级异步组件
```js
const AsyncComp = () => ({
  // 需要加载的组件 promise
  component: import('./async-component.vue'),
  // 加载中应当渲染的组件 同步载入进来的
  loading: LoadingComp,
  // 出错时渲染的组件 
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。 默认: 200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000,
})

Vue.component('async-example', AsyncComp)
```

### 总结
异步组件实现有3种方式，高级异步组件实现了loading、resolve、reject、timeout4种状态。
异步组件的实现本质是2次渲染，除了0 delay的高级异步组件会渲染loading外，
其他第一次都是渲染生成注释节点，当异步组件获取成功后，再通过```forceRender```强制重新渲染