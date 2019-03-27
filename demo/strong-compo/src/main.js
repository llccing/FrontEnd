import Vue from 'vue'
import App from './App.vue'
import strongCompo from './components/index.js'

Vue.use(strongCompo)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
