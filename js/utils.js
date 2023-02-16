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
