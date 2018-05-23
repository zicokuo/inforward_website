// 本文件主要针对图片对象进行操作

let originW = 1920
let originH = 1138

let autoFixImage = function (imgs, originWidth = originW, originHeight = originH) {
  let winWidth = document.documentElement.clientWidth

  if (winWidth > originWidth || imgs.length < 1) {
    return
  }

  imgs.map((i, e, a) => {
    let elm = $(e)
    let enw = elm.width() * (winWidth / originWidth).toFixed(2)
    let enh = elm.height() * enw / e.width
    elm.css({
      'width': enw,
      'height': enh
    })
  })
}

let autoFixPosition = function (imgs, originWidth = originW, originHeight = originH) {
  let winWidth = document.documentElement.clientWidth
  // let winHeight = document.documentElement.clientHeight
  let winHeight = document.documentElement.clientHeight
  if (winWidth > originWidth || imgs.length < 1) {
    return
  }

  imgs.map((i, e, a) => {
    let elm = $(e)
    let eps = elm.position()
    let enl = eps.left * winWidth / originWidth
    let ent = eps.top * winHeight / originHeight
    // let enl = (eps.left / originWidth * 100).toFixed(2) +'%'
    // let ent = (eps.top / winHeight * 100).toFixed(2) +'%'
    elm.css({
      'left': enl,
      'top': ent
    })
  })
}

const Images = {
  autoFixImage: autoFixImage,
  autoFixPosition: autoFixPosition
}
export default Images
