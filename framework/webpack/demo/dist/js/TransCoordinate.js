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

	/**
	 * author: hyl
	 * createtime: 2015/11/2 19:56
	 * description:
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/_base/lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/_base/array\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/Deferred\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/when\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/promise/all\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"esri/request\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function (lang, array, Deferred, when, all, esriLang, esriRequest) {
	    var mo = {
	        PI: 3.14159265358979324,
	        x_pi: 3.14159265358979324 * 3000.0 / 180.0
	    };
	    mo.fromBd09to54 = function (x, y) {
	        var lonlat = [];
	        //BD09toGCJ-02
	        var gcj_lonlat = this.bd_decrypt(x, y);
	        //GCJ-02toWGS84
	        var wgs84_lonlat = this.gcj_decrypt(gcj_lonlat.lat, gcj_lonlat.lon);
	        //wgs84to54
	        lonlat = this.fromWGS84(wgs84_lonlat.lat, wgs84_lonlat.lon);
	        return lonlat;
	    }, mo.fromWGS84 = function ($LAT, $LON) {
	        //宜昌
	        var $PROJECTION_PARAM_A = 6378245.0;
	        var $PROJECTION_PARAM_F = 0.00335232986925914;
	        var $PROJECTION_PARAM_CM = 111.00;
	        var $PROJECTION_PARAM_FN = 0;
	        var $PROJECTION_PARAM_FE = 500000.0;
	        var $PROJECTION_PARAM_DEVIATION_X = -7.3;
	        var $PROJECTION_PARAM_DEVIATION_Y = -49.6;

	        var $xy = this.getGaussProjectCoordinate($LAT, $LON, $PROJECTION_PARAM_CM, $PROJECTION_PARAM_A, $PROJECTION_PARAM_F, $PROJECTION_PARAM_FE, $PROJECTION_PARAM_FN);
	        var $x = $xy.x;
	        var $y = $xy.y;
	        $x = $x + $PROJECTION_PARAM_DEVIATION_X;
	        $y = $y + $PROJECTION_PARAM_DEVIATION_Y;
	        return { 'x': $y, 'y': $x };
	    };

	    mo.getGaussProjectCoordinate = function getGaussProjectCoordinate($B, $L, $L0, $a, $f, $FE, $FN) {
	        var $PI = 3.1415926535898;
	        $L0 = $L0 * $PI / 180.0;
	        $B = $B * $PI / 180.0;
	        $L = $L * $PI / 180.0;
	        var $e2 = 2.0 * $f - $f * $f;
	        var $ee = $e2 / (1.0 - $e2);
	        var $T = Math.tan($B) * Math.tan($B);
	        var $C = Math.pow($ee, 2.0) * Math.pow(Math.cos($B), 2.0);
	        var $A = ($L - $L0) * Math.cos($B);
	        var $M1 = (1.0 - $e2 / 4.0 - 3.0 * Math.pow($e2, 2.0) / 64.0 - 5.0 * Math.pow($e2, 3.0) / 256.0) * $B;
	        var $M2 = (3.0 * $e2 / 8.0 + 3.0 * Math.pow($e2, 2.0) / 32.0 + 45.0 * Math.pow($e2, 3.0) / 1024.0) * Math.sin(2.0 * $B);
	        var $M3 = (15.0 * Math.pow($e2, 2.0) / 256.0 + 45.0 * Math.pow($e2, 3.0) / 1024.0) * Math.sin(4.0 * $B);
	        var $M4 = 35.0 * Math.pow($e2, 3.0) / 3072.0 * Math.sin(6.0 * $B);
	        var $M = $a * ($M1 - $M2 + $M3 - $M4);
	        var $N = $a / Math.sqrt(1.0 - $e2 * Math.pow(Math.sin($B), 2.0));
	        var $X = $M + $N * Math.tan($B) * (Math.pow($A, 2.0) / 2.0 + (5.0 - $T + 9.0 * $C + 4.0 * Math.pow($C, 2.0)) * Math.pow($A, 4.0) / 24.0) + (61.0 - 58.0 * $T + Math.pow($T, 2.0) + 270.0 * $C - 330.0 * $T * $C) * Math.pow($A, 6.0) / 720.0;
	        var $Y = $N * ($A + (1.0 - $T + $C) * Math.pow($A, 3.0) / 6.0 + (5.0 - 18.0 * $T + Math.pow($T, 2.0) + 14.0 * $C - 58.0 * $T * $C) * Math.pow($A, 5.0) / 120.0);
	        $X = $X + $FN;
	        $Y = $Y + $FE;
	        return { 'x': $X, 'y': $Y };
	    };

	    mo.delta = function (lat, lon) {
	        // Krasovsky 1940
	        //
	        // a = 6378245.0, 1/f = 298.3
	        // b = a * (1 - f)
	        // ee = (a^2 - b^2) / a^2;
	        var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
	        var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
	        var dLat = this.transformLat(lon - 105.0, lat - 35.0);
	        var dLon = this.transformLon(lon - 105.0, lat - 35.0);
	        var radLat = lat / 180.0 * this.PI;
	        var magic = Math.sin(radLat);
	        magic = 1 - ee * magic * magic;
	        var sqrtMagic = Math.sqrt(magic);
	        dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * this.PI);
	        dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * this.PI);
	        return { 'lat': dLat, 'lon': dLon };
	    },
	    //WGS-84 to GCJ-02
	    mo.gcj_encrypt = function (wgsLat, wgsLon) {
	        if (this.outOfChina(wgsLat, wgsLon)) return { 'lat': wgsLat, 'lon': wgsLon };

	        var d = this.delta(wgsLat, wgsLon);
	        return { 'lat': wgsLat + d.lat, 'lon': wgsLon + d.lon };
	    },
	    //GCJ-02 to WGS-84
	    mo.gcj_decrypt = function (gcjLat, gcjLon) {
	        if (this.outOfChina(gcjLat, gcjLon)) return { 'lat': gcjLat, 'lon': gcjLon };

	        var d = this.delta(gcjLat, gcjLon);
	        return { 'lat': gcjLat - d.lat, 'lon': gcjLon - d.lon };
	    },
	    //GCJ-02 to WGS-84 exactly
	    mo.gcj_decrypt_exact = function (gcjLat, gcjLon) {
	        var initDelta = 0.01;
	        var threshold = 0.000000001;
	        var dLat = initDelta,
	            dLon = initDelta;
	        var mLat = gcjLat - dLat,
	            mLon = gcjLon - dLon;
	        var pLat = gcjLat + dLat,
	            pLon = gcjLon + dLon;
	        var wgsLat,
	            wgsLon,
	            i = 0;
	        while (1) {
	            wgsLat = (mLat + pLat) / 2;
	            wgsLon = (mLon + pLon) / 2;
	            var tmp = this.gcj_encrypt(wgsLat, wgsLon);
	            dLat = tmp.lat - gcjLat;
	            dLon = tmp.lon - gcjLon;
	            if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break;

	            if (dLat > 0) pLat = wgsLat;else mLat = wgsLat;
	            if (dLon > 0) pLon = wgsLon;else mLon = wgsLon;

	            if (++i > 10000) break;
	        }
	        //console.log(i);
	        return { 'lat': wgsLat, 'lon': wgsLon };
	    },
	    //GCJ-02 to BD-09
	    mo.bd_encrypt = function (gcjLat, gcjLon) {
	        var x = gcjLon,
	            y = gcjLat;
	        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
	        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
	        bdLon = z * Math.cos(theta) + 0.0065;
	        bdLat = z * Math.sin(theta) + 0.006;
	        return { 'lat': bdLat, 'lon': bdLon };
	    },
	    //BD-09 to GCJ-02
	    mo.bd_decrypt = function (bdLat, bdLon) {
	        var x = bdLon - 0.0065,
	            y = bdLat - 0.006;
	        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
	        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
	        var gcjLon = z * Math.cos(theta);
	        var gcjLat = z * Math.sin(theta);
	        return { 'lat': gcjLat, 'lon': gcjLon };
	    },
	    //WGS-84 to Web mercator
	    //mercatorLat -> y mercatorLon -> x
	    mo.mercator_encrypt = function (wgsLat, wgsLon) {
	        var x = wgsLon * 20037508.34 / 180.;
	        var y = Math.log(Math.tan((90. + wgsLat) * this.PI / 360.)) / (this.PI / 180.);
	        y = y * 20037508.34 / 180.;
	        return { 'lat': y, 'lon': x };
	        /*
	         if ((Math.abs(wgsLon) > 180 || Math.abs(wgsLat) > 90))
	         return null;
	         var x = 6378137.0 * wgsLon * 0.017453292519943295;
	         var a = wgsLat * 0.017453292519943295;
	         var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
	         return {'lat' : y, 'lon' : x};
	         //*/
	    },
	    // Web mercator to WGS-84
	    // mercatorLat -> y mercatorLon -> x
	    mo.mercator_decrypt = function (mercatorLat, mercatorLon) {
	        var x = mercatorLon / 20037508.34 * 180.;
	        var y = mercatorLat / 20037508.34 * 180.;
	        y = 180 / this.PI * (2 * Math.atan(Math.exp(y * this.PI / 180.)) - this.PI / 2);
	        return { 'lat': y, 'lon': x };
	        /*
	         if (Math.abs(mercatorLon) < 180 && Math.abs(mercatorLat) < 90)
	         return null;
	         if ((Math.abs(mercatorLon) > 20037508.3427892) || (Math.abs(mercatorLat) > 20037508.3427892))
	         return null;
	         var a = mercatorLon / 6378137.0 * 57.295779513082323;
	         var x = a - (Math.floor(((a + 180.0) / 360.0)) * 360.0);
	         var y = (1.5707963267948966 - (2.0 * Math.atan(Math.exp((-1.0 * mercatorLat) / 6378137.0)))) * 57.295779513082323;
	         return {'lat' : y, 'lon' : x};
	         //*/
	    },
	    // two point's distance
	    mo.distance = function (latA, lonA, latB, lonB) {
	        var earthR = 6371000.;
	        var x = Math.cos(latA * this.PI / 180.) * Math.cos(latB * this.PI / 180.) * Math.cos((lonA - lonB) * this.PI / 180);
	        var y = Math.sin(latA * this.PI / 180.) * Math.sin(latB * this.PI / 180.);
	        var s = x + y;
	        if (s > 1) s = 1;
	        if (s < -1) s = -1;
	        var alpha = Math.acos(s);
	        var distance = alpha * earthR;
	        return distance;
	    }, mo.outOfChina = function (lat, lon) {
	        if (lon < 72.004 || lon > 137.8347) return true;
	        if (lat < 0.8293 || lat > 55.8271) return true;
	        return false;
	    }, mo.transformLat = function (x, y) {
	        var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
	        ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
	        ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;
	        ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;
	        return ret;
	    }, mo.transformLon = function (x, y) {
	        var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
	        ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
	        ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;
	        ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;
	        return ret;
	    };

	    return mo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);