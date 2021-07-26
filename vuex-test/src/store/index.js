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
    ],
    info: {
      name: 'Kobe',
      age: 42,
      sex: 'Male'
    }
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
    },
    // 更新info里面的数据
    updateInfo (state) {
      // 只要这个属性值之前在state中声明过, 那么自动加入到响应式中
      state.info.name = 'James'
      // 在对象中添加一个属性, 这种方式不会添加到响应式中
      // state.info.address = '洛杉矶'
      // 若要在这个对象中添加一个属性, 则需要使用Vue.set
      // Vue.set(state.info, 'address', '洛杉矶')
      // 若要删除对象中的属性, 则需要使用Vue.delete
      // Vue.delete(state.info, 'age')
    }
  },
  // 若有异步操作,必须在actions中进行提交
  actions: {
    aupdateInfo (contxt, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          contxt.commit('updateInfo')
          resolve(payload.message)
        }, 2000)
      })
    }
  }
})

// 导出store对象
export default store
