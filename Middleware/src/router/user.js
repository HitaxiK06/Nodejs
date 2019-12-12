const express = require('express')
const User = require('../models/users')

const router = new express.Router()

//login functionality
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})


//Create user 
router.post('/users', (req, res) => {

    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get all users
router.get('/users', (req, res) => {

    User.find({}).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get User by ID
router.get('/users/:id', async (req, res) => {

    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

//updaate User by ID
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'age', 'email', 'password']
    const isvalidoperation = updates.every((update) => allowedUpdate.includes(update))

    if (!isvalidoperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }
    try {
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) //runValidators do validation

        const user = await User.findById(req.params.id)
        updates.forEach((update) =>
            user[update] = req.body[update]
        )
        await user.save()
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Delete User by ID
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router