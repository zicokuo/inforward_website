<template>
  <div id="pageIndex">
    <com-topNav></com-topNav>
      <full-page :options="options">
        <!-- 第一屏 -->
        <com-screen-index></com-screen-index>
    </full-page>
  </div>  
</template>
<script>
import FullPage from "vue-fullpage.js";

let comTopNav = () => import("../components/topNav.vue");
let comScreenIndex = () => import("../components/screenIndex.vue");
export default {
  name: "pageIndex",
  data() {
    return {
      options: {
        paddingTop: "30px"
      }
    };
  },
  methods: {},
  components: {
    "com-topNav": comTopNav,
    "com-screen-index": comScreenIndex,
    FullPage
  }
};
</script>

<style>
</style>
