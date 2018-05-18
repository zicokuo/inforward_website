<template>
  <div id="screenProjects" class="section" :style=sectionStyle>
    <mu-flexbox>
      <mu-flexbox-item justify="center" align="center">
        <div class="bannar-title">
          Projects
        </div>
        <div class="bannar-summary">
          我们的项目
        </div>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox style="margin:7em 0">
      <mu-flexbox-item>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(p,i) in projects" :key="i">
            <mu-card>
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
  name: "screenProjects",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      sectionStyle: {
        backgroundImage: "url(" + require("@/assets/imgs/project_bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom"
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      projects: ProjectOrigin
    };
  },
  mounted() {
    for (let a = 0; a < 10; a++) {
      let i = a % 3;
      this.projects.push(ProjectOrigin[i]);
    }
  }
};
</script>

<style lang="scss">
#screenProjects {
  & .bannar {
    &-title {
      font-size: 60px;
      color: #ffce38;
    }
    &-summary {
      font-size: 40px;
      font-weight: 900;
      color: black;
    }
  }
  & .project {
    &-title {
      & .mu-card-title {
        color: #ac9143;
      }
    }
  }
}
</style>
