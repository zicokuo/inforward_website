<template>
  <div id="screenIndex" class="section">
    <div id="scene">
      <div data-depth="0.1">
        <img class='adaptive-imgs' src="@/assets/imgs/bigTitle.png" />
      </div>
      <div class="adaptive-ball" v-for="( ball , index ) in balls" :key="index" :data-depth='Math.random().toFixed(2)'>
        <img class="relative adaptive-imgs" :src="ball.imgSrc"  :style="{'left':ball.x+'px!important','top':ball.y+'px!important'}"/>
      </div>
    </div>
    <div>Welcome to Inforward</div>
  </div>
</template>

<script>
let Balls = [
  { imgSrc: require("@/assets/imgs/ball3.png"), x: "1734", y: "579" },
  { imgSrc: require("@/assets/imgs/ball2.png"), x: "-124", y: "268" },
  { imgSrc: require("@/assets/imgs/ball1.png"), x: "101", y: "224" }
];
import Parallax from "parallax-js";
export default {
  name: "screenIndex",
  data() {
    return {
      balls: Balls
    };
  },
  mounted() {}
};
$(function() {
  var scene = $("#scene").get(0);
  var parallaxInstance = new Parallax(scene);
  $("#scene").height(document.documentElement.clientHeight);
  window.$imageHelper.autoFixImage($("#scene .adaptive-imgs"));
});
</script>

<style lang="scss">
#screenIndex {
  width: 100%;
  height: 100%;
}
#scene {
  display: flex;
  justify-content: center;
  align-items: center;
  .relative {
    position: relative;
  }
}
</style>
