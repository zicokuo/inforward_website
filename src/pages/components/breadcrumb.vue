<template>
  <div id="webSiteBreadcrumb">
    <mu-breadcrumb :separator="sep">
      <mu-breadcrumb-item v-for="(e,i) in urls" :key="i" :href="e.url||''" color="grey600">
        <mu-icon color="grey600" v-if="e.icon.length>0" :value="e.icon" :style="{position:'relative',top:'0.3em'}" /><span style="color: rgb(117, 117, 117);">{{e.title||'暂定'}}</span>
      </mu-breadcrumb-item>
    </mu-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "webSiteBreadcrumb",
  props: {
    sep: {
      type: String,
      default: () => {
        return ">";
      }
    }
  },
  data() {
    return {
      urls: []
    };
  },
  created() {
    let vm = this;

    vm.urls.push({
      icon: "home",
      url: window.location.origin,
      title: "首页"
    });

    vm.$route.matched.map((e, i) => {
      vm.urls.push({
        icon: "",
        url: vm.$route.matched.length == i + 1 ? "" : e.path,
        title: e.meta.title || e.name
      });
    });
  }
};
</script>

<style lang="scss">
</style>
