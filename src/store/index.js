import Vue from 'vue'
import Vuex from 'vuex'

import AppStatus from './components/appStatus'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    appStatus: AppStatus
  }
})

// console.log(Store)
export default Store
