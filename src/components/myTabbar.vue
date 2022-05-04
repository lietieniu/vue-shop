<template>
  <div>
    <van-tabbar v-model="$route.meta.num" route active-color="red" inactive-color="#999">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/topic">专题</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "MyTabbar",
  data() {
    return {
         active: 2,
    };
  },
 
//   computed: {
//     active: {
//       get() {
//         switch (this.$route.path) {
//           case "/home":
//             return 0;
//           case "/topic":
//             return 1;
//           case "/category":
//             return 2;
//           case "/cart":
//             return 3;
//           case "/user":
//             return 4;
//           default:
//             break;
//         }
//       },
//       set() {},
//     },
//   },
};
</script>

<style lang="less" scoped>
.tabbar {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>