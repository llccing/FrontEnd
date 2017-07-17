# 前端架构演进

	tips: 前端架构这个单词到底是什么，我迷茫了。

	web front end architecture

	the structure of the web front end

	还是说不要纠结这个问题，又有点庸人自扰了。只记得前端架构不就可以了吗。(!_!)/懊恼

## MVC(Model-View-Controller)

- View(视图): 用户界面

- Controller(控制器)：业务逻辑

- model(模型)：数据保存

各部分通信方式：

![igm](./imgs/architecture/mvc1.png)

## MVP(Model-View-Presenter)

MVP将Controller改名为Presenter，同时改变了通信方向。

![mvp](./imgs/architecture/mvp.png)

1. 各部分的通信都是双向的。
2. View与model不发生联系，通过Presenter传递。
3. View非常薄，不部署业务逻辑，称为被动视图（Passive View），即没有任何主动性，而presenter非常厚，所有逻辑都部署在那里。


## MVVM(Model-ViewModel-View)

MVVM模式将presenter改名为ViewModel，基本上与MVP模式完全一致。

![mvvm](./imgs/architecture/mvvm.png)

唯一区别是，他用了双向数据绑定（data-binding）:View的变动，自动反应到ViewModel，反之亦然。










## words

	domain model
	
	你以为是，域名模型，错，是业务模型。(a_a)/啊

## 资料

[后MVC时代的前端架构](http://www.tych.io/tech/2017/02/17/frontend-architecture.html)

[程序员必知之前端演进史](https://linux.cn/article-6672-1.html)

[MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

[前端编程方法和框架的演进](https://taijiweb.github.io/2016/06/29/框架的演进/)