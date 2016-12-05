/**
 * 主界面
 * 宋晓倩
 * 2016/6/6.
 */
'use strict';
/**
 * 页面初始化
 **/
define(['jquery', 'ztree-core', 'ztree-excheck', 'map', 'mapClick', 'md5', 'bootstrap'], function ($, ztree, ztreeCheck, map, mapClick) {
    return {
        init: init
    };

    function init() {
        $('#username').text(sessionStorage.USER_NAME);

        let $homePage = $('#homePage');
        if ($homePage.html().length !== 0) {
            $homePage.show().siblings().hide();
        } else {
            $.get('../ycsf/page/homePage.html', function (data) {
                require(['homePage'], function (homePage) {
                    homePage.init();
                });
                $homePage.html(data).show().siblings().hide();
            });
        }
        $('#sidebarSecond').hide();
        left();


        sidebarNav();

        sidebarSecond();

        $('.sidebar-fold').on('click', function () {
            sidebarFold();
            left();
        });

        // contentCollapse 折叠
        $('.trapezoid').on('click', function () {
            trapezoid();
            left();
        });

        // 右侧功能菜单点击事件
        $('.menuStyle li').on('click', function () {
            menuStyle(this);
        });

        $('#indexBtnChange').on('click', function () {
            pwdChange();
        });

        $('.closed,#indexBtnCancel').on('click', function () {
            $('#changePass,#promptInfo').hide();
        });
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1,                 //月份
                "d+": this.getDate(),                    //日
                "h+": this.getHours(),                   //小时
                "m+": this.getMinutes(),                 //分
                "s+": this.getSeconds(),                 //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds()             //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };

        //加载地图点击事件
        mapClick.init();
    }

    // 地图左边距
    function left() {
        let w = $('#left').width(),
            mapPanelWidth = $(window).width() - w;
        $('#right').css('margin-left', w);
        $("#map").css({"width": mapPanelWidth});
        $("#map_container").css({"width": mapPanelWidth});
        map.reSizeMap();

    }

    //加载对应模块
    function sidebarNav() {
        $('.sidebar-nav div').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.sidebarSecond li').removeClass('active');
            $('.dialogs,.sflist-dialog').hide();
            map.closePath();
            map.initAreaLayers();
            $('#left').css({float: 'left'});
            $('#content').css({'float': 'left', 'position': 'relative'});
            let name = $(this).attr('data-name');
            switch (name) {
                case 'homePage':
                    let $homePage = $('#homePage');
                    if ($homePage.html().length !== 0) {
                        $homePage.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/homePage.html', function (data) {
                            require(['homePage'], function (homePage) {
                                homePage.init();
                            });
                            $homePage.html(data).show().siblings().hide();
                        });
                    }
                    $('#sidebarSecond').hide();
                    left();
                    break;
                case 'basicInfo':
                    let $basicInfo = $('#basicInfo');
                    if ($basicInfo.html().length !== 0) {
                        $basicInfo.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/jcxx.html', function (data) {
                            require(['jcxx'], function (jcxx) {
                                jcxx.init();
                            });
                            $('#sidebarSecond').hide();
                            $basicInfo.html(data).show().siblings().hide();
                            left();
                        });
                    }
                    $('#sidebarSecond').hide();
                    left();
                    break;
                case 'fiveLevelGrid':
                    // 若是同统计报表切进来时，修改left和content的css样式，以适应五级网格。
                    if ($('#statisticReport').is(':visible')) {
                        $('#left').css({float: 'initial'});
                        $('#content').css({'float': 'initial', 'position': 'initial'});
                    }
                    $('#sidebarSecond').slideToggle('fast');
                    break;
                case 'statisticReport':
                    let $statisticReport = $('#statisticReport');
                    if ($statisticReport.html().length !== 0) {
                        $statisticReport.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/tjbb.html', function (data) {
                            require(['tjbb'], function (tjbb) {
                                tjbb.init();
                            });
                            $statisticReport.html(data).show().siblings().hide();
                        });
                    }
                    $('#sidebarSecond').hide();
                    $('#left').css({float: 'initial'});
                    $('#content').css({'float': 'initial', 'position': 'initial'});
                    $('#contentCollapse').css('width', 'initial');
                    break;
                case 'judicialSubject':
                    let $judicialSubject = $('#judicialSubject');
                    if ($judicialSubject.html().length !== 0) {
                        $judicialSubject.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/sfzt.html', function (data) {
                            require(['sfzt'], function (sfzt) {
                                sfzt.init();
                            });
                            $('#sidebarSecond').hide();
                            $judicialSubject.html(data).show().siblings().hide();
                            left();
                        });
                    }
                    $('#sidebarSecond').hide();
                    left();
                    break;
            }
            $('#contentCollapse').removeClass('fold');
            $('.trapezoid> .trapezoidRight').removeClass('trapezoidRight').addClass('trapezoidLeft');
            $('.trapezoid>.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-left');
        });
    }

    function sidebarFold() {
        $('.sidebar-nav span').toggle();
        $('.sidebar-fold span').toggleClass('fa-rotate-90');
        if ($('.sidebar-fold span').hasClass('fa-rotate-90')) {
            $('[data-toggle="tooltip"]').tooltip('destroy');
        } else {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }

    function trapezoid() {
        $('#contentCollapse').toggleClass('fold');
        if ($('.contentCollapse').hasClass('fold')) {
            $('.trapezoid> .trapezoidLeft').removeClass('trapezoidLeft').addClass('trapezoidRight');
            $('.trapezoid>.fa-chevron-left').removeClass('fa-chevron-left').addClass('fa-chevron-right');
        } else {
            $('.trapezoid> .trapezoidRight').removeClass('trapezoidRight').addClass('trapezoidLeft');
            $('.trapezoid>.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-left');
        }
    }

    function menuStyle(that) {
        switch ($(that).attr('data-name')) {
            case 'changePass':    // 密码修改
                let leftWidth = $(".content").width() + $(".sidebar").width();
                $("#changePass").css('left', leftWidth + 20 + 'px').show();
                break;
            case 'exist':    // 退出系统
                location.href = "login.html";
                break;
        }
    }

    function pwdChange() {
        let newPass = hex_md5($('#newPass').val()),
            newPass1 = hex_md5($('#newPass1').val());
        if (newPass !== newPass1) {
            $("#msg").html("两次密码不一致, 请重试");
            return;
        } else {
            $("#msg").html("");
        }
        let _data = {
            userId: localStorage.USER_ID,
            pwd: newPass
        };
        $.ajax({
            type: "PUT",
            url: sessionStorage.URL + "/user",
            contentType: "application/json",
            data: JSON.stringify(_data),
            dataType: "json",
            success: function (data) {
                if (data.status === "yes") {
                    $("#msg").html("修改成功");
                    $('#changePass').hide(1000);
                    setTimeout(function () {
                        $("#msg").html("")
                    }, 1500);
                    $("#newPass,#newPass1").val("");
                } else {
                    $("#msg").html("原密码不正确, 请重试");
                }
            }
        });
    }

    function sidebarSecond() {
        $('.sidebarSecond li').on('click', function () {
            $('.dialogs').hide();
            map.closePath();
            $('#left').css({float: 'left'});
            $('#content').css({'float': 'left', 'position': 'relative'});
            $(this).addClass('active').siblings().removeClass('active');
            $('#content2').empty();
            $('#fiveLevelGrid').show().siblings().hide();
            let name = $(this).attr('data-name');
            switch (name) {
                case 'legalService':
                    let $legalService = $('#legalService');
                    if ($legalService.html().length !== 0) {
                        $legalService.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/flfw.html', function (data) {
                            require(['flfw'], function (flfw) {
                                flfw.init();
                            });
                            $legalService.html(data).show().siblings().hide();
                        });
                    }
                    left();
                    break;
                case 'peopleMediation':
                    let $peopleMediation = $('#peopleMediation');
                    if ($peopleMediation.html().length !== 0) {
                        $peopleMediation.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/rmtj.html', function (data) {
                            require(['rmtj'], function (rmtj) {
                                rmtj.init();
                            });
                            $peopleMediation.html(data).show().siblings().hide();
                        });
                    }
                    left();
                    break;
                case 'legalPublicity':
                    let $legalPublicity = $('#legalPublicity');
                    if ($legalPublicity.html().length !== 0) {
                        $legalPublicity.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/fzxc.html', function (data) {
                            require(['fzxc'], function (fzxc) {
                                fzxc.init();
                            });
                            $legalPublicity.html(data).show().siblings().hide();
                        });
                    }
                    left();
                    break;
                case 'communityCorrection':
                    let $communityCorrection = $('#communityCorrection');
                    if ($communityCorrection.html().length !== 0) {
                        $communityCorrection.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/sqjz.html', function (data) {
                            require(['sqjz'], function (sqjz) {
                                sqjz.init();
                            });
                            $communityCorrection.html(data).show().siblings().hide();
                        });
                    }
                    left();
                    break;
                case 'resettlement':
                    let $resettlement = $('#resettlement');
                    if ($resettlement.html().length !== 0) {
                        $resettlement.show().siblings().hide();
                    } else {
                        $.get('../ycsf/page/azbj.html', function (data) {
                            require(['azbj'], function (azbj) {
                                azbj.init();
                            });
                            $resettlement.html(data).show().siblings().hide();
                        });
                    }
                    left();
                    break;
            }
        });
    }
});
