<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <async-component path="components/compA.vue"></async-component>

    <async-component v-for="item in arrCompo" :key="item" :path='`components/${item}.vue`'></async-component>

    <div>
      <Button @click="sort">重新渲染</Button>
    </div>
  </div>
</template>

<script>
import AsyncComponent from './components/AsyncComponent/index.js'

export default {
  name: 'app',
  components: {
    AsyncComponent,
  },
  data(){
    return {
      arrCompo: ['compA', 'compB', 'compCa'],
    }
  },
  methods: {
    sort(){
      this.arrCompo = this.arrCompo.reverse()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
