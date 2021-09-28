import Vue from 'vue'
import App from './App.vue'

import VueFluent from "vfluentdesign";
import "vfluentdesign/lib/index.css";

import katex from 'katex';
import "katex/dist/katex.min.css";

Vue.use(VueFluent);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$katex = katex;
  }
}).$mount('#app')
