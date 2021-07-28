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

// 常用默认属性
// 默认全局url前缀
axios.defaults.baseURL = 'http://123.207.32.32:8080'
// 默认全局超时时间
axios.defaults.timeout = 5000
// 简单使用
axios({
  url: ''
  // params: {
  //   type: 'sell',
  //   page: 3
  // }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// 网络并发
axios.all([
  axios({
    url: '/category'
  }),
  axios({
    url: '/home'
    // method: 'post'
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
})).catch(err => {
  console.log(err)
})
