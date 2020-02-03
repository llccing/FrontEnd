# vue3

## 跟着文章去实践

### [Vue3 尝鲜](https://juejin.im/post/5e13ecbe6fb9a04846508ab2) 

[https://github.com/llccing-demo/vue-next/tree/master/demo](https://github.com/llccing-demo/vue-next/tree/master/demo) 01-07 为 Vue 3 尝鲜的实践

1. 通过yarn dev构建好 vue.global.js 文件
2. 通过http-server或者类似工具，启动一个server环境。
3. 注意 index.js 中的内容和文章有出入。
index.js中的内容，
```js
const { reactive } = Vue
const App = {
  template: `
    <div class="container">
      {{message}}
    </div>
  `,
  setup() {
    const state = reactive({message: 'Hello World'})
    return {
      ...state
    }
  }
}

// 这和文章有出入
Vue.createApp(App).mount('#app')
```

### [Vue3体验卡](https://juejin.im/post/5e1451385188253ab54142e9)

[https://github.com/llccing-demo/vue-next/tree/master/demo](https://github.com/llccing-demo/vue-next/tree/master/demo) 08-12 为 Vue3体验卡~ 相关的内容