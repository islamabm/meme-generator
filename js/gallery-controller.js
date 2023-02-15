'use strict'

renderGallery()

function renderGallery() {
  const images = getImages()
  let strHTMLs = images.map(
    (img, idx) =>
      `<img class="gallery-img" src="img/${idx + 1}.jpg" onclick="onImgSelect(${
        img.id
      })" />`
  )
  strHTMLs.push(
    `<button onclick="onFlexBtnClicke()" calss="felx">i am flexible</button>`
  )
  document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
}

function onImgSelect(id) {
  showCanvasPage()
  hideGalleryPage()

  setImg(id)
  renderMeme()
}

function showCanvasPage() {
  const elCanvasPage = document.querySelector('.canvas-page')
  elCanvasPage.hidden = false
}

function showGalleryPage() {
  const elCanvasPage = document.querySelector('.gallery-container')
  elCanvasPage.hidden = false
}

function hideGalleryPage() {
  const elCanvasPage = document.querySelector('.gallery-container')
  elCanvasPage.hidden = true
}
function onFlexBtnClicke() {
  showCanvasPage()
  hideGalleryPage()
  // let meme = getMeme()
  let randomIdx = getRandomIntInclusive(0, gImgs.length - 1)
  setImg(randomIdx)
  renderMeme()
}
