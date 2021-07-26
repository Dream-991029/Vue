export default {
  state: {
    name: '张三'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateName', payload)
          // 通过context.rootState可以获取到根state
          console.log(context.rootState.info.name)
          // 通过context.rootGetters可以获取到根的getters
          console.log(context.rootGetters.more20StuLength)
          resolve(payload)
        }, 2000)
      })
    }
  },
  getters: {
    updateNameGetter1 (state) {
      return state.name + '1111'
    },
    updateNameGetter2 (state, getters) {
      return getters.updateNameGetter1 + '2222'
    },
    updateNameGetter3 (state, getters, rootState) {
      return getters.updateNameGetter2 + rootState.counter
    }
  }
}
