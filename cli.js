#!/usr/bin/env node

'use strict'
const meow = require('meow')
const launchpadMarquee = require('./')

const cli = meow(`
  Usage
    $ launchpad-marquee <input>

  Examples
    $ launchpad-marquee "9876543210"
`)

launchpadMarquee(cli.input[0])
