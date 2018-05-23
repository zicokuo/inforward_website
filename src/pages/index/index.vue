<template>

  <div id="pageIndex">
    <com-topNav></com-topNav>
    <swiper :options="swiperOption" ref="screenPageSwiper" @someSwiperEvent="handleSwiperScroll">
      <!-- slides -->
      <swiper-slide>
        <com-screen-index></com-screen-index>
      </swiper-slide>
      <swiper-slide>
        <com-screen-aboutus></com-screen-aboutus>
      </swiper-slide>
      <swiper-slide>
        <com-screen-projects></com-screen-projects>
      </swiper-slide>
      <swiper-slide>
        <com-screen-map></com-screen-map>
      </swiper-slide>
      <swiper-slide>
        <com-footer></com-footer>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!-- Optional controls -->
    </swiper>

  </div>
</template>
<script>
let comTopNav = () => import("@/pages/components/topNav.vue");

// 加载页面
let comScreenIndex = () => import("./components/screenIndex.vue");
let comScreenAboutUs = () => import("./components/screenAboutUs.vue");
let comScreenProjects = () => import("./components/screenProjects.vue");
let comScreenMap = () => import("./components/screenMap.vue");
let comFooter = () => import("@/pages/components/footer.vue");

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "pageIndex",
  data() {
    let _this = this;
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        freeModeSticky: true,
        mousewheel: true,
        parallax: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        // nested: true,
        roundLengths: true, //防止文字模糊,
      }
    };
  },
  mounted() {
  },
  methods: {
    handleSwiperScroll: function() {}
  },
  computed: {},
  watch: {},
  components: {
    swiper,
    swiperSlide,
    "com-topNav": comTopNav,
    "com-screen-index": comScreenIndex,
    "com-screen-aboutus": comScreenAboutUs,
    "com-screen-projects": comScreenProjects,
    "com-screen-map": comScreenMap,
    "com-footer": comFooter
  }
};
</script>

<style lang="scss">
.relative {
  position: relative !important;
}
.absolute {
  position: absolute !important;
}
.section {
  @extend .relative;
  width: 100%;
  height: 100%;
}
.standard {
  &-text {
    text-indent: 150%;
  }
}
.full {
  &-width {
    width: 100%;
  }
  &-height {
    height: 100%;
  }
  &-all {
    width: 100%;
    height: 100%;
  }
}
</style>
