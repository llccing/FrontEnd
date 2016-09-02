3、 videoJS菜单界面二次开发

// 播放器实例
var player = videojs('videoPlayer');
// 播放器初始化操作面板清晰度菜单
function playerInitVideo() { 
	$videoPanelMenu = $(".vjs-fullscreen-control");
    $videoPanelMenu.before( '' + ''+ '' + '高清' + '标清'+ '清晰度');
}
// 加载页面进行播放器初始化 
player.ready(function() {
    playerInitVideo();
    player.play();
    setsrc(player, "rtmp://192.168.30.21/live/test3", "rtmp/flv");
});
// 通过id获取DOM
function get(index) {
    return document.getElementById(index);
}
// 修改播放地址并播放
function writeAddressAndPlay(index, url, type) {
    // 播放器操作 
    setsrc(index, url, type ? type : "rtmp/flv");
    play(index);
}

// 高清标清切换就是应用名加减HD
function changeUrl(video) {
    var index = $(video).text();
    // 获取当前播放的url
    var CurrentUrl = getCurrentAddr(player);
    $(".vjs-menu-item").removeClass("vjs-selected");
    $(video).addClass("vjs-selected");
    if (index == "高清") {
        if (CurrentUrl.indexOf("HD") == -1) {
            CurrentUrl = CurrentUrl + "HD";
        } else {
            return; }
    } else {
        if (CurrentUrl.indexOf("HD") != -1) { CurrentUrl = CurrentUrl.replace("HD", ""); } else {
            return; } }
    // 修改地址并播放 
    writeAddressAndPlay(player, CurrentUrl);
}
// 这只是一种方案，如果有更好的方案，可以采用其他方法。到这里就可以自由控制清晰度了
