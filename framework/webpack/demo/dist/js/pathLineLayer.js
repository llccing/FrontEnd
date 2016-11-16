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

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/layers/GraphicsLayer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/graphic\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"./TransCoordinate\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/SpatialReference\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/geometry/Extent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function (declare, GraphicsLayer, Graphic, TransCoordinate, SpatialReference, Extent) {
	    return declare("pathLineLayer", GraphicsLayer, {
	        constructor: function constructor(options) {
	            /*
	             *data:轨迹点
	             */
	            this.data = options.data || [];
	            this.id = "历史轨迹";
	            this.map = options.map || this.getMap();
	            if (options.data.length > 0) {
	                this.showSymbol(options.data);
	            }
	        },
	        showSymbol: function showSymbol(list) {
	            this.clear();
	            var path = [],
	                xmin = 0,
	                ymin = 0,
	                xmax = 0,
	                ymax = 0;
	            for (var i = 0; i < list.length; i++) {
	                var pt = TransCoordinate.fromWGS84(list[i].lat, list[i].lng);
	                path.push([pt.x, pt.y]);
	                if (pt.x > xmax) {
	                    xmax = pt.x;
	                }
	                if (pt.x < xmin || xmin == 0) {
	                    xmin = pt.x;
	                }
	                if (pt.y > ymax) {
	                    ymax = pt.y;
	                }
	                if (pt.y < ymin || ymin == 0) {
	                    ymin = pt.y;
	                }
	            }
	            var line = { geometry: { "paths": [path],
	                    "spatialReference": { "wkid": 2434 } },
	                "symbol": { "color": [0, 24, 113, 232], "width": 1, "type": "esriSLS", "style": "esriSLSSolid" } };
	            this.add(new Graphic(line));
	            console.log(xmin + "," + ymin + "," + xmax + "," + ymax);
	            //地图缩放
	            this.map.setExtent(new Extent(xmin - 10000, ymin - 10000, xmax + 10000, ymax + 10000, new SpatialReference({ wkid: 2434 })));
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);