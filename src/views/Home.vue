<template>
  <div>
    <div v-if="$route.path=='/home'">
      <van-search
        v-model="searchValue"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
        disabled
        @click="toPopup"
      />
      <van-swipe :autoplay="3000" indicator-color="blue">
        <van-swipe-item v-for="item in banner" :key="item.id">
          <img :src="item.image_url" width="100%" style="display: block" />
        </van-swipe-item>
      </van-swipe>
    
    </div>
    <!-- style内置样式---transition动画 -->
    <transition name="van-slide-right">
      <router-view v-if="$route.path=='/home/popup'"></router-view>
    </transition>
  </div>
</template>

<script>
import { getHomeData } from "../request/api";
export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      //轮播图数组
      banner: [],
    };
  },
  methods: {
    toPopup() {
      this.$router.push("/home/popup");
    },
  },

  // 生命周期方法 created执行ajax操作(可用于页面初始化)
  //1.获取首页数据
  created() {
    //console.log(this.$route)
    getHomeData()
      .then((res) => {
        if (res.errno == 0) {
          // console.log("data", res);
          let { banner } = res.data;
          this.banner = banner;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
</script>

<style lang="css" scoped>
</style>