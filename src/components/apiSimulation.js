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
    },
    
  ]
  return projects
}

const apiSimulation = {
  getProjectOrigin: getProjectOrigin,
  getProjects: getProjects,
  getMapProject: getMapProject
}

export default apiSimulation
