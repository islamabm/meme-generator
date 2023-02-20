'use strict'
renderGallery()

function renderGallery() {
  if (!getFilterImages() || !getFilterImages().length) {
    const images = getImages()
    let strHTMLs = images.map(
      (img, idx) =>
        `<img class="gallery-img" src="img/${
          idx + 1
        }.jpg" onclick="onImgSelect(${img.id})" />`
    )

    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
  } else {
    const images = getFilterImages()
    let strHTMLs = images.map(
      (img) =>
        `<img class="gallery-img" src="img/${img.id}.jpg" onclick="onImgSelect(${img.id})" />`
    )

    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
  }
}

function onSetFilterBy(filterBy) {
  console.log(filterBy)
  filterBy = setFilterBy(filterBy)
  renderGallery()

  if (filterBy.word === 'actor') {
    var elSpan = document.querySelector('.span1')
    gFont1 += 15
    elSpan.style.fontSize = gFont1 + 'px'
  }
  if (filterBy.word === 'animals') {
    var elSpan = document.querySelector('.span2')
    gFont2 += 15
    elSpan.style.fontSize = gFont2 + 'px'
  }
  if (filterBy.word === 'kids') {
    var elSpan = document.querySelector('.span3')
    gFont3 += 15
    elSpan.style.fontSize = gFont3 + 'px'
  }
}

function onImgSelect(id) {
  showCanvasPage()

  setImg(id)
  renderMeme()
  document.querySelector('.filter-vendor-select').classList.add('hidden')
}

function onFlexBtnClicke() {
  showCanvasPage()

  let randomIdx = getRandomIntInclusive(0, gImgs.length - 1)

  setImg(randomIdx)

  renderMeme()
  // document.querySelector('.switch-lang').classList.add('hidden')
}

function onToggleMenu() {
  document.body.classList.toggle('menu-open')
}

function renderSavedMemes() {
  let memes = loadFromStorage('memeDB')
  let strHTMLs = memes.map((meme) => `<img class="gallery-img" src="${meme}"/>`)

  document.querySelector('.memes-gallery').innerHTML = strHTMLs.join('')
}

function showCanvasPage() {
  document.querySelector('.flex-btn').classList.add('hidden')
  document.querySelector('.filter-vendor-select').classList.add('hidden')
  document.querySelector('.filters-keys').classList.add('hidden')
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.memes-gallery').classList.add('hidden')
  document.querySelector('.canvas-page').classList.remove('hidden')
}

// function onMemesClicked() {
//   removeGalleryBtn()
//   document.querySelector('.gallery-container').classList.add('hidden')
//   document.querySelector('.canvas-page').classList.add('hidden')
//   document.querySelector('.canvas-page').classList.remove('canvas-page')
//   document.querySelector('.memes-gallery').classList.remove('hidden')
//   renderSavedMemes()
// }

function onGalleryClicked() {
  // document.querySelector('.memes-gallery').classList.add('hidden')
  document.querySelector('.canvas-page').classList.add('hidden')
  document.querySelector('.canvas-page').classList.remove('canvas-page')
  addGalleryBtns()
  document.querySelector('.gallery-container').classList.remove('hidden')
  renderGallery()
}

function removeGalleryBtn() {
  // document.querySelector('.switch-lang').classList.add('hidden')
  document.querySelector('.flex-btn').classList.add('hidden')
  document.querySelector('.filters-keys').classList.add('hidden')
  document.querySelector('.filter-vendor-select').classList.add('hidden')
}

function addGalleryBtns() {
  document.querySelector('.flex-btn').classList.remove('hidden')
  document.querySelector('.filters-keys').classList.remove('hidden')
  document.querySelector('.filter-vendor-select').classList.remove('hidden')
}
