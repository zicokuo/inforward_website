// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import JQuery from 'jquery'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'animate.css'
//  muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

//  window
window.Jquery = JQuery

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
