/**
 * 首页
 * 宋晓倩
 * 2016/6/30.
 */
'use strict';

define(['jquery', 'map', 'echart', 'common'], function ($, map) {

    return {
        init: init
    };
    //初始化
    function init() {

        // 根据人员的行政编码初始化树图
        initData();

        //根据地图传过来的行政编码查询
        $.subscribe('ycsf.homePage.initTableByXzbm.', function (e, results) {
            let bm = results.xzbm,
                name = results.name,
                length = bm.length;
            switch (length) {
                case 6 :
                    sessionStorage.bm_s = bm;
                    getData('street', bm, name);
                    $('#area').hide();
                    $('#street').show();
                    break;
                case 9 :
                    sessionStorage.bm_c = bm;
                    getData('community', bm, name);
                    $('#street').hide();
                    $('#community').show();
                    break;
                case 12 :
                    getData('grid', bm, name);
                    $('#community').hide();
                    $('#grid').show();
                    break;
                case 14 :
                    getData('mini', bm, name);
                    $('#grid').hide();
                    $('#mini').show();
                    break;
            }
        });
    }
    
    function showArea(mapLoad, bm) {
        if (mapLoad === 'true') {
            map.showArea(bm);
        }
    }

    function initData() {
        let length = sessionStorage.XZBM.length,
            bm = sessionStorage.XZBM,
            name = sessionStorage.USER_NAME;
        switch (length) {
            case 4:
                getData('area', bm, name);
                $('#area').show();
                break;
            case 6 :
                getData('street', bm, name);
                $('#street').show();
                break;
            case 9 :
                getData('community', bm, name);
                $('#community').show();
                break;
            case 12 :
                getData('grid', bm, name);
                $('#grid').show();
                break;
            case 14 :
                getData('mini', bm, name);
                $('#mini').show();
                break;
        }
    }

    function getData(id, bm, name) {
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/total/themeZdCenterAndFwStation',
            contentType: 'text/html;charset=utf-8',
            data: {
                bm: bm
            },
            dataType: 'json',
            success: function (data) {
                let result = data.data,
                    arr = [];
                for (let i = 0; i < result.length; i++) {
                    arr[i] = {};
                    arr[i].name = result[i].name;
                    arr[i].bm = result[i].bm;
                }
                getChartData(id, name, bm, arr);
            }
        })
    }

    function getChartData(id, name, bm, children) {
        initChart(id, {'name': name, 'bm': bm, 'children': children})
    }

    function initChart(id, children) {
        let myChart = echarts.init(document.getElementById(id)),
            height = $(window).height() * 0.46,
            nodePadding = 0;
        if (screen.height < 768) {
            nodePadding = -65;
        } else if (screen.height <= 800) {
            nodePadding = -60;
        } else if (screen.height <= 900) {
            nodePadding = -55;
        } else if (screen.height <= 1080) {
            nodePadding = -45;
        } else {
            nodePadding = -40;
        }
        let option = {
            series: [
                {
                    name: '树图',
                    type: 'tree',
                    orient: 'horizontal',
                    rootLocation: {x: 60, y: height},
                    nodePadding: nodePadding,
                    layerPadding: 150,
                    roam: true,
                    symbolSize: [100, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            color: '#0099cc',
                            label: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            lineStyle: {
                                color: '#09c',
                                type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                            }
                        },
                        emphasis: {
                            color: '#03AAE5',
                            borderColor: '#03AAE5'
                        }
                    },
                    data: [
                        children
                    ]
                }
            ]
        };
        let ecConfig = echarts.config.EVENT;

        function eClick(param) {
            let name = param.name,
                bm = param.data.bm,
                len = bm.length,
                length = sessionStorage.XZBM.length;
            if (param.data.children != undefined) {
                if (length == len - 2) {
                    switch (len) {
                        case 6:
                            $('#street').hide();
                            $('#area').show();
                            map.initHome(sessionStorage.XZBM);
                            break;
                        case 14:
                            $('#mini').hide();
                            $('#grid').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.XZBM);
                            break;
                    }
                } else if(length == len - 3){
                    switch (len) {
                        case 9:
                            $('#community').hide();
                            $('#street').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.XZBM);
                            break;
                        case 12:
                            $('#grid').hide();
                            $('#community').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.XZBM);
                            break;
                    }
                }else if(length < len){
                    switch (len) {
                        case 6:
                            $('#street').hide();
                            $('#area').show();
                            map.initHome(sessionStorage.XZBM);
                            break;
                        case 9:
                            $('#community').hide();
                            $('#street').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.bm_s);
                            break;
                        case 12:
                            $('#grid').hide();
                            $('#community').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.bm_c);
                            break;
                        case 14:
                            $('#mini').hide();
                            $('#grid').show();
                            showArea(sessionStorage.mapLoad, sessionStorage.bm_g);
                            break;
                    }
                }
            } else {
                showArea(sessionStorage.mapLoad, bm);
                switch (len) {
                    case 6:
                        sessionStorage.bm_s = bm;
                        getData('street', bm, name);
                        $('#area').hide();
                        $('#street').show();
                        break;
                    case 9:
                        sessionStorage.bm_c = bm;
                        getData('community', bm, name);
                        $('#street').hide();
                        $('#community').show();
                        break;
                    case 12:
                        sessionStorage.bm_g = bm;
                        getData('grid', bm, name);
                        $('#community').hide();
                        $('#grid').show();
                        break;
                    case 14:
                        getData('mini', bm, name);
                        $('#grid').hide();
                        $('#mini').show();
                        break;
                }
            }
        }

        myChart.on(ecConfig.CLICK, eClick);
        myChart.setOption(option);
    }

})
;




