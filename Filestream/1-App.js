
const fs = require('fs')
const text = require('./text.js')


console.log('App.js')
fs.writeFileSync('app.txt', 'Hello')

console.log(process.argv)