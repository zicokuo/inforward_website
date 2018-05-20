
<template>
    <div id="pageFooter" class="section">
        <mu-flexbox>
            <!-- 左侧栏目 -->
            <mu-flexbox-item>
                <img src="@/assets/imgs/logo.png" alt="">
                <div class="footer-title">
                    <div v-for="(e,i) in leftFooterContents" :key="i" class="footer-item">
                        <div class="footer-item-title">
                            <mu-icon :value="e.icon||'insert_emoticon'"></mu-icon>
                            {{e.title}}
                        </div>
                        <div v-for="(c,ci) in e.contents" :key="'fic'+ci" class="footer-item-content">
                            {{c}}
                        </div>
                    </div>
                </div>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <div>
                    <mu-icon>link</mu-icon>
                </div>
                <div class="footer-title">
                    <div v-for="(e,i) in centerFooterContents" :key="i" class="footer-item">
                        <div class="footer-item-title">
                            <mu-icon :value="e.icon||'insert_emoticon'"></mu-icon>
                            {{e.title}}
                        </div>
                        <div v-for="(c,ci) in e.contents" :key="'fic'+ci" class="footer-item-content">
                            {{c}}
                        </div>
                    </div>
                </div>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
let leftFooterContents = [
  {
    icon: "map",
    title: "ADRE",
    contents: ["广州市珠江新城花城大道68号", "IMP环球都会广场"]
  },
  {
    icon: "phone",
    title: "CONTA",
    contents: ["TEL:+86-020-84643333", "TEL:+86-020-34512222"]
  },
  {
    icon: "computer",
    title: "WEB",
    contents: ["www.inforward.com.cn"]
  }
];
let centerFooterContents = [
  {
    icon: "access_time",
    title: "BUSINESS HOURS",
    contents: ["MONDAY-SATURDAY: 09:00 - 18:00"]
  },
  {
    icon: "person",
    title: "CUSTOMER SERVICE",
    contents: ["TEL:19802092338", "TEL:19802092338"]
  },
  {
    icon: "mail",
    title: "HR EMAIL",
    contents: ["hr@inforward.com.cn"]
  }
];
export default {
  name: "pageFooter",
  data() {
    return {
      leftFooterContents: leftFooterContents,
      centerFooterContents: centerFooterContents
    };
  }
};
</script>

<style lang="scss">
#pageFooter {
  & .footer {
    &-item {
      letter-spacing: 0.3em;
      padding: 10px;
      &-title {
        color: #ffce38;
        font-weight: 900;
        font-size: 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & .mu-icon {
          color: #333;
          margin-right: 0.5em;
        }
      }
      &-content {
        padding-left: 2.3em;
        font-weight: 600;
        color: #333;
        font-size: 16px;
        line-height: 1.5em;
      }
    }
  }
}
</style>
