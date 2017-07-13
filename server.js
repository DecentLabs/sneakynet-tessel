const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/messages', (req, res) => {
  const msg = [{msg: "hi"}]
  res.json(msg)
})

const listen = (port) => {
  app.listen(port || 3000, () => {
    console.log('\x1b[35mINFO \x1b[0mserver listening\n\x1b[35mINFO \x1b[0mhttp://artisanalpickles.local:3000')
  })
}

module.exports = { listen }
