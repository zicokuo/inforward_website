// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  引入jQuery
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'animate.css'
//  muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/components/jquery.vender.js'

import ImageHelper from '@/components/img.vender.js'
//  window

//  Vue
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

window.$imageHelper = ImageHelper
