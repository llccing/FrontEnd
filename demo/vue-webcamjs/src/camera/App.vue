<template>
  <div id="app">
    <div id="results">Your captured image will appear here...</div>

    <h1>WebcamJS Test Page</h1>
    <h3>Demonstrates Adobe Flash capture &amp; display</h3>

    <div id="my_camera"></div>

    <button @click="take_snapshot">来，别动，拍一张</button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    take_snapshot() {
      // take snapshot and get image data
      Webcam.snap(function(data_uri) {
        // display results in page
        document.getElementById("results").innerHTML =
          "<h2>Here is your image:</h2>" + '<img src="' + data_uri + '"/>';
      });
    }
  },
  mounted() {
    Webcam.set({
      width: 950,
      height: 700,
      force_flash: true,
      image_format: "jpeg",
      jpeg_quality: 90
    });
    Webcam.attach("#my_camera");
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
h2,
h3 {
  margin-top: 0;
}
form {
  margin-top: 15px;
}
form > input {
  margin-right: 15px;
}
#results {
  float: right;
  margin: 20px;
  padding: 20px;
  border: 1px solid;
  background: #ccc;
}
</style>
