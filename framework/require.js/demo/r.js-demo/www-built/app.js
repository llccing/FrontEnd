require.config({
    waitSeconds: 0,
    baseUrl:'lib',
    paths: {
        'jquery': 'jQuery/jquery-1.12.3.min',
        'bootstrap': 'bootstrap/../app/bootstrap.min',
        'bootstrap-table': 'bootstrap-table/bootstrap-table.min',
        'bootstrap-table-zh-CN': 'bootstrap-table/bootstrap-table-zh-CN.min',
        'bootstrap-datetimepicker': 'bootstrap-datetimepicker/../app/bootstrap-datetimepicker.min',
        'bootstrap-datetimepicker-zh-CN': 'bootstrap-datetimepicker/../app/bootstrap-datetimepicker.zh-CN',
        'echarts': 'ECharts/echarts.min', // 图表
        'echart': 'ECharts/echarts-all',
        'jqpagination': 'jqPagination/jquery.jqpagination.min', //分页
        'validate': 'verification/jquery.validate.min', //表单输入信息验证
        'messages-zh':'verification/messages_zh.min',//表单验证中文提示
        'md5': 'md5',

        'util':'../app/util', // 工具库 目录

        // map
        'ztree-core': 'jquery.ztree.core.min',
        'ztree-excheck': 'jquery.ztree.excheck.min',
        'map': '../app/map',
        'mapLayers': '../app/mapLayers',

        // 公共函数
        'common': '../app/common',

        // PAGE ../app
        'login': '../app/login',
        'index': '../app/index',
        'homePage':'../app/homePage',
        'azbj': '../app/azbj',
        'flfw': '../app/flfw',
        'fzxc': '../app/fzxc',
        'jcxx': '../app/jcxx',
        'rmtj': '../app/rmtj',
        'sfzt': '../app/sfzt',
        'sqjz': '../app/sqjz',
        'tjbb': '../app/tjbb',
        'mapClick':'../app/mapClick'
    },
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

require(['index']);
