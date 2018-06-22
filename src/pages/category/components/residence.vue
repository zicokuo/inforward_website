<template>
    <div>
        <com-header :headerbj="require('@/assets/img/zhuzhai.jpg')">
            <template slot="slot1">
                <div class="header_text">
                        <!-- <img src="@/assets/img/dazao.png" alt="" class="fadeInDown animated">    
                        <img src="@/assets/img/kongjian.png" alt="" class="zoomIn animated">     -->
                        <ul>
                            <li v-on:click="headerLiClick(index)" v-for="(itemq,index) in headerList" :key="itemq">{{ itemq }}</li>
                            <!-- <li>找整租</li>
                            <li>找小区</li>
                            <li>找商圈</li> -->
                        <div class="triangle"></div>
                        </ul>
                        <input type="text" placeholder="请输入区域 / 商圈或小区名开始找房">
                        <button>开始找房</button>
                        <img src="@/assets/img/dazao.png" alt="">
                    </div>
            </template>
            <template slot="slot2">
                <div class="header_footer">
                    <ul>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>地图找房</b></li>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>VR实景看房</b></li>
                        <li><img src="@/assets/img/header_icon.png" alt=""><b>公寓增值服务</b></li>
                    </ul>
                </div>
            </template>
        </com-header>
        <main>
            <img src="@/assets/img/sjzhuzhai_02.jpg" alt="">
            <div class="content">
                <div class="content_img clearfloat">
                    <img src="@/assets/img/wnex.png" alt=""><br>
                    <br>
                    <img src="@/assets/img/wnjx.png" alt="">
                    <a href="javascript:;"><img src="@/assets/img/gdfy.png" alt=""></a>
                </div>
                <ul class="content_list">
                    
                    <li v-for="(itemw,index) in contentList" :key="index">
                        <div>
                            <img :src="itemw.photo" alt="">
                            <div class="zhezhao">
                                <p>{{ itemw.name }}</p>
                                <span>{{ itemw.area }}</span>    
                            </div>
                        </div>
                    </li>
                    
                </ul>
                <div class="content_img2">
                    <img src="@/assets/img/xpqh.png" alt=""><br><br>
                    <img src="@/assets/img/zqtb.png" alt="">
                </div>
                <ul class="content_ul">
                    <li v-for="(item,index) in list" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{ item.title }}</p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
<style scoped src="@/assets/css/residence.scss" lang="scss" type="text/css"></style>

<script>
import "@/assets/js/index.js";
const comHeader = () => import("@/pages/components/header.vue");
export default {
    components:{
        'com-header':comHeader
    },
    data() {
        return {
            headerList:[
                '找合租','找整租','找小区','找商圈'
            ],
            list: [
                {
                url: require("@/assets/img/xzl.png"),
                title: "南沙亚湾港项目"
                },
                {
                url: require("@/assets/img/hqdh.png"),
                title: "番禺智慧城项目"
                },
                {
                url: require("@/assets/img/yzs.png"),
                title: "天河财富城项目"
                }
            ],
            contentList:[
                {
                    photo:require("@/assets/img/gongyu1.png"),
                    name:"珠光新城御景 中层三房",
                    area:"3室1厅  91.06方"
                },
                {
                    photo:require("@/assets/img/gongyu1.png"),
                    name:"珠光新城御景 中层三房",
                    area:"3室1厅  91.06方"
                },
                {
                    photo:require("@/assets/img/gongyu1.png"),
                    name:"珠光新城御景 中层三房",
                    area:"3室1厅  91.06方"
                },
                {
                    photo:require("@/assets/img/gongyu1.png"),
                    name:"珠光新城御景 中层三房",
                    area:"3室1厅  91.06方"
                }
            ]
        }
    },
    methods:{
        headerLiClick:(index) => {
            let triangle = document.getElementsByClassName('triangle')[0]
            triangle.style.left = (index*87)+55+'px'
            
        },
        handleScroll:() => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let zhezhao1 = document.getElementsByClassName('zhezhao')
           for(let i=0;i<zhezhao1.length;i++){
               if(scrollTop > 860){
                   zhezhao1[i].className = 'zhezhao delzhezhao'
               }else{
                   zhezhao1[i].className = 'zhezhao'
               }
               
           }
            
            // scrollTop > 860 ? zhezhao.className += ' delzhezhao' : '';
        }
        
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>
