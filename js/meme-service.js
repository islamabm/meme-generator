let gElCanvas
let gCtx

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'img/2.jpg', keywords: ['hurry', 'cat'] },
  { id: 3, url: 'img/3.jpg', keywords: ['hurry', 'cat'] },
  { id: 4, url: 'img/4.jpg', keywords: ['hurry', 'cat'] },
  { id: 5, url: 'img/5.jpg', keywords: ['hurry', 'cat'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
    {
      txt: 'hello',
      size: 20,
      align: 'left',
      color: 'red',
    },
    {
      txt: 'aloooo',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function getImages() {
  return gImgs
}

function getMeme() {
  return gMeme
}

// setLineTxt(gMeme)
function setLineTxt(meme, newTxt) {
  meme.lines[meme.selectedLineIdx].txt = newTxt
}

function addLine(meme, newTxt) {
  meme.lines[gMeme.selectedLineIdx].txt = newTxt
}

function setcolor(meme, newColor) {
  meme.lines[meme.selectedLineIdx].color = newColor
}

function setFont(meme, newFont) {
  meme.lines[meme.selectedLineIdx].size = newFont
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function switchLine() {
  gMeme.selectedLineIdx++
}

function getImageById(imgId) {
  let img = gImgs.find((img) => img.id === imgId)
  return img
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = `${gMeme.lines[gMeme.selectedLineIdx].color}`
  // gCtx.fillStyle = 'yellow'
  gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
  // gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}
