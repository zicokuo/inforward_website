<template>
  <div id="screenMap" class="section" :style=sectionStyle>
    <mu-flexbox style="padding:4%;height:92%">
      <!-- 左侧swiper -->
      <mu-flexbox-item style="height:100%">
        <!-- 顶部标记 -->
        <div :style=topSignStyle>
          {{swiperActiveIndex}}
        </div>
        <swiper :options="swiperOption" ref="mapSwiper" style="height:100%">
          <swiper-slide v-for="(p,i) in projects" :key="i">
            <mu-card style="height:100%" class="relative">
              <mu-card-media>
                <img :src="p.imgSrc" />
              </mu-card-media>
              <mu-card-title :title="p.title" class="project-title" />
              <mu-card-text>
                {{p.summary}}
              </mu-card-text>
              <mu-card-actions class="absolute" style="bottom:0%;display:flex;width:100%;justify-content:center;align-items:center;flex-wrap: wrap;">
                <mu-flexbox-item align="center" style="width:100%">
                  <img :src="p.qrcode||null" alt="" />
                </mu-flexbox-item>
                <mu-flat-button icon="remove_red_eye">
                  {{p.views}}
                </mu-flat-button>
                <mu-flat-button primary icon="keyboard_arrow_right">Reed More</mu-flat-button>
              </mu-card-actions>
            </mu-card>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev">
            <mu-icon value="keyboard_arrow_left"></mu-icon>
          </div>
          <div class="swiper-button-next" slot="button-next">
            <mu-icon value="keyboard_arrow_right"></mu-icon>
          </div>
        </swiper>
      </mu-flexbox-item>
      <!-- 右侧地图点 -->
      <mu-flexbox-item grow="2" style="height:100%">
        <mu-flexbox-item class="full-all">
          <div v-for="(p,i) in projects" :key="'p'+i" class="mapPoint" :style="p.style" @click="handerMapPointClick(i)">
            {{i+1}}
          </div>
          <div :style=viewSectionStyle>
            {{currentPoint.title||null}}
          </div>
        </mu-flexbox-item>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<script>
import Vue from "vue";
import QRCode from "qrcode";
import apiSimulation from "@/components/apiSimulation.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
let Projects = [];
let MapPoints = [
  { x: 1151, y: 122 },
  { x: 1289, y: 88 },
  { x: 1373, y: 312 },
  { x: 1660, y: 935 },
  { x: 1600, y: 897 }
];
export default {
  name: "screenMap",
  components: {
    swiper,
    swiperSlide,
    QRCode
  },
  data() {
    let _this = this;
    return {
      sectionStyle: {
        backgroundImage: "url(" + require("@/assets/imgs/page4map.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      topSignStyle: {
        backgroundImage:
          "url(" + require("@/assets/imgs/page4titleBg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "80px",
        width: "100%",
        top: "40px",
        zIndex: "1200",
        textAlign: "center",
        fontSize: "26px",
        color: "white",
        fontWeight: 900,
        textShadow: "2px 2px 2px grey"
      },
      currentPoint: { title: null },
      projects: Projects,
      swiperActiveIndex: null,
      swiperOption: {
        watchActiveIndex: true,
        spaceBetween: 30,
        // loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          transitionEnd: function(swiper) {
            let ai = this.activeIndex;
            _this.swiperActiveIndex = ai + 1;
          }
        }
      },
      viewSectionStyle: {
        backgroundImage: "url(" + require("@/assets/imgs/page4Info.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
        width: "500px",
        height: "500px",
        position: "relative",
        top: "32%",
        left: "35px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        color: "white",
        textShadow: "2px 2px 10px",
        display:'flex'
      },
      mapPointStyle: {
        backgroundImage: "url(" + require("@/assets/imgs/page4p2.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute"
      }
    };
  },
  mounted() {
    let ProjectOrigin = apiSimulation.getMapProject();
    ProjectOrigin.map((p, i) => {
      QRCode.toDataURL("I am a pony!", function(err, url) {
        p.qrcode = url;
      });
      p.style = {
        backgroundImage: "url(" + require("@/assets/imgs/page4p2.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "absolute",
        left: MapPoints[i].x / 1920 * 100 + "%",
        top: MapPoints[i].y / 1138 * 100 + "%",
        cursor: "pointer",
        
      };
    });

    this.projects = ProjectOrigin;
    this.currentPoint = this.projects[0]
    this.swiperActiveIndex = 1;
  },
  methods: {
    handerMapPointClick: function(i) {
      this.$refs.mapSwiper.swiper.slideTo(i);
      this.currentPoint = this.projects[i];
    }
  },
  computed: {},
  watch: {
    swiperActiveIndex: function(v) {
      console.log(v);
    },
    currentPoint: function(v) {}
  }
};
</script>

<style lang="scss">
#screenMap {
  & .topSign {
    position: relative;
    left: 50%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 90%;
    background: none;
  }
  & .project {
    &-title {
      & .mu {
        &-card {
          &-title {
            color: #eeba30;
            font-weight: 900;
            text-align: center;
          }
          &-text {
            text-indent: 2em;
          }
        }
      }
    }
  }
  .mapPoint {
    width: 76px;
    height: 100px;
    text-shadow: 2px 2px 2px white;
    color: black;
    text-align: center;
    font-size: 26px;
    padding-top: 0.5em;
  }
}
</style>
