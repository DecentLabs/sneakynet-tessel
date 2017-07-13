const express = require('express')
const path = require('path')
const ap = require('./ap')

// launch tessel access point
ap.create()

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, function () {
  console.log('\x1b[35mINFO \x1b[0mserver listening\n\x1b[35mINFO \x1b[0mhttp://artisanalpickles.local:3000')
})
