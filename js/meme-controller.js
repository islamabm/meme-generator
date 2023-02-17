'use strict'

function init() {
  doTrans()

  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  resizeCanvas()
  // renderMeme()
}

function renderMeme() {
  const meme = getMeme()
  let currImg = getImageById(meme.selectedImgId)

  const img = new Image()

  img.src = currImg.url

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    gMeme.lines.forEach((line, idx) => {
      drawText(line.txt, idx)
    })
    doTrans()
  }
}

function onChangeText(elInputText) {
  setLineTxt(elInputText)
  renderMeme()
}

function onChangeColor(color) {
  setcolor(gMeme, color)
  renderMeme()
}

function onSwitchLine() {
  clearInput()
  switchLine()
}

function onSetLang(lang) {
  setLang(lang)

  if (lang === 'he') document.body.classList.add('rtl')
  else document.body.classList.remove('rtl')
  renderMeme()
  doTrans()
}

function onImogyBtnClicked(elEmoji) {
  addEmojiToTwxt(elEmoji.innerText)
  renderMeme()
}

function onDeleteLine() {
  deleteLine()
  renderMeme()
}

function onSetAlign(letter) {
  setAlign(letter)
  renderMeme()
}

function onChangeFont(num) {
  setFont(num)
  renderMeme()
}

function clearInput() {
  const elText = document.querySelector('input[name="image-text"]')
  elText.value = ''
}

function onFontKindChanged(el) {
  FontKindChanged(el)
  renderMeme()
  console.log(el)
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

// function onSaveMeme() {
//   const meme = getMeme()
//   console.log(meme)
//   saveMeme(meme)
// }
function onSaveMeme() {
  saveMeme()
}

function onMemeClicked() {
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.canvas-page').classList.add('hidden')
  document.querySelector('.meme-Gallery').classList.remove('hidden')
  renderMemesGallery()
}

function onGalleryClicked() {
  document.querySelector('.gallery-container').classList.remove('hidden')
  document.querySelector('.canvas-page').classList.add('hidden')
  document.querySelector('.meme-Gallery').classList.add('hidden')
  renderGallery()
}
