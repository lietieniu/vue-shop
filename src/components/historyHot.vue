<template>
  <div>
    <div class="history">
      <div class="top">
        <h4>历史记录</h4>
        <van-icon name="delete-o" class="icon" />
      </div>
      <div class="down">
        <van-tag
          plain
          type="default"
          size="medium"
          text-color="#ad0000"
          v-for="(item, index) in historyKeywordList"
          :key="index"
          >{{ item }}
        </van-tag>
      </div>
    </div>
    <div class="history">
      <div class="top">
        <h4>热门搜索</h4>
      </div>
      <div class="down">
        <van-tag
          plain
          size="medium"
          v-for="(item, index) in hotKeywordList"
          :key="index"
          :type="item.is_hot == 1 ? 'danger' : 'default'"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryHot",
  props: ["historyKeywordList", "hotKeywordList"],
};
</script>

<style lang="less" scoped>
.history {
  padding: 0 2%;
  background-color: #fff;
  margin-bottom: 0.18rem;
  .top {
    display: flex;
    justify-content: space-between; //分布在两边
    align-items: center; //垂直居中
    height: 0.5rem;
    font-size: 0.2rem;
    h4 {
      font-weight: normal; //不加粗
    }
  }
  .down {
    .van-tag {
      margin-right: 0.15rem;
      margin-bottom: 0.15rem;
      padding: 0.03rem;
    }
  }
}
</style>