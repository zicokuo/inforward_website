<template>
    <div id="topNav">
        <!-- 企业logo -->
        <mu-flexbox class="topNav">
            <mu-flexbox-item class="inforward-logo">
                <img src="@/assets/imgs/logo.png"/>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
export default {
  name: "topNav",
  data() {
    return {};
  }
};
</script>

<style>
#topNav {
  position: fixed;
}

.topNav {
  padding-top: 0.5em;
}
</style>
