(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{435:function(a,e,t){"use strict";t.r(e);var r=t(14),i=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#材质"}},[a._v("#")]),a._v(" 材质")]),a._v(" "),e("p",[a._v("简单材质")]),a._v(" "),e("ul",[e("li",[a._v("MeshBasicMaterial 网格基础材质")]),a._v(" "),e("li",[a._v("MeshDepthMaterial 网格深度材质")]),a._v(" "),e("li",[a._v("MeshNormalMaterial 网格法向材质")]),a._v(" "),e("li",[a._v("MeshFaceMaterial 网格面材质")])]),a._v(" "),e("p",[a._v("非简单材质")]),a._v(" "),e("ul",[e("li",[a._v("MeshLamberMaterial 网格朗伯材质")]),a._v(" "),e("li",[a._v("MeshPhongMaterial 网格phong式材质")]),a._v(" "),e("li",[a._v("ShaderMaterial 着色器材质")]),a._v(" "),e("li",[a._v("LineBasicMaterial 直线基础材质")]),a._v(" "),e("li",[a._v("LineDashedMaterial 虚线材质")])]),a._v(" "),e("h2",{attrs:{id:"材质共有属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#材质共有属性"}},[a._v("#")]),a._v(" 材质共有属性")]),a._v(" "),e("ul",[e("li",[a._v("基础属性")]),a._v(" "),e("li",[a._v("融合属性")]),a._v(" "),e("li",[a._v("高级属性")])]),a._v(" "),e("h2",{attrs:{id:"meshbasicmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshbasicmaterial"}},[a._v("#")]),a._v(" MeshBasicMaterial")]),a._v(" "),e("p",[a._v("MeshBasicMaterial是一种非常简单的材质，这种材质不考虑光的影响。使用这种材质的网格会被渲染成一些简单的平面多边形，而且可以展示几何体线框。")]),a._v(" "),e("h2",{attrs:{id:"meshdepthmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshdepthmaterial"}},[a._v("#")]),a._v(" MeshDepthMaterial")]),a._v(" "),e("p",[a._v("使用这种材质的物体，其外观不是由光照或某个材质属性决定的；而是由物体到相机的距离决定的。这种材质可以与其他材质结合，从而很容易的创建出逐渐消失的效果。")]),a._v(" "),e("h2",{attrs:{id:"联合材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合材质"}},[a._v("#")]),a._v(" 联合材质")]),a._v(" "),e("p",[a._v("MeshDepchMaterial控制渐变\nMeshBasicMaterial控制颜色")]),a._v(" "),e("h2",{attrs:{id:"meshnormalmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshnormalmaterial"}},[a._v("#")]),a._v(" MeshNormalMaterial")]),a._v(" "),e("p",[a._v("计算法向颜色，用来设置球体的渐变色。")]),a._v(" "),e("h2",{attrs:{id:"meshfacematerial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshfacematerial"}},[a._v("#")]),a._v(" MeshFaceMaterial")]),a._v(" "),e("p",[a._v("材质容器，通过MeshFaceMaterial可以为几何体的每个面指定不同的材质。MeshFaceMaterial中可以放MeshBasicMaterial来指定颜色。")]),a._v(" "),e("h2",{attrs:{id:"meshlambermaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshlambermaterial"}},[a._v("#")]),a._v(" MeshLamberMaterial")]),a._v(" "),e("p",[a._v("用于暗淡、不光亮表面，会对场景中的光源产生反应。")]),a._v(" "),e("h2",{attrs:{id:"meshphongmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshphongmaterial"}},[a._v("#")]),a._v(" MeshPhongMaterial")]),a._v(" "),e("p",[a._v("可以创建一种光亮的材质。")]),a._v(" "),e("h2",{attrs:{id:"shadermaterial-创建自己的着色器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shadermaterial-创建自己的着色器"}},[a._v("#")]),a._v(" ShaderMaterial 创建自己的着色器")]),a._v(" "),e("p",[a._v("ShaderMaterial是Three.js库中功能最丰富、最复杂的一种材质。通过它，可以使用自己定制的着色器，直接在WebGL中运行。\n要使用这个材质，必须传入两个不同的着色器：vertexShader,fragmentShader.")]),a._v(" "),e("h2",{attrs:{id:"linebasicmaterial、linedashedmaterial两种材质只能应用于特定的几何体-three-line-线段-。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linebasicmaterial、linedashedmaterial两种材质只能应用于特定的几何体-three-line-线段-。"}},[a._v("#")]),a._v(" LineBasicMaterial、LineDashedMaterial两种材质只能应用于特定的几何体：THREE.Line（线段）。")]),a._v(" "),e("p",[a._v("LineBasicMaterial，通过线段的基础材质可以设置线段的颜色、宽度、端点和连接点属性。\nLineDashedMaterial，跟LineBasicMaterial的属性一样，但是通过指定短划线和空格的长度，可以创建虚线的效果。")]),a._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("ul",[e("li",[a._v("各种材质有很多共同的属性")]),a._v(" "),e("li",[a._v("并不是所有材质都会对场景中的光源做出反应。如果你希望一种材质计算光照的影响，应该使用MeshPhongMaterial或者MeshLamberMaterial.")]),a._v(" "),e("li",[a._v("如果要创建一种透明材质，需要设置opacity，transparent=true")]),a._v(" "),e("li",[a._v("材质大部分属性可以运行时修改，但是有些属性（side）不可以运行时修改。如果要修改，需要设置needsUpdate为true。")]),a._v(" "),e("li",[a._v("可以为一个几何体赋予多种材质，但是这样会复制几何体，从而创建出多个网格。")]),a._v(" "),e("li",[a._v("THREE.Line几何体不可以使用普通材质覆盖。只能用LineBasicMaterial、LineDashedMaterial。")]),a._v(" "),e("li",[a._v("光亮物体可以用MeshPhongMaterial。暗淡物体可以用MeshLamberMaterial。")]),a._v(" "),e("li",[a._v("使用dat.GUI来试验各种属性。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);