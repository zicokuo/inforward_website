import Vue from 'vue'
import Router from 'vue-router'

// 加载子路由
import routerCategory from './pageRouter/category.js'
import routerhtyf from './pageRouter/inforward.js'
import routerCommunity from './pageRouter/community.js'
import routerPages from './pageRouter/routerPages.js'
// 加载page index
const pageIndex = () =>
  import('@/pages/index')
const pageResidence = () =>
  import('@/pages/category/components/residence.vue')

const routerDefault = {
  //  默认路由 - 首页
  path: '/',

  component: { template: '<router-view/>' },
  meta: {
    title: '首页'
  },
  children: routerPages
}
Vue.use(Router)
const mainRouter = new Router({
  mode: 'history',
  routes: [
    routerCategory, routerDefault, routerhtyf, routerCommunity
    // routerCategory, routerDefault, routerhtyf, routerCommunity, routerPages
  ]
})
mainRouter.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.meta.title) {
    //  router modify page title
    document.title = '盈富永泰集团 > ' + to.meta.title || ''
  }
  next()
})

mainRouter.afterEach(transition => { })
export default mainRouter
