'use strict'

// let gSwitch = 0

function init() {
  showGalleryPage()
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  // resizeCanvas()
  // renderMeme()
  // onImgSelect()
  onChangeText()
}

function renderMeme() {
  const meme = getMeme()
  let currImg = getImageById(meme.selectedImgId)
  console.log(currImg.url)

  const img = new Image()

  img.src = currImg.url

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
  }
}

function onChangeText() {
  const enInputText = document.querySelector('input[name="image-text"]')
  setLineTxt(enInputText.value)
  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)
  // renderMeme()
}
function onChangeColor(color) {
  setcolor(gMeme, color)
  renderMeme()
}

function onChangeTextFont(font) {
  setFont(gMeme, +font)
  renderMeme()
}
function onSwitchLine() {
  switchLine()
  console.log(gMeme.selectedLineIdx)
}
function onAddLine() {
  const elInputPrice = document.querySelector('input[name="image-text"]')

  setLineTxt(gMeme, elInputPrice.value)

  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 200, 200)
}
