const request = require('request')


const geocode = (address, callback) => {
  const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGl0YXhpayIsImEiOiJjazMxa2RjYTgwOTh6M25vMjN5ZWRpamNrIn0.65OVXM56uhIUTZ4la2qvIQ'

  request({ url: geocodeurl, json: true }, function (error, response) {
    if (error) {
      callback('unable to find location.', undefined);
    }
    else if (response.body.features.length === 0) {
      callback('unable to find location.', undefined);
    }
    else {
      const latitude = response.body.features[0].center[0]
      const longitude = response.body.features[0].center[1]
      const location = response.body.features[0].place_name
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: location
      })
    }
  });
}
module.exports = geocode