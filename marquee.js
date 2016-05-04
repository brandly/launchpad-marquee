'use strict'

const chars = require('./chars')

function getCharacter (char) {
  return chars[char] || chars[' ']
}

function marquee (text, render) {
  text = '  ' + text

  const padding = [0]
  const marqueeRows = [ [], [], [], [], [], [], [], [] ]

  const marqueeOutput = text.toUpperCase().split('').map(i => getCharacter(i)).reduce((output, char) => {
    output.forEach((list, index) => {
      output[index] = list.concat(char[index]).concat(padding)
    })
    return output
  }, marqueeRows)

  const displayWidth = 8
  const marqueeWidth = marqueeRows[0].length // any index should do

  let index = 0
  const marqueeInterval = setInterval(() => {
    render(marqueeOutput.map((row) => row.slice(index, index + displayWidth)))

    index = (index + 1) % marqueeWidth
  }, 67)

  return function stopMarquee () {
    global.clearInterval(marqueeInterval)
  }
}

module.exports = marquee
