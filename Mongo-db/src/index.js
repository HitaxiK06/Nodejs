const express = require('express')
require('./db/connection_mongoose')
const User = require('./models/users')
const app = express()

const port = process.env.port || 3000
app.use(express.json())

//Create user 
app.post('/users', (req, res) => {
   
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get all users
app.get('/users', (req, res) => {

    User.find({}).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get User by ID
app.get('/users/:id', (req, res) => {

    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Serve is up..!')
})