/**
 * 地图点击坐标点
 * 邢祥超
 * 2016/10/13
 */
"use strict";

define(['jquery', 'map', 'common'], function ($, map, common) {

    const URL = {
        //社区矫正人员照片
        SQJZZP: sessionStorage.URLYCGRID + '/tbfxryxxs/picture',
        //社区矫正人员信息
        SQJZXX: sessionStorage.URLYCGRID + '/tbfxryxxs/',
        //安置帮教人员照片
        AZBJZP: sessionStorage.URLYCGRID + '/tbxsjjryxxs/picture',
        //安置帮教人员信息
        AZBJXX: sessionStorage.URLYCGRID + '/tbxsjjryxxs/',
        //走访记录
        ZFJL: sessionStorage.URL + '/zfjl/queryVisit',
        //更新走访记录
        PUTZFJL: sessionStorage.URL + '/zfjl',
        //轨迹信息查询
        LSGJ: sessionStorage.URL + '/locus'

    };

    return {
        init: init,
        sqPeopleClick: sqPeopleClick,
        azPeopleClick: azPeopleClick,
        visit: visit,
        record: record
    };

    //根据专题点击回调
    var mapDoubleNum = 0;

    function init() {

        mapDoubleNum = 0;

        // dialog关闭
        $('.closed').click(function () {
            $('.dialogs').hide();
            $('.sf-name').removeClass('tdclick');
        });
        //dialog 列表关闭
        $('.sf-closed').click(function () {
            $('#personnel-list,.dialogs').hide();
        });

        //走访、轨迹dialog关闭
        $('.zf-closed').click(function () {
            $('.visit-wrapper,.ls-dialog').hide();
            $('.ls-form')[0].reset();
        });

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

        $.subscribe('ycsf.homePage.showPopuList', function (e, results) {
            let list = results.list,
                flag = results.flag,
                listHtml = "";
            for (let i = 0; i < list.length; i++) {
                listHtml += "<tr><td><div class='sf-name' id=" + list[i].id + " themeType='" + list[i].type + "' >" + list[i].type + "-" + list[i].name + "</div></td></tr>";
                ;
            }
            if (mapDoubleNum != flag) {
                $('#sfzt-list-table').html(listHtml);
                mapDoubleNum = flag;
            } else {
                $('#sfzt-list-table').append(listHtml);
            }
            $('#personnel-list').show();
            $('.dialogs').hide();


            $('.sf-name').click(function () {
                let $this = $(this),
                    themeType = $this.attr('themeType');
                $('.sf-name').removeClass('tdclick');
                $this.addClass('tdclick');
                switch (themeType) {
                    case '社区矫正':
                        position();
                        sqPeopleClick(this);
                        break;
                    case '安置帮教':
                        position();
                        azPeopleClick(this);
                        break;
                    case '法律服务机构':
                        $.publish('ycsf.homePage.showThemeInfo', {
                            id: $(this).attr('id'),
                            type: $(this).attr('themeType')
                        });
                        break;
                    case '视频':
                        $.publish('ycsf.homePage.showThemeInfo', {
                            id: $(this).attr('id'),
                            type: $(this).attr('themeType')
                        });
                        break;
                }
            });

        });

        $.subscribe('ycsf.homePage.showThemeInfo', function (e, results) {
            let type = results.type,
                sftab = "",
                data = {id: results.id};
            switch (type) {
                case '安置帮教' :
                    position();
                    azPeopleClick(data.id);
                    break;
                case '社区矫正' :
                    position();
                    sqPeopleClick(data.id);
                    break;
                case '人民调解' :
                    $.ajax({
                        type: 'GET',
                        url: sessionStorage.URL + '/rmtj/getInfoById',
                        contentType: 'text/html;charset=utf-8',
                        dataType: 'json',
                        data: data,
                        success: function (data) {
                            let result = data.data;
                            sftab += "<tr><td colspan='2'>纠纷类型:" + (result.jflx1) + "</td></tr>"
                            + "<tr><td class='xm-td'>调节时间:" + (new Date(result.tjsj).Format('yyyy-MM-dd')) + "</td><td class='xb-td'>调解员:" + (result.tjyxm) + "</td></tr>"
                            + "<tr><td colspan='2'>纠纷描述:" + (result.jfms) + "</td></tr>"
                            + "<tr><td colspan='2'>调查结果:" + (result.tcjg) + "</td></tr>"
                            + "<tr><td colspan='2'>回访:" + (result.hf) + "</td></tr>";
                            $('#sfrylx').html(type);
                            $('#sfzt-table').html(sftab);
                            $('#judicialMan').show();
                            $('#sqPersonInfoDialog,#azPersonInfoDialog').hide();
                        },
                        error: function () {
                            console.log('人员信息加载失败！');
                        }
                    });
                    break;
                case '法律服务机构' :
                    $.ajax({
                        type: 'GET',
                        url: sessionStorage.URL + '/fwjg/getInfoById',
                        contentType: 'text/html; charset=utf-8',
                        data: data,
                        dataType: 'json',
                        success: function (data) {
                            let result = data.data;
                            sftab += "<tr><td colspan='2'>机构名称:" + (result.jgmc) + "</td></tr>"
                            + "<tr><td class='xm-td'>联系人:" + (result.lxr) + "</td><td class='xb-td'>联系电话:" + (result.lxdh) + "</td></tr>"
                            + "<tr><td>负责人:" + (result.fzr) + "</td><td>地址:" + (result.dz) + "</td></tr>>"
                            + "<tr><td colspan='2'>业务范围:" + (result.ywfw) + "</td></tr>";
                            $('#sfrylx').html(type);
                            $('#sfzt-table').html(sftab);
                            $('#judicialMan').show();
                            $('#sqPersonInfoDialog,#azPersonInfoDialog').hide();
                        },
                        error: function () {
                            console.log('人员信息加载失败！');
                        }
                    });
                    break;
                case "视频":
                    sftab += "<iframe style='width:100%;height:350px' src='videoIframe/videoframe.html?ID=" + results.id + "'>";
                    $('#sfrylx').html(type);
                    $('#sfzt-table').html(sftab);
                    $('#judicialMan').show();
                    $('#sqPersonInfoDialog,#azPersonInfoDialog').hide();
                    break;
            }
        });

        //弹出窗口的位置
        position();

        //可拖拽窗口
        dragAndDrop('zf-dialog');

        dragAndDrop('ls-dialog');

    }

    // 社区矫正人员点击事件，弹出dialog
    function sqPeopleClick(that) {
        $('.visit-wrapper,.ls-dialog').hide();
        let active = $('.sidebar-nav div.active span').text(),
            actives = $('.navHeader li.active a').text(),
            cardId = '';
        switch (active) {
            case '基础信息':
                switch (actives) {
                    case '五级平台':
                        let sfList = $('.sflist-dialog').is(":visible");
                        if (sfList) {
                            cardId = $(that).attr('id');
                        } else {
                            cardId = that;
                        }
                        break;
                    case '特殊人群':
                        cardId = $(that).children('p').attr('id');
                        break;
                }
                break;
            case '网格法务':
                cardId = $(that).children('p').attr('id');
                break;
            case '首页':
            case '司法专题':
                let sfList = $('.sflist-dialog').is(":visible");
                if (sfList) {
                    cardId = $(that).attr('id');
                } else {
                    cardId = that;
                }
                break;
        }

        let data = {
            cardID: cardId
        };

        if (data.cardID != '') {
            //获取人员照片
            common.ajaxGet(URL.SQJZZP, data).done(function (data) {
                let picture = data.data.picture;
                $("#sqPhoto").attr("src", "data:image/png;base64," + picture);
            });

            //获取当前人员详细信息
            common.ajaxGet(URL.SQJZXX + data.cardID).done(function (data) {
                let information = data.data;
                $('#sqJlbh').empty().html(information.sfzhm);
                $('#sqCard').empty().html(information.sfzhm);
                $('#sqFile').empty().html(information.dah);
                $('#sqName,#personName').empty().html(information.xm);
                $('#sqSex').empty().html(information.xb);
                $('#sqBirth').empty().html(information.csrq);
                $('#sqCharge').empty().html(information.zm);
                $('#sqKinds').empty().html(information.xz);
                $('#sqSentence').empty().html(information.xqqz);
                $('#sqType').empty().html(information.sqjzlx);
                $('#sqHousehold').empty().html(information.hjszd);
                $('#sqAddress').empty().html(information.jzd);
                $('#sqState').empty().html(information.xzt);
                $('#sqCompany').empty().html(information.jzzrdw);
                $('#sqPerson').empty().html(information.jzzrr);
                $('#sqInvestigation').empty().html(information.sqdc);
                $('#sqSituation').empty().html(information.hdzt);
                $('#sqModify').empty().html(new Date(information.xgsj).Format('yyyy-MM-dd'));
                $('.btn-record').attr({'id': information.sfzhm, 'name': information.lxdh});

                $('#sqPersonInfoDialog').show();
                $('#azPersonInfoDialog,#judicialMan,#promptInfo').hide();
            }).fail(function (data) {
                console.log(data);
            });
        } else {
            $('.dialogs').hide();
            $('#promptText').html("无法获取该人员详细信息！");
            $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
        }


        // 查询走访记录
        $('.btnVisit').unbind('click');
        $('.btnVisit').click(function () {
            visit();
        });

        //查询历史轨迹
        $('.btn-record').unbind('click');
        $('.btn-record').click(function () {
            record(this);
        });
    }

    // 安置帮教人员点击事件，弹出dialog
    function azPeopleClick(that) {
        $('.visit-wrapper,.ls-dialog').hide();
        let active = $('.sidebar-nav div.active span').text(),
            cardId = '';
        switch (active) {
            case '基础信息':
            case '网格法务':
                cardId = $(that).children('p').attr('id');
                break;
            case '首页':
            case '司法专题':
                let sfList = $('.sflist-dialog').is(":visible");
                if (sfList) {
                    cardId = $(that).attr('id');
                } else {
                    cardId = that;
                }

                break;
        }

        let data = {
            cardID: cardId
        };
        if (data.cardID != '') {
            //获取人员照片
            common.ajaxGet(URL.AZBJZP, data).done(function (data) {
                let picture = data.data.picture;
                if (picture == null) {
                    $("#azPhoto").attr("src", "img/workAccording.png");
                } else {
                    $("#azPhoto").attr("src", "data:image/png;base64," + picture);
                }
            });

            //获取当前人员详细信息
            common.ajaxGet(URL.AZBJXX + data.cardID).done(function (data) {
                let information = data.data;
                $('#azJlbh').empty().html(information.sfzhm);
                $('#azCard').empty().html(information.sfzhm);
                $('#azFile').empty().html(information.dah);
                $('#azName,#personName').empty().html(information.xm);
                $('#azSex').empty().html(information.xb);
                $('#azBirth').empty().html(information.csrq);
                $('#azHousehold').empty().html(information.hjszd);
                $('#azAddress').empty().html(information.jzd);
                $('#azCompany').empty().html(information.azdw);
                $('#azMode').empty().html(information.azfs);
                $('#azBtime').empty().html(information.bjsj);
                $('#azEffect').empty().html(information.bjxg);
                $('#azAkey').empty().html(information.sfzddx);
                $('#azSituation').empty().html(information.xzt);
                $('#azModifyTime').empty().html((new Date(information.xztgxsj)).Format('yyyy-MM-dd'));
                $('#azInformation').empty().html(information.sszhjbxxjlbh);
                $('#azModify').empty().html((new Date(information.xgsj)).Format('yyyy-MM-dd'));
                $('.btn-record').attr({'id': information.sfzhm, 'name': information.lxdh});

                $('#azPersonInfoDialog').show();
                $('#sqPersonInfoDialog,#judicialMan,#promptInfo').hide();
            }).fail(function (data) {
                console.log(data);
            });
        } else {
            $('.dialogs').hide();
            $('#promptText').html("无法获取该人员详细信息！");
            $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
        }

        // 查询走访记录
        $('.btnVisit').unbind('click');
        $('.btnVisit').click(function () {
            visit();
        });

        //查询历史轨迹
        $('.btn-record').unbind('click');
        $('.btn-record').click(function () {
            record(this);
        });
    }

    // 查询走访记录
    function visit() {
        let active = $('.sidebar-nav div.active span').text(),
            sqJlbh = $('#sqJlbh').text(),
            azJlbh = $('#azJlbh').text(),
            jlbh = '';
        switch (active) {
            case '基础信息':
                let type = $('#crowdType').val();
                if (type == '社区矫正') {
                    jlbh = sqJlbh
                } else {
                    jlbh = azJlbh
                }
                break;
            case '网格法务':
                let actives = $('.sidebar-nav .sidebarSecond .active').text();
                if (actives == '社区矫正') {
                    jlbh = sqJlbh
                } else {
                    jlbh = azJlbh
                }
                break;
            case '首页':
            case '司法专题':
                let sfList = $('.sflist-dialog').is(':visible'),
                    tdclick = $('.tdclick').attr('themetype');
                if (sfList) {
                    if (tdclick == '社区矫正') {
                        jlbh = sqJlbh
                    } else {
                        jlbh = azJlbh
                    }
                } else {
                    let sqDialog = $('#sqPersonInfoDialog').is(':visible');
                    if (sqDialog) {
                        jlbh = sqJlbh
                    } else {
                        jlbh = azJlbh
                    }
                }

                break;
        }

        let data = {
            ssdxsfzhm: jlbh
        };
        common.ajaxGet(URL.ZFJL, data).done(function (data) {
            let arr = data;
            if (arr.data.length > 0) {
                let trs = '';
                for (let i = 0; i < arr.data.length; i++) {
                    let each = arr.data[i],
                        nzfqk = '',
                        zfqk = each.zfqk;
                    switch (zfqk) {
                        case '1':
                            nzfqk = '正常';
                            break;
                        case '2':
                            nzfqk = '异常';
                            break;
                        case 'undefined':
                            nzfqk = '';
                            break
                    }
                    trs += '<tr>' +
                    '<td id=' + each.jlbh + '>' + (new Date(each.zfsj).Format('yyyy-M-d')) + '</td>' +
                    '<td>' + nzfqk + '</td>' +
                    '<td class="visittd">' + '<div class="demand">' + each.knxq + '</div>' +
                    '</td>' +
                    '<td>' + each.cyry + '</td>' +
                    '<td class="visittd">' + '<div class="demand">' + each.cljg + '</div>' +
                    '</td>' +
                    '</tr>'
                }
                $('#zfTbody').html(trs);
            } else {
                $('#zfTbody').html('<tr><td colspan="5">无记录</td></tr>');
            }
        });

        $('.visit-wrapper').show();
        $('.ls-dialog').hide();
        setTimeout(function(){
            visitTitle();
        },2000);


        //走访处理结果
        $('#zfTbody').on('mouseover', 'td:last-child', function () {
            let lastTd = $(this),
                tdText = lastTd.text();
            if (tdText == '') {
                lastTd.children('.text').remove();
            }
        });
        if (sessionStorage.ROLE_ID === '2') {
            $('#zfTbody').on('click', 'td:last-child', function () {
                let $this = $(this),
                    result = $(this).text(),
                    situation = $(this).parent().children('td').eq(1).text();
                if (situation == '异常' && result == '') {
                    $this.children().html('<textarea  type="text" id="result">');
                    $('#result').focus();
                    $('#result').click(function (event) {
                        event.stopPropagation();
                    });

                    $('#zfBtn').show();
                    $('#resultDetermine').unbind('click');
                    $('#resultDetermine').click(function () {
                        let cjlg = $('#result').val();
                        if (cjlg == '') {
                            $('#result').focus().select();
                            return false;
                        }
                        let data = {
                            jlbh: $('#zfTbody td:first-child').attr('id'),
                            cljg: cjlg
                        };
                        //更新处理结果
                        $.ajax({
                            type: 'PUT',
                            url: URL.PUTZFJL,
                            contentType: 'application/json',
                            data: JSON.stringify(data),
                            dataType: 'json',
                            success: function (data) {
                                $('#promptText').html("处理结果更新成功！");
                                $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
                            }, error: function () {
                                $('#promptText').html("处理结果更新失败！");
                                $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
                            }
                        });

                        $('.zf-dialog,#zfBtn').hide();
                    });

                    $('#resultCancel').click(function () {
                        $('.zf-dialog,#zfBtn').hide();
                    });
                }
            });
        }

    }

    //走访记录信息显示
    function visitTitle() {
        $('.visittd').each(function(b) {//这里是控制标签
            let text = $(this).children().text();
            if (text) {
                let a = -20; //设置提示框相对于偏移位置，防止遮挡鼠标
                $(this).mouseover(function(d) { //鼠标移上事件
                    $('body').append('<div id="tooltip">' + text + "</div>"); //创建提示框,添加到页面中
                    $('#tooltip').css({
                        left: (d.pageX + a) + 'px',
                        top: d.pageY + 'px',
                        opacity: '0.6'
                    }).show(250); //设置提示框的坐标，并显示
                }).mouseout(function() { //鼠标移出事件
                    $('#tooltip').remove(); //移除弹出框
                });
            }
        });
    }

    //历史轨迹
    function record(that) {
        let phone = $(that).attr('name'),
            active = $('.sidebar-nav .active span').text(),
            urls = '',
            cardID = $(that).attr('id');
        if (phone != '' && phone != undefined) {

            switch (active) {
                case '基础信息':
                    let type = $('#crowdType').val();
                    if (type == '社区矫正') {
                        urls = URL.SQJZXX + cardID
                    } else {
                        urls = URL.AZBJXX + cardID
                    }
                    break;
                case '网格法务':
                    let actives = $('.sidebar-nav .sidebarSecond .active').text();
                    if (actives == '社区矫正') {
                        urls = URL.SQJZXX + cardID
                    } else {
                        urls = URL.AZBJXX + cardID
                    }
                    break;
                case '首页':
                case '司法专题':
                    let sfList = $('.sflist-dialog').is(':visible'),
                        tdclick = $('.tdclick').attr('themetype');
                    if (sfList) {
                        if (tdclick == '社区矫正') {
                            urls = URL.SQJZXX + cardID
                        } else {
                            urls = URL.AZBJXX + cardID
                        }
                    } else {
                        let sqDialog = $('#sqPersonInfoDialog').is(':visible');
                        if (sqDialog) {
                            urls = URL.SQJZXX + cardID
                        } else {
                            urls = URL.AZBJXX + cardID
                        }
                    }

                    break;
            }

            common.ajaxGet(urls).done(function (data) {
                let information = data.data;
                $('#personName').empty().html(information.xm);
                $('#telephone').val(information.lxdh);
                $('#startTimes').val(GetDateStr(-1));
                $('#endTimes').val(GetDateStr(0));
                $('.ls-dialog').show();
                $('.visit-wrapper').hide();

                //历史足迹确定
                $('#determine').unbind('click');
                $('#determine').click(function () {
                    let startTime = $('#startTimes').val(),
                        endTime = $('#endTimes').val();
                    check(startTime, endTime);
                });

                //历史足迹取消
                $('#cancel').click(function () {
                    $('.ls-form')[0].reset();
                    $('.ls-dialog').hide();
                });
            }).fail(function (data) {
                console.log(data);
            });
        } else {
            $('.dialogs').hide();
            $('#promptText').html("无法获取该人员历史轨迹！");
            $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
        }
    }

    function check(startTime, endTime) {
        let nPhone = $('#telephone').val();
        if (nPhone.length == 0) {
            $('#telephone').attr('placeholder', '联系电话不能为空');
            $('.dialogs').hide();
            $('#promptText').html("无法获取该人员历史轨迹！");
            $('#promptInfo').fadeIn('slow').delay(1500).fadeOut('slow');
            return false;
        }
        if (startTime.length == 0) {
            $('#startTimes').attr('placeholder', '开始日期不能为空');
            return false;
        }
        if (endTime.length == 0) {
            $('#endTimes').attr('placeholder', '结束日期不能为空');
            return false;
        }
        if (startTime.length > 0 && endTime.length > 0) {
            let startTmp = (startTime.replace('-', '')).replace('-', ''),
                endTmp = (endTime.replace('-', '')).replace('-', ''),
                time = eval(endTmp - startTmp);
            if (startTmp > endTmp) {
                $('#info').html("开始日期不能大于结束日期!");
                return false;
            } else {
                $('#info').html('');
            }
            if (time < 1 || time >= 7) {
                $('#info').html("开始日期与结束日期必须在1-7天之间！");
                return false;
            } else {
                $('#info').html('');
            }
        }
        let name = $('#personName').text(),
            data = {
                phone: $('#telephone').val(),
                begin: startTime,
                end: endTime
            };

        common.ajaxGet(URL.LSGJ, data).done(function (data) {
            map.initPathEvent({data: data.data, name: name});
            $('.ls-form')[0].reset();
            $('.dialogs').hide();
        });
    }

    //获取昨天及今天日期
    function GetDateStr(AddDayCount) {
        let dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
        let y = dd.getFullYear(),
            m = dd.getMonth() + 1,//获取当前月份的日期
            d = dd.getDate();
        if (m >= 1 && m <= 9) {
            m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
            d = "0" + d;
        }
        return y + "-" + m + "-" + d;
    }

    //弹出窗口的位置
    function position() {
        let sfList = $('.sflist-dialog').is(':visible');
        if (sfList) {
            $('.child-dialog,.sfdialog,.info-dialog').css('left', '235px');
            $('.ls-dialog').css('left', '735px');
            $('.zf-dialog').css({'top': '480px', 'left': '235px'});
        }
    }

    //拖拽
    function dragAndDrop(div) {
        let _move = false;
        let _x, _y;
        $(".header").mousedown(function (e) {
            _move = true;
            _x = e.pageX - parseInt($('.' + div).css('left'));
            _y = e.pageY - parseInt($('.' + div).css('top'));
        });
        $(document).mousemove(function (e) {
            if (_move) {
                let x = e.pageX - _x;
                let y = e.pageY - _y;
                $('.' + div).css({top: y, left: x});
            }
        }).mouseup(function () {
            _move = false;
        });
    }

});