'use strict'

// let gSwitch = 0

function init() {
  doTrans()
  showGalleryPage()
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  // resizeCanvas()

  renderMeme()
  // onImgSelect()
  // onChangeText()
}

function renderMeme() {
  const meme = getMeme()
  let currImg = getImageById(meme.selectedImgId)
  // console.log(currImg.url)

  const img = new Image()

  img.src = currImg.url

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    // drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)
    // drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 200, 200)
    console.log(gMeme.lines)
    gMeme.lines.forEach((line, idx) => {
      drawText(line.txt, idx)
      console.log(line)
    })
    doTrans()
    // gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
    // gCtx.strokeStyle = `${gMeme.lines[gMeme.selectedLineIdx].color}`
  }
}
// function drawText(text, idx) {
//   gCtx.lineWidth = 2
//   // gCtx.strokeStyle = `${gMeme.lines[gMeme.selectedLineIdx].color}`
//   gCtx.strokeStyle = 'black'
//   // gCtx.fillStyle = 'yellow'
//   // gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
//   // gCtx.font = ''
//   gCtx.textAlign = 'center'
//   gCtx.textBaseline = 'middle'
//   const { x, y } = setCoords()

//   gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
//   gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
// }

function onChangeText(elInputText) {
  setLineTxt(elInputText)
  // drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)
  renderMeme()
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
  // renderMeme()
}

// function onAddLine() {
//   // const elInputPrice = document.querySelector('input[name="image-text"]')

//   setLineTxt(elInputPrice.value)
//   renderMeme()
// }
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
