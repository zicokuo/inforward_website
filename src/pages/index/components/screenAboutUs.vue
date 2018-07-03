<template>
    <div id="screenAboutUs" class="section">
        <!-- <mu-flexbox style="margin:0 auto;">
            <mu-flexbox-item justify="center" align="center">
              <div class="bannar-summary">
                    关于我们
                </div>
                <div class="bannar-title">
                    About Us
                </div>
                <img src="@/assets/imgs/titleAboutUsBg.png" alt="" style="display:block;width:100%;">
                
            </mu-flexbox-item>
        </mu-flexbox> -->
        <mu-flexbox>
            <mu-flexbox-item justify="center" align="center">
                <img src="@/assets/imgs/title2summary.png" style="margin-top:40px;">
                <!-- <p>WELCOME TO THE INFORWORD</p> -->
                <!-- <mu-list justify="center" >
                  <mu-list-item>
                    <img :src="e.imgSrc" alt="" v-for="(e,i) in dataList" :key="i">
                      <p>{{ e.title }}</p>
                  </mu-list-item>
                </mu-list> -->
                <p style="font-family:MicrosoftYaHei;font-size: 30px;font-weight: 800;">欢迎来到盈富永泰！<br>盈富永泰用心聆听并洞察您的需要，拒绝平庸，诚心为您提供一站式<br>高效商务服务及最佳商务用户体验！</p>
                <ul class="ul-list">
                  <li v-for="(e,i) in dataList" :key="i">
                    <div>
                      <img :src="e.imgSrc" alt="">
                    </div>
                      <p>{{ e.title }}</p>
                  </li>
                </ul>
                <div class="ul-content">
                  <p>盈富永泰集团有限公司广州总部建立</p>
                  <p>INFORWARD NEW GUANGZHOU OFFICE</p>
                  <div class="content-title">为配合业务迅速发展，盈富永泰总部于2016年10月正式成立。新办公总部位于广州繁盛商业中心区珠江新城。地理位置优越。<br>新总部的成立进一步完善了盈富永泰的服务网络，有助盈富永泰扩展企业市场及提供优质服务。</div>
                  <ul class="content-time">
                    <li>
                      <span class="icon-time">2月</span>
                      <span>
                        与环球都会广场成功签署战略合作计划-（盈富永泰进驻环球都会写字楼9楼、14楼、23楼），正式开拓珠江新城写字楼租赁板块业务，领先行业标准以三押一租形式100%出租，实现零流失率；
                      </span>
                       
                    </li><li>
                      <span class="icon-time">2月</span>
                      <span class="content-text">
                        与环球都会广场成功签署战略合作计划-（盈富永泰进驻环球都会写字楼9楼、14楼、23楼），正式开拓珠江新城写字楼租赁板块业务，领先行业标准以三押一租形式100%出租，实现零流失率；
                      </span>
                       
                    </li><li>
                      <span class="icon-time">2月</span>
                      <span>
                        成功推出四押一租全新租赁模式，开创珠江新城租赁行业先河；
                      </span>
                       
                    </li>
                    
                  </ul>
                </div>
                
                
                <!-- <div class="standard-text"><b style="font-weight:400;font-size:30px;">2017</b>年起，盈富永泰制定出一系列符合中国商业地产市场环境的服务产品，全力打造最多元的CBD生活方式，同时为投资者提供符合其业务策略的增值服务，一站式办公新生态体系，带出世界顶级商业地产管理经验与服务理念。</div>
                <div class="standard-text child">盈富永泰旗下拥有<b>广州市盈富永泰商务服务中心，广州市盈富永泰网络服务有限公司、广州市盈富永泰智能科技有限公司、
                  广州市灏璟房地产有限公司、广州市灏顺物业管理有限公司</b>等五大公司。
                </div> -->
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
// import Parallax from "parallax-js";
export default {
  name: "screenAboutUs",
  data() {
    return {
      // bannarStyle: {
      //   backgroundImage:
      //     "url(" + require("@/assets/imgs/titleAboutUsBg.png") + ")",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   height: "360px",
      //   zIndex: "1150"
      // },
      balls: Balls,
      dataList:[
        {
          imgSrc:require("@/assets/imgs/indeximg/inregord.png"),
          title:'关于我们'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/develop.png"),
          title:'企业发展历程'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/chaiman.png"),
          title:'董事长寄语'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/cooperation.png"),
          title:'合作伙伴'
        },
        {
          imgSrc:require("@/assets/imgs/indeximg/news.png"),
          title:'企业新闻'
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
#screenAboutUs {
  ul{padding-left:0;}
  width: 1250px;
  margin:0 auto;
  font-family: MicrosoftYaHei;
  ul li{list-style: none;}
  .ul-content{
        font-size: 26px;
    font-family: MicrosoftYaHei;
    .content-title{
      font-size: 18px;
    }
    p{
      margin:0;
    }
    p:first-child{
      font-size: 30px;
      letter-spacing: 1px;
      font-weight: 800;
    }
    .content-time{
      font-size:18px;
      .content-text{
        max-width: 1135px;
      }
      li{
        position:relative;
            align-items: center;
            display: flex;
      }
        .icon-time{
          color:#fff;
          font-weight: 800;
          width: 90px;
          height: 46px;
          background: #b9a4cd;
          position: relative;
        
          -moz-border-radius:    10px;
          -webkit-border-radius: 10px;
          border-radius:         40px;
          display: inline-block;
              vertical-align: sub;
        }
        .icon-time:before {
            content: "";
          position: absolute;
          left: 98%;
          top: 15px;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-left: 19px solid #b9a4cd;
          border-bottom: 8px solid transparent;
        }
      }
  }
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

  .ul-list{
  position:relative;
  margin-bottom: 90px;
  >img{
    position: absolute;
    left:2%;
    top: -40px;
  }
  hr{
    position: relative;top: 66px;z-index: -1;
  }
  li{ list-style: none;
    display: inline-block;
    font-family: MicrosoftYaHei;
    div{
    width: 108px;
    height: 108px;
    background:#efe7f0;
    border-radius: 100px;
    padding:20px;
    display:flex;
    margin: 0 21px;
    justify-content:center;
        img{
    display: inline-flex;
    height: auto;
    align-self: center;
    
        }
    }
    p{
      color:#653889;
          font-size: 18px;
    margin: 0;
    font-weight: 800;
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
@media screen and (max-width: 1280px){
  #screenAboutUs{
    ul{
      >img{
          position: absolute;
          left: 2%;
          top: -40px;
      }
    }
  }
}
</style>
