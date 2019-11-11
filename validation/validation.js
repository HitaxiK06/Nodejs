const chalk =require('chalk')
const validator =require('validator')

console.log("Email Validation ::hitaxi@gmail.com :- "+chalk.green(validator.isEmail('hitaxi@gmail.com')))
console.log("Email Validation :: hitaxi.com:-"+chalk.red(validator.isEmail('hitaxi.com')))