import {
  ADDFUNC,
  DIVFUNC,
  ADDCOUNT,
  ADDCOUNT1,
  UPDATEINFO
} from './mutations-types'
export default {
  // 接收分发, 处理分发
  [ADDFUNC] (state) {
    state.counter++
  },
  [DIVFUNC] (state) {
    state.counter--
  },
  // 如果需要传递参数,那么可以在方法中跟一个形参
  [ADDCOUNT] (state, count) {
    state.counter += count
  },
  // 使用Vuex风格传递参数, 这里传递进来的是一个对象
  [ADDCOUNT1] (state, payload) {
    state.counter += payload.count
  },
  // 更新info里面的数据
  [UPDATEINFO] (state) {
    // 只要这个属性值之前在state中声明过, 那么自动加入到响应式中
    state.info.name = 'James'
    // 在对象中添加一个属性, 这种方式不会添加到响应式中
    // state.info.address = '洛杉矶'
    // 若要在这个对象中添加一个属性, 则需要使用Vue.set
    // Vue.set(state.info, 'address', '洛杉矶')
    // 若要删除对象中的属性, 则需要使用Vue.delete
    // Vue.delete(state.info, 'age')
  }
}
