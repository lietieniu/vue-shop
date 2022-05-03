<template>
  <div class="popup">
    <van-search
      v-model="popValue"
      show-action
      :placeholder="popPlaceholder"
      @search="onSearch"
      @cancel="onCancel"
      @input="timeSearch"
    />
    <!-- 1.历史搜索+热门区块 -->
    <HistoryHot
      v-if="blockShow == 1"
      :historyKeywordList="historyKeywordList"
      :hotKeywordList="hotKeywordList"
      @tagClick="tagClick"
    />

    <!-- 2.搜索列表区块 -->
    <MyList 
    v-else-if="blockShow == 2" 
    :arr="arr" 
    @tagClick="tagClick"
    />

    <!-- 3.产品product区块 -->
    <MyProduct
      v-else
      :filterCategory="filterCategory"
      :goodsList="goodsList"
      @changeCategory="changeCategory"
      @changePrice="changePrice"
    />
  </div>
</template>

<script>
import HistoryHot from "../components/historyHot.vue";
import MyProduct from "../components/myProduct.vue";
import MyList from "../components/myList.vue";
import { popupSearchData, getSearchData, getTimeSearch } from "../request/api";
export default {
  name: "MyPopup",
  components: { HistoryHot, MyProduct, MyList },
  data() {
    return {
      popValue: "",
      popPlaceholder: "",

      //1.代表历史记录与热门搜素区块
      //2.代表列表区块
      //3.代表产品区块
      blockShow: 1, //

      //4.历史记录数据
      historyKeywordList: [],
      //5.热门搜素数据
      hotKeywordList: [],
      //6.传递给MyProduct组件的分类数据
      filterCategory: [],
      //7.传递给MyProduct组件的商品数据
      goodsList: [],

      //价格排序
      order: "desc",
      //分类的id
      categoryId: 0,
      //排序的方式，id就是默认的排序方式，price是价格排序
      sort: "id",

      //8.搜索显示列表
      arr: [],
    };
  },
  methods: {
    //改变分类规则排序
    changeCategory(value) {
      //console.log("value",value);
      this.categoryId = value;
      //重新调用onSearch方法
      this.onSearch();
    },
    //改变价格排序
    changePrice(value) {
      this.order = value;
      this.sort = "price";
      this.onSearch();
    },

    //1.搜素函数(参数为keyword关键词搜索)
    onSearch() {
      let _this = this;
      getSearchData({
        keyword: this.popValue,
        page: 1,
        size: 20,
        order: this.order, //价格排序
        categoryId: this.categoryId,
        sort: this.sort,
      }).then((res) => {
        console.log("res666", res);
        if (res.errno == 0) {
          _this.blockShow = 3; //搜索后,数据成功返回，跳转到产品区块
          let { filterCategory, goodsList } = res.data;
          //修改数组中对象名称
          let arr = JSON.parse(
            JSON.stringify(filterCategory)
              .replace(/name/g, "text")
              .replace(/id/g, "value")
          );
          _this.filterCategory = arr;
          _this.goodsList = goodsList;
        }
      });
    },
    //2.取消函数
    onCancel() {
      // 写法一: this.$router.push('/home');
      // 写法二：go(-1) 代表跳回上一个页面
      this.$router.go(-1);
    },
    //3.实时搜索函数
    timeSearch() {
      let _this=this
      getTimeSearch({
        keyword: this.popValue,
      }).then((res) => {
      if(res.errno==0){
       // console.log("res2", res);
        _this.blockShow=2 //实时数据搜索成功后,跳转到搜索列表区块
        _this.arr=res.data;
      }
      });
    },
    //4.Tag标签点击函数
    tagClick(value){
      this.popValue=value;
      this.onSearch()
    }
  },
  //1.页面创建进行ajax交互
  created() {
    popupSearchData().then((res) => {
      // console.log("res", res);
      if (res.errno == 0) {
        let { defaultKeyword, historyKeywordList, hotKeywordList } = res.data;
        this.popPlaceholder = defaultKeyword.keyword; //搜索框默认数据
        this.historyKeywordList = historyKeywordList; //历史记录数据
        this.hotKeywordList = hotKeywordList;
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
  right: 0;
  top: 0;
  background-color: #efefef;
}
</style>