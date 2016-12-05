/**
 * 扩展jQuery 支持发布订阅
 * 檀志波
 * 2016/7/7.
 */
define(['jquery', 'bootstrap', 'bootstrap-datetimepicker', 'bootstrap-datetimepicker-zh-CN'],
    function ($) {

    //扩展jQuery 支持发布订阅
    (function ($) {
        var o = $({});//自定义事件对象
        $.each({
            trigger: 'publish',
            on: 'subscribe',
            off: 'unsubscribe'
        }, function (key, val) {
            jQuery[val] = function () {
                o[key].apply(o, arguments);
            };
        });
    })(jQuery);

    /**
     * 验证 开始时间要小于结束时间
     *
     * @param startTimeId 开始时间元素ID
     * @param endTimeId 结束时间元素ID
     * @param targetElementId 显示tooltip的元素ID
     * @param placement 显示方向
     */
    function dateValidate(ops) {
        let $start = $('#' + ops.startTimeId),
            $end = $('#' + ops.endTimeId),
            startTooltip = $start,
            endTooltip = $end,
            options = {title: '开始时间不能大于结束时间', placement: ops.placement};
        if (ops.targetElementId !== undefined) {
            startTooltip = $('#' + ops.targetElementId);
            endTooltip = $('#' + ops.targetElementId);
        }
        //开始时间绑定change事件
        $start.on('change', function () {
            let startValue = $start.val(),
                endValue = $end.val();
            if (endValue !== '') {
                if (startValue > endValue) {
                    $start.val('');
                    startTooltip.tooltip(options);
                    startTooltip.tooltip('show');
                } else {
                    startTooltip.tooltip('destroy');
                }
            }
        });

        //结束时间绑定change事件
        $end.on('change', function () {
            let startValue = $start.val(),
                endValue = $end.val();
            if (startValue !== '') {
                if (startValue > endValue) {
                    $end.val('');
                    endTooltip.tooltip(options);
                    endTooltip.tooltip('show');
                } else {
                    endTooltip.tooltip('destroy');
                }
            }
        });
    }

    function ajaxGet(url, data) {
        return $.ajax({
            url: url,
            type: 'GET',
            data: data||{},
            contentType: 'text/html;charset=utf-8',
            dataType: 'json'
        });
    }

    function ajaxPost(url, data) {
        return $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json'
        });
    }

    function ajaxPut(url, data) {
        return $.ajax({
            url: url,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json'
        });
    }

    function ajaxDelete(url) {
        return $.ajax({
            url: url,
            type: 'DELETE',
            contentType: 'text/html; charset=utf-8',
            dataType: 'json'
        })
    }

    // 初始化表格设置
    function initTables(ops) {
        // 若表格已初始化，则先销毁，再次初始化
        if ($('#' + ops.elementId).find('tbody').length > 0) {
            $('#' + ops.elementId).bootstrapTable('destroy');
        }
        $('#' + ops.elementId).bootstrapTable({
            method: 'get',
            url: ops.url,
            cache: false,
            pagination: true,
            pageSize: ops.pageSize || 10,//从左至右依次加载
            pageList: ['all'],
            sidePagination: 'server',
            showExport: false,
            classes: 'table-no-hover',//设置class
            striped: false,//各行变色效果
            queryParams: function (e) {
                let param = {
                    page: (e.offset / e.limit) + 1,
                    limit: e.limit
                };
                for (let k in ops.queryParams) {
                    param[k] = ops.queryParams[k];

                }
                return param;
            },
            responseHandler: ops.responseHandler,
            columns: ops.columns,
            onDblClickRow:ops.onDblClickRow
        });
    }

    return {
        dateValidate: dateValidate,
        ajaxGet: ajaxGet,
        ajaxPost: ajaxPost,
        ajaxPut: ajaxPut,
        ajaxDelete: ajaxDelete,
        initTables:initTables
    }
});
