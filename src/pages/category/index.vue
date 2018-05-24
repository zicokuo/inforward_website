<template>
  <div id="pageCate" class="subPage">
    <com-top-nav></com-top-nav>
    <!-- 顶部通栏 -->
    <router-view></router-view>
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
  }
};
</script>

<style lang="scss">
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
        background: linear-gradient(to right, #3273be, #843a9d);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    & > .description {
      font-size: 30px;
      font-weight: 900;
      color:#333;
      text-align: center
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
      }
    }
  }
}
</style>
