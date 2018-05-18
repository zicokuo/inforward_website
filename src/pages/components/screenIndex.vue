<template>
  <div id="screenIndex" class="section">
    <div class="parallaxLayer" :style="'background-image:url('+bg+');'">
      <div data-depth="0.1" style="z-index:1000">
        <img class='adaptive-imgs' src="@/assets/imgs/bigTitle.png" />
      </div>
      <div class="adaptive-ball" v-for="( ball , index ) in balls" :key="index" :data-depth='Math.random().toFixed(2)' :style="{'z-index':ball.z}">
        <img class="relative adaptive-imgs adaptive-items" :src="ball.imgSrc" :style="{'left':ball.x+'px','top':ball.y+'px'}" />
      </div>
    </div>
    <div class="absolute adaptive-items" style="top:941px;left:900px">
      <div class="title">Welcome to Inforward</div>
      <div>
        <img src="@/assets/imgs/downBtn.png" />
      </div>
    </div>
  </div>
</template>

<script>
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
let screenIndexBg = require("@/assets/imgs/screen_index_bg.png");
import Parallax from "parallax-js";
export default {
  name: "screenIndex",
  data() {
    return {
      bg: screenIndexBg,
      balls: Balls
    };
  },
  mounted() {
    // this.$nextTick(() => {
      $(function() {
        var scene = $("#screenIndex .parallaxLayer").get(0);
        var parallaxInstance = new Parallax(scene);
        $("#screenIndex .parallaxLayer").height(document.documentElement.clientHeight);
        window.$imageHelper.autoFixImage($(".adaptive-imgs"));
        window.$imageHelper.autoFixPosition($(".adaptive-items"));
      });
    // });
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
    & .title {
      font-size: 24px;
    }
  }
}
</style>
