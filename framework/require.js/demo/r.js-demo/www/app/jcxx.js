/*
 * 基础信息
 * 邢祥超
 * 2016/6/27
 * */
"use strict";

define(['jquery', 'map', 'mapClick', 'common', 'jqpagination'], function ($, map, mapClick, common) {

    const URL = {
        //所属司法局
        SFJ: sessionStorage.URL + '/wjpt/theme',
        //法务指导中心
        FWZDZX: sessionStorage.URL + '/wjpt/query',
        //法务工作站
        FWGZZ: sessionStorage.URL + '/wjpt/queryFrist',
        //法务工作队伍
        FWGZDW: sessionStorage.URL + '/wjpt/querySecond',
        //法务工作网格
        FWGZWG: sessionStorage.URLYCGRID + '/legalGrids/',
        //社区矫正
        SQJZ: sessionStorage.URLYCGRID + '/tbfxryxxs/tbfxryxx',
        //安置帮教
        AZBJ: sessionStorage.URLYCGRID + '/tbxsjjryxxs/tbxsjjryxx'

    };

    let height = $('#content').height(),
        TsrqCount = 0;
    return {
        init: init
    };
    //初始化
    function init() {
        map.initAreaLayers();
        getAreaType();
        tabtype();
        TsrqCount = 0;
        //法务指导中心
        $('#queryBtn').click(function () {
            LegalGuidanceCenter();
            $('.dialogs').hide();
            map.initAreaLayers();
        });
        //法务工作站
        $('#streetUl').on('click', 'li', function () {
            LegalStation(this);
        });
        //法务工作队伍
        $('#secondUl').on('click', 'li', function () {
            LegalWorkTeam(this);
        });

        //法务指导中心点击事件
        $('#guidanceCenter').click(function () {
            $('.dialogs').hide();
            map.initAreaLayers();
            $('.fwzx').empty().text();
            $('#second,#legalWork').hide();
            $('#streetUl').show();
        });
        //法务工作站点击事件
        $('#worksttion').click(function () {
            $('.dialogs').hide();
            map.initAreaLayers();
            $('.number').html($('#secondUl li').length);
            $('#fwcenter,#legalWork').hide();
            $('#secondUl').show();
        });

        //特殊人群
        $('#cxBtn').click(function () {
            TsrqCount++;
            getSpecialData(1, 10, true);
            $('.dialogs').hide();
            map.initAreaLayers();
        });

        // dialog关闭
        $('.closed').click(function () {
            $('.dialogs').hide();
        });

    }

    //tab页签切换
    function tabtype() {
        $('#navHeader li').each(function (index) {
            $(this).on('click', function () {
                map.closePath();
                $('.dialogs').hide();
                map.initAreaLayers();
                $('.basic-model').removeClass('active');
                $('#navHeader li.active').removeClass('active');
                $('.basic-model').eq(index).addClass('active');
                $(this).addClass('active');
            });
        });
    }

    /**
     * todo 五级平台
     * */
    function getAreaType() {
        $.get(URL.SFJ, function (data) {
            let options = '',
                array = data.data;
            for (let i = 0; i < array.length; i++) {
                options += '<option value=' + array[i].bm + '>' + array[i].name + '</option>';
            }
            $('#areaType').append(options);
        });
    }

    //法务指导中心
    function LegalGuidanceCenter() {
        $('.fwzx').empty().text();
        let data = {
            id: $('#areaType').val()
        };
        map.showArea(data.id);
        common.ajaxGet(URL.FWZDZX, data).done(function (data) {
            $('#streetUl').show();
            $('#second,#legalWork').hide();
            let array = data.data.listJuticeCenter,
                liHtml = '',
                arrOptions = [];
            $('.fwzx').text(array.length);
            for (let i = 0; i < array.length; i++) {
                liHtml += '<li data=' + JSON.stringify(array[i]) + '>'
                + array[i].name + '</li>';
                arrOptions.push({
                    x: array[i].x,
                    y: array[i].y,
                    img: 'img/icon-pt.png',
                    zr: array[i].zr,
                    zrlxdh: array[i].zrlxdh,
                    fzr: array[i].fzr,
                    fzrlxdh: array[i].fzrlxdh,
                    bm: array[i].bm,
                    name: array[i].name,
                    jlbh: array[i].jlbh
                });
            }
            if (array.length > 0) {
                $('#street').show();
            } else {
                $('#street').show();
                $('.fwzx').empty().text('暂无数据');
            }
            map.showPointsByXY(arrOptions);
            $('#streetUl').html(liHtml);
        });
    }


    //法务工作站
    function LegalStation(that) {
        let json = $(that).attr('data'),
            data = JSON.parse(json);
        map.showArea(data.bm);
        map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
        $('.fwzx').text(that.innerHTML);
        $('#second,#secondUl').show();
        $('#streetUl').hide();
        let returnData = {
            id: data.bm
        };
        $('.fwstation-master').html(data.zr);
        $('.fwvice-master').html(data.fzr);
        $('.fwstation-number').html(data.zrlxdh);
        $('.fwvice-number').html(data.fzrlxdh);
        common.ajaxGet(URL.FWGZZ, returnData).done(function (data) {
            let array = data.data.name,
                nFwzx = data.data.station,
                liHtml = '',
                arrOptions = [];
            //追加到法务工作站文本后
            $('.number').html(nFwzx[0].sum).on('click', function () {
                map.showPointsByXY(arrOptions);
            });
            for (let i = 0; i < array.length; i++) {
                liHtml += '<li id= ' + array[i].jlbh + ' data=' + JSON.stringify(array[i]) + '>'
                + array[i].name + '</li>';

                arrOptions.push({
                    x: array[i].x,
                    y: array[i].y,
                    img: 'img/icon-pt.png',
                    zr: array[i].zr,
                    zrlxdh: array[i].zrlxdh,
                    fzr: array[i].fzr,
                    fzrlxdh: array[i].fzrlxdh,
                    bm: array[i].bm,
                    name: array[i].name,
                    jlbh: array[i].jlbh
                });
            }
            $('#secondUl').html(liHtml);
            $('.stations-number').html(nFwzx[0].sum);//追加到法务工作站一栏；
            $('.fwgzsl,#fwcenter').show();           //法务指导中心弹出窗；
        });
    }

    //法务工作队伍
    function LegalWorkTeam(that) {
        $('.number').html(that.innerHTML);       //添加文本
        let json = $(that).attr('data'),
            data = JSON.parse(json);
        map.showArea(data.bm);
        map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
        let returnData = {
            id: data.jlbh,
            bm: data.bm
        };
        $('.stationmaster').html(data.zr);
        $('.vice-master').html(data.fzr);
        $('.stationmaster-number').html(data.zrlxdh);
        $('.viceMaster-number').html(data.fzrlxdh);
        common.ajaxGet(URL.FWGZDW, returnData).done(function (data) {
            let people = data.data.people[0],
                law = data.data.law[0],
                legal = data.data.legal[0],
                special = data.data.special[0],
                assitance = data.data.assitance[0];
            //追加到法务工作站文本后
            $('.rmtjy').html(people[0].sum).unbind('click');        //先解除绑定事件
            $('.rmtjy').html(people[0].sum).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let peopleDetails = data.data.people,
                        arrOptions = [];
                    for (let i = 1; i < peopleDetails.length; i++) {
                        if (peopleDetails[i].x) {
                            arrOptions.push({
                                rylx: '人民调解员',
                                x: peopleDetails[i].x,
                                y: peopleDetails[i].y,
                                img: 'img/icon-pt.png',
                                jlbh: peopleDetails[i].jlbh,
                                name: peopleDetails[i].name,
                                xb: peopleDetails[i].xb,
                                lxdh: peopleDetails[i].lxdh,
                                jtzz: peopleDetails[i].jtzz,
                                gzdw: peopleDetails[i].gzdw,
                                bm: peopleDetails[i].wgbm
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });

            $('.fwry').html(law[0].sum).unbind('click');
            $('.fwry').html(law[0].sum).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let lawDetails = data.data.law,
                        arrOptions = [];
                    for (let i = 1; i < lawDetails.length; i++) {
                        if (lawDetails[i].x) {
                            arrOptions.push({
                                rylx: '法律服务人员',
                                x: lawDetails[i].x,
                                y: lawDetails[i].y,
                                img: 'img/icon-pt.png',
                                jlbh: lawDetails[i].jlbh,
                                name: lawDetails[i].name,
                                xb: lawDetails[i].xb,
                                lxdh: lawDetails[i].lxdh,
                                jtzz: lawDetails[i].jtzz,
                                gzdw: lawDetails[i].gzdw,
                                bm: lawDetails[i].wgbm
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });

            $('.fzxc').html(legal[0].sum).unbind('click');
            $('.fzxc').html(legal[0].sum).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let legalDetails = data.data.legal,
                        arrOptions = [];
                    for (let i = 1; i < legalDetails.length; i++) {
                        if (legalDetails[i].x) {
                            arrOptions.push({
                                rylx: '法治宣传员',
                                x: legalDetails[i].x,
                                y: legalDetails[i].y,
                                img: 'img/icon-pt.png',
                                jlbh: legalDetails[i].jlbh,
                                name: legalDetails[i].name,
                                xb: legalDetails[i].xb,
                                lxdh: legalDetails[i].lxdh,
                                jtzz: legalDetails[i].jtzz,
                                gzdw: legalDetails[i].gzdw,
                                bm: legalDetails[i].wgbm
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });

            $('.tsgz').html(special[0].sum).unbind('click');
            $('.tsgz').html(special[0].sum).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let specialDetails = data.data.special,
                        arrOptions = [];
                    for (let i = 1; i < specialDetails.length; i++) {
                        if (specialDetails[i].x) {
                            arrOptions.push({
                                rylx: '特殊人群关照员',
                                x: specialDetails[i].x,
                                y: specialDetails[i].y,
                                img: 'img/icon-pt.png',
                                jlbh: specialDetails[i].jlbh,
                                name: specialDetails[i].name,
                                xb: specialDetails[i].xb,
                                lxdh: specialDetails[i].lxdh,
                                jtzz: specialDetails[i].jtzz,
                                gzdw: specialDetails[i].gzdw,
                                bm: specialDetails[i].wgbm
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });

            $('.flyz').html(assitance[0].sum).unbind('click');
            $('.flyz').html(assitance[0].sum).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let assitanceDetails = data.data.assitance,
                        arrOptions = [];
                    for (let i = 1; i < assitanceDetails.length; i++) {
                        if (assitanceDetails[i].x) {
                            arrOptions.push({
                                rylx: '法律援助协办员',
                                x: assitanceDetails[i].x,
                                y: assitanceDetails[i].y,
                                img: 'img/icon-pt.png',
                                jlbh: assitanceDetails[i].jlbh,
                                name: assitanceDetails[i].name,
                                xb: assitanceDetails[i].xb,
                                lxdh: assitanceDetails[i].lxdh,
                                jtzz: assitanceDetails[i].jtzz,
                                gzdw: assitanceDetails[i].gzdw,
                                bm: assitanceDetails[i].wgbm
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });

            $('#legalWork').show();
            $('#LegalStation').show();
            $('#secondUl').hide();
        });

        //法务工作网格
        common.ajaxGet(URL.FWGZWG + returnData.bm).done(function (data) {
            let legalGrid = data.data;
            $('.wgsl').html(legalGrid.gridAmount).unbind('click');
            $('.wgsl').html(legalGrid.gridAmount).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() != 0) {
                    map.initAreaLayer(returnData.bm);
                }
            });

            $('.fwll').html(legalGrid.gridPolyAmount).unbind('click');
            $('.fwll').html(legalGrid.gridPolyAmount).on('click', function () {
                $('.dialogs').hide();
                if ($(this).text() !== 0) {
                    let juticeDetails = legalGrid.gridPolyList,
                        arrOptions = [];
                    for (let i = 1; i < juticeDetails.length; i++) {
                        if (juticeDetails[i].center_x) {
                            arrOptions.push({
                                rylx: '法务联络员',
                                x: juticeDetails[i].center_x,
                                y: juticeDetails[i].center_y,
                                img: 'img/icon-pt.png',
                                jlbh: juticeDetails[i].usernum,
                                name: juticeDetails[i].username,
                                xb: juticeDetails[i].xb,
                                csrq: dateFormatter(juticeDetails[i].csrq),
                                zp: photo(juticeDetails[i].zp),
                                sfzhm: idCard(juticeDetails[i].sfzhm),
                                whcd: juticeDetails[i].whcd,
                                lxdh: juticeDetails[i].lxdh,
                                jtzz: juticeDetails[i].jtzz,
                                gzwg: juticeDetails[i].gzwg,
                                sqet: juticeDetails[i].sqet,
                                sssq: juticeDetails[i].sssq,
                                bm: juticeDetails[i].wgbh
                            });
                        }
                    }
                    map.showPointsByXY(arrOptions);
                }
            });
        });

    }


    /**
     * todo 特殊人群
     **/
    // 分页查询初始化
    function specialInitPage(current_page, limit, max_page, total) {
        if (TsrqCount >= 2) { // 按钮点击两次及以上则destroy
            $('#paginationTSRQ').jqPagination('destroy');
            $('#paginationTSRQ').jqPagination('option', 'current_page', current_page);
            $('#paginationTSRQ').jqPagination('option', 'max_page', max_page);
        }
        $('#paginationTSRQ').jqPagination({
            link_string: '/?page={page_number}',
            current_page: current_page,
            max_page: max_page,
            page_string: '{current_page}/{max_page} ' + '共' + total + '条',
            paged: function (page) {
                getSpecialData(page, limit, false);
            }
        });
    }

    //特殊人群查询
    function getSpecialData(page, limit, isFirst) {
        let max_page = 0,
            type = $('#crowdType').val(),
            data = {
                page: page,
                limit: limit,
                name: $('#tsrqVal').val()
            };

        if (type == '社区矫正') {
            common.ajaxGet(URL.SQJZ, data).done(function (data) {
                let obj = data.data;
                if (obj.total > 0) {
                    if (isFirst) {
                        max_page = Math.ceil(obj.total / limit);
                        specialInitPage(1, limit, max_page, obj.total);
                    }
                    let trs = '';
                    for (let i = 0; i < obj.data.length; i++) {
                        let each = obj.data[i];
                        $('#personName').empty().html(each.xm);
                        trs += '<div class="textBorder">' +
                        '<p id=' + each.sfzhm + '>姓名：' + (each.xm) + '</p>' +
                        '<p>联系电话：' + (each.lxdh) + '</p>' +
                        '<p>身份证号：' + (each.sfzhm) + '</p>' +
                        '<p>矫正类型：' + (each.sqjzlx) + '</p>' +
                        '<span><img src="img/07.png" title="历史轨迹" id=' + each.sfzhm + ' name=' + each.lxdh + '></span>' +
                        '</div>'
                    }

                    $('#special-population').empty().append(trs).height(height - 251 + 'px').show();

                    $('.textBorder').unbind('click');
                    $('.textBorder').click(function () {
                        map.closePath();
                        mapClick.sqPeopleClick(this);
                    });

                    //轨迹查询
                    $('.textBorder span').unbind('click');
                    $('.textBorder').on('click', 'img', function (event) {
                        map.closePath();
                        mapClick.record(this);
                        event.stopPropagation();
                    });

                } else {
                    $('#special-population').html('<p class="nodata">没有该人员信息</p>');
                }
            });
        }
        if (type == '安置帮教') {
            common.ajaxGet(URL.AZBJ, data).done(function (data) {
                let obj = data.data;
                if (obj.total > 0) {
                    let max_page = 0;

                    if (isFirst) {
                        max_page = Math.ceil(obj.total / limit);
                        specialInitPage(1, limit, max_page, obj.total);
                    }

                    let trs = '';
                    for (let i = 0, len = obj.data.length; i < len; i++) {
                        let each = obj.data[i];
                        trs += '<div class="textBorder">' +
                        '<p id=' + each.sfzhm + '>姓名：' + (each.xm) + '</p>' +
                        '<p>联系电话：' + (each.lxdh) + '</p>' +
                        '<p>身份证号：' + (each.sfzhm) + '</p>' +
                        '<p>帮教效果：' + (each.bjxg === undefined ? '' : each.bjxg) + '</p>' +
                        '<span><img src="img/07.png" title="历史轨迹" id=' + each.sfzhm + ' name=' + each.lxdh + '></span>' +
                        '</div>';
                    }
                    $('#special-population').empty().append(trs).height(height - 251 + 'px').show();

                    $('.textBorder').unbind('click');
                    $('.textBorder').click(function () {
                        map.closePath();
                        mapClick.azPeopleClick(this);
                    });

                    //轨迹查询
                    $('.textBorder span').unbind('click');
                    $('.textBorder').on('click', 'img', function (event) {
                        map.closePath();
                        mapClick.record(this);
                        event.stopPropagation();
                    });

                } else {
                    $('#special-population').html('<p class="nodata">没有该人员信息</p>');
                }
            });
        }

    }

    //日期格式化
    function dateFormatter(date) {
        let y = date.substr(0, 4),
            m = date.substr(4, 2),
            d = date.substr(6, 2);
        return (y + '-' + m + '-' + d);
    }

    //隐藏身份证第10到14位
    function idCard(sfzhm) {
        return sfzhm.replace(sfzhm.substr(10, 4), "****");
    }

    //人员照片
    function photo(name) {
        return 'http://10.27.7.4:8050/GRID_MANAGER_PIC/' + name;
    }

});
