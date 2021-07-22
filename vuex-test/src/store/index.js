import Vue from 'vue'
import Vuex from 'vuex'

// 注册store
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
  // 单一状态树
  state: {
    'counter': 1000
  },
  // 同步处理
  mutations: {
    // 接收分发, 处理分发
    addFunc (state) {
      state.counter++
    },
    divFunc (state) {
      state.counter--
    }
  }
})

// 导出store对象
export default store
