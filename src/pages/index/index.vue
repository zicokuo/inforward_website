<template>

  <div id="pageIndex" style="width:100%;height:100%">
    <com-topNav></com-topNav>
    <!-- 第一屏 -->
    <!-- 第二屏 -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="handleSwiperScroll">
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
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
let comTopNav = () => import("@/pages/components/topNav.vue");

// 加载页面
let comScreenIndex = () => import("@/pages/components/screenIndex.vue");
let comScreenAboutUs = () => import("@/pages/components/screenAboutUs.vue");
let comScreenProjects = () => import("@/pages/components/screenProjects.vue");
let comScreenMap = () => import("@/pages/components/screenMap.vue");
let comFooter = () => import("@/pages/components/footer.vue");

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "pageIndex",
  data() {
    return {
      options: {
        paddingTop: "30px"
      },
      swiperOption: {
        direction: "vertical",
        mousewheel: true,
        height: document.documentElement.clientHeight,
        // height: window.screen.,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // slidesPerView: 'auto',
        roundLengths: true, //防止文字模糊
        nested: true,
        parallax: true,
        scrollbarDraggable: false
      }
    };
  },
  mounted() {},
  methods: {
    handleSwiperScroll: function() {}
  },
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
