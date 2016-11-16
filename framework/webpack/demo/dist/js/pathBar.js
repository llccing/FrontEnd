/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/layers/GraphicsLayer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/graphic\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"./TransCoordinate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/symbols/PictureMarkerSymbol\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/geometry/Point\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function (GraphicsLayer, Graphic, TransCoordinate, PictureMarkerSymbol, Point, $) {
	    var domId,
	        data,
	        len,
	        symbolPic,
	        name,
	        speed = 1,
	        curNum = 0,
	        map,
	        curLayer = new GraphicsLayer(),
	        playTimer;
	    function init(options) {
	        /*
	         *domId:轨迹工具栏渲染的dom节点
	         *data:轨迹点
	         *symbolPic:轨迹点图标
	         *name:对象名称
	         *speed:速度，默认一倍速度,及一次走一个坐标点
	         *len:轨迹点数量
	         *curNum:当前行进的点数
	         */
	        if (options.domId) {
	            domId = options.domId;
	            data = options.data || [];
	            len = data.length;
	            symbolPic = options.symbolPic || 'img/icon-pt.png';
	            name = options.name || '未命名';
	            map = options.map;
	            speed = 1;
	            curNum = 0;
	            map.addLayer(curLayer);
	            //初始化工具栏
	            initBar();
	            //初始化行驶点
	            initCur();
	        } else {
	            console.log("请检查是否传入了轨迹工具栏渲染的dom对象");
	        }
	    };
	    function initBar() {
	        $("#" + domId).css("display", "block");
	        $("#" + domId).html("<div class='pathPanel'>" + "<span class='pathName'>" + name + "</span>" + "<div class='pathPlay pathHover'>播放</div>" + "<div class='pathPause  pathHover'>暂停</div>" + "<div class='pathProcess'>" + "<div class='pathProcessPlay'></div>" + "</div>" + "<div class='pathSpeedUp  pathHover'>加速</div>" + "<div class='pathSpeedSlow  pathHover'>减速</div>" + "<div class='pathClose  pathHover'>关闭</div>" + "<div class='pathTitle'>" + "<span class='pathNumber'>" + curNum + "/" + len + "</span>" + "<span class='pathSpeed'>" + speed + "倍速度</span>" + "</div>" + "</div>");
	        initEvent();
	    };
	    function initCur() {
	        curLayer.clear();
	        var pt1 = TransCoordinate.fromWGS84(data[curNum].lat, data[curNum].lng);
	        var pt = new Point(pt1.x, pt1.y, map.spatialReference);
	        var PointSymbol = new PictureMarkerSymbol(symbolPic, 25, 25);
	        curLayer.add(new Graphic(pt, PointSymbol, data[curNum]));
	    };
	    function initEvent() {
	        //播放
	        $(".pathPlay").click(function () {
	            start();
	        });
	        //暂停
	        $(".pathPause").click(function () {
	            stop();
	        });
	        //加速
	        $(".pathSpeedUp").click(function () {
	            if (speed < len) {
	                speed = speed + 1;
	                $(".pathSpeed").html(speed + "倍速度");
	            }
	        });
	        //减速
	        $(".pathSpeedSlow").click(function () {
	            if (speed > 1) {
	                speed = speed - 1;
	                $(".pathSpeed").html(speed + "倍速度");
	            }
	        });
	        //关闭
	        $(".pathClose").click(function () {
	            closePanel();
	        });
	    };
	    function closePanel() {
	        stop();
	        $("#" + domId).css("display", "none");
	        if (map) {
	            map.removeLayer(curLayer);
	            for (var i = 0; i < map.graphicsLayerIds.length; i++) {
	                var layer = map.getLayer(map.graphicsLayerIds[i]);
	                if (layer.id == "历史轨迹") {
	                    map.removeLayer(layer);
	                }
	            }
	        }
	    }

	    function start() {
	        return playTimer = setInterval(function () {
	            show();
	        }, 1000);
	    }
	    function stop() {
	        playTimer = clearInterval(playTimer);
	    };
	    function show() {
	        if (curNum <= len - 2 * speed) {
	            curNum = curNum + speed;
	            $('.pathProcessPlay').css('width', Math.round((curNum + speed) * 100 / len) + '%');
	            $(".pathNumber").html(curNum + speed + "/" + len);
	            initCur();
	        } else {
	            stop();
	            $('.pathProcessPlay').css('width', '0%');
	            curNum = 0;
	            $(".pathNumber").html(curNum + 1 + "/" + len);
	        }
	    }
	    return {
	        init: init, //初始化
	        closePanel: closePanel //关闭
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);