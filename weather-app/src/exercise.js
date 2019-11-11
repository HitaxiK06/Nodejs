//packages
const express= require('express')
const path = require('path')
const hbs =require('hbs')
const bodyparse = require('body-parser')

const app = express()

//Define Path of File
const publicdirectorypath = path.join(__dirname,'../public')
const viewpath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partials')
const urlencodedParser = bodyparse.urlencoded({ extended: false })

//setup view location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup of static assets
app.use(express.static(publicdirectorypath))


app.get('',(req,res)=>{
    res.render('index',{
        title : 'Home',
        age:29
    })
    //res.send('<h1>Home Page of Exercise</h1>')
})
app.get('/calculator',(req,res)=>{
    res.render('calculator',{
        title : 'Calculator',
        age:29
    })
    
    // res.send({
    //     title : 'calculator',
    //     age:29
    // })
})
app.post('/calculate',(req,res)=>{
    var a = req.body.number1;
    var b =req.body.number2;
    var c=a+b;
    res.render('calculator',c)
})
app.get('/student',(req,res)=>{
    res.render('student',{
        title : 'Student',
        age:29
    })
})
app.get('/calculate',urlencodedParser,(req,res)=>{
    console.log(req.query.number1)
    res.send(req.query.number1)
})
app.get('*',(req,res)=>{
    res.render('404')
})
app.listen(3000,()=>{
    console.log('server is up')
})