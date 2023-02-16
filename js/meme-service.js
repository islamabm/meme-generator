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
      align: 'left',
      color: 'red',
    },
    {
      txt: '',
      size: 20,
      align: 'left',
      color: 'red',
    },
    {
      txt: '',
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
function setLineTxt(newTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = newTxt
}
function addEmojiToTwxt(emoji) {
  gMeme.lines[gMeme.selectedLineIdx].txt += emoji
}
// function addLine(meme, newTxt) {
//   meme.lines[gMeme.selectedLineIdx].txt = newTxt
// }

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
  // gCtx.strokeStyle = ''
  gCtx.strokeStyle = `${gMeme.lines[gMeme.selectedLineIdx].color}`
  gCtx.fillStyle = 'yellow'
  gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
  // gCtx.font = ''
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  const { x, y } = setCoords(idx)

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}
