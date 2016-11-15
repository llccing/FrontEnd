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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * 登录界面
	 * 宋晓倩
	 * 2016/6/6.
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"md5\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	    return {
	        init: init
	    };
	    function init() {
	        sessionStorage.URL = 'http://' + location.host + location.pathname.substring(0, location.pathname.indexOf("login.html")) + 'api';
	        //sessionStorage.URL = 'http://10.27.7.161:8080/ycsf/api';
	        //sessionStorage.URL = 'http://192.168.0.47:8080/ycsf/api';
	        sessionStorage.URLYCGRID = 'http://10.27.7.161:8080/yc-grid-service/api';

	        inputSize();
	        $('#box').show();
	        if (localStorage.USER_ID) {
	            $('#user_id').val(localStorage.USER_ID);
	            $('#pwd').focus();
	        } else {
	            $('#user_id').focus();
	        }
	        $(document).keydown(function (event) {
	            if (event.keyCode == 13) {
	                $('#loginBtn').click();
	            }
	        });
	        // 登录请求
	        $('#loginBtn').click(function () {
	            login();
	        });
	    }

	    function login() {
	        var userId = $('#user_id').val(),
	            pwd = hex_md5($('#pwd').val());
	        if (!userId) {
	            $('#confirm').text('请输入登录用户名');
	            $('#user_id').focus();
	            return false;
	        }
	        if (!$('#pwd').val() || !pwd) {
	            $('#confirm').text('');
	            $('#psconfirm').text('请输入登录密码');
	            $('#pwd').focus();
	            return false;
	        }
	        var data = {
	            userId: userId,
	            pwd: pwd
	        };
	        $.ajax({
	            type: 'POST',
	            url: sessionStorage.URL + '/user/login',
	            contentType: 'application/json',
	            data: JSON.stringify(data),
	            dataType: 'json',
	            success: function success(data) {
	                var result = data.data;
	                if (result.result == '0') {
	                    sessionStorage.USER_NAME = result.userName;
	                    sessionStorage.XZBM = result.xzbm;
	                    localStorage.USER_ID = userId;
	                    sessionStorage.LOGIN = 'OK';
	                    location.href = 'index.html';
	                } else if (result.result == '1') {
	                    $('#error').text(result.msg);
	                } else if (result.result == '2') {
	                    $('#psconfirm').text('');
	                    $('#error').text(result.msg);
	                }
	            }
	        });
	    }

	    // 定义输入框的大小
	    function inputSize() {
	        var width = $(window).width(),
	            height = $(window).height();
	        $('#box').css({
	            'top': height * 0.18 + 'px',
	            'left': width * 0.592 + 'px'
	        });
	        $('#title').css({
	            'font-size': width * 0.028 + 'px'
	        });
	        $('#loginBox').css({
	            'width': width * 0.23 + 'px',
	            'height': height * 0.402 + 'px',
	            'padding-top': height * 0.026 + 'px',
	            'padding-left': width * 0.02 + 'px'
	        });

	        $('input').css({
	            'width': width * 0.2 + 'px',
	            'height': height * 0.069 + 'px',
	            'margin-bottom': height * 0.026 + 'px',
	            'font-size': height * 0.023 + 'px'
	        });
	        $('#loginBtn').css({
	            'width': width * 0.2 + 10 + 'px',
	            'height': height * 0.084 + 'px',
	            'margin-top': height * 0.025 + 'px',
	            'font-size': height * 0.031 + 'px'
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);