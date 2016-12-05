/**
 * @Func ajax tools
 * @Author 刘春峰
 * @Date 2016年11月28日
 */
'use strict';
define(['jquery'],function($){
    return {
        /**
         * get request
         *
         * @param url 接口地址
         * @param data 参数（可选）
         * @returns {*} 返回一个实现了Promise接口的jqXHR对象
         */
        get:function(url, data) {
            return $.ajax({
                url: url,
                type: 'GET',
                data: data||{},
                contentType: 'text/html;charset=utf-8',
                dataType: 'json'
            });
        },
        /**
         * post request
         *
         * @param url 接口地址
         * @param data 参数（可选）
         * @returns {*} 返回一个实现了Promise接口的jqXHR对象
         */
        post:function(url, data) {
            return $.ajax({
                url: url,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data||{}),
                dataType: 'json'
            });
        },
        /**
         * put request
         *
         * @param url 接口地址
         * @param data 参数（可选）
         * @returns {*} 返回一个实现了Promise接口的jqXHR对象
         */
        put:function(url, data) {
            return $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(data||{}),
                dataType: 'json'
            });
        },
        /**
         * delete request
         *
         * @param url 接口地址
         * @returns {*} 返回一个实现了Promise接口的jqXHR对象
         */
        delete:function(url) {
            return $.ajax({
                url: url,
                type: 'DELETE',
                contentType: 'text/html; charset=utf-8',
                dataType: 'json'
            });
        }
    }
});