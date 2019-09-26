# 评论

    没有评论的blog，不是一个好的blog。

当然vuepress是用来做产品使用文档的，而不是blog，所以自身就没有评论交互的基因在，但是这个可以改，已经有人提issue反馈这个问题了。


## 问题/解决

首页本不应该有评论，结果因为我们在layout组件最下方加了Valine组件，所以所有的页面都会有，
然后看了一下其中一个哥们的源码，发现能够读到 ```$page.frontmatter```这个属性，正好首页中有个的配置中有```home=true```，所以加上这个判断就解决了这个问题。

附源码：
```js
<Valine v-if="!$page.frontmatter.home"></Valine>
```

## 参考
Valine，一个新的评论，看着不错，可以试试
[https://segmentfault.com/a/1190000016144076](https://segmentfault.com/a/1190000016144076)


gitment，但是感觉不是很理想，需要登录阻挡了大部分人
[https://hughfenghen.github.io/fe/vuepress-gitment.html#%E6%B3%A8%E5%86%8C-oauth-application](https://hughfenghen.github.io/fe/vuepress-gitment.html#%E6%B3%A8%E5%86%8C-oauth-application)



