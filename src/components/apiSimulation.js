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
      title: '成功推出四押一租全新租赁模式1',
      date: '2018-05-21',
      content: '由经过联合信用评级的融资性担保公司对众筹发起企业进行再次审核，办理优良资产抵押（如房产、汽车等），并严格控制抵押率。',
      thumb: require('@/assets/imgs/category/p1.png')
    },
    {
      title: '成功推出四押一租全新租赁模式2',
      date: '2018-05-22',
      content: '由经过联合信用评级的融资性担保公司对众筹发起企业进行再次审核，办理优良资产抵押（如房产、汽车等），并严格控制抵押率。',
      thumb: require('@/assets/imgs/category/p2.png')
    },
    {
      title: '成功推出四押一租全新租赁模式3',
      date: '2018-05-23',
      content: '由经过联合信用评级的融资性担保公司对众筹发起企业进行再次审核，办理优良资产抵押（如房产、汽车等），并严格控制抵押率。',
      thumb: require('@/assets/imgs/category/p3.png')
    }
  ]
  let posts = []
  for (let i = 0; i < num; i++) {
    let index = i%3;
    posts.push(originPosts[index])
  }
  return posts
}

const apiSimulation = {
  getProjectOrigin: getProjectOrigin,
  getProjects: getProjects,
  getMapProject: getMapProject,
  getPosts: getPosts
}

export default apiSimulation
