const ap = require('./ap')
const server = require('./server')
const tessel = require('tessel')

// Turn one of the LEDs on to start.
tessel.led[2].on()

// launch tessel access point
ap.create()

// Blink!
setInterval(() => {
  tessel.led[2].toggle()
}, 100)

// launch server
server.listen()
