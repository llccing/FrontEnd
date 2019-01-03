# 光源

## question
- Three.js库里有哪些可用的光源？
- 什么时候用什么样的光源？
- 如何调整和配置各种光源的行为？
- 如何创建镜头炫光？

## 光源

### 基础光源
- AmbientLight 环境光
- PointLight 点光源
- SpotLight 聚光灯光源
- DirectionalLight 方向光

### 特殊光源
- HemisphereLight 半球光
- AreaLight 面光源
- LensFlare 镜头炫光

## 知识点
- 配置光源、颜色和阴影不是严谨的科学。需要不断的试验；使用dat.GUI控件可以微调配置。
- 环境光源（AmbientLight）的颜色可以附加到场景中的每一种颜色上。没有位置的概念。通常来柔化硬生生的颜色和阴影。
- 点光源（PointLight）并不生成阴影，而且可以朝所有方向发射光线。类似夜空中的照明弹。
- 聚光灯光源（SpotLight）类似手电筒。发射的光线是锥形，可以配置随着距离增大而变弱。聚光灯光源可以设置为生成阴影。
- 聚光灯光源和方向光源一样，都有一个debug开关，可以用来微调阴影相机的位置。
- 方向光光源（DirectionalLight）可以跟很远地方的光源（太阳）对比。由于距离远，所以其光线是平行的。距离指定目标越远，光强衰减的越多。
- 如果要更加自然的室外效果，可以使用半球光光源（HemisphereLight）。它可以将天空的光照和来自地面的反射光计算在内。
- 平面光光源（AreaLight），需要使用WebGL延迟器（WebGLDeferredRenderer）对象。如果有大量的光源，而且性能有问题就应该使用WebGLDeferredRenderer对象，而不是WebGLRenderer。
- 要实现模拟照片中的炫光效果，可以使用Three.js库中的LensFlare组件。