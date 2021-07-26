import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import a from './modules/moduleA'

// 注册store
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {
      'id': 1,
      'name': 'james',
      'sex': 'male',
      'age': 18
    },
    {
      'id': 2,
      'name': 'kebe',
      'sex': 'male',
      'age': 30
    },
    {
      'id': 3,
      'name': 'curopy',
      'sex': 'male',
      'age': 22
    },
    {
      'id': 4,
      'name': 'mlgs',
      'sex': 'female',
      'age': 12
    }
  ],
  info: {
    name: 'Kobe',
    age: 42,
    sex: 'Male'
  }
}
// 创建store对象
const store = new Vuex.Store({
  // 单一状态树
  state,
  // 类似于计算属性
  getters,
  // 同步处理
  mutations,
  // 若有异步操作,必须在actions中进行提交
  actions,
  modules: {
    // 注意: Vue内部会把这里面的模块自动加载到store中的state中
    a
  }
})

// 导出store对象
export default store
