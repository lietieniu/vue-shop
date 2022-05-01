import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //路由重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      //子路由的路径要么把/去掉  或者加上父级路由
      {
        path: '/home/popup',
        name: 'MyPopup',
        component: () => import('../views/MyPopup.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
