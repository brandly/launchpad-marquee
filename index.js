'use strict'
const MidiInput = require('midi').input
const launchpadder = require('launchpadder')
const Launchpad = launchpadder.Launchpad
const marquee = require('./marquee')

function findLaunchpadPort (input) {
  for (var i = 0; i < input.getPortCount(); i++) {
    if (input.getPortName(0) === 'Launchpad S') {
      return i
    }
  }
  return null
}

const input = new MidiInput()
const midiInputCount = input.getPortCount()

if (!midiInputCount) {
  throw new Error('Unable to find MIDI input port')
}

const port = findLaunchpadPort(input)

if (port === null) {
  throw new Error('Unable to find Launchpad S')
}

const pad = new Launchpad(port)
const color = launchpadder.Color.RED

module.exports = function launchpadMarquee (params) {
  return marquee(params, (marquee) => {
    marquee.forEach((row, y) => {
      row.forEach((light, x) => {
        const button = pad.getButton(x, y)
        light === 1 ? button.light(color) : button.dark()
      })
    })
  })
}
