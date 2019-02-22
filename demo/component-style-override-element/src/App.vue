<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form-compo style="width: 800px; margin: 0 auto;"></form-compo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import formCompo from './components/formCompo.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    formCompo,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
