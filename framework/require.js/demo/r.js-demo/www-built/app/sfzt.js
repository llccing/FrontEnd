/**
 * 邢祥超
 * 宋晓倩
 * 2016/6/23.
 */
define(['jquery','ztree-core','ztree-excheck','map'], function ($,ztree,ztreeCheck,map) {
    return {
        init: init
    };
    // 初始化
    function init() {
        map.initAreaLayers();
        initTheme();
    }

    function initTheme() {
        var treeList=map.showTocTree();
        var setting = {
            check: {enable: true},
            view: {showLine: false, showIcon: false},
            data: {simpleData: {enable: true}},
            callback: {onCheck: treeLayerListCheck}
        };
        if(treeList.length>0)
        {
            $.fn.zTree.init($('#layerTree'), setting,treeList);
        }
    }

    function treeLayerListCheck(e, treeId, treeNode) {
        //显示图层
        map.showLayers(treeNode);
    }

});