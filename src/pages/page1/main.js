import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入接口文件*/
import httpServe from '../../server/https';
Vue.prototype.$https = httpServe;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#page1')