# 粒子和粒子系统

## question

- 使用ParticleBasicMaterial（基础粒子材质）创建和设计粒子
- 使用ParticleSystem（粒子系统）创建粒子集合。
- 使用已有的几何体创建粒子系统。
- 让粒子和粒子系统动起来。
- 用纹理为粒子造型。
- 使用ParticleCanvasMaterial在画布上为粒子造型。

## 总结
- 如果使用CanvasRenderer类，那么你可以直接使用THREE.Particle对象。
- 如果使用WebGLRenderer,则不能使用THREE.Particle对象，但你可以用THREE.Sprite对象来创建一个粒子。
- 如果你想创建大量粒子，并共享一个材质，那么应该使用THREE.ParticleSystem对象。
- 你可以很容易让粒子动起来，改变他们的位置即可。
- 通过Map属性，你可以使用图片或者HTML5画布来格式化粒子。
- 你也可以使用THREE.Sprite类来为三维场景创建一种贴图对象。

