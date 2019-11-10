//packages
const express= require('express')
const path = require('path')

//declaration
const app = express()
const publicdirectorypath = path.join(__dirname,'../public')
const viewpath = path.join(__dirname,'../templates')
app.set('view engine','hbs')
app.set('views',viewpath)
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
app.get('/student',(req,res)=>{
    res.render('student',{
        title : 'Student',
        age:29
    })
})

app.get('*',(req,res)=>{
    res.render('404')
})
app.listen(3000,()=>{
    console.log('server is up')
})