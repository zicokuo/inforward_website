const pageCate = () =>
  import('@/pages/category/index.vue')
const pageLease = () =>
  import('@/pages/category/components/lease.vue')
const pageResidence = () =>
  import('@/pages/category/components/residence.vue')
const pageIndex = () =>
  import('@/pages/index')
const pageRouter = [{
  //  业务
  path: '/lease',
  name: 'category page',
  component: pageCate,
  meta: {
    title: '盈泰永富业务'
  },
  children: [{
    //  办公室租赁
    path: '/lease',
    name: 'group benefit',
    component: pageLease,
    meta: {
      title: '办公室租赁'
    }
  }]
}, {
//  搜索办公租赁
  path: '/residence',
  name: 'pageResidence',
  component: pageCate,
  meta: {
    title: '搜索办公租赁'
  },
  children: [{
    
    path: '/residence',
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
