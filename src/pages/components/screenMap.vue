<template>
    <div id="screenMap" class="section" :style=sectionStyle>
        <mu-flexbox>
            <mu-flexbox-item>
                
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
export default {
    name:"screenMap",
    data(){
        return{
            sectionStyle:{
                backgroundImage:"url("+require('@/assets/imgs/page4map.png')+")",


            }
        }
    }
}
</script>

<style>

</style>
