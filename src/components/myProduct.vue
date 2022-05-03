<template>
  <div>
    <!--1.DropdownMenu 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item
        title="价格"
        v-model="value1"
        :options="option1"
        @change="changePrice"
      />
      <van-dropdown-item
        title="分类"
        v-model="value2"
        :options="filterCategory"
        @change="changeCategory"
      />
    </van-dropdown-menu>
    <!-- 2.Empty 空状态 -->
    <van-empty v-if="goodsList.length==0" description="搜索不到指定商品" image="search" />
    <!-- 3.产品子组件 -->
    <Product v-else :goodsList="goodsList" />
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "MyProduct",
  components: { Product },
  props: ["goodsList", "filterCategory"],
  data() {
    return {
      value1: "random",
      value2: "",
      option1: [
        { text: "随机", value: "random" },
        { text: "价格由高到低", value: "desc" },
        { text: "价格由低到高", value: "asc" },
      ],
      isEmpty: false,
    };
  },
  methods: {
    //1.分类下拉菜单的点击事件
    changeCategory(value) {
      // console.log("value", value);
      this.$emit("changeCategory", value); //$emit 调用父组件传过来的方法
    },
    //2.价格下拉菜点击事件
    changePrice(value) {
      //console.log("value",value)
      this.$emit("changePrice", value);
    },
  },
  mounted() {
    let _this = this;
    this.filterCategory.map((val, index) => {
      if (val.checked) {
        _this.value2 = val.value;
      }
    });
  },
};
</script>

<style lang="css" scoped>
</style>