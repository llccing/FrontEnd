require.config({
    waitSeconds: 0,
    //paths: {
    //    'esri': 'static/arcgis-3.13/esri',
    //    'dojo': 'static/arcgis-3.13/dojo',
    //    'dojox': 'static/arcgis-3.13/dojox',
    //    'dijit': 'static/arcgis-3.13/dijit',
    //    'jquery': 'static/jQuery/jquery-1.12.3.min',
    //    'bootstrap': 'static/bootstrap/js/bootstrap.min',
    //    'bootstrap-table': 'static/bootstrap-table/bootstrap-table.min',
    //    'bootstrap-table-zh-CN': 'static/bootstrap-table/bootstrap-table-zh-CN.min',
    //    'bootstrap-datetimepicker': 'static/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
    //    'bootstrap-datetimepicker-zh-CN': 'static/bootstrap-datetimepicker/js/bootstrap-datetimepicker.zh-CN',
    //    'echarts': 'static/ECharts/echarts.min', // 图表
    //    'echart': 'static/ECharts/echarts-all',
    //    'jqpagination': 'static/jqPagination/jquery.jqpagination.min', //分页
    //    'validate': 'static/verification/jquery.validate.min', //表单输入信息验证
    //    'messages-zh':'static/verification/messages_zh.min',//表单验证中文提示
    //    'md5': 'static/md5',
    //
    //    'util':'js/util', // 工具库 目录
    //
    //    // map
    //    'ztree-core': 'static/jquery.ztree.core.min',
    //    'ztree-excheck': 'static/jquery.ztree.excheck.min',
    //    'map': 'js/map',
    //    'mapLayers': 'js/mapLayers',
    //
    //    // 公共函数
    //    'common': 'js/common',
    //
    //    // PAGE JS
    //    'login': 'js/login',
    //    'index': 'js/index',
    //    'homePage':'js/homePage',
    //    'azbj': 'js/azbj',
    //    'flfw': 'js/flfw',
    //    'fzxc': 'js/fzxc',
    //    'jcxx': 'js/jcxx',
    //    'rmtj': 'js/rmtj',
    //    'sfzt': 'js/sfzt',
    //    'sqjz': 'js/sqjz',
    //    'tjbb': 'js/tjbb',
    //    'mapClick':'js/mapClick'
    //},
    packages: [
        {
            "name": "extras",
            "location": location.pathname.replace(/\/[^/]+$/, '') + "/static/layers"
        }
    ],
    shim:{
        'bootstrap':['jquery'],
        'bootstrap-table': ['jquery'],
        'bootstrap-table-zh-CN':['bootstrap-table'],
        'bootstrap-datetimepicker':['jquery'],
        'bootstrap-datetimepicker-zh-CN':['bootstrap-datetimepicker'],
        'ztree-core': ['jquery'],
        'ztree-excheck': ['jquery','ztree-core']
    }
});
