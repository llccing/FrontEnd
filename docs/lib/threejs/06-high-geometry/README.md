# 高级几何体和二元操作
- ConvexGeometry 凸面体
- LatheGeometry 扫描体
- TubeGeometry 管状几何体
- ExtrudeGeometry 拉伸几何体

## ConvexGeometry
通过ConvexGeometry我们可以在一组点外面建立一个凸包。凸包就是包围这组点的最小图形。

## LatheGeometry
通过LatheGeometry可以从一条光滑的曲线开始创建图形。曲线是通过节点定义的，曲线通常被称作样条曲线。当样条曲线绕着一个固定的点旋转时就构成了一个类似花瓶或者铃铛的图形。

## 通过拉伸创建几何体
拉伸THREE.CircleGeometry对象，能够得到类似圆柱体的图形。
拉伸THREE.PlanceGeometry对象，能够得到类似方块的图形。
最通用的拉伸图形方法是使用THREE.ExtrudeGeometry对象。

## ExtrudeGeometry
拉伸几何体，沿Z轴拉伸

## TubeGeometry
沿着三维样条曲线拉伸出一根管子。

## 从SVG拉伸

[将SVG路径转为Three.js图形 https://github.com/asutherland/d3-threeD](https://github.com/asutherland/d3-threeD)

SVG(Scalabel Vector Graphics) 可缩放矢量图，是基于XML标准，用来在网页上创建二维矢量图。

d3-ThreeD库提供transformSVGPathExposed函数，可以将SVG转为Thress.js图形

## ParametricGeometry
通过ParametricGeometry可以创建基于等式的几何体

## TextGeometry 三维文本

## 使用二元操作组合网格


## 总结
- 使用ConvexGeometry、TubeGeometry和LatheGeometry可以创建相当有趣的几何体。
- 将已有的SVG路径转为Three.js路径是可能的。
- 使用ExtrudeGeometry可以轻松的将二维几何体转为三维几何体。
- 使用文本时需要指定字体。
- 通过ThreeBSP可以在网格上应用三种二元操作：union、subtract和intersect.