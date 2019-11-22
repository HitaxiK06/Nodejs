const express = require('express')
require('./db/connection_mongoose')
const User = require('./models/users')
const app = express()

const port = process.env.port || 3000
app.use(express.json())

app.post('/users', (req, res) => {
    // console.log(req.body)
    // res.send('Trial')
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Serve is up..!')
})