
<template>
  <div id="pageFooter" class="section">
    
    <mu-flexbox class="footerSection" :gutter="120">
      <!-- 左侧栏目 -->
      <mu-flexbox-item>
        <img src="@/assets/imgs/logo.png" alt="">
        <div class="footer-title">
          <div v-for="(e,i) in leftFooterContents" :key="i" class="footer-item">
            <div class="footer-item-title">
              <mu-icon :value="e.icon||'insert_emoticon'"></mu-icon>
              {{e.title}}
            </div>
            <div v-for="(c,ci) in e.contents" :key="'fic'+ci" class="footer-item-content">
              {{c}}
            </div>
          </div>
        </div>
      </mu-flexbox-item>
      <!-- 中间栏目 -->
      <mu-flexbox-item>
        <mu-flexbox justify="center" style="height:92px">
          <img :src="telImg" alt="">
          <!-- <mu-flexbox-item v-for="(e,i) in footerLinks" :key="i">
            <router-link :to="e.url">
              <img :src="e.imgUrl" />
            </router-link>
          </mu-flexbox-item> -->
        </mu-flexbox>
        <mu-flexbox orient="vertical">

          <mu-flexbox-item class="footer-title">
            <div v-for="(e,i) in centerFooterContents" :key="i" class="footer-item">
              <div class="footer-item-title">
                <mu-icon :value="e.icon||'insert_emoticon'"></mu-icon>
                {{e.title}}
              </div>
              <div v-for="(c,ci) in e.contents" :key="'fic'+ci" class="footer-item-content">
                {{c}}
              </div>
            </div>
          </mu-flexbox-item>
        </mu-flexbox>

      </mu-flexbox-item>
      <!-- 右侧栏目 -->
      <mu-flexbox-item>
        <com-contactUs></com-contactUs>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox>
      <mu-flexbox-item style="padding:1em;text-align:center;background:#f3f3f3;">

        {{copyRight}}
      </mu-flexbox-item>

    </mu-flexbox>
  </div>
</template>

<script>
const partContactUs = () => import("@/pages/components/partContactUs.vue");

let leftFooterContents = [
  {
    icon: "map",
    title: "ADRE",
    contents: ["广州市珠江新城花城大道68号", "IMP环球都会广场"]
  },
  {
    icon: "phone",
    title: "CONTA",
    contents: ["TEL:+86-020-84643333", "TEL:+86-020-34512222"]
  },
  {
    icon: "computer",
    title: "WEB",
    contents: ["www.inforward.com.cn"]
  }
];

let centerFooterContents = [
  {
    icon: "access_time",
    title: "BUSINESS HOURS",
    contents: ["MONDAY-SATURDAY: 09:00 - 18:00"]
  },
  {
    icon: "person",
    title: "CUSTOMER SERVICE",
    contents: ["TEL:19802092338", "TEL:19802092338"]
  },
  {
    icon: "mail",
    title: "HR EMAIL",
    contents: ["hr@inforward.com.cn"]
  }
];

let footerLinks = [
  { imgUrl: require("@/assets/imgs/cloudIcon.png"), title: "", url: "" },
  { imgUrl: require("@/assets/imgs/giftsIcon.png"), title: "", url: "" },
  { imgUrl: require("@/assets/imgs/homeIcon.png"), title: "", url: "" },
  { imgUrl: require("@/assets/imgs/linkIcon.png"), title: "", url: "" }
];
let copyRight =
  "COPYRIGHT @ INFORWARD INTERTIONAL CROUP.,LTD 粤ICP备18016294号 - 1 盈富永泰集团有限公司";

export default {
  name: "pageFooter",
  components: {
    "com-contactUs": partContactUs
  },
  data() {
    return {
      leftFooterContents: leftFooterContents,
      centerFooterContents: centerFooterContents,
      copyRight: copyRight,
      footerLinks: footerLinks,
      telImg:require('@/assets/img/relation.png')
    };
  }
};
</script>

<style lang="scss">

#pageFooter {
  background: white;
  margin-top: 4em;

  & .footerSection {
    padding: 2em 0.5em;
    max-width: 1500px;
    min-width: 1000px;
    margin: auto;
    & .contact {
      &-radio {
        color: #333;
      }
    }
  }
  & .footer {
    &-item {
      letter-spacing: 0.2em;
      padding: 10px;
      &-title {
        color: #ffce38;
        font-weight: 900;
        font-size: 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & .mu-icon {
          color: #333;
          margin-right: 0.5em;
        }
      }
      &-content {
        padding-left: 2.3em;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 1.5em;
      }
    }
  }
}
</style>
