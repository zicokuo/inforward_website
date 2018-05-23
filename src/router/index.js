import Vue from 'vue'
import Router from 'vue-router'

// 加载子路由
import routerCategory from './pageRouter/category.js'
// 加载page index
const pageIndex = () =>
  import ('@/pages/index')

const routerDefault = {
  //  默认路由 - 首页
  path: '',
  name: 'pageIndex',
  component: pageIndex,
  meta: {
    title: '首页'
  }
}
Vue.use(Router)
const mainRouter = new Router({
  mode: 'history',
  routes: [
    routerCategory, routerDefault
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

mainRouter.afterEach(transition => {})
export default mainRouter
