/**
 * 法治宣传
 * 宋晓倩
 * 2016/6/22.
 */

'use strict';

define([
    'jquery',
    'map',
    'common',
    'bootstrap-datetimepicker',
    'bootstrap-datetimepicker-zh-CN',
    'jqpagination',
    'validate',
    'messages-zh'],
    function ($, map, common) {

    let publicity_h = $('#content').height(),
        publicityCount = 0,
        imgCount_1 = 0,
        imgCount_2 = 0,
        url = 'http://10.27.7.161:8050/uploadFile.php',
        imgPath = 'http://10.27.7.161:8050/',
        date = new Date(),
        path = 'fzxc/' + date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate(),
        location_x = '',
        location_y = '',
        wgbm = '';
    return {
        init: init
    };

    // 初始化
    function init() {
        map.initAreaLayers();
        publicityCount = 0;

        // 录入
        $('#publicityEntry').on('click', function () {
            location_x = '';
            location_y = '';
            publicityEntry();
        });

        // 地图定位
        $('#location1').on('click', function () {
           $('#publicityDialog1').hide();
            map.getMapXY();
            $.subscribe('selectLocation.', function (e, result) {
                location_x = result.x;
                location_y = result.y;
                wgbm = result.WGBH;
                $('#publicityDialog1').show();
                $('#place1').val(result.address);
            });
        });

        
        // 查询
        $('#publicityQueryBtn').on('click', function () {
            $('#pagination input').val('');
            publicityCount++;
            getPublicityData(1, 10, true);
        });


        // 修改确定
        $('#publicityDetermine2').on('click', function () {
            publicityDetermine2();
            map.initAreaLayers();
        });

        // 上传图片
        imgUpload_1();

        $('#close,#closeT').on('click', function () {
            $('#delete').hide();
            $('#publicityDialog1').css('opacity', '1');
        });

        // 关闭 dialog
        $('.closed').on('click', function () {
            $('.dialog').hide();
            //map.initAreaLayers();
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
            startTimeId:'publicityDate1',
            endTimeId:'publicityDate2',
            placement:'bottom'
        });

        //录入时加入表单验证
        $('#addForm').validate({
            rules:{//定义验证规则
                material1:{//发放宣传材料 必须是input标签的name属性
                    maxlength:5,
                    digits:true //必须是整数
                },
                count1:{//参与人数
                    maxlength:10,
                    digits:true
                }
            },
            submitHandler:function(){
                publicityDetermine1();
                map.initAreaLayers();
            }
        });
    }

    function publicityEntry() {
        $('#publicityDialog2').hide();
        imgCount_1 = 0;
        $('input').val('');
        $('textarea').val('');
        $('#publicityDialog1').show();
        $('#feedbackImg_1').empty();
    }

    function publicityDetermine1() {
        let hdsj = $('#date1').val(),
            hdxsjzt = $('#theme1').val(),
            hdnr = $('#contents1').val(),
            fjdz = "",
            img = $('#feedbackImg_1').find('img');
        for (let i = 0; i < img.length; i++) {
            fjdz += path + '/' + img[i].name + ',';
        }
        fjdz = fjdz.substring(0, fjdz.length - 1);
        if (hdsj === '') {
            $('#date1').attr('placeholder', '请选择时间').css('border-color', 'red').focus();
            return false;
        } else {
            $('#date1').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (hdxsjzt === '') {
            $('#theme1').attr('placeholder', '请填写主题').css('border-color', 'red').focus();
            return false;
        } else {
            $('#theme1').attr('placeholder', '').css('border-color', '#ccc');
        }
        if (hdnr === '') {
            $('#contents1').attr('placeholder', '请填写内容摘要').css('border-color', 'red').focus();
            return false;
        } else {
            $('#contents1').attr('placeholder', '').css('border-color', '#ccc');
        }

        let data = {
            hdzzjg: $('#organization1').val(),
            hdsj: hdsj,
            hddd: $('#place1').val(),
            cjrs: $('#count1').val(),
            hdxsjzt: hdxsjzt,
            hdnr: hdnr,
            ffxczl: $('#material1').val(),
            bz: $('#remark1').val(),
            fjdz: fjdz,
            cjz: sessionStorage.USER_NAME,
            wgbm: wgbm,
            x: location_x,
            y: location_y
        };
        $.ajax({
            type: 'POST',
            url: sessionStorage.URL + '/fzxc',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function () {
                $('#publicityDialog1').hide();
                map.initAreaLayers();
            }
        });
    }

    // 分页查询初始化
    function publicityInitPage(current_page, limit, max_page,total) {
        if (publicityCount >= 2) {
            $('#pagination').jqPagination('destroy');
            $('#pagination').jqPagination('option', 'current_page', current_page);
            $('#pagination').jqPagination('option', 'max_page', max_page);
        }
        $('#pagination').jqPagination({
            link_string: '/page={page_number}',
            current_page: current_page,
            max_page: max_page,
            page_string: '{current_page}/{max_page} '+'共'+total+'条',
            paged: function (page) {
                getPublicityData(page, limit, false);
            }
        });
    }

    function getPublicityData(page, limit, isFirst) {
        $('#publicityDialog1').hide();
        let max_page = 0,
            data = {
                page: page,
                limit: limit,
                dayStart: $('#publicityDate1').val(),
                dayEnd: $('#publicityDate2').val(),
                content: $('#publicityContent').val()
            };
        $.ajax({
            type: 'GET',
            url: sessionStorage.URL + '/fzxc/rmtjInfo',
            contentType: 'text/html; charset=utf-8',
            data: data,
            dataType: 'json',
            success: function (data) {
                let result = data.data;
                if (result.total > 0) {
                    if (isFirst) {
                        max_page = Math.ceil(result.total / limit);
                        publicityInitPage(1, limit, max_page,result.total);
                    }
                    let divs = '',
                        fzxc = result.data;
                    for (let i = 0; i < fzxc.length; i++) {
                        divs += '<div class="textBorder">' +
                        '<span class="json">' + JSON.stringify(fzxc[i]) + '</span>' +
                        '<p>主题：' + (fzxc[i].hdxsjzt === undefined ? '' : fzxc[i].hdxsjzt) + '</p>' +
                        '<p>内容摘要：' + (fzxc[i].hdnr === undefined ? '' : fzxc[i].hdnr) + '</p>' +
                        '<p>时间：' + (fzxc[i].hdsj === undefined ? '' : new Date(fzxc[i].hdsj).Format('yyyy-MM-dd')) + '</p>' +
                        '</div>';
                    }
                    $('#publicityC').empty().append(divs).height(publicity_h - 247 + 'px').show();
                    $('.textBorder').on('click', function () {
                        $('#publicityDialog2 input').val('');
                        $('textarea').val('');
                        $('#feedbackImg_2').empty();
                        imgCount_2 = 0;
                        let json = $(this).children('span').html(),
                            data = JSON.parse(json);
                        map.showPointByXY(data.x, data.y, 'img/icon-lwdw-red.gif');
                        $('#organization2').val(data.hdzzjg);
                        $('#date2').val(new Date(data.hdsj).Format('yyyy-MM-dd'));
                        $('#place2').val(data.hddd);
                        $('#count2').val(data.cjrs);
                        $('#theme2').val(data.hdxsjzt);
                        $('#contents2').val(data.hdnr);
                        $('#material2').val(data.ffxczl);
                        $('#remark2').val(data.bz);
                        if (data.fjdz != undefined) {
                            let img = '',
                                arr = data.fjdz.split(',');
                            for (let i = 0; i < arr.length; i++) {
                                let index = arr[i].lastIndexOf('/') + 1,
                                    name = arr[i].substring(index);
                                imgCount_2++;
                                img += '<img width="200px" height="100px" style="margin:0 5px 10px 3px;" name=' + name + ' src=' + imgPath + arr[i] + '>';
                            }
                            $('#feedbackImg_2').append(img);
                            $('#feedbackImg_2 button').on('click', function () {
                                $(this).parent().remove();
                            });
                        }
                        sessionStorage.JLBH_publicity = data.jlbh;
                        $('#publicityDialog2').show();
                    })
                } else {
                    $('#publicityC').html('无记录').height(publicity_h - 247 + 'px').show();
                }
            }
        });
    }

    function publicityDetermine2() {
        let fjdz = '',
            img = $('#feedbackImg_2').find('img');
        for (let i = 0; i < img.length; i++) {
            fjdz += path + '/' + img[i].name + ',';
        }
        fjdz = fjdz.substring(0, fjdz.length - 1);
        let data = {
            hdzzjg: $('#organization2').val(),
            hdsj: $('#date2').val(),
            hddd: $('#place2').val(),
            cjrs: $('#count2').val(),
            hdxsjzt: $('#theme2').val(),
            hdnr: $('#contents2').val(),
            ffxczl: $('#material2').val(),
            bz: $('#remark2').val(),
            fjdz: fjdz,
            cjz: sessionStorage.USER_NAME,
            x: location_x,
            y: location_y,
            jlbh: sessionStorage.JLBH_publicity
        };
        $.ajax({
            type: 'PUT',
            url: sessionStorage.URL + '/fzxc',
            contentType: 'application/json',
            data: data,
            dataType: 'json',
            success: function () {
                $('#publicityDialog2').hide();
                getPublicityData(1, 10, true);
            },
            error: function () {
                //alert('提交失败！');
            }
        })
    }

    // 上传图片
    function getImgURL(file) {
        let url = null;
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }

    function imgUpload_1() {
        let arr = [];
        $('#file_1').change(function () {
            imgCount_1++;
            let file = this.files[0],
                imgUrl = getImgURL(file),
                obj = {},
                suffix = /\.[^\.]+$/.exec(file.name),
                date = new Date(),
                name = date.getTime() + suffix;
            obj.name = name;
            obj.file = file;
            arr.push(obj);
            if (imgUrl) {
                let img = '';
                img = '<div>'
                + '<img width="200px" height="100px" style="margin:0 5px 10px 3px;" name=' + name + ' src=' + imgUrl + '>'
                + '<button class="btn btnImg" type="button" id="btn_upload' + imgCount_1 + '">上传</button>'
                + '<button class="btn btnImg" type="button" id="btn_delete' + imgCount_1 + '">删除</button>'
                + '</div>';
                $('#feedbackImg_1').append(img);
            }
            $('#btn_upload' + imgCount_1).on('click', function () {
                let _this = $(this),
                    data = new FormData(),
                    name = _this.siblings('img').attr('name'),
                    file = null;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].name == name) {
                        file = arr[i].file;
                        break;
                    }
                }
                data.append('path', path);
                data.append('filename', name);
                data.append('type', 0);
                data.append('Filedata', file);
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                    cache: false,
                    async:	false,
                    contentType: false,    //不可缺
                    processData: false,    //不可缺
                    success: function () {
                        _this.attr('disabled', true).css('width', '90px').text('上传成功！');
                    }
                });
            });
            $('#btn_delete' + imgCount_1).on('click', function () {
                let btn = $('#btn_upload' + imgCount_1);
                if (btn.text() == '上传') {
                    btn.parent().remove();
                    $('#file_1').val('');
                } else if (btn.text() == '上传成功！') {
                    let _this = $(this),
                        data = new FormData(),
                        name = _this.siblings('img').attr('name'),
                        file = null;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].name == name) {
                            file = arr[i].file;
                            break;
                        }
                    }
                    data.append('path', path);
                    data.append('filename', name);
                    data.append('type', 1);
                    data.append('Filedata', file);
                    $.ajax({
                        url: url,
                        type: 'POST',
                        data: data,
                        cache: false,
                        contentType: false,    //不可缺
                        processData: false,    //不可缺
                        success: function () {
                            _this.parent().remove();
                            $('#file_1').val('');
                        }
                    });
                }
            });
        });
    }

});