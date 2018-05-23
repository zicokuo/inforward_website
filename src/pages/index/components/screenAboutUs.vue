<template>
    <div id="screenAboutUs" class="section">
        <mu-flexbox :style="bannarStyle">
            <mu-flexbox-item justify="center" align="center">
                <div class="bannar-title">
                    About Us
                </div>
                <div class="bannar-summary">
                    关于我们
                </div>
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
            <mu-flexbox-item justify="center" align="center">
                <img src="@/assets/imgs/title2summary.png" style="margin:5em 0;"/>
                <div class="standard-text">盈富永泰集团是广州南沙委员会投资顾问，在房地产投资、金融、发展、建设管理和资产管理方面有丰富经验。自2016年以来，</div>
                <div class="standard-text">盈富永泰集团及其附属机构共管理、开发或拥有超过100亿广州写字楼资产。今天，盈富永泰集团为客户提供了大约60亿的房地产投资组合。投资组合是多样化的，既有稳健的资产组合，又有地理分布。</div>
                <div class="standard-text">基金策略积极寻求机会，投资于核心和核心加物业，以及增值运营物业和发展项目。</div>
                <div class="standard-text">盈富永泰集团为客户提供了大约60亿的房地产投资组合</div>
            </mu-flexbox-item>
        </mu-flexbox>
        <div class="parallaxLayer">
            <div class="adaptive-ball" v-for="( ball , index ) in balls" :key="index" :data-depth='Math.random().toFixed(2)' :style="{'z-index':ball.z}">
                <img class="relative adaptive-imgs adaptive-items" :src="ball.imgSrc" :style="{'left':ball.x+'px','top':ball.y+'px'}" />
            </div>
        </div>
    </div>
</template>

<script>
let Balls = [
  { imgSrc: require("@/assets/imgs/ball4.png"), x: "1512", y: "1362", z: "900" }
];
import Parallax from "parallax-js";
export default {
  name: "screenAboutUs",
  data() {
    return {
      bannarStyle: {
        backgroundImage:
          "url(" + require("@/assets/imgs/titleAboutUsBg.png") + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "360px",
        zIndex: "1150"
      },
      balls: Balls
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
#screenAboutUs {
  & .bannar {
    &-title {
      font-size: 60px;
      color: #ffce38;
    }
    &-summary {
      font-size: 40px;
      font-weight: 900;
      color: white;
    }
  }
}
</style>
