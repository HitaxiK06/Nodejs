const validator = require('validator')
const chalk = require('chalk')

console.log(chalk.blue.inverse.bold(validator.isEmail('Hitaxi.Kachhadiya@synvergetech.com')))
console.log(chalk.red.inverse.bold(validator.isEmail('Hitaxi.Kachhadiya.com')))