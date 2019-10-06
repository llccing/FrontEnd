---
title: gzip
date: 2018-03-31 19:53:51
tags: 知识点
---

# gzip

**gzip**是一种文件格式，也是用来压缩、解压文件的应用程序。这个程序是Jean-loup Gailly和Mark Adler创建的，它被用来替代早期Unix系统上的压缩工具，并且计划给GNU（GNU's Not Unix）用，“gzip”中的“g”就是来自GNU。

[[TOC]]

## 工作原理
1. client请求url，并在request header中设置属性accept-encoding: gzip，告知server，我支持gzip，你可以给我传gzip压缩的内容。
2. server收到请求后，判断client是否支持gzip， 如果支持则向client传送压缩过的内容，并且设置response的首部content-encoding为gzip（这里要说明一下，gzip压缩在nginx server需要手动开启）。
3. 浏览器收到压缩内容后，对于使用gzip压缩的资源进行解压操作。

nginx开启压缩选项，将“#”注释去掉即可。

```
	 # gzip_vary on;
	 # gzip_proxied any;
	 # gzip_comp_level 6;
	 # gzip_buffers 16 8k;
	 # gzip_http_version 1.1;
	 # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/java    script;
```
<!-- 
压缩前
![Alt text](http://7xst43.com1.z0.glb.clouddn.com/gzip1.png)

压缩后，压缩后的效果改变明显。
![Alt text](http://7xst43.com1.z0.glb.clouddn.com/gzip2.png) -->

## 参考

- [你真的了解gzip吗](https://zhuanlan.zhihu.com/p/24764131)
- [gzip](https://zh.wikipedia.org/wiki/Gzip)