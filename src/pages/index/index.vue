<template>
  <div id="pageIndex" style="width:100%;">
    <com-topNav></com-topNav>
    <!-- <full-page :options="options"> -->
    <!-- 第一屏 -->
    <com-screen-index></com-screen-index>
    <!-- 第二屏 -->

    <!-- </full-page> -->
  </div>
</template>
<script>

let comTopNav = () => import("@/pages/components/topNav.vue");
// 加载页面
let comScreenIndex = () => import("@/pages/components/screenIndex.vue");

export default {
  name: "pageIndex",
  data() {
    return {
      options: {
        paddingTop: "30px"
      },
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 500,
        stopPageScroll: true,
        beforeChange: function(prev, next) {},
        afterChange: function(prev, next) {}
      }
    };
  },
  methods: {},
  components: {
    // FullPage,
    "com-topNav": comTopNav,
    "com-screen-index": comScreenIndex
  }
};
</script>

<style>
</style>
