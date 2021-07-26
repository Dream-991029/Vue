import Vue from 'vue'
import Vuex from 'vuex'

// 注册store
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
  // 单一状态树
  state: {
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
    ]
  },
  getters: {
    // 如果需要对数据进行处理,则只需要在getters中进行处理即可
    more20Stu (state) {
      return state.students.filter(s => s.age > 20)
    },
    // 如果想用想用之前处理好的数据则可以通过getters属性获取
    more20StuLength (state, getters) {
      return getters.more20Stu.length
    },
    // 如果想要外面传递过来参数,则可以返回一个方法
    moreAgeStu (state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  // 同步处理
  mutations: {
    // 接收分发, 处理分发
    addFunc (state) {
      state.counter++
    },
    divFunc (state) {
      state.counter--
    },
    // 如果需要传递参数,那么可以在方法中跟一个形参
    addCount (state, count) {
      state.counter += count
    },
    // 使用Vuex风格传递参数, 这里传递进来的是一个对象
    addCount1 (state, payload) {
      state.counter += payload.count
    }
  }
})

// 导出store对象
export default store
