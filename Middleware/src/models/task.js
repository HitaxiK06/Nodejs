const mongoose = require('mongoose')

const Task = mongoose.model('tasks', {
    Description: {
        type: String,
        required: true
    },
    Update: {
        type: String,
        required: true
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