<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
      disabled
    />
   <van-swipe  :autoplay="3000" indicator-color="blue">
  <van-swipe-item v-for="item in banner" :key="item.id">
    <img :src="item.image_url" width="100%"/>
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
import axios from "axios";
import { getHomeData } from "../request/api";
export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      //轮播图数组
      banner: []
    };
  },
  // 生命周期方法 created执行ajax操作(可用于页面初始化)
  //1.获取首页数据
  created() {
    // getHomeData()
    //   .then((res) => {
    //     //判断数据是否获得成功
    //     if (res.errno == 0) {
    //       console.log("data", res.data);
    //       // let { banner } = res.data; //结构获得轮播图数据
    //       // this.banner = banner;
    //     }
    //   })
    getHomeData().then((res)=>{
      if(res.errno==0){
        console.log("data",res.data);
        let {banner}=res.data;
        this.banner=banner
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