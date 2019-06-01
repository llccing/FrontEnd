# vue-webcamjs
  
    vue项目引入浏览器拍照功能

## 需求

使用浏览器的拍照功能，同时要兼容IE9。找了一下资料，有两个库。

- [webcamjs](https://github.com/jhuckaby/webcamjs)
- [jQuery-webcam](https://github.com/infusion/jQuery-webcam)

## 操作

开始尝试了jquery-webcam，能够使用，拍照后生成一个cancas图片，但是问题是不能够修改大小，要是想要修改大小，只能重新生成 .swf 文件，操作非常繁琐。随换了webcamjs来做。

webcamjs会生成base64的图片，然后只要在配置信息中，将大小改为你想要的大小即可。

## 结语

可能一时半会儿都用不上这个功能，因为电脑摄像头的像素实在太低，但是要是他们外接一个高清摄像头，倒是能够做些有意思的事情。