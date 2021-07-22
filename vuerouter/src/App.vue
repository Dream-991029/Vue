<template>
  <div id="app">
    <!--to: 跳转至哪个路由-->
<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->
<!--    <br>-->
    <!--tag:将router-link渲染成自己想要的标签-->
    <!--replace:设置网页不可进行后退前进-->
    <!--router-link渲染成想要的标签后,给选中标签自动加上router-link-active类名,可以给样式-->
    <!--也可以通过active-class自定义选中添加的类名-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--通过代码跳转路由-->
<!--    <button @click="homeClick">主页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <!--动态路由-->
    <router-link to="/about" tag="button">关于</router-link>
    <router-link to="/home" tag="button">首页</router-link>
    <!--路由传递参数(一)-->
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>
    <!--路由传递参数(二)-->
    <router-link :to="{path: '/profile', query: {name: '张三', age: 18}}" tag="button">档案</router-link>
    <!--$route: 当前活跃的路由对象-->
    <!--$router: VueRouter对象-->
<!--    <router-view></router-view>-->
    <!--keep-alive: 保存路由缓存-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick () {
      // push: 支持前进后退
      // replace: 不支持前进后退
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick () {
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>
<style scoped>
  .active {
    color: deeppink;
  }
</style>
