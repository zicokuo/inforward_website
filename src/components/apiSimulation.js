const ProjectOrigin = [{
  imgSrc: require('@/assets/imgs/project1.png'),
  title: '珠江新城金融城',
  summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
  views: Math.round(Math.random() * 1000)
},
{
  imgSrc: require('@/assets/imgs/project2.png'),
  title: '花城环球都会广场',
  summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
  views: Math.round(Math.random() * 1000)
},
{
  imgSrc: require('@/assets/imgs/project3.png'),
  title: '南沙盈港国际二期',
  summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
  views: Math.round(Math.random() * 1000)
}
]
let getProjectOrigin = () => {
  return ProjectOrigin
}
let getProjects = function (num = 10) {
  let projects = []
  for (let i = 0; i < num; i++) {
    let index = Math.round(Math.random() * 2)
    let project = shallowCopy(ProjectOrigin)[index]
    projects.push(project)
  }
  return projects
}

//  地图项目swiper数据
const getMapProject = function () {
  let projects = [{
    imgSrc: require('@/assets/imgs/project1.png'),
    title: '珠江新城金融城',
    summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require('@/assets/imgs/project2.png'),
    title: '花城环球都会广场',
    summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require('@/assets/imgs/project3.png'),
    title: '南沙盈港国际二期',
    summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require('@/assets/imgs/project3.png'),
    title: '南沙盈港国际二期',
    summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    views: Math.round(Math.random() * 1000)
  },
  {
    imgSrc: require('@/assets/imgs/project3.png'),
    title: '南沙盈港国际二期',
    summary: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    views: Math.round(Math.random() * 1000)
  }

  ]
  return projects
}

//  获取多个文章数据
const getPosts = function (num = 3) {
  let originPosts = [{
    title: '活动预告 | 五月，女神风尚月',
    date: '2018-05-21',
    content: '五月，来感受非凡别致的生活体验！盈富永泰诚邀您来参加女神活动！',
    thumb: require('@/assets/img/hua.png')
  },
  {
    title: '盈富永泰携手NIKE瑜伽活动',
    date: '2018-05-22',
    content: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州撒打算打网球的期望地区我的期望地区我的期望最高端国际商务区。',
    thumb: require('@/assets/img/huodong.png')
  },
  {
    title: '会员白云山慢跑活动',
    date: '2018-05-23',
    content: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    thumb: require('@/assets/img/huodong.png')
  },
  {
    title: '盈富永泰音乐酒吧美食节活动',
    date: '2018-05-23',
    content: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    thumb: require('@/assets/img/huodong.png')
  },
  {
    title: '盈富永泰音乐酒吧美食节活动',
    date: '2018-05-23',
    content: '环球都会广场位于广州珠江新城中轴旁，携东塔及高德置地广场，组成近100万平米广州最高端国际商务区。',
    thumb: require('@/assets/img/huodong.png')
  }
  ]
  let posts = []
  for (let i = 0; i < num; i++) {
    let index = i % 3;
    posts.push(originPosts[index])
  }
  return posts
}
const getCompany = function (num = 5) {
  let originPosts = [{
    name: '广州市玄武无线科技股份公司',
    jobs: [
      { job: 'java开发工程师', salary: '10-25万' },
      { job: '高级java开发工程师', salary: '15-30万' }
    ]
  },
  {
    name: '广东凤凰传说整合传媒有限公司',
    jobs: [
      { job: '创意副总监', salary: '15-25万' },
      { job: '媒介策划经理', salary: '10-12万' }
    ]
  },
  {
    name: '广州菲音信息科技有限公司',
    jobs: [
      { job: '手游服务端开发', salary: '10-25万' },
      { job: '招聘专员（主管）', salary: '6-8万' }
    ]
  },
  {
    name: '广州万惠投资管理有限公司',
    jobs: [
      { job: '保理业务总监主管', salary: '面议' },
      { job: '业务总监/高级招商 ', salary: '15-30万' }
    ]
  },
  {
    name: '广州奥万达皮具有限公司',
    jobs: [
      { job: '制单文员（生产文员）', salary: '4-6万' },
      { job: '外贸业务员', salary: '5-7万' }
    ]
  }
  ]
  let posts = []
  for (let i = 0; i < num; i++) {
    let index = i % 5;
    posts.push(originPosts[index])
  }
  return posts
}
const apiSimulation = {
  getProjectOrigin: getProjectOrigin,
  getProjects: getProjects,
  getMapProject: getMapProject,
  getPosts: getPosts,
  getCompany: getCompany
}

export default apiSimulation
