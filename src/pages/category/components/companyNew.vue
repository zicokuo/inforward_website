<template>
    <div id="cateCompanyNew">
        <mu-flexbox :style="topBannar.style" justify="center" align="center" class="bannar">
            <mu-flexbox-item class="title">
                COMPANY NEWS
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox orient="vertical" style="background:#f8f5f6;padding-top:3em;" :gutter="50">
            <!-- 面包屑 -->
            <mu-flexbox-item class="" style="background:none;width:1360px;">
                <com-bread-crumb sep=">"></com-bread-crumb>
            </mu-flexbox-item>
            <!-- 集团要闻 -->
            <mu-flexbox-item class="cateBox" style="width:1360px;">
                <div class="title">
                    <span>集团要闻</span>
                    <div class="highlight"></div>
                </div>
                <mu-flexbox class="posts-list" align="flex-start" :gutter="25">
                    <mu-flexbox-item>
                        <router-link :to="posts[0].url" class="first-item posts-list-item">
                            <div class="thumb" :style="{backgroundImage:'url('+posts[0].thumb+')'}">
                            </div>
                            <div class="title">{{posts[0].title||'标题'}}</div>
                            <div class="description">{{posts[0].content||'内容'}}</div>
                            <br>
                            <mu-raised-button style="width:160px" class="readit" label="MORE +" backgroundColor="#ec805b" color="white" secondary/>
                        </router-link>
                    </mu-flexbox-item>
                    <mu-flexbox-item class="posts-list-date">
                        <mu-flexbox orient="vertical">
                            <mu-flexbox-item class="post-item" v-for="(e,i) in posts" :key="i" style="padding:1em 0;">
                                <router-link :to="e.url" class="posts-list-item">
                                    <mu-flexbox>
                                        <mu-flexbox-item justify="center" align="center">
                                            <div class="day">{{e.date.slice(8,10)}}</div>
                                            <div class="date">{{e.date.slice(0,7)}}</div>
                                        </mu-flexbox-item>
                                        <mu-flexbox-item grow="5">
                                            <div class="title" style="line-height:2em;">
                                                {{e.title}}
                                            </div>
                                            <div class="description">
                                                {{e.content}}
                                            </div>
                                        </mu-flexbox-item>
                                    </mu-flexbox>
                                </router-link>
                            </mu-flexbox-item>
                        </mu-flexbox>
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-flexbox-item>
            <!-- 媒体报道 -->
            <mu-flexbox-item class="cateBox" style="width:1360px;">
                <div class="title">
                    <span>媒体报道</span>
                    <div class="highlight"></div>
                </div>
                <mu-flexbox class="posts-list posts-list-swiper" :gutter="50">
                    <mu-flexbox-item v-for="(e,i) in posts" :key="i">
                        <router-link :to="e.url" class="posts-list-item">
                            <div class="thumb" :style="{backgroundImage:'url('+e.thumb+')',width:'100%',height:'200px'}"></div>
                            <div class="title">{{e.title}}</div>
                            <div class="description">{{e.content}}</div>
                        </router-link>
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-flexbox-item>
            <!-- 历史大事记 -->
            <mu-flexbox-item class="cateBox" style="width:1360px;">
                <div class="title">
                    <span>历史大事记</span>
                    <div class="highlight"></div>
                </div>
                <mu-flexbox class="posts-list posts-list-swiper" :gutter="50">
                    <mu-flexbox-item v-for="(e,i) in posts" :key="i">
                        <router-link :to="e.url" class="posts-list-item">
                            <div class="date-box">
                                <div class="day">{{e.date.slice(8,10)}}</div>
                                <div class="date">{{e.date.slice(0,7)}}</div>
                            </div>
                            <div class="thumb" :style="{backgroundImage:'url('+e.thumb+')',width:'100%',height:'200px'}"></div>
                            <div class="title">{{e.title}}</div>
                            <div class="description">{{e.content}}</div>
                        </router-link>
                    </mu-flexbox-item>
                </mu-flexbox>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
let topBannar = {
  style: {
    backgroundImage:
      "url(" + require("@/assets/imgs/category/bannar_bg.png") + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "530px"
  }
};
export default {
  name: "cateCompanyNew",
  data() {
    return {
      topBannar: topBannar
    };
  },
  components: {
    "com-bread-crumb": () => import("@/pages/components/breadcrumb.vue")
  },
  created() {
    let posts = window.$helper.url.buildPostsUrl(window.$api.getPosts());
    this.posts = posts;
  }
};
</script>

<style lang="scss">
#cateCompanyNew {
  & .day {
    font-size: 56px;
    color: #666;
    line-height: 1em;
    font-weight: 900;
  }
  & .date {
    color: #ccc;
  }
  @keyframes up10 {
    0% {
    }
    100% {
      transform: translateY(-5px);
    //   box-shadow: 0 0 5px #ddd;
    }
  }
  & .posts-list {
    &-item {
      display: block;
      &:hover {
        animation: up10 0.5s alternate forwards;
      }
    }
    &-swiper {
      & .date-box {
        background: #eeba30;
        text-align: center;
        position: absolute;
        padding: 0.5em;
        & * {
          color: white;
        }
        & .day {
          font-size: 33px;
        }
      }
    }
  }
}
</style>
