<template>
  <div>
    <h1>我是profile组件</h1>
    <h2>姓名: {{$route.query.name}}</h2>
    <h2>年龄: {{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  beforeRouteEnter (to, from, next) {
    console.log('我是profile组件的前置钩子')
    next()
  },
  created () {
    console.log('Profile create')
  }
}
</script>

<style scoped>

</style>
