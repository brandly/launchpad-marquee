#!/usr/bin/env node

'use strict'
const meow = require('meow')
const launchpadMarquee = require('./')

const cli = meow(`
  Usage
    $ foo <input>

  Options
    -r, --rainbow  Include a rainbow

  Examples
    $ launchpad-marquee "9876543210"
`)

launchpadMarquee(cli.input[0])
