<template>
  <div>
    <ul>
      <li 
      class="van-ellipsis" 
      v-for="item in goodsList" 
      :key="item.id"
      @click="goToDetail(item.id)"
      >
        <img :src="item.list_pic_url" width="100%" style="display: block" />
        <div class="title">{{ item.name }}</div>
        <div class="price">{{ item.retail_price | filterMoney }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["goodsList"],
  data() {
    return {};
  },
  methods:{
    goToDetail(id){
      //路由携带参数跳转
     this.$router.push(`/productDetail/?id=${id}`)
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0.1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 49%;
    background: #fff;
    text-align: center;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
    line-height: 0.24rem;
    .title {
      // 超出内容省略
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .price {
      color: red;
      margin-top: 0.1rem;
    }
  }
}
</style>