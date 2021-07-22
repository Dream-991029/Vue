import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from './../components/Home'
// import About from './../components/About'
// import User from './../components/User'

// 1.安装插件
Vue.use(VueRouter)

// 路由懒加载
const Home = () => import('./../components/Home')
const About = () => import('./../components/About')
const User = () => import('./../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('./../components/Profile')
// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // 路由重定向
    redirect: '/about'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    // 路由嵌套
    children: [
      // {
      //   path: '',
      //   redirect: 'message'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userid',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
    // 路由独享守卫(前置钩子)
    beforeEnter (to, from, next) {
      console.log('我是档案前置钩子')
      next()
    }
  }
]
const router = new VueRouter({
  routes,
  // 去掉路由前面的#
  mode: 'history',
  // 如果好多都需要添加tab栏效果,那么可以通过下面这个属性给所有路由都添加上自己想要的类名
  linkActiveClass: 'active'
})
// 全局路由守卫(前置钩子: 进入路由之前)
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log('-----------')
  next()
})
// 全局路由守卫(后置钩子: 进入路由之后)
router.afterEach((to, from) => {
  // console.log('+++++++++++')
  // console.log(to)
})

export default router
