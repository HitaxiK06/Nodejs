const fs= require('fs')
const Trialvar= require('./Trial.js')

console.log("second load :-filestream.js");
//console.log(Trialvar);
const book={
    Title:"Ego is Enemy",
    Author:"Ryan Holiday"
}
const abc=Trialvar
console.log(abc)
const bookJson=JSON.stringify(book)
fs.writeFileSync('1-JSON.json',bookJson)

const databuffer=fs.readFileSync('1-JSON.json')
const data=databuffer.toString()
const author=JSON.parse(data).Author
console.log("read author name from json file :: "+author)