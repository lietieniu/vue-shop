<template>
  <div class="popup">
    <van-search
      v-model="popValue"
      show-action
      :placeholder="popPlaceholder"
      @search="onSearch"
      @cancel="onCancel"
    />
    <HistoryHot :historyKeywordList="historyKeywordList" :hotKeywordList="hotKeywordList"/>
  </div>
</template>

<script>
import HistoryHot from "../components/historyHot.vue";
import { popupSearchData } from "../request/api";
export default {
  name: "MyPopup",
  components: { HistoryHot },
  data() {
    return {
      popValue: "",
      popPlaceholder: "",
      //1.代表历史记录与热门搜素区块
      //2.代表列表区块
      //3.代表产品区块

      //4.历史记录数据
      historyKeywordList:[],
      //5.热门搜素数据
      hotKeywordList:[]
    };
  },
  methods: {
    //1.搜素函数
    onSearch() {},
    //2.取消函数
    onCancel() {
      // 写法一: this.$router.push('/home');
      // 写法二：go(-1) 代表跳回上一个页面
      this.$router.go(-1);
    },
  },
  //1.页面创建进行ajax交互
  created() {
    popupSearchData().then((res) => {
      console.log("res", res);
      if (res.errno == 0) {
        let { defaultKeyword,historyKeywordList,hotKeywordList } = res.data;
        this.popPlaceholder = defaultKeyword.keyword; //搜索框默认数据
        this.historyKeywordList=historyKeywordList; //历史记录数据
        this.hotKeywordList=hotKeywordList

      }
    });
  },
};
</script>

<style lang="css" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  background-color: #efefef;
}
</style>