const request = require('request')

const forcast = (longitude, latitude, location, callback) => {
  const url = 'https://api.darksky.net/forecast/6f02e60e249e5e921d56cbcbc8a4cfaf/' + longitude + ',' + latitude + ''

  request({ url, json: true }, function (error, response) {
    if (error) {
      callback('error:', error);
    }
    else if (response.body.error) {
      callback('unable to find location');
    }
    else {
      //console.log('statusCode:', response ); 
      callback(undefined, response.body.daily.data[0].summary + 'Current Temp is: ' + response.body.currently.temperature + ' and chances of rain is: ' + response.body.currently.precipProbability);
    }
  });
}

module.exports = forcast