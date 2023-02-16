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

  setImg(id)
  renderMeme()
}

function onFlexBtnClicke() {
  // showCanvasPage()
  // hideGalleryPage()
  showCanvasPage()
  // let meme = getMeme()
  let randomIdx = getRandomIntInclusive(0, gImgs.length - 1)
  // let randomText = getName()
  // let randomColor = getRandomColor()
  // let randomFont = getRandomFont()
  // let randomSize = getRandomIntInclusive(10, 30)
  setImg(randomIdx)

  renderMeme()
}

function onToggleMenu() {
  document.body.classList.toggle('menu-open')
}

function showCanvasPage() {
  document.querySelector('.gallery-container').classList.add('hidden')
  document
    .querySelector('.gallery-layout')
    .classList.remove('gallery-container')
  document.querySelector('.canvas-page').classList.remove('hidden')
}
