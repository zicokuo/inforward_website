<template>
    <div>
        <com-header></com-header>
        <main>
            <img src="@/assets/img/hhuaduo.png" alt="" class="main_hd">
            <div class="content">
                <mu-flexbox-item>
                    <com-bread-crumb></com-bread-crumb>
                </mu-flexbox-item>
                <div style="    width: 1048px;
    margin: 0 auto;">
                    <img src="@/assets/img/jttitle.png" alt="" class="content_tit">
                    <h1>欢迎来到盈富永泰集团</h1>
                    <h1>盈富永泰用心聆听并洞察您的需要，拒绝平庸，诚心为您提供一站式高效服务及最佳用户体验！</h1>
                    <section>
                        <p>盈富永泰集团前身为1995年成立的中外合资企业广州市番禺伟利玩具有限公司，迪士尼等知名国际品牌的指定合作伙伴。</p>
                        <p>2011年，公司发展策略转战房地产板块，成功开发中华美食城，塘东工业园金科贸易广场，金科生态创意产业园等商业项目。</p>
                        <p>2015年，业务扩充至南沙区，成立广州市益盛融资租赁有限公司，注册资金2亿元，为更多中小制造业提供设备融资租赁业务。</p>
                        <p>2016年，盈富永泰集团正式注册成立，总部设于广州珠江新城核心商业区环球都会广场，注册资金1.5亿，目标致力于成为一家集商业地产  
                租售托管服务为中心，互联网信息服务、智能科技、商务中心开发运营、优质中小型企业孵化IPO服务为一体化的多元化集团。</p>
                        <p>2017年起，盈富永泰制定出一系列符合中国商业地产市场环境的服务产品，全力打造最多元的CBD生活方式，同时为投资者提供符合其业
                务策略的增值服务，一站式办公新生态体系，带出世界顶级商业地产管理经验与服务理念。</p>
                        <p>盈富永泰旗下拥有<b>广州市盈富永泰商务服务中心、广州市盈富永泰网络服务有限公司、广州市盈富永泰智能科技有限公司、广州市灏璟房地产有限公司、广州市灏顺物业管理有限公司</b>等五大公司。</p>
                    </section>
                </div>
                <div class="compnay clearfloat">
                    <ul class="clearfloat">
                        <li v-for="(index,i) in dataList" :key="i">
                            <img :src="index.img" alt="">
                            <div class="compnayname">
                                <p>{{ index.englishTit }}</p>
                                <p>{{ index.tit }}</p>
                            </div>
                        </li>
                        <div class="pop clearfloat" id="pop">
                            <img src="@/assets/img/jieshaoqiu.png" class="jsqiu" alt="">
                            <img src="@/assets/img/haoshunbj.png" alt="" class="pop_bj">
                            <div class="pop_div">
                                <h4 class="pop_h4">smart technology</h4>
                                <span class="pop_tit">盈富永泰灝顺物业管业有限公司</span>
                                <p>盈富永泰集团是广州南沙委员会投资顾问，在房地产投资、金融、发展、建设管理和资产管理 方面有丰富经验。自2016年以来，</p>
                                <p>盈富永泰集团及其附属机构共管理、开发或拥有超过100亿广州写字楼资产。今天，盈富永泰集团为客户提供了大约60亿的房地产投资组合。投资组合是多样化的，既有稳健的资产组合，又有地理分布。</p>
                                <p>基金策略积极寻求机会，投资于核心和核心加物业，以及增值运营物业和发展项目。</p>
                                <p>富永泰集团为客户提供了大约60亿的房地产投资组合基金策略积极寻求机会，投资于核心和核心加物业，以及增值运营物业和发展项目。基金策略积极寻求机会，投资于核心和核心加物业，以及增值运营物业和发展项目。60亿的房地产投资组合盈富永泰集团为客户提供了大约60亿的房地产投资组合。</p>
                            </div>
                            <div class="yuanbtn" id="close"><img src="@/assets/img/dc.png" alt=""></div>
                            <!-- <img src="@/assets/img/yuanbtn.png" class="yuanbtn" alt="" id="close"> -->
                        </div>
                    </ul>

                </div>
            </div>
            <img src="@/assets/img/qiu2.png" alt="" class="main_qiu2">
        </main>
    </div>
</template>

<style scoped src="@/assets/css/introduce.css"></style>

<script>
const comHeader = () => import("@/pages/components/header.vue");
const comBreadCrumb = () => import("@/pages/components/breadcrumb.vue");
import "@/assets/js/jquery-2.1.1.min.js";
import "@/assets/js/index.js";
import "@/assets/js/introduce.js";
export default {
     name: "introduce",
  data() {
    return {
    //   msg: "Welcome to Your Vue.js App",
    //   logoImg: null
        dataList:[
            {img:require("@/assets/img/haoshun.png"),englishTit:"SMART TECHNOLOGY",tit:"盈富永泰灏顺物业管业有限公司"},
            {img:require("@/assets/img/wangluo.png"),englishTit:"NETWIRK SERVICE",tit:"盈泰永富网络服务"},
            {img:require("@/assets/img/haojing.png"),englishTit:"PROPERTY",tit:"灏璟物业"},
            {img:require("@/assets/img/shangwu.png"),englishTit:"BUSINESS CENRE",tit:"盈泰永富商务服务中心"},
            {img:require("@/assets/img/fangdichan.png"),englishTit:"REAL ESTATE",tit:"灏璟房地产"}
        ]
    };
  },
  created() {
    //this.logoImg = logoImg;
   
  },
  components:{
      "com-header":comHeader,
      "com-bread-crumb":comBreadCrumb
  }
};
</script>


