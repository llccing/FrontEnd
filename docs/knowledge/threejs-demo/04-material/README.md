# 材质

简单材质
- MeshBasicMaterial 网格基础材质
- MeshDepthMaterial 网格深度材质
- MeshNormalMaterial 网格法向材质
- MeshFaceMaterial 网格面材质

非简单材质
- MeshLamberMaterial 网格朗伯材质
- MeshPhongMaterial 网格phong式材质
- ShaderMaterial 着色器材质
- LineBasicMaterial 直线基础材质
- LineDashedMaterial 虚线材质


## 材质共有属性
- 基础属性
- 融合属性
- 高级属性

## MeshBasicMaterial
MeshBasicMaterial是一种非常简单的材质，这种材质不考虑光的影响。使用这种材质的网格会被渲染成一些简单的平面多边形，而且可以展示几何体线框。

## MeshDepthMaterial
使用这种材质的物体，其外观不是由光照或某个材质属性决定的；而是由物体到相机的距离决定的。这种材质可以与其他材质结合，从而很容易的创建出逐渐消失的效果。

## 联合材质
MeshDepchMaterial控制渐变
MeshBasicMaterial控制颜色

## MeshNormalMaterial
计算法向颜色，用来设置球体的渐变色。

## MeshFaceMaterial
材质容器，通过MeshFaceMaterial可以为几何体的每个面指定不同的材质。MeshFaceMaterial中可以放MeshBasicMaterial来指定颜色。

## MeshLamberMaterial
用于暗淡、不光亮表面，会对场景中的光源产生反应。

## MeshPhongMaterial
可以创建一种光亮的材质。

## ShaderMaterial 创建自己的着色器
ShaderMaterial是Three.js库中功能最丰富、最复杂的一种材质。通过它，可以使用自己定制的着色器，直接在WebGL中运行。
要使用这个材质，必须传入两个不同的着色器：vertexShader,fragmentShader.

## LineBasicMaterial、LineDashedMaterial两种材质只能应用于特定的几何体：THREE.Line（线段）。
LineBasicMaterial，通过线段的基础材质可以设置线段的颜色、宽度、端点和连接点属性。
LineDashedMaterial，跟LineBasicMaterial的属性一样，但是通过指定短划线和空格的长度，可以创建虚线的效果。


## 总结
- 各种材质有很多共同的属性
- 并不是所有材质都会对场景中的光源做出反应。如果你希望一种材质计算光照的影响，应该使用MeshPhongMaterial或者MeshLamberMaterial.
- 如果要创建一种透明材质，需要设置opacity，transparent=true
- 材质大部分属性可以运行时修改，但是有些属性（side）不可以运行时修改。如果要修改，需要设置needsUpdate为true。
- 可以为一个几何体赋予多种材质，但是这样会复制几何体，从而创建出多个网格。
- THREE.Line几何体不可以使用普通材质覆盖。只能用LineBasicMaterial、LineDashedMaterial。
- 光亮物体可以用MeshPhongMaterial。暗淡物体可以用MeshLamberMaterial。
- 使用dat.GUI来试验各种属性。