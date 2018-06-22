<template>
    <div id="communityActivity">
        <com-header :headerbj="require('@/assets/imgs/category/community/activity.png')"></com-header>
        <!-- <mu-flexbox class="img-box bannar" :style="{height:'350px',backgroundImage:'url('+require('@/assets/imgs/category/community/activity.png')+')'}" justify="center" align="center"> -->
        <mu-flexbox>
            <mu-flexbox-item class="title">
                <!-- OUR ACTI -->
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox orient="vertical" style="background:#f8f5f6;padding-top:3em;">
            <!-- 面包屑 -->
            <mu-flexbox-item style="background:none;width:1360px;">
                <com-bread-crumb></com-bread-crumb>
            </mu-flexbox-item>
            <!-- 大标题 -->
            <mu-flexbox-item class="cateBox" style="width:1360px;background:none">
                <div class="title">
                    <span>活动预告&回顾</span>
                    <div class="highlight"></div>
                </div>
                <div class="description">
                    盈富永泰通过联合不同的优质合作伙伴<br> 定期举行多样化活动，盈富永泰商务中心为CBD工作者构筑精彩生活。
                </div>
            </mu-flexbox-item>
            <!-- 第一个post -->
            <mu-flexbox-item class="cateBox" style="width:1360px;padding:0;border-radius:5px;">
                <mu-flexbox>
                    <mu-flexbox-item style="width:50%">
                        <div class="posts-list activity" style="padding:3em;">
                            <div class="title">{{posts[0].title}}</div>
                            <div class="description">{{posts[0].content}}</div>
                        </div>
                    </mu-flexbox-item>
                    <mu-flexbox-item class="img-box" :style="{width:'50%',height:'320px',backgroundImage:'url('+posts[0].thumb+')',borderRadius:'0 5px 5px 0;'}">
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-flexbox-item>
            <!-- posts列表 -->
            <mu-flexbox-item style="width:1360px;padding:0;border-radius:5px;">
                <swiper :options="swiperOption" ref="communityActivitySwiper">
                    <swiper-slide v-for="(p,i) in posts" :key="i">
                        <mu-card style="height:460px;margin-top:30px">
                            <mu-card-media>
                                <img :src="p.thumb" />
                            </mu-card-media>
                            <mu-card-title :title="p.title" class="project-title" />
                            <mu-card-text>
                                {{p.content}}
                            </mu-card-text>
                            <mu-card-actions class="absolute" style="width:100%;bottom:0;">
                                <mu-flat-button icon="remove_red_eye">
                                    {{p.views||666}}
                                </mu-flat-button>
                                <mu-flat-button style="float:right" primary icon="chevron_right">Reed More</mu-flat-button>
                            </mu-card-actions>
                        </mu-card>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev">
                        <img src="@/assets/imgs/swiper-prev.png" alt="">
                    </div>
                    <div class="swiper-button-next" slot="button-next">
                        <img src="@/assets/imgs/swiper-next.png" alt="">
                    </div>
                </swiper>
            </mu-flexbox-item>
            <!-- 大标题 - 友情链接 -->
            <mu-flexbox-item class="cateBox" style="width:1360px;background:none">
                <div class="title">
                    <span>友情链接</span>
                    <div class="highlight"></div>
                </div>
                <mu-flexbox class="frendLinks inforward-grid inforward-grid-4 yqlj" wrap="wrap">
                    <div  v-for="i in 12" :key="i" class="grid">
                    <mu-flexbox-item  :class="'img-'+i" :style="{backgroundImage:'url('+require('@/assets/imgs/category/community/frendLinks-sprite.png')+')'}">
                    </mu-flexbox-item>
                    </div>
                </mu-flexbox>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
import frendLinksSprite from "@/assets/imgs/category/community/frendLinks-sprite.png";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
const comHeader = () => import("@/pages/components/header.vue");
const comBreadCrumb = () => import("@/pages/components/breadcrumb.vue");
import "@/assets/js/index.js";
export default {
  name: "communityActivity",
  data() {
    return {
      img: frendLinksSprite,
      posts: [],
      swiperOption: {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 15,
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
  created() {
    this.posts = window.$helper.url.buildPostsUrl(window.$api.getPosts(20));
    // console.log(this.posts);
    
    
  },
  components: {
    swiper,
    swiperSlide,
    "com-bread-crumb": comBreadCrumb,
    "com-header":comHeader
  }
};
</script>

<style lang="scss">
#communityActivity {
  .posts-list {
    &.activity {
      .title {
        font-size: 28px;
        font-family: "Lantinghei SC";
        color: rgb(255, 206, 56);
        line-height: 3em;
        font-weight: 300;
      }
      .description {
        color: #333;
        font-size: 14px;
        margin-top: 30px;
      }
    }
  }
  .yqlj{
      background: #fff;
      margin-top:60px;
  }
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
}
</style>
<style spoced>
.swiper-button-next{
    background-image:none;
    right: 20px;
    top: 53%;
}
.swiper-button-prev{
    background-image: none;
    left:0px;
    top: 53%;
}
.grid{
    margin: auto;
    text-align:center;
    
}
.grid>div{
        display: inline-block;
    }
.mu-card-text{
    position: relative;
    bottom: 18px;
        overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-sizing: border-box;
    padding: 0;
    margin: 16px;
}
</style>
