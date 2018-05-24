// import VueRouter from 'vue-router';
const buildPostsUrl = function (posts, baseUrl = '', mode = 'relative') {
  let path = (mode === 'relative') ? '/' : window.location.host
  posts.map((e, i) => {
    e.url = e.url ? e.url : path + baseUrl + '/post/id/' + (e.id || i)
  })
  return posts
}
const UrlHepler = {
  buildPostsUrl: buildPostsUrl
}

export default UrlHepler
