const pageCate = () =>
  import ('@/pages/category/index.vue')
const pageCateBenefit = () =>
  import ('@/pages/category/components/communityBenefit.vue')
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
    path: '',
    name: 'group benefit',
    component: pageCateBenefit,
    meta: {
      title: '公益事业'
    }
  },{
    //  公益事业
    path: 'public_good',
    name: 'group benefit',
    component: pageCateBenefit,
    meta: {
      title: '公益事业'
    }
  }]
}

export default pageRouter
