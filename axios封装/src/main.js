import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.axios = axios
// Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// 简单使用
axios({
  url: 'https://httpbin.org/get'
  // params: {
  //   type: 'sell',
  //   page: 3
  // }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
