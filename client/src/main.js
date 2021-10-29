import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store'
import axios from 'axios'
import './axios'

Vue.config.productionTip = false
//  default vue's http modules API
Vue.prototype.$http = axios;
// token depuis localStorage
const token = localStorage.getItem("token");
// "if token" utilisera default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
