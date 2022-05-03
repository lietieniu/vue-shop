<template>
  <div>
    <van-list :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="item in arr"
        :key="item"
        :title="item"
        @click="listClick(item)"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: ["arr"],
  data() {
    return {
      finished: true,
    };
  },
  methods: {
    onLoad() {},
    listClick(item) {
      console.log("item", item);
      this.$emit('tagClick',item) //字传父
    },
  },
};
</script>

<style lang="scss" scoped>
</style>