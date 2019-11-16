const request = require('request')
const geocode = require('./utils/geocode')
// const url='https://api.darksky.net/forecast/6f02e60e249e5e921d56cbcbc8a4cfaf/37.8267,-122.4233'

// request({url: url, json: true}, function (error, response) {
//   if(error){
//     console.log('error:', error);
//   }
//   else if(response.body.error){
//     console.log('unable to find location');
//   }
//   else{
//   console.log('statusCode:', response ); 
//   console.log('body:',response.body.currently); 
//   console.log(response.body.daily.data[0].summary +'current Temp: ' + response.body.currently.temperature + ' chances of rain: '+response.body.currently.precipProbability);
// }});

// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGl0YXhpayIsImEiOiJjazMxa2RjYTgwOTh6M25vMjN5ZWRpamNrIn0.65OVXM56uhIUTZ4la2qvIQ'

// request({url: geocodeurl, json: true}, function (error, response) {
//   if(error){
//     console.log('error:', error);
//   }
//   else if(response.body.features.length === 0){
//     console.log('unable to find location.');
//   }
//   else{
//   const latitude = response.body.features[0].center[0]
//   const longitude = response.body.features[0].center[1]
//   console.log(latitude , longitude)
// }});

// const geocode =(address,callback)=>{
//   const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGl0YXhpayIsImEiOiJjazMxa2RjYTgwOTh6M25vMjN5ZWRpamNrIn0.65OVXM56uhIUTZ4la2qvIQ'

// request({url: geocodeurl, json: true}, function (error, response) {
//   if(error){
//    callback('unable to find location.',undefined);
//   }
//   else if(response.body.features.length === 0){
//     callback('unable to find location.',undefined);
//   }
//   else{
//   const latitude = response.body.features[0].center[0]
//   const longitude = response.body.features[0].center[1]
//   callback(undefined,{
//     latitude: latitude ,
//     longitude: longitude})
// }});
//   }
  
  geocode('Boston',(error,data)=>{
    console.log('Error:' , error)
      console.log('Data:',data)
  })

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  // console.log('body:', body); // Print the HTML for the Google homepage.
// });