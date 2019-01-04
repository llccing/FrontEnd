# 学习使用几何体

**常见几何体**
- PlaneGeometry 平面
- CircleGeometry 圆形
- ShapeGeometry 塑形
- CubeGeometry 立方体
- SphereGeometry 球体
- CylinderGeometry 圆柱
- TorusGeometry 圆环
- TorusKnotGeometry 环面纽结
- PolyhedronGeometry 多面体
- IcosahedronGeometry 二十面体
- OctahedronGeometry 八面体
- TetraHedronGeometry 四面体

**复杂几何体**
- ConvexGeometry 凸面体
- LatheGeometry 扫描面
- ExtrudeGeometry 拉伸几何体
- TubeGeometry 管状体
- ParametricGeometry 参数几何体
- TextGeometry 文本几何体

## 二维几何体
planeGeometry, CircleGeometry, ShapeGeometry，这三种几何体可以创建二维网格，但是其他大部分几何体是用来创建三维网格的。

## 总结
- 开始创建几何体时，应该选择合适的材质，不要直接用复杂材质，可以用MeshBasicMaterial并设置wireframe=true，或者MeshNormalMaterial材质，这样可以对几何体的形状有了解。
- 创建二维几何体时，Z轴没有考虑，如果要拥有一个水平的二维图形，需要将网格绕X轴旋转-0.5*PI。
- 如果要旋转二维图形，或者开发一个三维图形（圆柱、管子），记得将材质设置成THREE.DoubleSide，否则几何体的背面或者内部将不可见。