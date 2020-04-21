# 对比默认构建包大小

## 创建步骤

2.0 项目创建
```js
vue create vue2-demo
```

3.0 项目创建过程
```js
vue create vue-next-demo
vue add vue-next
```

## 包含内容及配置

- vue-router
- vuex
- stylus
- eslint

## 结果

构建后的包没有很大变化，到 vue-next 总的大小减少了 16KB。

- **vue-next**

```js
 DONE  Compiled successfully in 7503ms                                                  22:38:14

  File                                 Size               Gzipped

  dist/js/chunk-vendors.5b454022.js    109.67 KiB         39.89 KiB
  dist/js/app.1a76046a.js              6.57 KiB           2.40 KiB
  dist/js/about.91f22f07.js            0.34 KiB           0.26 KiB
  dist/css/app.a7efc3c7.css            0.33 KiB           0.23 KiB

  Images and other types of assets omitted.
```

- **vue2**

```js
 DONE  Compiled successfully in 6145ms                                                  22:43:21

  File                                 Size               Gzipped

  dist/js/chunk-vendors.19ef9041.js    126.08 KiB         43.68 KiB
  dist/js/app.c9ab8607.js              6.36 KiB           2.29 KiB
  dist/js/about.1599ab9e.js            0.44 KiB           0.31 KiB
  dist/css/app.a7efc3c7.css            0.33 KiB           0.23 KiB

  Images and other types of assets omitted.
```
