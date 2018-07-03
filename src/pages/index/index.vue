<template>

  <div id="pageIndex">
    <com-topNav></com-topNav>
    
      <!-- slides -->
      
        <com-screen-index></com-screen-index>
      <div>
        <com-screen-aboutus></com-screen-aboutus>
        <com-screen-projects></com-screen-projects>
      </div>

     <!-- <swiper :options="swiperOption" ref="screenPageSwiper" @someSwiperEvent="handleSwiperScroll">
      <swiper-slide>
        <com-screen-map></com-screen-map>
      </swiper-slide> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <!-- Optional controls -->
    <!-- </swiper> -->
        <com-footer></com-footer>

  </div>
</template>
<script>
let comTopNav = () => import("@/pages/components/topNav.vue");

// 加载页面
let comScreenIndex = () => import("./components/screenIndex.vue");
let comScreenAboutUs = () => import("./components/screenAboutUs.vue");
let comScreenProjects = () => import("./components/screenProjects.vue");
// let comScreenMap = () => import("./components/screenMap.vue");
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
    // console.log('正在监听');
    
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleSwiperScroll: function() {},
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > 1848.6){
        // console.log('index')
       imp.style.left = 0;
       imp.style.opacity = 1;
       inforimg.style.opacity = 1;
       inforimg.style.top = -29+'px'
       inforimg.style.right = -19+'px'
      }
    }
  },
  created(){
    
  },
  beforeDestroy(){
    // console.log('移除监听');
    
    window.removeEventListener('scroll',this.handleScroll)
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
    // "com-screen-map": comScreenMap,
    "com-footer": comFooter
  }
};
</script>

<style lang="scss">

body{
  // min-width: 1250px;
}
</style>
