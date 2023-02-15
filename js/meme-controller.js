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
  // drawText(setLineTxt(meme, newTxt), 230, 50)
  const img = new Image()

  img.src = currImg.url

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
  }
}

function onChangeText() {
  const elInputPrice = document.querySelector('input[name="image-text"]')

  setLineTxt(gMeme, elInputPrice.value)

  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)
}
function onChangeColor(color) {
  // const elUserColor = document.querySelector('input[name="text-color"]')
  setcolor(gMeme, color)
  renderMeme()
  // console.log(color)
}

function onChangeTextFont(font) {
  // console.log(typeof +font)
  // const elUserColor = document.querySelector('input[name="text-color"]')
  setFont(gMeme, +font)
  renderMeme()
  // console.log(color)
}
function onSwitchLine() {
  switchLine()
}
function onAddLine() {
  const elInputPrice = document.querySelector('input[name="image-text"]')

  setLineTxt(gMeme, elInputPrice.value)

  drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 200, 200)
}
