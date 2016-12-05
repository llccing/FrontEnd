/**
 * 人民调解
 * 宋晓倩
 * 2016/6/22.
 */

'use strict';

define(['jquery', 'map', 'common', 'bootstrap-datetimepicker', 'bootstrap-datetimepicker-zh-CN', 'jqpagination'], function ($, map, common) {

    let people_h = $('#content').height(),
        untreatedCount = 0,
        processedCount = 0,
        countA = 0,
        countB = 0,
        location_x,
        location_y,
        wgbm = '';

    return {
        init: init
    };

    // 初始化
    function init() {

        map.initAreaLayers(); // 重新加载图层
        getDisputeType(); // 纠纷类型初始化
        navHeader(); // tab切换
        untreatedCount = 0;
        processedCount = 0;

        // 未处理录入
        $('#untreatedEntry').on('click', function () {
            countA = 0;
            countB = 0;
            untreatedEntry();
        });

        // 添加当事人甲
        $('.btnA').on('click', function () {
            btnA();
        });

        // 添加当事人甲查询
        $('#queryA').on('click', function () {
            queryA();
        });

        // 添加当事人甲确定
        $('#determineA').on('click', function () {
            countA++;
            determineA();
        });

        // 删除当事人甲
        $('.deleteA').on('click', function () {
            deleteA();
        });

        // 添加当事人乙
        $('.btnB').on('click', function () {
            btnB();
        });
        // 添加当事人乙查询
        $('#queryB').on('click', function () {
            queryB();
        });

        // 添加当事人乙确定
        $('#determineB').on('click', function () {
            countB++;
            determineB();
        });

        // 删除当事人乙
        $('.deleteB').on('click', function () {
            deleteB();
        });

        location(); // 纠纷地址地图定位

        // 未处理新增确定
        $('#untreatedDetermine1').on('click', function () {
            untreatedDetermine1();
        });

        // 未处理查询
        $('#untreatedQueryBtn').on('click', function () {
            untreatedCount++;
            getUntreatedData(1, 10, true);
        });

        // 未处理修改确定
        $('#untreatedDetermine2').on('click', function () {
            untreatedDetermine2();
            map.initAreaLayers();
        });

        // 已处理查询
        $('#processedQueryBtn').on('click', function () {
            processedCount++;
            getProcessedData(1, 10, true);
        });

        // 已处理修改确定
        $('#processedDetermine').on('click', function () {
            processedDetermine();
            map.initAreaLayers();
        });

        // 关闭 dialog
        $('.untreatedClose1').on('click', function () {
            $('#untreatedDialog1').hide();
            $('#untreatedForm1')[0].reset();
        });
        $('.untreatedClose2').on('click', function () {
            $('#untreatedDialog2').hide();
            //map.initAreaLayers();
        });
        $('.processedClose').on('click', function () {
            $('#processedDialog').hide();
        });
        $('.partyAClose').on('click', function () {
            $('#addPartyA').hide();
            $('#untreatedDialog1').show();
        });
        $('.partyBClose').on('click', function () {
            $('#addPartyB').hide();
            $('#untreatedDialog1').show();
        });

        // 时间控件
        $('.form_date').datetimepicker({
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
            startTimeId: 'untreatedDate1',
            endTimeId: 'untreatedDate2',
            placement: 'bottom'
        });

        common.dateValidate({
            startTimeId: 'processedDate1',
            endTimeId: 'processedDate2',
            placement: 'bottom'
        });
    }

    // header nav 切换
    function navHeader() {
        $('.navHeader li').each(function (index) {
            $(this).on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $('.basicCommon').removeClass('active').eq(index).addClass('active');
                $('#untreatedDialog1').hide();
                $('#untreatedDialog2').hide();
                $('#processedDialog').hide();
                map.initAreaLayers();
            })
        });
    }

    // 纠纷类型初始化
    function getDisputeType() {
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/rmtj/theme',
            contentType: 'text/html; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                let options = '';
                for (let i in data.data) {
                    options += '<option value=' + data.data[i].dmbm + '>' + data.data[i].dmmc + '</option>';
                }
                $('.disputeType').append(options);
            },
            error: function () {
                //alert('纠纷类型初始化错误！');
            }
        })
    }

    /**
     * 模块1：未处理
     **/

    function untreatedEntry() {
        $('#partyA_1').empty();
        $('#partyB_1').empty();
        $('input').val('');
        $('textarea').val('');
        $('#formA').removeClass('formCommon');
        $('#untreatedDialog1').show();
        $('#untreatedDialog2').hide();
    }

    function btnA() {
        $('#untreatedDialog1').hide();
        $('#addPartyA input').val('');
        $('.addResult').empty().hide();
        $('#addFormA').hide();
        $('#addPartyA').show();
    }

    function queryA() {
        $('#table_A').hide();
        $('#table_A tbody').html('');
        $('.addResult').empty().hide();
        $('#addFormA').hide();
        $('#newA').removeClass('new');
        let name = $('#nameA').val(),
            tel = $('#telA').val(),
            data = {
                name: name,
                tel: tel
            };
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/rmtj/getPersonByNameAndTel',
            contentType: 'text/html; charset=utf-8',
            data: data,
            dataType: 'json',
            success: function (data) {
                let result = data.data;
                if (result != '') {
                    let trs = '';
                    for (let i = 0; i < result.length; i++) {
                        trs += '<tr class="people">' +
                        '<td class="none">' + JSON.stringify(result[i]) + '</td>' +
                        '<td>' + result[i].name + '</td>' +
                        '<td>' + result[i].lxdh + '</td>' +
                        '</tr>';
                    }
                    $('#table_A tbody').append(trs);
                    $('#table_A').show();
                    $('#table_A').on('click', 'tr.people', function () {
                        $('#table_A').hide();
                        let json = $(this).find('td:first').html(),
                            data = JSON.parse(json);
                        $('#addFormA .jlbh').val(data.ryxxj);
                        $('#nameA_a').val(data.name);
                        $('#telA_a').val(data.lxdh);
                        $('#addressA_a').val(data.jtzz);
                        $('#workA_a').val(data.gzdw);
                        $('#addFormA').show();
                    });
                } else {
                    $('.addResult').html('无记录').show();
                    $('#addFormA input').val('');
                    $('#addFormA').show();
                    $('#newA').addClass('new');
                }
            }
        })
    }

    function determineA() {
        let jlbh = '',
            name = $('#nameA_a').val(),
            sex = $('#sexA_a').val(),
            tel = $('#telA_a').val(),
            address = $('#addressA_a').val(),
            work = $('#workA_a').val(),
            data = {
                name: name,
                xb: sex,
                lxdh: tel,
                jtzz: address,
                gzdw: work
            },
            add = '';
        if (name === '') {
            $('#nameA_a').attr('placeholder', '请填写姓名').css('border-color', 'red').focus();
            return false;
        } else {
            $('#nameA_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (tel === '') {
            $('#telA_a').attr('placeholder', '请填写联系电话').css('border-color', 'red').focus();
            return false;
        } else {
            $('#telA_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (address == '' && work == '') {
            $('#addressA_a').attr('placeholder', '家庭住址和工作单位不能都为空').css('border-color', 'red').focus();
            return false;
        } else {
            $('#addressA_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        $.ajax({
            type: 'POST',
            url: sessionStorage.URL + '/rmtj/addPerson',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (data) {
                jlbh = data.data.jlbh;
                partyA_1(add, countA, jlbh, name, tel, address, work);
            }
        });
    }

    function partyA_1(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="0" id="jlbhA_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + work + '>' +
        '<hr/>';
        $('#partyA_1').append(add);
        $('#addPartyA').hide();
        $('#formA').addClass('formCommon');
        if (address == '') {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == '') {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#untreatedDialog1').show();
    }

    function deleteA() {
        countA = 0;
        $('#partyA_1').empty();
        $('#formA').removeClass('formCommon');
    }

    function btnB() {
        $('#untreatedDialog1').hide();
        $('#addPartyB input').val('');
        $('.addResult').empty().hide();
        $('#addFormB').hide();
        $('#addPartyB').show();
    }

    function queryB() {
        $('#table_B').hide();
        $('#table_B tbody').html('');
        $('.addResult').empty().hide();
        $('#addFormB').hide();
        $('#newB').removeClass('new');
        let name = $('#nameB').val(),
            tel = $('#telB').val(),
            data = {
                name: name,
                tel: tel
            };
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/rmtj/getPersonByNameAndTel',
            contentType: 'text/html; charset=utf-8',
            data: data,
            dataType: 'json',
            success: function (data) {
                let result = data.data;
                if (result != '') {
                    let trs = '';
                    for (let i = 0; i < result.length; i++) {
                        trs += '<tr class="people">' +
                        '<td class="none">' + JSON.stringify(result[i]) + '</td>' +
                        '<td>' + result[i].name + '</td>' +
                        '<td>' + result[i].lxdh + '</td>' +
                        '</tr>';
                    }
                    $('#table_B tbody').append(trs);
                    $('#table_B').show();
                    $('#table_B').on('click', 'tr.people', function () {
                        $('#table_B').hide();
                        let json = $(this).find('td:first').html(),
                            data = JSON.parse(json);
                        $('#addFormB .jlbh').val(data.ryxxj);
                        $('#nameB_a').val(data.name);
                        $('#telB_a').val(data.lxdh);
                        $('#addressB_a').val(data.jtzz);
                        $('#workB_a').val(data.gzdw);
                        $('#addFormB').show();
                    });
                } else {
                    $('.addResult').html('无记录').show();
                    $('#addFormB input').val('');
                    $('#addFormB').show();
                    $('#newB').addClass('new');
                }
            }
        })
    }

    function determineB() {
        let jlbh = '',
            name = $('#nameB_a').val(),
            sex = $('#sexB_a').val(),
            tel = $('#telB_a').val(),
            address = $('#addressB_a').val(),
            work = $('#workB_a').val(),
            data = {
                name: name,
                xb: sex,
                lxdh: tel,
                jtzz: address,
                gzdw: work
            },
            add = '';

        if (name === '') {
            $('#nameB_a').attr('placeholder', '请填写姓名').css('border-color', 'red').focus();
            return false;
        } else {
            $('#nameB_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (tel === '') {
            $('#telB_a').attr('placeholder', '请填写联系电话').css('border-color', 'red').focus();
            return false;
        } else {
            $('#telB_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (address == '' && work == '') {
            $('#addressB_a').attr('placeholder', '家庭住址和工作单位不能都为空').css('border-color', 'red').focus();
            return false;
        } else {
            $('#addressB_a').attr('placeholder', '').css('border-color', '#ccc');
        }
        $.ajax({
            type: 'POST',
            url: sessionStorage.URL + '/rmtj/addPerson',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function (data) {
                jlbh = data.data.jlbh;
                partyB_1(add, countB, jlbh, name, tel, address, work);
            }
        });
    }

    function partyB_1(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="1" id="jlbhB_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly readonly value=' + work + '>' +
        '<hr/>';
        $('#partyB_1').append(add);
        $('#addPartyB').hide();
        $('#formB').addClass('formCommon');
        if (address == '') {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == '') {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#untreatedDialog1').show();
    }

    function deleteB() {
        countB = 0;
        $('#partyB_1').empty();
        $('#formA').removeClass('formCommon');
    }

    // 地图定位
    function location() {
        $('#jfLocation').on('click', function () {
            $('#untreatedDialog1').hide();
            map.getMapXY();
            $.subscribe('selectLocation.', function (e, result) {
                location_x = result.x;
                location_y = result.y;
                wgbm = result.WGBH;
                $('#untreatedDialog1').show();
                $('#jfPlace').val(result.address);
            });
        });
    }

    function untreatedDetermine1() {
        let personA = [],
            personB = [],
            person = [],
            jfms = $('#disputes1').val(),
            jfdz = $('#jfPlace').val(),
            data = {};
        for (let i = 0; i < countA; i++) {
            personA[i] = {};
            personA[i].ssryjlbh = $('#jlbhA_' + (i + 1)).val();
            personA[i].rylx = $('#jlbhA_' + (i + 1)).attr('rylx');
        }
        for (let i = 0; i < countB; i++) {
            personB[i] = {};
            personB[i].ssryjlbh = $('#jlbhB_' + (i + 1)).val();
            personB[i].rylx = $('#jlbhB_' + (i + 1)).attr('rylx');
        }
        person = personA.concat(personB);
        if (jfdz === '') {
            $('#jfPlace').attr('placeholder', '请选择纠纷地址').css('border-color', 'red').focus();
            return false;
        } else {
            $('#jfPlace').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (jfms === '') {
            $('#disputes1').attr('placeholder', '请填写纠纷事项').css('border-color', 'red').focus();
            return false;
        } else {
            $('#disputes1').attr('placeholder', '').css('border-color', '#ccc');
        }
        data = {
            dsrxx: person || [],
            jflx: $('#disputesType1').val(),
            jfdz: jfdz,
            jfms: jfms,
            tjsj: $('#date1').val(),
            tjyxm: $('#person1').val(),
            tcjg: $('#result1').val(),
            hf: $('#visit1').val(),
            wgbm: wgbm,
            x: location_x,
            y: location_y
        };
        $.ajax({
            type: 'POST',
            url: sessionStorage.URL + '/rmtj',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function () {
                $('#untreatedDialog1').hide();
                $('#untreatedForm1')[0].reset();
            }
        });
    }

    // 分页查询初始化
    function UntreatedInitPage(current_page, limit, max_page, total) {
        if (untreatedCount >= 2) {
            $('#pagination_untreated').jqPagination('destroy');
            $('#pagination_untreated').jqPagination('option', 'current_page', current_page);
            $('#pagination_untreated').jqPagination('option', 'max_page', max_page);
        }
        $('#pagination_untreated').jqPagination({
            link_string: '/page={page_number}',
            current_page: current_page,
            max_page: max_page,
            page_string: '{current_page}/{max_page} ' + '共' + total + '条',
            paged: function (page) {
                getUntreatedData(page, limit, false);
            }
        });
    }

    function getUntreatedData(page, limit, isFirst) {
        $('#untreatedDialog1').hide();
        let max_page = 0,
            data = {
                page: page,
                limit: limit,
                type: $('#untreatedType').val(),
                personType: sessionStorage.ROLEID,
                status: 0,
                dayStart: $('#untreatedDate1').val(),
                dayEnd: $('#untreatedDate2').val(),
                content: $('#untreatedContent').val()
            };
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/rmtj/pageRmtj',
            contentType: 'text/html; charset=utf-8',
            data: data,
            dataType: 'json',
            success: function (data) {
                let result = data.data;
                if (result.total > 0) {
                    if (isFirst) {
                        max_page = Math.ceil(result.total / limit);
                        UntreatedInitPage(1, limit, max_page, result.total);
                    }
                    let divs = '';
                    let data = result.data;
                    for (let i = 0, j = data.length; i < j; i++) {
                        divs += '<div class="textBorder">' +
                        '<span class="json">' + JSON.stringify(data[i]) + '</span>' +
                        '<p>纠纷类型：' + data[i].jflx1 + '</p>' +
                        '<p>纠纷内容：' + data[i].jfms + '</p>' +
                        '<p>创建时间：' + new Date(data[i].cjsj).Format('yyyy-MM-dd') + '</p>' +
                        '<p>调解人：' + data[i].tjyxm + '</p>' +
                        '</div>';
                    }
                    $('#untreatedC').empty().append(divs).height(people_h - 328 + 'px').show();
                    $('.json').hide();
                    $('#untreatedC .textBorder').on('click', function () {
                        $('#formB').removeClass('formCommon');
                        $('#partyA_2').empty();
                        $('#partyB_2').empty();
                        countA = 0;
                        countB = 0;
                        let json = $(this).children('.json').html(),
                            data = JSON.parse(json);
                        map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
                        if (data.ryxx != []) {
                            for (let i = 0, j = data.ryxx.length; i < j; i++) {
                                let jyf = data.ryxx[i].jyf,
                                    add = '';
                                switch (jyf) {
                                    case '甲方':
                                        countA++;
                                        partyA_2(add, countA, data.ryxx[i].ryxxj, data.ryxx[i].name, data.ryxx[i].lxdh, data.ryxx[i].jtzz, data.ryxx[i].gzdw);
                                        break;
                                    case '乙方':
                                        countB++;
                                        partyB_2(add, countB, data.ryxx[i].ryxxj, data.ryxx[i].name, data.ryxx[i].lxdh, data.ryxx[i].jtzz, data.ryxx[i].gzdw);
                                        break;
                                }
                            }
                        }
                        if (data.isDeal === '0') {
                            $('#untreatedCheckbox1').attr('checked', true);
                            $('#untreatedFw').removeClass('hide');
                            $('#date2').attr('disabled', true).css('background', '#eee');
                            $('#person2').attr('readonly', true);
                            $('#result2').attr('readonly', true);
                        } else {
                            $('#untreatedCheckbox1').attr('checked', false);
                            $('#untreatedFw').addClass('hide');
                            $('#date2').attr('disabled', false).css('background', '#fff');
                            $('#person2').attr('readonly', false);
                            $('#result2').attr('readonly', false);
                        }
                        $('#disputesType2').val(data.jflx1);
                        $('#jfPlace_2').val(data.jfdz);
                        $('#disputes2').val(data.jfms);
                        $('#date2').val(data.tjsj === undefined ? '' : new Date(data.tjsj).Format('yyyy-MM-dd'));
                        $('#person2').val(data.tjyxm);
                        $('#result2').val(data.tcjg);
                        $('#visit2').val(data.hf);
                        sessionStorage.JLBH_untreated = data.jlbh;
                        $('#untreatedDialog2').show();
                        $('#untreatedDialog1').hide();
                    });
                } else {
                    $('#untreatedC').html('无记录').height(people_h - 328 + 'px').show();
                }
            }
        });
    }

    function partyA_2(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="0" id="jlbhA_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + work + '>' +
        '<hr/>';
        $('#partyA_2').append(add);
        $('#addPartyA').hide();
        $('#formA').addClass('formCommon');
        if (address == undefined) {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == undefined) {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#untreatedDialog2').css('opacity', '1');
    }

    function partyB_2(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="1" id="jlbhB_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + work + '>' +
        '<hr/>';
        $('#partyB_2').append(add);
        $('#addPartyB').hide();
        $('#formB').addClass('formCommon');
        if (address == undefined) {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == undefined) {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#untreatedDialog2').css('opacity', '1');
    }

    function untreatedDetermine2() {
        let data = {};
        if ($('#result2').prop('readonly')) {
            data = {
                fwzxtjsj: $('#fwDate').val(),
                fwzxtjyxm: $('#fwPerson').val(),
                fwzxtcjg: $('#fwResult').val(),
                hf: $('#visit2').val(),
                jlbh: sessionStorage.JLBH_untreated
            };
        } else {
            let isDeal = '';
            if ($('#untreatedCheckbox1').prop('checked')) {
                isDeal = 0;
            } else {
                isDeal = 1;
            }
            data = {
                tjsj: $('#date2').val(),
                tjyxm: $('#person2').val(),
                tcjg: $('#result2').val(),
                hf: $('#visit2').val(),
                isDeal: isDeal,
                jlbh: sessionStorage.JLBH_untreated
            };
        }

        $.ajax({
            type: 'PUT',
            url: sessionStorage.URL + '/rmtj',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function () {
                $('#untreatedDialog2').hide();
                getUntreatedData(1, 10, true);
                $('.form-inline')[0].reset();
            }
        });
    }

    /**
     * 模块2 ：已处理
     **/

    // 分页查询初始化
    function processedInitPage(current_page, limit, max_page, total) {
        if (processedCount >= 2) {
            $('#pagination_processed').jqPagination('destroy');
            $('#pagination_processed').jqPagination('option', 'current_page', current_page);
            $('#pagination_processed').jqPagination('option', 'max_page', max_page);
        }
        $('#pagination_processed').jqPagination({
            link_string: '/page={page_number}',
            current_page: current_page,
            max_page: max_page,
            page_string: '{current_page}/{max_page} ' + '共' + total + '条',
            paged: function (page) {
                getProcessedData(page, limit, false);
            }
        });
    }

    function getProcessedData(page, limit, isFirst) {
        let max_page = 0,
            data = {
                page: page,
                limit: limit,
                type: $('#processedType').val(),
                personType: sessionStorage.ROLEID,
                status: 1,
                dayStart: $('#processedDate1').val(),
                dayEnd: $('#processedDate2').val(),
                content: $('#processedContent').val()
            };
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/rmtj/pageRmtj',
            contentType: 'text/html; charset=utf-8',
            data: data,
            dataType: 'json',
            success: function (data) {
                let result = data.data;
                if (result.total > 0) {
                    if (isFirst) {
                        max_page = Math.ceil(result.total / limit);
                        processedInitPage(1, limit, max_page, result.total);
                    }
                    let divs = '';
                    let data = result.data;
                    for (let i = 0, j = data.length; i < j; i++) {
                        divs += '<div class="textBorder">' +
                        '<span class="json">' + JSON.stringify(data[i]) + '</span>' +
                        '<p>纠纷类型：' + data[i].jflx1 + '</p>' +
                        '<p>纠纷内容：' + data[i].jfms + '</p>' +
                        '<p>创建时间：' + new Date(data[i].cjsj).Format('yyyy-MM-dd') + '</p>' +
                        '<p>调解人：' + data[i].tjyxm + '</p>' +
                        '</div>';
                    }
                    $('#processedC').empty().append(divs).height(people_h - 328 + 'px').show();
                    $('.json').hide();
                    $('#processedC .textBorder').on('click', function () {
                        $('#formC').removeClass('formCommon');
                        $('#partyA_3').empty();
                        $('#partyB_3').empty();
                        countA = 0;
                        countB = 0;
                        let json = $(this).children('.json').html(),
                            data = JSON.parse(json);
                        map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
                        if (data.ryxx != []) {
                            for (let i = 0; i < data.ryxx.length; i++) {
                                let jyf = data.ryxx[i].jyf,
                                    add = '';
                                switch (jyf) {
                                    case '甲方':
                                        countA++;
                                        partyA_3(add, countA, data.ryxx[i].ryxxj, data.ryxx[i].name, data.ryxx[i].lxdh, data.ryxx[i].jtzz, data.ryxx[i].gzdw);
                                        break;
                                    case '乙方':
                                        countB++;
                                        partyB_3(add, countB, data.ryxx[i].ryxxj, data.ryxx[i].name, data.ryxx[i].lxdh, data.ryxx[i].jtzz, data.ryxx[i].gzdw);
                                        break;
                                }
                            }
                        }
                        if (data.isDeal === '0') {
                            $('#untreatedCheckbox2').attr('checked', true);
                            $('#untreatedFw2').removeClass('hide');
                            $('#fwDate2').val(data.fwzxtjsj === undefined ? '' : new Date(data.fwzxtjsj).Format('yyyy-MM-dd'));
                            $('#fwPerson2').val(data.fwzxtjyxm);
                            $('#result2').val(data.fwzxtcjg);
                        } else {
                            $('#untreatedCheckbox1').attr('checked', false);
                            $('#untreatedFw').addClass('hide');
                        }
                        $('#disputesType3').val(data.jflx1);
                        $('#jfPlace_3').val(data.jfdz);
                        $('#disputes3').val(data.jfms);
                        $('#date3').val(data.tjsj === undefined ? '' : new Date(data.tjsj).Format('yyyy-MM-dd'));
                        $('#person3').val(data.tjyxm);
                        $('#result3').val(data.tcjg);
                        $('#visit3').val(data.hf);
                        sessionStorage.JLBH_processed = data.jlbh;
                        $('#processedDialog').show();
                    });
                } else {
                    $('#processedC').html('无记录').height(people_h - 328 + 'px').show();
                }
            }
        });
    }

    function partyA_3(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="0" id="jlbhA_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + work + '>' +
        '<hr/>';
        $('#partyA_3').append(add);
        $('#addPartyA').hide();
        $('#formA').addClass('formCommon');
        if (address == undefined) {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == undefined) {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#processedDialog').css('opacity', '1');
    }

    function partyB_3(add, count, jlbh, name, tel, address, work) {
        add = '<input type="text" class="jlbh" rylx="1" id="jlbhB_' + count + '" value=' + jlbh + '>' +
        '<label>' + '姓名' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + name + '>' +
        '<label>' + '联系电话' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + tel + '>' +
        '<label>' + '家庭住址' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + address + '>' +
        '<label>' + '工作单位' + '</label>' +
        '<input type="text" class="form-control inputType10" readonly value=' + work + '>' +
        '<hr/>';
        $('#partyB_3').append(add);
        $('#addPartyB').hide();
        $('#formB').addClass('formCommon');
        if (address == undefined) {
            $('input[value="' + address + '"]').addClass('hide').prev().addClass('hide');
        }
        if (work == undefined) {
            $('input[value="' + work + '"]').addClass('hide').prev().addClass('hide');
        }
        $('#processedDialog').css('opacity', '1');
    }

    function processedDetermine() {
        let data = {
            hf: $('#visit3').val(),
            jlbh: sessionStorage.JLBH_processed
        };
        $.ajax({
            type: 'PUT',
            url: sessionStorage.URL + '/rmtj',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function () {
                $('#processedDialog').hide();
                getProcessedData(1, 10, true);
                $('.form-inline')[0].reset();
            }
        });
    }

});

