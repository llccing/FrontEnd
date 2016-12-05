/**
 * 社区矫正
 * 刘春峰
 * 2016.6.29
 */
'use strict';

define([
    'jquery',
    'map',
    'mapClick',
    'util/Ajax',
    'jqpagination'
], function ($, map,mapClick,ajax) {

    const URL = {
        //矫正类型
        JZLX :sessionStorage.URL + '/sqjz/theme',
        //社区矫正人员
        SQJZRY :sessionStorage.URLYCGRID + '/tbfxryxxs/tbfxryxx'
    };

    let community_h = $('#content').height(),
        sqjzCount = 0;

    return {
        init: init
    };

    // 初始化
    function init() {

        map.initAreaLayers();

        getCorrectionType();

        sqjzCount=0;
        // 查询所有帮教人员
        $('#sqjzBtnSearch').click(() => {
            sqjzCount++;
            getPersonData(1, 10, true);
        });
    }

    // 矫正类型初始化
    function getCorrectionType() {
        ajax.get(URL.JZLX).done((data) => {
            let options = '<option value="">全部</option>';
            let arr = data.data;
            for (let i = 0,l = arr.length; i < l; i++) {
                options += `<option value=${arr[i].dmmc}>${arr[i].dmmc}</option>`;
            }
            $('#correctionType').html(options);
        });
    }

    // 分页查询初始化 current_page 当前页 limit 每页数量
    function initPage(current_page, limit, max_page,total) {
        if (sqjzCount >= 2) {
            $('#paginationSQJZ').jqPagination('destroy');
            $('#paginationSQJZ').jqPagination('option', 'current_page', current_page);
            $('#paginationSQJZ').jqPagination('option', 'max_page', max_page);
        }
        $('#paginationSQJZ').jqPagination({
            link_string: '/page={page_number}',
            current_page: current_page,
            max_page: max_page,
            page_string: '{current_page}/{max_page} '+'共'+total+'条',
            paged: (page) => {
                getPersonData(page, limit, false);
            }
        });
    }

    // 获得人员列表 page 当前页 limit 每页数量 isFirst 是否为初始化查询
    function getPersonData(page, limit, isFirst) {
        let max_page = 0;
        let data = {
            page: page,
            limit: limit,
            type: $('#correctionType').val(),
            name: $('#name').val()
        };
        ajax.get(URL.SQJZRY,data).done((data) => {
            let obj = data.data;
            if (obj.total > 0) {
                if (isFirst) {
                    max_page = Math.ceil(obj.total / limit);
                    initPage(1, limit, max_page,obj.total);
                }
                let [trs,each] = ['',''];
                for (let i = 0; i < obj.data.length; i++) {
                    each = obj.data[i];
                    trs += `<div class="textBorder">
                    <p id=${each.sfzhm}>姓名：${(each.xm === undefined ? '' : each.xm)}</p>
                    <p>联系电话：${(each.lxdh === undefined ? '' : each.lxdh)}</p>
                    <p>身份证号：${(each.sfzhm === undefined ? '' : each.sfzhm)}</p>
                    <p>矫正类型：${(each.sqjzlx === undefined ? '' : each.sqjzlx)}</p>
                    <span><img src="img/07.png" title="轨迹查询" id=${each.sfzhm} name=${each.lxdh}></span>
                    </div>`;
                }
                $('#communityC').empty().append(trs).height(community_h - 203 + 'px').show();

                $('.textBorder').unbind('click');
                $('.textBorder').click((event) => {
                    mapClick.sqPeopleClick(event.currentTarget);
                });

                //轨迹查询
                $('.textBorder span').unbind('click');
                $('.textBorder').on('click','img',function(event){
                    mapClick.record(event.currentTarget);
                    event.stopPropagation();
                });

            } else {
                $('#communityC').html('无记录').height(community_h - 203 + 'px').show();
            }
        });
    }

});