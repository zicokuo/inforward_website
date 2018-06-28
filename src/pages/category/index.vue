<template>
  <div id="pageCate" class="subPage">
    <com-top-nav></com-top-nav>
    <!-- 顶部通栏 -->

      <router-view></router-view>

      
    <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="图层_1" x="0px" y="0px" viewBox="0 0 600 445" style="enable-background:new 0 0 600 445;" xml:space="preserve">
<path class="st0 g-rect-path g-rect-fill" d="M62,1.5c36.8-1.1,80.5,15.8,90,42c8.2,22.6-9.5,40-15,53c-4.6,10.9,1.8,22.1-2,35c-4.6,15.5-22.5,22.1-41,26  c0,0.3,0,0.7,0,1c14.3,3.6,23.4,16.1,25,32c-2.3,0.7-4.7,1.3-7,2c6,17.9,12.7,24.3,19,40c-0.7,0.7-1.3,1.3-2,2c-1.3-0.7-2.7-1.3-4-2  c0.3,1.7,0.7,3.3,1,5c-3.6-1.1-2.7-1.1-5-3c-1,5.6,0.3,4.2-4,4c-3.1,0.5-1.7-0.1-3-1c-2.8-2.3-0.5-9.5-6-14c-3,7-6,14-9,21  c-6.1,20.3-2,43.8-7,62c7.6,2.5,16.2,5.4,20,12c-0.3,1-0.7,2-1,3c-14,5.4-33.7,1.5-43-3c0.7-2.7,1.3-5.3,2-8c-17,0.5-31.9-6.4-39-16  c0-0.7,0-1.3,0-2c2-1,4-2,6-3c-1.4-3.6-1.5-3.8-1-8c9-9,18-18,27-27c-4.2-2.3-11.3,1.6-16-6c-3.4-4.5-7.1-42.7-7-54c-2-1-4-2-6-3  c11.8-23.5,5.7-22.1,29-35c-18.5-9.8-36.2-11.8-41-35c-8.4,1.4-14-0.1-17-7c-6.2-9.8-2.1-23.2,3-30c-13.9-21-4.4-45.9,12-57  c-2.5-3-2.7-3.3-7-2c2.1-6.5,7-6.4,14-5c0.1-6.1,1-7.6,3-11c1.7-0.3,3.3-0.7,5-1c0,2,0,4,0,6C42.9,7.4,51.1,6.4,62,1.5z"/>
</svg> -->
    <com-footer></com-footer>
  </div>
</template>
<script>
const comTopNav = () => import("@/pages/components/topNav");
const comFooter = () => import("@/pages/components/footer");

export default {
  name: "pageCate",
  components: {
    "com-top-nav": comTopNav,
    "com-footer": comFooter
  },
  data() {
    return {};
  },
  created() {
//     var obj = document.querySelector("path");
//     var length = obj.getTotalLength();
 
// console.log(obj); // 377.0433
  }
};
</script>

<style lang="scss">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;}
.g-rect-path{
    fill: none;
    stroke-width:10;
    stroke:#d3dce6;
    stroke-linejoin:round;
    stroke-linecap:round;
}
 
.g-rect-fill{
    fill: none;
    stroke-width:10;
    stroke:#ff7700;
    stroke-linejoin:round;
    stroke-linecap:round;
    stroke-dasharray: 0, 1370;
    stroke-dashoffset: 0;
    animation: lineMove 2s ease-out infinite;
}
 
@keyframes lineMove {
    0%{
        stroke-dasharray: 0, 1030;
    }
    100%{
        stroke-dasharray: 1020, 1030;
    }
}
#pageCate {
  background: #f8f5f6;
  & .bannar {
    & .title {
      color: #ffce38;
      font-size: 60px;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      letter-spacing: 0.2em;
      text-align: center;
    }
  }
  .cateBox {
    background: white;
    padding: 27px 79px;
    & > .title {
      border-bottom: 1px #ccc solid;
      text-align: center;
      position: relative;
      & > .highlight,
      & > span::after {
        width: 70px;
        height: 2px;
        background: linear-gradient(to right, #3273be, #843a9d);
        display: block;
        bottom: -2px;
        position: relative;
        margin: auto;
        content: " ";
      }
      & > span {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 28px;
        font-weight: 900;
        // background: linear-gradient(to right, #3273be, #843a9d);
        -webkit-background-clip: text;
        color: #000;
      }
    }
    & > .description {
      font-size: 30px;
      font-weight: 900;
      color:#333;
      text-align: center;
      margin-top: 30px;
    }
    & .posts-list {
      padding-top: 3em;
      &-date {
        & .post-item {
          border-bottom: 1px solid #ddd;
          &:last-of-type {
            border-bottom: none;
          }
        }
      }
      & .first-item {
        & .thumb {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 120px;
        }
        & .readit {
          color: #ec805b;
        }
      }
      & .thumb {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      & .title {
        color: #333;
        font-size: 18px;
        line-height: 3em;
        border: none;
        text-align: left;
      }
      & .description {
        color: #6d6d6d;
        line-height: 1.8em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        box-sizing: border-box;
        padding: 0;
        font-family: Microsoft Yahei;
      }
    }
  }
}
</style>
