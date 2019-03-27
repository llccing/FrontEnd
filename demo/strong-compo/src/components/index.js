// import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

const Components = {
  HelloWorld
}

const install = function(Vue) {
  Object.keys(Components).forEach(key => {
      Vue.component(key, Components[key]);
  });
};

export default {
  install,
  ...Components,
}