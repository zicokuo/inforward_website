<template>
    <div id="screenMap" class="section" :style=sectionStyle>
        <mu-flexbox gutter=100 style="padding:8%">
            <mu-flexbox-item>
                <!-- 顶部标记 -->
                <div :style=topSignStyle>
                    {{projects.length||0}}
                </div>
                <swiper :options="swiperOption" style="width:420px;height:550px">
                    <swiper-slide v-for="(p,i) in projects" :key="i" style="width:420px;height:550px">
                        <mu-card style="width:420px;height:550px">
                            <mu-card-media>
                                <img :src="p.imgSrc" />
                            </mu-card-media>
                            <mu-card-title :title="p.title" class="project-title" />
                            <mu-card-text>
                                {{p.summary}}
                            </mu-card-text>
                            <mu-card-actions>
                                <mu-flat-button icon="eye">
                                    {{p.views}}
                                </mu-flat-button>
                                <mu-flat-button icon="right">Reed More</mu-flat-button>
                            </mu-card-actions>
                        </mu-card>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </mu-flexbox-item>
            <mu-flexbox-item grow="2">

            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

let ProjectOrigin = [
  {
    imgSrc: require("@/assets/imgs/project1.png"),
    title: "珠江新城金融城",
    summary:
      "环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。",
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require("@/assets/imgs/project2.png"),
    title: "花城环球都会广场",
    summary:
      "环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。",
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require("@/assets/imgs/project3.png"),
    title: "南沙盈港国际二期",
    summary:
      "环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。",
    views: Math.round(Math.random() * 1000)
  }
];
let Projects = [];
export default {
  name: "screenMap",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      sectionStyle: {
        backgroundImage: "url(" + require("@/assets/imgs/page4map.png") + ")"
      },
      topSignStyle: {
        backgroundImage:
          "url(" + require("@/assets/imgs/page4titleBg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "80px",
        width: "100%",
        top: "40px",
        zIndex: "1200"
      },
      projects: Projects,
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      let index = i % 3;
      this.projects.push(ProjectOrigin[index]);
    }
  }
};
</script>

<style lang="scss">
#screenMap {
  & .topSign {
    position: relative;
    left: 50%;
  }
}
</style>
