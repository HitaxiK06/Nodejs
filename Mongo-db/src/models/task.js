const mongoose = require('mongoose')
const validator = require('validator')


const Task = mongoose.model('Task-Manager', {
    Description: {
        type: String,
        required: true
    },
    Update: {
        type: String
    }
})


module.exports = Task

// const task = new Task({
//     Description: 'Trial11',
//     Update: 'In Progress', 
//     name: 'Hirvita'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })