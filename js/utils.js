'use strict'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getName() {
  const words = [
    'puki love you',
    'shuki alooo',
    'luki how arre you',
    'popo are you good',
  ]
  var wordIdx = getRandomIntInclusive(0, words.length - 1)
  var word = words[wordIdx]
  return word
}

function getRandomFont() {
  const fonts = ['Impact', 'Arial', 'Verdana']
  var wordIdx = getRandomIntInclusive(0, fonts.length - 1)
  var font = fonts[wordIdx]
  return font
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}

function setQueryParams(newParams) {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  for (var paramName in newParams) {
    const paramValue = newParams[paramName]
    params.set(paramName, paramValue) // used to update an existing query string parameter or add a new one if it doesn't exist.
  }

  url.search = params.toString()
  window.history.pushState({ path: url.href }, '', url.href) //modify the URL of the current page without reloading the page
}

function deleteQueryParam(key) {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  params.delete(key)
  url.search = params.toString()

  window.history.pushState({ path: url.href }, '', url.href)
}

function getValFromParam(key) {
  const queryStringParams = new URLSearchParams(window.location.search)
  return queryStringParams.get(key)
}
