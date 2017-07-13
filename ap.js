const tessel = require('tessel')

const create = (ssid) => {
  tessel.network.ap.create({
    ssid: ssid || 'pickles',
  }, function (error, settings) {
    if (error) {
      console.error(error)
    }
    console.log('\x1b[35mINFO \x1b[0maccess point created\n\x1b[35mINFO \x1b[0mssid: %s\n\x1b[35mINFO \x1b[0mip: %s', settings.ssid, settings.ip);
  });
}

module.exports = {create}
