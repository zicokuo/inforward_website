const pageCate = () =>
  import ('@/pages/category/index.vue')
const pageCatePartner = () =>
  import ('@/pages/category/components/inforwardPartner.vue')
const pageCateIntroduce = () =>
  import ('@/pages/category/components/inforwardIntroduce.vue')
const pageCateRecruit = () =>
  import ('@/pages/category/components/inforwardRecruit.vue')
const pageRouter = {
  //  走进集团页面
  path: '/inforward',
  name: 'category page',
  component: pageCate,
  meta: {
    title: '走进盈泰永富'
  },
  children: [{
    //  集团介绍
    path: '',
    // name: 'group introduction',
    component: pageCatePartner,
    meta: {
      title: '集团介绍'
    }
  }, {
    //  集团介绍
    path: 'partner',
    // name: 'group introduction',
    component: pageCatePartner,
    meta: {
      title: '集团介绍'
    }
  }, {
    //  集团介绍
    path: 'introduce',
    // name: 'group introduction',
    component: pageCateIntroduce,
    meta: {
      title: '集团业务'
    }
  }, {
    //  招聘
    path: 'recruit',
    // name: 'group introduction',
    component: pageCateRecruit,
    meta: {
      title: '招聘窗口'
    }
  }]
}

export default pageRouter
