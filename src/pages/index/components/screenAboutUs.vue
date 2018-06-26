<template>
    <div id="screenAboutUs" class="section">
        <mu-flexbox :style="bannarStyle">
            <mu-flexbox-item justify="center" align="center">
              <div class="bannar-summary">
                    关于我们
                </div>
                <div class="bannar-title">
                    About Us
                </div>
                
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
            <mu-flexbox-item justify="center" align="center">
                <img src="@/assets/imgs/title2summary.png" style="margin:5em 0;"/>
                <!-- <p>WELCOME TO THE INFORWORD</p> -->
                <!-- <mu-list justify="center" >
                  <mu-list-item>
                    <img :src="e.imgSrc" alt="" v-for="(e,i) in dataList" :key="i">
                      <p>{{ e.title }}</p>
                  </mu-list-item>
                </mu-list> -->
                <ul class="ul-list">
                  <img src="@/assets/imgs/indeximg/niao.png" alt="">
                  <hr/>
                  <li v-for="(e,i) in dataList" :key="i">
                    
                      <img :src="e.imgSrc" alt="">
                      <p>{{ e.title }}</p>
                    
                  </li>
                </ul>
                <div class="standard-text"><b>2016</b>年，盈富永泰集团正式注册成立，总部设于广州珠江新城核心商业区环球都会广场，注册资金1.5亿，目标致力于成为一家集商业地产租售托管服
                务为中心，互联网信息服务、智能科技、商务中心开发运营、优质中小型企业孵化IPO服务为一体化的多元化集团。</div>
                <div class="standard-text"><b style="font-weight:400;font-size:30px;">2017</b>年起，盈富永泰制定出一系列符合中国商业地产市场环境的服务产品，全力打造最多元的CBD生活方式，同时为投资者提供符合其业务策略的增值服务，一站式办公新生态体系，带出世界顶级商业地产管理经验与服务理念。</div>
                <div class="standard-text child">盈富永泰旗下拥有<b>广州市盈富永泰商务服务中心，广州市盈富永泰网络服务有限公司、广州市盈富永泰智能科技有限公司、
                  广州市灏璟房地产有限公司、广州市灏顺物业管理有限公司</b>等五大公司。
                </div>
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
      balls: Balls,
      dataList:[
        {
          imgSrc:require("@/assets/imgs/indeximg/history.png"),
          title:'发展历史'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/introduce.png"),
          title:'集团介绍'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/three.png"),
          title:'企业理念'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/recruit.png"),
          title:'企业招聘'
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
#screenAboutUs {
  & .bannar {
    &-title {
    font-size: 24px;
    color: #ffce38;
    display: inline-block;
    position: relative;
    &:before{
      content:'';
        width: 100%;
        height: 3px;
        background:#ffce38;
        display: block;
      }
    }
    &-summary {
      font-size: 40px;
      font-weight: 900;
      color: #ffce38;
      letter-spacing: 6px;
      margin-bottom: 20px;
    }
  }
  ul{
  position:relative;
  >img{
        position: absolute;
    left: 120px;
    top: -40px;
  }
  hr{
    position: relative;top: 66px;z-index: -1;
  }
  li{
    list-style: none;
    display: inline-block;
    width: 108px;
    height: 108px;
    background:white;
    border-radius: 100px;
    padding:20px;
    vertical-align: top;
        margin: 0 21px;
    p{
      margin:0;
    }
  }
}
.standard-text{
  font-family: fzlt;
  font-size: 18px;
  font-weight: 400;
  // white-space: pre-wrap;
  width: 1160px;
  margin-bottom:60px;
  >b{
        font-family: Champion HTF Middleweight;
    font-size: 30px;
    font-weight: 800;
  }
  
}
.child>b{
  font-size: 26px;
}
}

</style>
