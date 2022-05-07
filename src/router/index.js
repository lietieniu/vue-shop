import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'


Vue.use(VueRouter)


//处理官方的一个Bug
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

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
    meta: {
      //元素集数据
      num: 0,
      showTabbar:true
    },
    children: [
      //子路由的路径要么把/去掉  或者加上父级路由
      {
        path: '/home/popup',
        name: 'MyPopup',
        component: () => import('../views/MyPopup.vue')
      }
    ]
  },
  //1.专题组件
  {
    path: '/topic',
    name: 'Topic',
    meta: {
      num: 1,
      showTabbar:true
    },
    component: () => import('../views/Topic.vue')
  },
  //2.分类组件
  {
    path: '/category',
    name: 'CateGory',
    meta: {
      num: 2,
      showTabbar:true
    },
    component: () => import('../views/cateGory.vue')
  },
  //3.购物车组件
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      num: 3,
      showTabbar:true
    },
    component: () => import('../views/Cart.vue')
  },
  //4.用户组件
  {
    path: '/user',
    name: 'User',
    meta: {
      num: 4,
      showTabbar:true
    },
    component: () => import('../views/User.vue')
  },
  //5.产品详情组件
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import('../views/productDetail.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//路由拦截；(导航守卫：前置导航守卫和后置导航守卫)
//三个参数
//1.to代表即将进入的路由
//2.from代表即将离开的路由
//3.next() 每一个导航守卫必须至少搭配一个next()
router.beforeEach((to, from, next) => {
  // console.log("to:",to);
  // console.log("from",from);

  //想要进入购物车必须有Token权限
  let Token = localStorage.getItem('token');  //获得浏览器中的token权限
  if (to.path == "/cart") {
    if (Token) {
      next();  //有Token才能进入路由---这个next只针对
    } else {
     Vue.prototype.$toast("请先登录");
     //2秒之后跳转到user的登录页
     setTimeout(()=>{
        next('/user')
     },1000)
    };
    return;
  }
  next() //这个next适配所有路由
})

export default router
