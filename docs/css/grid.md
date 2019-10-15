# Grid

## 概述
网格布局是最强大的CSS布局方案。

它将网页分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Grid布局与Flex布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，也存在重大区别，

Flex布局是轴线布局，只能指定“项目”针对轴线的位置，可以看作是一维布局。Grid布局则是将容器划分为“行”和“列”，产生单元格，然后指定“项目所在”的单元格，可以看做是而为布局。Grid布局远比Flex布局强大。

## 基本概念


### 容器和项目

采用网格布局的区域，称为“容器”（container）。 容器内部采用网格定位的子元素，称为“项目”（item）。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```
上面代码段中，最外层div为容器，内层div为项目，p元素是子元素而不是项目。

Grid布局只对项目生效。

### 行和列

容器中，水平区域称为“行”（row），垂直区域称为“列”（column）。

![row and column](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

### 单元格

行和列的交叉区域，称为“单元格”（cell）。
正常情况下，n行和m列会产生n*m个单元格。

### 网格线
划分网格的线，称为“网格线”。水平网格线划分出行，垂直网格线划分出列。

n行有n+1根水平网格线，m列有m+1根垂直网格线。

![row lines and column lines](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)


## 容器属性

Grid布局属性分为两类，根据定义对象的不同分为容器属性和项目属性。

### display


## 参考

- [阮一峰 - Gird网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)