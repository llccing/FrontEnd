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
	 * 统计报表
	 * 刘春峰
	 * 2016-6-24
	 */
	'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"common\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap-datetimepicker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap-datetimepicker-zh-CN\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap-table\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap-table-zh-CN\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"jqpagination\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, echarts, common) {
	    var URL = {
	        // 机构类型
	        GET_DEPT_TYPE: sessionStorage.URL + '/fwjg/fwjgtheme',
	        // 人员类型
	        GET_PERSON_TYPE: sessionStorage.URL + '/wjpt/themeRylx',
	        // 司法局
	        GET_SFJ: sessionStorage.URL + '/total/themeSfj',
	        // 综合查询 机构查询
	        DEPT_SEARCH: sessionStorage.URL + '/total/MechanismInfo',
	        // 综合查询 人员查询
	        PERSON_INFO: sessionStorage.URL + '/total/PeopleInfo',
	        // 初始化法务指导中心 工作站
	        GET_FWZDZX: sessionStorage.URL + '/total/themeZdCenterAndFwStation',
	        // 工作台账的查询
	        WORK_SEARCH: sessionStorage.URL + '/total/Workplace',
	        // 台账 人民调解 双击时取甲乙方数据
	        GET_JYF: sessionStorage.URL + '/rmtj/listParty',
	        // 统计报表 点击统计
	        TOTAL: sessionStorage.URL + '/total/num',
	        // 统计报表 网格统计 区县初始化
	        GRID_TOP: sessionStorage.URL + '/wjwg/topGrid',
	        // 统计报表 网格统计 街办及以下初始化
	        GRID_CHILDREN: sessionStorage.URL + '/wjwg/childrenGrid',
	        // 统计报表 走访统计 表格的双击事件，查询走访的人的信息
	        VISIT_PERSON: sessionStorage.URL + '/total/sqjzOrAzbj'
	    };

	    var model = {},
	        chart = {};

	    // 模块初始化
	    model.init = function () {
	        // 初始化机构类型
	        common.ajaxGet(URL.GET_DEPT_TYPE).done(function (data) {
	            $('#deptType').append(model.getOps(data.data));
	        });

	        // 初始化人员类型
	        $.getJSON(URL.GET_PERSON_TYPE, function (data) {
	            $('#perosnType').html(model.getOps(data.data));
	        });

	        // 初始化司法局
	        common.ajaxGet(URL.GET_SFJ).done(function (data) {
	            var options = '',
	                arr = data.data;
	            for (var i = 0; i < arr.length; i++) {
	                options += '<option value=' + arr[i].bm + '>' + arr[i].name + '</option>';
	            }
	            $('#sfj').html(options);
	            $('#w_district').html('<option value="">全部</option>' + options); // 初始化工作台帐的区
	            $('#c_district').html('<option value="">全部</option>' + options); // 报表的区
	            model.getZdzx($('#sfj').val());
	            model.getZdzxWork($('#w_district').val());
	            model.getZdzxReport($('#c_district').val());
	        });

	        $('#sfj').on('change', function () {
	            model.getZdzx($('#sfj').val());
	        });
	        $('#w_district').on('change', function () {
	            model.getZdzxWork($('#w_district').val());
	        });
	        $('#c_district').on('change', function () {
	            model.getZdzxReport($('#c_district').val());
	        });
	        $('#c_zdzx').on('change', function () {
	            model.getCommunity($('#c_zdzx').val());
	        });

	        // 台账初始化，显示当前年月
	        var Today = new Date(),
	            ty = Today.getFullYear(),
	            tm = Today.getMonth() + 1;

	        for (var i = 0; i < 10; i++) {
	            $('#year').append('<option>' + parseInt(ty - i) + '</option>');
	        }
	        for (var _i = 1; _i < 13; _i++) {
	            $('#month').append('<option>' + _i + '</option>');
	        }
	        $('#year').val(ty);
	        $('#month').val(tm);

	        // 日期插件初始化
	        $('.form_date').datetimepicker({
	            language: 'zh-CN',
	            weekStart: 1,
	            todayBtn: 1,
	            autoclose: true,
	            minView: 2,
	            forceParse: 0,
	            pickerPosition: 'bottom-left'
	        });

	        // 工作台账中，默认选中第一个radio
	        $('#radio input[name="type"]').get(0).checked = true;
	    };

	    // 格式化时间
	    model.dateFormatter = function (value) {
	        return strFormat(value, true);
	    };

	    /**
	     * 生成select的option字符串
	     * @param data 数组
	     * @param prop key和value的名称
	     * @returns {string}
	     */
	    model.getOps = function (data, prop) {
	        var ops = '';
	        if (!prop) {
	            for (var i = 0, l = data.length; i < l; i++) {
	                ops += '<option value="' + data[i].dmbm + '">' + data[i].dmmc + '</option>';
	            }
	        } else {
	            for (var _i2 = 0, _l = data.length; _i2 < _l; _i2++) {
	                ops += '<option value="' + data[_i2][prop[0]] + '">' + data[_i2][prop[1]] + '</option>';
	            }
	        }

	        return ops;
	    };

	    // 动态改变页面宽度
	    model.changeChildPageWidth = function () {
	        var width = window.innerWidth - $('.sidebar').width() - 7;
	        $('.statistical-report,.nav-second').width(width);
	        $('#countResult').width(width - $('.count').width() - 50);
	        //改变图表外层容器的宽，图表会根据外层容器宽度自适应
	        $('#chart,#chartWjwg1,#chartWjwg2,#chartWjwg3,#chartWjwg4').width($('#countResult').width());
	    };

	    // 初始化法务指导中心
	    model.getZdzx = function (bm) {
	        if (bm === "") {
	            $('#zdzx').html('<option value="">全部</option>');
	            return;
	        }

	        common.ajaxGet(URL.GET_FWZDZX, { bm: bm }).done(function (data) {
	            var options = '<option value="">全部</option>';
	            options += model.getOps(data.data, ['bm', 'name']);
	            $('#zdzx').html(options);
	            model.getGzz($('#zdzx').val());
	        });
	        $('#zdzx').on('change', function () {
	            model.getGzz($('#zdzx').val());
	        });
	    };

	    // 初始化法务工作站
	    model.getGzz = function (bm) {
	        if (bm === "") {
	            $('#gzz').html('<option value="">全部</option>');
	            return;
	        }
	        common.ajaxGet(URL.GET_FWZDZX, { bm: bm }).done(function (data) {
	            var options = '<option value="">全部</option>';
	            options += model.getOps(data.data, ['bm', 'name']);
	            $('#gzz').html(options);
	        });
	    };

	    // 综合查询 机构查询
	    model.deptSearch = function (_data) {
	        common.initTables({
	            elementId: 'deptTable',
	            url: URL.DEPT_SEARCH,
	            queryParams: _data,
	            responseHandler: function responseHandler(e) {
	                if (e.data) {
	                    return { rows: e.data.data, total: e.data.total };
	                } else {
	                    return { row: [], total: 0 };
	                }
	            },
	            columns: [{
	                field: 'rn',
	                title: '序号',
	                align: 'center'
	            }, {
	                field: 'jgmc',
	                title: '机构名称',
	                align: 'center'
	            }, {
	                field: 'jglx1',
	                title: '机构类型',
	                align: 'center'
	            }, {
	                field: 'lxr',
	                title: '联系人',
	                align: 'center'
	            }, {
	                field: 'lxdh',
	                title: '联系电话',
	                align: 'center'
	            }, {
	                field: 'fzr',
	                title: '负责人',
	                align: 'center'
	            }, {
	                field: 'dz',
	                title: '地址',
	                align: 'center'
	            }, {
	                field: 'ywfw',
	                title: '承办业务范围',
	                align: 'center'
	            }]
	        });
	    };

	    // 综合查询 人员查询 按钮点击事件
	    model.personSearch = function (_data) {
	        common.initTables({
	            elementId: 'peopleTable',
	            url: URL.PERSON_INFO,
	            queryParams: _data,
	            responseHandler: function responseHandler(e) {
	                if (e.data) {
	                    return { rows: e.data.data, total: e.data.total };
	                } else {
	                    return { row: [], total: 0 };
	                }
	            },
	            columns: [{
	                field: 'rn',
	                title: '序号',
	                align: 'center'
	            }, {
	                field: 'name',
	                title: '姓名',
	                align: 'center'
	            }, {
	                field: 'xb',
	                title: '性别',
	                align: 'center'
	            }, {
	                field: 'sfzhm',
	                title: '身份证号',
	                align: 'center'
	            }, {
	                field: 'lxdh',
	                title: '联系电话',
	                align: 'center'
	            }, {
	                field: 'jtzz',
	                title: '家庭住址',
	                align: 'center'
	            }, {
	                field: 'dmmc',
	                title: '人员类型',
	                align: 'center'
	            }, {
	                field: 'flgw',
	                title: '所属法务工作站',
	                align: 'center'
	            }]
	        });
	    };

	    // 工作台账 初始化指导中心下拉列表
	    model.getZdzxWork = function (bm) {
	        if (bm === "") {
	            $('#w_zdzx').html('<option value="">全部</option>');
	            return;
	        }
	        common.ajaxGet(URL.GET_FWZDZX, { bm: bm }).done(function (data) {
	            var options = '<option value="">全部</option>';
	            options += model.getOps(data.data, ['bm', 'name']);
	            $('#w_zdzx').html(options);
	        });
	    };

	    // 工作台帐 查询
	    model.workSearch = function (_data, type) {
	        switch (type) {
	            case '1':
	                // 人民调解
	                common.initTables({
	                    elementId: 'workTableRmtj',
	                    url: URL.WORK_SEARCH,
	                    queryParams: _data,
	                    responseHandler: function responseHandler(e) {
	                        if (e.data) {
	                            return { rows: e.data.data, total: e.data.total };
	                        } else {
	                            return { row: [], total: 0 };
	                        }
	                    },
	                    columns: [{
	                        field: 'rn',
	                        title: '序号',
	                        align: 'center',
	                        width: '100px'
	                    }, {
	                        field: 'jflx1',
	                        title: '纠纷类型',
	                        align: 'center',
	                        width: '200px'
	                    }, {
	                        field: 'jfms',
	                        title: '纠纷事项',
	                        align: 'center'
	                    }, {
	                        field: 'tcjg',
	                        title: '调解结果',
	                        align: 'center'
	                    }, {
	                        field: 'tjsj',
	                        title: '调解时间',
	                        align: 'center',
	                        width: '200px',
	                        formatter: model.dateFormatter
	                    }, {
	                        field: 'tjyxm',
	                        title: '调解人',
	                        width: '100px',
	                        align: 'center'
	                    }, {
	                        field: 'hf',
	                        title: '回访',
	                        visible: false,
	                        align: 'center'
	                    }],

	                    onDblClickRow: function onDblClickRow(row, element) {
	                        //    let tableTempelate =
	                        //        '<table class="table table-bordered" id="rmtjDetails"><tbody>' +
	                        //        '<tr><td class="td-length">序号</td><td>' + row.rn + '</td><td>纠纷类型</td><td>' + strFormat(row.jflx1) + '</td></tr>' +
	                        //        '<tr><td>调解人</td><td>' + strFormat(row.tjyxm) + '</td><td>调解时间</td><td>' + strFormat(row.tjsj, true) + '</td></tr>';

	                        var tableTempelate = '<table class="table table-bordered" id="rmtjDetails"><tbody>\n                                <tr><td class="td-length">\u5E8F\u53F7</td><td>' + row.rn + '</td><td>\u7EA0\u7EB7\u7C7B\u578B</td><td>' + strFormat(row.jflx1) + '</td></tr>\n                                <tr><td>\u8C03\u89E3\u4EBA</td><td>' + strFormat(row.tjyxm) + '</td><td>\u8C03\u89E3\u65F6\u95F4</td><td>' + strFormat(row.tjsj, true) + '</td></tr>';

	                        // 台账 人民调解 双击时取甲乙方数据
	                        $.ajax({
	                            type: 'GET',
	                            url: URL.GET_JYF,
	                            contentType: 'text/html;charset=utf-8',
	                            dataType: 'json',
	                            data: { jlbh: row.jlbh },
	                            success: function success(data) {
	                                var arr = data.data;
	                                var tempelateF = '',
	                                    // 甲方
	                                tempelateS = '',
	                                    // 乙方
	                                indexF = 1,
	                                    // 甲方计数
	                                indexS = 1; // 乙方计数
	                                for (var i = 0, l = arr.length; i < l; i++) {
	                                    if (arr[i].rylx === '甲方') {
	                                        tempelateF += '<tr> <td rowspan="4">甲方当事人' + indexF + '</td><td>姓名</td><td colspan="2">' + strFormat(arr[i].name) + '</td></tr>' + '<tr><td>联系电话</td> <td colspan="2">' + strFormat(arr[i].lxdh) + '</td> </tr> ' + '<tr> <td>家庭住址</td> <td colspan="2">' + strFormat(arr[i].jtzz) + '</td> </tr> ' + '<tr> <td>工作单位</td> <td colspan="2">' + strFormat(arr[i].gzdw) + '</td> </tr>';
	                                        indexF++;
	                                        continue;
	                                    }
	                                    if (arr[i].rylx === '乙方') {
	                                        tempelateS += '<tr> <td rowspan="4">乙方当事人' + indexS + '</td><td>姓名</td><td colspan="2">' + strFormat(arr[i].name) + '</td></tr>' + '<tr><td>联系电话</td> <td colspan="2">' + strFormat(arr[i].lxdh) + '</td> </tr> ' + '<tr><td>家庭住址</td> <td colspan="2">' + strFormat(arr[i].jtzz) + '</td> </tr> ' + '<tr><td>工作单位</td> <td colspan="2">' + strFormat(arr[i].gzdw) + '</td> </tr>';
	                                        indexS++;
	                                    }
	                                }
	                                var tableFooter = '<tr><td>纠纷事项</td><td colspan="3">' + strFormat(row.jfms) + '</td></tr>' + '<tr><td>调解结果</td><td colspan="3">' + strFormat(row.tcjg) + '</td></tr></tbody></table>';
	                                tableTempelate += tempelateF;
	                                tableTempelate += tempelateS;
	                                tableTempelate += tableFooter;
	                                $('#infoContent').empty().html(tableTempelate);
	                                model.showDialog('dialog');
	                            }
	                        });
	                    }
	                });
	                $('#wrapFlzx').hide();
	                $('#wrapFzxc').hide();
	                $('#wrapRmtj').show();
	                $('#workTableRmtj').show();
	                break;
	            case '2':
	                // 法律咨询
	                common.initTables({
	                    elementId: 'workTableFlzx',
	                    url: URL.WORK_SEARCH,
	                    queryParams: _data,
	                    responseHandler: function responseHandler(e) {
	                        if (e.data) {
	                            return { rows: e.data.data, total: e.data.total };
	                        } else {
	                            return { row: [], total: 0 };
	                        }
	                    },
	                    columns: [{
	                        field: 'rn',
	                        title: '序号',
	                        align: 'center'
	                    }, {
	                        field: 'zxrxm',
	                        title: '咨询人姓名',
	                        align: 'center'
	                    }, {
	                        field: 'zxrxb',
	                        title: '性别',
	                        align: 'center'
	                    }, {
	                        field: 'zxrsfzh',
	                        title: '身份证号',
	                        align: 'center'
	                    }, {
	                        field: 'zxrlxdh',
	                        title: '联系电话',
	                        align: 'center'
	                    }, {
	                        field: 'zxrjzd',
	                        title: '居住地',
	                        align: 'center'
	                    }, {
	                        field: 'zxfscontent',
	                        title: '咨询方式',
	                        align: 'center'
	                    }, {
	                        field: 'zxnr',
	                        title: '咨询内容',
	                        align: 'center'
	                    }, {
	                        field: 'zxsj',
	                        title: '咨询时间',
	                        align: 'center',
	                        formatter: model.dateFormatter
	                    }, {
	                        field: 'zxsxcontent',
	                        title: '咨询事项',
	                        align: 'center'
	                    }, {
	                        field: 'jd',
	                        title: '解答',
	                        align: 'center'
	                    }, {
	                        field: 'jdsj',
	                        title: '解答时间',
	                        align: 'center',
	                        formatter: model.dateFormatter
	                    }],
	                    onDblClickRow: function onDblClickRow(row, element) {
	                        var tableTempelate = '<table class="table table-bordered" id="rmtjDetails"><tbody>' + '<tr><td class="td-length">序号</td><td>' + row.rn + '</td><td>咨询方式</td><td>' + strFormat(row.zxfscontent) + '</td></tr>' + '<tr><td>咨询人姓名</td><td>' + strFormat(row.zxrxm) + '</td><td>咨询时间</td><td>' + strFormat(row.zxsj, true) + '</td></tr>' + '<tr><td>性别</td><td>' + strFormat(row.zxrxb) + '</td><td>解答时间</td><td>' + strFormat(row.jdsj, true) + '</td></tr>' + '<tr><td>联系电话</td><td>' + strFormat(row.zxrlxdh) + '</td><td>身份证号</td><td>' + strFormat(row.zxrsfzh) + '</td></tr>' + '<tr><td>咨询事项</td><td>' + strFormat(row.zxsxcontent) + '</td><td>居住地</td><td>' + strFormat(row.zxrjzd) + '</td></tr>';

	                        var tableFooter = '<tr><td>咨询内容</td><td colspan="3">' + strFormat(row.zxnr) + '</td></tr>' + '<tr><td>解答</td><td colspan="3">' + strFormat(row.jd) + '</td></tr></tbody></table>';
	                        tableTempelate += tableFooter;
	                        $('#infoContent').empty().html(tableTempelate);
	                        model.showDialog('dialog');
	                    }
	                });
	                $('#wrapFzxc').hide();
	                $('#wrapRmtj').hide();
	                $('#wrapFlzx').show();
	                $('#workTableFlzx').show();
	                break;
	            case '3':
	                // 法治宣传
	                common.initTables({
	                    elementId: 'workTableFzxc',
	                    url: URL.WORK_SEARCH,
	                    queryParams: _data,
	                    responseHandler: function responseHandler(e) {
	                        if (e.data) {
	                            return { rows: e.data.data, total: e.data.total };
	                        } else {
	                            return { row: [], total: 0 };
	                        }
	                    },
	                    columns: [{
	                        field: 'rn',
	                        title: '序号',
	                        align: 'center'
	                    }, {
	                        field: 'hdzzjg',
	                        title: '组织机构',
	                        align: 'center'
	                    }, {
	                        field: 'hdsj',
	                        title: '活动时间',
	                        align: 'center',
	                        formatter: model.dateFormatter
	                    }, {
	                        field: 'hddd',
	                        title: '活动地点',
	                        align: 'center'
	                    }, {
	                        field: 'cjrs',
	                        title: '参加人数',
	                        align: 'center'
	                    }, {
	                        field: 'hdxsjzt',
	                        title: '活动形式及主题',
	                        align: 'center'
	                    }, {
	                        field: 'hdnr',
	                        title: '活动内容',
	                        align: 'center'
	                    }, {
	                        field: 'ffxczl',
	                        title: '发放材料',
	                        align: 'center'
	                    }],
	                    onDblClickRow: function onDblClickRow(row, element) {
	                        var tableTempelate = '<table class="table table-bordered" id="rmtjDetails"><tbody>' + '<tr><td class="td-length">序号</td><td>' + row.rn + '</td><td>活动时间</td><td>' + strFormat(row.hdsj, true) + '</td></tr>' + '<tr><td>组织机构</td><td>' + strFormat(row.hdzzjg) + '</td><td>活动地点</td><td>' + strFormat(row.hddd) + '</td></tr>' + '<tr><td>参加人数</td><td>' + strFormat(row.cjrs) + '</td><td>发放材料</td><td>' + strFormat(row.ffxczl) + '</td></tr>';

	                        var tableFooter = '<tr><td>活动形式及主题</td><td colspan="3">' + strFormat(row.hdxsjzt) + '</td></tr>' + '<tr><td>活动内容</td><td colspan="3">' + strFormat(row.hdnr) + '</td></tr></tbody></table>';
	                        tableTempelate += tableFooter;
	                        $('#infoContent').empty().html(tableTempelate);
	                        model.showDialog('dialog');
	                    }
	                });
	                $('#wrapRmtj').hide();
	                $('#wrapFlzx').hide();
	                $('#wrapFzxc').show();
	                $('#workTableFzxc').show();
	                break;
	        }
	    };

	    // 工作台账 双击表格显示对话框
	    model.showDialog = function (dialogId) {
	        $('#shadow').show(); //显示遮罩层
	        $('#' + dialogId).show();
	    };

	    // 统计报表 街办下拉列表初始化
	    model.getZdzxReport = function (bm) {
	        if (bm === '') {
	            $('#c_zdzx').html('<option value="">全部</option>');
	            return;
	        }
	        common.ajaxGet(URL.GET_FWZDZX, { bm: bm }).done(function (data) {
	            var options = '<option value="">全部</option>';
	            options += model.getOps(data.data, ['bm', 'name']);
	            $('#c_zdzx').html(options);
	        });
	    };

	    // 统计报表 社区下拉框 初始化
	    model.getCommunity = function (bm) {
	        if (bm === '') {
	            $('#c_community').html('<option value="">全部</option>');
	            return;
	        }
	        common.ajaxGet(URL.GET_FWZDZX, { bm: bm }).done(function (data) {
	            var options = '<option value="">全部</option>';
	            options += model.getOps(data.data, ['bm', 'name']);
	            $('#c_community').html(options);
	        });
	    };

	    // 统计报表 统计查询
	    model.reportSearch = function (_data, type) {
	        switch (type) {
	            case '1':
	                // 法治宣传
	                common.ajaxGet(URL.TOTAL, _data).done(function (data) {
	                    var arr = data.data;
	                    if (arr.length > 0) {
	                        model.initTableFzxc(arr);
	                    } else {
	                        $('#reportTableFzxc tbody').html('<tr><td colspan="4">无记录</td></tr>');
	                    }

	                    $('#reportTableFzxc').show().siblings().hide();
	                    $('.fr-wrapper').show().siblings().hide();
	                    $('#rightMenu1').show();
	                    $('#rightMenu1 li:first').addClass('active').siblings().removeClass('active');
	                });
	                break;
	            case '2':
	                // 人民调解
	                common.ajaxGet(URL.TOTAL, _data).done(function (data) {
	                    var arr = data.data;
	                    if (arr.length > 0) {
	                        model.initTableRmtj(arr);
	                    } else {
	                        $('#reportTableRmtj tbody').html('<tr><td colspan="5">无记录</td></tr>');
	                    }
	                    $('.fr-wrapper').show().siblings().hide();
	                    $('#reportTableRmtj').show().siblings().hide();
	                    $('#rightMenu1').show();
	                    $('#rightMenu1 li:first').addClass('active').siblings().removeClass('active');
	                });
	                break;
	            case '3':
	                // 网格统计
	                model.areaTable();
	                $('#chartWrap').hide();
	                $('.wgtj').show().siblings().hide();
	                $('#pre').show();
	                $('#rightMenu2 li:first').addClass('active').siblings().removeClass('active');
	                break;
	            case '4':
	                // 走访
	                common.ajaxGet(URL.TOTAL, _data).done(function (data) {
	                    var arr = data.data;
	                    if (arr.length > 0) {
	                        model.initTableZF(arr);
	                    } else {
	                        $('#reportTableZF tbody').html('<tr><td colspan="5">无记录</td></tr>');
	                    }
	                    $('.fr-wrapper').show().siblings().hide();
	                    $('#reportTableZF').show().siblings().hide();
	                    $('#rightMenu1').show();
	                    $('#rightMenu1 li:first').addClass('active').siblings().removeClass('active');
	                });
	                break;
	        }
	    };

	    // 统计报表 网格统计 区县
	    model.areaTable = function () {
	        common.ajaxGet(URL.GRID_TOP).done(function (data) {
	            var area = data.data,
	                length = area.length,
	                trs = '';
	            for (var i = 0; i < length; i++) {
	                trs += '<tr >' + '<td class="tdJson">' + JSON.stringify(area[i]) + '</td>' + '<td class="tdFirst">' + area[i].name + '</td>' + '<td>' + area[i].sumNetGrid + '</td>' + '<td>' + area[i].sumLawConsulting + '</td>' + '<td>' + area[i].sumRmtj + '</td>' + '<td>' + area[i].sumFzxc + '</td>' + '<td>' + area[i].sumSqjz + '</td>' + '<td>' + area[i].sumAzbj + '</td>' + '</tr>';
	            }
	            $('#areaTable tbody').html('').append(trs);
	            $('#areaTable').show().siblings('table').hide();
	            $('#areaTable tbody tr').on('click', function (event) {
	                console.group('统计报表，箭头函数调试 this 的作用域');
	                $('#areaTable').hide();
	                $('#pre').css({ background: '#09C', cursor: 'pointer' });
	                model.streetTable(event.currentTarget);
	            });
	            chart.intiTableWgtj(data.data, 1);
	        });
	    };

	    // 统计报表 网格统计 街办
	    model.streetTable = function (that) {
	        var json = $(that).children('.tdJson').html(),
	            data = JSON.parse(json),
	            x = data.x,
	            y = data.y,
	            bmt = data.bm;

	        common.ajaxGet(URL.GRID_CHILDREN, { bm: bmt }).done(function (data) {
	            var street = data.data,
	                length = street.length,
	                trs = '';
	            for (var i = 0; i < length; i++) {
	                trs += '<tr>' + '<td class="tdJson">' + JSON.stringify(street[i]) + '</td>' + '<td class="tdFirst">' + street[i].name + '</td>' + '<td>' + street[i].sumNetGrid + '</td>' + '<td>' + street[i].sumLawConsulting + '</td>' + '<td>' + street[i].sumRmtj + '</td>' + '<td>' + street[i].sumFzxc + '</td>' + '<td>' + street[i].sumSqjz + '</td>' + '<td>' + street[i].sumAzbj + '</td>' + '</tr>';
	            }
	            $('#streetTable tbody').html('').append(trs);
	            $('#streetTable').show().siblings('table').hide();
	            $('#streetTable tbody tr').off('click').on('click', function (event) {
	                $('#streetTable').hide();
	                model.communityTable(event.currentTarget);
	            });
	            chart.intiTableWgtj(data.data, 2);
	        });
	    };

	    // 统计报表 网格统计 社区
	    model.communityTable = function (that) {
	        var json = $(that).children('.tdJson').html(),
	            data = JSON.parse(json),
	            x = data.x,
	            y = data.y,
	            bm = data.bm;
	        common.ajaxGet(URL.GRID_CHILDREN, { bm: bm }).done(function (data) {
	            var community = data.data,
	                length = community.length,
	                trs = '';
	            for (var i = 0; i < length; i++) {
	                trs += '<tr>' + '<td class="tdJson">' + JSON.stringify(community[i]) + '</td>' + '<td class="tdFirst">' + community[i].name + '</td>' + '<td>' + community[i].sumNetGrid + '</td>' + '<td>' + community[i].sumLawConsulting + '</td>' + '<td>' + community[i].sumRmtj + '</td>' + '<td>' + community[i].sumFzxc + '</td>' + '<td>' + community[i].sumSqjz + '</td>' + '<td>' + community[i].sumAzbj + '</td>' + '</tr>';
	            }
	            $('#communityTable tbody').html('').append(trs);
	            $('#communityTable').show().siblings('table').hide();
	            $('#communityTable tbody tr').off('click').on('click', function (event) {
	                $('#communityTable').hide();
	                model.gridTable(event.currentTarget);
	            });
	            chart.intiTableWgtj(data.data, 3);
	        });
	    };

	    // 统计报表 网格统计 社区
	    model.gridTable = function (that) {
	        var json = $(that).children('.tdJson').html(),
	            data = JSON.parse(json),
	            x = data.x,
	            y = data.y,
	            bm = data.bm;

	        common.ajaxGet(URL.GRID_CHILDREN, { bm: bm }).done(function (data) {
	            var grid = data.data,
	                length = grid.length,
	                trs = '';
	            for (var i = 0; i < length; i++) {
	                trs += '<tr>' + '<td class="tdJson">' + JSON.stringify(grid[i]) + '</td>' + '<td class="tdFirst">' + grid[i].name + '</td>' + '<td>' + grid[i].sumLawConsulting + '</td>' + '<td>' + grid[i].sumRmtj + '</td>' + '<td>' + grid[i].sumFzxc + '</td>' + '<td>' + grid[i].sumSqjz + '</td>' + '<td>' + grid[i].sumAzbj + '</td>' + '</tr>';
	            }
	            $('#gridTable tbody').html('').append(trs);
	            $('#gridTable').show().siblings('table').hide();
	            chart.intiTableWgtj(data.data, 4);
	        });
	    };

	    // 统计报表 统计类型为 法治宣传 时，初始化表格
	    model.initTableFzxc = function (arr) {
	        var district = [],
	            //区或者
	        nums = [[], [], []],
	            each = {};
	        for (var i = 0, len = arr.length; i < len; i++) {
	            if (i % 2 == 0) {
	                // 取出所有区或者街办
	                district.push(arr[i].name);
	            } else {
	                // 区或者街办的信息
	                each = arr[i][0];
	                nums[0].push(each.cjrs);
	                nums[1].push(each.ffxczl);
	                nums[2].push(each.sum);
	            }
	        }
	        // 初始化表格
	        var trs = '';
	        for (var _i3 = 0; _i3 < district.length; _i3++) {
	            trs += '<tr><td>' + district[_i3] + '</td>' + '<td>' + nums[2][_i3] + '</td>' + // 次数
	            '<td>' + nums[0][_i3] + '</td>' + // 参数人次
	            '<td>' + nums[1][_i3] + '</td></tr>'; // 发放材料
	        }
	        $('#reportTableFzxc tbody').html(trs);
	        chart.initChart('chart', ['次数', '参与人次', '发放材料'], ['#4F81BD', '#C0504D', '#9BBB59'], district, nums);
	    };

	    // 统计报表 统计类型为 人民调解 时，初始化表格
	    model.initTableRmtj = function (arr) {
	        var district = [],
	            // 区或者街道等
	        nums = [[], [], [], []],
	            each = {};
	        for (var i = 0, len = arr.length; i < len; i += 4) {
	            district.push(arr[i].name);
	            nums[0].push(arr[i + 1][0].sum);
	            nums[1].push(arr[i + 2][0].sum);
	            nums[2].push(arr[i + 3][0].sum);
	            nums[3].push(chart.getProcessRate(parseInt(arr[i + 1][0].sum), parseInt(arr[i + 3][0].sum)));
	        }
	        // 初始化表格
	        var trs = '';
	        for (var _i4 = 0; _i4 < district.length; _i4++) {
	            trs += '<tr><td>' + district[_i4] + '</td>' + // 区域
	            '<td>' + nums[0][_i4] + '</td>' + // 总数
	            '<td>' + nums[1][_i4] + '</td>' + // 未处理
	            '<td>' + nums[2][_i4] + '</td>' + // 已处理
	            '<td>' + nums[3][_i4] + '</td></tr>'; // 处理率
	        }
	        $('#reportTableRmtj tbody').html(trs);
	        chart.initChart('chart', ['总数', '未处理', '已处理', '处理率（%）'], ['#4F81BD', '#C0504D', '#9BBB59', '#d6d6d6'], district, nums);
	    };

	    // 统计报表 统计类型为 走访统计 时，初始化表格
	    model.initTableZF = function (arr) {
	        var district = [],
	            // 区或者街道等
	        bms = [],
	            // 编码
	        nums = [[], [], [], []],
	            each = {};
	        for (var i = 0, len = arr.length; i < len; i += 4) {
	            district.push(arr[i].name);
	            bms.push(arr[i].bm);
	            nums[0].push(arr[i + 1][0].sum); //总数
	            nums[1].push(arr[i + 2][0].sum); //未走访
	            nums[2].push(arr[i + 3][0].sum); //已走访
	            //走访率
	            nums[3].push(chart.getProcessRate(parseInt(arr[i + 1][0].sum), parseInt(arr[i + 3][0].sum)));
	        }
	        // 初始化表格
	        var tr1 = '',
	            tr2 = '',
	            totalNum = 0,
	            notVisitNum = 0,
	            hadVisitNum = 0,
	            visitRate = 0,
	            bm = void 0;
	        for (var _i5 = 0; _i5 < district.length; _i5++) {
	            tr1 += '<tr><td data-info="' + bms[_i5] + '">' + district[_i5] + '</td>' + // 区域
	            '<td>' + nums[0][_i5] + '</td>' + // 总数
	            '<td>' + nums[1][_i5] + '</td>' + // 未走访
	            '<td>' + nums[2][_i5] + '</td>' + // 已走访
	            '<td>' + nums[3][_i5] + '</td></tr>'; // 走访率
	            totalNum += parseInt(nums[0][_i5]);
	            notVisitNum += parseInt(nums[1][_i5]);
	            hadVisitNum += parseInt(nums[2][_i5]);
	            visitRate += parseFloat(nums[3][_i5]);
	        }
	        if ($('#c_district').val() !== '') {
	            //市不为空
	            if ($('#c_zdzx').val() !== '') {
	                // 街办不为空
	                bm = $('#c_zdzx').val();
	            } else {
	                bm = $('#c_district').val();
	            }
	        } else {
	            bm = '4205';
	        }
	        tr2 += '<tr><td data-info="' + bm + '">全部</td><td>' + totalNum + '</td><td>' + notVisitNum + '</td><td>' + hadVisitNum + '</td><td>' + visitRate + '</td></tr>';
	        tr2 += tr1;
	        $('#reportTableZF tbody').html(tr2);
	        chart.initChart('chart', ['总数', '未走访', '已走访', '走访率（%）'], ['#4F81BD', '#C0504D', '#9BBB59', '#d6d6d6'], district, nums);
	    };

	    // 统计报表 走访统计 生成走访人的信息列表
	    model.initVisitHadTable = function (tableId, data) {
	        common.initTables({
	            elementId: tableId,
	            url: URL.VISIT_PERSON,
	            queryParams: data,
	            responseHandler: function responseHandler(e) {
	                if (e.data) {
	                    return { rows: e.data.data, total: e.data.total };
	                } else {
	                    return { row: [], total: 0 };
	                }
	            },
	            columns: [{
	                field: 'rn',
	                title: '序号'
	            }, {
	                field: 'xm',
	                title: '姓名'
	            }, {
	                field: 'xb',
	                title: '性别'
	            }, {
	                field: 'sfzhm',
	                title: '身份证号码'
	            }, {
	                field: 'csrq',
	                title: '出生日期'
	            }, {
	                field: 'dah',
	                title: '档案号'
	            }, {
	                field: 'hjszd',
	                title: '户籍所在地'
	            }]
	        });
	    };

	    /**
	     * 网格统计 解析后台数据、生成图表
	     * @param arr 后台返回数据
	     * @param level 1,2,3,4 县、街办、社区、网格，4级
	     */
	    chart.intiTableWgtj = function (arr, level) {
	        var area = [],
	            nums = [];
	        if (level !== 4) {
	            nums = [[], [], [], [], [], []];
	            for (var i = 0, l = arr.length; i < l; i++) {
	                area.push(arr[i].name);
	                nums[0].push(arr[i].sumNetGrid);
	                nums[1].push(arr[i].sumLawConsulting);
	                nums[2].push(arr[i].sumRmtj);
	                nums[3].push(arr[i].sumFzxc);
	                nums[4].push(arr[i].sumSqjz);
	                nums[5].push(arr[i].sumAzbj);
	            }

	            chart.initChart('chartWjwg' + level, ['网格', '法律咨询', '人民调解', '法制宣传', '社区矫正', '安置帮教'], [], area, nums);
	        } else {
	            nums = [[], [], [], [], []];
	            for (var _i6 = 0, _l2 = arr.length; _i6 < _l2; _i6++) {
	                area.push(arr[_i6].name);
	                nums[0].push(arr[_i6].sumLawConsulting);
	                nums[1].push(arr[_i6].sumRmtj);
	                nums[2].push(arr[_i6].sumFzxc);
	                nums[3].push(arr[_i6].sumSqjz);
	                nums[4].push(arr[_i6].sumAzbj);
	            }
	            chart.initChart('chartWjwg4', ['法律咨询', '人民调解', '法制宣传', '社区矫正', '安置帮教'], [], area, nums);
	        }
	    };

	    // 获得处理率，all 总数 have 已处理数
	    chart.getProcessRate = function (all, have) {
	        if (isNaN(all) || isNaN(have) || all === 0 || have === 0) {
	            return 0;
	        }
	        return Math.round(have / all * 100) / 100;
	    };

	    /**
	     * 初始化图表
	     * @param element 元素id
	     * @param legendData 例： ['次数', '参与人次', '发放材料']
	     * @param colors  例： ['#4F81BD','#C0504D','#9BBB59'];
	     * @param categoryData x坐标值 例： ['西陵区', '点军区', '虢亭区', '伍家岗区', '高新区', '夷陵区'];
	     * @param seriesData 数值： [
	     [234, 332, 301, 334, 390, 330],
	     [234, 332, 301, 334, 390, 330],
	     [234, 332, 301, 334, 390, 330]
	     ];
	     */
	    chart.initChart = function (element, legendData, colors, categoryData, seriesData) {
	        // 初始化图表所在div的大小
	        $('#chart,#chartWjwg1,#chartWjwg2,#chartWjwg3,#chartWjwg4').width($('#countResult').width());
	        var chart = echarts.init(document.getElementById('' + element + ''));
	        var option = {
	            tooltip: {
	                trigger: 'axis',
	                axisPointer: { // 坐标轴指示器，坐标轴触发有效
	                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	                }
	            },
	            backgroundColor: '#fff',
	            grid: {
	                x: 60,
	                x2: 20,
	                y2: 100
	            },
	            yAxis: [{
	                type: 'value'
	            }]
	        };

	        // 使用指定的配置项和数据显示图表。
	        option.legend = {
	            data: legendData
	        }; // 动态赋值。
	        option.xAxis = [{
	            type: 'category',

	            data: categoryData,
	            "axisLabel": { // x轴设置
	                interval: 0,
	                rotate: 45, // 标题倾斜角度
	                margin: 10 // 标题的上边距
	            }
	        }];

	        var arr = [];
	        for (var i = 0; i < seriesData.length; i++) {
	            var obj = new Object();
	            obj.name = legendData[i];
	            obj.type = 'bar';
	            if (colors[i]) {
	                obj.itemStyle = {
	                    normal: {
	                        color: colors[i]
	                    }
	                };
	            }
	            obj.data = seriesData[i];
	            arr.push(obj);
	        }

	        option.series = arr;
	        chart.setOption(option);

	        //宽度自适应
	        window.addEventListener('resize', function () {
	            chart.resize();
	        });
	    };

	    // 绑定点击事件
	    function bindClick() {
	        // 浏览器大小改变事件
	        $(window).resize(function () {
	            model.changeChildPageWidth();
	        });

	        // 一级导航条点击事件
	        $('#navFirst li').click(function (event) {
	            var self = event.currentTarget;
	            $(self).addClass('active').siblings().removeClass('active');
	            $('.search,.work,.report').hide();
	            $('.statistical-report').css('background', '#EAEDF2');
	            switch ($(self).attr('data-name')) {
	                case 'search':
	                    $('.search').css('display', 'block');
	                    $('#dept').show();
	                    $('#people').hide();
	                    $('.nav-second li:first').addClass('active').siblings().removeClass('active');
	                    break;
	                case 'work':
	                    $('#workTableRmtj').show();
	                    $('#workTableFlzx').hide();
	                    $('#workTableFzxc').hide();
	                    $('.work').css('display', 'block');
	                    break;
	                case 'report':
	                    $('.statistical-report').css('background', '#fff');
	                    $('.report').css('display', 'block');
	                    break;
	            }
	        });

	        // 综合查询二级菜单点击事件
	        $('#navSecond li').click(function (event) {
	            var self = event.currentTarget;
	            $(self).addClass('active').siblings().removeClass('active');
	            switch ($(self).attr('data-name')) {
	                case 'deptSearch':
	                    //$('.search').css('display', 'block');
	                    $('#people').hide();
	                    $('#dept').show();
	                    event.stopPropagation();
	                    break;
	                case 'personSearch':
	                    //$('.search').css('display', 'block');
	                    $('#dept').hide();
	                    $('#people').show();
	                    event.stopPropagation();
	                    break;
	            }
	        });

	        // 综合查询 机构查询 按钮点击事件
	        $('#btnDeptSearch').click(function () {
	            var _data = {
	                type: $('#deptType').val(),
	                name: $('#fzrName').val(),
	                address: $('#deptAddress').val(),
	                MecName: $('#deptName').val()
	            };
	            model.deptSearch(_data);
	        });

	        // 综合查询 人员查询 按钮点击事件
	        $('#btnPeopleSearch').click(function () {
	            var _data = {
	                typePeople: $('#perosnType').val(),
	                sfj: $('#sfj').val(),
	                center: $('#zdzx').val(),
	                station: $('#gzz').val(),
	                name: $('#personName').val(),
	                IdCard: $('#card').val(),
	                address: $('#personAddress').val()
	            };
	            model.personSearch(_data);
	        });

	        // 工作台账 radio改变时，改变时间label的名称
	        $('#radio').change(function () {
	            var $dateName = $('#dateName');
	            $('#radio input').each(function (event) {
	                if ($(event.currentTarget).prop('checked')) {
	                    switch ($(event.currentTarget).val()) {
	                        case "1":
	                            $dateName.text('调解时间');
	                            break;
	                        case "2":
	                            $dateName.text('咨询时间');
	                            break;
	                        case "3":
	                            $dateName.text('活动时间');
	                            break;
	                        default:
	                            $dateName.text('时间');
	                            break;
	                    }
	                }
	            });
	        });

	        // 台账查询
	        $('#btnWorkSearch').click(function () {
	            var mon = ''; //两位月份
	            if ($('#month').val().length == 1) {
	                mon = '0' + $('#month').val();
	            } else {
	                mon = $('#month').val();
	            }
	            var type = $('input[name="type"]:checked').val(); //台账类型
	            var _data = {
	                type: type, // 台账类型
	                date: $('#year').val() + mon + '01',
	                area: $('#w_district').val(),
	                street: $('#w_zdzx').val()
	            };
	            model.workSearch(_data, type);
	        });

	        // 工作台账 dialog关闭
	        $('.closed').on('click', function () {
	            $("#dialog").hide();
	            $("#visitDialog").hide();
	            $('#shadow').hide();
	        });

	        // 统计报表 select的change事件
	        $('#reportType').change(function () {
	            if ($('#reportType').val() == 3) {
	                $('#wrapDate').hide();
	                $('#areas').hide();
	                $('#visit').hide();
	                $('#reportBtnReset').hide();
	            } else if ($('#reportType').val() == 4) {
	                $('#areas').show();
	                $('#visit').show();
	                $('#wrapDate').show();
	                $('#reportBtnReset').show();
	            } else {
	                $('#visit').hide();
	                $('#areas').show();
	                $('#wrapDate').show();
	                $('#reportBtnReset').show();
	            }
	        });

	        // 统计报表 back按钮返回事件
	        $('#pre').click(function () {
	            var name = $('.wgtj table:visible').attr('id');
	            switch (name) {
	                case 'streetTable':
	                    $('#pre').css({ background: '#ccc', pointer: 'default' });
	                    $('#areaTable').show().siblings('table').hide();
	                    //$('#chartWjwg1').show().siblings().hide();
	                    break;
	                case 'communityTable':
	                    $('#streetTable').show().siblings('table').hide();
	                    //$('#chartWjwg2').show().siblings().hide();
	                    break;
	                case 'gridTable':
	                    $('#communityTable').show().siblings('table').hide();
	                    //$('#chartWjwg3').show().siblings().hide();
	                    break;
	            }
	        });

	        // 统计报表 网格统计 右侧导航条的点击事件
	        $('#rightMenu2 li').click(function (event) {
	            $(event.currentTarget).addClass('active').siblings().removeClass('active');
	            var id = $('.wgtj table:visible').attr('id');
	            var chartId = '';
	            if (id === 'areaTable') {
	                chartId = 'chartWjwg1';
	            }
	            if (id === 'streetTable') {
	                chartId = 'chartWjwg2';
	            }
	            if (id === 'communityTable') {
	                chartId = 'chartWjwg3';
	            }
	            if (id === 'gridTable') {
	                chartId = 'chartWjwg4';
	            }
	            switch ($(event.currentTarget).attr('data-name')) {
	                case 'table':
	                    $('#pre').show();
	                    if (id !== $('#chartWrap').attr('data-id')) {
	                        id = $('#chartWrap').attr('data-id');
	                    }
	                    $('#' + id).show();
	                    $('#chartWrap .chart').hide();
	                    break;
	                case 'chart':
	                    $('#pre').hide();
	                    $('#' + id).hide();
	                    $('#' + chartId).show().siblings().hide();
	                    $('#chartWrap').attr('data-id', id);
	                    $('#chartWrap').show();
	                    break;
	            }
	        });

	        // 统计报表 人民调解、法制宣传 右侧导航条的点击事件
	        $('#rightMenu1 li').click(function (event) {
	            $(event.currentTarget).addClass('active').siblings().removeClass('active');
	            var resType = $('#reportType').val();
	            switch ($(event.currentTarget).attr('data-name')) {
	                case 'table':
	                    if (resType === '1') {
	                        $('#reportTableFzxc').show();
	                    } else if (resType === '2') {
	                        $('#reportTableRmtj').show();
	                    } else if (resType === '4') {
	                        $('#reportTableZF').show();
	                    }
	                    $('#chart').hide();
	                    break;
	                case 'chart':
	                    $('#reportTableRmtj').hide();
	                    $('#reportTableFzxc').hide();
	                    $('#reportTableZF').hide();
	                    $('#chart').show();
	                    break;
	            }
	        });

	        // 统计报表 按钮查询
	        $('#reportBtnSearch').click(function () {
	            var _data = {
	                type: $('#reportType').val(),
	                dateStart: $('#startTime').val(),
	                dateEnd: $('#endTime').val()
	            };
	            if ($('#c_district').val() !== '') {
	                _data.area = $('#c_district').val();
	            }
	            if ($('#c_zdzx').val() !== '') {
	                _data.street = $('#c_zdzx').val();
	            }
	            if ($('#c_community').val() !== '') {
	                _data.community = $('#c_community').val();
	            }
	            var type = $('#reportType').val();
	            if (type === '4') {
	                //走访统计
	                _data.type = 3; // 后台设置的走访，查询类型为3
	                _data.zflx = $('#visitType').val();
	            }
	            model.reportSearch(_data, type);
	        });

	        // 统计报表 重置按钮点击
	        $('#reportBtnReset').click(function () {
	            $('#startTime, #endTime').val('');
	            $('#c_district option:first').prop('selected', 'selected'); //下拉框选中第一个
	            $('#reportType option:first').prop('selected', 'selected'); //下拉框选中第一个
	            $('#reportType').change();
	            //街办下拉框清空option，加入全部option
	            $('#c_zdzx option').remove();
	            $('#c_zdzx').html('<option value="">全部</option>');
	        });

	        // 统计报表 走访统计的tr双击事件
	        $('#reportTableZF tbody').on('dblclick', 'tr', function (event) {
	            var bm = event.currentTarget.cells[0].attributes['data-info'].value;
	            var data1 = {
	                dateStart: $('#startTime').val(),
	                dateEnd: $('#endTime').val(),
	                bm: bm,
	                zflx: $('#visitType').val(),
	                type: 0
	            },
	                data2 = {
	                dateStart: $('#startTime').val(),
	                dateEnd: $('#endTime').val(),
	                bm: bm,
	                zflx: $('#visitType').val(),
	                type: 1
	            },
	                data3 = {
	                dateStart: $('#startTime').val(),
	                dateEnd: $('#endTime').val(),
	                bm: bm,
	                zflx: $('#visitType').val(),
	                type: 2
	            };
	            model.initVisitHadTable('visitTotalTable', data1);
	            model.initVisitHadTable('visitNoTable', data2);
	            model.initVisitHadTable('visitHadTable', data3);

	            model.showDialog('visitDialog');
	            $('a[href="#visitTotal"]').click(); // 执行点击事件，找到第一个。
	        });
	    }

	    // 格式化字符串
	    function strFormat(str, time) {
	        if (str === undefined) {
	            return '';
	        }
	        if (time) {
	            return new Date(str).Format('yyyy-M-d h:m:s');
	        }
	        return str;
	    }

	    // 初始化
	    function init() {
	        //model.changeChildPageWidth();
	        model.init();
	        bindClick();

	        // 时间选择验证
	        common.dateValidate({
	            startTimeId: 'startTime',
	            endTimeId: 'endTime',
	            targetElementId: 'wrapDate',
	            placement: 'bottom'
	        });
	    }

	    return {
	        init: init
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);