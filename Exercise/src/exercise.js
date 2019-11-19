//packages
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyparse = require('body-parser')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')
// const notes = require('./Notes')

const app = express()

//Define Path of File
const publicdirectorypath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../templates/views')
const partialpath = path.join(__dirname, '../templates/partials')
const urlencodedParser = bodyparse.urlencoded({ extended: false })

//setup view location
app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(partialpath)

//setup of static assets
app.use(express.static(publicdirectorypath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        age: 29
    })
    //res.send('<h1>Home Page of Exercise</h1>')
})

app.get('/calculator', (req, res) => {
    res.render('calculator', {
        title: 'Calculator',
        age: 29
    })

    // res.send({
    //     title : 'calculator',
    //     age:29
    // })
})
app.get('/calculate', (req, res) => {
    var num1 = req.query.number1;
    var num2 = req.query.number2;
    var result;
    if (req.query.action == 'Add') {
        result = Number(num1) + Number(num2)
    }
    if (req.query.action == 'Sub') {
        result = Number(num1) - Number(num2)
    }
    if (req.query.action == 'mul') {
        result = Number(num1) * Number(num2)
    }
    if (req.query.action == 'div') {
        result = Number(num1) / Number(num2)
    }
    res.render('calculator', { result })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }
        forcast(longitude, latitude, location, (error, forcastdata) => {
            if (error) {
                return res.send({ error })
            }
            console.log(location + ' :: ', forcastdata)
            res.render('weather', {
                forecast: forcastdata,
                location: location
            })
            //   res.send({
            //       forecast: forcastdata,
            //       location: location
            //   })
        })
    })
    // res.send({
    //     address: req.query.address,
    //     forecast: 'it is snowing',
    //     location: 'Ahmedabad'
    // })
})

app.get('/student', (req, res) => {
    res.render('student', {
        title: 'Student',
        age: 29
    })
})

app.get('/saving', (req, res) => {
    var name = req.query.name;
    var num = req.query.number;
    var result;
    if (req.query.action == 'save') {

    }
    res.render('calculator', { result })
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log('server is up')
})