const pageCate = () =>
  import('@/pages/category/index.vue')
const pageLease = () =>
  import('@/pages/category/components/lease.vue')
const pageResidence = () =>
  import('@/pages/category/components/residence.vue')
const pageIndex = () =>
  import('@/pages/index')
const pageRouter = [{
  //  社区
  path: '/lease',
  name: 'category page',
  component: pageCate,
  meta: {
    title: '盈泰永富业务'
  },
  children: [{
    //  公益事业
    path: '/lease',
    name: 'group benefit',
    component: pageLease,
    meta: {
      title: '办公室租赁'
    }
  }]
}, {
  path: '/pageResidence',
  name: 'pageResidence',
  component: pageCate,
  meta: {
    title: '搜索办公租赁'
  },
  children: [{
    //  公益事业
    path: '/pageResidence',
    name: 'group benefit',
    component: pageResidence,
    meta: {
      title: '搜索办公租赁'
    }
  }]
}, {
  path: '',
  name: 'pageIndex',
  component: pageIndex,
  meta: {
    title: '官网首页'
  }
}]

export default pageRouter
