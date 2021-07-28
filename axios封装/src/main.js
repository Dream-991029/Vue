import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 导入封装的网络请求
import { request, request1, request2, request3 } from './network/request'

Vue.config.productionTip = false
// Vue.prototype.axios = axios
// Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 调用封装的网络请求,第一种方式
request({
  url: '/home'
}, res => {
  console.log(res)
}, err => {
  console.log(err)
})

// 调用封装的网络请求,第二种方式
request1({
  baseConfig: {
    url: '/home'
  },
  success: function (res) {
    console.log(res)
  },
  failure: function (err) {
    console.log(err)
  }
})

// 调用封装的网络请求,第三种方式
request2({
  url: '/home'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 调用封装的网络请求,第四种方式
request3({
  url: '/home'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
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
