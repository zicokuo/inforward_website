<template>
    <div id="contactUs">
        <mu-flexbox orient="vertical">
            <mu-flexbox-item class="head-title" align="center">CONTACT US</mu-flexbox-item>
            <mu-flexbox-item class="head-text" align="center">联系我们</mu-flexbox-item>
            <mu-flexbox-item justify="space-between" align="center" style="width:100%;">
                <mu-radio label="预约参观" name="book_mode" nativeValue="true" value="true" class="contact-radio" />
                <mu-radio label="商务合作" name="book_mode" nativeValue="false" class="contact-radio" />
            </mu-flexbox-item>
            <mu-flexbox-item v-for="(e,i) in contactForm" :key="i" v-if="i != 0" align="center">
                <mu-text-field :label="e.title" :name="e.name" :maxLength="e.maxLength|| 20" labelFloat fullWidth class="contact-text" underlineFocusClass="contact-text-underfocus" />
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-raised-button label="提 交" backgroundColor="#eeba30" secondary fullWidth style="height:62px;color:white;font-size:24px;"/>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
export default {
  name: "contantUs",
  data() {
    return {
      contactForm: [
        {
          mode: "radio",
          name: "bookMode",
          value: false,
          title: "",
          hintText: ""
        },
        {
          mode: "text",
          name: "name",
          value: null,
          title: "姓名",
          hintText: ""
        },
        {
          mode: "text",
          name: "phone",
          value: null,
          title: "联系方式",
          hintText: ""
        },
        {
          mode: "text",
          name: "company",
          value: null,
          title: "公司名称",
          hintText: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#contactUs {
  .head {
    &-title {
      color: #eeba30;
      font-size: 35px;
    }
    &-text {
      color: #333;
      font-weight: 900;
      font-size: 25px;
    }
  }
  .contact{
      &-radio{
          color:#eeba30;
          & .mu-radio-icon-checked{ color:#eeba30}
      }
      &-text{
          color:#eeba30;
          &-underfocus{
              background-color:#eeba30;
          }
      }
  }
}
</style>
