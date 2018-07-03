<template>
  <div>
    <!-- <router-view></router-view> -->
    <com-header :headerbj="require('@/assets/img/zhaopin_01.jpg')"></com-header>
    <main>
      <div class="content">
        <!-- <div class="xulie">
          <img src="@/assets/img/fangzi.png" alt="">
          <span class="jiantou">主页</span>
          <span class="jiantou">走进盈富永泰</span>
          <span>招聘窗口</span>
        </div> -->
        <com-bread style="text-align:left;"></com-bread>
        <div class="tit">
          <h2>你有才，我有财，等你来</h2>
        </div>
        <section>
          <p class="section_p">国内租赁行业的翘首，近两年成长最快的租赁平台。高速增长的集团业务公司。<br>其实我们只是一群想做点事情的人，一群有着相同价值观的人，一群坚信能创造伟大的人。</p>

          <div style="width:1200px;padding:0;border-radius:5px;" class="content_div">
            <swiper :options="swiperOption" @someSwiperEvent="callback">
              <swiper-slide v-for="(p,i) in 24" :key="i">
                <div class="content_div_d">
                  <img src="@/assets/img/yfytlogo.png" alt="">
                  <h5>盈富永泰集团有限公司{{i}}</h5>
                  <p class="section_ul_p1">
                    <span>品质总监高级专员</span>
                    <span>面议</span>
                  </p>
                  <p class="section_ul_p2">
                    <span>设计总监</span>
                    <span>30-50万</span>
                  </p>
                  <a href="javascript:;" class="rezhao">更多热招职位 </a>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev ytyf_jtl" slot="button-prev" style="top:auto;">
                <img src="@/assets/imgs/swiper-prev.png" alt="" style="    left: 0;position: absolute;top:14px;">
              </div>
              <div class="swiper-button-next ytyf_jtr" slot="button-next" style="top:auto;">
                <img src="@/assets/imgs/swiper-next.png" alt="" style="    right: 0;position: absolute;top:14px;">
              </div>
            </swiper>
          </div>
          <div class="tit">
            <h2>我们的客户也在招贤纳士</h2>
          </div>
          <div style="width:1200px;padding:0;border-radius:5px;" class="content_div">
            <swiper :options="swiperOption3">
              <swiper-slide v-for="(p,i) in dataList" :key="i">
                <div class="content_div_d">
                  <img src="@/assets/img/yfytlogo.png" alt="">
                  <h5> {{ dataList[i].name }}</h5>
                  <p class="section_ul_p1" v-for="(o,u) in p.jobs" :key="u">
                    <span>{{ o.job }}</span>
                    <span>{{ p.jobs[u].salary }}</span>
                  </p>
                  <!-- <p class="section_ul_p2">
                              <span>设计总监</span>
                              <span>30-50万</span>
                            </p> -->
                  <a href="javascript:;" class="rezhao">更多热招职位 </a>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev" style="top: 100%;">
                <img src="@/assets/imgs/swiper-prev.png" alt="" style="left: 0;position: absolute;top:12px;">
              </div>
              <div class="swiper-button-next" slot="button-next" style="top: 100%;">
                <img src="@/assets/imgs/swiper-next.png" alt="" style="    right: 0;position: absolute;top:12px;">
              </div>
            </swiper>
          </div>
          <!-- 大标题 - 友情链接 -->
          <mu-flexbox-item class="cateBox" style="background:none">
            <div class="tit">
              <h2>友情链接</h2>
            </div>
            <mu-flexbox class="frendLinks inforward-grid inforward-grid-4 yqlj" wrap="wrap">
              <div v-for="i in 12" :key="i" class="grid">
                <mu-flexbox-item :class="'img-'+i" :style="{backgroundImage:'url('+require('@/assets/imgs/category/community/frendLinks-sprite.png')+')'}">
                </mu-flexbox-item>
              </div>
            </mu-flexbox>
          </mu-flexbox-item>
          <!-- <img v-for="(e,i) in 10" :key="i" src="@/assets/logo.png" /> -->
        </section>

      </div>
    </main>

  </div>
</template>
<style scoped src="swiper/dist/css/swiper.css"></style>
<style scoped src="@/assets/css/recruit.css" type="text/css"></style>

<script>
import frendLinksSprite from "@/assets/imgs/category/community/frendLinks-sprite.png";
const comBreadCrumb = () => import("@/pages/components/breadcrumb.vue");
const comHeader = () => import("@/pages/components/header.vue");

import "swiper/dist/css/swiper.css";
import "@/assets/public/css/public.css";
// import "@/assets/css/recruit.css";
import "@/assets/js/jquery-2.1.1.min.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "@/assets/js/index.js";
let logoImg = require("@/assets/img/hezuo.jpg");
let nav_div = document.getElementById('nav_div')
export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide,
    "com-header": comHeader,
    "com-bread": comBreadCrumb
  },
 
  data() {
    return {
      show1: true,
      logoImg: logoImg,
      swiperOption: {
        slidesPerView: 5, //一行多少个
        spaceBetween: 12, //距离多少
        slidesPerGroup: 1, //点击出现多少个
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".ytyf_jtl",
          prevEl: ".ytyf_jtr"
        }
      },
      swiperOption3: {
        direction: "horizontal",
        slidesPerView: 5,
        spaceBetween: 12,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        slidersPerColumnFill: "row",
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    callback: function() {},
     handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // scrollTop > 0 ? nav_div.display = 'none' : '' ;
      // console.log(nav_div);  
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(1, 1000, false)
  },
  // name: "HelloWorld",
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  // data() {
  //   return {
  //     msg: "Welcome to Your Vue.js App",
  //     logoImg: null
  //   };
  // },
  created() {
    //this.logoImg = logoImg;
    this.dataList = window.$helper.url.buildPostsUrl(
      window.$api.getCompany(27)
    );
  }
};
</script>
<style lang="scss" spoced>
.frendLinks {
  $size: 64px;
  @for $i from 1 through 8 {
    .img-#{$i} {
      background-position-x: $i * 2 * $size;
      background-position-y: 0;
      background-repeat: 0;
      height: $size;
      width: 2 * $size;
    }
  }
}
.grid {
  margin: auto;
  text-align: center;
}
.grid > div {
  display: inline-block;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.yqlj{background:#fff;}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->


