let gElCanvas
let gCtx

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
  { id: 2, url: 'img/2.jpg', keywords: ['hurry'] },
  { id: 3, url: 'img/3.jpg', keywords: ['cat'] },
  { id: 4, url: 'img/4.jpg', keywords: ['hurry'] },
  { id: 5, url: 'img/5.jpg', keywords: ['cat'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 20,
      align: 'center',
      color: 'red',
      font: 'Impact',
    },
    {
      txt: '',
      size: 20,
      align: 'center',
      color: 'red',
      font: 'Impact',
    },
    {
      txt: '',
      size: 20,
      align: 'center',
      color: 'red',
      font: 'Impact',
    },
  ],
}

function getImages() {
  return gImgs
}

function getMeme() {
  return gMeme
}

function setLineTxt(newTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
}
function addEmojiToTwxt(emoji) {
  gMeme.lines[gMeme.selectedLineIdx].txt += emoji
}

function setcolor(meme, newColor) {
  meme.lines[meme.selectedLineIdx].color = newColor
}

function setFont(num) {
  gMeme.lines[gMeme.selectedLineIdx].size += num
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx++
  }
}

function setCoords(idx) {
  switch (idx) {
    case 0:
      return { x: 150, y: 50 }
    case 1:
      return { x: 150, y: 200 }
    default:
      return { x: 150, y: 100 }
  }
}

function getImageById(imgId) {
  let img = gImgs.find((img) => img.id === imgId)
  return img
}

function drawText(text, idx) {
  gCtx.lineWidth = 2

  gCtx.strokeStyle = `${gMeme.lines[idx].color}`
  gCtx.fillStyle = 'yellow'
  gCtx.font = `${gMeme.lines[idx].size}px ${gMeme.lines[idx].font}`

  gCtx.textAlign = gMeme.lines[idx].align

  gCtx.textBaseline = 'middle'
  const { x, y } = setCoords(idx)

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}
function deleteLine() {
  gMeme.lines[gMeme.selectedLineIdx].txt = ''
}
function setAlign(letter) {
  if (letter === 'L') gMeme.lines[gMeme.selectedLineIdx].align = 'left'
  else if (letter === 'C') gMeme.lines[gMeme.selectedLineIdx].align = 'center'
  else if (letter === 'R') gMeme.lines[gMeme.selectedLineIdx].align = 'right'
  return gMeme
}
function FontKindChanged(el) {
  if (el === 'Impact') gMeme.lines[gMeme.selectedLineIdx].font = 'Impact'
  else if (el === 'Arial') gMeme.lines[gMeme.selectedLineIdx].font = 'Arial'
  else if (el === 'Verdana') gMeme.lines[gMeme.selectedLineIdx].font = 'Verdana'
}
