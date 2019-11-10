const express= require('express')
const path = require('path')


const app = express()
const publicdirectorypath = path.join(__dirname,'../public')

app.use(express.static(publicdirectorypath))
app.get('',(req,res)=>{
    res.send('<h1>Home Page of Exercise</h1>')
})
app.get('/calculator',(req,res)=>{
    res.send({
        name : 'Hitaxi',
        age:29
    })
})
app.get('/student',(req,res)=>{
    res.send('Crud Oper')
})
app.listen(3000,()=>{
    console.log('server is up')
})