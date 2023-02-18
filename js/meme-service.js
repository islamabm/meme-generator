let gElCanvas
let gCtx

gFont1 = 0
gFont2 = 0
gFont3 = 0
let gDiff = 5
let gCurrLine = 0
const PAGE_SIZE = 3
var gPageIdx = 0
let gEmojis = ['😃', '🤣', '😋', '😎', '😍', '😘', '🥰', '😆', '😗', '😉', '😀']
var gFilterBy = { word: '' }
var gKeywordSearchCountMap = { actor: 6, animals: 2, kids: 4 }

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['actor'] },
  { id: 2, url: 'img/2.jpg', keywords: ['animals'] },
  { id: 3, url: 'img/3.jpg', keywords: ['kids'] },
  { id: 4, url: 'img/4.jpg', keywords: ['animals'] },
  { id: 5, url: 'img/5.jpg', keywords: ['kids'] },
  { id: 6, url: 'img/6.jpg', keywords: ['actor'] },
  { id: 7, url: 'img/7.jpg', keywords: ['kids'] },
  { id: 8, url: 'img/8.jpg', keywords: ['actor'] },
  { id: 9, url: 'img/9.jpg', keywords: ['kids'] },
  { id: 10, url: 'img/10.jpg', keywords: ['actor'] },
  { id: 11, url: 'img/11jpg', keywords: ['actor'] },
  { id: 12, url: 'img/12.jpg', keywords: ['actor'] },
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

function getFilterImages() {
  var images = gImgs.filter((img) => img.keywords[0].includes(gFilterBy.word))
  return images
}

function getImages() {
  return gImgs
}

function setFilterBy(filterBy) {
  if (filterBy.word !== undefined) gFilterBy.word = filterBy.word
  return gFilterBy
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
  gDiff += num
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
  gCurrLine++
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
  // gCtx.fillStyle = 'yellow'
  gCtx.font = `${gMeme.lines[idx].size}px ${gMeme.lines[idx].font}`

  gCtx.textAlign = gMeme.lines[idx].align

  // gCtx.textBaseline = 'middle'
  const { x, y } = setCoords(idx)

  gCtx.strokeText(text, x, y)
  let elTextInput = document.querySelector('input[name="image-text"]')

  if (elTextInput.value && idx === gCurrLine) {
    drawRect(
      x - gCtx.measureText(text).width / 2,
      y - (17 + gDiff),
      gCtx.measureText(text).width,
      20 + gDiff
    )
  }
}

function drawRect(x, y, z, w) {
  gCtx.strokeStyle = 'white'
  gCtx.strokeRect(x, y, z, w)
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

function saveMeme() {
  const meme = gElCanvas.toDataURL()
  let memes = loadFromStorage('memeDB')
  !memes ? (memes = [meme]) : memes.push(meme)
  saveToStorage('memeDB', memes)
}

function nextPage(num) {
  gPageIdx += num
  if (gPageIdx * PAGE_SIZE >= gEmojis.length) {
    gPageIdx = 0
  }
}

function getSizeOfImojisPages() {
  var size = Math.ceil(gEmojis.length / PAGE_SIZE)
  return size
}

function getImojes() {
  const startIdx = gPageIdx * PAGE_SIZE
  return gEmojis.slice(startIdx, startIdx + 3)
}

function changePage(num) {
  gPageIdx += num
  if (gPageIdx * PAGE_SIZE + PAGE_SIZE > gEmojis.length) {
    disabledNextBtn(true)
  } else if (!gPageIdx) disabledPrevBtn(true)
  else {
    disabledNextBtn(false)
    disabledPrevBtn(false)
  }
}

function disabledNextBtn(param) {
  var elBtn = document.querySelector('.next')
  elBtn.disabled = param
}

function disabledPrevBtn(param) {
  var elBtn = document.querySelector('.prev')
  elBtn.disabled = param
}
