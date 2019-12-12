const express= require('express')
const Task = require('../models/task')

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

//updaate User by ID
router.patch('/task/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['Description', 'Update']
    const isvalidoperation = updates.every((update) => allowedUpdate.includes(update))

    if (!isvalidoperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }
    try {
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) //runValidators do validation

        const task = await Task.findById(req.params.id)
        updates.forEach((update)=>
            task[update]=req.body[update]
        )
        await task.save()
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Delete Task By ID
router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
res.status(500).send(e)
    }
})
module.exports = router