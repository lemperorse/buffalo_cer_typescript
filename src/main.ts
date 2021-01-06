import Vue from 'vue'
import './plugins/axios'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'hover.css'
Vue.use(Loading,{color: 'red'});
Vue.component('loading', Loading)
 
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


import './plugins/varible';
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)

}).$mount('#app')

export { vm }