<template>
  <div>
    <h1>我是用户</h1>
    <h2>我是用户内容, 嘿嘿嘿</h2>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userid}}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId () {
      return this.$route.params.userid
    }
  },
  created () {
    console.log('User create')
  }
}
</script>

<style scoped>

</style>
