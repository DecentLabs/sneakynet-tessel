const ap = require('./ap')
const server = require('./server')

// launch tessel access point
ap.create()
server.listen()
