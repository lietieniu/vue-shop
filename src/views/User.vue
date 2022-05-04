<template>
  <div>
    <van-row>
      <van-col span="6">
        <img :src="userImg" alt="" />
      </van-col>
      <van-col span="10">点击登录</van-col>
      <van-col span="8"><van-icon name="arrow" /></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userImg: require("@/assets/user.zhimg.webp"),
    };
  },
};
</script>

<style lang="less" scoped>
.van-row {
  padding: 0.2rem 4%;
  background-color: #333;
  color: #fff;
  img {
    width: 0.8rem;
    border-radius: 50%;
    display: block;
  }
  .van-col {
    // 文本的行高和图片高度相同(图片高度宽度相同)
    line-height: 0.8rem;
    font-size: 0.18rem;
    &:last-child {
      text-align: right;
    }
  }
}
</style>