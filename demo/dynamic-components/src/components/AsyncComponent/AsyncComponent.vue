<template>
  <component :is="currentView"></component>
</template>
<script>
import factory from './factory';
export default {
  name: 'AsyncComponent',
  inheritAttrs: false,
  props: {
    path: {
      type: String,
      required: true,
      default: () => null,
    },
    keepAlive: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 20,
    },
    timeout: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      currentView: this.load
    };
  },
  methods: {
    load() {
      // 此处没有想明白如何实现文档的效果，欢迎 pull request
      this.currentView = resolve => factory(this.path, this.delay, this.timeout)
    },
  },
  watch: {
    path(){
      this.load();
    }
  }
};
</script>

