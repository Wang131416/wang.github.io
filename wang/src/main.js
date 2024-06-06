// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import "echarts/map/js/world.js";
import "echarts/map/js/china.js";
import "echarts/extension-src/bmap/bmap.js";

import 'echarts/lib/component/grid'

import * as echarts from 'echarts';
// 引入 ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(VCharts)
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
// 引入及使用 ElementUI
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
