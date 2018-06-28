<template>
  <div id="screenIndex" class="section">
    <div class="parallaxLayer" :style="'background-image:url('+bg+');'">
      <!-- <div data-depth="0.1" style="z-index:1000">
        <img class='adaptive-imgs' src="@/assets/imgs/bigTitle.png" />
      </div>
      <div class="adaptive-ball" v-for="( ball , index ) in balls" :key="index" :data-depth='Math.random().toFixed(2)' :style="{'z-index':ball.z}">
        <img class="relative adaptive-imgs adaptive-items" :src="ball.imgSrc" :style="{'left':ball.x+'px','top':ball.y+'px'}" />
      </div> -->
      
                <!-- <div class="nav_left">
                    <img src="@/assets/img/jticon.png" alt="">
                    <img src="@/assets/img/tiaowen.png" alt="" class="tab">
                </div> -->
                <!--<img src="@/assets/img/COOPERATIVEPARTNER.png" alt="" class="yw">-->
                <div class="nav_right">
                    <div class="nav_right_yuan">
                        <div class="loading">
                            <div class="quan" :style="'background:url('+djsbg+')center no-repeat;'">
                            </div>
                            <div>
                                <div class="show_01 show" :style="'background-image:url('+blbg+')'"></div>
                                <div class="show_02 show" :style="'background-image:url('+blbg+')'"></div>
                                <div class="show_03 show" :style="'background-image:url('+blbg+')'"></div>
                                <div class="show_04 show" :style="'background-image:url('+blbg+')'"></div>
                            </div>
                        </div>
                        <p class="dingwei">公益计时</p>
                        <p class="daojishi dingwei">
                            <span id="daojishi">90</span>
                            <span class="miao">秒</span>
                        </p>
                    </div>
                    <p class="daoji_content">页面停留时间超过
                        <span class="miaoshu">90</span>秒， <br>我们将自行向公益机构捐赠
                        <span class="miaoshu">0.2</span>元</p>
                </div>
            
    </div>
    <div class="absolute adaptive-items" style="top:895px;left:840px">
      <div class="title">Welcome to Inforward</div>
      <div style="padding-top:2em">
        <img src="@/assets/img/downBtn.png" />
      </div>
    </div>
    <ul>
      <li v-for="(e,i) in indexLinks" :key="i" class="dataimg" align="center" v-on:click="goanchor(indexLinks[i].id,i,indexLinks[i].name)" :style="newReturnBg(e.url)">
        <div>
          <img :src="e.titSrc" alt=""><br>
          <p>{{ e.title }}</p>
        </div>
      </li>
    </ul>
    <!-- <div style="background:white;width:100%;">
      
      <mu-flexbox style="max-width:1000px;margin:auto" align="center" justify="center" class="indexLink">
        <mu-flexbox-item v-for="(e,i) in indexLinks" :key="i" style="padding:1em;" align="center">
          <span>ABOUT US</span>
          <mu-flat-button :to="e.url" :label="e.title" :style="e.style" class="flat-button" primary  v-on:click="acity(i)"/>
        </mu-flexbox-item>
      </mu-flexbox>
    </div> -->
  </div>
</template>

<script>
import "@/assets/js/index.js";
let screenIndexBg = require("@/assets/img/yasuo.jpg")
let daojishibg = require("@/assets/img/daojishi.png")
let bolangbg = require("@/assets/img/bolang.png")
let indexLinks = [
  {
    title: "关于我们",
    name:'gywm',
    url: require("@/assets/imgs/indeximg/gywm.png"),
    titSrc:require("@/assets/imgs/indeximg/aboutus.png"),
    id:'screenAboutUs',
    style: { background:'url('+require("@/assets/imgs/indeximg/gywm.png")+') no-repeat center left',height:'63px',paddingLeft:'2em',fontSize:'24px',color:'black'}
  },
  {
    title: "我们的项目",
    name:'project',
    url: require("@/assets/imgs/indeximg/project.png"),
    titSrc:require("@/assets/imgs/indeximg/aboutus.png"),
    id:'screenProjects',
    style: { background:'url('+require("@/assets/imgs/indeximg/project.png")+') no-repeat center left',height:'63px',paddingLeft:'2em',fontSize:'24px',color:'black'}
  },
  {
    title: "联系我们",
    name:'lianxi',
    url: require("@/assets/imgs/indeximg/lianxi.png"),
    titSrc:require("@/assets/imgs/indeximg/contaceus.png"),
    id:'pageFooter',
    style: { background:'url('+require("@/assets/imgs/indeximg/lianxi.png")+') no-repeat center left',height:'63px',paddingLeft:'2em',fontSize:'24px',color:'black'}
  }
];
let Balls = [
  { imgSrc: require("@/assets/imgs/ball3.png"), x: "-124", y: "268", z: "900" },
  { imgSrc: require("@/assets/imgs/ball2.png"), x: "1734", y: "579", z: "900" },
  { imgSrc: require("@/assets/imgs/ball1.png"), x: "101", y: "224", z: "900" },
  {
    imgSrc: require("@/assets/imgs/bird1.png"),
    x: "1441",
    y: "569",
    z: "1100"
  },
  {
    imgSrc: require("@/assets/imgs/flower1.png"),
    x: "422",
    y: "444",
    z: "1100"
  },
  { imgSrc: require("@/assets/imgs/flower2.png"), x: "974", y: "152", z: "900" }
];

import Parallax from "parallax-js";
export default {
  name: "screenIndex",
  data() {
    return {
      bg: screenIndexBg,
      balls: Balls,
      indexLinks: indexLinks,
      djsbg:daojishibg,
      blbg:bolangbg
    };
  },
  mounted() {
    this.$nextTick(() => {
      let windowInit = function() {
        window.$imageHelper.autoFixImage($(".adaptive-imgs"));
        window.$imageHelper.autoFixPosition($(".adaptive-items"));
      };
      $(function() {
        // var scene = $("#screenIndex .parallaxLayer").get(0);
        // var parallaxInstance = new Parallax(scene);
        $("#screenIndex .parallaxLayer").height(
          document.documentElement.clientHeight
        );
        windowInit();
        $(window).resize(function() {
          windowInit();
        });
      });
    });
    

    
  },methods:{
    acity:(index) => {
    //  var that = document.getElementsByClassName('flat-button')[index]
    //  console.log(that);
     
     document.getElementsByClassName('flat-button')[index].style.background = 'url('+require("@/assets/imgs/indeximg/projectac.png")+') no-repeat center left'
    
    },
    goanchor:(index,item,name) => {//平滑滚动
    //切换
    indexLinks.forEach(function(val,e){
      document.getElementsByClassName('dataimg')[e].style.background = 'url('+require("@/assets/imgs/indeximg/"+indexLinks[e].name+".png")+') no-repeat center left'
    })
    document.getElementsByClassName('dataimg')[item].style.background = 'url('+require("@/assets/imgs/indeximg/"+name+"ac.png")+') no-repeat center left'
    //切换end
      let anchor = document.querySelector('#'+index)
      let total = anchor.offsetTop
      let step = total / 50//计算每小段的距离
      let distance = document.documentElement.scrollTop || document.body.scrollTop//滚动条的位置
      if (distance < total) {
    　　// 设定每一次跳动的时间间隔为10ms
        let clearInter = setInterval(function(){
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          window.pageYOffset = distance
        if(distance >= total){
            clearInterval(clearInter)
          }
        }, 10)
      } else {
    　　// 限制滚动停止时的距离
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
window.pageYOffset = total
      }
    
      //     document.body.scrollTop = total
      // document.documentElement.scrollTop = total
      // window.pageYOffset = total
    },
    newReturnBg:function(o){
      return {
        background:'url('+o+')no-repeat center left',
        height:'80px',
        // width:'63px',
        padding:'1em',
        paddingLeft:'65px'
      }
    }
  }
};
</script>

<style lang="scss">
body{
  background:#fafbfa;
}
#screenIndex {
  width: 100%;
  height: 100%;
  background:white;
  p{
    margin: 0;
    padding:0;
  }
  .parallaxLayer {
    display: flex;
    justify-content: center;
    align-items: center;
    // background-image: url('/static/img/screen_index_bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  & .title {
    font-size: 24px;
  }
  .flat-button {
    font-size: 24px;
    font-weight: 900;
  }
  & .indexLink{
    .mu-flexbox-item{
      
    }
  }
  ul{
    width: 1200px;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
    li{
      list-style:none;
      flex-direction: row;
      display: flex;
      cursor: pointer;
      >img{
        flex-shrink:0;
      }
      p{
        margin:0;
        text-align:left;
      }
      div{
         align-self:center;
      }
    }
  }
  .icon{
    // background:url("/static/img/gywmac.png");
  }
.daojishi{	font-weight: 800;margin-top: 16px;font-size: 32px;}
  .nav_right{margin-right:33px;margin-top:65px;position:absolute;right:0;top:26px;}
.nav_right_icon img{
	margin-right:25px;
}
.nav_right_icon{padding-top: 25px;margin-bottom: 41px;}
.nav_right_yuan{
	width: 152px;
	height:160px;
	/* background:url("../img/daojishi.png")center no-repeat; */
	text-align:center;
	color:#d41253;
	padding-top:30px;
	box-sizing:border-box;
	position:relative;
	margin:0 auto;
}
.daoji_content{
	font-size:12px;
	color:#fff;
	text-align:center;
	margin-bottom:76px;

}
.dingwei{    position: relative;
    z-index: 5;}
.miao{color:#ccc;
	font-weight: 0;font-size: 16px;}
.miaoshu{color:#ffce38;}

.loading{    position: absolute;
    top: 0;
    width: 152px;
    overflow: hidden;
    border-radius: 100px;}
.quan{
  // background:url("@/assets/img/daojishi.png")center no-repeat;
    width: 152px;
    height: 151px;
    position: relative;
    z-index: 2;}
.show{
	width: 190px;
    height: 187px;
    position: absolute;
    left: 0; top:140px;
	animation:sploosh 5s ease-in-out both infinite; 
	-webkit-animation:sploosh 3s ease-in-out both infinite;
	// background-image: url("@/assets/img/bolang.png");
}
.show_01{-webkit-animation-delay: -0.8s;  animation-delay: -0.8s; opacity:0.2;}
.show_02{-webkit-animation-delay: -1.6s;  animation-delay: -1.6s; opacity:0.4;}
.show_03{-webkit-animation-delay: -2.4s;  animation-delay: -2.4s; opacity:0.6;}
.show_04{-webkit-animation-delay: -3.2s;  animation-delay: -3.2s; opacity:0.8;}
@-webkit-keyframes sploosh{
    0% {background-position: 0 bottom;}
    50% {background-position: -100px bottom;}
    100% {background-position: -200px bottom;}
  }
  @keyframes sploosh{
    0% {background-position: 0 bottom;}
    50% {background-position: -100px bottom;}
    100% {background-position: -200px bottom;}
  }
}
</style>
