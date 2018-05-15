<template>
  <div id="pageIndex">
    <com-topNav></com-topNav>

  </div>
</template>
<script>
let comTopNav = () => import('../components/topNav.vue');
export default {
  name: "pageIndex",
  data() {
    return {}
  },
  methods: {},
  components:{
    'com-topNav':comTopNav,
  }
};
</script>

<style>
</style>
