'use strict'

var gCurrLang = 'en'

var gTrans = {
  upload: {
    en: ' Upload Image from Canvas',
    he: 'תעלה תמונה מ קאנבאס',
  },
  'text-placeholder': {
    en: ' text',
    he: 'טקסט',
  },

  'font-size-placeholder': {
    en: ' font size',
    he: 'גודל טקסט',
  },
}

function getTrans(transKey) {
  // DONE: if key is unknown return 'UNKNOWN'
  const transMap = gTrans[transKey]
  if (!transMap) return 'UNKNOWN'
  // DONE: get from gTrans
  let translation = transMap[gCurrLang]
  // DONE: If translation not found - use english
  if (!translation) translation = transMap.en
  return translation
}

function doTrans() {
  // DONE:
  var els = document.querySelectorAll('[data-trans]')
  els.forEach((el) => {
    const transKey = el.dataset.trans
    const translation = getTrans(transKey)
    if (el.placeholder) el.placeholder = translation
    else el.innerText = translation
  })
}

function setLang(lang) {
  gCurrLang = lang
}
