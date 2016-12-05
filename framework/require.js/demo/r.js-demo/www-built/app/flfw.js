/**
 * 法律服务
 * 宋晓倩
 * 2016-6-24
 */
'use strict';

define(['jquery', 'map', 'common', 'bootstrap-datetimepicker', 'bootstrap-datetimepicker-zh-CN', 'jqpagination'], function ($, map, common) {

        let service_h = $('#content').height(),
            agencyCount = 0,
            adviceCount = 0,
            location_x = '',
            location_y = '',
            wgbm = '';

        return {
            init: init
        };

        // 初始化
        function init() {
            map.initAreaLayers();
            getAgencyType();
            getAdviceType();
            navHeader();

            agencyCount = 0;
            adviceCount = 0;

            // 法律服务机构查询
            $('#agencyQueryBtn').on('click', function () {
                agencyCount++;
                getAgencyData(1, 10, true);
            });

            // 法律咨询咨询
            $('#consultation').on('click', function () {
                consultation();
            });

            getLawOffice();

            lawPeople();

            law();

            // 法律咨询新增确定
            $('#adviceDetermine1').on('click', function () {
                adviceDetermine1();
            });

            // 法律咨询查询
            $('#adviceQueryBtn').on('click', function () {
                adviceCount++;
                getAdviceData(1, 10, true);
            });

            // 地图定位
            $('#location').on('click', function () {
                $('#legalAdviceDialog1').hide();
                map.getMapXY();
                $.subscribe('selectLocation.', function (e, result) {
                    location_x = result.x;
                    location_y = result.y;
                    wgbm = result.WGBH;
                    $('#legalAdviceDialog1').show();
                    $('#place1').val(result.address);
                });
            });

            //  法律咨询修改确定
            $('#adviceDetermine2').on('click', function () {
                adviceDetermine2();
                map.initAreaLayers();
            });

            // 关闭 dialog
            dialogClosed('agencyClosed');
            dialogClosed('legalClosed1');
            dialogClosed('legalClosed2');
            dialogClosed('lawClosed');
            dialogClosed('peopleClosed');

            // 时间控件
            $(".form_date").datetimepicker({
                language: 'zh-CN',
                weekStart: 1,
                todayBtn: 1,
                autoclose: true,
                minView: 2,
                forceParse: 0,
                pickerPosition: 'bottom-left'
            });

            //时间选择验证
            common.dateValidate({
                startTimeId: 'adviceDate1',
                endTimeId: 'adviceDate2',
                placement: 'bottom'
            });
        }

        // header nav 切换
        function navHeader() {
            $('.navHeader li').each(function (index) {
                $(this).on('click', function () {
                    map.initAreaLayers();
                    $(this).addClass('active').siblings().removeClass('active');
                    $('.basicCommon').removeClass('active').eq(index).addClass('active');
                    $('#agencyDialog').hide();
                    $('#legalAdviceDialog1').hide();
                    $('#legalAdviceDialog2').hide();
                })
            });
        }

        function dialogClosed(name) {
            $('.' + name).click(function () {
                switch (name) {
                    case 'agencyClosed':
                        $('#agencyDialog').hide();
                        break;
                    case 'legalClosed1':
                        $('#legalAdviceDialog1').hide();
                        break;
                    case 'legalClosed2':
                        $('#legalAdviceDialog2').hide();
                        break;
                    case 'lawClosed':
                        $('#lawOffice').hide();
                        $('#legalAdviceDialog1').show();
                        break;
                    case 'peopleClosed':
                        $('#lawPeople').hide();
                        $('#lawOffice').show();
                        $('#peopleTable').addClass('hide');
                        $('#peopleName').val('');
                        $('#peopleBlank').html('');
                        break;
                }
                map.initAreaLayers();
            });
        }

        /**
         * 模块1：法律服务机构
         **/

        //  机构类型初始化
        function getAgencyType() {
            $.ajax({
                type: 'GET',
                url: sessionStorage.URL + '/fwjg/fwjgtheme',
                contentType: 'text/html; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    let options = "";
                    for (let i in data.data) {
                        options += '<option value=' + data.data[i].dmbm + '>' + data.data[i].dmmc + '</option>';
                    }
                    $('#agencyType').append(options);
                },
                error: function () {
                    //alert('法律服务机构类型初始化错误！');
                }
            });
        }

        // 分页查询初始化
        function agencyInitPage(current_page, limit, max_page) {
            if (agencyCount >= 2) {
                $('#pagination_service').jqPagination('destroy');
                $('#pagination_service').jqPagination('option', 'current_page', current_page);
                $('#pagination_service').jqPagination('option', 'max_page', max_page);
            }
            $('#pagination_service').jqPagination({
                link_string: '/page={page_number}',
                current_page: current_page,
                max_page: max_page,
                page_string: '{current_page}/{max_page}',
                paged: function (page) {
                    getAgencyData(page, limit, false);
                }
            });
        }

        function getAgencyData(page, limit, isFirst) {
            let max_page = 0,
                data = {
                    page: page,
                    limit: limit,
                    type: $('#agencyType').val(),
                    name: $('#agencyName').val(),
                    address: $('#agencyAddress').val()
                };
            $.ajax({
                type: 'GET',
                url: sessionStorage.URL + '/fwjg/query',
                contentType: 'text/html; charset=utf-8',
                data: data,
                dataType: 'json',
                success: function (data) {
                    let result = data.data;
                    if (result.total > 0) {
                        if (isFirst) {
                            max_page = Math.ceil(result.total / limit);
                            agencyInitPage(1, limit, max_page);
                        }
                        let divs = '',
                            flfwjg = result.data;
                        for (let i = 0; i < flfwjg.length; i++) {
                            divs += '<div class="textBorder">' +
                            '<span class="json">' + JSON.stringify(flfwjg[i]) + '</span>' +
                            '<p>机构名称：' + (flfwjg[i].jgmc === undefined ? '' : flfwjg[i].jgmc) + '</p>' +
                            '<p>联系人：' + (flfwjg[i].lxr === undefined ? '' : flfwjg[i].lxr) + '</p>' +
                            '<p>联系电话：' + (flfwjg[i].lxdh === undefined ? '' : flfwjg[i].lxdh) + '</p>' +
                            '<p>负责人：' + (flfwjg[i].fzr === undefined ? '' : flfwjg[i].fzr) + '</p>' +
                            '<p>地址：' + (flfwjg[i].dz === undefined ? '' : flfwjg[i].dz) + '</p>' +
                            '<p>业务范围：' + (flfwjg[i].ywfw === undefined ? '' : flfwjg[i].ywfw) + '</p>' +
                            '</div>';
                        }
                        $('#agencyC').empty().append(divs).height(service_h - 282 + 'px').show();
                        $('#agencyC .textBorder').on('click', function () {
                            let json = $(this).children('span').html(),
                                data = JSON.parse(json);
                            map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
                            $('#agencyH').text(data.jgmc);
                            $('#agency_name').html(data.jgmc);
                            $('#agency_type').html(data.jglx1);
                            $('#agency_contact').html(data.lxr);
                            $('#agency_number').html(data.lxdh);
                            $('#agency_head').html(data.fzr);
                            $('#agency_address').html(data.dz);
                            $('#agency_business').html(data.ywfw);
                            $('#agencyDialog').show();
                        });
                    } else {
                        $('#agencyC').html('无记录').height(service_h - 282 + 'px').show();
                    }
                }
            });
        }

        /**
         * 模块2：法律咨询
         **/

        // 咨询事项初始化
        function getAdviceType() {
            $.ajax({
                type: 'GET',
                url: sessionStorage.URL + '/flzx/theme',
                contentType: 'text/html; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    let options = "";
                    for (let i in data.data) {
                        options += '<option value=' + data.data[i].dmbm + '>' + data.data[i].dmmc + '</option>';
                    }
                    $('.adviceType').append(options);
                },
                error: function () {
                    //alert('法律咨询事项初始化错误！');
                }
            })
        }

        function consultation() {
            $('#legalAdviceDialog2').hide();
            $('input').val('');
            $('textarea').val('');
            $('#person1').val(sessionStorage.USER_NAME);
            $('#date1').val(new Date().Format('yyyy-MM-dd'));
            $('#legalAdviceDialog1').show();
        }

        function getLawOffice() {
            $('#adviceAgency1').focus(function () {
                $('#legalAdviceDialog1').hide();
                $('#lawOffice').show();
                $('#lawBtn').click(function () {
                    $.ajax({
                        type: 'GET',
                        url: sessionStorage.URL + '/fwjg/lawOffice?type=0',
                        contentType: 'text/html; charset=utf-8',
                        dataType: 'json',
                        data: {
                            name: $('#lawName').val()
                        },
                        success: function (data) {
                            if (data.code === 200 && data.status === 'yes' && data.data != '') {
                                let result = data.data,
                                    trs = '';
                                for (let i = 0; i < result.length; i++) {
                                    trs += '<tr>' +
                                    '<td>' + result[i].jlbh + '</td>' +
                                    '<td>' + result[i].jgmc + '</td>' +
                                    '<td>' + result[i].lxdh + '</td>' +
                                    '</tr>';
                                }
                                $('#lawTable tbody').empty().append(trs);
                                $('#lawTable').removeClass('hide');
                                $('#LawBlank').html('');
                            } else if (data.data == '') {
                                $('#lawTable').addClass('hide');
                                $('#LawBlank').html('无记录');
                            }
                        }
                    });
                });
            });
        }

        function lawPeople() {
            $('#lawTable tbody').on('click', 'tr', function () {
                let value = $($(this).children()[0]).text();
                $('#lawOffice').hide();
                $('#lawPeople').show();
                $('#peopleBtn').click(function () {
                    $.ajax({
                        type: 'GET',
                        url: sessionStorage.URL + '/fwjg/lawyer',
                        contentType: 'text/html; charset=utf-8',
                        dataType: 'json',
                        data: {
                            jlbh: value,
                            name: $('#peopleName').val()
                        },
                        success: function (data) {
                            if (data.code === 200 && data.status === 'yes' && data.data != '') {
                                let result = data.data,
                                    trs = '';
                                for (let i = 0; i < result.length; i++) {
                                    trs += '<tr>' +
                                    '<td>' + result[i].xm + '</td>' +
                                    '<td>' + result[i].lxdh + '</td>' +
                                    '<td>' + result[i].jgmc + '</td>' +
                                    '</tr>';
                                }
                                $('#peopleTable tbody').empty().append(trs);
                                $('#peopleTable').removeClass('hide');
                                $('#peopleBlank').html('');
                            } else if (data.data == '') {
                                $('#peopleTable').addClass('hide');
                                $('#peopleBlank').html('无记录');
                            }
                        }
                    });
                });
            });
        }

        function law() {
            $('#lawPeople tbody').on('click', 'tr', function () {
                let name = $($(this).children()[0]).text(),
                    number = $($(this).children()[1]).text(),
                    office = $($(this).children()[2]).text();
                $('#lawPeople').hide();
                $('#legalAdviceDialog1').show();
                $('#adviceAgency1').val(office);
                $('#advicePeople1').val(name);
                $('#advicePeople1').attr('number', number);
                $('#lawTable').addClass('hide');
                $('#lawName').val('');
                $('#peopleTable').addClass('hide');
                $('#peopleName').val('');

            });
        }

        function adviceDetermine1() {
            let zxrxm = $('#name1').val(),
                zxnr = $('#contents1').val(),
                data = {
                    zxrxm: zxrxm,
                    zxrxb: $('#sex1').val(),
                    zxrlxdh: $('#tel1').val(),
                    zxrjzd: $('#place1').val(),
                    zxfs: $('#adviceWay1').val(),
                    zxsx: $('#adviceType1').val(),
                    jdrssjg: $('#adviceAgency1').val(),
                    jdrxm: $('#advicePeople1').val(),
                    jdrlxdh: $('#advicePeople1').attr('number'),
                    zxnr: zxnr,
                    zxsj: $('#date1').val(),
                    tbrxm: sessionStorage.USER_NAME,
                    bz: $('#feedback1').val(),
                    x: location_x,
                    y: location_y,
                    wgbm: wgbm
                };
            if (zxrxm === '') {
                $('#name1').attr('placeholder', '请填写姓名').css('border-color', 'red').focus();
                return false;
            } else {
                $('#name1').attr('placeholder', '').css('border-color', '#ccc');
            }
            if (zxnr === '') {
                $('#contents1').attr('placeholder', '请填写咨询内容').css('border-color', 'red').focus();
                return false;
            } else {
                $('#contents1').attr('placeholder', '').css('border-color', '#ccc');
            }
            $.ajax({
                type: 'POST',
                url: sessionStorage.URL + '/flzx',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'json',
                success: function () {
                    $('#legalAdviceDialog1').hide();
                    map.initAreaLayers();
                },
                error: function () {
                    //alert('提交失败！');
                }
            })
        }

        // 分页查询初始化
        function adviceInitPage(current_page, limit, max_page) {
            if (adviceCount >= 2) {
                $('#pagination_advice').jqPagination('destroy');
                $('#pagination_advice').jqPagination('option', 'current_page', current_page);
                $('#pagination_advice').jqPagination('option', 'max_page', max_page);
            }
            $('#pagination_advice').jqPagination({
                link_string: '/page={page_number}',
                current_page: current_page,
                max_page: max_page,
                page_string: '{current_page}/{max_page}',
                paged: function (page) {
                    getAdviceData(page, limit, false);
                }
            });
        }

        function getAdviceData(page, limit, isFirst) {
            $('#legalAdviceDialog1').hide();
            let max_page = 0,
                data = {
                    page: page,
                    limit: limit,
                    type: $('#adviceType').val(),
                    dayStart: $('#adviceDate1').val(),
                    dayEnd: $('#adviceDate2').val(),
                    content: $('#adviceContent').val()
                };
            $.ajax({
                type: 'GET',
                url: sessionStorage.URL + '/flzx/query',
                contentType: 'text/html; charset=utf-8',
                data: data,
                dataType: 'json',
                success: function (data) {
                    let result = data.data;
                    if (result.total > 0) {
                        if (isFirst) {
                            max_page = Math.ceil(result.total / limit);
                            adviceInitPage(1, limit, max_page);
                        }
                        let divs = "",
                            flzx = result.data;
                        for (let i = 0; i < flzx.length; i++) {
                            divs += '<div class="textBorder">' +
                            '<span class="json">' + JSON.stringify(flzx[i]) + '</span>' +
                            '<p>咨询人：' + flzx[i].zxrxm + '</p>' +
                            '<p>咨询事项：' + flzx[i].zxsxcontent + '</p>' +
                            '<p>咨询内容：' + flzx[i].zxnr + '</p>' +
                            '<p>咨询时间：' + new Date(flzx[i].zxsj).Format('yyyy-MM-dd') + '</p>' +
                            '<p>填报人：' + flzx[i].tbrxm + '</p>' +
                            '</div>';
                        }
                        $('#adviceC').empty().append(divs).height(service_h - 327 + 'px').show();
                        $('#adviceC .textBorder').on('click', function () {
                            let json = $(this).children('span').html(),
                                data = JSON.parse(json);
                            map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
                            $('#name2').val(data.zxrxm);
                            $('#sex2').val(data.zxrxb);
                            $('#tel2').val(data.zxrlxdh);
                            $('#place2').val(data.zxrjzd);
                            $('#adviceWay2').val(data.zxfscontent);
                            $('#adviceType2').val(data.zxsxcontent);
                            $('#adviceAgency2').val(data.jdrssjg);
                            $('#contents2').val(data.zxnr);
                            $('#date2').val(new Date(data.zxsj).Format('yyyy-MM-dd'));
                            $('#person2').val(data.tbrxm);
                            $('#answer').val(data.jd);
                            $('#date3').val(data.jdsj === undefined ? '' : (new Date(data.jdsj)).Format('yyyy-MM-dd'));
                            $('#person3').val(data.jdrxm);
                            $('#feedback2').val(data.bz);
                            sessionStorage.JLBH_advice = data.jlbh;
                            $('#legalAdviceDialog2').show();
                        })
                    } else {
                        $('#adviceC').html('无记录').height(service_h - 327 + 'px').show();
                    }
                }
            });
        }

        function adviceDetermine2() {
            let data = {
                jdsj: $('#date3').val(),
                jd: $('#answer').val(),
                bz: $('#feedback2').val(),
                jlbh: sessionStorage.JLBH_advice
            };
            $.ajax({
                type: 'PUT',
                url: sessionStorage.URL + '/flzx',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'json',
                success: function () {
                    $('#legalAdviceDialog2').hide();
                    getAdviceData(1, 10, true);
                },
                error: function () {
                    //alert('提交失败！');
                }
            })
        }

    }
)
;
