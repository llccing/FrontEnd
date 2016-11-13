##问题：
	视频播放器在子页面中，仅仅在子页面切换视频地址时，可以正常播放（前提是各个视频均为可播放的视频），但是若重新载入子页面，再次初始化视频时则不能正常播放，也没有错误报出。
## 解决：
	每次重新生成video的id，通过var videoId = 'video'+Math.radom();
	let videoId = 'video'+Math.random();
    $('#videoWraper').
    html('<video id="'+videoId+'" class="video-js vjs-default-skin video-player" controls/></video>');
	let player = videojs(videoId);
	这样每次都会重新载入内容。
----