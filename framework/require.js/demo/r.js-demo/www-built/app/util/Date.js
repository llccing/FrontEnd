/**
 * @Func Date tools
 * @Author 刘春峰
 * @Date 2016年11月28日
 */
define(['jquery','bootstrap'], function ($) {
    return {
        /**
         * 格式化日期
         *
         * @param seconds 毫秒
         * @param format 格式 年-月-日 时:分:秒:毫秒:季度
         *                   'yy-M-dd h:m:s:S:q'    -- 16-8-14 19:10:54:0:3
         *                   'yyyy-MM-dd h:m:s:S:q' -- 2016-8-14 19:10:54:0:3
         * @returns {string}
         */
        dateFormat: function (seconds, format) {
            let date = new Date(seconds);
            let fmt = format || 'yyyy-MM-dd';
            let o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.get))
            }
            for (let k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        },
        /**
         * 验证 开始时间要小于结束时间
         *
         * @param ops.startTimeId 开始时间元素ID
         * @param ops.endTimeId 结束时间元素ID
         * @param ops.targetElementId 显示tooltip的元素ID
         * @param ops.placement 显示方向
         */
        dateValidate: function (ops) {
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
    };
});