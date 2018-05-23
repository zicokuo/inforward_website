const pageCate = () =>
  import ('@/pages/category/index.vue')
const pageCateCompanyNew = () =>
  import ('@/pages/category/components/companyNew.vue')

const pageRouter = {
  //  栏目页面
  path: '/category',
  name: 'category page',
  component: pageCate,
  meta: {
    title: '栏目'
  },
  children: [{
    path: 'company_news',
    name: 'page category news',
    component: pageCateCompanyNew,
    meta: {
      title: '新闻中心'
    }
  }]
}

export default pageRouter
