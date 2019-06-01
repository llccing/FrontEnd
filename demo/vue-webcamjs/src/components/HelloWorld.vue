<template>
  <div class="hello">
    <button class="play">拍照</button>
    <div id="status">倒计时</div>
    <div id="webcam"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {},
  mounted() {
    var w = 320,
      h = 240; //摄像头配置,创建canvas
    var pos = 0,
      ctx = null,
      saveCB,
      image = [];
    var canvas = document.createElement("canvas");
    $("body").append(canvas);
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    ctx = canvas.getContext("2d");
    image = ctx.getImageData(0, 0, w, h);

    $("#webcam").webcam({
      width: w,
      height: h,
      mode: "callback", //stream,save，回调模式,流模式和保存模式
      swffile: "jscam_canvas_only.swf",
      onTick: function(remain) {
        console.log(remain);
        if (0 == remain) {
          $("#status").text("拍照成功!");
        } else {
          $("#status").text("倒计时" + remain + "秒钟...");
        }
        $("#status").text("倒计时" + remain + "秒钟...");
      },
      onSave: function(data) {
        //保存图像
        var col = data.split(";");
        var img = image;
        for (var i = 0; i < w; i++) {
          var tmp = parseInt(col[i]);
          img.data[pos + 0] = (tmp >> 16) & 0xff;
          img.data[pos + 1] = (tmp >> 8) & 0xff;
          img.data[pos + 2] = tmp & 0xff;
          img.data[pos + 3] = 0xff;
          pos += 4;
        }

        if (pos >= 4 * w * h) {
          ctx.putImageData(img, 0, 0); //转换图像数据，渲染canvas
          pos = 0;
          Imagedata = canvas.toDataURL().substring(22); //上传给后台的图片数据
        }
      },
      onCapture: function() {
        //捕获图像
        webcam.save();
      },
      debug: function(type, string) {
        //控制台信息
        console.log(type + ": " + string);
      },
      onLoad: function() {
        //flash 加载完毕执行
        console.log("加载完毕！");
        var cams = webcam.getCameraList();
        for (var i in cams) {
          $("body").append("<p>" + cams[i] + "</p>");
        }
      }
    });

    $(".play").click(function() {
      webcam.capture();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
