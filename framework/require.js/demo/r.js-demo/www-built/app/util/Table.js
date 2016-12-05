/**
 * @Func table tools
 * @Author 刘春峰
 * @Date 2016年11月28日
 */
define(['jquery',
        'bootstrap-table',
        'bootstrap-table-zh-CN'],
    function ($) {
        return {
            initTables: function (ops) {
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
                    onDblClickRow: ops.onDblClickRow||{}
                });
            }
        };
    });