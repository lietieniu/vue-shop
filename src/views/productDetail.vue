<template>
  <div>
    <!-- 1.轮播图 -->
    <van-swipe class="my-swipe" indicator-color="blue">
      <van-swipe-item v-for="item in gallery" :key="item.id">
        <img :src="item.img_url" style="width: 100%" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 2.退费+包邮 -->
    <Tips />
    <!-- 3.商品名称+价格 -->
    <div class="info">
      <h2>{{ info.name }}</h2>
      <p class="brief">{{ info.goods_brief }}</p>
      <p class="Price">{{ info.retail_price | filterMoney }}</p>
    </div>
    <!-- 4.展示弹出层按钮 -->
    <van-cell class="showSku" title="展示弹出层" is-link />
    <!-- 5.弹出层展示 -->
    <div class="attribute">
      <p>商品参数</p>
      <ul>
        <li v-for="item in attribute" :key="item.name">
          <van-row>
            <van-col class="name" span="7">{{ item.name }}:  </van-col>
            <van-col class="value" span="15">{{ item.value }}</van-col>
          </van-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getProductDetail } from "../request/api";
import Tips from "../components/tips.vue";
export default {
  name: "ProductDetail",
  components: { Tips },
  data() {
    return {
      //1.轮播图数据
      gallery: [],
      //2.商品名称+价格
      info: {},
      //3.弹出层展示数据
      attribute: [],
    };
  },
  created() {
    // console.log(this.$route.query.id);
    getProductDetail({
      id: this.$route.query.id,
    }).then((res) => {
      console.log("res88", res.data);
      if (res.errno == 0) {
        let { gallery, info, attribute } = res.data;
        this.gallery = gallery;
        this.info = info;
        this.attribute = attribute;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.info {
  height: 1.45rem;
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: 0.16rem;
  box-sizing: border-box;
  h2 {
    padding: 0.2rem 0;
    font-weight: normal;
  }
  .Price {
    padding: 0.2rem 0;
    color: crimson;
    font-size: 0.17rem;
  }
}
.showSku {
  border-top: 1px solid black;
  margin-bottom: 0.15rem;
}
.attribute {
  padding: 0.15rem;
  background-color: #fff;
  font-size: 0.16rem;
  p {
    padding: 0.1rem 0;
  }
  li {
    height: 0.38rem;
    line-height: 0.38rem;
    text-align: center;
    background-color: #efefef;
    margin: 0.1rem 0;
    border-radius: 0.05rem;
    .name {
      font-size: 0.13rem;
      text-align: right;
      margin-right: 0.08rem;
    }
    .value{
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
     
    }
  }
}
</style>