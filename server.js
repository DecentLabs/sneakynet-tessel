const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const os = require('os')

const Datastore = require('nedb')
const db = new Datastore({ filename: 'db/messages.jsonl' })

db.loadDatabase(function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('\x1b[35mINFO \x1b[0mdb connected')
  }
})

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/messages', (req, res) => {
  db.find({}, function (err, docs) {
    console.log(docs)
    res.json(docs)
  })
})

app.post('/api/messages', (req, res) => {
  const payload = Object.assign({}, req.body, {'source_node': os.hostname()})
  db.insert(payload, function (err, newDocs) {
    if (err) {
      console.error(err)
    } else {
      console.log('\x1b[35mINFO \x1b[0message saved: ', newDocs)
      res.json(newDocs)
    }
  })
})

const listen = (port) => {
  app.listen(port || 3000, () => {
    console.log('\x1b[35mINFO \x1b[0mserver listening\n\x1b[35mINFO \x1b[0mhttp://artisanalpickles.local:3000')
  })
}

module.exports = { listen }
