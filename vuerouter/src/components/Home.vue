<template>
  <div>
    <h1>我是主页</h1>
    <h2>我是主页内容,哈哈哈</h2>
    <!--新闻-->
    <router-link to="/home/news" tag="button">新闻</router-link>
    <!--消息-->
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  created () {
    console.log('Home create')
  },
  // 当使用keep-alive时,activated和deactivated才会生效
  activated () {
    this.$router.push(this.path)
    console.log('Home active')
  },
  deactivated () {
    console.log('Home deactive')
  },
  // 当离开组件时
  beforeRouteLeave (to, from, next) {
    this.path = from.fullPath
    next()
  }
}
</script>

<style scoped>

</style>
