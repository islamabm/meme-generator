'use strict'

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  console.log(imgContent)
  elLink.href = imgContent
}
