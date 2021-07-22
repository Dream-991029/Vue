<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="addClick">+</button>
    <button @click="divClick">-</button>
    <Hello></Hello>
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
    }
  }
}
</script>

<style>
</style>
