import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store';
//1.引入Vant全局样式
import 'vant/lib/index.css';
//2.在文件中专门引入Vant 注册和使用的ui
import './vantUi';
//3引入css-reset(标签重置);
import 'reset-css'

Vue.config.productionTip = false;

//1.注册一个全局过滤器
Vue.filter('filterMoney',function(val){
  let newValue=new Number(val)
   return '￥ '+newValue.toFixed(2)+' 元'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
