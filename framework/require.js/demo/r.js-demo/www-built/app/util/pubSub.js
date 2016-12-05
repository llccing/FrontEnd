/**
 * @Func 发布订阅
 * @Date 2016年11月28日
 */
define(['jquery'],function($){
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
});