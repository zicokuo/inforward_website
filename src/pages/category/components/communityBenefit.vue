<template>

    <div>
        <com-header></com-header>
        <main>
            <img src="@/assets/img/niao.png" alt="" class="niao" />
            <div class="content">
                <!-- <div class="xulie">
                    <img src="@/assets/img/fangzi.png" alt="">
                    <a href="/" class="jiantou">主页</a>
                    <a href="/" class="jiantou">社区</a>
                    <a href="/">公益事业</a>
                </div> -->
            <mu-flexbox-item style="background:none;width:1360px;text-align:left;">
                    <com-bread-crumb></com-bread-crumb>
                </mu-flexbox-item>
            <img src="@/assets/img/titimg.png" alt="" style="margin:0 auto;display:block;">
            <section class="character">
                <p>距今为止，我们的慈善机构已经有 <span>{{ cishan }}</span> 人参与爱心捐款。<br>捐款金额达到：<span style="color:#ed4f34;">{{ juankuanNum }}</span>元 人名币
                </p>
                <p>在中国，还有数以千万计需要救助的贫困儿童，每年也还有新的脆弱儿童因家庭变故而陷入困境，他们有的甚至吃不饱饭、无人照顾。盈富永泰希望<br>能与更多的爱心人士奉献微薄之力，携手贫困留守儿童，用爱帮助更多贫困儿童得到更好的成长环境,改变未来.</p>
            </section>
            </div>
            <div class="compnay">
                    <ul class="">
                        <li v-for="(item, index) in dataList" :key="index+'l'" class="tile">
                            <img :src="item.url" alt="">
                            <div class="lines"></div>
                            <div class="compnayname">
                                <p>{{item.name }}</p>
                                <p>{{item.content }}</p>
                            </div>
                        </li>   
                    </ul>
                <img src="@/assets/img/join.png" alt="" style="width:100%;" />
                </div>
                <img src="@/assets/img/banqiu.png" class="banqiu" alt="">
        </main>
    </div>
</template>
<style scoped lang="scss" src="@/assets/css/benefit.scss"></style>

<script>
// import "@/assets/pulice/css/normalize.css";
// import "@/assets/css/animate.css";
// import "@/assets/pulice/css/pulice.css";
// import "@/assets/css/benefit.css";
const comHeader = () => import("@/pages/components/header.vue");
const comBreadCrumb = () => import("@/pages/components/breadcrumb.vue");
import "@/assets/js/jquery-2.1.1.min.js";
import "@/assets/js/index.js";
import "@/assets/js/benefit.js"
export default {
    data() {
        return {
            titleImg:'@/assets/img/titimg.png',
            cishan:'1680',
            juankuanNum:'8625.60',
            dataList:[
                { name:"我们的故事",content:"贫困山区的留守儿童们",url:require("@/assets/img/firstls.png") },
                { name:"我们的故事",content:"去山区捐物见见孩子们",url:require("@/assets/img/twols.png") },
                { name:"我们的故事",content:"贫困家庭",url:require("@/assets/img/threels.png") },
                { name:"山里的孩子",content:"给孩子们带去学习礼物",url:require("@/assets/img/fourls.png") },
                { name:"贫困留守儿童需要关爱",content:"给孩子希望 改变未来",url:require("@/assets/img/fivels.png") },
                {}
            ]
        }
    },
    computed:{
        
    },
    methods:{
        
    },
    components:{
            "com-header":comHeader,
            "com-bread-crumb":comBreadCrumb
    },
    created(){
        console.log(this.$route.path)
        }
}
</script>