<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="addClick">+</button>
    <button @click="divClick">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount1(15)">+15</button>
    <Hello></Hello>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(6)}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改</button>
    <button @click="aupdateInfo">延时修改</button>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
export default {
  name: 'App',
  components: { Hello },
  methods: {
    addClick () {
      // $store.commit: 将行为进行分发
      this.$store.commit('addFunc')
    },
    divClick () {
      this.$store.commit('divFunc')
    },
    addCount (count) {
      this.$store.commit('addCount', count)
    },
    addCount1 (count) {
      this.$store.commit({
        type: 'addCount1',
        count
      })
    },
    updateInfo () {
      this.$store.commit('updateInfo')
    },
    aupdateInfo () {
      // 如果有异步操作,则需要使用dispatch
      this.$store.dispatch('aupdateInfo', {
        message: '我是消息',
        success: (message) => {
          console.log(message)
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
