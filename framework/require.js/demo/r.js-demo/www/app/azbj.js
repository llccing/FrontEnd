/**
 * 安置帮教
 * 刘春峰
 * 2016-6-24
 */
'use strict';

define([
    'jquery',
    'map',
    'mapClick',
    'util/Ajax',
    'jqpagination'
], function ($, map,mapClick,ajax) {

    let resettlement_h = $('#content').height(),
        AzbjCount = 0;

    return {
        init: init
    };

    // 初始化
    function init() {

        map.initAreaLayers();

        AzbjCount = 0;
        // 查询所有帮教人员
        $('#azbjBtnSearch').click(() =>{
            AzbjCount++;
            getPersonData(1, 10, true);
        });

    }

    // 分页查询初始化 current_page 当前页 limit 每页数量
    function initPage(current_page, limit, max_page,total) {
        if (AzbjCount >= 2) { // 按钮点击两次及以上则destroy
            $('#paginationAZBJ').jqPagination('destroy');
            $('#paginationAZBJ').jqPagination('option', 'current_page', current_page);
            $('#paginationAZBJ').jqPagination('option', 'max_page', max_page);
        }
        $('#paginationAZBJ').jqPagination({
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
        let data = {
            page: page,
            limit: limit,
            name: $('#name').val()
        };
        ajax.get(sessionStorage.URLYCGRID + '/tbxsjjryxxs/tbxsjjryxx',data).done((data) => {
            let obj = data.data;
            if (obj.total > 0) {
                let max_page = 0;

                if (isFirst) {
                    max_page = Math.ceil(obj.total / limit);
                    initPage(1, limit, max_page,obj.total);
                }

                let [trs,each] = ['',''];
                for (let i = 0, len = obj.data.length; i < len; i++) {
                    each = obj.data[i];
                    $('#jlbh').html(each.jlbh);
                    trs += `<div class="textBorder">
                    <p id=${each.sfzhm}>姓名：${(each.xm === undefined ? '' : each.xm)}</p>
                    <p>联系电话：${(each.lxdh === undefined ? '' : each.lxdh)}</p>
                    <p>身份证号：${(each.sfzhm === undefined ? '' : each.sfzhm)}</p>
                    <p>帮教效果：${(each.bjxg === undefined ? '' : each.bjxg)}</p>
                    <span><img src="img/07.png" title="轨迹查询" id=${each.sfzhm} name=${each.lxdh}></span>
                    </div>`;
                }
                $('#resettlementC').empty().append(trs).height(resettlement_h - 153 + 'px').show();

                $('.textBorder').unbind('click');
                $('.textBorder').click ((event) => {
                    mapClick.azPeopleClick(event.currentTarget);
                });

                //轨迹查询
                $('.textBorder span').unbind('click');
                $('.textBorder').on('click','img',(event) => {
                    mapClick.record(event.currentTarget);
                    event.stopPropagation();
                });

            } else {
                $('#resettlementC').html('无记录').height(resettlement_h - 153 + 'px').show();
            }
        });
    }

});
