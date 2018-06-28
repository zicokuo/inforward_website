const pageCate = () =>
  import ('@/pages/category/index.vue')
const pageCateCompanyNew = () =>
  import ('@/pages/category/components/companyNew.vue')
const pageCateCommunityActivity = () =>
  import ('@/pages/category/components/communityActivity.vue')
const pageRouter = {
  //  栏目页面
  path: '/category',
  // name: 'category page',
  component: pageCate,
  meta: {
    title: '栏目'
  },
  children: [{
    //  新闻中心
    path: '',
    // name: 'page category news',
    component: pageCateCompanyNew,
    meta: {
      title: '新闻中心'
    }
  }, {
    //  社区活动
    path: 'activity',
    // name: 'page category community activity',
    component: pageCateCommunityActivity,
    meta: {
      title: '社区活动'
    }
  }, {
    //  新闻中心
    path: 'company_news',
    // name: 'page category news',
    component: pageCateCompanyNew,
    meta: {
      title: '新闻中心'
    }
  }]
}

export default pageRouter
