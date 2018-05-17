// 本文件主要针对图片对象进行操作

let autoFixImage = function (imgs, originWidth = 1919) {
  let winWidth = document.documentElement.clientWidth

  if (winWidth > 1680) {
    return
  }

  imgs.map((i, e, a) => {
    let enw = e.width * Math.float(winWidth / originWidth)
    let enh = e.height * Math.float(enw / e.width)
    console.log(enw, enh)
    e.width = enw
    e.height = enh
  })
}

const Images = {
  autoFixImage: autoFixImage
}
export default Images
