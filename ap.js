const tessel = require('tessel')
const os = require('os')

const create = () => {
  tessel.network.ap.create({
    ssid: os.hostname() || 'DecentPickles',
  }, function (error, settings) {
    if (error) {
      console.error(error)
    }
    console.log('\x1b[35mINFO \x1b[0maccess point created\n\x1b[35mINFO \x1b[0mssid: %s\n\x1b[35mINFO \x1b[0mip: %s', settings.ssid, settings.ip);
  })
}

module.exports = { create }
