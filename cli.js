#!/usr/bin/env node

'use strict'
const meow = require('meow')
const launchpadMarquee = require('./')

const cli = meow(`
  Usage
    $ launchpad-marquee <input>
    $ launchpad-marquee --interval 200 <input>

  Options
    -i, --interval Set the scrolling interval

  Examples
    $ launchpad-marquee "9876543210"
`)

launchpadMarquee({
  text: cli.input[0],
  interval: cli.flags.i || cli.flags.interval
})
