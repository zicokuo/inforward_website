import Vue from 'vue'
import Router from 'vue-router'
// 加载page index
const pageIndex = () =>
  import('@/pages/index')
Vue.use(Router)
const mainRouter = new Router({
  routes: [{
    mode: 'history',
    path: '/',
    name: 'pageIndex',
    component: pageIndex,
    meta: {
      title: '首页'
    }
  }]
})

mainRouter.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.meta.title) {
    //  router modify page title
    document.title = '盈富永泰集团 > ' + to.meta.title || ''
  }
  next()
})

mainRouter.afterEach(transition => {})
export default mainRouter
