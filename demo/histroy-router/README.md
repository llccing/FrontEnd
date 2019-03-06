# histroy-router


如果使用history模式的路由，那么需要修改nginx的配置。
```nginx
location / {
  try_files $uri $uri/ /index.html;
}

```

这样会导致没有404页面，要解决这个问题，需要修改项目的router配置
```
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }
  ]
})

```
增加一个notFoundComponent的404页面即可。
