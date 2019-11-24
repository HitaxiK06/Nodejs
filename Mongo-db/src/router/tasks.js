const express= require('express')
const Task = require('./models/task')

const router = new express.Router()
//Create task 
router.post('/task', (req, res) => {

    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get all tasks
router.get('/task', (req, res) => {

    Task.find({}).then((task) => {
        res.send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

//Get Task by ID
router.get('/task/:id', (req, res) => {

    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

module.exports = router