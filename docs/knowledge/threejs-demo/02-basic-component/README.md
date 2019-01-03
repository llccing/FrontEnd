# 基本组件

## Scene（场景）对象最重要的函数、属性总结
- add(object)
- children
- getChildByName(name)
- remove(object)
- traverse(function)
- fog
- overrideMaterial

## 知识点
- 场景是Three.js库中的主要容器，你可以将你想要渲染的对象添加到场景中。
- 场景并没有很多特殊的选项和属性。它最重要的功能是允许你添加对象，移除对象，以及处理场景的children属性。
- 可以通过配置fog对象为场景添加fog属性。
- 几何体和网格关系密切。
- Three.js库提供了很多标准几何体。
- 可以编程控制mesh的position、rotation和scale属性。
- 通过translate属性，可以相对当前位置移动网格。
- 渲染场景需要一个相机，Three.js库里有两种相机：透视相机和正投影相机。
- 正投影相机以相同的尺寸渲染所有对象，而不考虑对象与相机间的距离。