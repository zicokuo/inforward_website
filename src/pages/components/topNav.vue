<template>
  <div id="topNav" v-on:mouseleave="show = false">
    <!-- 企业logo -->
    <mu-flexbox class="topNav">
      <mu-flexbox-item class="inforward-logo" style="padding-left:100px;">
        <mu-flexbox :gutter="100">
          <mu-flexbox-item class="logoicon">
            <img class="adaptive-imgs" src="@/assets/imgs/logo.png" />
          </mu-flexbox-item>
          <mu-flexbox-item class="hengxianbig">
            <!-- <img class="adaptive-imgs" src="@/assets/imgs/menu.png" v-on:click="show = !show" /> -->
            <div class="hengxian" v-on:click="show = !show">
              <transition name="custom-classes-transition">
                <div v-if="show" class="hengxian_rotate" ref="rotate">

                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                </div>
                <div v-else class="hengxian_normal" ref="rotate2">
                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                  <img src="@/assets/img/xian.png" alt="">
                </div>
              </transition>
            </div>
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-flexbox-item>
      <mu-flexbox-item :grow="3">
      </mu-flexbox-item>
      <mu-flexbox-item style="max-width:300px">
        <mu-flexbox>
          <mu-flexbox-item v-for="( e , i ) in rightNavs" :key="i">
            <router-link :to="e.url" :title="e.tips"><img class="nav-icon" :src="e.imgSrc" /></router-link>
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-flexbox-item>
    </mu-flexbox>

    <transition name="custom-classes-transition" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
      <div v-if="show" class="nav_div" id="nav_div">
        <div class="nav_content">
          <mu-flexbox>
            <mu-flexbox-item class="nav_tit" style="margin-bottom:40px;">
              <a href="/">
                <img :src="require('@/assets/imgs/public/home.png')" alt="" />
                <p>官网主页</p>
              </a>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox>
            <mu-flexbox-item class="nav_tit">
              <img :src="require('@/assets/imgs/public/about.png')" alt="">
              <p>走进盈富永泰</p>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox class="nav_list" align="center;" style="margin-bottom:28px;">

            <router-link v-for="(index,oi) in datalist.stepInforward" :key="oi" :to="index.path" tag="div" replace>
              <img :src="datalist.stepInforward[oi].iconsrc" alt="" />
              <p>{{index.title}}</p>

            </router-link>
          </mu-flexbox>
          <mu-flexbox>
            <mu-flexbox-item class="nav_tit">
              <img :src="require('@/assets/imgs/public/our.png')" alt="" />
              <p>集团项目产品</p>

            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox>

            <mu-flexbox class="nav_list" style="margin-bottom:25px;">
              <router-link v-for="(index,oi) in datalist.product" :key="oi" :to="index.path" tag="div" replace>
                <img :src="datalist.product[oi].iconsrc" alt="" />
                <p>{{index.title}}</p>

              </router-link>
            </mu-flexbox>

          </mu-flexbox>
          <mu-flexbox>
            <mu-flexbox-item class="nav_tit">
              <img :src="require('@/assets/imgs/public/community.png')" alt="">

              <p>社区</p>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox>
            <mu-flexbox></mu-flexbox>
            <mu-flexbox></mu-flexbox>
            <mu-flexbox class="nav_list">
              <router-link v-for="(index,oi) in datalist.community" :key="oi" :to="index.path" tag="div" replace>
                <img :src="index.iconsrc" alt="" />
                <p>{{index.title}}</p>

              </router-link>
            </mu-flexbox>
            <mu-flexbox></mu-flexbox>
            <mu-flexbox></mu-flexbox>
          </mu-flexbox>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
let RightNavs = [
  {
    label: null,
    imgSrc: require("@/assets/imgs/xzl_btn.png"),
    tips: "写字楼租赁",
    url: "/inforward/introduce"
  },
  {
    label: null,
    imgSrc: require("@/assets/imgs/home_btn.png"),
    tips: "房屋租赁",
    url: "/inforward/introduce"
  },
  {
    label: null,
    imgSrc: require("@/assets/imgs/search_btn.png"),
    tips: "搜索",
    url: "/inforward/introduce"
  },
  {
    label: null,
    imgSrc: require("@/assets/imgs/heart_btn.png"),
    tips: "喜欢",
    url: "/category/activity"
  },
  {
    label: null,
    imgSrc: require("@/assets/imgs/sms_btn.png"),
    tips: "评论",
    url: "/category/company_news"
  },
  {
    label: null,
    imgSrc: require("@/assets/imgs/share_btn.png"),
    tips: "分享",
    url: "/community/public_good"
  }
];

export default {
  name: "topNav",
  data() {
    return {
      rightNavs: RightNavs,
      show: false,

      datalist: {
        //集团介绍
        stepInforward: [
          {
            path: "/inforward/partner",
            title: "集团介绍",
            iconsrc: require("@/assets/imgs/public/jtjs.png")
          },
          {
            path: "/inforward/introduce",
            title: "客户展示&合作伙伴",
            iconsrc: require("@/assets/imgs/public/khzs.png")
          },
          {
            path: "/category/company_news",
            title: "新闻中心",
            iconsrc: require("@/assets/imgs/public/xwzx.png")
          },
          // { path: "/", title: "合作伙伴",iconsrc:require('@/assets/imgs/public/jtjs.png') },
          {
            path: "/inforward/recruit",
            title: "企业招聘&友情链接",
            iconsrc: require("@/assets/imgs/public/qyzp.png")
          }
          // { path: "/", title: "友情链接",iconsrc:require('@/assets/imgs/public/jtjs.png') }
        ],

        //集团业务
        product: [
          {
            path: "/",
            title: "灏景地产",
            iconsrc: require("@/assets/imgs/public/yjdc.png")
          },
          {
            path: "/lease",
            title: "写字楼租赁",
            iconsrc: require("@/assets/imgs/public/xzlzl.png")
          },
          {
            path: "/residence",
            title: "住宅租赁",
            iconsrc: require("@/assets/imgs/public/zzzl.png")
          }
        ],

        //社区
        community: [
          {
            path: "/community/public_good",
            title: "公益事业",
            iconsrc: require("@/assets/imgs/public/gysy.png")
          },
          {
            path: "/category/activity",
            title: "社区活动",
            iconsrc: require("@/assets/imgs/public/sqhd.png")
          }
        ]
      }
    };
  },
  methods: {},
  mounted() {
    // console.log(this.show);
  },

  beforeDestroy() {
    console.log(this.show);

    // window.removeEventListener('scroll',this.handleScroll)
  }
};
</script>

<style lang="scss">
#topNav {
  position: fixed;
  width: 100%;
  z-index: 1300;
  background: rgba(255, 255, 255, 0.1);
  transition: all 2s;
  top: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: #272727;
    .nav_div {
      background: rgba(255, 255, 255, 0.7);
      color: #272727;
    }
  }
  .nav_content {
    img {
      display: block;
      margin: 0 auto;
    }
    p {
      margin: 0;
      padding: 0;
      line-height: 1.2;
      display: inline-block;
    }
  }

  .nav_div:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  .topNav {
    padding-top: 0.5em;
    display: flex;
    position: relative;
    & .nav {
      &-icon {
        width: 1.5em;
      }
    }
  }
  .nav_list div:after {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-color: #91432d;
    border-radius: 6px;
    position: absolute;
    bottom: 8px;
    cursor: auto;
    right: -40px;
  }
  .nav_list {
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-box-pack: justify;
  }
  .nav_list div:last-of-type {
    margin-right: 0;
    &:after {
      content: "";
      display: none;
    }
  }
  .nav_list {
    p {
      font-size: 18px;
    }
    div {
      text-align: center;
      cursor: pointer;
      position: relative;
      margin-right: 80px;
      img {
        display: block;
        margin: 0 auto 8px;
      }
    }
  }
  .nav_tit {
    text-align: center;
    font-weight: 800;
    font-size: 26px;
    font-family: adobebold;
    line-height: 1;
    margin-bottom: 13px;
  }
  #topNav {
    color: #fff;
    transition: all 1s;
  }
  .hengxian_rotate img:nth-child(1),
  .hengxian_rotate img:nth-child(4) {
    opacity: 0;
  }
  .hengxian_rotate img:nth-child(2) {
    transform: rotate(45deg);
  }
  .hengxian_rotate img:nth-child(3) {
    transform: rotate(-45deg);
  }
  .hengxian_normal img {
    transform: rotate(0deg);
    opacity: 1;
  }
  .hengxian {
    display: inline-block;
    
  }
  .logoicon{
    display: flex;
    justify-content: center;
  }
  .hengxian img {
    display: block;
    transition: all 0.2s ease-in-out;
  }
  .hengxian img:nth-of-type(2) {
    position: absolute;
  }
  .nav_div {
    background: rgba(255, 255, 255, 0.1);
  }
  .nav_div {
    position: absolute;
    width: 100%;
    transition: all 1s;
  }
  a {
    color: #000;
  }
}
</style>
