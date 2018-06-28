<template>
  <div id="screenProjects" class="section" :style=sectionStyle>
    <mu-flexbox>
      <mu-flexbox-item justify="center" align="center" style="padding:2%">
        <!-- <div class="bannar-title">
          Projects
        </div>
        <div class="bannar-summary">
          我们的项目
        </div> -->
        <img src="@/assets/imgs/indeximg/meproject.png" alt="">
      </mu-flexbox-item>
    </mu-flexbox>
    <ul class="projects">
      <li>
        <img src="@/assets/imgs/indeximg/das_03.png" alt="" class="proimg">
        <img src="@/assets/imgs/indeximg/imp.png" alt="" id="imp">
        </li>
      <li>
        <img src="@/assets/imgs/indeximg/office.png" alt="" class="proimg">
        <img src="@/assets/imgs/indeximg/newinforward.png" alt="" class="inforimg" id="inforimg">
      </li>
      <li><img src="@/assets/imgs/indeximg/private.png" alt="" class="proimg"></li>
      <li>
        <h2>广州珠江新城环球都会广场</h2>
        <span>环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。</span>
        <img src="@/assets/imgs/indeximg/indexqiu.png" alt="" class="indexqiu">
      </li>
    </ul>
    <!-- <mu-flexbox style="margin:7em 0">
      <mu-flexbox-item>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(p,i) in projects" :key="i" style="width:514px;height:595px;">
            <mu-card style="height:595px;">
              <mu-card-media>
                <img :src="p.imgSrc" />
              </mu-card-media>
              <mu-card-title :title="p.title" class="project-title" />
              <mu-card-text>
                {{p.summary}}
              </mu-card-text>
              <mu-card-actions class="absolute" style="width:100%;bottom:0;">
                <mu-flat-button icon="remove_red_eye">
                  {{p.views}}
                </mu-flat-button>
                <mu-flat-button style="float:right" primary icon="chevron_right">Reed More</mu-flat-button>
              </mu-card-actions>
            </mu-card>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </mu-flexbox-item>

    </mu-flexbox> -->
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
        // backgroundImage: "url(" + require("@/assets/imgs/project_bg.png") + ")",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "bottom"
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 50,
        slidesPerGroup: 1,
        // slidesPerColumn:2,
        loop: true,
        loopFillGroupWithBlank: true,
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
  #imp{
    transition:all .8s;
  }
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
      & .mu {
        &-card {
          &-title {
            color: #eeba30;
            font-weight: 900;
            text-align: center;
          }
          &-text{
            text-indent: 2em;
          }
        }
      }
    }
  }
  .projects{
    display: flex;
    flex-wrap:wrap;
    width: 1270px;
    margin:0 auto;
    margin-bottom:110px;
    li{
      background:#fff;
      list-style: none;
      width: 50%;
      position:relative;
      .proimg{
        width: 100%;
        position: relative;
        z-index: 3;
      }
      .inforimg{
            position: absolute;
    top: -300px;
    z-index: 4;
    right: -300px;
    opacity: 0;
    transition: all .8s;
      }
      img{
        display:block;
        
      }
    }
    li:nth-of-type(1){
      background:#fff;
      .proimg{
        position: absolute;
        bottom:0;
      }
      img:nth-of-type(2){
        position: absolute;
        top:28%;
        z-index: 1;
        left:-680px;
        opacity:0;
      }
    }
    li:nth-of-type(4){
      padding:130px;
      h2{
        color:#ccaa4f;
        letter-spacing: 1px;
      }
      span{
        font-size: 14px;
        font-family: fzlt;
        text-align:left;
        display:block;
      }
    }
    li:nth-of-type(2){
      align-self: flex-end;
    }
    .indexqiu{
      position: absolute;
      right:-80px;
    }
  }
}
.parallaxLayer{
  display: none;
}

</style>
