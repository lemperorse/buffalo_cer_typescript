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


import device from "vue-device-detector"
Vue.use(device)


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import Menu from "@/components/Component/Core/Menu.vue";
Vue.component('Menu',Menu)

Vue.prototype.$server = process.env.VUE_APP_SERVER 

import './plugins/varible';
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)

}).$mount('#app')

export { vm }