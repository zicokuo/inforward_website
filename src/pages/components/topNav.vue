<template>
  <div id="topNav">
    <!-- 企业logo -->
    <mu-flexbox class="topNav">
      <mu-flexbox-item class="inforward-logo">
        <mu-flexbox :gutter="100">
          <mu-flexbox-item>
            <img class="adaptive-imgs" src="@/assets/imgs/logo.png" />
          </mu-flexbox-item>
          <mu-flexbox-item>
            <img class="adaptive-imgs" src="@/assets/imgs/menu.png" />
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
  </div>
</template>

<script>
let RightNavs = [
  {
    label: null,
    imgSrc: require("@/assets/imgs/search_btn.png"),
    tips: "搜索",url:''
  },
  { label: null, imgSrc: require("@/assets/imgs/heart_btn.png"), tips: "喜欢" ,url:'/category/activity'},
  { label: null, imgSrc: require("@/assets/imgs/sms_btn.png"), tips: "评论" ,url:'/category/company_news'},
  { label: null, imgSrc: require("@/assets/imgs/share_btn.png"), tips: "分享" ,url:''}
];

export default {
  name: "topNav",
  data() {
    return {
      rightNavs: RightNavs
    };
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
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
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
</style>
