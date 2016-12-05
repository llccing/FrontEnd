/**
 * 登录界面
 * 宋晓倩
 * 2016/6/6.
 */
'use strict';

define(['jquery', 'util/Ajax', 'md5'], function ($, ajax) {

    sessionStorage.URL = 'http://' + location.host + location.pathname.substring(0, location.pathname.indexOf("login.html")) + 'api';
    //sessionStorage.URL = 'http://10.27.7.161:8080/ycsf/api';
    //sessionStorage.URL = 'http://192.168.0.47:8080/ycsf/api';
    sessionStorage.URLYCGRID = 'http://10.27.7.161:8080/yc-grid-service/api';

    const URL = {
        'LOGIN': sessionStorage.URL + '/user/login'
    };

    return {
        init: init
    };

    function init () {
        rememberUsername(); // 记住用户名
        enterKey(); // enter键登录
        login(); // 登录请求
    }

    function rememberUsername () {
        if (localStorage.USER_ID) {
            $('#userId').val(localStorage.USER_ID);
            $('#pwd').focus();
        } else {
            $('#userId').focus();
        }
    }

    function enterKey () {
        $(document).keydown(event => {
            if (event.keyCode == 13) {
                $('#loginBtn').click();
            }
        });
    }

    function login () {
        $('#loginBtn').click(() => {
            const [userId, pwd] = [$('#userId').val(), hex_md5($('#pwd').val())];

            if (!userId) {
                $('#confirm').text('请输入登录用户名');
                $('#userId').focus();
                return;
            }

            if (!$('#pwd').val() || !pwd) {
                $('#confirm').text('');
                $('#psconfirm').text('请输入登录密码');
                $('#pwd').focus();
                return;
            }

            ajax.post(URL.LOGIN, {userId: userId, pwd: pwd}).done(data => {
                if (data.code === 200 && data.status === 'yes') {
                    const result = data.data;
                    sessionStorage.USER_NAME = result.userName;
                    sessionStorage.XZBM = result.xzbm;
                    sessionStorage.ROLEID = result.roleId;
                    localStorage.USER_ID = userId;
                    sessionStorage.LOGIN = 'OK';
                    location.href = 'index.html';
                }
            }).fail(data => {
                if (data.responseJSON.code === 401 && data.responseJSON.status === 'no') {
                    $('#error').text(data.responseJSON.message);
                } else if (data.responseJSON.code === 500 && data.responseJSON.status === 'no') {
                    $('error').html(data.responseJSON.message)
                }
            });
        });
    }
});

