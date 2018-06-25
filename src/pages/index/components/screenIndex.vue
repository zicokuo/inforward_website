<template>
  <div id="screenIndex" class="section">
    <div class="parallaxLayer" :style="'background-image:url('+bg+');'">
      <!-- <div data-depth="0.1" style="z-index:1000">
        <img class='adaptive-imgs' src="@/assets/imgs/bigTitle.png" />
      </div>
      <div class="adaptive-ball" v-for="( ball , index ) in balls" :key="index" :data-depth='Math.random().toFixed(2)' :style="{'z-index':ball.z}">
        <img class="relative adaptive-imgs adaptive-items" :src="ball.imgSrc" :style="{'left':ball.x+'px','top':ball.y+'px'}" />
      </div> -->
    </div>
    <div class="absolute adaptive-items" style="top:895px;left:840px">
      <div class="title">Welcome to Inforward</div>
      <div style="padding-top:2em">
        <img src="@/assets/img/downBtn.png" />
      </div>
    </div>
    <div style="background:white;width:100%;">
      <mu-flexbox style="max-width:1000px;margin:auto" align="center" justify="center" class="indexLink">
        <mu-flexbox-item v-for="(e,i) in indexLinks" :key="i" style="padding:1em;" align="center">
          <span>ABOUT US</span>
          <mu-flat-button :to="e.url" :label="e.title" :style="e.style" class="flat-button" primary  v-on:click="acity(i)"/>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
  </div>
</template>

<script>
let indexLinks = [
  {
    title: "关于我们",
    url: "",
    style: { background:'url('+require("@/assets/imgs/indeximg/gywm.png")+') no-repeat center left',height:'63px',paddingLeft:'2em',fontSize:'24px',color:'black'}
  },
  {
    title: "我们的项目",
    url: "",
    style: { background:'url('+require("@/assets/imgs/indeximg/project.png")+') no-repeat center left',height:'63px',paddingLeft:'2em',fontSize:'24px',color:'black'}
  },
  {
    title: "联系我们",
    url: "",
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
let screenIndexBg = require("@/assets/img/yasuo.jpg");
import Parallax from "parallax-js";
export default {
  name: "screenIndex",
  data() {
    return {
      bg: screenIndexBg,
      balls: Balls,
      indexLinks: indexLinks
    };
  },
  mounted() {
    this.$nextTick(() => {
      let windowInit = function() {
        window.$imageHelper.autoFixImage($(".adaptive-imgs"));
        window.$imageHelper.autoFixPosition($(".adaptive-items"));
      };
      $(function() {
        var scene = $("#screenIndex .parallaxLayer").get(0);
        var parallaxInstance = new Parallax(scene);
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
    
    }
  }
};
</script>

<style lang="scss">
#screenIndex {
  width: 100%;
  height: 100%;
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
}
</style>
