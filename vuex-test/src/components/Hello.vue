<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(15)}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<style scoped>

</style>
