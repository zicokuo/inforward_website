const pageCate = () =>
  import ('@/pages/category/index.vue')
const pageCateBenefit = () =>
  import ('@/pages/category/components/benefit.vue')
// const pageCateIntroduce = () =>
//   import ('@/pages/category/components/introduce.vue')
const pageRouter = {
  //  社区
  path: '/community',
  name: 'category page',
  component: pageCate,
  meta: {
    title: '社区'
  },
  children: [{
    //  公益事业
    path: 'benefit',
    name: 'group benefit',
    component: pageCateBenefit,
    meta: {
      title: '公益事业'
    }
  }]
}

export default pageRouter
